# Crew Connect

![Version](https://img.shields.io/badge/version-1.0.0--beta-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Platform](https://img.shields.io/badge/platform-Web%20%7C%20Android-lightgrey.svg)

> **Connect, Sync, and Hang Out with Your Crew**
> An integrated platform and mobile app for university students to synchronize EMS timetables, share schedules, and detect real-time availability across their friend circles.

**🌐 Live Web App:** [crew-connect-prod.vercel.app/dashboard](https://crew-connect-prod.vercel.app/dashboard)

![Demo GIF Placeholder](./docs/assets/demo.gif)

## � Overview

Crew Connect is an engineered utility designed to solve the daily student friction of coordinating free time. By fully automating the ingestion of complex EMS timetables using a custom DOM Parser bookmarklet, the system dynamically calculates when users are "In Class", "On Break", or entirely free.

This project showcases a robust, multi-client system architecture comprising a Node.js backend proxy, a React-based web dashboard with hyper-realistic glassmorphism, and a performant cross-platform Flutter application prioritizing offline-first capabilities. 

## ✨ Feature Highlights

- **Username-Based Authentication**: Stateless JWT auth flow maximizing privacy and reducing boarding friction (no email/OAuth required).
- **Automated Timetable Upsert**: Injects a custom JS parser into the EMS webview/DOM to extract full-week schedules reliably.
- **Overlap Validation Engine**: Server-side conflict detection to prevent duplicate class entries and corrupt schedule states.
- **Real-Time Status Computation**: Reactive user status engine displaying "In Class", "On Break", or "Free" based on the unified master schedule.
- **Circle Management**: Create, join (via secure invite codes), and administer private friend groups (Crews) with Creator/Member governance.
- **Offline Mode Persistence**: The Flutter client locally caches all timetable and Circle data to ensure full visibility even on spotty campus Wi-Fi.
- **Advanced Glass UI**: Deep space aesthetic featuring complex multi-layered refractive frosted glass, reactive blurs, and organic mesh gradients.
- **Secure Data Cascade**: Robust account and Circle deletion workflows that maintain referential integrity.

## 🏗️ Architecture Overview

The system operates on an isolated tier architecture:
1. **Frontend Web Client (React/Vite)**: Optimized for fast timetable onboarding and Circle administration.
2. **Mobile Client (Flutter)**: Optimized for daily persistent usage and offline availability.
3. **API Layer (Node.js/Express)**: A stateless proxy enforcing business logic, overlap validation, and JWT verification.
4. **Data Layer (MongoDB)**: Stores structured timetable matrices and relational Circle mappings.

Refer to [`docs/architecture.md`](./docs/architecture.md) for an in-depth system diagram and architectural responsibilities.

## � Interface Preview

![Web Interface Placeholder](./docs/assets/web-mock.png)
*Web Dashboard: Glassmorphic Hub*

![Mobile App Placeholder](./docs/assets/mobile-mock.png)
*Mobile App: Offline-First Schedule Viewer*

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Web**: React 18, TypeScript, Tailwind CSS v4, Vite, Radix UI
- **Mobile**: Flutter, Dart, Provider (State), Dio (Network)

See [`docs/tech-stack.md`](./docs/tech-stack.md) for full details.

## 🔒 Security Philosophy

Security is baked into the foundation:
- **Strict CORS & Helmet**: Mitigating cross-site attacks and enforcing secure headers.
- **Ownership Validation**: Backend verifies creator privileges before permitting localized destructive actions (e.g., Circle deletion).
- **Referential Integrity**: Account deletions cleanly trigger cascading hard-deletes to avoid orphaned records.

Full security principles are detailed in [`docs/security.md`](./docs/security.md).

## 🚀 Roadmap

The platform is continuously evolving. Our immediate pipeline focuses on reducing database duplication through **Section-Based Timetable Normalization** and introducing push notifications for overlapping free periods.

View the full breakdown in [`docs/roadmap.md`](./docs/roadmap.md).

## 📄 License & Access

Crew Connect is distributed under the **MIT License**. The codebase is organized as a monorepo containing both the web dashboard and mobile application source code.

An Android build `app-release.apk` is available in the [Releases](https://github.com/AditRaj-dev/CrewConnect/releases) tab.
