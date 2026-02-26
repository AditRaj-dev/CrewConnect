# Architecture Overview

Crew Connect leverages a multi-client architecture designed for high availability and offline persistence, bridging a React web environment and a Flutter mobile application through a stateless Node API.

## 🏢 Layer Separation

The application enforces a strict separation of concerns, ensuring that the presentation layer remains decoupled from business logic and data persistence.

### Backend Responsibilities (Node.js/Express)
- **Token Issue & Verification**: Generates and validates stateless JSON Web Tokens.
- **Data Integrity**: Enforces overlap validation against incoming timetable objects to prevent time-slot collisions.
- **Authorization**: Restricts CRUD operations explicitly to resource owners or authorized Creator accounts.
- **Relational Mapping**: Manages complex joining for Circle/User entity mapping.
- **Cascade Operations**: Secures referential integrity during data purges (Hard Deletes).

### Web Responsibilities (React/Vite)
- **EMS DOM Parsing**: Injects JavaScript to crawl and normalize HTML tables from the university EMS portal.
- **Administration**: Provides a seamless desktop experience for generating invite codes and managing circles.
- **Visual Rendering**: Computes advanced CSS filters (refractive glassmorphism, dynamic meshes) locally.

### Mobile Responsibilities (Flutter)
- **Offline-First Persistence**: Caches critical JSON responses using local shared preferences, ensuring schedules render seamlessly without internet access.
- **Native Webview Injection**: Facilitates the same EMS DOM scraping logic directly inside a secure mobile view.
- **Network Resiliency**: Utilizes Dio with custom error interceptors to grace-fail API requests across poor connections.

## 🗺️ API Contract Overview

The REST API communicates strictly via JSON over HTTPS.
- Authentication happens via `Authorization: Bearer <token>`.
- Read operations (`GET`) return flattened objects optimized for UI iteration.
- Destructive operations (`DELETE`) require an explict secondary confirmation param against accidental requests.

## 🗄️ Data Model Overview

The domain model pivots around three primary concepts:
1. `User`: Holds identity and the arrayed time matrix.
2. `Circle`: Represents a social group linking standard users via secure invite codes.
3. `Timetable`: A 7-day normalized representation of class and break slots.

## 🗑️ Deletion Cascade Explanation

To maintain absolute data integrity, "Soft Deletes" are bypassed in favor of secured Hard Deletes. When a User deletes their account:
1. The backend removes their `ObjectId` from every `Circle.members` array.
2. Any `Circle` where they are the sole creator is scrubbed or transferred.
3. Their individual `Timetable` matrices are permanently wiped from the collection.
This ensures zero orphaned data or privacy liabilities.

## 📊 System ASCII Diagram

```text
                        +--------------------+
                        |  EMS Portal (DOM)  |
                        +---------+----------+
                                  | (Data Scraping)
       +--------------------------+--------------------------+
       |                                                     |
+------v--------+                                     +------v--------+
| React Web CLI |                                     | Flutter App   |
| (Dashboard &  |  <---- (JWT / API / JSON) ---->     | (Caching &    |
| Circle Admin) |                                     | Persistence)  |
+---------------+                                     +---------------+
                                                             |
                                                             |
                        +--------------------+               |
                        | Express.js Proxy   | <-------------+
                        | (Node.js Backend)  |
                        +---------+----------+
                                  |
                        +---------v----------+
                        |  MongoDB Instance  |
                        | (Document Storage) |
                        +--------------------+
```
