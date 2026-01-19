import React from "react";
import { motion } from "framer-motion";

export default function ExperienceTimeline({ items }) {
  return (
    <section id="experience" className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Experience</h2>
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200" />
          <div className="space-y-8">
            {items.map((job, idx) => (
              <div key={idx} className="relative pl-10">
                <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-indigo-600" />
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                >
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-semibold text-slate-900">{job.role}</h3>
                    <span className="text-slate-600">@ {job.company}</span>
                    <span className="text-sm text-slate-500">• {job.period}</span>
                  </div>
                  {job.location && <div className="text-sm text-slate-500 mt-0.5">{job.location}</div>}
                  <ul className="mt-2 list-disc ml-6 text-slate-700 space-y-1">
                    {job.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}