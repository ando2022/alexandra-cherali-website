import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { google } from 'npm:googleapis@140';
import * as kv from './kv_store.ts';
import { sendEmail, getBookingNotificationEmail, getContactNotificationEmail, getSubscriberNotificationEmail } from './email.ts';

const app = new Hono();

// Middleware
app.use('*', cors());
app.use('*', logger(console.log));

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// Initialize Google Calendar client
let calendarClient: any = null;
let calendarId: string | null = null;

function initializeGoogleCalendar() {
  try {
    const credentialsJson = Deno.env.get('GOOGLE_CALENDAR_CREDENTIALS');
    calendarId = Deno.env.get('GOOGLE_CALENDAR_ID');
    
    if (!credentialsJson || !calendarId) {
      console.warn('Google Calendar credentials not configured. Calendar integration disabled.');
      return null;
    }

    const credentials = JSON.parse(credentialsJson);
    
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    calendarClient = google.calendar({ version: 'v3', auth });
    console.log('Google Calendar initialized successfully');
    return calendarClient;
  } catch (error) {
    console.error('Failed to initialize Google Calendar:', error);
    return null;
  }
}

// Initialize on startup
initializeGoogleCalendar();

// Helper function to create a calendar event
async function createCalendarEvent(booking: any) {
  if (!calendarClient || !calendarId) {
    console.log('Calendar integration not configured, skipping event creation');
    return null;
  }

  try {
    // Parse the date and time
    const bookingDate = new Date(booking.date);
    const [startTime, endTimePart] = booking.time.split(' - ');
    const [startHour, startMinute] = startTime.split(':');
    
    // Create start date/time
    const startDateTime = new Date(bookingDate);
    startDateTime.setHours(parseInt(startHour), parseInt(startMinute), 0, 0);
    
    // Create end date/time (1 hour later)
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(startDateTime.getHours() + 1);

    const sessionTypeLabel = booking.sessionType === 'online' ? 'Online Session' : 'Onsite in Zurich';
    
    const event = {
      summary: `Art Education Session - ${booking.name}`,
      description: `
Session Type: ${sessionTypeLabel}
Client: ${booking.name}
Email: ${booking.email}
Phone: ${booking.phone || 'Not provided'}

Message from client:
${booking.message || 'No message provided'}

---
Booking ID: ${booking.id}
      `.trim(),
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'Europe/Zurich',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'Europe/Zurich',
      },
      attendees: [
        { email: booking.email, displayName: booking.name },
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 day before
          { method: 'popup', minutes: 60 }, // 1 hour before
        ],
      },
    };

    // Add conferencing for online sessions
    if (booking.sessionType === 'online') {
      event.conferenceData = {
        createRequest: {
          requestId: booking.id,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      };
    }

    const response = await calendarClient.events.insert({
      calendarId: calendarId,
      resource: event,
      conferenceDataVersion: booking.sessionType === 'online' ? 1 : 0,
      sendUpdates: 'all', // Send email invites to attendees
    });

    console.log('Calendar event created:', response.data.id);
    return response.data;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw error;
  }
}

// Root route
app.get('/', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString(), message: 'Server is running!' });
});

