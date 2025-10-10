# 🚀 Deployment Commands - Execute These Now

This file contains the exact commands and steps you need to run to deploy your website.

---

## ✅ Step 1: Supabase CLI (COMPLETED)
Supabase CLI v2.48.3 is installed and verified.

---

## 📋 Step 2: Login to Supabase

Run this command in your terminal:

```bash
cd "/Users/anastasiiadobson/Library/CloudStorage/Dropbox/WORK/CURRENT PROJECTS/ARCHIVE/Art Curator Website Build"
supabase login
```

This will open your browser for authentication. Login with your Supabase credentials.

---

## 🔗 Step 3: Get Your Project Reference ID

1. Go to https://supabase.com/dashboard
2. Select your project
3. Click **Settings** (⚙️ icon in sidebar)
4. Click **General**
5. Copy the **Reference ID** (looks like: `abcdefghijklmnop`)

**Keep this ID handy for the next step!**

---

## 🔗 Step 4: Link Your Project

Run this command (replace `YOUR_REFERENCE_ID` with the ID from Step 3):

```bash
cd "/Users/anastasiiadobson/Library/CloudStorage/Dropbox/WORK/CURRENT PROJECTS/ARCHIVE/Art Curator Website Build"
supabase link --project-ref YOUR_REFERENCE_ID
```

Example:
```bash
supabase link --project-ref abcdefghijklmnop
```

---

## 📧 Step 5: Set Up Resend (Email Service)

### 5a. Create Resend Account
1. Go to https://resend.com
2. Sign up (free account)
3. Once logged in, go to **API Keys**
4. Click **Create API Key**
5. Name it: "Alexandra Website"
6. Copy the API key (starts with `re_...`)

**Save this key - you'll need it in the next step!**

### 5b. Configure Supabase Secrets

Go to Supabase Dashboard:
1. **Project Settings** → **Edge Functions**
2. Scroll to **Secrets** section
3. Click **Add secret** for each of these:

**Secret 1:**
```
Name: RESEND_API_KEY
Value: [paste your Resend API key from step 5a]
```

**Secret 2:**
```
Name: ADMIN_EMAIL
Value: [your email address for receiving notifications]
```

**Note:** The guide mentions these are already set (verify they exist):
- `GOOGLE_CALENDAR_CREDENTIALS`
- `GOOGLE_CALENDAR_ID`

---

## 🚀 Step 6: Deploy the Server Function

Run this command:

```bash
cd "/Users/anastasiiadobson/Library/CloudStorage/Dropbox/WORK/CURRENT PROJECTS/ARCHIVE/Art Curator Website Build/src"
chmod +x deploy.sh
./deploy.sh
```

Or manually:
```bash
cd "/Users/anastasiiadobson/Library/CloudStorage/Dropbox/WORK/CURRENT PROJECTS/ARCHIVE/Art Curator Website Build"
supabase functions deploy server
```

Wait for deployment to complete (30-60 seconds).

---

## ✅ Step 7: Test Backend Deployment

Get your project ID from step 3, then test the health endpoint:

```bash
curl https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/health
```

You should see: `{"status":"ok","timestamp":"..."}`

---

## 👤 Step 8: Create Admin User

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

## 📝 Step 9: Create .env File

Get your Supabase credentials:
1. Supabase Dashboard → **Project Settings** → **API**
2. Copy **Project URL** → Extract the project ID (part before `.supabase.co`)
3. Copy **anon public** key (starts with `eyJ...`)

Create a file named `.env` in your project root:

```bash
cd "/Users/anastasiiadobson/Library/CloudStorage/Dropbox/WORK/CURRENT PROJECTS/ARCHIVE/Art Curator Website Build"
cat > .env << 'EOF'
VITE_SUPABASE_PROJECT_ID=your-project-id-here
VITE_SUPABASE_ANON_KEY=your-anon-key-here
EOF
```

Then edit the `.env` file to replace:
- `your-project-id-here` with your actual project ID
- `your-anon-key-here` with your actual anon key

---

## 🧪 Step 10: Test Locally

Install dependencies and run the dev server:

```bash
cd "/Users/anastasiiadobson/Library/CloudStorage/Dropbox/WORK/CURRENT PROJECTS/ARCHIVE/Art Curator Website Build"
npm install
npm run dev
```

