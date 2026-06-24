// ── ProjectCard ──────────────────────────────────────────────────────────────
// One project card: image, title, description, tech tags, and live-link buttons
// (App Store / Play Store / website / code) — or a "No public link" pill when the
// project has no links.
import { ArrowUpRight, FileText, Github, Globe, Smartphone, type LucideIcon } from 'lucide-react'
import { type Project } from '@/data/projects'
import { resolveImage } from '@/lib/utils'
import { Badge } from './ui/Badge'
import { Card } from './ui/Card'

type LinkEntry = { label: string; href: string; icon: LucideIcon }

// Collect only the links that exist into a list the card can render as buttons.
function getLinks(project: Project): LinkEntry[] {
  const out: LinkEntry[] = []
  const l = project.links
  if (l?.appStore) out.push({ label: 'App Store', href: l.appStore, icon: Smartphone })
  if (l?.playStore) out.push({ label: 'Play Store', href: l.playStore, icon: Smartphone })
  if (l?.website) out.push({ label: 'Visit site', href: l.website, icon: Globe })
  if (l?.github) out.push({ label: 'Code', href: l.github, icon: Github })
  if (l?.caseStudy) out.push({ label: 'Case study', href: l.caseStudy, icon: FileText })
  return out
}

export function ProjectCard({ project }: { project: Project }) {
  const image = resolveImage(project.image)
  const links = getLinks(project)

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      {image && (
        <div className="aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-5 border-t border-slate-200 pt-4 dark:border-slate-800">
          {links.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {links.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-indigo-100 hover:text-indigo-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-indigo-500/20 dark:hover:text-indigo-300"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              ))}
            </div>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
              No public link
            </span>
          )}
        </div>
      </div>
    </Card>
  )
}
