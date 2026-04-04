# CrewConnect APK Landing Page

A mobile-first landing page for downloading the CrewConnect Android APK.

## Features

- Interactive screenshot carousel with Framer Motion animations
- Responsive design (mobile-first)
- Feature highlights grid (6 core features)
- Sticky download button for easy access
- Built with Next.js, React, TypeScript, and Tailwind CSS

## Tech Stack

- **Framework:** Next.js 16
- **UI:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Testing:** Jest + React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_APK_DOWNLOAD_URL=https://firebasestorage.googleapis.com/v0/b/crewconnect.appspot.com/o/CrewConnect.apk?alt=media
NEXT_PUBLIC_MIN_ANDROID_VERSION=8.0
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Testing

```bash
npm test
npm test -- --watch
npm test -- --coverage
```

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── components/       # React components
├── pages/           # Next.js pages
├── data/            # Static data (features, screenshots)
├── styles/          # Global CSS
├── config.ts        # App configuration
└── types.ts         # TypeScript types
```

## Components

- **Hero** - Hero section with headline and CTAs
- **ScreenshotCarousel** - Interactive carousel with Framer Motion
- **FeatureCard** - Individual feature card component
- **FeaturesSection** - Grid of all features
- **StickyDownloadBar** - Sticky bar with download button
- **Footer** - Footer with links

## Deployment

Deployed on Vercel. See [SETUP.md](./SETUP.md) for deployment instructions.

## License

MIT