Open http://localhost:5173 and test:
- ✅ Pages load correctly
- ✅ Navigation works
- ✅ Try booking a session (use test data)
- ✅ Check your email for notifications
- ✅ Check Google Calendar for event

Press `Ctrl+C` to stop the dev server when done.

---

## 📦 Step 11: Push to GitHub

### 11a. Initialize Git (if needed)

```bash
cd "/Users/anastasiiadobson/Library/CloudStorage/Dropbox/WORK/CURRENT PROJECTS/ARCHIVE/Art Curator Website Build"
git init
git add .
git commit -m "Initial deployment"
```

### 11b. Create GitHub Repository

1. Go to https://github.com/new
2. Name it: `alexandra-cherali-website`
3. Keep it private (recommended)
4. **DO NOT** initialize with README
5. Click **Create repository**

### 11c. Push Your Code

Replace `YOUR_USERNAME` with your GitHub username:

```bash
cd "/Users/anastasiiadobson/Library/CloudStorage/Dropbox/WORK/CURRENT PROJECTS/ARCHIVE/Art Curator Website Build"
git remote add origin https://github.com/YOUR_USERNAME/alexandra-cherali-website.git
git branch -M main
git push -u origin main
```

---

## ☁️ Step 12: Deploy to Vercel

### 12a. Deploy

1. Go to https://vercel.com
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Vite (should auto-detect)
   - **Root Directory:** Leave as `.` (default)

### 12b. Add Environment Variables

In Vercel project settings, add these environment variables:

**Variable 1:**
```
Name: VITE_SUPABASE_PROJECT_ID
Value: [same as in your .env file]
```

**Variable 2:**
```
Name: VITE_SUPABASE_ANON_KEY
Value: [same as in your .env file]
```

### 12c. Deploy

5. Click **Deploy**
6. Wait 2-3 minutes for deployment

### 12d. Get Your Live URL

Once deployed, Vercel shows your URL:
```
https://alexandra-cherali-website.vercel.app
```

Or similar. **Copy this URL!**

---

## ✅ Step 13: Test Everything

### Test Homepage
Visit your Vercel URL and check:
- [ ] Homepage loads
- [ ] All images appear
- [ ] Navigation works
- [ ] Click through all pages

### Test Booking System
1. Go to **Art Education** page
2. Click **"Book a Session"**
3. Fill form with YOUR EMAIL (for testing)
4. Submit
5. Check:
   - [ ] Success message appears
   - [ ] Google Calendar → Event created?
   - [ ] Check your email → Calendar invite?
   - [ ] Check admin email → Booking notification?

### Test Newsletter
1. Go to **Blog** page
2. Enter your email
3. Click subscribe
4. Check:
   - [ ] Success message
   - [ ] Check admin email → Subscriber notification?

### Test Contact Form
1. Go to **Contact** page
2. Fill out form
3. Submit
4. Check:
   - [ ] Success message
   - [ ] Check admin email → Contact notification?

### Test Admin Dashboard
1. Go to: `https://your-site.vercel.app/admin/login`
2. Login with admin email and password
3. Check dashboard:
   - [ ] See your test booking?
   - [ ] See newsletter subscription?
   - [ ] See contact message?
   - [ ] Can export to CSV?

---

## 🎉 YOU'RE DONE!

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

### Frontend Issues
**Problem:** Build fails

Check Vercel logs:
1. Vercel Dashboard → Deployments
2. Click latest deployment
3. View build logs

**Solution:** Check environment variables are set correctly

### Email Issues
**Problem:** Not receiving emails

1. Check Resend Dashboard → Logs
2. Check spam folder
3. Verify `RESEND_API_KEY` is set in Supabase
4. Verify `ADMIN_EMAIL` is correct

### Calendar Issues
**Problem:** Events not creating

1. Check Supabase function logs
2. Verify Google Calendar is shared with service account
3. Check `GOOGLE_CALENDAR_ID` is correct

---

## 📱 Quick Commands Reference

```bash
# View server logs
supabase functions logs server --follow

# Redeploy server
supabase functions deploy server

# List projects
supabase projects list

# Local development
npm run dev

# Build for production
npm run build
```

---

**Good luck with your deployment! 🚀**

