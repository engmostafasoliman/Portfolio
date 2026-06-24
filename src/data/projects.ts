// ── Projects data (single source of truth) ──────────────────────────────────
// The 6 Flutter apps in display order; the Projects section maps over this array.
// A project with no `links` renders a graceful "No public link" state.
// `image` may be a full URL or a path relative to public/ (resolved at render).
export type ProjectLink = {
  appStore?: string
  playStore?: string
  website?: string
  github?: string
}

export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  /** Omit (or leave empty) for apps with no public link. */
  links?: ProjectLink
  /** Local path relative to public/ (e.g. 'images/x.png') or a full URL. */
  image?: string
}

export const projects: Project[] = [
  {
    id: 'easy-touch-ev',
    title: 'Easy Touch EV Charger',
    description:
      'User platform for an EV charging network: drivers find chargers on Google Maps, run live charging sessions over WebSocket/OCPP, and pay in-app. Unit-tested Cubit state transitions and OCPP handlers. Network currently in launch phase (first 10 chargers).',
    tech: ['Flutter', 'Cubit', 'Dio', 'WebSocket', 'OCPP', 'Maps', 'Mockito', 'bloc_test'],
    links: {
      appStore: 'https://apps.apple.com/us/app/easy-touch/id6754902919',
      playStore: 'https://play.google.com/store/apps/details?id=com.easytouch.app',
    },
    image: 'images/ev-charger-BG.png',
  },
  {
    id: 'whiteboard',
    title: 'WhiteBoard',
    description:
      "Branded whiteboard app for the company's interactive screen product. 60 FPS freehand drawing with persistent vector storage via Hive, plus an AI feature that recognizes a sketch and returns the closest clean or geometric shape (Flutter side, integrated with an AI backend).",
    tech: ['Flutter', 'Riverpod', 'Hive', 'CustomPainter', 'AI backend integration'],
    image:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/22512d00c_image.png',
  },
  {
    id: 'innvii-rent',
    title: 'Innvii Rent',
    description:
      'Car rental app: browse available cars, view pricing, and book, with efficient local caching for fast, offline-friendly listings.',
    tech: ['Flutter', 'GetX', 'GetStorage', 'HTTP', 'MVC'],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.Innvii.rent',
    },
    image:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/e867e30b1_image.png',
  },
  {
    id: 'ai-fitness-nutrition',
    title: 'AI Fitness & Nutrition',
    description:
      'Flutter app matching workout data to nutrition recommendations, integrated with a Node.js/MongoDB backend over real-time sync. Client project (Esmos Tech).',
    tech: ['Flutter', 'Cubit', 'Dio', 'MVVM (Node.js/MongoDB backend)'],
    image:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/08c7a77a3_Screenshot2026-01-16at123029PM.png',
  },
  {
    id: 'smart-greenhouse',
    title: 'Smart Greenhouse',
    description:
      'Mobile app for full remote control of a greenhouse: adjust and automate growing conditions in real time over Socket.IO with low-latency control. University graduation project (2023).',
    tech: ['Flutter', 'Bloc', 'Socket.IO', 'MVVM'],
    image:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/4aabe7a06_WhiteGreenMobileMockupPhotoCollageBeautyPinterestPin1.png',
  },
  {
    id: 'quarak-qr',
    title: 'Quarak QR Code',
    description: 'Full redesign and rebuild — from an outdated MVP to a polished production app.',
    tech: ['Flutter', 'Figma', 'Claude Code'],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.qrapp.qrapp',
    },
    image: 'images/quarak.jpg',
  },
]
