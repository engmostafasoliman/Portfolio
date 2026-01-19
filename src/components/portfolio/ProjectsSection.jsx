import React from "react";
import FilterChips from "./FilterChips";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsSection({ projects }) {
  const [activeTag, setActiveTag] = React.useState("All");
  const [selected, setSelected] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const allTags = React.useMemo(() => {
    const tags = projects.flatMap(p => (p.technologies || []).map(t => t.trim()));
    return Array.from(new Set(tags)).sort();
  }, [projects]);

  const visible = React.useMemo(() => {
    const tag = (activeTag || "All").trim();
    if (tag === "All") return projects;
    const filtered = projects.filter(p => (p.technologies || []).some(t => t.trim() === tag));
    return filtered.length ? filtered : projects;
  }, [activeTag, projects]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  return (
    <motion.section id="projects" className="py-12 bg-slate-50" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-slate-900">Projects</motion.h2>
        </div>
        <motion.div variants={fadeUp}>
          <FilterChips tags={allTags} activeTag={activeTag} onChange={setActiveTag} />
        </motion.div>

        <motion.div
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeUp}
                layout
                exit={{ opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.2 } }}
              >
                <ProjectCard project={p} onOpen={(proj) => { setSelected(proj); setOpen(true); }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal open={open} onOpenChange={setOpen} project={selected} />
    </motion.section>
  );
}