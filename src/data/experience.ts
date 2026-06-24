// ── Experience data (single source of truth) ────────────────────────────────
// Work history, newest first; rendered as a vertical timeline.
export type Experience = {
  role: string
  company: string
  location: string
  period: string
  description?: string
}

export const experience: Experience[] = [
  {
    role: 'Flutter Engineer (Mid-Level)',
    company: 'Al Manarah Holding Group',
    location: 'Abu Dhabi, UAE',
    period: 'Jan 2025 – Present',
    description:
      'Building the user-facing app for an EV charging network (Easy Touch), and shipping production websites for the group.',
  },
  {
    role: 'Mobile Application Developer',
    company: 'Esmos Tech',
    location: 'Cairo, Egypt',
    period: 'Feb 2022 – Dec 2024',
    description:
      'Software outsourcing — delivered client projects for businesses outside Egypt.',
  },
]
