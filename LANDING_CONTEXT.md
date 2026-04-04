# CrewConnect Landing Page — Full Context

> Single source of truth for every design, technical, and content decision made on this landing page.  
> Last updated: 2026-04-04

---

## 1. What This Is

A **standalone Next.js landing page** whose sole job is to showcase the CrewConnect mobile app and drive APK downloads for Android users at Galgotias University.

It is **not** the main web app. It lives in the `landing/` subdirectory of the CrewConnect monorepo and deploys separately to Vercel.

---

## 2. The Product — CrewConnect

A **social coordination platform** built exclusively for Galgotias University students. It lets students:

- Know who among their friends is online/available right now (live presence)
- Create private circles (class groups, project teams, friend communities)
- Have direct 1-to-1 conversations and coordination
- Favourite specific people for quick access
- Join via invite links (low-friction onboarding)
- Use the same identity across web and mobile

**Current surfaces:**
- Backend: Node.js + Express + Socket.IO
- Web app: Next.js 16, React 19, TypeScript, Tailwind CSS 4
- Mobile: Flutter with Provider state management

---

## 3. Landing Page Purpose & Audience

**Goal:** Get students to download the Android APK.

**Audience split:** 50% new users discovering CrewConnect for the first time, 50% existing web users who want the mobile version.

**Experience target:** 30–60 second visit. Show the product, earn trust, convert to download.

**Tone:** Direct, campus-native, modern — not corporate, not purple-gradient generic.

---

## 4. Tech Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | Next.js (Pages Router) | 16.2.2 |
| UI | React | 19.2.4 |
| Language | TypeScript | ^5 (strict) |
| Styling | Tailwind CSS | v4 |
| CSS processor | @tailwindcss/postcss | ^4 |
| Animations | Framer Motion | ^12.38.0 |
| HTTP client | axios | ^1.14.0 |
| Testing | Jest + React Testing Library | jest ^30, RTL ^16 |
| Deployment | Vercel | — |
| APK hosting | Firebase Storage | — |

### Critical Tailwind v4 note
Tailwind v4 does **not** use `@tailwind base/components/utilities`. The globals.css must use:
```css
@import "tailwindcss";
```
There is no `tailwind.config.ts` content array — v4 auto-detects source files via `@tailwindcss/postcss`.

### Next.js Pages Router — not App Router
The project uses `src/pages/` (Pages Router). There is no `app/` directory.  
`_app.tsx` imports globals.css. `_document.tsx` sets `<Html lang="en">`.

---

## 5. Project Structure

