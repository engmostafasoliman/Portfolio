// ── SplashScreen ─────────────────────────────────────────────────────────────
// A brief intro overlay shown on first paint: the "ME" mark and name animate in,
// then the whole layer fades out to reveal the page. Locks scroll while visible
// and collapses to a near-instant flash when reduced motion is requested.
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { profile } from '@/data/profile'

export function SplashScreen() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Hold the splash briefly, then dismiss (much shorter under reduced motion).
    const timeout = window.setTimeout(() => setVisible(false), reduce ? 400 : 1600)
    return () => window.clearTimeout(timeout)
  }, [reduce])

  // Lock page scroll while the overlay covers the content.
  useEffect(() => {
    if (!visible) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white dark:bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.span
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-sky-600 font-mono text-2xl font-bold text-white shadow-lg shadow-blue-500/30"
            initial={{ opacity: 0, scale: reduce ? 1 : 0.8, y: reduce ? 0 : 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            ME
          </motion.span>

          {/* Name reveals one letter at a time (whole-word fade under reduced motion). */}
          <motion.p
            className="text-gradient mt-5 text-lg font-semibold"
            aria-label={profile.name}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: reduce ? 0 : 0.05, delayChildren: 0.2 },
              },
            }}
          >
            {profile.name.split('').map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: reduce ? 0 : 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
                }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </motion.p>

          {/* Thin loading bar that sweeps once from left to right. */}
          {!reduce && (
            <div className="mt-6 h-0.5 w-40 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-sky-500"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
