// ── Navbar ───────────────────────────────────────────────────────────────────
// Sticky header. Becomes opaque/blurred after a little scroll, shows inline links
// on desktop and a hamburger (→ <MobileMenu>) on small screens, and hosts the
// theme toggle. Each link jumps to a section id defined in `links` below.
// "Hire me" is a highlighted call-to-action that jumps to #contact; on desktop
// it replaces the plain Contact link, on mobile it sits beside the hamburger
// (the menu still lists Contact). A slim contact bar above the header shows the
// WhatsApp number and location; it scrolls away while the header stays sticky.
import { useEffect, useState } from 'react'
import { MapPin, Menu, MessageCircle, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { profile } from '@/data/profile'
import { ThemeToggle } from './ThemeToggle'
import { MobileMenu, type NavLink } from './MobileMenu'

const links: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'web', label: 'Web' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const ctaClass =
  'inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-br from-blue-500 to-sky-600 font-semibold text-white shadow-sm shadow-blue-500/25 transition hover:from-blue-600 hover:to-sky-700 hover:shadow-md hover:shadow-blue-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'

// "+971554663783" → "+971 55 466 3783" for display; wa.me needs digits only.
const whatsappDigits = profile.whatsapp.replace(/\D/g, '')
const whatsappDisplay = profile.whatsapp.replace(/^\+971(\d{2})(\d{3})(\d{4})$/, '+971 $1 $2 $3')

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Track scroll position so the header can switch to its solid/blurred style.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <div className="relative z-40 border-b border-slate-200/70 bg-slate-50/80 text-xs text-slate-600 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 sm:px-6">
        <a
          href={`https://wa.me/${whatsappDigits}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat on WhatsApp: ${whatsappDisplay}`}
          className="inline-flex items-center gap-1.5 font-medium text-emerald-700 transition-colors hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
          <span>WhatsApp</span>
          <span className="font-mono tracking-tight" dir="ltr">{whatsappDisplay}</span>
        </a>
        <span className="hidden items-center gap-1.5 sm:inline-flex">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {profile.location} · {profile.relocation}
        </span>
      </div>
    </div>
    <header
      className={cn(
        'sticky top-0 z-40 transition-colors duration-300',
        scrolled
          ? 'border-b border-slate-200 bg-white/85 backdrop-blur-lg dark:border-slate-800/80 dark:bg-slate-950/85'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6"
        aria-label="Primary"
      >
        <a
          href="#main"
          className="flex items-center gap-2 font-bold text-slate-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-sky-600 font-mono text-sm font-bold text-white">
            ME
          </span>
          <span className="hidden min-[400px]:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.filter((link) => link.id !== 'contact').map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-lg px-3 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className={cn(ctaClass, 'ml-2 px-4 py-1.5 text-sm')}>
            <Send className="h-4 w-4" aria-hidden="true" />
            Hire me
          </a>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a href="#contact" className={cn(ctaClass, 'h-9 px-3 text-sm')}>
            Hire me
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? 'mobile-menu' : undefined}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-300"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={links} />
    </header>
    </>
  )
}
