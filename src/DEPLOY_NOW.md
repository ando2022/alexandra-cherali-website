# 🚀 DEPLOY NOW - Live Walkthrough

Follow these exact steps to deploy your website right now.

---

## ⚡ STEP 1: Deploy Backend (15 minutes)

### 1.1 Install Supabase CLI

Open your terminal and run:

```bash
npm install -g supabase
```

Wait for it to complete, then verify:

```bash
supabase --version
```

You should see a version number.

---

### 1.2 Login to Supabase

```bash
supabase login
```

This opens your browser. Login with your Supabase credentials.

---

### 1.3 Get Your Project Reference ID

1. Go to https://supabase.com/dashboard
2. Select your project
3. Click **Settings** (⚙️ icon in sidebar)
4. Click **General**
5. Copy the **Reference ID** (looks like: `abcdefghijklmnop`)

**Save this ID - you'll need it!**

---

### 1.4 Link Your Project

In your terminal, in this project folder:

```bash
supabase link --project-ref YOUR_REFERENCE_ID
```

Replace `YOUR_REFERENCE_ID` with the ID you just copied.

---

### 1.5 Set Up Resend (Email Service)

1. Go to https://resend.com
2. Sign up (free account)
3. Once logged in, go to **API Keys**
4. Click **Create API Key**
5. Name it: "Alexandra Website"
6. Copy the API key (starts with `re_...`)

**Save this key - you'll need it next!**

---

### 1.6 Configure Supabase Secrets

Go to Supabase Dashboard:

1. **Project Settings** → **Edge Functions**
2. Scroll to **Secrets** section
3. Click **Add secret** for each of these:

**Add these secrets:**

```
Name: RESEND_API_KEY
Value: <paste your Resend API key from above>
```

```
Name: ADMIN_EMAIL
Value: <your email address for notifications>
```

**Note:** These are already set (you told me earlier):
- ✅ `GOOGLE_CALENDAR_CREDENTIALS`
- ✅ `GOOGLE_CALENDAR_ID`

---

### 1.7 Deploy the Server Function

In your terminal:

**Option A - Use the script:**
```bash
chmod +x deploy.sh
./deploy.sh
```

**Option B - Manual command:**
```bash
supabase functions deploy server
```

Wait for deployment to complete (30-60 seconds).

---

### 1.8 Test Backend Deployment

