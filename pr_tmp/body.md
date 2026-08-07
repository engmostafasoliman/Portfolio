## Summary

Adds a new open-source project, an intro splash screen, and a personal touch-up.

### 🆕 GitMind project

- Added **GitMind** — an open-source Flutter app that explores GitHub repos through Gemini AI (OAuth sign-in, one-tap repo summaries, repo-aware chat). Clean Architecture + Cubit, SQLite cache, 80 unit tests.
- Rendered with a **Code** button (open source) and its poster image.

### ✨ Splash screen

- Brief intro overlay on load: the **"ME" mark** scales in, the **name reveals letter-by-letter**, a blue→sky **loading bar** sweeps, then it fades to the page.
- Locks scroll while visible; `aria-label` on the name for screen readers.
- Fully **`prefers-reduced-motion`-aware** (collapses to a ~0.4s flash, no per-letter motion).

### 🖼️ Personal photo

- Hero portrait now uses `public/me-pic.jpg` (resolved via `asset()` for the `/Portfolio/` base).

### ✏️ Copy

- Dropped **"EU"** from relocation wording site-wide → **"Open to relocation"** (Hero badge, About, and `index.html` meta / OG / Twitter).
- Refreshed `public/cv.pdf`.

## Verification

- `npm run build` ✅ (tsc strict, no `any`; vite build clean)
