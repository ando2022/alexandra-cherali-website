import { Hono } from 'npm:hono';

const app = new Hono();

app.get('/', (c) => {
  return c.json({ status: 'ok', message: 'Test function working!' });
});

app.post('/bookings', (c) => {
  return c.json({ success: true, message: 'Booking endpoint working!' });
});

Deno.serve(app.fetch);
