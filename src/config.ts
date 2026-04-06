export const config = {
  app: {
    name: 'CrewConnect',
    tagline: 'Stay Connected in Real Time',
    description: 'Know where your friends are. Coordinate campus life in seconds.',
  },
  hero: {
    headline: 'Stay Connected in Real Time',
    subheadline:
      'Know where your friends are. Coordinate campus life in seconds.',
    primaryCta: 'Download Now',
    secondaryCta: "See What's Inside",
  },
  download: {
    android: {
      label: 'Available Now on Android',
      buttonText: 'Download APK',
      url: process.env.NEXT_PUBLIC_APK_DOWNLOAD_URL || 'https://github.com/AditRaj-dev/CrewConnect/releases/download/v1.0.5/CrewConnect.v1.0.5.apk',
      minVersion: process.env.NEXT_PUBLIC_MIN_ANDROID_VERSION || '8.0',
      fileSize: '45 MB',
    },
    ios: {
      label: 'Coming Soon on iOS',
      buttonText: 'Notify Me',
    },
    web: {
      label: 'Try in Browser',
      buttonText: 'Open Web App',
      url: process.env.NEXT_PUBLIC_WEB_APP_URL || 'https://crew-connect-rosy.vercel.app/',
    },
  },
  footer: {
    copyright: 'CrewConnect © 2026',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Contact Support', href: '#support' },
    ],
  },
}
