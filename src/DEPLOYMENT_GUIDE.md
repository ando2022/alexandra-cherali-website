# Deployment & Google Calendar Integration Guide

## Part 1: Fix Calendar Layout ✅
The calendar dialog has been updated with a more compact, scrollable layout that fits on all screen sizes.

## Part 2: Google Calendar Integration ✅

**STATUS: INTEGRATED AND READY TO USE!**

The Google Calendar integration is now complete. When someone books a session:
- ✅ Calendar event is automatically created in Alexandra's Google Calendar
- ✅ Email invites are sent to both Alexandra and the client
- ✅ Google Meet links are included for online sessions
- ✅ Reminders are set (1 day before, 1 hour before)

### Quick Start

See **[CALENDAR_QUICK_START.md](./CALENDAR_QUICK_START.md)** for testing and verification.

### Full Setup Documentation

To integrate with Alexandra's Google Calendar, you'll need to set up the Google Calendar API. Here are two approaches:

### Option A: Using Supabase + Google Calendar API (Recommended)

This is the most secure approach as it keeps API credentials on the backend.

#### Step 1: Set Up Google Calendar API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Calendar API:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Calendar API"
   - Click "Enable"

4. Create OAuth 2.0 credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application"
   - Add authorized redirect URIs (your Supabase function URL)
   - Download the credentials JSON

5. Create a Service Account (for server-to-server):
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Grant it "Calendar Event Creator" role
   - Create and download the JSON key

#### Step 2: Share Calendar with Service Account

1. Open Google Calendar
2. Go to Settings > Settings for my calendars > [Your Calendar]
3. Under "Share with specific people", add the service account email
4. Give it "Make changes to events" permission

#### Step 3: Set Up Supabase

You'll need Supabase for:
- Storing booking requests
- Handling Google Calendar API calls securely
- Managing newsletter subscriptions
- Storing blog posts dynamically

**Would you like me to help you connect to Supabase and set up the backend?**

### Option B: Direct Calendar Link (Simple Alternative)

If you want a simpler solution without backend integration:

1. Create a Google Calendar appointment scheduling page:
   - Go to calendar.google.com
   - Click Settings > Appointment schedules
   - Create a new appointment schedule
   - Set your availability times
   - Get the booking link

2. Replace the booking dialog with a simple button that opens this link

This is easier but less integrated with your website.

## Part 3: Deployment

### Recommended: Deploy to Vercel (Free & Easy)

#### Prerequisites:
- GitHub account
- Your code in a GitHub repository

#### Steps:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect it's a Vite/React project
   - Click "Deploy"
   - Done! You'll get a URL like: `your-project.vercel.app`

3. **Custom Domain (Optional):**
   - Buy a domain (e.g., alexandracherali.com)
   - In Vercel dashboard, go to Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

#### Environment Variables (if using Supabase):
In Vercel dashboard:
- Go to Settings > Environment Variables
- Add:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
  - `GOOGLE_CALENDAR_API_KEY` (if needed)

### Alternative: Deploy to Netlify

1. Push code to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. Click "Add new site" > "Import an existing project"
5. Connect to GitHub and select your repo
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy"

### Alternative: Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update vite.config.ts:
   ```typescript
   export default defineConfig({
     base: '/YOUR_REPO/',
     // ... other config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Part 4: What You Need to Decide

1. **Backend Integration:**
   - Do you want to connect to Supabase for database functionality?
   - This enables: booking storage, newsletter management, blog post management

2. **Calendar Integration:**
   - Option A: Full Google Calendar integration (requires Supabase)
   - Option B: Simple link to Google Calendar scheduling page

3. **Domain:**
   - Do you want a custom domain like alexandracherali.com?
   - Or is a free subdomain like alexandracherali.vercel.app okay for now?

## Current Status

✅ Calendar dialog layout is now fixed and responsive
⏳ Awaiting decision on Google Calendar integration approach
⏳ Ready to deploy once you choose your platform

## Next Steps

Please let me know:
1. Should I set up Supabase integration for the backend features?
2. Which deployment platform do you prefer (Vercel recommended)?
3. Do you have a custom domain, or should we use the free subdomain?

I can guide you through each step!