```
landing/
├── public/
│   ├── screenshots/          ← 6 PNG app screenshots (MUST BE ADDED manually)
│   │   ├── login.png
│   │   ├── circles.png
│   │   ├── connections.png
│   │   ├── favorites.png
│   │   ├── messaging.png
│   │   └── timetable.png
│   └── icons/               ← 6 SVG feature icons (MUST BE ADDED manually)
│       ├── circles.svg
│       ├── connections.svg
│       ├── presence.svg
│       ├── favorites.svg
│       ├── growth.svg
│       └── consistency.svg
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── ScreenshotCarousel.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── StickyDownloadBar.tsx
│   │   ├── Footer.tsx
│   │   └── __tests__/       ← one test file per component
│   ├── pages/
│   │   ├── index.tsx         ← main page, composes all components
│   │   ├── _app.tsx          ← imports globals.css
│   │   └── _document.tsx
│   ├── data/
│   │   ├── features.ts       ← 6 Feature[] entries
│   │   ├── screenshots.ts    ← 6 CarouselSlide[] entries
│   │   └── __tests__/features.test.ts
│   ├── styles/
│   │   └── globals.css
│   ├── config.ts             ← all copy, URLs, links — single source of truth
│   └── types.ts              ← Feature, Screenshot, CarouselSlide interfaces
├── __tests__/
│   └── index.test.tsx        ← integration test for the full page
├── .env.local                ← not committed, holds real APK URL
├── .env.local.example        ← committed, shows required vars
├── jest.config.js
├── jest.setup.js
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## 6. Environment Variables

```bash
# .env.local (never committed)
NEXT_PUBLIC_APK_DOWNLOAD_URL=https://firebasestorage.googleapis.com/v0/b/crewconnect.appspot.com/o/CrewConnect.apk?alt=media
NEXT_PUBLIC_MIN_ANDROID_VERSION=8.0
```

Both vars are prefixed `NEXT_PUBLIC_` so they are available in the browser bundle.  
`config.ts` reads them via `process.env.NEXT_PUBLIC_APK_DOWNLOAD_URL || ''`.

---

## 7. Color System & Design Language

### Palette

| Token | Value | Usage |
|---|---|---|
| `slate-950` | `#020617` | Page background, hero bg, carousel bg, footer bg |
| `slate-900` | `#0f172a` | Cards on dark sections, sticky bar hover |
| `slate-800` | `#1e293b` | Borders on dark backgrounds |
| `slate-700` | `#334155` | Inactive carousel dots, secondary borders |
| `slate-600` | `#475569` | Button borders, muted text |
| `slate-500` | `#64748b` | Stat labels, caption text |
| `slate-400` | `#94a3b8` | Subheadline text on dark |
| `slate-300` | `#cbd5e1` | Secondary button text |
| `white` | `#ffffff` | Primary heading text on dark |
| `emerald-400` | `#34d399` | Primary accent — CTAs, active dots, badges, icons |
| `emerald-300` | `#6ee7b7` | CTA hover state |
| `emerald-50/100` | — | Light tint for icon backgrounds on white sections |
| `teal-500` | — | Secondary glow accent (bottom-left hero) |

### Section rhythm (alternating dark/light)

1. **Hero** — `bg-slate-950` (dark)
2. **ScreenshotCarousel** — `bg-slate-950` (dark)
3. **FeaturesSection** — `bg-white` (light)
4. **StickyDownloadBar** — `bg-slate-950/95` with `backdrop-blur` (dark, sticky)
5. **Footer** — `bg-slate-950` with `border-t border-slate-800` (dark)

### Typography

- System font stack (no Google Fonts dependency)
- Hero h1: `text-6xl md:text-8xl font-extrabold tracking-tight`
- Section headings: `text-4xl font-bold`
- Body/sub: `text-slate-400`, `leading-relaxed`

### Design principles applied

- No gradients on primary backgrounds — flat dark slate only
- Emerald accent is used **sparingly** — CTAs, active states, live indicators, section labels
- Two ambient glow orbs in hero (emerald top-center, teal bottom-left) via `blur-3xl`, opacity ~6–10%
- Subtle dot-grid background on hero at ~4% opacity
- Rounded corners: `rounded-2xl` for cards and buttons, `rounded-full` for badges/pills
- Active scale: `active:scale-95` on primary CTA for tactile feel

---

## 8. Components

### Hero (`src/components/Hero.tsx`)

**Purpose:** Full-screen entry point. Establishes brand, communicates value, drives download.

**Structure:**
- Background: slate-950 with dot-grid overlay + two glow orbs
- Live badge: animated pulse dot + "Now live on Android"
- H1 split into two lines: "Stay Connected" / "in Real Time" (second line in `text-emerald-400`)
- Subheadline from `config.hero.subheadline`
- Two CTA buttons (full-width on mobile, auto on sm+):
  - Primary: `bg-emerald-400 text-slate-950` — "Download Now" with Android SVG icon + green glow shadow
  - Secondary: `border border-slate-700` — "See What's Inside" with chevron
- Three feature tiles below CTAs: ⚡ Instant setup / 🔒 Invite-only / 🏫 Galgotias
- Bounce chevron at bottom

**Props:** `onDownloadClick?`, `onScrollClick?`

