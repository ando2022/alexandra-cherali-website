// Simple email test function
Deno.serve(async (req) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json'
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers });
  }

  try {
    console.log('🧪 Testing email configuration...');
    
    // Check environment variables
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    console.log('RESEND_API_KEY exists:', !!resendApiKey);
    console.log('RESEND_API_KEY length:', resendApiKey ? resendApiKey.length : 0);
    
    if (!resendApiKey) {
      return new Response(JSON.stringify({
        error: 'RESEND_API_KEY not configured',
        debug: 'Environment variable is missing'
      }), { status: 500, headers });
    }

    // Test email sending
    const emailData = {
      from: 'Alexandra Cherali <noreply@resend.dev>',
      to: ['anbo.do@icloud.com'],
      subject: 'Test Email from Supabase Function',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2;">Test Email</h2>
          <p>This is a test email from the Supabase function.</p>
          <p>If you receive this, the email system is working!</p>
          <p>Timestamp: ${new Date().toISOString()}</p>
        </div>
      `
    };

    console.log('📧 Sending test email...');
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const result = await response.json();
    console.log('📧 Email response:', result);

    if (!response.ok) {
      return new Response(JSON.stringify({
        error: 'Failed to send email',
        details: result,
        status: response.status
      }), { status: 500, headers });
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Test email sent successfully!',
      emailId: result.id,
      debug: {
        resendApiKeyExists: !!resendApiKey,
        resendApiKeyLength: resendApiKey ? resendApiKey.length : 0
      }
    }), { status: 200, headers });

  } catch (error) {
    console.error('❌ Email test error:', error);
    return new Response(JSON.stringify({
      error: 'Email test failed',
      details: error.message
    }), { status: 500, headers });
  }
});
