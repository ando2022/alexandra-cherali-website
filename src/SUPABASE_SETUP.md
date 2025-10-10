# Supabase Setup Guide

## ✅ Backend Connected!

Your website is now connected to Supabase with the following features:

### Features Enabled:
1. **📅 Booking System** - Session bookings are stored in the database
2. **📧 Newsletter Subscriptions** - Email subscribers are collected and stored
3. **💬 Contact Form** - Messages are saved and can be viewed later
4. **📝 Blog Posts** - Ready for dynamic blog management (optional)

## Setup Steps

### 1. Get Your Supabase Credentials

The Supabase project has already been created. You need to find your credentials:

1. Go to your Supabase dashboard
2. Click on your project
3. Go to **Settings** (gear icon) → **API**
4. Copy these values:
   - **Project URL**: `https://YOUR_PROJECT_ID.supabase.co`
   - **Project ID**: The part before `.supabase.co` in the URL
   - **Anon/Public Key**: The long key under "Project API keys" → "anon public"

### 2. Create Environment File

Create a file called `.env` in the root of your project:

```bash
VITE_SUPABASE_PROJECT_ID=your-project-id-here
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace `your-project-id-here` and `your-anon-key-here` with your actual values.

**Important:** Never commit the `.env` file to Git! It's already in `.gitignore`.

### 3. Deploy the Server Function

The backend server is in `/supabase/functions/server/index.tsx`. 

To deploy it:

```bash
# Install Supabase CLI if you haven't
npm install -g supabase

# Login to Supabase
supabase login

# Link your project (use your project reference from dashboard)
supabase link --project-ref your-project-ref

# Deploy the function
supabase functions deploy server
```

### 4. Test Everything

Once deployed, test these features:

1. **Book a Session** - Click "Book a Session" on the home page
2. **Subscribe to Newsletter** - On the blog page
3. **Send Contact Message** - On the contact page

You can view all submissions in your Supabase dashboard or by calling the API endpoints.

## Viewing Your Data

### Option A: Using the API (in browser console)

```javascript
// Get all bookings
fetch('https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/bookings', {
  headers: { 'Authorization': 'Bearer YOUR_ANON_KEY' }
}).then(r => r.json()).then(console.log)

// Get all newsletter subscribers
fetch('https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/newsletter/subscribers', {
  headers: { 'Authorization': 'Bearer YOUR_ANON_KEY' }
}).then(r => r.json()).then(console.log)

// Get all contact messages
fetch('https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/contact', {
  headers: { 'Authorization': 'Bearer YOUR_ANON_KEY' }
}).then(r => r.json()).then(console.log)
```

### Option B: Create an Admin Dashboard (Optional)

I can help you create a simple admin page where Alexandra can view:
- All booking requests
- Newsletter subscribers
- Contact messages
- Manage blog posts

## Data Structure

All data is stored in the KV store with these prefixes:

- **Bookings**: `booking:{id}` and list in `bookings:all`
- **Newsletter**: `subscriber:{email}` and list in `subscribers:all`
- **Contact**: `contact:{id}` and list in `contacts:all`
- **Blog Posts**: `blog:post:{id}` and list in `blog:posts:all`

## Next Steps

### 1. Email Notifications (Optional)

To receive email notifications when someone books or contacts you, we can integrate:
- **Resend** (recommended, free tier)
- **SendGrid**
- **AWS SES**

Would you like me to set this up?

### 2. Google Calendar Integration

To automatically add bookings to Google Calendar:
1. Set up Google Calendar API (see DEPLOYMENT_GUIDE.md)
2. I'll add the integration code to create calendar events

Would you like me to add this?

### 3. Admin Dashboard

I can create a protected admin page where you can:
- View all bookings, subscribers, and messages
- Mark bookings as confirmed/completed
- Export subscriber list
- Manage blog posts

Interested?

## Troubleshooting

### "Failed to submit booking" error
- Check that your `.env` file has the correct values
- Make sure the server function is deployed
- Check browser console for detailed error messages

### CORS errors
- The server is configured with CORS enabled
- If you still see errors, check that the function URL is correct

### Can't see submissions
- Make sure the server function is deployed and running
- Check the Supabase logs: Dashboard → Functions → server → Logs

## Support

If you run into issues, check:
1. Supabase dashboard → Functions → server → Logs
2. Browser console for frontend errors
3. The error messages in the alerts

Need help? Let me know what error you're seeing!
