// ── Hero ─────────────────────────────────────────────────────────────────────
// Above-the-fold intro: availability badge, name, role, tagline, the three CTAs
// (View Projects / Download CV / Contact), location, and the portrait. The
// animated backdrop now lives in <CanvasBackground>, not here.
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import { asset } from '@/lib/utils'
import { Button } from './ui/Button'

export default function Hero() {
  const reduce = useReducedMotion()

  // Parent cascades its children in one after another; each child fades/rises.
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.05 } },
  }
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-[1.3fr_1fr] md:py-32">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
          >
            <span className="relative flex h-2 w-2">
              {!reduce && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities · {profile.relocation}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="text-gradient mt-3 text-xl font-semibold sm:text-2xl">
            {profile.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={asset(profile.cv)} variant="secondary" download>
              <Download className="h-4 w-4" /> Download CV
            </Button>
            <Button href="#contact" variant="secondary">
              <Mail className="h-4 w-4" /> Contact
            </Button>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
          >
            <MapPin className="h-4 w-4 text-blue-500" />
            {profile.location}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          {/* Gentle continuous float (skipped under reduced motion). */}
          <motion.div
            className="relative"
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-sky-500/30 blur-xl"
            />
            <img
              src={asset(profile.photo)}
              alt={`Portrait of ${profile.name}`}
              width={320}
              height={384}
              loading="eager"
              className="relative h-80 w-72 rounded-[2rem] object-cover object-top shadow-xl sm:h-96 sm:w-80"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
