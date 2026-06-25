// ── Web work data (single source of truth) ──────────────────────────────────
// Production websites, shown in a separate (lighter) section from the apps.
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
    description:
      'Bilingual (AR/EN, full RTL) site for a carpets and flooring supplier — product ranges and custom-design enquiries.',
    tags: ['Next.js 15', 'AR/EN', 'RTL', 'SEO'],
    image: 'images/fgc.jpg',
  },
  {
    id: 'dyfmotors',
    name: 'dyfmotors.ae',
    url: 'https://dyfmotors.ae/',
    description:
      'Corporate site for a heavy-equipment and construction-logistics supplier — product categories and quote requests.',
    tags: ['Next.js 15', 'SEO'],
    image: 'images/dyf.png',
  },
  {
    id: 'commercialoxford',
    name: 'commercialoxforduae.ae',
    url: 'https://commercialoxforduae.ae/',
    description:
      'Site for a commercial kitchen and food-service equipment supplier — supply, installation, and commissioning across the UAE.',
    tags: ['Next.js 15', 'SEO'],
    image: 'images/oxford.png',
  },
  {
    id: 'westernbeach',
    name: 'westernbeach.ae',
    url: 'https://westernbeach.ae/en/',
    description:
      'Corporate site for a general contracting firm — services across construction, landscaping, infrastructure, and facility management.',
    tags: ['Next.js 15', 'SEO'],
    image: 'images/westernbeach.jpg',
  },
]
