import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';

const app = new Hono();

app.use('*', cors());
app.use('*', logger(console.log));

// Health check
app.get('/', (c) => {
  return c.json({ 
    status: 'ok', 
    message: 'Booking & Contact function is working!', 
    endpoints: ['POST / - booking', 'POST /contact - contact form'],
    timestamp: new Date().toISOString() 
  });
});

// Booking endpoint (existing functionality)
app.post('/', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, date, time, sessionType, message } = body;

    if (!name || !email || !date || !time || !sessionType) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    const booking = {
      id: crypto.randomUUID(),
      name, email, date, time, sessionType, message,
      createdAt: new Date().toISOString(),
    };

    // Send email notification
    try {
      await sendBookingNotification(booking);
      console.log('✅ Booking notification email sent to admin');
    } catch (emailError) {
      console.error('❌ Failed to send booking notification email:', emailError);
    }

    return c.json({ 
      success: true, 
      message: 'Booking received successfully!', 
      data: booking, 
      timestamp: new Date().toISOString() 
    });
  } catch (error) {
    console.error('❌ Error processing booking:', error);
    return c.json({ 
      error: 'Failed to process booking', 
      details: error.message 
    }, 500);
  }
});

// Contact form endpoint (new functionality)
app.post('/contact', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return c.json({ 
        error: 'Missing required fields', 
        required: ['name', 'email', 'subject', 'message'],
        received: { name: !!name, email: !!email, subject: !!subject, message: !!message }
      }, 400);
    }

    // Create contact record
    const contact = {
      id: crypto.randomUUID(),
      name,
      email,
      subject,
      message,
      status: 'unread',
      createdAt: new Date().toISOString(),
    };

    console.log('📧 Contact form submission:', contact);

    // Send email notification to Alexandra
    try {
      await sendContactNotification(contact);
      console.log('✅ Contact notification email sent to cdrw1201@gmail.com');
    } catch (emailError) {
      console.error('❌ Failed to send contact notification email:', emailError);
    }

    return c.json({ 
      success: true, 
      message: 'Message sent successfully! Alexandra will get back to you soon.',
      contactId: contact.id,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    return c.json({ 
      error: 'Failed to process contact form', 
      details: error.message 
    }, 500);
  }
});

// Email notification function for bookings
async function sendBookingNotification(booking: any) {
  try {
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      console.warn('⚠️ RESEND_API_KEY not configured');
      return;
    }

    const emailData = {
      from: 'Alexandra Cherali <noreply@resend.dev>',
      to: ['mybestdayistoday@gmail.com'],
      subject: `New Booking Request - ${booking.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2;">New Art Education Session Booking</h2>
          <p>You have received a new booking request:</p>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Client Name:</strong> ${booking.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${booking.email}">${booking.email}</a></p>
            <p><strong>Date:</strong> ${booking.date}</p>
            <p><strong>Time:</strong> ${booking.time}</p>
            <p><strong>Session Type:</strong> ${booking.sessionType}</p>
            ${booking.message ? `<p><strong>Message:</strong> ${booking.message}</p>` : ''}
          </div>
          
          <p>Please respond to the client at <a href="mailto:${booking.email}">${booking.email}</a></p>
          
          <p style="color: #666; font-size: 12px;">
            Booking ID: ${booking.id}<br>
            Received: ${booking.createdAt}
          </p>
        </div>
      `
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      const errorResult = await response.json();
      throw new Error(`Email API error: ${errorResult.message}`);
    }

    return await response.json();
  } catch (error) {
    console.error('❌ Email sending error:', error);
    throw error;
  }
}

// Email notification function for contact forms
async function sendContactNotification(contact: any) {
  try {
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      console.warn('⚠️ RESEND_API_KEY not configured');
      return;
    }

    const emailData = {
      from: 'Alexandra Cherali Website <noreply@resend.dev>',
      to: ['mybestdayistoday@gmail.com'],
      subject: `New Contact Message: ${contact.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2;">New Contact Message</h2>
          <p>You have received a new message through your website:</p>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${contact.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
            <p><strong>Subject:</strong> ${contact.subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #0891b2;">
              ${contact.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p>Reply to: <a href="mailto:${contact.email}">${contact.email}</a></p>
          
          <p style="color: #666; font-size: 12px;">
            Contact ID: ${contact.id}<br>
            Received: ${contact.createdAt}
          </p>
        </div>
      `
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      const errorResult = await response.json();
      throw new Error(`Email API error: ${errorResult.message}`);
    }

    return await response.json();
  } catch (error) {
    console.error('❌ Email sending error:', error);
    throw error;
  }
}

Deno.serve(app.fetch);