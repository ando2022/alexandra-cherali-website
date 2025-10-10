# Quick Reference Guide

Quick commands and URLs for day-to-day operations.

---

## 🔗 Important URLs

| What | URL Template |
|------|--------------|
| **Your Website** | `https://your-site.vercel.app` |
| **Admin Login** | `https://your-site.vercel.app/admin/login` |
| **Admin Dashboard** | `https://your-site.vercel.app/admin/dashboard` |
| **Supabase Dashboard** | `https://supabase.com/dashboard` |
| **Vercel Dashboard** | `https://vercel.com/dashboard` |
| **Resend Dashboard** | `https://resend.com/emails` |
| **Google Calendar** | `https://calendar.google.com` |

---

## ⚡ Quick Commands

### Deploy Backend
```bash
supabase functions deploy server
```

### View Server Logs
```bash
supabase functions logs server --follow
```

### Redeploy Frontend
```bash
git add .
git commit -m "Update content"
git push
```
(Vercel auto-deploys on push)

### Test Health Endpoint
```bash
curl https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/health
```

---

## 📧 Email Notifications

### When You Receive Emails

**New Booking:**
- Check Google Calendar for the event
- Reply directly to the email to confirm
- Event includes all booking details

**New Contact Message:**
- Reply directly to respond to the sender
- Mark as "read" in admin dashboard

**New Newsletter Subscriber:**
- Subscriber automatically added to list
- Export list from admin dashboard when needed

---

## 🗂️ Admin Dashboard

### Access
1. Go to `/admin/login`
2. Enter admin email & password
3. Dashboard shows all data

### Features
- **View Bookings:** See all session requests
- **View Subscribers:** Export newsletter list
- **View Messages:** Read contact form submissions
- **Search:** Filter all data
- **Export:** Download CSV files

### Common Tasks

**Export Newsletter List:**
1. Login to admin dashboard
2. Go to "Subscribers" tab
3. Click "Export CSV"
4. Use the CSV for email campaigns

**Check Bookings:**
1. Login to admin dashboard
2. Go to "Bookings" tab
3. See all bookings with calendar links
4. Click calendar link to view/edit in Google Calendar

**Read Messages:**
1. Login to admin dashboard
2. Go to "Messages" tab
3. Read all contact form submissions
4. Reply via email (shown in the message)

---

## 🗓️ Google Calendar

### Managing Bookings

**Reschedule a Session:**
1. Open event in Google Calendar
2. Edit date/time
3. Save changes
4. Attendees are automatically notified

**Cancel a Session:**
1. Open event in Google Calendar
2. Delete event
3. Notify guests when prompted
4. Client receives cancellation email

**Add Notes:**
1. Open event
2. Edit description
3. Add prep notes, resources, etc.
4. Save

---

## 💾 Data Export

### Export Bookings
1. Admin Dashboard → Bookings tab
2. Click "Export CSV"
3. Opens in Excel/Google Sheets

### Export Subscribers
1. Admin Dashboard → Subscribers tab
2. Click "Export CSV"
3. Import to email service (Mailchimp, etc.)

### Export Messages
1. Admin Dashboard → Messages tab
2. Click "Export CSV"
3. Archive for records

---

## 🔄 Common Updates

### Add a Blog Post

**Current:** Edit `/components/Blog.tsx`
1. Add new post object to `blogPosts` array
2. Commit and push to GitHub
3. Vercel auto-deploys

**Future:** Build a blog CMS (optional enhancement)

### Update Gallery Images

Edit `/components/Gallery.tsx`:
1. Add new image URLs to `galleryImages` array
2. Commit and push
3. Auto-deploys

### Update Portfolio

Edit `/components/Portfolio.tsx`:
1. Update projects array
2. Add new PDF if needed
3. Commit and push
4. Auto-deploys

### Change About Text

Edit `/components/Home.tsx`:
1. Update text content
2. Commit and push
3. Auto-deploys

---

