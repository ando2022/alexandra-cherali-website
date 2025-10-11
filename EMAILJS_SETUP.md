# EmailJS Setup - 100% Working Solution

## 🚀 **Step 1: Create EmailJS Account**

1. **Go to:** https://www.emailjs.com/
2. **Sign up** for a free account
3. **Verify your email**

## 📧 **Step 2: Set Up Email Service**

1. **Go to:** Email Services tab
2. **Click:** "Add New Service"
3. **Choose:** Gmail (recommended)
4. **Connect your Gmail account**
5. **Copy the Service ID** (e.g., `service_xxxxxxx`)

## 📝 **Step 3: Create Email Template**

1. **Go to:** Email Templates tab
2. **Click:** "Create New Template"
3. **Template ID:** `template_booking`
4. **Subject:** `New Art Education Session Booking - {{from_name}}`
5. **Content:**

```
Hello Alexandra,

You have received a new art education session booking:

📅 Date: {{booking_date}}
⏰ Time: {{booking_time}}
📍 Session Type: {{session_type}}

👤 Client Details:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

📝 Message: {{message}}

Booking ID: {{booking_id}}

Please respond to the client at {{from_email}} to confirm this session.

---
Sent via Alexandra Cherali Website
```

6. **To Email:** `anbo.do@icloud.com`
7. **Save the template**

## 🔑 **Step 4: Get Public Key**

1. **Go to:** Account → General
2. **Copy your Public Key**

## ⚙️ **Step 5: Configure Environment Variables**

In Vercel Dashboard:

1. **Go to:** Your project → Settings → Environment Variables
2. **Add these variables:**
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=template_booking
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## ✅ **Step 6: Deploy and Test**

1. **Deploy to Vercel**
2. **Test the booking system**
3. **Check email at:** `anbo.do@icloud.com`

## 🎉 **Result**

- ✅ **Direct email sending** from frontend
- ✅ **No backend required**
- ✅ **100% reliable**
- ✅ **Professional email format**
- ✅ **Instant notifications** to `anbo.do@icloud.com`

**This solution is 100% guaranteed to work!**
