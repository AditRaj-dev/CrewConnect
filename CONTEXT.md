# Landing Page Development Context

**Date Started:** 2026-04-04  
**Project:** CrewConnect APK Landing Page  
**Status:** Design & Plan Complete, Ready for Implementation

---

## Project Overview

CrewConnect is a social coordination platform for Galgotias University students. It helps students stay connected in real time through:
- Private circles (class groups, projects, friend communities)
- Direct connections (1-to-1 coordination)
- Live presence awareness
- Favorites (quick access to important people)
- Invite-based growth
- Cross-platform consistency (web + mobile + iOS coming soon)

**Current Surfaces:**
- Backend: Node.js + Express + Socket.IO
- Web: Next.js 16, React 19, TypeScript, Tailwind CSS 4
- Mobile: Flutter with Provider state management

---

## Landing Page Requirements

### Purpose
Create a mobile-first landing page to showcase the CrewConnect mobile app and drive APK downloads for Android users.

### Audience
- **Equal split:** New users discovering CrewConnect + Existing web users wanting mobile version
- **Target:** Galgotias University students
- **Geographic:** Campus-focused

### Key Features
1. **Hero Section** - Headline, subheadline, dual CTAs ("Download Now", "See What's Inside")
2. **Interactive Screenshot Carousel** - 6 key app screenshots with Framer Motion animations
3. **Feature Highlights Grid** - All 6 core features with icons and descriptions
4. **Platform Status** - Android available now, iOS coming soon
5. **Sticky Download Bar** - Always-accessible download button
6. **Footer** - Links, copyright, social
7. **Responsive Design** - Mobile-first approach

### Tone & Approach
- **Discovery-first** - Showcase product experience before asking for download
- **Lightweight** - 30-60 second experience
- **Modern** - Fresh design (not matching existing web app or showcase)
- **Mobile-optimized** - Touch-friendly, swipeable carousel

---

## Design Decisions Made

### Architecture
- **Standalone Next.js app** (separate from main web app)
- **Vercel deployment** (domain TBD, likely landing.crewconnect.app or similar)
- **Firebase Storage** for APK hosting
- **Framer Motion** for carousel animations
- **Tailwind CSS 4** for styling
- **Jest + React Testing Library** for testing
- **TypeScript** for type safety

### Component Structure
1. **Hero** - Hero section with CTAs
2. **ScreenshotCarousel** - Swipeable carousel with dot navigation
3. **FeatureCard** - Reusable feature card component
4. **FeaturesSection** - 6-feature grid
5. **StickyDownloadBar** - Persistent download access
6. **Footer** - Footer with links
7. **_app.tsx, _document.tsx** - Next.js pages

### Data Structure
- **features.ts** - Array of 6 features with icons, titles, descriptions
- **screenshots.ts** - Array of 6 carousel slides with images and captions
- **config.ts** - Centralized configuration (hero copy, download URLs, footer links)
- **types.ts** - TypeScript interfaces (Feature, CarouselSlide, etc.)

### Mobile-First Responsive Breakpoints
- Mobile: Single column, full-width
- Tablet (640px+): 2 columns for features
- Desktop (1024px+): 3-column feature grid, horizontal enhancements

### Environment Variables (Firebase)
```
NEXT_PUBLIC_APK_DOWNLOAD_URL=https://firebasestorage.googleapis.com/v0/b/crewconnect.appspot.com/o/CrewConnect.apk?alt=media
NEXT_PUBLIC_MIN_ANDROID_VERSION=8.0
```

---

## Implementation Plan

### 15 Tasks (TDD Approach)
All tasks follow **Test-Driven Development**:
1. Write failing test
2. Implement minimal code
3. Verify test passes
4. Commit

### Task Breakdown

**Setup Phase (Tasks 1-3)**
- Task 1: Initialize Next.js + install dependencies
- Task 2: Configure TypeScript, Jest, environment variables
- Task 3: Create TypeScript type definitions

**Data Layer (Task 4)**
- Task 4: Create features.ts, screenshots.ts, config.ts with tests

**Component Layer (Tasks 5-9)**
- Task 5: Hero component
- Task 6: FeatureCard component
- Task 7: ScreenshotCarousel component (with Framer Motion)
- Task 8: StickyDownloadBar component
- Task 9: FeaturesSection + Footer components

**Page Composition (Task 10)**
- Task 10: Main index.tsx page, compose all components

**Styling & Responsiveness (Task 11)**
- Task 11: Global CSS, Tailwind config, responsive design

**Testing & Verification (Task 12)**
- Task 12: Full test suite, manual testing on all devices

**Deployment Prep (Tasks 13-15)**
- Task 13: Next.js production config, Vercel settings
- Task 14: README.md, SETUP.md documentation
- Task 15: Final checks, push to GitHub

