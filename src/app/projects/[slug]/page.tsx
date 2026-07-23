import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import ArrowLink from "@/components/ArrowLink";
import ProjectCarousel from "@/components/ProjectCarousel";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Borba Architecture`,
    description: project.paragraphs[0],
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article>
      {/* Carousel with name overlaid at bottom */}
      <section className="relative pt-[72px] md:pt-[80px]">
        <ProjectCarousel
          images={project.images}
          alt={`${project.name}, ${project.location}`}
        />
        <div className="absolute inset-x-0 bottom-0 px-6 md:px-10 pb-8 md:pb-12 pt-16 bg-gradient-to-t from-surface-dark/70 to-transparent pointer-events-none">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-ink-on-dark/90 mb-2">
            {project.statusLine}
          </p>
          <h1 className="font-display font-light text-3xl md:text-4xl text-ink-on-dark">
            {project.name}
          </h1>
          <p className="font-sans text-base md:text-lg text-ink-on-dark/90 mt-1">
            {project.location}
          </p>
        </div>
      </section>

      {/* Facts panel — separate space */}
      <section className="px-6 md:px-10 pt-12 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <dl className="grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-6">
            {project.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-sans text-xs tracking-[0.15em] uppercase text-ink/50">
                  {fact.label}
                </dt>
                <dd className="font-display text-lg text-ink mt-1">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Thin separator */}
      <div className="px-6 md:px-10 mt-10 md:mt-12">
        <div className="mx-auto max-w-6xl border-t border-ink/15" />
      </div>

      {/* Body text */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-6">
          {project.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="font-sans text-base md:text-lg leading-relaxed text-ink/85"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Back to projects */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-6xl">
          <ArrowLink href="/projects" className="text-ink">
            Back to all projects
          </ArrowLink>
        </div>
      </section>
    </article>
  );
}
