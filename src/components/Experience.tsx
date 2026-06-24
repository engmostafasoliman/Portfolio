// ── Experience ───────────────────────────────────────────────────────────────
// Vertical timeline (a left border + dotted markers) built from
// data/experience.ts.
import { Briefcase, MapPin } from 'lucide-react'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="relative space-y-8 border-l border-slate-200 pl-8 dark:border-slate-800">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.period}`} delay={Math.min(i * 0.08, 0.24)}>
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.75rem] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-white dark:border-slate-950"
              >
                <Briefcase className="h-3 w-3" />
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 font-medium text-slate-700 dark:text-slate-300">{job.company}</p>
              <p className="mt-1 inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="h-3.5 w-3.5" /> {job.location}
              </p>
              {job.description && (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {job.description}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