---

### ScreenshotCarousel (`src/components/ScreenshotCarousel.tsx`)

**Purpose:** Show actual app screenshots so users know what they're getting.

**Structure:**
- Dark section (`bg-slate-950`) with "App Preview" label + "See What's Inside" heading
- `data-testid="carousel"` on the outer div
- Framer Motion `AnimatePresence` + `motion.div` for slide transitions (`opacity + x`, 0.3s easeOut)
- Prev/Next buttons (`aria-label="Previous slide"` / `"Next slide"`) — round, dark, emerald hover
- 6 dot indicators (`aria-label="Go to slide N"`) — active dot is emerald and wider (`w-8`), inactive is slate-700
- Caption below each slide

**Data source:** `src/data/screenshots.ts` — 6 `CarouselSlide` entries  
**Images expected at:** `public/screenshots/{id}.png`

**Framer Motion mock in tests:**
```typescript
jest.mock('framer-motion', () => ({
  motion: { div: ({ children, ...props }) => <div {...props}>{children}</div> },
  AnimatePresence: ({ children }) => <>{children}</>,
}))
```

---

### FeatureCard (`src/components/FeatureCard.tsx`)

**Purpose:** Reusable card for a single feature.

**Structure:**
- Outer div: `rounded-2xl bg-slate-50 border border-slate-100` with emerald hover border
- Icon: plain `<img>` tag (NOT Next.js `<Image>`) in a `rounded-xl bg-emerald-50 border border-emerald-100` holder
- Title: `text-base font-semibold text-slate-900`
- Description: `text-sm text-slate-500 leading-relaxed`
- Left-aligned layout (not centered)

**Why plain `<img>` not `<Image>`:** Next.js `<Image>` transforms the `src` attribute, breaking the test assertion `expect(img).toHaveAttribute('src', '/icons/test.svg')`.

**Props:** `feature: Feature`

---

### FeaturesSection (`src/components/FeaturesSection.tsx`)

**Purpose:** Grid of all 6 features on a white background.

