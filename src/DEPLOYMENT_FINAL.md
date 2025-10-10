# Complete Deployment Guide - Alexandra Cherali Website

This is your final deployment guide with all features ready: Admin Dashboard, Email Notifications, Google Calendar Integration.

---

## 🎯 What's Ready

✅ **Complete Website** - All pages and features  
✅ **Admin Dashboard** - Manage bookings, subscribers, messages  
✅ **Email Notifications** - Get notified of bookings, contacts, subscribers  
✅ **Google Calendar** - Auto-create events and send invites  
✅ **Database Backend** - Store all data securely  

---

## 📋 Prerequisites

Before starting, make sure you have:

- [x] Supabase account (free tier is fine)
- [x] Vercel account (free tier is fine)
- [x] GitHub account
- [x] Google account (for Calendar API)
- [x] Resend account (for emails - optional, free tier available)
- [x] Node.js 18+ installed
- [x] Supabase CLI installed (`npm install -g supabase`)
- [x] Git installed

---

## Phase 1: Backend Deployment (Supabase)

### Step 1.1: Link Supabase Project

```bash
# Login to Supabase
supabase login

# Link your project (get project-ref from Supabase dashboard URL)
supabase link --project-ref YOUR_PROJECT_REF
```

### Step 1.2: Configure Environment Variables

Your Supabase Edge Function needs these secrets. Set them in the Supabase Dashboard:

**Go to:** Dashboard → Project Settings → Edge Functions → Secrets

**Required Secrets:**

1. `GOOGLE_CALENDAR_CREDENTIALS` - ✅ Already set
2. `GOOGLE_CALENDAR_ID` - ✅ Already set
3. `RESEND_API_KEY` - Get from https://resend.com/api-keys
4. `ADMIN_EMAIL` - Your email for notifications (e.g., `alexandra@example.com`)

**How to get Resend API Key:**
1. Sign up at https://resend.com (free tier: 100 emails/day)
2. Go to API Keys → Create API Key
3. Copy the key and add to Supabase secrets

### Step 1.3: Deploy Server Function

```bash
# Deploy the server function
supabase functions deploy server

# Verify deployment
supabase functions list
```

**Expected output:**
```
┌────────┬────────────────┬─────────┬──────────────┐
│ NAME   │ VERSION        │ STATUS  │ CREATED AT   │
├────────┼────────────────┼─────────┼──────────────┤
│ server │ v1             │ ACTIVE  │ ...          │
└────────┴────────────────┴─────────┴──────────────┘
```

### Step 1.4: Create Admin User

Create an admin user to access the dashboard:

```bash
curl -X POST \
  https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/admin/signup \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "your-admin-email@example.com",
    "password": "your-secure-password",
    "name": "Alexandra Cherali"
  }'
```

Replace:
- `YOUR_PROJECT_ID` with your Supabase project ID
- `YOUR_ANON_KEY` with your Supabase anon key
- Email and password with your desired credentials

**Save these credentials securely!**

### Step 1.5: Test Backend

```bash
# Test health endpoint
curl https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/health

# Expected response:
# {"status":"ok","timestamp":"2025-01-10T..."}
```

---

## Phase 2: Frontend Deployment (Vercel)

### Step 2.1: Prepare Environment Variables

Create a `.env` file in your project root:

```env
VITE_SUPABASE_PROJECT_ID=your-project-id
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Get these from: Supabase Dashboard → Project Settings → API

### Step 2.2: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 2.3: Deploy to Vercel

**Option A: Using Vercel Dashboard (Recommended)**

1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Add Environment Variables:
   - `VITE_SUPABASE_PROJECT_ID` = your project ID
   - `VITE_SUPABASE_ANON_KEY` = your anon key
6. Click "Deploy"

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts and add environment variables when asked
```

### Step 2.4: Verify Deployment

Once deployed, test your site:

1. Visit your Vercel URL (e.g., `your-project.vercel.app`)
2. Test all pages load
3. Test booking system
4. Test newsletter subscription
5. Test contact form

---

## Phase 3: Admin Dashboard Access

### Step 3.1: Login to Admin

1. Go to `https://your-site.vercel.app/admin/login`
2. Enter the admin credentials you created in Step 1.4
3. You should see the dashboard

### Step 3.2: Admin Dashboard Features

The dashboard lets you:

✅ **View all bookings** - See date, time, client info, calendar links  
✅ **View subscribers** - Export newsletter emails as CSV  
✅ **View messages** - Read contact form submissions  
✅ **Export data** - Download CSV files for each section  
✅ **Search & filter** - Find specific entries quickly  

---

## Phase 4: Email Notifications Setup

### Step 4.1: Verify Resend Setup

1. Login to https://resend.com
2. Add your domain (optional, for custom sender email)
3. Or use the default `noreply@resend.dev` for testing

### Step 4.2: Update Email Settings (Optional)

To use a custom domain for emails, update `/supabase/functions/server/email.tsx`:

```typescript
from: 'Alexandra Cherali <hello@yourdomain.com>',
```

Then redeploy:

