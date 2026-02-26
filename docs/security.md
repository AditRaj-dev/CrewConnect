# Security Philosophy

Crew Connect is built with privacy and data integrity as its primary focus. As a platform handling user schedules and social circles, security is baked into the architecture at every level.

## 🔒 JWT Handling

- **Stateless Authentication**: The backend relies solely on stateless JSON Web Tokens issued upon a successful username/password match.
- **Token Lifecycle**: Tokens are configured with a strict 7-day expiration cycle to mitigate the risk of stale or compromised sessions.
- **Minimal attack surface**: By forgoing email accounts and complex OAuth integrations, the platform minimizes PII (Personally Identifiable Information) storage, significantly reducing boarding friction and liability.

## 🛡️ Risk Boundaries & Protection

- **CORS Restrictions**: Cross-Origin Resource Sharing is strictly limited, preventing unauthorized browser contexts from executing state-changing API calls against the Render/VPS proxy.
- **Helmet Middleware**: Express Helmet is active across all endpoints, automatically setting secure HTTP headers to mitigate cross-site scripting (XSS), clickjacking, and mime-type sniffing.
- **Rate Limiting**: `express-rate-limit` enforces strict thresholds on the API layer, blocking brute-force password attacks and API abuse from malicious actors.

## 🪪 Ownership Validation

Authorization operates on a strict Creator/Member paradigm.
- Actions modifying a Circle's fundamental properties, or terminating the Circle entirely, are wrapped in middleware that validates the JWT's embedded User ID against the `creatorId` on the Circle document. 
- General read access to a Circle's member statuses requires that the requesting User ID physically exists within the `members` array.

## 🗑️ Destructive Action Confirmation

Accidental data loss is prevented at the UX layer:
- All destructive actions (Leaving a Circle, Deleting a Circle, Deleting an Account) are gated behind explicit, red-tinted modal confirmations.
- These operations cannot be triggered via simple rapid clicks; the user is forced into a distinct action state.

## 🧨 Hard Delete Implementation

Unlike systems that soft-delete records by flipping an `isActive` boolean (leaving data dormant on the server), Crew Connect enforces **Hard Cascade Deletes**.
- When an account is terminated, the database triggers a transactional scrub.
- The User document is purged.
- All relationships inside `Circle` documents are severed.
- Embedded `Timetable` matrices are permanently erased.
- This represents a definitive closure of the User's digital footprint on the platform.
