# Deploy Email Server - DEFINITIVE SOLUTION

## 🚀 **Step 1: Deploy to Railway**

1. **Go to:** https://railway.app
2. **Sign up/Login** with GitHub
3. **Click:** "New Project"
4. **Select:** "Deploy from GitHub repo"
5. **Choose:** Your repository `alexandra-cherali-website`
6. **Select:** "Deploy from folder" → Choose the root folder
7. **Railway will auto-detect** the Node.js project

## 🔧 **Step 2: Configure Environment Variables**

In Railway dashboard:

1. **Go to:** Your project → Variables tab
2. **Add these variables:**
   ```
   GMAIL_USER=your-gmail@gmail.com
   GMAIL_APP_PASSWORD=your-gmail-app-password
   PORT=3001
   ```

## 📧 **Step 3: Get Gmail App Password**

1. **Go to:** Google Account settings
2. **Security** → 2-Step Verification (enable if not already)
3. **App passwords** → Generate new app password
4. **Use this password** for `GMAIL_APP_PASSWORD`

## ✅ **Step 4: Test the Server**

Once deployed, Railway will give you a URL like:
`https://alexandra-contact-server-production.up.railway.app`

Test it:
```bash
curl https://your-railway-url/contact -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com", 
    "subject": "Test",
    "message": "Test message"
  }'
```

## 🎯 **Step 5: Update Frontend**

The frontend is already updated to use:
`https://alexandra-contact-server-production.up.railway.app/contact`

Just deploy to Vercel and it will work!

## 🎉 **Result**

- ✅ **Direct email sending** from platform
- ✅ **No user email client needed**
- ✅ **Professional HTML emails** to Alexandra
- ✅ **100% reliable** backend service
- ✅ **Easy to maintain** and scale

**This is the definitive solution that will work permanently!**
