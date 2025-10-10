# Documentation Index

Welcome! This is your central guide to all documentation for Alexandra Cherali's website.

---

## 🚀 Getting Started (Start Here!)

**Ready to deploy?** Follow this path:

1. **[DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md)** ⭐⭐⭐
   - **START HERE for deployment!**
   - Complete step-by-step guide
   - Backend + Frontend + Testing
   - ~35 minutes total

2. **[DEPLOYMENT_STEPS.md](./DEPLOYMENT_STEPS.md)** 📋
   - Printable checklist
   - Check off each step
   - Perfect for tracking progress

3. **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** 📌
   - Day-to-day operations
   - Common commands
   - Bookmark this page!

**Just exploring?** Start here:

1. **[README.md](./README.md)**
   - Main project overview
   - Feature list
   - Installation for local dev

2. **[PROJECT_STATUS.md](./PROJECT_STATUS.md)**
   - Complete feature list
   - What's built and ready
   - Technical architecture

---

## 📦 Deployment Guides

### 🎯 Main Deployment Guide
**[DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md)** ⭐
- **Use this for deployment!**
- Backend to Supabase
- Frontend to Vercel
- Email notifications
- Admin dashboard
- Testing everything
- Custom domain (optional)

### 📋 Printable Checklist
**[DEPLOYMENT_STEPS.md](./DEPLOYMENT_STEPS.md)**
- Print and check off
- Visual progress tracking
- All steps in one page

### 📌 Day-to-Day Reference
**[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)**
- Quick commands
- Common tasks
- URLs and links
- Troubleshooting

### 📚 Additional Guides
**[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)**
- Detailed deployment checklist
- Testing procedures

