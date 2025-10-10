import { projectId, publicAnonKey } from './supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/server`;

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${publicAnonKey}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(error.error || `API error: ${response.status}`);
  }

  return response.json();
}

export const api = {
  // Bookings
  createBooking: (bookingData: {
    date: string;
    time: string;
    sessionType: string;
    name: string;
    email: string;
    phone?: string;
    message?: string;
  }) => fetchAPI('/bookings', {
    method: 'POST',
    body: JSON.stringify(bookingData),
  }),

  getBookings: () => fetchAPI('/bookings'),

  // Newsletter
  subscribeNewsletter: (email: string) => fetchAPI('/newsletter/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email }),
  }),

  getSubscribers: () => fetchAPI('/newsletter/subscribers'),

  // Contact
  submitContact: (contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => fetchAPI('/contact', {
    method: 'POST',
    body: JSON.stringify(contactData),
  }),

  getContacts: () => fetchAPI('/contact'),

  // Blog
  getBlogPosts: () => fetchAPI('/blog/posts'),
  
  getBlogPost: (id: string) => fetchAPI(`/blog/posts/${id}`),
};