// Health check
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Submit a booking request
app.post('/bookings', async (c) => {
  try {
    const body = await c.req.json();
    const { date, time, sessionType, name, email, phone, message } = body;

    if (!date || !time || !sessionType || !name || !email) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    const bookingId = crypto.randomUUID();
    const booking = {
      id: bookingId,
      date,
      time,
      sessionType,
      name,
      email,
      phone: phone || '',
      message: message || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // Store booking in KV store
    await kv.set(`booking:${bookingId}`, booking);

    // Also add to a list of all bookings
    const allBookings = await kv.get('bookings:all') || [];
    allBookings.push(bookingId);
    await kv.set('bookings:all', allBookings);

    console.log('Booking created:', bookingId);

    // Create Google Calendar event
    let calendarEvent = null;
    try {
      calendarEvent = await createCalendarEvent(booking);
      if (calendarEvent) {
        // Store the calendar event ID with the booking
        booking.calendarEventId = calendarEvent.id;
        booking.calendarEventLink = calendarEvent.htmlLink;
        await kv.set(`booking:${bookingId}`, booking);
        console.log('Calendar event created and linked to booking');
      }
    } catch (calendarError) {
      console.error('Failed to create calendar event, but booking was saved:', calendarError);
      // Continue even if calendar creation fails
    }

    // Send email notification to admin
    try {
      const emailTemplate = getBookingNotificationEmail(booking);
      await sendEmail(emailTemplate);
      console.log('Booking notification email sent to admin');
    } catch (emailError) {
      console.error('Failed to send booking notification email:', emailError);
      // Continue even if email fails
    }

    return c.json({ 
      success: true, 
      bookingId,
      calendarEventCreated: !!calendarEvent,
      message: calendarEvent 
        ? 'Booking confirmed! A calendar invite has been sent to your email.' 
        : 'Booking request received. You will be contacted soon to confirm.'
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    return c.json({ error: 'Failed to create booking', details: error.message }, 500);
  }
});

// Get all bookings (for admin purposes)
app.get('/bookings', async (c) => {
  try {
    const bookingIds = await kv.get('bookings:all') || [];
    const bookings = [];

    for (const id of bookingIds) {
      const booking = await kv.get(`booking:${id}`);
      if (booking) {
        bookings.push(booking);
      }
    }

    return c.json({ bookings });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return c.json({ error: 'Failed to fetch bookings', details: error.message }, 500);
  }
});

// Subscribe to newsletter
app.post('/newsletter/subscribe', async (c) => {
  try {
    const body = await c.req.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return c.json({ error: 'Valid email is required' }, 400);
    }

    const subscriberId = crypto.randomUUID();
    const subscriber = {
      id: subscriberId,
      email,
      subscribedAt: new Date().toISOString(),
      active: true,
    };

    // Store subscriber
    await kv.set(`subscriber:${email}`, subscriber);

    // Add to subscribers list
    const allSubscribers = await kv.get('subscribers:all') || [];
    if (!allSubscribers.includes(email)) {
      allSubscribers.push(email);
      await kv.set('subscribers:all', allSubscribers);
    }

    console.log('New newsletter subscriber:', email);

    // Send email notification to admin
    try {
      const emailTemplate = getSubscriberNotificationEmail(subscriber);
      await sendEmail(emailTemplate);
      console.log('Subscriber notification email sent to admin');
    } catch (emailError) {
      console.error('Failed to send subscriber notification email:', emailError);
      // Continue even if email fails
    }

    return c.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter!' 
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return c.json({ error: 'Failed to subscribe', details: error.message }, 500);
  }
});

// Get all newsletter subscribers
app.get('/newsletter/subscribers', async (c) => {
  try {
    const subscriberEmails = await kv.get('subscribers:all') || [];
    const subscribers = [];

    for (const email of subscriberEmails) {
      const subscriber = await kv.get(`subscriber:${email}`);
      if (subscriber && subscriber.active) {
        subscribers.push(subscriber);
      }
    }

    return c.json({ subscribers, count: subscribers.length });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return c.json({ error: 'Failed to fetch subscribers', details: error.message }, 500);
  }
});

// Submit contact form
app.post('/contact', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return c.json({ error: 'All fields are required' }, 400);
    }

    const contactId = crypto.randomUUID();
    const contact = {
      id: contactId,
      name,
      email,
      subject,
      message,
      status: 'unread',
      createdAt: new Date().toISOString(),
    };

    // Store contact message
    await kv.set(`contact:${contactId}`, contact);

    // Add to contacts list
    const allContacts = await kv.get('contacts:all') || [];
    allContacts.push(contactId);
    await kv.set('contacts:all', allContacts);

    console.log('Contact form submission:', contactId);

    // Send email notification to admin
    try {
      const emailTemplate = getContactNotificationEmail(contact);
      await sendEmail(emailTemplate);
      console.log('Contact notification email sent to admin');
    } catch (emailError) {
      console.error('Failed to send contact notification email:', emailError);
      // Continue even if email fails
    }

    return c.json({ 
      success: true, 
      message: 'Message sent successfully. You will hear back soon!' 
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return c.json({ error: 'Failed to send message', details: error.message }, 500);
  }
});

// Get all contact messages
app.get('/contact', async (c) => {
  try {
    const contactIds = await kv.get('contacts:all') || [];
    const contacts = [];

    for (const id of contactIds) {
      const contact = await kv.get(`contact:${id}`);
      if (contact) {
        contacts.push(contact);
      }
    }

    return c.json({ contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return c.json({ error: 'Failed to fetch contacts', details: error.message }, 500);
  }
});

// Blog posts endpoints
app.get('/blog/posts', async (c) => {
  try {
    const postIds = await kv.get('blog:posts:all') || [];
    const posts = [];

    for (const id of postIds) {
      const post = await kv.get(`blog:post:${id}`);
      if (post && post.published) {
        posts.push(post);
      }
    }

    // Sort by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return c.json({ posts });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return c.json({ error: 'Failed to fetch posts', details: error.message }, 500);
  }
});

app.get('/blog/posts/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const post = await kv.get(`blog:post:${id}`);

    if (!post) {
      return c.json({ error: 'Post not found' }, 404);
    }

    return c.json({ post });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return c.json({ error: 'Failed to fetch post', details: error.message }, 500);
  }
});

Deno.serve(app.fetch);
