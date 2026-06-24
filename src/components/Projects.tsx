import { Section } from './Section'
import { Reveal } from './Reveal'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Flutter apps I've shipped"
      subtitle="Production mobile apps built with Clean Architecture, real-time integrations, and tested business logic."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={Math.min(i * 0.05, 0.3)} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
