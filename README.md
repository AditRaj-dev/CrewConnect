# 🚀 CrewConnect

<div align="center">
  <h3>Connect, Sync, and Hang Out with Your Crew!</h3>
  <p>A comprehensive platform to sync your EMS timetables, track friend availability, and manage your circles effortlessly across Web and Mobile.</p>
</div>

---

## 📖 Overview

**CrewConnect** is an integrated ecosystem designed for students to synchronize their EMS timetables, share their schedules, and easily find out when their friends are "In Class", "On Break", or free to hang out. With a sleek glassmorphism UI, offline-first mobile capabilities, and a powerful Node.js backend, keeping up with your crew has never been this seamless.

## ✨ Key Features

- **📅 EMS Timetable Integration**: Use our custom **EMS Bookmarklet** to securely extract your weekly timetable and import it directly into CrewConnect with a single click.
- **🟢 Real-Time Friend Availability**: Instantly check if your friends are *In Class*, *On Break*, or *Quick Break* based on their synced schedules.
- **🫂 Circle Management**: Organize friends into different "Crews" or "Circles" with custom avatars and detailed member cards.
- **🎨 Stunning UI/UX**: Built with modern aesthetics featuring refractive glassmorphism, dynamic gradients, and smooth micro-animations.
- **📱 Offline Capabilities**: Persistent offline caching ensures you can view your crew's status even when your connect drops.
- **🔐 Secure Authentication**: Robust JWT-based authentication system seamlessly connected across the Flutter mobile app and React web client.
- **🧑‍🎨 Avatar Builder**: Fully customizable user avatars with a dedicated modal builder.

## 🛠️ Tech Stack

### Mobile App (iOS & Android)
- **Framework**: Flutter / Dart
- **Key Libraries**: HTTP, Dio, Shared Preferences (for offline caching)
- **UI/UX**: Custom themed widgets, smooth transitions.

### Web Application
- **Frontend**: React (TypeScript) / React Native Web
- **Styling**: Vanilla CSS / Tailwind (Glassmorphism & dynamic aesthetics)
- **Integration**: `postMessage` API for communicating with the EMS Bookmarklet.

### Backend API
- **Runtime**: Node.js
- **Architecture**: RESTful API
- **Features**: JWT Auth, User Data & Circle Management, Timetable Processing.

## 🚀 Getting Started

### Prerequisites
- [Flutter SDK](https://flutter.dev/docs/get-started/install) (for mobile app)
- [Node.js](https://nodejs.org/) (for backend and web app)
- Git

### 1. Clone the repository
```bash
git clone https://github.com/AditRaj-dev/CrewConnect.git
cd CrewConnect
```

### 2. Backend Setup
```bash
cd backend
npm install
npm run dev
```

### 3. Web App Setup
```bash
cd web
npm install
npm run start
```

### 4. Mobile App Setup
```bash
cd mobile
flutter pub get
flutter run
```

## 🧩 How the EMS Bookmarklet Works
1. Drag the CrewConnect Bookmarklet to your browser's bookmarks bar.
2. Navigate to your EMS Portal timetable page.
3. Click the bookmarklet. It will parse your class schedule, open the CrewConnect web app in a new tab, and securely transmit your data via `postMessage`.
4. *Note: Ensure you are viewing a standard week without substitute classes for the most accurate import.*

## 🤝 Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.
