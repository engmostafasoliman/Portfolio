// ── Badge ────────────────────────────────────────────────────────────────────
// Small indigo pill used for tech-stack tags and skill items.
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Small pill used for tech-stack tags. */
export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
        'border-indigo-200 bg-indigo-50 text-indigo-700',
        'dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300',
        className,
      )}
    >
      {children}
    </span>
  )
}
