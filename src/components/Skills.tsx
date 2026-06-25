// ── Skills ───────────────────────────────────────────────────────────────────
// One card per skill category (data/skills.ts), each listing its items as Badges.
import { Section } from './Section'
import { Reveal } from './Reveal'
import { Badge } from './ui/Badge'
import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools & technologies">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={Math.min(i * 0.05, 0.25)} className="h-full">
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/50">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
