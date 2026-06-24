// ── MobileMenu ───────────────────────────────────────────────────────────────
// Accessible slide-in nav for small screens. While open it moves initial focus
// into the panel, closes on Escape / backdrop click / link tap, locks body
// scroll, and closes itself (releasing the lock) if the viewport grows to
// desktop width — where the menu is hidden by CSS and would otherwise stay open.
import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export type NavLink = { id: string; label: string }

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  links: NavLink[]
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    // Close (and release the scroll lock) when the viewport grows to desktop,
    // where the menu is hidden via CSS but would otherwise stay logically open.
    const desktop = window.matchMedia('(min-width: 768px)')
    const onDesktop = () => {
      if (desktop.matches) onClose()
    }
    document.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onDesktop)
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onDesktop)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: reduce ? 0 : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: reduce ? 0 : '100%' }}
            transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
            className="absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col gap-1 border-l border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="mb-4 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={onClose}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
