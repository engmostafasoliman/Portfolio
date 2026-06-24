// ── Button ───────────────────────────────────────────────────────────────────
// An anchor styled as a button — every CTA on this site is a link (in-page
// anchor, mailto, or download). variant: 'primary' (filled) | 'secondary' (outline).
import { type AnchorHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200'

const variants: Record<Variant, string> = {
  primary:
    'bg-indigo-600 text-white shadow-sm hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30',
  secondary:
    'border border-slate-300 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:border-indigo-500/60 dark:hover:text-white',
}

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  children: ReactNode
}

/** Anchor styled as a button — all CTAs in this site are links (anchors, mailto, downloads). */
export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  )
}
