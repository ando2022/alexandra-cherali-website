# Google Calendar Integration Setup Guide

This guide will help you integrate Alexandra's Google Calendar with the booking system so that bookings automatically create calendar events.

## Overview

When someone books a session through the website, the system will automatically:
1. Store the booking in the database
2. Create an event in Alexandra's Google Calendar
3. Send calendar invites to both Alexandra and the client

## Step 1: Set Up Google Calendar API

### 1.1 Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name it: "Alexandra Cherali Website"
4. Click "Create"

### 1.2 Enable Google Calendar API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google Calendar API"
3. Click on it and click "Enable"

### 1.3 Create a Service Account

A service account allows your website to access Google Calendar on behalf of Alexandra.

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Fill in the details:
   - **Service account name**: `alexandra-calendar-service`
   - **Service account ID**: (auto-filled)
   - **Description**: "Service account for website booking calendar integration"
4. Click "Create and Continue"
5. Skip the optional steps (click "Continue" then "Done")

### 1.4 Create and Download Service Account Key

1. In the "Credentials" page, find your service account under "Service Accounts"
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" → "Create new key"
5. Choose "JSON" format
6. Click "Create"
7. **Important**: A JSON file will download - keep this file safe and secure!

The JSON file looks like this:
```json
{
  "type": "service_account",
  "project_id": "your-project",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "alexandra-calendar-service@your-project.iam.gserviceaccount.com",
  "client_id": "...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "..."
}
```

## Step 2: Share Google Calendar with Service Account

Now you need to give the service account access to Alexandra's calendar.

### 2.1 Find the Service Account Email

In the JSON file you downloaded, find the `client_email` field. It looks like:
```
alexandra-calendar-service@your-project.iam.gserviceaccount.com
```

### 2.2 Share Calendar

1. Open [Google Calendar](https://calendar.google.com)
2. Find the calendar you want to use (usually "Primary" or create a new one for bookings)
3. Click the three dots next to the calendar name → "Settings and sharing"
4. Scroll down to "Share with specific people or groups"
5. Click "Add people and groups"
6. Paste the service account email
7. Set permission to: **"Make changes to events"**
8. Click "Send"

### 2.3 Get the Calendar ID

1. Still in Calendar Settings, scroll down to "Integrate calendar"
2. Copy the **Calendar ID** - it looks like:
   - `your-email@gmail.com` (for primary calendar)
   - OR `abc123@group.calendar.google.com` (for a shared calendar)

## Step 3: Configure Environment Variables

You need to add the Google Calendar credentials to your environment.

### 3.1 Prepare the Service Account JSON

You have two options:

**Option A: Use the entire JSON file content (Recommended)**

Copy the entire content of the JSON file you downloaded.

**Option B: Use individual fields**

Extract these fields from the JSON:
- `client_email`
- `private_key`

### 3.2 Add to Supabase Secrets

You'll be prompted to add these secrets through the Supabase interface:

1. **GOOGLE_CALENDAR_CREDENTIALS** - Paste the entire JSON file content
2. **GOOGLE_CALENDAR_ID** - Your calendar ID from Step 2.3

### 3.3 Add to Local .env (for development)

Update your `.env` file:

```env
VITE_SUPABASE_PROJECT_ID=your-project-id
VITE_SUPABASE_ANON_KEY=your-anon-key

# Google Calendar (for local development)
GOOGLE_CALENDAR_CREDENTIALS='{"type":"service_account","project_id":"...","private_key":"...","client_email":"..."}'
GOOGLE_CALENDAR_ID=your-calendar-id@gmail.com
```

**Important**: Keep the JSON in single quotes and on one line.

## Step 4: Test the Integration

Once everything is set up:

1. Deploy your server function with the new code
2. Go to your website
3. Book a test session
4. Check Alexandra's Google Calendar - you should see the event!

The event will include:
- ✅ Date and time
- ✅ Client name and email
- ✅ Session type (Onsite/Online)
- ✅ Client's message
- ✅ Meeting link (for online sessions)

## Troubleshooting

### "Calendar not found" error
- Make sure you shared the calendar with the service account email
- Double-check the Calendar ID is correct
- Wait a few minutes after sharing (can take time to propagate)

### "Unauthorized" or "403" errors
- Verify the service account has "Make changes to events" permission
- Check that the Google Calendar API is enabled in your project
- Make sure the credentials JSON is valid

### Event not appearing in calendar
- Check the Supabase function logs for errors
- Verify the calendar ID matches your intended calendar
- Ensure the service account email received the sharing invitation

### "Invalid credentials" error
- Make sure the JSON is properly formatted (valid JSON)
- Check that there are no extra spaces or newlines in the private key
- Verify you copied the entire JSON file content

## Security Notes

🔒 **Important Security Practices:**

1. **Never commit the service account JSON to Git**
   - It's already in `.gitignore`
   - The credentials give full access to the calendar

2. **Store credentials securely**
   - Use Supabase Secrets for production
   - Use `.env` file for local development (not committed to Git)

3. **Limit service account permissions**
   - Only share the specific calendar needed
   - Only give "Make changes to events" permission (not full calendar control)

4. **Rotate keys if compromised**
   - If the JSON file is ever exposed, immediately:
     - Delete the old key in Google Cloud Console
     - Create a new key
     - Update the environment variables

## What Happens When Someone Books

Here's the flow:

1. User fills out booking form on website
2. Frontend sends booking data to Supabase server
3. Server validates the data
4. Server stores booking in database
5. Server creates Google Calendar event with:
   - Title: "Art Education Session - [Client Name]"
   - Time: Selected date and time (1-hour duration)
   - Description: Client details and message
   - Attendees: Alexandra + Client (client gets invite)
6. Client receives calendar invite via email
7. Alexandra sees the event in her calendar
8. Success message shown to user

## Advanced Features (Optional)

### Add Video Conferencing Link

For online sessions, we can automatically add:
- Google Meet link (automatically generated)
- Or Zoom link (if you provide API credentials)

### Send Email Notifications

We can add email notifications when bookings are made using:
- Resend (recommended)
- SendGrid
- Or Gmail API

### Automated Reminders

Google Calendar will automatically send:
- Email reminders (configurable)
- Push notifications (if client accepts calendar invite)

---

Would you like me to help set up any of these advanced features?
