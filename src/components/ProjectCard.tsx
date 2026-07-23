import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-dark/10">
        <Image
          src={project.heroImage}
          alt={`${project.name}, ${project.location}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl text-ink">{project.name}</h3>
        <span className="font-sans text-xs uppercase tracking-wide text-ink/60 whitespace-nowrap">
          {project.status}
        </span>
      </div>
      <p className="font-sans text-sm text-ink/70 mt-1">{project.location}</p>
    </Link>
  );
}
