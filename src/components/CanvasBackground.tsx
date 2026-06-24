import { useEffect, useRef } from 'react'
import { useTheme } from '@/lib/theme'

type Particle = { x: number; y: number; vx: number; vy: number; r: number }

const LINK_DIST = 130

/**
 * Subtle animated particle-network background, fixed behind all content.
 * Theme-aware (reads colors from a ref so the toggle recolors live) and
 * reduced-motion-aware (renders a single static frame instead of animating).
 */
export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  // RGB triples read each frame so theme changes apply without restarting the loop.
  const colorRef = useRef({ dot: '79,70,229', line: '99,102,241' })
  const redrawRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    colorRef.current =
      theme === 'dark'
        ? { dot: '129,140,248', line: '129,140,248' } // indigo-400
        : { dot: '79,70,229', line: '99,102,241' } // indigo-600 / indigo-500
    // Repaint immediately so the toggle recolors even in reduced-motion mode
    // (where no animation loop is running to pick up the new colors).
    redrawRef.current?.()
  }, [theme])

  useEffect(() => {
    const canvasEl = canvasRef.current
    if (!canvasEl) return
    const context = canvasEl.getContext('2d')
    if (!context) return
    // Capture the narrowed (non-null) values so nested closures keep the type.
    const canvas = canvasEl
    const ctx = context

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let particles: Particle[] = []
    let raf = 0

    function init() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round(Math.min(Math.max((width * height) / 16000, 28), 70))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.2 + 0.6,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      const { dot, line } = colorRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.18
            ctx.strokeStyle = `rgba(${line},${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = `rgba(${dot},0.6)`
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function step() {
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x <= 0 || p.x >= width) p.vx *= -1
        if (p.y <= 0 || p.y >= height) p.vy *= -1
      }
      draw()
      raf = requestAnimationFrame(step)
    }

    function onResize() {
      init()
      draw()
    }

    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(raf)
      } else if (!reduce) {
        raf = requestAnimationFrame(step)
      }
    }

    redrawRef.current = draw
    init()
    if (reduce) {
      draw()
    } else {
      raf = requestAnimationFrame(step)
    }

    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(raf)
      redrawRef.current = null
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-60 dark:opacity-70"
    />
  )
}
