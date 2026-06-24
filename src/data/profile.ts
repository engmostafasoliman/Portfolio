export type Profile = {
  name: string
  role: string
  tagline: string
  location: string
  relocation: string
  email: string
  about: string
  photo: string
  /** Path relative to public/ — resolved through asset() at render time. */
  cv: string
  links: {
    linkedin: string
    github: string
  }
}

export const profile: Profile = {
  name: 'Mostafa Elsayed',
  role: 'Flutter Developer',
  tagline:
    'Flutter developer with 3+ years shipping production apps — five live on the App Store & Play Store, including the user-facing app for an EV charging network launching across Abu Dhabi.',
  location: 'Abu Dhabi, UAE',
  relocation: 'Open to EU relocation',
  email: 'devmostafasoliman@gmail.com',
  about:
    "I'm a Flutter developer based in Abu Dhabi with 3+ years building and shipping production apps. I work with Clean Architecture and Bloc/Cubit, handle real-time features over WebSocket and OCPP, and cover the critical paths with bloc_test and Mockito. Claude Code and Cursor are part of my daily workflow. Right now I'm learning Node.js to move toward a fullstack mobile profile.",
  photo:
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/b07be15c0_1764270459438.jpeg',
  cv: 'cv.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/mostafa-elsayed-690148195/',
    github: 'https://github.com/engmostafasoliman',
  },
}