**[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**
- Deployment options comparison
- Platform-specific guides

---

## 🗓️ Google Calendar Integration

### First Time Setup
**[GOOGLE_CALENDAR_SETUP.md](./GOOGLE_CALENDAR_SETUP.md)** 📚
- Complete setup guide
- Google Cloud Console configuration
- Service account creation
- Detailed troubleshooting

### Visual Step-by-Step
**[GOOGLE_CALENDAR_VISUAL_GUIDE.md](./GOOGLE_CALENDAR_VISUAL_GUIDE.md)** 🎨
- Simplified visual guide
- Screenshots and diagrams
- Easy to follow
- Perfect for non-technical users

### Quick Testing
**[CALENDAR_QUICK_START.md](./CALENDAR_QUICK_START.md)** ⚡
- Test integration quickly
- Verify it's working
- Common issues and fixes

---

## 🔧 Backend & Database

### Supabase Setup
**[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)**
- Backend deployment
- Database configuration
- API endpoints
- Viewing stored data

### Admin Dashboard
**[ADMIN_GUIDE.md](./ADMIN_GUIDE.md)**
- Using the admin dashboard
- Managing bookings
- Exporting data
- User management

---

## 📖 What to Read When

### 🎯 "I want to deploy NOW"
1. [DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md) ← Start here!
2. [DEPLOYMENT_STEPS.md](./DEPLOYMENT_STEPS.md) ← Print this
3. [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) ← Bookmark this

### 🔍 "I want to understand everything first"
1. [README.md](./README.md)
2. [PROJECT_STATUS.md](./PROJECT_STATUS.md)
3. [DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md)

### 🗓️ "I need to set up Google Calendar"
1. [GOOGLE_CALENDAR_VISUAL_GUIDE.md](./GOOGLE_CALENDAR_VISUAL_GUIDE.md)
2. [GOOGLE_CALENDAR_SETUP.md](./GOOGLE_CALENDAR_SETUP.md)
3. [CALENDAR_QUICK_START.md](./CALENDAR_QUICK_START.md)

### 🔧 "I'm having backend issues"
1. [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
2. [CALENDAR_QUICK_START.md](./CALENDAR_QUICK_START.md) (Troubleshooting)
3. [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) (🆘 section)

### 🎨 "I want to customize the site"
1. [README.md](./README.md) (Customization section)
2. [PROJECT_STATUS.md](./PROJECT_STATUS.md) (Design System section)
3. Look at `/styles/globals.css` for colors
4. Look at `/components/*.tsx` for content

---

## 📚 Document Comparison

| Document | Length | Audience | Purpose |
|----------|--------|----------|---------|
| **[DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md)** ⭐ | **Long** | **Everyone** | **Main deployment guide** |
| [DEPLOYMENT_STEPS.md](./DEPLOYMENT_STEPS.md) | Short | Everyone | Printable checklist |
| [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) 📌 | Short | Everyone | Day-to-day operations |
| [ADMIN_GUIDE.md](./ADMIN_GUIDE.md) | Medium | Everyone | Admin dashboard |
| [README.md](./README.md) | Medium | Developers | Project overview |
| [PROJECT_STATUS.md](./PROJECT_STATUS.md) | Medium | Everyone | Feature status |
| [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) | Long | First-timers | Detailed checklist |
| [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) | Medium | Technical | Platform options |
| [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) | Medium | Technical | Backend setup |
| [GOOGLE_CALENDAR_SETUP.md](./GOOGLE_CALENDAR_SETUP.md) | Long | Technical | Calendar API setup |
| [GOOGLE_CALENDAR_VISUAL_GUIDE.md](./GOOGLE_CALENDAR_VISUAL_GUIDE.md) | Medium | Everyone | Visual calendar guide |
| [CALENDAR_QUICK_START.md](./CALENDAR_QUICK_START.md) | Short | Everyone | Quick testing |

---

## 🔍 Quick Reference

### Environment Variables
```bash
# Frontend (.env)
VITE_SUPABASE_PROJECT_ID=xxx
VITE_SUPABASE_ANON_KEY=xxx

# Backend (Supabase Secrets)
GOOGLE_CALENDAR_CREDENTIALS=xxx
GOOGLE_CALENDAR_ID=xxx
```

### Deployment Commands
```bash
# Backend
supabase login
supabase link --project-ref YOUR_REF
supabase functions deploy server

# Frontend
git push origin main
# Then deploy via Vercel UI
```

### Test Booking Flow
1. Open website
2. Click "Book a Session"
3. Fill form with test data
4. Check Google Calendar
5. Check email for invite

---

## 🎯 Documentation by Task

### Task: Deploy the Website
**Path:** [DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md) → [DEPLOYMENT_STEPS.md](./DEPLOYMENT_STEPS.md)

### Task: Set Up Calendar
**Path:** [GOOGLE_CALENDAR_VISUAL_GUIDE.md](./GOOGLE_CALENDAR_VISUAL_GUIDE.md) → [CALENDAR_QUICK_START.md](./CALENDAR_QUICK_START.md)

### Task: Configure Backend
**Path:** [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) → [README.md](./README.md) (Setup Steps)

### Task: View Booking Data
**Path:** [ADMIN_GUIDE.md](./ADMIN_GUIDE.md) → [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) (Data Export)

### Task: Customize Design
**Path:** [README.md](./README.md) (Customization) → [PROJECT_STATUS.md](./PROJECT_STATUS.md) (Design System)

### Task: Troubleshoot Issues
**Path:** [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) (Troubleshooting) → [DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md) (🚨 Troubleshooting)

### Task: Daily Operations
**Path:** [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) ← Bookmark this!

---

## 💡 Pro Tips

### For Non-Technical Users
- Start with visual guides
- Use checklists to track progress
- Ask for help when stuck
- Test everything before going live

**Recommended reading order:**
1. [DEPLOYMENT_STEPS.md](./DEPLOYMENT_STEPS.md) ← Print this!
2. [DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md) ← Follow this!
3. [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) ← Bookmark this!

### For Technical Users
- Skim the quick start first
- Dive into technical docs as needed
- Use the checklist to avoid missing steps
- Check logs when debugging

**Recommended reading order:**
1. [PROJECT_STATUS.md](./PROJECT_STATUS.md)
2. [DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md)
3. [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
4. Reference other docs as needed

---

## 🆘 Help & Support

### Where to Look for Errors

**Frontend Issues:**
- Browser Console (F12 → Console)
- Check environment variables in `.env`

**Backend Issues:**
- Supabase Dashboard → Functions → server → Logs
- Check Supabase secrets are set

**Calendar Issues:**
- Server logs (see above)
- Google Calendar sharing settings
- Service account permissions

### Most Common Issues

| Issue | Solution Document |
|-------|-------------------|
| Calendar events not creating | [CALENDAR_QUICK_START.md](./CALENDAR_QUICK_START.md) |
| Deployment failing | [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) |
| Backend errors | [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) |
| Can't see booking data | [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) |
| Google Calendar setup | [GOOGLE_CALENDAR_VISUAL_GUIDE.md](./GOOGLE_CALENDAR_VISUAL_GUIDE.md) |

---

## ✅ Before You Start

Make sure you have:
- [ ] Supabase account
- [ ] Google account (for Calendar)
- [ ] GitHub account (for deployment)
- [ ] Node.js installed (v18+)
- [ ] Code downloaded or cloned

---

## 🎉 Ready to Begin?

**Complete Deployment (35 minutes):**
→ [DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md) ⭐

**With Printable Checklist:**
→ [DEPLOYMENT_STEPS.md](./DEPLOYMENT_STEPS.md) 📋

**After Deployment:**
→ [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) 📌

**Calendar Setup Help:**
→ [GOOGLE_CALENDAR_VISUAL_GUIDE.md](./GOOGLE_CALENDAR_VISUAL_GUIDE.md)

---

## 📝 Document Change Log

| Date | Changes |
|------|---------|
| Today | Initial documentation created |
| Today | Google Calendar integration completed |
| Today | All deployment guides added |

---

**Questions?** Check the troubleshooting sections in each document, or review the logs (browser console for frontend, Supabase logs for backend).

**Good luck with your deployment! 🚀**
