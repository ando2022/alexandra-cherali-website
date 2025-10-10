// Simple function that should definitely work
Deno.serve((req) => {
  return new Response(JSON.stringify({ 
    status: 'ok', 
    message: 'Simple function is working!',
    timestamp: new Date().toISOString()
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
});
