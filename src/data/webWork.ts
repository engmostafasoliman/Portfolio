export type WebProject = {
  id: string
  /** Display domain, e.g. 'futuregulf.ae'. */
  name: string
  url: string
  description?: string
  tags: string[]
  /** Local path relative to public/ (e.g. 'images/x.jpg') or a full URL. */
  image?: string
}

/**
 * Production websites built and deployed for Al Manarah Holding Group with
 * Next.js 15 — SEO + Google Search Console setup, deployed via cPanel.
 */
export const webWork: WebProject[] = [
  {
    id: 'futuregulf',
    name: 'futuregulf.ae',
    url: 'https://futuregulf.ae/en/',
    description: 'Bilingual AR/EN with full RTL support.',
    tags: ['Next.js 15', 'AR/EN', 'RTL', 'SEO'],
    image: 'images/fgc.jpg',
  },
  {
    id: 'dyfmotors',
    name: 'dyfmotors.ae',
    url: 'https://dyfmotors.ae/',
    tags: ['Next.js 15', 'SEO'],
  },
  {
    id: 'commercialoxford',
    name: 'commercialoxforduae.ae',
    url: 'https://commercialoxforduae.ae/',
    tags: ['Next.js 15', 'SEO'],
  },
  {
    id: 'westernbeach',
    name: 'westernbeach.ae',
    url: 'https://westernbeach.ae/en/',
    tags: ['Next.js 15', 'SEO'],
    image: 'images/westernbeach.jpg',
  },
]
