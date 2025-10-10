# ✈️ Pre-Flight Checklist

Complete this checklist before starting deployment.

---

## 🎯 Accounts & Access

### Required Accounts
- [ ] **Supabase** - Do you have a Supabase account?
  - Sign up: https://supabase.com
  - Already have project created? ✓ (you mentioned earlier)

- [ ] **GitHub** - Do you have a GitHub account?
  - Sign up: https://github.com/join

- [ ] **Vercel** - Ready to create account (free)?
  - Will sign up: https://vercel.com (during deployment)

- [ ] **Resend** - Ready to create account (free)?
  - Will sign up: https://resend.com (during deployment)

---

## 💻 Software Installed

- [ ] **Node.js (v18+)** - Check version:
  ```bash
  node --version
  ```
  Should show: `v18.x.x` or higher
  
  If not installed: https://nodejs.org

- [ ] **npm** - Check version:
  ```bash
  npm --version
  ```
  Should show: `9.x.x` or higher

- [ ] **Git** - Check version:
  ```bash
  git --version
  ```
  Should show: `git version 2.x.x`
  
  If not installed: https://git-scm.com

---

## 📋 Information Ready

### Supabase Project Info
- [ ] Project created in Supabase dashboard
- [ ] Know where to find Project Reference ID
  - Location: Settings → General → Reference ID

### Google Calendar (Already Setup ✓)
- [ ] Service account JSON credentials ready
- [ ] Calendar ID ready
- [ ] Calendar shared with service account
- [ ] Credentials stored in Supabase secrets ✓

### Email for Admin
- [ ] Have your email address ready for:
  - Admin account login
  - Receiving booking notifications
  - Receiving contact form messages

---

## 🔐 Password Manager Ready

- [ ] Have a password manager installed (recommended)
  - 1Password, LastPass, Bitwarden, etc.
  
- [ ] Or have a secure place to store:
  - Admin login password
  - API keys
  - Important credentials

---

## ⏰ Time & Environment

- [ ] Have **45 minutes** of uninterrupted time
- [ ] Quiet workspace with good internet
- [ ] Computer fully charged or plugged in
- [ ] No pending system updates

---

## 📂 Project Files

- [ ] In the correct project directory
  - Run: `pwd` (Mac/Linux) or `cd` (Windows)
  - Should show your project path

- [ ] All files present - Check these exist:
  ```bash
  ls -la
  ```
  Should see:
  - `App.tsx`
  - `package.json`
  - `supabase/` directory
  - `components/` directory
  - `DEPLOY_NOW.md`

---

## 🧠 Mental Preparation

- [ ] Read through [START_HERE.md](./START_HERE.md)
- [ ] Understand you'll be:
  - Running terminal commands
  - Creating accounts
  - Copying/pasting credentials
  - Testing features

- [ ] Know that if something goes wrong:
  - You can redo steps
  - Check logs for errors
  - Reference troubleshooting guides

---

## ☕ Physical Preparation

- [ ] Water/coffee nearby
- [ ] Comfortable seating
- [ ] Good lighting
- [ ] Phone on silent (minimize distractions)

---

## 📱 Devices Ready

- [ ] Computer with terminal access
- [ ] Phone nearby (for 2FA if needed)
- [ ] Second screen helpful (optional)
  - One for docs, one for terminal

---

## 🎯 Know What You'll Get

After deployment, you'll have:

### Live Website
- [ ] Understand it will be at: `https://your-site.vercel.app`
- [ ] Can add custom domain later (optional)

### Admin Dashboard
- [ ] Will access at: `https://your-site.vercel.app/admin/login`
- [ ] Login with email + password you create

### Email Notifications
- [ ] Will receive emails when:
  - Someone books a session
  - Someone submits contact form
  - Someone subscribes to newsletter

### Google Calendar
- [ ] Bookings will auto-create calendar events
- [ ] You and client both get invites
- [ ] Online sessions get Google Meet links

---

## 📚 Documentation Access

Have these open in browser tabs:

- [ ] **[DEPLOY_NOW.md](./DEPLOY_NOW.md)** - Main guide
- [ ] **[COMMANDS.md](./COMMANDS.md)** - Quick reference
- [ ] **[DEPLOYMENT_ROADMAP.md](./DEPLOYMENT_ROADMAP.md)** - Visual map

Optional:
- [ ] Supabase docs: https://supabase.com/docs
- [ ] Vercel docs: https://vercel.com/docs

---

## 🚨 Emergency Contacts

If you get really stuck:

- [ ] Supabase Discord: https://discord.supabase.com
- [ ] Vercel Discord: https://vercel.com/discord
- [ ] Have this project's documentation bookmarked

---

## ✅ Final Checks

### Before You Start
- [ ] Battery charged (or plugged in)
- [ ] Internet connection stable
- [ ] Terminal/command prompt working
- [ ] Can copy/paste in terminal
- [ ] Know how to open/edit files

### Confidence Check
- [ ] Feel ready to follow instructions
- [ ] Comfortable with copy/paste
- [ ] Know you can take breaks
- [ ] Understand each step is tested

---

## 🎯 What Happens Next

Once you start deployment:

**Step 1: Backend (15 min)**
- Install Supabase CLI
- Login and link project
- Set environment secrets
- Deploy server function
- Create admin user

**Step 2: Frontend (10 min)**
- Create .env file
- Push to GitHub
- Deploy to Vercel
- Configure environment variables

**Step 3: Testing (10 min)**
- Test booking system
- Verify calendar integration
- Check email notifications
- Test admin dashboard

**Step 4: Success! (2 min)**
- Get your live URL
- Share on social media
- Bookmark admin dashboard

---

## 🚀 Ready Status

Mark when complete:

- [ ] All accounts ready
- [ ] Software installed
- [ ] Information gathered
- [ ] Time allocated
- [ ] Environment prepared
- [ ] Documentation open
- [ ] Feeling confident

---

## ✈️ CLEARED FOR TAKEOFF

### If all boxes are checked:

### **→ Proceed to [DEPLOY_NOW.md](./DEPLOY_NOW.md)** 🚀

---

## ⏸️ NOT READY YET?

### If you're missing something:

**Missing software?**
- Install Node.js: https://nodejs.org
- Install Git: https://git-scm.com

**Missing accounts?**
- Create Supabase: https://supabase.com
- Create GitHub: https://github.com

**Not enough time?**
- Bookmark this page
- Come back when ready
- It'll only take 40 minutes

**Feeling uncertain?**
- Read [START_HERE.md](./START_HERE.md) again
- Review [DEPLOYMENT_ROADMAP.md](./DEPLOYMENT_ROADMAP.md)
- Remember: You can do this! 💪

---

## 📝 Notes Section

Use this space for notes:

**My Supabase Project ID:** _______________________

**My Vercel URL (after deployment):** _______________________

**Admin Email:** _______________________

**Deployment Date:** _______________________

**Deployment Time Started:** _______________________

**Deployment Time Completed:** _______________________

---

**Once ready, proceed to:** [DEPLOY_NOW.md](./DEPLOY_NOW.md) 🚀
