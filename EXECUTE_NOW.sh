#!/bin/bash

# ========================================
# DEPLOYMENT EXECUTION SCRIPT
# Run this script to deploy step-by-step
# ========================================

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

PROJECT_DIR="/Users/anastasiiadobson/Library/CloudStorage/Dropbox/WORK/CURRENT PROJECTS/ARCHIVE/Art Curator Website Build"
PROJECT_REF="rearknifkvcnmyszzrbv"

echo -e "${BLUE}════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}   Alexandra Cherali Website - Deployment Script${NC}"
echo -e "${BLUE}════════════════════════════════════════════════════════${NC}"
echo ""

cd "$PROJECT_DIR"

# Step 1: Login to Supabase
echo -e "${BLUE}STEP 1: Login to Supabase${NC}"
echo "This will open your browser..."
read -p "Press ENTER to continue..."
supabase login

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Logged in successfully${NC}"
else
    echo -e "${RED}✗ Login failed${NC}"
    exit 1
fi
echo ""

# Step 2: Link Project
echo -e "${BLUE}STEP 2: Link Project${NC}"
echo "Linking to project: $PROJECT_REF"
read -p "Press ENTER to continue..."
supabase link --project-ref "$PROJECT_REF"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Project linked successfully${NC}"
else
    echo -e "${RED}✗ Project linking failed${NC}"
    exit 1
fi
echo ""

# Step 3: Setup Resend
echo -e "${BLUE}STEP 3: Configure Resend API Key${NC}"
echo ""
echo "Before deploying, you need to set up email service:"
echo "1. Go to https://resend.com"
echo "2. Sign up and get an API key"
echo "3. Go to Supabase Dashboard → Settings → Edge Functions → Secrets"
echo "4. Add these secrets:"
echo "   - Name: RESEND_API_KEY, Value: [your Resend API key]"
echo "   - Name: ADMIN_EMAIL, Value: [your notification email]"
echo ""
read -p "Have you configured the secrets? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}⚠ Please configure secrets before continuing${NC}"
    echo "Visit: https://supabase.com/dashboard"
    exit 1
fi
echo -e "${GREEN}✓ Secrets configured${NC}"
echo ""

# Step 4: Deploy Server Function
echo -e "${BLUE}STEP 4: Deploy Server Function${NC}"
read -p "Press ENTER to deploy..."
supabase functions deploy server

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Server deployed successfully${NC}"
else
    echo -e "${RED}✗ Deployment failed${NC}"
    exit 1
fi
echo ""

# Step 5: Test Server
echo -e "${BLUE}STEP 5: Test Server Health${NC}"
HEALTH_URL="https://$PROJECT_REF.supabase.co/functions/v1/make-server-b97bd89f/health"
echo "Testing: $HEALTH_URL"
echo ""

if curl -s "$HEALTH_URL" | grep -q "ok"; then
    echo -e "${GREEN}✓ Server is healthy!${NC}"
else
    echo -e "${YELLOW}⚠ Health check inconclusive (may still be working)${NC}"
fi
echo ""

# Step 6: Create Admin User
echo -e "${BLUE}STEP 6: Create Admin User${NC}"
echo ""
echo "Go to Supabase Dashboard:"
echo "1. Authentication → Users"
echo "2. Add user → Create new user"
echo "3. Enter email and password"
echo "4. Check 'Auto Confirm User'"
echo "5. Create user"
echo ""
read -p "Have you created the admin user? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}⚠ Create admin user before continuing${NC}"
    echo "Visit: https://supabase.com/dashboard"
    exit 1
fi
echo -e "${GREEN}✓ Admin user created${NC}"
echo ""

# Step 7: Push to GitHub
echo -e "${BLUE}STEP 7: Push to GitHub${NC}"
echo ""
echo "Before pushing, create a GitHub repository:"
echo "1. Go to https://github.com/new"
echo "2. Name it: alexandra-cherali-website"
echo "3. Keep it private"
echo "4. Do NOT initialize with README"
echo "5. Create repository"
echo ""
read -p "Enter your GitHub username: " GITHUB_USERNAME
echo ""
read -p "Ready to push? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git remote add origin "https://github.com/$GITHUB_USERNAME/alexandra-cherali-website.git" 2>/dev/null || true
    git branch -M main
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Code pushed to GitHub${NC}"
    else
        echo -e "${YELLOW}⚠ Push may have failed, check above for errors${NC}"
    fi
else
    echo -e "${YELLOW}⚠ Skipping GitHub push${NC}"
fi
echo ""

# Step 8: Deploy to Vercel
echo -e "${BLUE}STEP 8: Deploy to Vercel${NC}"
echo ""
echo "Now deploy to Vercel:"
echo "1. Go to https://vercel.com"
echo "2. Click 'Add New' → 'Project'"
echo "3. Import your GitHub repository"
echo "4. Framework: Vite (auto-detect)"
echo "5. Build Command: npm run build"
echo "6. Output Directory: build"
echo "7. No environment variables needed (credentials in code)"
echo "8. Click 'Deploy'"
echo ""
read -p "Press ENTER when deployed..."
echo ""

# Final Summary
echo -e "${GREEN}════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}   🎉 DEPLOYMENT COMPLETE!${NC}"
echo -e "${GREEN}════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${BLUE}Your Website Details:${NC}"
echo "Project ID: $PROJECT_REF"
echo "Supabase URL: https://$PROJECT_REF.supabase.co"
echo "Health Check: $HEALTH_URL"
echo ""
echo -e "${BLUE}Next Steps:${NC}"
echo "1. Test your website thoroughly"
echo "2. Test booking system"
echo "3. Test admin dashboard"
echo "4. Share your website!"
echo ""
echo -e "${BLUE}Admin Dashboard:${NC}"
echo "URL: https://your-site.vercel.app/admin/login"
echo ""
echo -e "${GREEN}Happy deploying! 🚀${NC}"
echo ""

