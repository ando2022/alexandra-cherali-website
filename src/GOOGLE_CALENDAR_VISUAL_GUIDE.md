# Google Calendar Setup - Visual Step-by-Step Guide

This is a simplified visual guide to help you set up Google Calendar integration.

---

## 📋 What You Need

Before starting:
- ✅ Google account (Gmail)
- ✅ Access to Google Cloud Console
- ✅ Alexandra's calendar access
- ⏱️ Time needed: ~15 minutes

---

## Step 1: Create Google Cloud Project

### 1.1 Go to Google Cloud Console
**URL:** https://console.cloud.google.com/

### 1.2 Create New Project
```
Click "Select a project" (top bar)
    ↓
Click "NEW PROJECT"
    ↓
Enter name: "Alexandra Cherali Website"
    ↓
Click "CREATE"
```

**✅ Result:** You should see your project name in the top bar

---

## Step 2: Enable Google Calendar API

### 2.1 Navigate to API Library
```
In the left sidebar:
    ↓
Click "APIs & Services"
    ↓
Click "Library"
```

### 2.2 Enable the API
```
Search for: "Google Calendar API"
    ↓
Click on "Google Calendar API"
    ↓
Click "ENABLE"
    ↓
Wait for activation (5-10 seconds)
```

**✅ Result:** You'll see "API enabled" message

---

## Step 3: Create Service Account

### 3.1 Navigate to Credentials
```
In the left sidebar:
    ↓
Click "APIs & Services"
    ↓
Click "Credentials"
```

### 3.2 Create Service Account
```
Click "CREATE CREDENTIALS" (top)
    ↓
Select "Service Account"
    ↓
Fill in the form:
```

**Form Fields:**
```
Service account name: alexandra-calendar-service
Service account ID: (auto-filled)
Description: Service account for website bookings

Click "CREATE AND CONTINUE"
    ↓
Skip optional steps (click "CONTINUE" then "DONE")
```

**✅ Result:** Service account appears in the credentials list

---

## Step 4: Download Service Account Key

### 4.1 Open Service Account
```
In the "Service Accounts" section:
    ↓
Click on the service account email
    (looks like: alexandra-calendar-service@your-project.iam.gserviceaccount.com)
```

### 4.2 Create and Download Key
```
Click the "KEYS" tab
    ↓
Click "ADD KEY"
    ↓
Select "Create new key"
    ↓
Choose "JSON" format
    ↓
Click "CREATE"
```

**✅ Result:** A JSON file downloads automatically

**⚠️ IMPORTANT:** Keep this file safe and secure! It contains private credentials.

---

## Step 5: Share Google Calendar

### 5.1 Copy Service Account Email

From the JSON file you just downloaded, find the `client_email` field:

```json
{
  ...
  "client_email": "alexandra-calendar-service@your-project.iam.gserviceaccount.com",
  ...
}
```

**Copy this email address!**

### 5.2 Open Google Calendar
**URL:** https://calendar.google.com

### 5.3 Share the Calendar
```
Find the calendar you want to use
    (Usually "Primary" or create a new one)
    ↓
Hover over the calendar name in the left sidebar
    ↓
Click the three dots (⋮)
    ↓
Click "Settings and sharing"
    ↓
Scroll down to "Share with specific people or groups"
    ↓
Click "Add people and groups"
    ↓
Paste the service account email
    ↓
Set permission to: "Make changes to events"
    ↓
Click "Send"
```

**✅ Result:** Service account email appears in the shared list

### 5.4 Get Calendar ID
```
Still in Calendar Settings:
    ↓
Scroll down to "Integrate calendar"
    ↓
Copy the "Calendar ID"
```

**Calendar ID looks like:**
- Primary calendar: `your-email@gmail.com`
- Other calendar: `abc123@group.calendar.google.com`

**Save this Calendar ID!**

---

## Step 6: Configure Supabase Secrets

You already have these secrets configured:
- ✅ `GOOGLE_CALENDAR_CREDENTIALS`
- ✅ `GOOGLE_CALENDAR_ID`

If you need to update them, use the Supabase dashboard:
```
Go to Supabase Dashboard
    ↓
Select your project
    ↓
Go to "Edge Functions"
    ↓
Click "server" function
    ↓
Go to "Settings" tab
    ↓
Update environment variables
```

---

## Step 7: Test the Integration

### 7.1 Deploy Server
```bash
supabase functions deploy server
```

### 7.2 Book a Test Session
```
Open your website
    ↓
Click "Book a Session"
    ↓
Fill in all fields with TEST data
    ↓
Use your own email for testing
    ↓
Submit the form
```

### 7.3 Verify Success
```
✅ Success message appears
    ↓
✅ Check Google Calendar → Event should appear
    ↓
✅ Check your email → Calendar invite received
    ↓
✅ For online session → Google Meet link included
```

---

## 🎯 Visual Checklist

Use this to verify each step:

```
□ Google Cloud project created
  □ Project visible in top bar
  
□ Google Calendar API enabled
  □ Shows as "enabled" in API Library
  
□ Service account created
  □ Email visible in credentials list
  
□ Service account key downloaded
  □ JSON file saved securely
  
□ Calendar shared
  □ Service account email in sharing list
  □ Permission: "Make changes to events"
  
□ Calendar ID copied
  □ Matches primary or group calendar format
  
□ Supabase secrets configured
  □ GOOGLE_CALENDAR_CREDENTIALS set
  □ GOOGLE_CALENDAR_ID set
  
□ Server deployed
  □ Shows as "Active" in Supabase
  
□ Test booking successful
  □ Event appears in calendar
  □ Email invite received
```

---

## 🆘 Common Issues

### Issue: "Calendar not found"
**Check:**
- Is the calendar shared with service account?
- Is the Calendar ID correct?
- Wait 2-3 minutes after sharing

### Issue: "Unauthorized" or "403"
**Check:**
- Service account has "Make changes" permission (not just "View")
- Google Calendar API is enabled
- Credentials JSON is valid

### Issue: "Invalid credentials"
**Check:**
- JSON file is complete and valid
- No extra spaces or newlines
- File wasn't corrupted during copy/paste

### Issue: Event created but no email sent
**Check:**
- Client email is valid
- Check spam/junk folder
- Verify `sendUpdates: 'all'` in code

---

## 📞 Need Help?

If stuck:

1. **Check Server Logs**
   - Supabase Dashboard → Functions → server → Logs
   - Look for error messages

2. **Test API Connection**
   - Use the health endpoint: `/make-server-b97bd89f/health`

3. **Verify Credentials**
   - Double-check all emails and IDs
   - Ensure JSON is valid

4. **Review Setup**
   - Follow this guide step-by-step again
   - Don't skip any steps

---

## ✅ Success!

Once all steps are complete:
- Bookings automatically create calendar events
- Email invites are sent to clients
- Google Meet links for online sessions
- You're ready to accept bookings!

**Next:** See [CALENDAR_QUICK_START.md](./CALENDAR_QUICK_START.md) for quick testing guide.
