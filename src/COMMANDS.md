# Quick Commands Reference

Copy and paste these commands during deployment.

---

## 🔧 Backend Deployment

### Install Supabase CLI
```bash
npm install -g supabase
```

### Login
```bash
supabase login
```

### Link Project
```bash
supabase link --project-ref YOUR_PROJECT_REF
```

### Deploy Server
```bash
supabase functions deploy server
```

### View Logs
```bash
supabase functions logs server --follow
```

### Test Health Endpoint
```bash
curl https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/health
```

---

## 🌐 Frontend Deployment

### Create .env file
```bash
touch .env
```

### Install Dependencies
```bash
npm install
```

### Test Locally
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Initialize Git
```bash
git init
git add .
git commit -m "Initial deployment"
```

### Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

---

## 🔍 Testing Commands

### Test Backend Health
```bash
curl https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/health
```

### Test Booking Endpoint
```bash
curl -X POST https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/bookings \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -d '{
    "date": "2025-01-15",
    "time": "10:00 AM",
    "sessionType": "online",
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "Test booking"
  }'
```

---

## 📝 Environment Variables

### Frontend (.env)
```
VITE_SUPABASE_PROJECT_ID=your-project-id
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Backend (Supabase Secrets)
```
GOOGLE_CALENDAR_CREDENTIALS=<service-account-json>
GOOGLE_CALENDAR_ID=<calendar-id>
RESEND_API_KEY=<resend-api-key>
ADMIN_EMAIL=<your-email>
```

---

## 🚀 Deployment Script

Run automated deployment:
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 🔄 Redeployment

### Backend Only
```bash
supabase functions deploy server
```

### Frontend Only
```bash
git add .
git commit -m "Update content"
git push
```
(Vercel auto-deploys on push)

---

## 📊 Monitoring

### View Supabase Logs
```bash
supabase functions logs server --follow
```

### View Supabase Function Status
```bash
supabase functions list
```

### Check Project Info
```bash
supabase projects list
```

---

## 🗑️ Cleanup Commands

### Remove Old Deployments (if needed)
```bash
supabase functions delete server
```

### Unlink Project
```bash
supabase unlink
```

---

## 📦 NPM Scripts

Available in package.json:

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run linter
```

---

## 🔐 Admin User Creation (SQL)

Run in Supabase SQL Editor:

```sql
SELECT auth.signup(
  'your-email@example.com',
  'your-secure-password',
  '{"role": "admin"}'
);
```

---

## 🌍 URLs to Remember

Replace `YOUR_PROJECT_ID` with your actual project ID:

### Backend
```
https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/health
https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/bookings
https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/newsletter/subscribe
https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/contact
```

### Frontend (replace with your Vercel URL)
```
https://your-site.vercel.app
https://your-site.vercel.app/admin/login
https://your-site.vercel.app/admin/dashboard
```

---

## 🎯 Common Tasks

### Update Blog Post
1. Edit `/components/Blog.tsx`
2. `git add . && git commit -m "Add new blog post" && git push`
3. Vercel auto-deploys

### Update Gallery
1. Edit `/components/Gallery.tsx`
2. `git add . && git commit -m "Update gallery" && git push`
3. Vercel auto-deploys

### Change Email Templates
1. Edit `/supabase/functions/server/email.tsx`
2. `supabase functions deploy server`

### Export Data
1. Login to admin dashboard
2. Go to relevant tab
3. Click "Export CSV"

---

## 📱 Quick Links

- **Supabase Dashboard:** https://supabase.com/dashboard
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Resend Dashboard:** https://resend.com/emails
- **Google Calendar:** https://calendar.google.com
- **GitHub Repos:** https://github.com/YOUR_USERNAME?tab=repositories

---

**Bookmark this page for quick reference!** 📌
