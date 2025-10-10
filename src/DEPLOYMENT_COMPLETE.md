# Complete Deployment Guide - Alexandra Cherali Website

**Status: Ready for Deployment** ✅

This guide will walk you through deploying your complete website with all features:
- ✅ Booking system with Google Calendar integration
- ✅ Email notifications (Resend)
- ✅ Admin dashboard with authentication
- ✅ Newsletter and contact form
- ✅ Full backend (Supabase)
- ✅ Frontend (Vercel)

---

## 📋 Pre-Deployment Checklist

Before you begin, make sure you have:

- [ ] Supabase account (https://supabase.com)
- [ ] Vercel account (https://vercel.com)
- [ ] Resend account (https://resend.com) - Free tier is fine
- [ ] Google Calendar API set up (see GOOGLE_CALENDAR_SETUP.md)
- [ ] GitHub account
- [ ] Node.js installed (v18+)
- [ ] Supabase CLI installed: `npm install -g supabase`

---

## Part 1: Deploy Backend to Supabase (15 minutes)

### Step 1: Install Supabase CLI

```bash
npm install -g supabase
```

### Step 2: Login to Supabase

```bash
supabase login
```

This will open a browser window. Login with your Supabase credentials.

### Step 3: Link Your Project

```bash
supabase link --project-ref YOUR_PROJECT_REF
```

**Where to find PROJECT_REF:**
1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to **Project Settings** → **General**
4. Copy the **Reference ID**

### Step 4: Set Up Environment Secrets

Go to your Supabase Dashboard:
1. **Project Settings** → **Edge Functions**
2. Click **"Manage secrets"** or **"Add secret"**

Add these secrets:

```
GOOGLE_CALENDAR_CREDENTIALS = <Your service account JSON>
GOOGLE_CALENDAR_ID = <Your calendar ID>
RESEND_API_KEY = <Your Resend API key>
ADMIN_EMAIL = <Alexandra's email for notifications>
```

**Getting RESEND_API_KEY:**
1. Sign up at https://resend.com (free tier)
2. Go to **API Keys**
3. Create a new API key
4. Copy it to the secret

**Note:** GOOGLE_CALENDAR credentials are already configured ✓

### Step 5: Deploy the Server Function

Option A - Use the deployment script:
```bash
chmod +x deploy.sh
./deploy.sh
```

Option B - Manual deployment:
```bash
supabase functions deploy server
```

### Step 6: Verify Deployment

Test the health endpoint:
```bash
curl https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/health
```

You should see: `{"status":"ok","timestamp":"..."}`

### Step 7: Create Admin User

Open the Supabase Dashboard and go to **Authentication** → **Users** → **Add user**

Or use the SQL Editor:

```sql
-- In Supabase Dashboard → SQL Editor
SELECT auth.signup(
  'admin@example.com',  -- Replace with Alexandra's email
  'your-secure-password',  -- Choose a strong password
  '{"role": "admin"}'
);
```

**Important:** Save the email and password - you'll need them to login to the admin dashboard!

---

## Part 2: Deploy Frontend to Vercel (10 minutes)

### Step 1: Push Code to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Create a GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Click **"New Project"**
3. Import your GitHub repository
4. Configure the project:

**Build Settings:**
- Framework Preset: **Vite**
- Build Command: `npm run build` (auto-detected)
- Output Directory: `dist` (auto-detected)

**Environment Variables:**

Click **"Add Environment Variable"** and add:

```
VITE_SUPABASE_PROJECT_ID = your-supabase-project-id
VITE_SUPABASE_ANON_KEY = your-supabase-anon-key
```

**Where to find these:**
- Go to Supabase Dashboard → **Project Settings** → **API**
- Copy **Project URL** (the ID is the part before `.supabase.co`)
- Copy **anon/public key**

5. Click **"Deploy"**

### Step 3: Wait for Deployment

Vercel will build and deploy your site. This takes 2-3 minutes.

Once complete, you'll get a URL like: `https://your-site.vercel.app`

---

## Part 3: Test Everything (10 minutes)

### Test 1: Homepage
- [ ] Visit your Vercel URL
- [ ] Check all pages load correctly
- [ ] Check navigation works

### Test 2: Booking System
1. Go to **Art Education** page
2. Click **"Book a Session"**
3. Fill out the form with TEST data
4. Use your own email
5. Submit

**Verify:**
- [ ] Success message appears
- [ ] Check Google Calendar → Event created
- [ ] Check your email → Calendar invite received
- [ ] Check Alexandra's email → Booking notification received

### Test 3: Newsletter Subscription
1. Go to **Blog** page
2. Enter email in newsletter form
3. Submit

**Verify:**
- [ ] Success message appears
- [ ] Check Alexandra's email → Subscriber notification received

### Test 4: Contact Form
1. Go to **Contact** page
2. Fill out contact form
3. Submit

**Verify:**
- [ ] Success message appears
- [ ] Check Alexandra's email → Contact notification received

### Test 5: Admin Dashboard
1. Go to `https://your-site.vercel.app/admin/login`
2. Login with admin credentials
3. Check all tabs:
   - [ ] Bookings tab shows test booking
   - [ ] Subscribers tab shows test subscriber
   - [ ] Messages tab shows test contact
4. Try exporting data to CSV
5. Test search functionality

---

## Part 4: Optional - Custom Domain

### Step 1: Purchase Domain

Buy a domain from:
- Namecheap (https://namecheap.com)
- Google Domains (https://domains.google)
- GoDaddy, etc.

Suggested: `alexandracherali.com`

### Step 2: Add Domain to Vercel

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Domains**
4. Click **"Add"**
5. Enter your domain name
6. Follow the DNS configuration instructions

### Step 3: Configure DNS

In your domain registrar, add these DNS records:

**For apex domain (alexandracherali.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 4: Wait for DNS Propagation

This can take up to 48 hours, but usually completes in a few hours.

### Step 5: Enable HTTPS

Vercel automatically provisions SSL certificate. Once DNS is configured, HTTPS will be enabled automatically.

---

## Part 5: Post-Deployment Configuration

### Update Email Sender

By default, emails come from `noreply@resend.dev`. To use a custom domain:

1. Go to Resend Dashboard
2. **Domains** → **Add Domain**
3. Add your custom domain
4. Configure DNS records (provided by Resend)
5. Once verified, update `/supabase/functions/server/email.tsx`:

```typescript
from: 'Alexandra Cherali <hello@alexandracherali.com>',
```

6. Redeploy: `supabase functions deploy server`

### Set Up Email Templates (Optional)

The email templates are in `/supabase/functions/server/email.tsx`. You can customize:
- Colors and styling
- Content and messaging
- Add logo/branding

After changes, redeploy the server function.

---

## Part 6: Maintenance & Monitoring

### Check Logs Regularly

**Supabase Logs:**
```bash
supabase functions logs server --follow
```

Or in Dashboard: **Edge Functions** → **server** → **Logs**

**Vercel Logs:**
Go to Dashboard → Your Project → **Deployments** → Click latest → **Logs**

### Export Data Regularly

Use the admin dashboard to export:
- Bookings (for record-keeping)
- Newsletter subscribers (for email campaigns)
- Contact messages (for follow-up)

### Update Content

**Blog Posts:**
Currently hardcoded. To add new posts, edit `/components/Blog.tsx` and redeploy.

**Portfolio Projects:**
Edit `/components/Portfolio.tsx` and redeploy.

**Gallery Images:**
Edit `/components/Gallery.tsx` and redeploy.

---

## 🎯 Success Checklist

After deployment, verify:

**Backend:**
- [ ] Server function is active
- [ ] Health endpoint responds
- [ ] Google Calendar events are created
- [ ] Email notifications are sent
- [ ] Admin can login
- [ ] Data is stored correctly

**Frontend:**
- [ ] All pages load
- [ ] Navigation works
- [ ] Forms submit successfully
- [ ] Images load properly
- [ ] Responsive on mobile
- [ ] Works in all browsers

**Integrations:**
- [ ] Google Calendar integration works
- [ ] Email notifications work
- [ ] Admin dashboard accessible
- [ ] Newsletter subscription works
- [ ] Contact form works
- [ ] Booking system works

---

## 🚨 Troubleshooting

### Backend Issues

**Problem: Server function not responding**
- Check deployment: `supabase functions list`
- View logs: `supabase functions logs server`
- Redeploy: `supabase functions deploy server`

**Problem: Calendar events not creating**
- Check Google Calendar credentials are set
- Verify calendar is shared with service account
- Check server logs for errors

**Problem: Emails not sending**
- Verify RESEND_API_KEY is set
- Check Resend dashboard for errors
- Verify ADMIN_EMAIL is correct

### Frontend Issues

**Problem: Build fails on Vercel**
- Check build logs in Vercel
- Verify environment variables are set
- Test build locally: `npm run build`

**Problem: API calls failing**
- Verify VITE_SUPABASE_PROJECT_ID is correct
- Verify VITE_SUPABASE_ANON_KEY is correct
- Check browser console for CORS errors

### Admin Dashboard Issues

**Problem: Can't login**
- Verify admin user exists in Supabase Auth
- Check email/password are correct
- Clear browser cache and try again

**Problem: No data showing**
- Submit test forms to populate data
- Check browser console for errors
- Verify API endpoints are accessible

---

## 📊 Costs Breakdown

### Current Setup (Estimated Monthly)

| Service | Plan | Cost |
|---------|------|------|
| Supabase | Free tier | $0 |
| Vercel | Hobby (free) | $0 |
| Resend | Free tier (3,000 emails/mo) | $0 |
| Google Calendar API | Free | $0 |
| **Total** | | **$0/month** |

### With Custom Domain

| Service | Plan | Cost |
|---------|------|------|
| Domain Registration | Annual | ~$12-15/year |
| Everything else | Free tier | $0 |
| **Total** | | **~$1-2/month** |

### If You Outgrow Free Tiers

- **Vercel Pro:** $20/month (custom domains, more builds)
- **Supabase Pro:** $25/month (more database storage/bandwidth)
- **Resend Starter:** $20/month (50,000 emails)

**You won't need paid plans unless:**
- Traffic exceeds 100GB/month
- Database exceeds 500MB
- More than 3,000 emails/month

---

## 🎉 You're Live!

Congratulations! Your website is now live with:

✅ Professional art curator portfolio  
✅ Automated booking system  
✅ Google Calendar integration  
✅ Email notifications  
✅ Admin dashboard  
✅ Newsletter system  
✅ Contact form  
✅ Blog with articles  

### Share Your Website

Update these with your new URL:

1. **LinkedIn Profile**
   - Go to https://www.linkedin.com/in/emotional1healing/
   - Edit profile → Add website URL

2. **Instagram Bio**
   - Update @alexandra_love4art bio
   - Add website link

3. **Email Signature**
   - Add website URL

4. **Business Cards**
   - Print new cards with website

### Next Steps

1. **Content Updates:**
   - Add real portfolio PDF
   - Update gallery with actual images
   - Add more blog posts

2. **SEO Optimization:**
   - Add meta descriptions
   - Create sitemap
   - Submit to Google Search Console

3. **Analytics:**
   - Add Google Analytics
   - Track bookings and conversions

4. **Advanced Features:**
   - Payment integration for deposits
   - Automated email sequences
   - Client testimonials section
   - Multi-language support

---

## 📞 Support Resources

- **Supabase Docs:** https://supabase.com/docs
- **Vercel Docs:** https://vercel.com/docs
- **Resend Docs:** https://resend.com/docs
- **Google Calendar API:** https://developers.google.com/calendar

---

## 🔐 Security Reminders

- ✅ Never commit `.env` file to Git
- ✅ Keep admin password secure
- ✅ Regularly rotate API keys
- ✅ Monitor Supabase logs for suspicious activity
- ✅ Keep dependencies updated

---

**Questions?** Review the other documentation files:
- [QUICK_START_SUMMARY.md](./QUICK_START_SUMMARY.md)
- [GOOGLE_CALENDAR_SETUP.md](./GOOGLE_CALENDAR_SETUP.md)
- [ADMIN_GUIDE.md](./ADMIN_GUIDE.md)

**Happy launching! 🚀**
