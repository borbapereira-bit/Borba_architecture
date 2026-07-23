import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process — Borba Architecture",
  description:
    "How Borba Architecture works: Listen, Understand, Design, Coordinate, Build.",
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

export default function ProcessPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display font-light text-3xl md:text-4xl text-ink mb-16">
          Process
        </h1>
        <ol className="space-y-14">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-ink/15 pt-8">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-ink">
                  {step.title}
                </h2>
              </div>
              <p className="font-sans text-base md:text-lg leading-relaxed text-ink/85 mt-4">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
