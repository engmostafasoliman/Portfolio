// ── Footer ───────────────────────────────────────────────────────────────────
// Social/email icon links (LinkedIn, GitHub, email) + copyright line.
import { Github, Linkedin, Mail, type LucideIcon } from 'lucide-react'
import { profile } from '@/data/profile'

type Social = { label: string; href: string; icon: LucideIcon; external: boolean }

const socials: Social[] = [
  { label: 'LinkedIn', href: profile.links.linkedin, icon: Linkedin, external: true },
  { label: 'GitHub', href: profile.links.github, icon: Github, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail, external: false },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:px-6">
        <div className="flex gap-3">
          {socials.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-500/60 dark:hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {profile.name}. Built with React, Vite &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
