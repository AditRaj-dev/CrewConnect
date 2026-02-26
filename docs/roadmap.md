# Future Roadmap

The Crew Connect platform is governed by a long-term vision of becoming a definitive campus utility app, shifting from an MVP state to an open-source movement designed to solve real daily friction for university students.

## 🏃 Short-Term Goals

- **Section-Based Timetable Normalization**: A structural API refactor aimed at drastically reducing database duplication by indexing schedules to unique class sections rather than appending raw matrix data directly to individual user documents.
- **Profile Avatars**: Enhancing the "Crews" UI by allowing users to construct and store detailed visual avatars within their profiles.
- **Robust Error Handling**: Implementing advanced Sentry logging across Mobile clients to proactively catch network edge-cases.

## 🚶 Mid-Term Goals

- **Push Notifications**: Integrating FCM (Firebase Cloud Messaging) into the mobile app to actively trigger push notifications when "Overlapping Free Periods" occur amongst friends.
- **Progressive Web App (PWA)**: Augmenting the web dashboard's `manifest.json` with service workers for immediate home-screen installability and basic offline caching.
- **Campus Deployment Campaigns**: Actively distributing the compiled `app-release.apk` to student bodies for large-scale stress testing.

## 🔭 Long-Term Vision

- **Predictive Free Time**: Analyzing weekly behavior patterns to suggest optimal meeting slots across overlapping Circles.
- **Store Deployments**: Launching formally on the Google Play Store and iOS App Store via Fastlane pipeline automation.
- **Open-Source Standard**: Transitioning the core repository into a governed open-source organization to support multi-university DOM parsing structures.
