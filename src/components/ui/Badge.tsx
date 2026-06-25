// ── Badge ────────────────────────────────────────────────────────────────────
// Small blue pill used for tech-stack tags and skill items.
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Small pill used for tech-stack tags. */
export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
        'border-blue-200 bg-blue-50 text-blue-700',
        'dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300',
        className,
      )}
    >
      {children}
    </span>
  )
}
