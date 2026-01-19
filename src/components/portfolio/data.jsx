export const profile = {
  name: "Mostafa Soliman",
  role: "Flutter Developer",
  location: "Abu Dhabi, UAE",
  email: "devmostafasoliman@gmail.com",
  phone: "0554663783",
  photo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/b07be15c0_1764270459438.jpeg",
  links: {
    codewars: "",
    linkedin: "https://www.linkedin.com/in/mostafa-elsayed-690148195/",
    github: "https://github.com/engmostafasoliman/engmostafasoliman"
  }
};

export const projects = [
  {
    id: "easy-touch-ev",
    title: "Easy Touch EV Charger",
    summary: "Locate, manage, and pay for EV charging sessions with real-time map integration and availability.",
    description: "A production-grade mobile app that lets drivers discover chargers on a live map, start/stop sessions, and pay securely while tracking costs and history.",
    problem: "EV drivers struggle to find available, working chargers and to manage sessions and payments seamlessly across hardware vendors.",
    solution: "Unified experience with real-time availability via WebSocket/OCPP, map-based discovery, in-app session lifecycle, and integrated payments with receipts.",
    challenges: [
      "Real-time socket synchronization and session state recovery",
      "Secure payment handoff and receipt generation",
      "Robust OCPP message handling and error recovery",
      "Offline-friendly retries and optimistic UI"
    ],
    achievements: [
      "User-centric interface with real-time charger availability",
      "Streamlined end-to-end charging and payment flow"
    ],
    technologies: ["Flutter", "Cubit", "Dio", "MVVM", "Payment", "Maps", "WebSocket", "OCPP", "Real-time"],
    links: {
      appStore: "https://apps.apple.com/us/app/easy-touch/id6754902919",
      playStore: "https://play.google.com/store/apps/details?id=com.easytouch.app&pli=1",
      github: ""
    },
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/b07ec2485_image.png"
  },
  {
    id: "whiteboard-app",
    title: "WhiteBoard App",
    summary: "Freehand drawing with smooth gestures using CustomPainter and Riverpod in a clean MVVM setup.",
    achievements: [
      "Low-latency path rendering with optimized gesture detection",
      "Highly responsive and smooth drawing experience"
    ],
    technologies: ["Flutter", "Riverpod", "CustomPainter", "GestureDetector", "MVVM", "Android Intent"],
    links: {
      appStore: "",
      playStore: "",
      github: ""
    },
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/22512d00c_image.png"
  },
  {
    id: "innvii-rent",
    title: "Innvii Rent",
    summary: "Browse and book rental cars with clean architecture and efficient local caching.",
    achievements: [
      "Robust rental platform with reusable MVC components",
      "Responsive UX with local caching via GetStorage"
    ],
    technologies: ["Flutter", "GetX", "GetStorage", "HTTP", "MVC"],
    links: {
      appStore: "",
      playStore: "https://play.google.com/store/apps/details?id=com.Innvii.rent&hl=en",
      github: ""
    },
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/e867e30b1_image.png"
  },
  {
    id: "ai-fitness-nutrition",
    title: "AI-Integrated Fitness & Precision Nutrition Platform",
    summary: "Bridges workouts with intelligent nutrition via an AI engine that detects the optimal diet for each user.",
    description: "A production-ready health and wellness application that bridges the gap between physical training and intelligent nutrition through an AI-driven engine that detects and recommends the optimal diet for user-specific goals.",
    problem: "Users often struggle with the disconnect between their workouts and their nutrition, finding it difficult to determine exactly what to eat based on their unique biometrics (age, weight, height) and evolving fitness levels.",
    solution: "A unified ecosystem combining personalized workout tracks with an AI Nutrition Engine. The app uses biometric data to automatically detect caloric needs and macronutrient profiles, providing real-time diet recommendations alongside a multi-tier fitness journey from beginner to advanced.",
    challenges: [
      "AI Diet Logic: Developing a recommendation engine that dynamically adjusts meal plans based on fluctuating biometric data and workout intensity.",
      "Secure Biometric Storage: Implementing an encrypted user profiling system to safely manage sensitive data like weight, age, and health metrics.",
      "Authentication & Verification: Engineering a robust security flow featuring 4-digit email OTP (One-Time Password) verification and secure session management.",
      "Subscription State Management: Handling complex UI states for premium \"Gold Package\" access and promotional conversion funnels."
    ],
    achievements: [
      "Intelligent Onboarding: High-conversion wizard that maps user biometrics to specific fitness and nutrition outcomes.",
      "AI-Driven Customization: Successful implementation of an automated dietary detection system that suggests \"the best diet\" based on real-time user input.",
      "Modern Interactive UI: Designed a cohesive visual system using vibrant purple/blue gradients and high-quality iconography to enhance user engagement."
    ],
    technologies: ["Flutter", "Node.js", "MVVM", "Cubit", "Dio", "Hive", "Payment", "MongoDB"],
    links: {
      pdf: "https://drive.google.com/file/d/1GH3Hf8CCFoOUW2VhKk7-b-0oAOt4WXEr/view?usp=sharing",
      github: ""
    },
    images: ["https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/08c7a77a3_Screenshot2026-01-16at123029PM.png"],
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/08c7a77a3_Screenshot2026-01-16at123029PM.png"
  },
  {
    id: "smart-green-house",
    title: "Smart Green House",
    summary: "IoT app to monitor and control greenhouse conditions with real-time synchronization.",
    achievements: [
      "Real-time data sync using Socket.IO",
      "Instant updates and remote control with minimal latency"
    ],
    technologies: ["Flutter", "Bloc", "HTTP", "MVVM", "Socket.IO", "Real-time"],
    links: {
      appStore: "",
      playStore: "",
      github: "",
      pdf: "https://drive.google.com/file/d/1Z97AaYgC5hwAyPkYjgzIahvFfXNLPTEs/view?usp=sharing"
    },
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/4aabe7a06_WhiteGreenMobileMockupPhotoCollageBeautyPinterestPin1.png"
  },
  {
    id: "barber-app",
    title: "Barber App",
    summary: "Schedule appointments, view slots, and pay through a clean MVC architecture.",
    achievements: [
      "Seamless booking and payment flow",
      "Reliable UX with GetX state management"
    ],
    technologies: ["Flutter", "GetX", "GetStorage", "HTTP", "Payment", "MVC"],
    links: {
      appStore: "",
      playStore: "",
      github: "",
      pdf: "https://drive.google.com/file/d/1oCkCAsF7uV3RaIO5t96FcD2J0d850Ig8/view?usp=sharing"
    },
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/4a0203744_BlueModernMobileApplicationPresentation.jpg",
    images: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/4a0203744_BlueModernMobileApplicationPresentation.jpg"
    ]
  },
  {
    id: "asroo-ecommerce",
    title: "Asroo E-commerce",
    summary: "E-commerce app for browsing products, creating orders, and viewing totals with GetX.",
    achievements: [
      "Applied real-world app logic with clean MVC",
      "Caching and state management with GetStorage and GetX"
    ],
    technologies: ["Flutter", "GetX", "GetStorage", "HTTP", "MVC"],
    links: {
      appStore: "",
      playStore: "",
      github: "",
      pdf: "https://drive.google.com/file/d/1oCkCAsF7uV3RaIO5t96FcD2J0d850Ig8/view?usp=sharing"
    },
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/46ce8667b_BlueModernMobileApplicationPresentation-2.jpg"
  }
];

