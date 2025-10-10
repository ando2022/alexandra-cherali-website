# Alexandra Cherali - Art Curator Website 🎨

A beautiful, modern website for an art curator featuring portfolio showcase, booking system, blog, and admin dashboard.

<!-- Force Vercel deployment -->

---

## 🚀 READY TO DEPLOY? START HERE!

Your website is **95% ready**! All setup is complete - you just need to run the deployment commands.

### ⚡ Quick Start (30 minutes to live!)

```bash
cd "/Users/anastasiiadobson/Library/CloudStorage/Dropbox/WORK/CURRENT PROJECTS/ARCHIVE/Art Curator Website Build"
./EXECUTE_NOW.sh
```

**Or see:** [START_DEPLOYMENT.md](./START_DEPLOYMENT.md) for detailed guide

---

## 📚 Documentation

| File | What It Does |
|------|--------------|
| **[START_DEPLOYMENT.md](./START_DEPLOYMENT.md)** | 👈 **START HERE** - Overview and quick start |
| **[NEXT_STEPS.md](./NEXT_STEPS.md)** | Detailed step-by-step deployment guide |
| **[DEPLOYMENT_COMMANDS.md](./DEPLOYMENT_COMMANDS.md)** | Complete command reference |
| **[EXECUTE_NOW.sh](./EXECUTE_NOW.sh)** | Interactive deployment script |
| **[DEPLOY_NOW.md](./src/DEPLOY_NOW.md)** | Original deployment walkthrough |

---

## ✅ What's Already Done

- ✅ Supabase CLI installed (v2.48.3)
- ✅ npm dependencies installed (215 packages)
- ✅ Git repository initialized and committed
- ✅ Supabase functions structured correctly
- ✅ Configuration files created
- ✅ Deployment scripts ready
- ✅ Vercel configuration set

---

## 🎯 What You Need to Do

Only **5 steps** remain (all require your login):

1. **Login to Supabase** (2 min)
2. **Link project** (1 min)
3. **Set up Resend for emails** (10 min)
4. **Deploy backend** (2 min)
5. **Deploy to Vercel** (10 min)

**Total time:** ~30 minutes

---

## 🏗️ Project Structure

```
├── src/                      # Frontend React application
│   ├── components/           # React components
│   │   ├── Home.tsx
│   │   ├── Portfolio.tsx
│   │   ├── ArtEducation.tsx
│   │   ├── Gallery.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── AdminDashboard.tsx
│   │   └── ui/               # UI components (shadcn/ui)
│   ├── utils/                # Utility functions
│   │   ├── api.ts            # API calls
│   │   └── supabase/         # Supabase client
│   └── styles/               # Global styles
├── supabase/                 # Backend functions
│   └── functions/
│       └── server/           # Edge function
│           ├── index.tsx     # Main handler
│           ├── email.tsx     # Email service
│           └── kv_store.tsx  # Data storage
├── vercel.json               # Vercel config
├── vite.config.ts            # Vite config
└── package.json              # Dependencies
```

---

## ✨ Features

### Frontend
- 🎨 **Portfolio** - Showcase artwork and projects
- 📚 **Art Education** - Course offerings with booking system
- 🖼️ **Gallery** - Image showcase with categories
- 📝 **Blog** - Articles with newsletter subscription
- 📧 **Contact** - Form with email notifications
- 🔐 **Admin Dashboard** - Manage bookings, subscribers, and messages

### Backend
- 📅 **Google Calendar Integration** - Auto-create booking events
- 📧 **Email Notifications** - Via Resend
- 💾 **Data Storage** - Supabase KV store
- 🔒 **Authentication** - Secure admin access
- 📊 **CSV Export** - Download all data

---

## 🛠️ Tech Stack

**Frontend:**
- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

**Backend:**
- Supabase Edge Functions
- Hono framework
- Google Calendar API
- Resend email API

**Deployment:**
- Frontend: Vercel
- Backend: Supabase
- Database: Supabase KV Store

---

## 🔑 Your Project Credentials

**Project ID:** `rearknifkvcnmyszzrbv`
**Supabase URL:** `https://rearknifkvcnmyszzrbv.supabase.co`
**Credentials:** Already configured in `src/utils/supabase/info.tsx`

---

## 🚀 Local Development

```bash
# Install dependencies (already done!)
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit: http://localhost:3000

---

## 📦 Deployment

### Backend (Supabase)
```bash
supabase login
supabase link --project-ref rearknifkvcnmyszzrbv
supabase functions deploy server
```

### Frontend (Vercel)
1. Push to GitHub
2. Import to Vercel
3. Deploy!

**See [NEXT_STEPS.md](./NEXT_STEPS.md) for detailed instructions.**

---

## 🔐 Environment Variables

Your Supabase credentials are already in the code at `src/utils/supabase/info.tsx`.

**Supabase Secrets** (configure in dashboard):
- `GOOGLE_CALENDAR_CREDENTIALS` - Service account JSON
- `GOOGLE_CALENDAR_ID` - Calendar ID
- `RESEND_API_KEY` - Email API key (you need to create this)
- `ADMIN_EMAIL` - Your notification email

---

## 📱 After Deployment

### URLs
- **Website:** `https://your-site.vercel.app`
- **Admin:** `https://your-site.vercel.app/admin/login`
- **Health Check:** `https://rearknifkvcnmyszzrbv.supabase.co/functions/v1/make-server-b97bd89f/health`

### Admin Dashboard
Login with the admin user you create in Supabase:
- View all bookings
- See newsletter subscribers
- Read contact messages
- Export data to CSV

---

## 🆘 Troubleshooting

### Backend Issues
```bash
# View logs
supabase functions logs server --follow

# Redeploy
supabase functions deploy server
```

### Frontend Issues
- Check Vercel deployment logs
- Verify build completes successfully
- Check browser console for errors

### Email Issues
- Check Resend dashboard logs
- Verify API key is correct in Supabase secrets
- Check spam folder

### Calendar Issues
- Verify Google Calendar credentials
- Check calendar is shared with service account
- View Supabase function logs

---

## 📖 Additional Documentation

In the `src/` directory:
- **ADMIN_GUIDE.md** - How to use admin dashboard
- **SUPABASE_SETUP.md** - Supabase configuration
- **GOOGLE_CALENDAR_SETUP.md** - Calendar integration
- **QUICK_REFERENCE.md** - Daily operations guide

---

## 🎉 Ready to Launch?

Everything is set up and ready to go!

**Next step:**
```bash
./EXECUTE_NOW.sh
```

Or open [START_DEPLOYMENT.md](./START_DEPLOYMENT.md) for step-by-step guidance.

You're 30 minutes away from having your professional art curator website live! 🚀

---

## 📄 License

Private project - All rights reserved

---

## 👤 Contact

For support with this website, refer to the documentation or contact your developer.

---

**Built with ❤️ for Alexandra Cherali**
