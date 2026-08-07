### 👔 Team Lead — Review Summary

Good, cohesive PR — one new feature entry, one UX addition, and a couple of content fixes. Nicely isolated.

**What I like**
- ✅ GitMind entry stays honest and data-driven (`src/data/projects.ts`), open-source repo linked as a `Code` button — good signal for recruiters.
- ✅ Splash screen is tasteful and, importantly, `prefers-reduced-motion`-aware with scroll lock + `aria-label`. No accessibility regression.
- ✅ Dropping "EU" is applied everywhere including SEO meta/OG — no drift between the badge and the crawlable description.
- ✅ Strict build green.

**Conditions / watch-items**
- 🔸 Confirm `GitMind-Poster.png` is reasonably sized (same perf note as the web screenshots) — optimize in the follow-up if it's heavy.
- 🔸 Splash adds ~1.6s before content is interactive-looking; fine for a portfolio, but let's keep an eye on perceived LCP.

Approving pending QA. 🚀
