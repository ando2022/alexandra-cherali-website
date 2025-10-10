# Deployment Steps - Quick Checklist

Print this page and check off each step as you complete it.

---

## ✅ Pre-Deployment Setup

- [ ] **Supabase account created** (https://supabase.com)
- [ ] **Vercel account created** (https://vercel.com)
- [ ] **Resend account created** (https://resend.com)
- [ ] **GitHub account created** (https://github.com)
- [ ] **Node.js installed** (v18+)
- [ ] **Supabase CLI installed:** `npm install -g supabase`
- [ ] **Google Calendar API configured** (see GOOGLE_CALENDAR_SETUP.md)

---

## 📦 Step 1: Prepare Environment Variables

### Get Supabase Credentials
- [ ] Go to Supabase Dashboard → Project Settings → API
- [ ] Copy **Project URL** → Extract project ID
- [ ] Copy **anon public key**
- [ ] Copy **service_role key** (for backend only)

### Get Resend API Key
- [ ] Go to Resend Dashboard → API Keys
- [ ] Create new API key
- [ ] Copy the key

### Prepare Google Calendar
- [ ] Service account JSON ready
- [ ] Calendar ID ready
- [ ] Calendar shared with service account

---

## 🔧 Step 2: Deploy Backend (Supabase)

### Login and Link
- [ ] Run: `supabase login`
- [ ] Run: `supabase link --project-ref YOUR_PROJECT_REF`

### Set Secrets in Supabase
Go to **Project Settings → Edge Functions → Manage secrets**

- [ ] `GOOGLE_CALENDAR_CREDENTIALS` = Service account JSON
- [ ] `GOOGLE_CALENDAR_ID` = Your calendar ID
- [ ] `RESEND_API_KEY` = Your Resend API key
- [ ] `ADMIN_EMAIL` = Alexandra's notification email

### Deploy Server
- [ ] Run: `./deploy.sh` OR `supabase functions deploy server`
- [ ] Verify: Test health endpoint
  ```bash
  curl https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/health
  ```

### Create Admin User
- [ ] Go to Supabase Dashboard → Authentication → Users
- [ ] Click "Add user"
- [ ] Email: admin@example.com (or your email)
- [ ] Password: Choose a strong password
- [ ] **SAVE THESE CREDENTIALS!**

---

## 🌐 Step 3: Deploy Frontend (Vercel)

### Push to GitHub
- [ ] Run: `git init`
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Initial deployment"`
- [ ] Create GitHub repo
- [ ] Run: `git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git`
- [ ] Run: `git push -u origin main`

### Deploy on Vercel
- [ ] Go to Vercel → New Project
- [ ] Import your GitHub repository
- [ ] Framework: Vite (auto-detected)

### Add Environment Variables in Vercel
- [ ] `VITE_SUPABASE_PROJECT_ID` = your-project-id
- [ ] `VITE_SUPABASE_ANON_KEY` = your-anon-key

### Deploy
- [ ] Click "Deploy"
- [ ] Wait 2-3 minutes
- [ ] Copy your Vercel URL

---

## 🧪 Step 4: Test Everything

### Test Homepage
- [ ] Visit Vercel URL
- [ ] All pages load
- [ ] Navigation works
- [ ] Mobile responsive

### Test Booking System
- [ ] Go to Art Education page
- [ ] Click "Book a Session"
- [ ] Fill form with TEST data
- [ ] Submit
- [ ] ✅ Success message appears
- [ ] ✅ Google Calendar event created
- [ ] ✅ Calendar invite received (check email)
- [ ] ✅ Admin email notification received

### Test Newsletter
- [ ] Go to Blog page
- [ ] Subscribe with test email
- [ ] ✅ Success message appears
- [ ] ✅ Admin email notification received

### Test Contact Form
- [ ] Go to Contact page
- [ ] Submit test message
- [ ] ✅ Success message appears
- [ ] ✅ Admin email notification received

### Test Admin Dashboard
- [ ] Go to `/admin/login`
- [ ] Login with admin credentials
- [ ] ✅ Dashboard loads
- [ ] ✅ Test booking appears
- [ ] ✅ Test subscriber appears
- [ ] ✅ Test contact appears
- [ ] ✅ Export CSV works
- [ ] ✅ Search works

---

## 🎨 Step 5: Optional - Custom Domain

- [ ] Purchase domain (e.g., alexandracherali.com)
- [ ] Go to Vercel → Settings → Domains
- [ ] Add domain
- [ ] Configure DNS records:
  - [ ] A record: @ → 76.76.21.21
  - [ ] CNAME: www → cname.vercel-dns.com
- [ ] Wait for DNS propagation (up to 48 hours)
- [ ] ✅ HTTPS enabled automatically

---

## 📧 Step 6: Optional - Custom Email Domain

- [ ] Go to Resend → Domains
- [ ] Add your domain
- [ ] Configure DNS records (provided by Resend)
- [ ] Wait for verification
- [ ] Update email.tsx from address
- [ ] Redeploy server function

---

## ✨ Step 7: Final Configuration

### Update Social Links
- [ ] Update LinkedIn profile with website URL
- [ ] Update Instagram bio with website URL
- [ ] Update email signature

### Add Real Content
- [ ] Replace profile photo
- [ ] Add real portfolio PDF
- [ ] Update gallery images
- [ ] Review all text content

### Set Up Monitoring
- [ ] Bookmark admin dashboard
- [ ] Enable Google Calendar notifications
- [ ] Set up daily email check

---

## 📊 Post-Deployment Checklist

### Week 1
- [ ] Monitor Supabase logs daily
- [ ] Test booking flow
- [ ] Verify emails are sending
- [ ] Check Google Calendar sync

### Month 1
- [ ] Export all data for backup
- [ ] Review analytics (if set up)
- [ ] Add new blog post
- [ ] Update portfolio if needed

### Ongoing
- [ ] Check admin email daily
- [ ] Export data monthly
- [ ] Update content quarterly
- [ ] Review security annually

---

## 🆘 If Something Goes Wrong

### Backend Not Working
1. Check Supabase logs: `supabase functions logs server`
2. Verify all secrets are set
3. Redeploy: `supabase functions deploy server`

### Frontend Not Working
1. Check Vercel deployment logs
2. Verify environment variables
3. Redeploy from Vercel dashboard

### Emails Not Sending
1. Check Resend dashboard
2. Verify RESEND_API_KEY is set
3. Check spam folder

### Admin Login Not Working
1. Verify user exists in Supabase Auth
2. Check email/password
3. Clear browser cache

---

## 🎉 Success!

When all checkboxes are complete, your website is live!

**Your website:** https://your-site.vercel.app  
**Admin dashboard:** https://your-site.vercel.app/admin/login

---

## 📚 Next Steps

Refer to these guides:
- Daily operations: [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
- Admin guide: [ADMIN_GUIDE.md](./ADMIN_GUIDE.md)
- Full docs: [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)

---

**Completion Date:** _______________

**Notes:**
_______________________________________
_______________________________________
_______________________________________
_______________________________________

---

🚀 **Congratulations on your deployment!**
