# Admin Dashboard User Guide

Welcome to your admin dashboard! This guide will help you manage your website effectively.

---

## 🔐 Accessing the Dashboard

### Login URL
`https://your-website.com/admin/login`

### Login Credentials
Use the email and password that were created during deployment setup.

**Forgot your password?**  
Contact your developer to reset it through the Supabase dashboard.

---

## 📊 Dashboard Overview

The dashboard has three main sections:

1. **Bookings** - Art education session requests
2. **Subscribers** - Newsletter email list  
3. **Messages** - Contact form submissions

### Top Stats Cards

The dashboard shows:
- **Total Bookings** - Number of session requests (pending count)
- **Subscribers** - Newsletter subscribers count
- **Messages** - Contact messages (unread count)

---

## 📅 Managing Bookings

### What You'll See

Each booking shows:
- **Date & Time** - When the session is scheduled
- **Client Name** - Who booked the session
- **Session Type** - Online or Onsite in Zurich
- **Contact Info** - Email and phone number
- **Message** - Client's message/requirements
- **Status** - Pending, confirmed, or completed
- **Calendar Link** - Direct link to Google Calendar event
- **Created Date** - When the booking was made

### Actions You Can Take

✅ **View Calendar Event**  
Click the "View" link to open the event in Google Calendar. From there you can:
- Edit event details
- Add notes
- Reschedule (automatically notifies client)
- Cancel (automatically notifies client)

✅ **Export Bookings**  
Click "Export CSV" to download all booking data in a spreadsheet format.

✅ **Search Bookings**  
Use the search box to find specific clients, emails, or session types.

### Best Practices

1. **Check bookings daily** - Respond to new requests promptly
2. **Update calendar events** - Add preparation notes or specific requirements
3. **Export monthly** - Keep backup records of all bookings
4. **Contact clients** - Send confirmation emails for important sessions

---

## 📧 Managing Newsletter Subscribers

### What You'll See

Each subscriber shows:
- **Email Address**
- **Status** - Active or Inactive
- **Subscribed Date** - When they signed up

### Actions You Can Take

✅ **Export Subscriber List**  
Click "Export CSV" to download all subscriber emails. Use this list to:
- Send newsletter via your email platform (Mailchimp, ConvertKit, etc.)
- Create targeted email campaigns
- Backup your subscriber list

✅ **Search Subscribers**  
Find specific subscribers quickly using the search box.

### How to Send Newsletters

1. Export subscriber list as CSV
2. Import to your email marketing platform
3. Create and send your newsletter
4. Share new blog posts, exhibitions, or announcements

**Recommended Email Platforms:**
- Mailchimp (free for <2000 subscribers)
- ConvertKit (great for creators)
- Substack (simple newsletter platform)

---

## 💬 Managing Contact Messages

### What You'll See

Each message shows:
- **Subject Line** - What the message is about
- **From** - Sender's name and email
- **Message Content** - Full message text
- **Status** - Unread or Read
- **Date** - When it was sent

### Actions You Can Take

✅ **Read Messages**  
Click to expand and read full message content.

✅ **Reply to Messages**  
You'll receive email notifications for new messages. The sender's email is set as "Reply-To", so you can just click reply in your email client.

✅ **Export Messages**  
Download all messages as CSV for record-keeping.

✅ **Search Messages**  
Find specific messages by name, email, or subject.

### Best Practices

1. **Respond within 24 hours** - Clients appreciate quick responses
2. **Save important messages** - Export and archive special requests
3. **Track conversations** - Keep notes of follow-ups needed

---

## 🔍 Search & Filter

The search box at the top works across all tabs:

- **Bookings:** Searches name, email, session type
- **Subscribers:** Searches email addresses
- **Messages:** Searches name, email, subject

**Tip:** Search is case-insensitive and matches partial words.

---

## 📥 Exporting Data

Every section has an "Export CSV" button.

### What Gets Exported

**Bookings CSV includes:**
- Booking ID
- Date, Time
- Client name, email, phone
- Session type
- Message
- Status
- Calendar event link
- Created date

**Subscribers CSV includes:**
- Subscriber ID
- Email address
- Subscribed date
- Status (active/inactive)

**Messages CSV includes:**
- Message ID
- Name, email
- Subject
- Message content
- Status
- Created date

### Using Exported Data

Open CSV files in:
- Microsoft Excel
- Google Sheets
- Numbers (Mac)
- Any spreadsheet software

**Use cases:**
- Backup your data monthly
- Analyze booking trends
- Create mailing lists
- Generate reports

---

## 🔄 Refresh Data

