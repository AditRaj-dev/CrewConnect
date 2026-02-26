# Screenshot Organization Plan

To ensure the repository maintains a premium, SaaS-like presentation, all visual artifacts will be stored in `docs/assets/`.

## 📸 Asset Inventory Requirements

### 1. Web Dashboard (High-Fidelity Mocks)
- **`web-dashboard-empty.png`**: The initial glassmorphic state prior to timetable import.
- **`web-dashboard-populated.png`**: A fully loaded timetable matrix, demonstrating UI density.
- **`web-circle-admin.png`**: The modal displaying the strict Creator/Member management interface and Invite Code generation.

### 2. Mobile App (Device-Framed Mocks)
- **`mobile-home-offline.png`**: The primary friend availability view (In Class / On Break / Free) functioning strictly from local cache (simulating 'Airplane Mode').
- **`mobile-timetable.png`**: The interactive timetable tab rendering complex weekly overlaps correctly.
- **`mobile-auth.png`**: The minimalist username authentication flow.

### 3. Demonstrative Media
- **`demo.gif`**: A strictly timed, 60-second loop illustrating the full product lifecycle: Web Login -> Timetable Upsert -> Circle Creation -> Mobile App Persistence.

## 🖼️ Implementation Rules
- All static screenshots must be wrapped in consistent device frames (e.g., MacBook frame for Web, Pixel/iPhone frame for Mobile) using clean, dark backgrounds to match the aesthetic.
- Screenshots must avoid exposing real user data (use mocked `friend.json` states).
- Optimize `.png` assets using tools like TinyPNG to maintain repository leanness.
