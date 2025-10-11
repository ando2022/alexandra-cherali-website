# EmailJS Setup Guide for cherali.art

This guide will help you set up EmailJS to send automatic booking notifications to `alexandra@cherali.art`.

## 🚀 **Step 1: Create EmailJS Account**

1. **Go to:** https://www.emailjs.com/
2. **Click:** "Sign Up" (it's free)
3. **Create account** with your email
4. **Verify your email** address

## ⚙️ **Step 2: Create Email Service**

1. **In EmailJS dashboard:** Go to "Email Services"
2. **Click:** "Add New Service"
3. **Choose:** "Gmail" (since alexandra@cherali.art uses Gmail)
4. **Connect your Gmail account:** `alexandra@cherali.art`
5. **Copy the Service ID** (it will look like `service_xxxxxxx`)

## 📧 **Step 3: Create Email Template**

1. **Go to:** "Email Templates"
2. **Click:** "Create New Template"
3. **Template ID:** `template_booking_notification`
4. **Subject:** `New Art Education Session Booking - {{client_name}}`
5. **Content:**
```
New Art Education Session Booking

Client Name: {{client_name}}
Email: {{client_email}}
Phone: {{client_phone}}
Date: {{booking_date}}
Time: {{booking_time}}
Session Type: {{session_type}}
Message: {{client_message}}

This booking was submitted through cherali.art
```

## 🔑 **Step 4: Get Public Key**

1. **Go to:** "Account" → "General"
2. **Copy your Public Key** (it will look like `xxxxxxxxxxxxxxxx`)

## 🔧 **Step 5: Update Code**

Replace these placeholders in `src/components/BookingDialog.tsx`:

1. **Replace:** `YOUR_EMAILJS_PUBLIC_KEY` with your actual public key
2. **Replace:** `service_alexandra_art` with your actual service ID

## 🧪 **Step 6: Test**

1. **Deploy the updated code**
2. **Try booking a session**
3. **Check alexandra@cherali.art** for the email notification

## ✅ **What You'll Get**

Alexandra will receive emails like:
```
Subject: New Art Education Session Booking - John Doe

New Art Education Session Booking

Client Name: John Doe
Email: john@example.com
Phone: +1234567890
Date: Wed Oct 29 2025
Time: 11:00 AM
Session Type: Onsite in Zurich
Message: I'm interested in contemporary art curation.

This booking was submitted through cherali.art
```

## 💡 **Benefits**

- ✅ **Automatic notifications** to alexandra@cherali.art
- ✅ **Professional email format**
- ✅ **All booking details** included
- ✅ **Reliable delivery** via EmailJS
- ✅ **Free forever** (up to 200 emails/month)
