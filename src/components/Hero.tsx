import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import { asset } from '@/lib/utils'
import { Button } from './ui/Button'

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-[1.3fr_1fr] md:py-32">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Open to opportunities · {profile.relocation}
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="text-gradient mt-3 text-xl font-semibold sm:text-2xl">{profile.role}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={asset(profile.cv)} variant="secondary" download>
              <Download className="h-4 w-4" /> Download CV
            </Button>
            <Button href="#contact" variant="secondary">
              <Mail className="h-4 w-4" /> Contact
            </Button>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <MapPin className="h-4 w-4 text-indigo-500" />
            {profile.location}
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-xl"
            />
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={320}
              height={384}
              loading="eager"
              className="relative h-80 w-72 rounded-[2rem] object-cover object-top shadow-xl sm:h-96 sm:w-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
