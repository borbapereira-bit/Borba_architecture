import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Borba Architecture",
  description:
    "Selected projects by Borba Architecture: custom homes, multi-family housing, and urban design across Los Angeles and Brazil.",
};

export default function ProjectsPage() {
  return (
    <div className="px-6 md:px-10 pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display font-light text-3xl md:text-4xl text-ink mb-16">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
