import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Practice — Borba Architecture",
  description:
    "Borba Architecture was founded on a belief: architecture earns its place.",
};

const steps = [
  {
    title: "Listen",
    body: "Every project begins with understanding. Goals, constraints, aspirations, budget, and schedule are discussed before design begins.",
  },
  {
    title: "Understand",
    body: "The site is carefully studied — its climate, orientation, topography, context, and opportunities. Regulations, feasibility, and project requirements establish a clear foundation for design.",
  },
  {
    title: "Design",
    body: "Concepts are developed through an iterative process that balances architecture, function, and constructability. Every decision is measured against the project's goals rather than a predetermined style.",
  },
  {
    title: "Coordinate",
    body: "Successful projects rely on collaboration. Consultants, agencies, and contractors are coordinated to maintain design intent while preparing clear, buildable documentation.",
  },
  {
    title: "Build",
    body: "Architecture is completed through construction, not drawings alone. Remaining engaged during construction helps ensure that the original vision is carried through to the finished building.",
  },
];

export default function PracticePage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display font-light text-3xl md:text-4xl text-ink mb-10">
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
            Guided by restraint, proportion, natural light, and honest
            materials, Borba Architecture creates buildings that feel
            rooted in their surroundings, generous to their occupants, and
            age well.
          </p>
          <p>
            With more than 20 years of experience designing, permitting, and
            guiding projects through construction, this practice understands
            how to take an idea from its earliest stages to a completed
            building. What has shaped that approach most is working on both
            sides of the industry: alongside architectural work, years spent
            managing projects for developers — overseeing feasibility
            studies, permitting, consultant coordination, budgets, and
            construction — changed the way architecture is approached here,
            not only as design, but as a process that must be carefully
            planned, coordinated, and built. Good architecture is measured
            not only by its design, but by how thoughtfully it is built and
            how wisely it uses a client's investment.
          </p>
          <p>
            Every project at Borba Architecture begins by listening — to
            the client, to the site, and to the opportunities each project
            presents. Design develops through collaboration, with clear
            communication and regular feedback at every stage. Clients are
            involved throughout the process, ensuring that important
            decisions are made together rather than in isolation.
          </p>
          <p>
            The work also extends beyond the design phase. Borba Architecture
            assists clients through permitting, contractor selection,
            construction administration, and site observation to help ensure
            that the project is built in accordance with the design intent.
            Careful review of construction progress and payment applications
            helps protect the client's investment while maintaining quality
            throughout construction.
          </p>
        </div>

        <h2 className="font-display font-light text-2xl md:text-3xl text-ink mt-16 mb-10">
          Process
        </h2>
        <ol className="space-y-10">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-ink/15 pt-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-lg text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-ink">
                  {step.title}
                </h3>
              </div>
              <p className="font-sans text-base leading-relaxed text-ink/85 mt-3">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