export const experience = [
  {
    role: "Mid-Level Mobile App Developer",
    company: "Al Manarah Holding Group",
    location: "Abu Dhabi, UAE",
    period: "Jan 2025 – Present",
    bullets: [
      "Low-Latency Graphics & Drawing Engine",
      "Custom Graphics Engine: Engineered a high-performance freehand drawing module using CustomPainter and Canvas API, achieving 60 FPS rendering through optimized path-simplification algorithms.",
      "Advanced Gesture Processing: Implemented ultra-responsive gesture detection and smoothing logic to eliminate input lag, managed via Riverpod for efficient state rebuilding.",
      "Persistent Canvas Data: Integrated Hive NoSQL to serialize and store complex vector paths locally, allowing users to save and resume large-scale drawings with near-instant load times.",
      "Embedded Systems & EV Infrastructure",
      "Embedded Android Deployment: Led the development of a Flutter-based interface for 20+ EV charging stations, ensuring 24/7 reliability on custom hardware.",
      "Secure Transactions: Integrated Payment Gateways and webhooks to handle real-time session billing and hardware-triggered payments.",
      "Spatial & Smart Systems: Built station-discovery features using Google Maps SDK and incorporated AI-powered predictive modeling to analyze station usage and suggest optimal charging times."
    ]
  },
  {
    role: "Mobile Application Developer",
    company: "Esmos Tech",
    location: "Cairo, Egypt",
    period: "Feb 2022 – Dec 2024",
    bullets: [
      "Scalable Architecture: Developed high-performance Flutter applications utilizing Clean Architecture (MVVM/MVC) to ensure modularity and testability.",
      "Data Management: Architected robust local-first experiences by integrating Hive for high-speed NoSQL caching alongside GetStorage and SQLite for complex relational data.",
      "Advanced UI/UX: Built interactive mapping interfaces with Google Maps (custom markers, polylines) and enhanced user engagement with AI-driven personalization.",
      "Monetization & Security: Managed end-to-end payment integration and secure API communication, supporting multiple currencies and localized payment methods."
    ]
  },
  {
    role: "Head PR Volunteer",
    company: "Google Developer Student Club",
    location: "",
    period: "Sep 2022 – Sep 2023",
    bullets: [
      "Lead PR and outreach activities for student tech initiatives"
    ]
  }
];

