# Deployment Checklist

Use this checklist to deploy Alexandra's website step by step.

## ✅ Backend Setup (Supabase)

### 1. Supabase Configuration
- [ ] Supabase project created (already done ✓)
- [ ] Environment variables added to `.env`:
  - [ ] `VITE_SUPABASE_PROJECT_ID`
  - [ ] `VITE_SUPABASE_ANON_KEY`

### 2. Google Calendar Setup
- [ ] Google Cloud project created
- [ ] Google Calendar API enabled
- [ ] Service account created and JSON key downloaded
- [ ] Calendar shared with service account email
- [ ] Supabase secrets configured:
  - [ ] `GOOGLE_CALENDAR_CREDENTIALS` (already set ✓)
  - [ ] `GOOGLE_CALENDAR_ID` (already set ✓)

### 3. Deploy Server Function
```bash
# Login to Supabase CLI
supabase login

# Link your project
supabase link --project-ref YOUR_PROJECT_REF

# Deploy the server
supabase functions deploy server
```

- [ ] Server function deployed successfully
- [ ] Check logs for any errors: Supabase Dashboard → Functions → server → Logs

### 4. Test Backend Features
- [ ] Test booking submission
- [ ] Check calendar event created in Google Calendar
- [ ] Test newsletter subscription
- [ ] Test contact form submission
- [ ] Verify calendar invite received by email

## 🚀 Frontend Deployment (Vercel)

### 1. Prepare Repository
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

- [ ] Code pushed to GitHub

### 2. Deploy to Vercel
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Sign in with GitHub
- [ ] Click "New Project"
- [ ] Import your GitHub repository
- [ ] Configure environment variables:
  - [ ] `VITE_SUPABASE_PROJECT_ID`
  - [ ] `VITE_SUPABASE_ANON_KEY`
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete

### 3. Verify Deployment
- [ ] Visit your Vercel URL (e.g., `your-project.vercel.app`)
- [ ] Test all pages load correctly:
  - [ ] Home page
  - [ ] Portfolio
  - [ ] Gallery
  - [ ] Art Education
  - [ ] Blog
  - [ ] Contact
- [ ] Test booking system end-to-end
- [ ] Test newsletter subscription
- [ ] Test contact form
- [ ] Check mobile responsiveness

## 🌐 Custom Domain (Optional)

### 1. Purchase Domain
- [ ] Domain purchased (e.g., from Namecheap, Google Domains, etc.)

### 2. Configure in Vercel
- [ ] Go to Vercel Dashboard → Your Project → Settings → Domains
- [ ] Add your custom domain
- [ ] Follow DNS configuration instructions
- [ ] Wait for DNS propagation (can take up to 48 hours)

### 3. Update Social Links
- [ ] Update any hardcoded links in the website
- [ ] Update social media profiles with new domain

## 📧 Optional Enhancements

### Email Notifications
- [ ] Set up email service (Resend, SendGrid, etc.)
- [ ] Configure email templates
- [ ] Test email notifications for bookings
- [ ] Test email notifications for contact form

### Admin Dashboard
- [ ] Create admin authentication
- [ ] Build admin dashboard
- [ ] Test booking management
- [ ] Test subscriber export

### Analytics
- [ ] Set up Google Analytics
- [ ] Configure Vercel Analytics
- [ ] Set up conversion tracking for bookings

## 🧪 Final Testing

### Functionality Testing
- [ ] Book a test session and verify:
  - [ ] Booking saved in database
  - [ ] Calendar event created
  - [ ] Email invite received
  - [ ] Google Meet link works (for online sessions)
  - [ ] Success message displayed

- [ ] Test newsletter subscription:
  - [ ] Submission works
  - [ ] Email stored in database
  - [ ] Confirmation message shown

- [ ] Test contact form:
  - [ ] Form submits successfully
  - [ ] Message stored in database
  - [ ] Success message displayed

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Device Testing
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

### Performance
- [ ] Page load speed acceptable
- [ ] Images optimized
- [ ] No console errors
- [ ] No broken links

## 📱 Post-Launch

### Share the Website
- [ ] Update LinkedIn profile with website link
- [ ] Update Instagram bio with website link
- [ ] Share on social media
- [ ] Email existing contacts

### Monitor
- [ ] Check Supabase function logs regularly
- [ ] Monitor for booking submissions
- [ ] Check newsletter signups
- [ ] Review contact form messages

### Maintenance
- [ ] Set calendar reminder to check bookings weekly
- [ ] Export newsletter subscribers monthly
- [ ] Respond to contact form messages within 24 hours
- [ ] Update blog with new content regularly

## 🆘 Troubleshooting

If something doesn't work:

1. **Check Supabase Logs**
   - Dashboard → Functions → server → Logs

2. **Check Browser Console**
   - Right-click → Inspect → Console

3. **Check Vercel Logs**
   - Dashboard → Your Project → Deployments → [Latest] → Logs

4. **Common Issues**
   - CORS errors → Check server CORS configuration
   - 404 errors → Check API endpoint URLs
   - Auth errors → Verify environment variables
   - Calendar errors → Check Google Calendar sharing and permissions

## ✅ Launch Ready!

Once all items are checked, your website is ready to launch! 🎉

---

**Need Help?**
Refer to:
- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) for backend issues
- [GOOGLE_CALENDAR_SETUP.md](./GOOGLE_CALENDAR_SETUP.md) for calendar issues
- [CALENDAR_QUICK_START.md](./CALENDAR_QUICK_START.md) for quick testing
- [README.md](./README.md) for general documentation
