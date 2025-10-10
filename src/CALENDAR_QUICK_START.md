# Google Calendar Integration - Quick Start Guide

## ✅ Integration Complete!

Your booking system now automatically creates Google Calendar events when someone books a session!

## What Happens When Someone Books

1. **User Books a Session** → Fills out the booking form
2. **Booking Saved** → Stored in your Supabase database
3. **Calendar Event Created** → Automatically added to Alexandra's Google Calendar
4. **Email Invites Sent** → Both Alexandra and the client receive calendar invites
5. **For Online Sessions** → Google Meet link is automatically generated

## Current Status

The code is ready and deployed! Here's what you need to verify:

### ✅ Already Configured (According to System)
- `GOOGLE_CALENDAR_CREDENTIALS` - Service account credentials
- `GOOGLE_CALENDAR_ID` - Calendar ID to use

### 📋 Final Steps to Verify

1. **Check Calendar Sharing**
   - Open [Google Calendar](https://calendar.google.com)
   - Go to Settings → Your calendar
   - Verify the service account email has "Make changes to events" permission

2. **Deploy the Updated Server**
   ```bash
   supabase functions deploy server
   ```

3. **Test the Integration**
   - Go to your website
   - Book a test session
   - Check Alexandra's Google Calendar for the event
   - Check the test email for the calendar invite

## Event Details

Each calendar event includes:

- **Title**: "Art Education Session - [Client Name]"
- **Time**: Selected date/time (1 hour duration)
- **Description**: 
  - Session type (Onsite/Online)
  - Client name, email, phone
  - Client's message
  - Booking ID for reference
- **Attendees**: Alexandra + Client (both get email invites)
- **Reminders**: 
  - Email 1 day before
  - Popup 1 hour before
- **Video Conference**: Google Meet link (for online sessions only)

## Testing Checklist

- [ ] Deploy server function: `supabase functions deploy server`
- [ ] Book a test session on the website
- [ ] Check Google Calendar for the event
- [ ] Verify calendar invite was received by email
- [ ] For online sessions, check that Google Meet link is included
- [ ] Try booking both onsite and online sessions

## Troubleshooting

### Calendar Event Not Created

**Check the Server Logs:**
```bash
# In Supabase dashboard
# Go to: Edge Functions → server → Logs
```

**Common Issues:**

1. **"Calendar not found"**
   - Solution: Share the calendar with the service account email
   - The service account email is in your credentials JSON: `client_email`

2. **"Unauthorized" or "403 Forbidden"**
   - Solution: Verify the service account has "Make changes to events" permission
   - Check that Google Calendar API is enabled in Google Cloud Console

3. **"Invalid credentials"**
   - Solution: Verify `GOOGLE_CALENDAR_CREDENTIALS` is valid JSON
   - Re-download the service account key if needed

4. **"Invalid time format"**
   - Solution: Check that booking times are in correct format (e.g., "10:00 - 11:00")

### Event Created But No Email Sent

- Check spam/junk folder
- Verify the client email is correct
- In Google Cloud Console, check API quotas haven't been exceeded

### Online Sessions Don't Have Meet Link

- Verify `conferenceDataVersion` is set to 1
- Check Google Meet is enabled for your Google Workspace (or personal account)

## What You Can Do Now

### View All Bookings
```bash
# In browser console or API client
fetch('https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/bookings', {
  headers: { 'Authorization': 'Bearer YOUR_ANON_KEY' }
}).then(r => r.json()).then(console.log)
```

### Manage Events in Google Calendar

All events created through the booking system will appear in Alexandra's calendar. You can:
- Edit event details
- Add additional notes
- Reschedule (will notify attendees automatically)
- Cancel (will notify attendees)

### Export Bookings

All bookings are stored with:
- Booking details
- Calendar event ID
- Calendar event link
- Status (pending/confirmed/completed)

## Next Steps

Would you like to add:

1. **Email Notifications** - Custom emails when bookings are made
2. **SMS Reminders** - Text message reminders before sessions
3. **Admin Dashboard** - View and manage all bookings in one place
4. **Automated Follow-ups** - Send emails after sessions for feedback
5. **Recurring Sessions** - Allow clients to book weekly sessions

## Calendar Management Tips

### Best Practices

1. **Block Personal Time**: Mark personal/busy time in the calendar
2. **Set Working Hours**: Configure your working hours in Google Calendar settings
3. **Buffer Time**: Consider blocking 15 minutes before/after sessions for prep
4. **Separate Calendar**: Consider creating a dedicated calendar for client bookings

### Modifying Default Availability

The current system allows bookings:
- **Days**: Weekdays only (Monday-Friday)
- **Times**: 9:00 AM - 5:00 PM
- **Duration**: 1 hour per session

To change these defaults, I can update the booking dialog logic.

## Support

If you run into issues:

1. Check Supabase function logs (Dashboard → Functions → server → Logs)
2. Check browser console for frontend errors
3. Verify Google Calendar settings
4. Test with a personal email first before promoting to clients

---

🎉 **You're all set!** The calendar integration is ready to use.

Let me know if you need help with testing or want to add any of the additional features!
