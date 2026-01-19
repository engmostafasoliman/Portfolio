import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

export default function ProjectModal({ open, onOpenChange, project }) {
  if (!project) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {project.images?.length >= 3 ? (
            <div className="w-full h-56 overflow-hidden rounded-md">
              <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover col-span-1 row-span-2 rounded-l-md" />
                <img src={project.images[1]} alt={project.title} className="w-full h-full object-cover rounded-tr-md" />
                <img src={project.images[2]} alt={project.title} className="w-full h-full object-cover rounded-br-md" />
              </div>
            </div>
          ) : (
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-md" />
          )}
          <p className="text-slate-700">{project.summary}</p>
          {project.description && (
            <div>
              <h4 className="font-semibold mb-1 mt-2">Description</h4>
              <p className="text-slate-700">{project.description}</p>
            </div>
          )}
          {project.problem && (
            <div>
              <h4 className="font-semibold mb-1 mt-2">Problem</h4>
              <p className="text-slate-700">{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div>
              <h4 className="font-semibold mb-1 mt-2">Solution</h4>
              <p className="text-slate-700">{project.solution}</p>
            </div>
          )}
          {Array.isArray(project.challenges) && project.challenges.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2 mt-2">Technical Challenges</h4>
              <ul className="list-disc ml-5 space-y-1 text-slate-700">
                {project.challenges.map((c, idx) => (<li key={idx}>{c}</li>))}
              </ul>
            </div>
          )}

          {project.description && (
            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <p className="text-slate-700">{project.description}</p>
            </div>
          )}

          {project.problem && (
            <div>
              <h4 className="font-semibold mb-2 mt-2">Problem</h4>
              <p className="text-slate-700">{project.problem}</p>
            </div>
          )}

          {project.solution && (
            <div>
              <h4 className="font-semibold mb-2 mt-2">Solution</h4>
              <p className="text-slate-700">{project.solution}</p>
            </div>
          )}

          {project.challenges?.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2 mt-2">Technical Challenges</h4>
              <ul className="list-disc ml-5 space-y-1 text-slate-700">
                {project.challenges.map((c, idx) => (<li key={idx}>{c}</li>))}
              </ul>
            </div>
          )}








          {project.achievements?.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Key Achievements</h4>
              <ul className="list-disc ml-5 space-y-1 text-slate-700">
                {project.achievements.map((a, idx) => (<li key={idx}>{a}</li>))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="font-semibold mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((t) => (
                <Badge key={t} variant="outline" className="capitalize">{t}</Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.links?.appStore ? (
              <a href={project.links.appStore} target="_blank" rel="noreferrer">
                <Button variant="outline" className="gap-2"><ExternalLink className="w-4 h-4" /> App Store</Button>
              </a>
            ) : null}
            {project.links?.playStore ? (
              <a href={project.links.playStore} target="_blank" rel="noreferrer">
                <Button variant="outline" className="gap-2"><ExternalLink className="w-4 h-4" /> Play Store</Button>
              </a>
            ) : null}
            {project.links?.pdf ? (
              <a href={project.links.pdf} target="_blank" rel="noreferrer">
                <Button variant="outline" className="gap-2"><FileText className="w-4 h-4" /> View PDF</Button>
              </a>
            ) : null}
            {project.links?.github ? (
              <a href={project.links.github} target="_blank" rel="noreferrer">
                <Button variant="outline" className="gap-2"><ExternalLink className="w-4 h-4" /> GitHub</Button>
              </a>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}