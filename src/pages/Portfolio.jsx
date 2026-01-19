import React from "react";
import HeroHeader from "../components/portfolio/HeroHeader";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import ExperienceTimeline from "../components/portfolio/ExperienceTimeline";
import SkillsSection from "../components/portfolio/SkillsSection";

import { profile, projects, experience, skills, softSkills, education, certifications } from "@/components/portfolio/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SplashScreen from "../components/portfolio/SplashScreen";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [showSplash, setShowSplash] = React.useState(true);
  React.useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1400);
    return () => clearTimeout(t);
  }, []);
  const handleNav = (id) => {
    const el = document.getElementById(id);
    const header = document.querySelector('header');
    const offset = header ? header.offsetHeight + 8 : 0;

    // Close sheet first so background can scroll
    setMenuOpen(false);

    if (!el) return;

    const targetY = el.getBoundingClientRect().top + window.scrollY - offset;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const doScroll = () => {
      window.scrollTo({ top: targetY, behavior: prefersReduced ? 'auto' : 'smooth' });
    };

    // Wait for the sheet close animation (~500ms) before scrolling
    setTimeout(doScroll, 520);
  };
  return (
    <div className="min-h-screen bg-white">
      {showSplash && (
        <SplashScreen
          name={profile.name}
          logoUrl="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/067bb2a44_images.png"
          onFinish={() => setShowSplash(false)}
        />
      )}
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold text-slate-900">Mostafa Soliman</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>

          </nav>
          <div className="md:hidden">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="p-6 space-y-4">
                  <button onClick={() => handleNav('projects')} className="block text-left text-lg font-medium text-slate-900 w-full">Projects</button>
                  <button onClick={() => handleNav('experience')} className="block text-left text-lg font-medium text-slate-900 w-full">Experience</button>
                  <button onClick={() => handleNav('skills')} className="block text-left text-lg font-medium text-slate-900 w-full">Skills</button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main id="top">
        <HeroHeader profile={profile} />
        <ProjectsSection projects={projects} />
        <ExperienceTimeline items={experience} />
        <SkillsSection skills={skills} softSkills={softSkills} education={education} certifications={certifications} />

      </main>

      <footer className="py-8 border-t">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Mostafa Soliman. Built with love for Flutter & clean code.
        </div>
      </footer>
    </div>
  );
}