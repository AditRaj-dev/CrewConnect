# Repository Architecture

This repository operates as a comprehensive monorepo, housing the distinct frontend, mobile, and backend tiers alongside public documentation.

## 📂 Folder Tree

```text
CrewConnect/
├── backend/                  # Stateless Express proxy & MongoDB models
│   ├── models/               # Mongoose Entity Schemas (User, Circle, Timetable)
│   ├── routes/               # API endpoints enforcing CRUD boundaries
│   ├── middleware/           # Helmet, CORS, Rate Limiting, and JWT Validation
│   └── index.js              # Application entry point
│
├── web/                      # React/Vite dashboard client
│   ├── src/
│   │   ├── components/       # Radix UI implementations (Modals, Dropdowns)
│   │   ├── hooks/            # Encapsulated state (Auth, Circle, Fetch)
│   │   ├── utils/            # Shared business logic and DOM Parsing payload
│   │   └── App.tsx           # Primary routing layer
│   └── tailwind.config.js    # Glassmorphism design tokens
│
├── mobile/                   # Flutter offline-first client
│   ├── lib/
│   │   ├── providers/        # Application state management (Provider)
│   │   ├── screens/          # Primary views (Home, Timetable, Auth)
│   │   ├── services/         # Dio networking logic and native SharedPreferences
│   │   ├── widgets/          # Themed, localized visual components
│   │   └── main.dart         # Flutter runner
│   └── pubspec.yaml          # Framework dependencies
│
├── docs/                     # Showcase materials and architectural specifications
│   ├── assets/               # Image mocks and demo gifs
│   ├── architecture.md       # Multi-client data isolation strategy
│   ├── security.md           # Defense-in-depth and cascade delete handling
│   ├── tech-stack.md         # Component breakdown
│   └── roadmap.md            # Forward-looking system features
│
└── README.md                 # Primary project ingress
```
