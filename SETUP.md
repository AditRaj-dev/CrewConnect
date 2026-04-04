# Deployment Setup Guide

## Prerequisites

- Vercel account
- GitHub repository with landing page code
- Firebase Storage with APK file uploaded

## Firebase Setup

1. Upload APK to Firebase Storage
2. Generate public download URL
3. Add URL to environment variables

## Vercel Deployment

### Option 1: Git Integration (Recommended)

1. Push code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Select your GitHub repository
5. Configure build settings:
   - Framework: Next.js
   - Root Directory: `landing`
   - Build Command: `npm run build`
   - Start Command: `npm start`
6. Add environment variables:
   - `NEXT_PUBLIC_APK_DOWNLOAD_URL`
   - `NEXT_PUBLIC_MIN_ANDROID_VERSION`
7. Deploy

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

## Environment Variables

Set these in Vercel dashboard:

```
NEXT_PUBLIC_APK_DOWNLOAD_URL=<your-firebase-url>
NEXT_PUBLIC_MIN_ANDROID_VERSION=8.0
```

## Post-Deployment

1. Verify deployment at your Vercel URL
2. Test download button (should link to APK)
3. Test on mobile devices

## Rollback

Go to Vercel dashboard → Deployments → click previous deployment → click "Promote to Production"
