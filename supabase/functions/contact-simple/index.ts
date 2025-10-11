import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';

const app = new Hono();

app.use('*', cors());
app.use('*', logger(console.log));

// Health check
app.get('/', (c) => {
  return c.json({ status: 'ok', message: 'Contact function is working!', timestamp: new Date().toISOString() });
});

// Contact form submission
app.post('/', async (c) => {
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
      const emailData = {
        from: 'Alexandra Cherali Website <noreply@resend.dev>',
        to: ['cdrw1201@gmail.com'],
        subject: `New Contact Message: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0891b2;">New Contact Message</h2>
            <p>You have received a new message through your website:</p>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #0891b2;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <p>Reply to: <a href="mailto:${email}">${email}</a></p>
            
            <p style="color: #666; font-size: 12px;">
              Contact ID: ${contact.id}<br>
              Received: ${contact.createdAt}
            </p>
          </div>
        `
      };

      // Get Resend API key from environment
      const resendApiKey = Deno.env.get('RESEND_API_KEY');
      
      if (resendApiKey) {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(emailData)
        });

        if (response.ok) {
          console.log('✅ Contact notification email sent to cdrw1201@gmail.com');
        } else {
          const errorResult = await response.json();
          console.error('❌ Failed to send contact notification email:', errorResult);
        }
      } else {
        console.warn('⚠️ RESEND_API_KEY not configured - email notification skipped');
      }

    } catch (emailError) {
      console.error('❌ Email sending error:', emailError);
      // Continue even if email fails
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

Deno.serve(app.fetch);
