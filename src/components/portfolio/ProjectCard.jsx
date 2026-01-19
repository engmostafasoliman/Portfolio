import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectCard({ project, onOpen }) {
  return (
    <Card className="group hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => onOpen(project)}>
      {project.images?.length >= 3 ? (
        <div className="w-full h-40 overflow-hidden rounded-t-md">
          <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
            <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover col-span-1 row-span-2 rounded-tl-md transition-transform duration-500 group-hover:scale-105" />
            <img src={project.images[1]} alt={project.title} className="w-full h-full object-cover rounded-tr-md transition-transform duration-500 group-hover:scale-105" />
            <img src={project.images[2]} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>
      ) : (
        <div className="w-full h-40 overflow-hidden rounded-t-md">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600 line-clamp-3">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((t) => (
            <Badge key={t} variant="secondary" className="capitalize">{t}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}