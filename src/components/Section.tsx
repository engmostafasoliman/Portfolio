// ── Section ──────────────────────────────────────────────────────────────────
// Shared section shell: consistent vertical padding and max width, plus an
// animated heading block (eyebrow + title + optional subtitle). Children render
// directly below the heading. Used by About/Projects/WebWork/Skills/Contact.
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 sm:py-24', className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-12 max-w-2xl">
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-3 text-slate-600 dark:text-slate-400">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
