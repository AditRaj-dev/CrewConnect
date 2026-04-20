<div align="center">

<img src="public/screens/Untitled design.png" width="160" alt="CrewConnect Logo" />

# CREW CONNECT

**The Social Coordination Layer for Campus Life.**

*Know where your crew is. Sync your schedule. Never miss a moment.*

---

[![Web App](https://img.shields.io/badge/Web_App-Live-7C3AED?style=for-the-badge&logo=vercel&logoColor=white)](https://crew-connect-rosy.vercel.app/)
[![Android](https://img.shields.io/badge/Android-Download_APK-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://drive.google.com/uc?export=download&id=16-YHW1RCBmM7Oom7ZsoVZEaMwep2hKdV)
[![Landing](https://img.shields.io/badge/Showcase_Site-Visit-F97316?style=for-the-badge&logo=googlechrome&logoColor=white)](https://crew-connect-rosy.vercel.app/)

![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socketdotio&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

</div>

---

## What is CrewConnect?

CrewConnect is a **full-stack, multi-platform social coordination system** built specifically for university students. It bridges the gap between your academic schedule, your social circle, and the chaos of everyday campus life — all within a sleek, offline-capable mobile experience.

> 🎓 Built for and by students at **Galgotias University**.

---

## Core Features

### 👥 Social Circles & Real-Time Presence
The defining feature of CrewConnect. **Crews** are private, invite-only groups where you can see who's in class, who's free, and coordinate on the fly.

- Live status awareness for each crew member
- Direct peer-to-peer connections without social media clutter
- Create, join and manage multiple crews for different contexts (project team, friend group, batch)
- Real-time updates powered by **Socket.io**

### 🔄 EMS Sync — Browser Extension
A dedicated **Chrome/Edge extension** that connects your academic life to CrewConnect automatically.

- One-click extraction of your complete timetable from the **iCloudEMS** portal
- Automated attendance data sync — track your percentages without manual effort
- Runs as a Manifest V3 service worker for minimal resource footprint

### 📶 Offline-First Timetable
Your schedule is too important to depend on a network connection.

- Full timetable persisted to **local device storage** after first sync
- Works without internet — essential for lecture halls and dead zones
- Smart sync on reconnect to keep data fresh

### 📊 Attendance Intelligence
Never miss the 75% threshold again.

- Per-subject attendance analysis with visual progress indicators
- Color-coded risk detection for lectures you can't afford to skip
- Semester-level view with drill-down per course

---

## 📱 Screenshots

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="public/screens/home-screen.jpg" width="190" alt="Home Screen" /><br/>
        <sub><b>Live Feed</b></sub>
      </td>
      <td align="center">
        <img src="public/screens/crew-screen.jpg" width="190" alt="Crews Screen" /><br/>
        <sub><b>Social Crews</b></sub>
      </td>
      <td align="center">
        <img src="public/screens/timetable-screen.jpg" width="190" alt="Timetable Screen" /><br/>
        <sub><b>Smart Timetable</b></sub>
      </td>
    </tr>
    <tr>
      <td colspan="3" align="center">
        <table>
          <tr>
            <td align="center">
              <img src="public/screens/attendance-screen.jpg" width="190" alt="Attendance Screen" /><br/>
              <sub><b>Attendance Tracker</b></sub>
            </td>
            <td width="40"></td>
            <td align="center">
              <img src="public/screens/profile-screen.jpg" width="190" alt="Profile Screen" /><br/>
              <sub><b>User Profile</b></sub>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</div>

---

## 🏗️ Architecture Overview

```
                     ┌──────────────────────────────────┐
                     │        CrewConnect Backend       │
                     │   Node.js · Express · Socket.io  │
                     │         MongoDB Atlas            │
                     └──────────┬────────────┬──────────┘
                                │            │
                   ┌────────────▼──┐    ┌────▼──────────────────┐
                   │  Flutter App  │    │  Web Application      │
                   │  (Mobile)     │    │  (circle-next-app)    │
                   └───────────────┘    └───────────────────────┘
                                                 ▲
                              ┌──────────────────┘
                              │
                   ┌──────────▼──────────┐
                   │  Browser Extension  │
                   │  EMS Portal → API   │
                   └─────────────────────┘
```

---

## 🛠️ Tech Stack Deep Dive

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Mobile** | Flutter, Dart, Provider | Cross-platform native app |
| **Web App** | Next.js 16, React 19 | Browser-based experience |
| **Showcase** | Next.js 16, Tailwind CSS 4, Framer Motion | Marketing & landing |
| **Extension** | Manifest V3, Vanilla JS | EMS data extraction |
| **API Server** | Node.js, Express.js | REST + WebSocket backend |
| **Realtime** | Socket.io | Live presence & sync |
| **Database** | MongoDB Atlas | Persistent data store |
| **Auth** | Firebase Auth + JWT | Secure session management |
| **Deployment** | Vercel (Frontend), Render (Backend) | Cloud hosting |

---

## 🔒 Security & Infrastructure

- JWT-based authentication with refresh token rotation
- Credentialed CORS policy — strict origin allowlist
- Rate limiting on all public API endpoints
- Firebase Auth integration for identity management
- Dual-database strategy: `crewconnect_social` / `crewconnect_company` namespaces

---

<div align="center">
  <br/>
  <strong>CrewConnect — Unified Synergy</strong>
  <br/>
  <sub>© 2026 CrewConnect · Made with ❤️ for university students</sub>
</div>
