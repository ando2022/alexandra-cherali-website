// Email notification utilities using Resend
// Get API key from environment variable

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') || 'alexandra@example.com';

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}

async function sendEmail(options: SendEmailOptions) {
  if (!RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured, skipping email notification');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Alexandra Cherali <noreply@resend.dev>', // Update with your verified domain
        to: Array.isArray(options.to) ? options.to : [options.to],
        subject: options.subject,
        html: options.html,
        reply_to: options.replyTo,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', data);
      return { success: false, error: data };
    }

    console.log('Email sent successfully:', data.id);
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

// Email template for new booking notification to admin
export function getBookingNotificationEmail(booking: any) {
  const sessionType = booking.sessionType === 'online' ? 'Online Session' : 'Onsite in Zurich';
  
  return {
    to: ADMIN_EMAIL,
    subject: `New Booking Request - ${booking.name}`,
    replyTo: booking.email,
    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0891b2 0%, #f87171 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
    .detail { margin: 10px 0; padding: 12px; background: white; border-radius: 6px; }
    .label { font-weight: 600; color: #0891b2; }
    .button { display: inline-block; padding: 12px 24px; background: #0891b2; color: white; text-decoration: none; border-radius: 6px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">New Booking Request 📅</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">You have a new art education session request</p>
    </div>
    <div class="content">
      <div class="detail">
        <span class="label">Client Name:</span><br/>
        ${booking.name}
      </div>
      
      <div class="detail">
        <span class="label">Email:</span><br/>
        <a href="mailto:${booking.email}">${booking.email}</a>
      </div>
      
      ${booking.phone ? `
      <div class="detail">
        <span class="label">Phone:</span><br/>
        ${booking.phone}
      </div>
      ` : ''}
      
      <div class="detail">
        <span class="label">Session Type:</span><br/>
        ${sessionType}
      </div>
      
      <div class="detail">
        <span class="label">Date & Time:</span><br/>
        ${new Date(booking.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}<br/>
        ${booking.time}
      </div>
      
      ${booking.message ? `
      <div class="detail">
        <span class="label">Message:</span><br/>
        ${booking.message}
      </div>
      ` : ''}
      
      ${booking.calendarEventLink ? `
      <a href="${booking.calendarEventLink}" class="button">View in Google Calendar</a>
      ` : ''}
      
      <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
        This booking has been automatically added to your calendar.
        ${booking.sessionType === 'online' ? 'A Google Meet link has been created for this online session.' : ''}
      </p>
    </div>
  </div>
</body>
</html>
    `.trim(),
  };
}

// Email template for contact form notification
export function getContactNotificationEmail(contact: any) {
  return {
    to: ADMIN_EMAIL,
    subject: `New Contact Message - ${contact.subject}`,
    replyTo: contact.email,
    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0891b2 0%, #f87171 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
    .detail { margin: 10px 0; padding: 12px; background: white; border-radius: 6px; }
    .label { font-weight: 600; color: #0891b2; }
    .message { white-space: pre-wrap; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">New Contact Message 💬</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone sent you a message from your website</p>
    </div>
    <div class="content">
      <div class="detail">
        <span class="label">From:</span><br/>
        ${contact.name}
      </div>
      
      <div class="detail">
        <span class="label">Email:</span><br/>
        <a href="mailto:${contact.email}">${contact.email}</a>
      </div>
      
      <div class="detail">
        <span class="label">Subject:</span><br/>
        ${contact.subject}
      </div>
      
      <div class="detail">
        <span class="label">Message:</span><br/>
        <div class="message">${contact.message}</div>
      </div>
      
      <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
        Reply directly to this email to respond to ${contact.name}.
      </p>
    </div>
  </div>
</body>
</html>
    `.trim(),
  };
}

// Email template for new subscriber notification
export function getSubscriberNotificationEmail(subscriber: any) {
  return {
    to: ADMIN_EMAIL,
    subject: 'New Newsletter Subscriber',
    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0891b2 0%, #f87171 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
    .detail { margin: 10px 0; padding: 12px; background: white; border-radius: 6px; }
    .label { font-weight: 600; color: #0891b2; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">New Newsletter Subscriber 📧</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone subscribed to your newsletter</p>
    </div>
    <div class="content">
      <div class="detail">
        <span class="label">Email:</span><br/>
        ${subscriber.email}
      </div>
      
      <div class="detail">
        <span class="label">Subscribed At:</span><br/>
        ${new Date(subscriber.subscribedAt).toLocaleString()}
      </div>
      
      <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
        This subscriber will receive updates when you publish new blog posts.
      </p>
    </div>
  </div>
</body>
</html>
    `.trim(),
  };
}

export { sendEmail };
