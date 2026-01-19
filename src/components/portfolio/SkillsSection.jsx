import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function SkillsSection({ skills, softSkills, education, certifications }) {
  return (
    <section id="skills" className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Skills & More</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="font-semibold text-slate-800 mb-2">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary" className="capitalize">{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Soft Skills</h3>
              <ul className="list-disc ml-6 text-slate-700 space-y-1">
                {softSkills.map((s) => (<li key={s}>{s}</li>))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Education</h3>
              <p className="text-slate-700">{education.degree}</p>
              <p className="text-slate-600 text-sm">{education.school} • {education.period}</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Certifications</h3>
              <ul className="list-disc ml-6 text-slate-700 space-y-1">
                {certifications.map((c) => (
                  typeof c === "string" ? (
                    <li key={c}>{c}</li>
                  ) : (
                    <li key={c.title}>
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                        {c.title}
                      </a>
                    </li>
                  )
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}