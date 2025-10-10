import { projectId, publicAnonKey } from './supabase/info';

// Force rebuild - API configuration updated
const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/booking-simple`;

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  console.log('API Request:', url, options);
  console.log('Project ID:', projectId);
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${publicAnonKey}`,
      ...options.headers,
    },
  });

  console.log('API Response:', response.status, response.statusText);

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Unknown error' }));
    console.error('API Error:', error);
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
  }) => fetchAPI('', {
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
