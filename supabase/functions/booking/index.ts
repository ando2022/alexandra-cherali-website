import { Hono } from 'npm:hono';

const app = new Hono();

// Simple booking endpoint
app.post('/', async (c) => {
  try {
    const body = await c.req.json();
    console.log('Booking request received:', body);
    
    // Basic validation
    if (!body.name || !body.email || !body.date || !body.time) {
      return c.json({ error: 'Missing required fields' }, 400);
    }
    
    const booking = {
      id: crypto.randomUUID(),
      name: body.name,
      email: body.email,
      date: body.date,
      time: body.time,
      sessionType: body.sessionType || 'online',
      message: body.message || '',
      createdAt: new Date().toISOString(),
    };
    
    console.log('Booking created:', booking);
    
    // TODO: Send email notification
    console.log('Email would be sent to: cdrw1201@gmail.com');
    
    return c.json({ 
      success: true, 
      message: 'Booking received successfully!',
      data: booking,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error:', error);
    return c.json({ error: 'Failed to process booking', details: error.message }, 500);
  }
});

// Health check
app.get('/', (c) => {
  return c.json({ status: 'ok', message: 'Booking function is working!' });
});

Deno.serve(app.fetch);