**Structure:**
- `bg-white py-24`
- "Features" eyebrow label in `text-emerald-600 uppercase tracking-widest`
- "Why CrewConnect?" h2
- Subtitle: "Everything you need to stay in sync with your campus crew — in one place."
- Responsive grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`
- Renders `<FeatureCard>` for each of the 6 features

---

### StickyDownloadBar (`src/components/StickyDownloadBar.tsx`)

**Purpose:** Always-visible download CTA that follows the user down the page.

**Structure:**
- `sticky bottom-0 bg-slate-950/95 backdrop-blur border-t border-slate-800 z-40`
- `data-testid="sticky-bar"`
- Left side: small "CC" monogram in emerald tinted box + app name + platform label
- Right side: `<button>` (NOT `<a>`) — `bg-emerald-400 text-slate-950` — "Download APK"
- On click: `window.open(url, '_blank', 'noopener,noreferrer')`

**Why `<button>` not `<a>`:** The test uses `getByRole('button')` — anchor elements have role "link", not "button".

**Props:** `onDownloadClick?`

---

### Footer (`src/components/Footer.tsx`)

**Purpose:** Legal links, platform status, copyright.

**Structure:**
- `bg-slate-950 border-t border-slate-800 py-16`
- 3-column grid:
  - Col 1: CC monogram + app name + description
  - Col 2: Legal links (Privacy Policy, Terms of Service, Contact Support)
  - Col 3: Platform status — Android (emerald dot, "Available now") + iOS (slate dot, "Coming soon")
- Bottom bar: copyright + "Built for Galgotias University"

---

## 9. Content & Copy

### Hero
- **Headline line 1:** Stay Connected
- **Headline line 2 (emerald):** in Real Time
- **Subheadline:** Know where your friends are. Coordinate campus life in seconds.
- **Primary CTA:** Download Now
- **Secondary CTA:** See What's Inside
- **Feature tiles:** ⚡ Instant setup (Join in 30 seconds) · 🔒 Invite-only (Your circle, your rules) · 🏫 Galgotias (Built for campus life)

### Carousel Slides (6)
| ID | Image | Caption |
|---|---|---|
| login | /screenshots/login.png | Sign in and join your first circle in seconds |
| circles | /screenshots/circles.png | Create private circles for your classes and friend groups |
| connections | /screenshots/connections.png | See who is active and available right now |
| favorites | /screenshots/favorites.png | Keep your important people one tap away |
| messaging | /screenshots/messaging.png | Coordinate with friends and teammates instantly |
| timetable | /screenshots/timetable.png | Never miss class with smart scheduling insights |

### Feature Cards (6)
| ID | Title | Description | Icon |
|---|---|---|---|
| circles | Private Circles | Build meaningful communities for class groups, projects, and friends | /icons/circles.svg |
| connections | Direct Connections | Start one-to-one conversations and coordination instantly | /icons/connections.svg |
| presence | Live Presence | Understand who is active and available in the moment | /icons/presence.svg |
| favorites | Favorites | Keep your important people one tap away | /icons/favorites.svg |
| growth | Invite-Based Growth | Expand communities with low-friction join flows | /icons/growth.svg |
| consistency | Cross-Platform Consistency | Enjoy one social identity and one experience everywhere | /icons/consistency.svg |

### Download Section
- Android: "Available Now on Android" / "Download APK" / min version 8.0 / file size 45 MB
- iOS: "Coming Soon on iOS" / "Notify Me" (no CTA yet — iOS not launched)

### Footer
- Copyright: CrewConnect © 2026
- Links: Privacy Policy (#privacy) · Terms of Service (#terms) · Contact Support (#support)

---

## 10. TypeScript Interfaces

```typescript
// src/types.ts
interface Feature {
  id: string
  title: string
  description: string
  icon: string        // path like /icons/circles.svg
}

interface CarouselSlide {
  id: string
  image: string       // path like /screenshots/login.png
  alt: string
  caption: string
}

