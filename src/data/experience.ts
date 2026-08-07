// ── Experience data (single source of truth) ────────────────────────────────
// Work history, newest first; rendered as a vertical timeline.
// Bullets mirror the CV (public/cv.pdf) verbatim — keep the two in sync.
export type Experience = {
  role: string
  company: string
  location: string
  period: string
  /** Optional one-line summary shown under the company. */
  description?: string
  /** Achievement bullets, matching the CV. */
  bullets?: string[]
}

export const experience: Experience[] = [
  {
    role: 'Flutter Engineer (Mid-Level)',
    company: 'Al Manarah Holding Group',
    location: 'Abu Dhabi, UAE',
    period: 'Jan 2025 – Present',
    bullets: [
      'Built the Easy Touch EV charging app (user platform), live on the App Store and Play Store — drivers find chargers on Google Maps, run live charging sessions over WebSocket/OCPP, and pay in-app. The network is in its launch phase, with the first 10 chargers going live. Unit-tested the Cubit state transitions and OCPP handlers with bloc_test and Mockito.',
      "Built a branded whiteboard app for the company's interactive screen product — freehand drawing with CustomPainter and the Canvas API at 60 FPS, Riverpod for state, and Hive to persist vector paths for near-instant save/load. Integrated with an AI backend that recognizes a sketch and returns the closest clean or geometric shape.",
      'Built and deployed five production websites for the group with Next.js 15 — futuregulf.ae (bilingual AR/EN with full RTL), plus easytouchuae.ae, dyfmotors.ae, commercialoxforduae.ae, and westernbeach.ae — handled SEO and Google Search Console setup, and deployed to a UAE server via cPanel.',
    ],
  },
  {
    role: 'Mobile Application Developer',
    company: 'Esmos Tech',
    location: 'Cairo, Egypt',
    period: 'Feb 2022 – Dec 2024',
    description: 'Software outsourcing — delivered client projects for businesses outside Egypt.',
    bullets: [
      'Built Flutter apps across e-commerce, IoT, healthcare, and rental, using Clean Architecture for modularity and testability.',
      'Did a lot of local-first work: Hive for fast NoSQL caching, with GetStorage and SQLite for relational data.',
      'Built mapping screens with Google Maps (custom markers, polylines) and AI-driven personalization features.',
      'Handled end-to-end payment integration and secure API communication, with multi-currency and localized payment support.',
      'Built the Flutter app for an AI fitness & nutrition product that suggests a diet per user from their workout data, integrating with a Node.js/MongoDB backend over real-time sync.',
    ],
  },
]
