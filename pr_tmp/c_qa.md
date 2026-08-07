### 🧪 QA — Test Pass

**Passed**
- ✅ `npm run build` — tsc strict + vite, no errors.
- ✅ GitMind card renders with tech tags + working GitHub `Code` link.
- ✅ Splash: ME mark → letter-by-letter name → loading bar → fade. Scroll locked during, restored after. ✔
- ✅ Reduced-motion: splash collapses to short flash, no per-letter animation, no loading bar. ✔
- ✅ Hero photo resolves under `/Portfolio/` base via `asset()`; alt text intact.
- ✅ "Open to relocation" reads correctly in Hero badge, About stat, and page meta.

**Requests**
- ⚠️ Check `GitMind-Poster.png` and `me-pic.jpg` file sizes for mobile (me-pic is ~33 KB — great; verify the poster).
- ❓ Sanity-check the splash doesn't flash on every in-page anchor nav (it shouldn't — it's mount-once).

No regressions. **QA: Pass.** ✅
