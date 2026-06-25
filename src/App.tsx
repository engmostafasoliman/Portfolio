// ── Root component ───────────────────────────────────────────────────────────
// Composes the one-page portfolio. Section order (top → bottom):
//   Hero → About → Projects → WebWork → Experience → Skills → Contact → Footer
// Everything is wrapped in <ThemeProvider> so the light/dark toggle drives the
// whole tree, and <CanvasBackground> sits behind it all.
import { ThemeProvider } from '@/lib/theme'
import { CanvasBackground } from '@/components/CanvasBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import WebWork from '@/components/WebWork'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      {/* Animated particle backdrop, fixed behind everything */}
      <CanvasBackground />

      {/* Keyboard/screen-reader skip link — jumps straight to the content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />

      {/* Each child is a full section; ids here are the nav/anchor targets */}
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <WebWork />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