interface Screenshot {  // unused currently, kept for future
  id: string
  image: string
  caption: string
}
```

---

## 11. Testing

**Framework:** Jest 30 + React Testing Library 16  
**Environment:** jsdom  
**Config:** `jest.config.js` uses `next/jest` wrapper, `moduleNameMapper` maps `@/*` → `src/*`  
**Setup:** `jest.setup.js` imports `@testing-library/jest-dom`

**Test files:**
| File | Tests |
|---|---|
| `src/components/__tests__/Hero.test.tsx` | 5 — headline parts, subheadline, CTA buttons, min-h-screen |
| `src/components/__tests__/FeatureCard.test.tsx` | 4 — title, description, icon src, rounded-2xl |
| `src/components/__tests__/ScreenshotCarousel.test.tsx` | 4 — carousel div, dots, prev/next buttons, img |
| `src/components/__tests__/StickyDownloadBar.test.tsx` | 4 — sticky-bar testid, Download APK button, CrewConnect text, sticky+bottom-0 classes |
| `src/components/__tests__/Footer.test.tsx` | 3 — copyright, links, bg-slate-950 |
| `src/data/__tests__/features.test.ts` | 4 — length=6, required fields, unique ids, non-empty titles |
| `src/__tests__/index.test.tsx` | 4 — hero renders, carousel renders, features renders, sticky bar renders |

**Total: 28 tests, all passing.**

**Known gotcha — test file location:** `src/pages/__tests__/` is treated as a routable page by Next.js. Page integration tests live at `src/__tests__/` instead.

---

## 12. Configuration Files

### `next.config.ts`
```typescript
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'firebasestorage.googleapis.com' }],
  },
  compress: true,
  poweredByHeader: false,
}
```

### `postcss.config.mjs`
```javascript
export default { plugins: { '@tailwindcss/postcss': {} } }
```

### `tsconfig.json` — strict flags enabled
`strict`, `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`, `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`, `isolatedModules`  
Path alias: `@/*` → `./src/*`

### `.gitignore` excludes
`node_modules`, `.next`, `.env.local`, `.env.*.local`, `/coverage`, `.vercel`, `.vscode`, `.idea`

---

## 13. Deployment

**Platform:** Vercel  
**Repository:** CrewConnect monorepo  
**Root directory setting in Vercel:** `landing`  
**Build command:** `npm run build`  
**Start command:** `npm start`

**Vercel environment variables to set:**
```
NEXT_PUBLIC_APK_DOWNLOAD_URL=<firebase-storage-url>
NEXT_PUBLIC_MIN_ANDROID_VERSION=8.0
```

**APK flow:** Firebase Storage → public URL → env var → `config.download.android.url` → `window.open()` on button click

---

## 14. Assets Still Needed (Not Yet Added)

These files are referenced in the code but **do not exist yet** in `public/`. Someone needs to add them:

**Screenshots** (`public/screenshots/`):
- `login.png` — login/onboarding screen
- `circles.png` — circles list view
- `connections.png` — connections/presence view
- `favorites.png` — favorites screen
- `messaging.png` — direct messaging
- `timetable.png` — timetable/schedule view

**Icons** (`public/icons/`):
- `circles.svg`
- `connections.svg`
- `presence.svg`
- `favorites.svg`
- `growth.svg`
- `consistency.svg`

Until these are added, the carousel will show broken images and feature cards will have empty icon slots. The page still renders and all tests pass because tests don't load actual images.

---

## 15. Git History

```
2717e7c design: expand hero section — larger CTAs, feature tiles, split headline, glow accents
4d1f649 design: overhaul color scheme — slate-950 dark base with emerald accent, remove purple gradient
d682468 fix: use Tailwind v4 @import syntax instead of v3 @tailwind directives
5d6c18f docs: add README and deployment setup guide
2bd0d59 chore: configure Next.js for production deployment
e400467 test: verify all components and fix any issues
f1d3bea chore: add global styles and Tailwind configuration
f7e9787 feat: compose main landing page with all components
09598ec feat: create FeaturesSection and Footer components
95c8455 feat: create StickyDownloadBar for persistent download access
ebe6522 feat: create ScreenshotCarousel with Framer Motion animations
04ae9e6 feat: create FeatureCard component for displaying features
a8c6f01 feat: create Hero component with headline and CTAs
8a2458d feat: add features, screenshots, and config data
88f45c7 feat: add TypeScript type definitions
1ecf540 chore: configure TypeScript, Jest, and environment variables
217640a chore: initialize Next.js landing page project with dependencies
67ebc5b Initial commit from Create Next App
```

---

## 16. Out of Scope (Intentionally Not Built)

- Email capture for iOS "Notify Me" — no backend yet
- Video demos
- Dark/light mode toggle — page is dark-only by design
- Analytics (placeholder `handleDownloadClick` function exists for future)
- Multi-language support
- PWA
- Social proof / testimonials

---

## 17. Known Issues & Decisions

| Issue | Decision |
|---|---|
| Next.js 16 ignored `--app=false` flag during init | Manually converted to Pages Router; deleted root `app/` |
| Tailwind v4 `@tailwind` directives don't work | Fixed: use `@import "tailwindcss"` |
| Next.js `<Image>` transforms `src`, breaks test assertions | Use plain `<img>` tag in FeatureCard and ScreenshotCarousel |
| `src/pages/__tests__/` treated as routable page | Moved page integration test to `src/__tests__/` |
| Multiple lockfiles warning from workspace root | Cosmetic warning only; no effect on build |
| `StickyDownloadBar` uses `<button>` not `<a>` | Tests use `getByRole('button')` — anchors are role "link" |
