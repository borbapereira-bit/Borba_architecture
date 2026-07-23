import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import ArrowLink from "@/components/ArrowLink";

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
      {/* Hero */}
      <section className="relative h-[70svh] md:h-[85svh] w-full overflow-hidden">
        <Image
          src={project.heroImage}
          alt={`${project.name}, ${project.location}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-surface-dark/25" />
        <div className="relative h-full flex flex-col items-start justify-end px-6 md:px-10 pb-14 md:pb-20">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-ink-on-dark/90 mb-3">
            {project.statusLine}
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-ink-on-dark">
            {project.name}
          </h1>
          <p className="font-sans text-base md:text-lg text-ink-on-dark/90 mt-2">
            {project.location}
          </p>
        </div>
      </section>

      {/* Summary + Facts */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          <div className="md:col-span-2 space-y-6">
            {project.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-base md:text-lg leading-relaxed text-ink/85"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-1">
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
