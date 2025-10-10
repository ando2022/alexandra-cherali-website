// Simple working booking function with email notifications
const app = {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const method = request.method;

    // CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Type': 'application/json'
    };

    // Handle CORS preflight
    if (method === 'OPTIONS') {
      return new Response(null, { status: 200, headers });
    }

    try {
      if (method === 'GET') {
        return new Response(JSON.stringify({
          status: 'ok',
          message: 'Booking function is working!',
          timestamp: new Date().toISOString()
        }), { status: 200, headers });
      }

      if (method === 'POST') {
        const body = await request.json();
        console.log('Booking request received:', body);

        // Validate required fields
        if (!body.name || !body.email || !body.date || !body.time) {
          return new Response(JSON.stringify({
            error: 'Missing required fields: name, email, date, time'
          }), { status: 400, headers });
        }

        // Create booking
        const booking = {
          id: crypto.randomUUID(),
          name: body.name,
          email: body.email,
          date: body.date,
          time: body.time,
          sessionType: body.sessionType || 'online',
          message: body.message || '',
          createdAt: new Date().toISOString()
        };

        console.log('Booking created:', booking);

        // Send email notification
        try {
          await sendEmailNotification(booking);
          console.log('Email notification sent successfully');
        } catch (emailError) {
          console.error('Email error:', emailError);
          // Continue even if email fails
        }

        return new Response(JSON.stringify({
          success: true,
          message: 'Booking received successfully!',
          data: booking,
          timestamp: new Date().toISOString()
        }), { status: 200, headers });
      }

      return new Response(JSON.stringify({ error: 'Method not allowed' }), { 
        status: 405, 
        headers 
      });

    } catch (error) {
      console.error('Function error:', error);
      return new Response(JSON.stringify({
        error: 'Internal server error',
        details: error.message
      }), { status: 500, headers });
    }
  }
};

// Email notification function
async function sendEmailNotification(booking: any) {
  try {
    // Get Resend API key from environment
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      console.warn('RESEND_API_KEY not configured');
      return;
    }

    const emailData = {
      from: 'Alexandra Cherali <noreply@resend.dev>',
      to: ['anbo.do@icloud.com'],
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
      const error = await response.text();
      throw new Error(`Resend API error: ${response.status} - ${error}`);
    }

    const result = await response.json();
    console.log('Email sent successfully:', result.id);
    return result;

  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}

Deno.serve(app.fetch);