export const skills = [
  { category: "Languages & Frameworks", items: ["Dart", "Flutter"] },
  { category: "Architecture & State Mgmt", items: ["MVVM", "MVC", "GetX", "Riverpod", "Bloc", "Cubit", "Clean Architecture"] },
  { category: "APIs & Networking", items: ["REST", "Dio", "HTTP", "Retrofit"] },
  { category: "Storage", items: ["SQLite", "GetStorage", "Shared Preferences"] },
  { category: "Tools & Services", items: ["Git", "GitHub", "Firebase", "Android Intents", "CI/CD", "Fastlane"] },
  { category: "Integrations", items: ["Payment Integration", "Maps Integration"] },
  { category: "Other", items: ["Clean Code", "OOP", "Real-Time (Socket.IO)", "Localization", "Design Patterns"] }
];

export const softSkills = [
  "Problem-Solving & Decision Making",
  "Teamwork & Communication",
  "Time Management & Adaptability",
  "Fast Learner & Self-Motivated"
];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "Misr Higher Institute",
  period: "2019 – 2023"
};

export const certifications = [
  { title: "The Complete Flutter Development Guide (IT Share)", url: "https://drive.google.com/file/d/1gUb_IDYUgKqZ-e6DFYrJxMLyyaNytBhc/view?usp=sharing" },
  { title: "Flutter Course E-commerce Full App Getx & Firebase MVC (Waled Asroo)", url: "https://drive.google.com/file/d/1MFWV-wTgN6rhZGzP6e18JG2I3atZagFX/view?usp=sharing" },
  { title: "Flutter Advanced Course Bloc and MVVM Pattern [Arabic] (Tharwat Samy)", url: "https://drive.google.com/file/d/1mO8VWhCqptORhAaYDIwQ12yzuBtyOeKx/view?usp=sharing" },
  "Flutter Advanced Course Payment [Arabic] (Tharwat Samy)",
"Flutter Advanced Course CI/CD & Retrofit [Arabic] (Omar Ahmed)"
];