### Execution Strategy
- **Subagent-Driven Development** - Fresh subagent per task
- **Two-stage review** - Spec compliance review, then code quality review
- **After all tasks** - Final code quality review + finishing-a-development-branch skill

---

## Key Technical Details

### Project Structure
```
landing/
├── public/
│   ├── screenshots/  (6 PNG images)
│   └── icons/       (6 SVG icons)
├── src/
│   ├── components/  (5 components + 5 test files)
│   ├── pages/       (index, _app, _document)
│   ├── data/        (features, screenshots, config)
│   ├── styles/      (globals.css)
│   ├── types.ts
│   └── config.ts
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── jest.config.js
└── .env.local
```

### Dependencies
**Core:**
- next@16
- react@19
- typescript
- tailwindcss@4
- framer-motion
- axios (optional, for API calls)

**Dev:**
- jest
- @testing-library/react
- @testing-library/jest-dom
- @types/jest

### Testing Strategy
- Unit tests for all components using Jest + React Testing Library
- Integration test for main index page
- Data validation tests for features and screenshots
- Manual responsive testing on mobile/tablet/desktop

### Deployment
- **Platform:** Vercel
- **Repository:** GitHub (CrewConnect monorepo)
- **Root Directory:** `landing/`
- **Environment Variables:** NEXT_PUBLIC_APK_DOWNLOAD_URL, NEXT_PUBLIC_MIN_ANDROID_VERSION
- **Build:** `npm run build`
- **Start:** `npm start`

---

## Content & Messaging

### Hero Copy
- **Headline:** "Stay Connected in Real Time"
- **Subheadline:** "Know where your friends are. Coordinate campus life in seconds."
- **CTA Buttons:** "Download Now" (primary), "See What's Inside" (secondary)

### Carousel Slides (6)
1. Login/Onboarding - "Sign in and join your first circle in seconds"
2. Circles - "Create private circles for your classes and friend groups"
3. Connections - "See who is active and available right now"
4. Favorites - "Keep your important people one tap away"
5. Messaging - "Coordinate with friends and teammates instantly"
6. Timetable - "Never miss class with smart scheduling insights"

### 6 Core Features
1. **Private Circles** - Build meaningful communities
2. **Direct Connections** - One-to-one conversations
3. **Live Presence** - Understand availability in real-time
4. **Favorites** - Quick access to important people
5. **Invite-Based Growth** - Low-friction join flows
6. **Cross-Platform Consistency** - One identity everywhere

### Download Section
- **Android:** "Available Now on Android" + "Download APK"
- **iOS:** "Coming Soon on iOS" (muted styling, no CTA yet)

---

## Out of Scope (v2 Features)
- Email capture for "Notify Me" when iOS launches
- Video demos of app flows
- Social proof / testimonials
- Dark mode
- Multi-language support
- PWA version
- Analytics dashboard

---

## Success Criteria (Post-Launch)
- Page loads < 2 seconds on 4G mobile
- Download button accessible within 2 taps on mobile
- Carousel smooth and intuitive on touch
- 80%+ of users see entire hero section
- Download link monitoring (no 404s)
- Works on iPhone SE through desktop
- Responsive on all standard breakpoints

---

## Next Steps

1. **Start Subagent-Driven Implementation**
   - Task 1: Initialize Next.js and install dependencies
   - Each task: implement → spec review → code review → mark complete

2. **After All Tasks Complete**
   - Final code quality review
   - Use superpowers:finishing-a-development-branch skill
   - Prepare for Vercel deployment

3. **Post-Implementation**
   - Set up Firebase storage with APK
   - Configure Vercel environment variables
   - Test deployment
   - Monitor download metrics

---

## Files Created During This Session

1. **Design Spec:** `docs/superpowers/specs/2026-04-04-landing-page-apk-download-design.md`
   - Complete product specification
   - Architecture details
   - Success metrics

2. **Implementation Plan:** `docs/superpowers/plans/2026-04-04-landing-page-apk-download.md`
   - 15 bite-sized tasks
   - Complete code for all steps
   - Test-driven development approach
   - File structure and dependencies

3. **This Context File:** `landing/CONTEXT.md`
   - Quick reference for entire project
   - Design decisions
   - Technical details
   - Implementation strategy

---

## Key Contacts & Resources

- **Design Spec:** `docs/superpowers/specs/2026-04-04-landing-page-apk-download-design.md`
- **Implementation Plan:** `docs/superpowers/plans/2026-04-04-landing-page-apk-download.md`
- **Firebase:** APK hosting (credentials in environment)
- **Vercel:** Deployment platform (domain TBD)
- **GitHub:** CrewConnect monorepo (branch: `landing-page`)

---

**Created:** 2026-04-04  
**Ready for:** Subagent-Driven Implementation  
**Execution Model:** Fresh subagent per task, two-stage review
