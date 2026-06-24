import { Section } from './Section'
import { Reveal } from './Reveal'
import { profile } from '@/data/profile'

const facts = [
  { label: 'Role', value: 'Flutter Developer (3+ yrs)' },
  { label: 'Based in', value: 'Abu Dhabi, UAE' },
  { label: 'Open to', value: 'EU relocation' },
  { label: 'Learning', value: 'Node.js (fullstack mobile)' },
]

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.about}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800">
            {facts.map((f) => (
              <div key={f.label} className="bg-white p-4 dark:bg-slate-900">
                <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {f.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