Click the **Refresh** button to reload all data from the server.

**When to refresh:**
- After handling a booking
- To check for new submissions
- If data seems outdated

**Note:** The dashboard doesn't auto-refresh. Click refresh to see new entries.

---

## 🔐 Security Best Practices

### Keep Your Account Secure

✅ **Use a strong password** - Mix of letters, numbers, symbols  
✅ **Don't share credentials** - Keep login info private  
✅ **Logout when done** - Especially on shared computers  
✅ **Change password regularly** - Every 3-6 months  

### What NOT to Do

❌ Save password in browser on public computers  
❌ Share admin dashboard link publicly  
❌ Leave dashboard open unattended  
❌ Use the same password as other accounts  

---

## 📱 Mobile Access

The dashboard works on mobile devices!

**Tips for mobile use:**
- Turn phone landscape for better table viewing
- Use search to find specific items quickly
- Export data on desktop for easier viewing

---

## ⚙️ Common Tasks

### Daily Tasks
- [ ] Check new bookings
- [ ] Read and respond to contact messages
- [ ] Verify calendar events are correct

### Weekly Tasks
- [ ] Review all pending bookings
- [ ] Check subscriber growth
- [ ] Export data for backup

### Monthly Tasks
- [ ] Export all data (bookings, subscribers, messages)
- [ ] Analyze booking trends
- [ ] Send newsletter to subscribers
- [ ] Archive old messages

---

## 🆘 Troubleshooting

### Can't Login
**Problem:** "Invalid credentials" error  
**Solution:** 
1. Double-check email and password
2. Check caps lock is off
3. Contact developer for password reset

### No Data Showing
**Problem:** Tables are empty  
**Solution:**
1. Click the "Refresh" button
2. Check internet connection
3. Verify backend is deployed

### Export Not Working
**Problem:** CSV download fails  
**Solution:**
1. Check pop-up blocker settings
2. Try a different browser
3. Ensure data exists to export

### Calendar Links Don't Work
**Problem:** "View" link doesn't open calendar  
**Solution:**
1. Make sure you're logged into Google
2. Check that calendar integration is set up
3. Verify you have access to the shared calendar

---

## 💡 Pro Tips

### Booking Management
- **Add calendar colors** - Color-code online vs onsite sessions
- **Set up email filters** - Auto-label booking notifications
- **Create templates** - Save response templates for common questions
- **Block buffer time** - Add 15 min before/after sessions in calendar

### Subscriber Growth
- **Promote newsletter** - Mention it in sessions and social media
- **Add value** - Share exclusive content with subscribers
- **Consistency** - Send updates monthly or bi-monthly
- **Track growth** - Export monthly to see trends

### Message Response
- **Quick replies** - Have templates for common inquiries
- **Professional tone** - Even for simple questions
- **Follow up** - Set reminders for pending responses
- **Archive important** - Export significant conversations

---

## 📊 Analytics & Insights

### Track Your Growth

Export data monthly and analyze:

**Booking Trends:**
- Which days/times are most popular?
- Online vs onsite preference?
- Seasonal patterns?
- Average lead time (booking → session date)?

**Subscriber Growth:**
- How many new subscribers per month?
- Which blog posts drive subscriptions?
- Growth rate over time?

**Message Patterns:**
- Common questions/topics?
- Response time average?
- Which pages drive most contacts?

---

## 🎯 Goals to Track

Set monthly goals:

- [ ] Number of bookings
- [ ] Subscriber growth target
- [ ] Average response time
- [ ] Session completion rate
- [ ] Newsletter open rate (if using email platform)

---

## 📞 Getting Help

### Technical Issues
Contact your developer if you experience:
- Login problems
- Data not loading
- Export errors
- Calendar integration issues

### Feature Requests
Want new dashboard features? Discuss with your developer:
- Custom reports
- Email automation
- Booking confirmations
- Calendar availability management

---

## 🎉 Quick Reference

**Login:** `your-site.com/admin/login`  
**Refresh Data:** Click refresh button (top right)  
**Export:** Click "Export CSV" in each section  
**Search:** Use search box at top  
**Logout:** Click "Logout" button  
**Calendar:** Click "View" link in bookings  

---

## 📚 Related Documentation

- **Setup:** [DEPLOYMENT_FINAL.md](./DEPLOYMENT_FINAL.md)
- **Technical:** [README.md](./README.md)
- **Calendar:** [CALENDAR_QUICK_START.md](./CALENDAR_QUICK_START.md)

---

**Happy managing! If you have questions, refer to this guide or contact your developer. 🎨✨**
