# Mostafa Elsayed — Portfolio

Personal portfolio of **Mostafa Elsayed**, Flutter Developer based in Abu Dhabi, UAE.

**Live:** https://engmostafasoliman.github.io/Portfolio/

## Stack

- **Vite + React 18 + TypeScript** (strict mode)
- **Tailwind CSS** (class-based light/dark mode)
- **Framer Motion** for subtle, reduced-motion-aware animations
- Deployed to **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`)

## Editing content

All content lives in typed data files — edit these, no component changes needed:

| File | Contents |
| --- | --- |
| `src/data/profile.ts` | Name, role, tagline, about, email, links, CV path |
| `src/data/projects.ts` | Flutter projects (`Project[]`) |
| `src/data/webWork.ts` | Websites (`WebProject[]`) |
| `src/data/skills.ts` | Skill groups (`SkillGroup[]`) |
| `src/data/experience.ts` | Work history (`Experience[]`) |

Put your CV at `public/cv.pdf` and project images in `public/images/`.

## Develop

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # strict TypeScript check
npm run lint       # ESLint
npm run build      # tsc --noEmit + vite build → dist/
npm run preview    # preview the production build
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow, which runs `npm run build`
and publishes `dist/` to GitHub Pages. The base path is `/Portfolio/` (set in
`vite.config.ts`) — update it if the repository is renamed.