## 🐛 Troubleshooting

### Booking Not Creating Calendar Event

1. Check Supabase logs: `supabase functions logs server`
2. Verify Google Calendar is shared with service account
3. Test with a new booking

### Email Not Sending

1. Check Resend dashboard for errors
2. Verify RESEND_API_KEY is set in Supabase
3. Check spam folder

### Admin Login Not Working

1. Verify admin user exists (Supabase Dashboard → Auth → Users)
2. Try password reset
3. Clear browser cache

### Data Not Showing in Admin

1. Submit a test booking/contact/subscription
2. Check browser console for errors
3. Verify server is responding (health endpoint)

---

## 🔐 Security

### Rotate Admin Password

1. Supabase Dashboard → Authentication → Users
2. Find admin user → Click menu → Reset Password
3. User receives password reset email

### Rotate API Keys

**Resend:**
1. Resend Dashboard → API Keys
2. Create new key
3. Update in Supabase secrets
4. Delete old key

**Google Calendar:**
1. Google Cloud Console → Credentials
2. Delete old service account key
3. Create new key
4. Update in Supabase secrets

---

## 📊 Monitoring

### Daily Check
- [ ] Check admin email for new bookings/contacts
- [ ] Review Google Calendar for upcoming sessions

### Weekly Check
- [ ] Export bookings for records
- [ ] Review Supabase logs for errors
- [ ] Check Resend dashboard for email deliverability

### Monthly Check
- [ ] Export newsletter subscribers
- [ ] Review and respond to all contact messages
- [ ] Update blog with new content
- [ ] Review analytics (if set up)

---

## 🆘 Emergency Contacts

### Service Down?

**Backend Issues:**
- Check: https://status.supabase.com
- Action: View logs, redeploy if needed

**Frontend Issues:**
- Check: https://www.vercel-status.com
- Action: Redeploy from Vercel dashboard

**Email Issues:**
- Check: https://resend.com/status
- Action: Check API key, view Resend logs

### Critical Bug

1. Check server logs immediately
2. If urgent, disable affected feature temporarily
3. Fix and redeploy
4. Test thoroughly

---

## 📱 Mobile Access

### Admin Dashboard on Mobile
- Works on phones/tablets
- Login at `/admin/login`
- View all data
- Export functionality available

### Managing Calendar on Mobile
- Use Google Calendar app
- All events sync automatically
- Can reschedule/edit from mobile

---

## 💡 Pro Tips

1. **Bookmark the Admin Dashboard** for quick access
2. **Enable Google Calendar notifications** on phone
3. **Check admin email daily** for new bookings
4. **Export data regularly** for backup
5. **Test booking flow monthly** to ensure it works
6. **Keep admin password in password manager**

---

## 📋 Quick Checklist

### Before Each Session
- [ ] Check Google Calendar for details
- [ ] Review client's message/notes
- [ ] Prepare materials
- [ ] Send reminder (if needed)

### After Each Session
- [ ] Mark booking as "completed" in notes
- [ ] Follow up with client if needed
- [ ] Update calendar event notes

### End of Month
- [ ] Export all data for records
- [ ] Review subscriber growth
- [ ] Plan next blog post
- [ ] Check for any issues

---

## 🎨 Customization Quick Links

Want to change colors? → `styles/globals.css`  
Want to update content? → `components/*.tsx`  
Want to modify emails? → `supabase/functions/server/email.tsx`  
Want to add features? → Ask your developer!

---

## 📚 Full Documentation

For detailed guides, see:
- [DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md) - Full deployment guide
- [ADMIN_GUIDE.md](./ADMIN_GUIDE.md) - Admin dashboard guide
- [GOOGLE_CALENDAR_SETUP.md](./GOOGLE_CALENDAR_SETUP.md) - Calendar setup
- [QUICK_START_SUMMARY.md](./QUICK_START_SUMMARY.md) - Quick overview

---

**Keep this file handy for daily operations!** 📌
