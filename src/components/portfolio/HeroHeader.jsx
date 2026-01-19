import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroHeader({ profile }) {
  return (
    <section className="pt-12 pb-8">
      <motion.div
        className="max-w-5xl mx-auto px-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={profile.photo || "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=240&q=60"}
            alt={profile.name}
            className="w-28 h-28 rounded-2xl object-cover shadow-md transition-transform duration-500 hover:rotate-1 hover:scale-105"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{profile.name}</h1>
            <p className="mt-2 text-lg text-slate-600">{profile.role}</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> {profile.location}</span>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1 hover:text-slate-900"><Mail className="w-4 h-4" /> {profile.email}</a>
              <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-1 hover:text-slate-900"><Phone className="w-4 h-4" /> {profile.phone}</a>
            </div>
            <div className="mt-4 flex gap-3">
              {profile.links.github ? (
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" className="gap-2"><Github className="w-4 h-4" /> GitHub</Button>
                </a>
              ) : null}
              {profile.links.linkedin ? (
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" className="gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</Button>
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <p className="mt-6 text-slate-700 leading-relaxed">
          Results-driven Flutter Developer with 3+ years of experience architecting and deploying high-performance mobile applications for iOS and Android. Expert in advanced state management (Bloc, Riverpod, GetX) and Clean Architecture, with a proven track record of optimizing app performance, including reducing load times by up to 30% and enhancing user engagement. A detail-oriented team player with excellent communication skills and a passion for continuous learning in a fast-paced environment.
        </p>
      </motion.div>
    </section>
  );
}