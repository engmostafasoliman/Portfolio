import { ArrowUpRight, Globe } from 'lucide-react'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { webWork } from '@/data/webWork'
import { resolveImage } from '@/lib/utils'

export default function WebWork() {
  return (
    <Section
      id="web"
      eyebrow="Web Work"
      title="Production websites"
      subtitle="Four production sites for Al Manarah Holding Group, built with Next.js 15 — SEO and Google Search Console setup, deployed via cPanel."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {webWork.map((site, i) => {
          const image = resolveImage(site.image)
          return (
            <Reveal key={site.id} delay={Math.min(i * 0.05, 0.2)} className="h-full">
              <Card className="flex h-full flex-col overflow-hidden">
                {image ? (
                  <div className="aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={image}
                      alt={`${site.name} website`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-indigo-500/10 to-violet-500/10">
                    <Globe className="h-10 w-10 text-indigo-400/60" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-lg font-semibold text-slate-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                  >
                    {site.name}
                    <ArrowUpRight className="h-4 w-4 opacity-60" />
                  </a>
                  <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
                    {site.description ?? ' '}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {site.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
