import { Github, Linkedin, Mail } from 'lucide-react'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { Button } from './ui/Button'
import { profile } from '@/data/profile'

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      subtitle="Open to full-time roles and interesting projects. The fastest way to reach me is email."
    >
      <Reveal>
        <div className="flex flex-col items-start gap-6 rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900/50 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Email me at</p>
            <a
              href={`mailto:${profile.email}`}
              className="text-lg font-semibold text-slate-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" /> Email
            </Button>
            <Button href={profile.links.linkedin} target="_blank" rel="noreferrer" variant="secondary">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </Button>
            <Button href={profile.links.github} target="_blank" rel="noreferrer" variant="secondary">
              <Github className="h-4 w-4" /> GitHub
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
