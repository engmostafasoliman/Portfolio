// ── Shared helpers ───────────────────────────────────────────────────────────
// cn()           – merge Tailwind class names, resolving conflicts.
// asset()        – prefix a public/ path with the GitHub Pages base (/Portfolio/).
// resolveImage() – pass full URLs straight through; resolve local paths via asset().
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge conditional class names, resolving Tailwind conflicts. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Prefix a public asset path with Vite's base URL so it resolves correctly
 * under the GitHub Pages base path (e.g. `/Portfolio/`). Pass paths relative
 * to `public/`, e.g. `asset('images/logo.png')` or `asset('cv.pdf')`.
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

/**
 * Resolve an image reference: pass full URLs through untouched, and treat
 * everything else as a public/ path resolved via {@link asset}.
 */
export function resolveImage(src?: string): string | undefined {
  if (!src) return undefined
  return src.startsWith('http') ? src : asset(src)
}
