import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Practice — Borba Architecture",
  description:
    "Borba Architecture was founded on a belief: architecture earns its place.",
};

export default function PracticePage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-10">
          The Practice
        </h1>
        <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-ink/85">
          <p className="font-display text-2xl md:text-3xl text-ink !leading-snug">
            Borba Architecture was founded on a belief:
            <br />
            Architecture earns its place.
          </p>
          <p>
            Every project begins by understanding what already exists before
            deciding what should be added. The site, climate, landscape, and
            the people who will inhabit a place become the foundation of the
            design.
          </p>
          <p>
            Rather than pursuing a recognizable style, the practice seeks to
            uncover the character already present in each project.
            Architecture becomes a response rather than an imposition.
          </p>
          <p>
            Practicing on both the design and development sides of the
            industry — as an architect and as a project manager overseeing
            feasibility, permitting, consultant coordination, and
            construction — has shaped this approach. Understanding how
            buildings are realized allows good design to remain ambitious
            while grounded in the realities of building.
          </p>
          <p>
            Guided by restraint, proportion, natural light, and honest
            materials, Borba Architecture creates buildings that feel
            rooted in their surroundings, generous to their occupants, and
            age well.
          </p>
        </div>
      </div>
    </div>
  );
}