```bash
supabase functions deploy server
```

### Step 4.3: Test Email Notifications

1. Book a test session on your website
2. Check your admin email (set in `ADMIN_EMAIL` secret)
3. You should receive a booking notification

If you don't receive emails:
- Check Resend dashboard for delivery status
- Check spam folder
- Verify `RESEND_API_KEY` and `ADMIN_EMAIL` are set correctly

---

## Phase 5: Custom Domain (Optional)

### Step 5.1: Add Domain to Vercel

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `alexandracherali.com`)

### Step 5.2: Configure DNS

Add these records to your domain provider:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

### Step 5.3: Wait for Propagation

DNS changes can take up to 48 hours. Check status in Vercel dashboard.

---

## 🧪 Testing Checklist

After deployment, test everything:

### Frontend Tests
- [ ] All pages load without errors
- [ ] Navigation works on mobile and desktop
- [ ] Images load correctly
- [ ] External links work (LinkedIn, Instagram)

### Booking System Tests
- [ ] Can select date and time
- [ ] Form validation works
- [ ] Submission succeeds
- [ ] Success message appears
- [ ] Calendar event created in Google Calendar
- [ ] Calendar invite received by email
- [ ] Admin receives email notification
- [ ] Booking appears in admin dashboard

### Newsletter Tests
- [ ] Subscription form works
- [ ] Success message appears
- [ ] Email saved in database
- [ ] Admin receives notification
- [ ] Subscriber appears in admin dashboard

### Contact Form Tests
- [ ] Form validation works
- [ ] Submission succeeds
- [ ] Success message appears
- [ ] Admin receives email notification
- [ ] Message appears in admin dashboard

### Admin Dashboard Tests
- [ ] Can login with credentials
- [ ] All tabs load (Bookings, Subscribers, Messages)
- [ ] Data displays correctly
- [ ] Search works
- [ ] Export CSV works
- [ ] Calendar links work
- [ ] Logout works

---

## 📊 Monitoring & Maintenance

### View Backend Logs

```bash
# Follow server logs in real-time
supabase functions logs server --follow
```

Or in Dashboard: Edge Functions → server → Logs

### Common Issues & Solutions

**Issue: Emails not sending**
- Solution: Check Resend dashboard for errors
- Verify API key is correct
- Check daily limit (100 emails/day on free tier)

**Issue: Calendar events not creating**
- Solution: See [CALENDAR_QUICK_START.md](./CALENDAR_QUICK_START.md)
- Verify Google Calendar credentials
- Check service account permissions

**Issue: Admin can't login**
- Solution: Verify admin user was created
- Check Supabase Auth dashboard
- Try password reset

**Issue: Backend errors**
- Solution: Check Supabase function logs
- Verify all environment variables are set
- Redeploy server function

---

## 🔒 Security Best Practices

### After Deployment

1. **Change default admin password** if you used a temporary one
2. **Don't share admin credentials** publicly
3. **Keep API keys secret** - never commit to Git
4. **Use strong passwords** for admin accounts
5. **Monitor logs** for suspicious activity
6. **Set up alerts** in Supabase for unusual usage

### Regular Maintenance

- [ ] Check backend logs weekly
- [ ] Export booking data monthly (backup)
- [ ] Review Resend usage (stay under limits)
- [ ] Update dependencies quarterly
- [ ] Test booking flow monthly

---

## 🎉 You're Live!

Congratulations! Your website is now live with:

✅ Professional design and content  
✅ Working booking system  
✅ Google Calendar integration  
✅ Email notifications  
✅ Admin dashboard  
✅ Newsletter system  
✅ Contact form  

### Next Steps

1. **Share your website:**
   - Update LinkedIn with website URL
   - Update Instagram bio
   - Email your network

2. **Create content:**
   - Add more blog posts
   - Update portfolio with new projects
   - Add real testimonials

3. **Marketing:**
   - Share booking link on social media
   - Create Instagram posts about services
   - Network with art communities

---

## 📞 Support Resources

**Documentation:**
- [Quick Start](./QUICK_START_SUMMARY.md)
- [Calendar Setup](./GOOGLE_CALENDAR_SETUP.md)
- [Supabase Setup](./SUPABASE_SETUP.md)
- [All Docs](./DOCUMENTATION_INDEX.md)

**External Resources:**
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Resend Docs](https://resend.com/docs)

**Check Logs:**
- Frontend errors: Browser Console (F12)
- Backend errors: Supabase Dashboard → Functions → Logs
- Email delivery: Resend Dashboard → Logs

---

## 🚀 Your Deployment Commands (Quick Reference)

```bash
# Backend
supabase login
supabase link --project-ref YOUR_REF
supabase functions deploy server

# Create admin
curl -X POST https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/admin/signup \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"secure-password","name":"Admin"}'

# Frontend
git add .
git commit -m "Deploy"
git push origin main

# Then deploy via Vercel dashboard
```

---

**Need help?** Check the troubleshooting sections in each document or review the Supabase/Vercel logs.

**Good luck with your launch! 🎨✨**
