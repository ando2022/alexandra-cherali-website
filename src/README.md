# Alexandra Cherali - Art Curator & Educator Website

A modern, responsive website for art curator and educator Alexandra Cherali, featuring booking system, blog, portfolio, and more.

---

## 🚀 Ready to Deploy?

### **→ [DEPLOY NOW - Live Walkthrough](./DEPLOY_NOW.md)** ⚡

Get your website live in ~40 minutes with exact commands to copy/paste!

**More Options:**
- **[PRE_FLIGHT_CHECK.md](./PRE_FLIGHT_CHECK.md)** - Check if you're ready first
- **[DEPLOYMENT_INDEX.md](./DEPLOYMENT_INDEX.md)** - All deployment guides
- **[DEPLOYMENT_ROADMAP.md](./DEPLOYMENT_ROADMAP.md)** - Visual overview
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Day-to-day operations

---

## Features

- ✨ **Modern Design** - Gradient colors (teal & coral), smooth animations, responsive layout
- 📅 **Booking System** - Integrated calendar for scheduling art education sessions
- 🗓️ **Google Calendar Integration** - Automatic calendar events and email invites
- 📝 **Blog** - Full blog system with complete articles
- 🖼️ **Portfolio** - Showcase of curatorial projects and exhibitions
- 🎨 **Visual Gallery** - Image gallery with lightbox viewer
- 📧 **Newsletter** - Subscription system for updates
- 💬 **Contact Form** - Direct messaging system
- 🗄️ **Supabase Backend** - All data stored securely

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS v4
- **Backend**: Supabase (Edge Functions + KV Store)
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd alexandra-cherali-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:
```
VITE_SUPABASE_PROJECT_ID=your-project-id
VITE_SUPABASE_ANON_KEY=your-anon-key
```

4. Run development server:
```bash
npm run dev
```

5. Open http://localhost:5173

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🚀 Ready to Deploy?

**Start Here:** [DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md) - Complete step-by-step deployment guide

### Quick Links

| Guide | Purpose |
|-------|---------|
| **[DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md)** | Complete deployment guide (Start here!) |
| **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** | Day-to-day operations & commands |
| **[ADMIN_GUIDE.md](./ADMIN_GUIDE.md)** | Using the admin dashboard |
| **[GOOGLE_CALENDAR_SETUP.md](./GOOGLE_CALENDAR_SETUP.md)** | Google Calendar API setup |
| **[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** | Navigate all documentation |

### Backend Features

**Booking System:**
- Automated Google Calendar event creation
- Email invites to both parties
- Google Meet links for online sessions
- Admin dashboard to manage bookings

**Email Notifications (Resend):**
- Booking confirmations to admin
- Contact form notifications
- Newsletter subscription notifications

**Admin Dashboard:**
- Secure login with Supabase Auth
- View all bookings, subscribers, messages
- Export data to CSV
- Search and filter functionality

## Project Structure

```
/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Home.tsx        # Homepage
│   ├── Blog.tsx        # Blog listing
│   ├── BlogPost.tsx    # Individual blog post
│   ├── Portfolio.tsx   # Portfolio page
│   ├── Gallery.tsx     # Image gallery
│   ├── ArtEducation.tsx # Services page
│   ├── Contact.tsx     # Contact form
│   └── BookingDialog.tsx # Booking modal
├── supabase/
│   └── functions/
│       └── server/     # Backend API
├── utils/              # Utilities
├── styles/             # CSS files
└── App.tsx            # Main app component
```

## Pages

- **/** - Homepage with hero, about, and projects
- **/portfolio** - Curatorial portfolio with PDF download
- **/gallery** - Visual gallery with 6+ images
- **/art-education** - Art education services
- **/blog** - Blog listing
- **/blog/:id** - Individual blog post
- **/contact** - Contact form and social links

## Features in Detail

### Booking System
- Calendar showing available dates (weekdays)
- Time slot selection
- Session type (Onsite in Zurich or Online)
- Contact form integration
- Stored in Supabase
- **NEW**: Automatic Google Calendar event creation
- **NEW**: Email invites sent to both parties
- **NEW**: Google Meet links for online sessions

### Newsletter
- Email collection
- Stored in database
- Export capability
- Can integrate with email services

### Contact Form
- Full contact form
- Message storage
- Can trigger email notifications

### Blog
- 6 pre-written articles on art topics
- Full article view
- Reading time estimates
- Category tags
- Can be made dynamic with Supabase

## Customization

### Colors
Edit `/styles/globals.css` to change the color scheme. Current colors:
- Primary: Deep Teal (`oklch(0.45 0.12 195)`)
- Accent: Warm Coral (`oklch(0.88 0.08 35)`)

### Content
- Update profile photo: Replace the image import in `/components/Home.tsx`
- Edit bio: Update text in `/components/Home.tsx`
- Add portfolio projects: Edit `/components/Portfolio.tsx`
- Change gallery images: Update `/components/Gallery.tsx`

## Next Steps

- [ ] Deploy server to Supabase: `supabase functions deploy server`
- [ ] Test Google Calendar integration (see CALENDAR_QUICK_START.md)
- [ ] Deploy to Vercel
- [ ] Set up custom domain
- [ ] Set up email notifications (optional)
- [ ] Create admin dashboard (optional)
- [ ] Add actual PDF portfolio file

## Support

For issues or questions:
1. Check the setup guides
2. Review browser console for errors
3. Check Supabase function logs
4. Contact your developer

## License

Private - All rights reserved to Alexandra Cherali

---

Built with ❤️ for art education and curation
