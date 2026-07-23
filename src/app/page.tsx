import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import ArrowLink from "@/components/ArrowLink";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <Image
          src="/images/COVER_IMAGE.jpg"
          alt="Borba Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-surface-dark/35" />
        <div className="relative h-full flex flex-col items-start justify-end px-6 md:px-10 pb-16 md:pb-24 max-w-5xl">
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-ink-on-dark">
            Architecture earns its place.
          </h1>
          <p className="font-sans text-base md:text-lg text-ink-on-dark/90 mt-6 max-w-xl">
            Custom homes, housing, and thoughtful development support.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-ink">
              Selected Projects
            </h2>
            <ArrowLink href="/projects" className="text-ink hidden md:inline-flex">
              View all
            </ArrowLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-12 md:hidden">
            <ArrowLink href="/projects" className="text-ink">
              View all projects
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Practice intro */}
      <section className="bg-surface-dark px-6 md:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-2xl md:text-3xl leading-relaxed text-ink-on-dark">
            Every project begins by understanding what already exists before
            deciding what should be added. The site, climate, landscape, and
            the people who will inhabit a place become the foundation of the
            design.
          </p>
          <div className="mt-10">
            <ArrowLink href="/practice/practice" className="text-accent">
              About the practice
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-12">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              {
                title: "Architecture",
                items: ["Custom Homes", "Additions", "Remodels", "ADUs", "Fire Rebuilds", "Small Commercial"],
              },
              {
                title: "Housing",
                items: ["Multifamily", "Townhomes", "Mixed-Use Residential"],
              },
              {
                title: "Development Support",
                items: ["Site Due Diligence", "Feasibility & Yield Studies", "Entitlement Strategy", "Owner Representation", "Development Consulting"],
              },
              {
                title: "Professional Collaboration",
                items: ["Construction Documentation", "Project Management", "Construction Administration", "Architectural Consulting"],
              },
            ].map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-xl text-ink mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2 font-sans text-sm text-ink/75">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <ArrowLink href="/practice/services" className="text-ink">
              All services
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl bg-surface-dark px-8 md:px-16 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="font-display text-3xl md:text-4xl text-ink-on-dark max-w-md">
            Have a project in mind?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-accent text-surface-dark font-sans text-sm tracking-wide px-8 py-4 w-fit hover:bg-accent/90 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