Get your project ID from the Supabase URL (it's the first part of your project URL before `.supabase.co`)

Test the health endpoint:

```bash
curl https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/health
```

You should see: `{"status":"ok","timestamp":"..."}`

**✅ Backend deployed!**

---

### 1.9 Create Admin User

Go to Supabase Dashboard:

1. **Authentication** → **Users**
2. Click **Add user** → **Create new user**
3. Fill in:
   - **Email:** your email address
   - **Password:** choose a strong password (save this!)
   - **Auto Confirm User:** ✅ Check this box

4. Click **Create user**

**IMPORTANT: Save your admin email and password somewhere safe!**

---

## ⚡ STEP 2: Deploy Frontend (10 minutes)

### 2.1 Create .env File

In your project root, create a file called `.env`:

```bash
# Create .env file
touch .env
```

Open `.env` and add:

```
VITE_SUPABASE_PROJECT_ID=your-project-id
VITE_SUPABASE_ANON_KEY=your-anon-key
```

**Where to find these:**

1. Supabase Dashboard → **Project Settings** → **API**
2. Copy **Project URL** → Extract the project ID (part before `.supabase.co`)
3. Copy **anon public** key (starts with `eyJ...`)

**Example:**
```
VITE_SUPABASE_PROJECT_ID=abcdefghijklmnop
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Save the file.

---

### 2.2 Test Locally (Optional but Recommended)

```bash
npm install
npm run dev
```

Open http://localhost:5173

- Check that pages load
- Try booking a session (use test data)
- Check your email for notification
- Check Google Calendar for event

Press `Ctrl+C` to stop the dev server.

---

### 2.3 Push to GitHub

Initialize git (if not already):

```bash
git init
git add .
git commit -m "Initial deployment"
```

Create a new repository on GitHub:
1. Go to https://github.com/new
2. Name it: `alexandra-cherali-website`
3. Keep it private (recommended)
4. **DO NOT** initialize with README
5. Click **Create repository**

Push your code:

```bash
git remote add origin https://github.com/YOUR_USERNAME/alexandra-cherali-website.git
git branch -M main
git push -u origin main
```

---

### 2.4 Deploy to Vercel

1. Go to https://vercel.com
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Configure:

**Framework Preset:** Vite (should auto-detect)

**Environment Variables** - Click **Add** for each:

```
Name: VITE_SUPABASE_PROJECT_ID
Value: <same as in your .env file>
```

```
Name: VITE_SUPABASE_ANON_KEY
Value: <same as in your .env file>
```

5. Click **Deploy**

Wait 2-3 minutes for deployment.

---

### 2.5 Get Your Live URL

Once deployed, Vercel shows your URL:

```
https://alexandra-cherali-website.vercel.app
```

Or similar. **Copy this URL!**

---

## ⚡ STEP 3: Test Everything (10 minutes)

### 3.1 Test Homepage

Visit your Vercel URL:

- [ ] Homepage loads
- [ ] All images appear
- [ ] Navigation works
- [ ] Click through all pages

---

### 3.2 Test Booking System

1. Go to **Art Education** page
2. Click **"Book a Session"**
3. Fill form with YOUR EMAIL (for testing)
4. Submit

**Check:**
- [ ] Success message appears
- [ ] Check Google Calendar → Event created? ✅
- [ ] Check your email → Calendar invite? ✅
- [ ] Check admin email → Booking notification? ✅

---

### 3.3 Test Newsletter

1. Go to **Blog** page
2. Enter your email
3. Click subscribe

**Check:**
- [ ] Success message
- [ ] Check admin email → Subscriber notification? ✅

---

### 3.4 Test Contact Form

1. Go to **Contact** page
2. Fill out form
3. Submit

**Check:**
- [ ] Success message
- [ ] Check admin email → Contact notification? ✅

---

### 3.5 Test Admin Dashboard

1. Go to: `https://your-site.vercel.app/admin/login`
2. Login with admin email and password
3. Check dashboard:
   - [ ] See your test booking?
   - [ ] See newsletter subscription?
   - [ ] See contact message?
   - [ ] Can export to CSV?

---

## 🎉 SUCCESS!

Your website is live at: `https://your-site.vercel.app`

### Next Steps:

1. **Share Your Website:**
   - Update LinkedIn profile
   - Update Instagram bio
   - Email your contacts

2. **Bookmark Admin Dashboard:**
   - `https://your-site.vercel.app/admin/login`

3. **Daily Operations:**
   - Check admin email for notifications
   - Review Google Calendar for bookings
   - Export data monthly from admin dashboard

---

## 🔧 Optional: Custom Domain

### Buy a Domain

Buy from:
- Namecheap: https://namecheap.com
- Google Domains: https://domains.google.com

Suggested: `alexandracherali.com`

### Configure in Vercel

1. Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Click **Add**
3. Enter your domain
4. Follow DNS instructions

Add these DNS records in your domain registrar:

```
Type: A
Name: @
Value: 76.76.21.21
```

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Wait for DNS propagation (up to 48 hours).

---

## 🆘 Troubleshooting

### Backend Issues

**Problem:** Health check fails

```bash
# Check server logs
supabase functions logs server --follow
```

**Solution:** Redeploy
```bash
supabase functions deploy server
```

---

### Frontend Issues

**Problem:** Build fails

Check Vercel logs:
1. Vercel Dashboard → Deployments
2. Click latest deployment
3. View build logs

**Solution:** Check environment variables are set correctly

---

### Email Issues

**Problem:** Not receiving emails

1. Check Resend Dashboard → Logs
2. Check spam folder
3. Verify `RESEND_API_KEY` is set in Supabase
4. Verify `ADMIN_EMAIL` is correct

---

### Calendar Issues

**Problem:** Events not creating

1. Check Supabase function logs
2. Verify Google Calendar is shared with service account
3. Check `GOOGLE_CALENDAR_ID` is correct

---

## 📱 Mobile Check

Test on your phone:
- [ ] Website loads
- [ ] Forms work
- [ ] Admin dashboard works
- [ ] Responsive design looks good

---

## ✅ Final Checklist

- [ ] Backend deployed to Supabase
- [ ] Admin user created
- [ ] Frontend deployed to Vercel
- [ ] Test booking works end-to-end
- [ ] Calendar event created
- [ ] Emails received
- [ ] Admin dashboard accessible
- [ ] Website shared on social media

---

## 🎯 You're Live!

**Website:** https://your-site.vercel.app  
**Admin:** https://your-site.vercel.app/admin/login  

**For daily operations, see:** [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)

---

**Congratulations! 🎉**

Your professional art curator website is now live!
