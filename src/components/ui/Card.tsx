// ── Card ─────────────────────────────────────────────────────────────────────
// Rounded surface with a subtle hover lift; wraps project / web / skill content.
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1',
        'border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5',
        'dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-blue-500/40 dark:hover:shadow-blue-500/10',
        className,
      )}
    >
      {children}
    </div>
  )
}
