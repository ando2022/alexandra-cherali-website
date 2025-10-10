#!/bin/bash

# Deployment script for Alexandra Cherali Website
# This script helps deploy the backend to Supabase

set -e  # Exit on error

echo "🚀 Alexandra Cherali Website - Deployment Script"
echo "================================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo -e "${RED}❌ Supabase CLI not found${NC}"
    echo "Install it with: npm install -g supabase"
    exit 1
fi

echo -e "${GREEN}✓${NC} Supabase CLI found"
echo ""

# Login check
echo -e "${BLUE}Checking Supabase login...${NC}"
if ! supabase projects list &> /dev/null; then
    echo -e "${YELLOW}Please login to Supabase:${NC}"
    supabase login
else
    echo -e "${GREEN}✓${NC} Already logged in"
fi
echo ""

# Check if project is linked
echo -e "${BLUE}Checking project link...${NC}"
if [ ! -f ".supabase/config.toml" ]; then
    echo -e "${YELLOW}Project not linked. Please enter your project reference:${NC}"
    echo "(Find it in: Supabase Dashboard → Project Settings → General)"
    read -p "Project Ref: " PROJECT_REF
    supabase link --project-ref "$PROJECT_REF"
else
    echo -e "${GREEN}✓${NC} Project already linked"
fi
echo ""

# Deploy server function
echo -e "${BLUE}Deploying server function...${NC}"
supabase functions deploy server

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓${NC} Server function deployed successfully!"
else
    echo -e "${RED}❌${NC} Deployment failed. Check the errors above."
    exit 1
fi
echo ""

# Check environment variables
echo -e "${BLUE}Checking environment variables...${NC}"
echo "Make sure these secrets are set in Supabase Dashboard:"
echo "  → Project Settings → Edge Functions → Secrets"
echo ""
echo "Required secrets:"
echo "  ✓ GOOGLE_CALENDAR_CREDENTIALS (Already set)"
echo "  ✓ GOOGLE_CALENDAR_ID (Already set)"
echo "  ? RESEND_API_KEY (Get from https://resend.com)"
echo "  ? ADMIN_EMAIL (Your notification email)"
echo ""

read -p "Have you set RESEND_API_KEY and ADMIN_EMAIL? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}⚠ Don't forget to set these secrets in Supabase Dashboard!${NC}"
fi
echo ""

# Test deployment
echo -e "${BLUE}Testing deployment...${NC}"
PROJECT_ID=$(grep 'project_id' .supabase/config.toml | cut -d'"' -f2)

if [ -z "$PROJECT_ID" ]; then
    echo -e "${YELLOW}⚠ Could not detect project ID. Skipping health check.${NC}"
else
    echo "Testing health endpoint..."
    HEALTH_URL="https://$PROJECT_ID.supabase.co/functions/v1/make-server-b97bd89f/health"
    
    if curl -s "$HEALTH_URL" | grep -q "ok"; then
        echo -e "${GREEN}✓${NC} Server is responding!"
    else
        echo -e "${RED}❌${NC} Server health check failed"
        echo "URL tested: $HEALTH_URL"
    fi
fi
echo ""

# Next steps
echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo ""
echo -e "${BLUE}Next Steps:${NC}"
echo "1. Create admin user (see DEPLOYMENT_FINAL.md)"
echo "2. Deploy frontend to Vercel"
echo "3. Test the complete system"
echo ""
echo -e "${BLUE}Useful Commands:${NC}"
echo "  View logs:     supabase functions logs server --follow"
echo "  Redeploy:      supabase functions deploy server"
echo "  List projects: supabase projects list"
echo ""
echo -e "${GREEN}Documentation:${NC}"
echo "  Full guide: DEPLOYMENT_FINAL.md"
echo "  Quick start: QUICK_START_SUMMARY.md"
echo ""
echo "Happy deploying! 🚀"
