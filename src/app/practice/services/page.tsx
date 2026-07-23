import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Borba Architecture",
  description:
    "Architecture, housing, development support, and professional collaboration services offered by Borba Architecture.",
};

const serviceGroups = [
  {
    title: "Architecture",
    items: [
      "Custom Homes",
      "Additions",
      "Remodels",
      "ADUs",
      "Fire Rebuilds",
      "Small Commercial",
    ],
  },
  {
    title: "Housing",
    items: ["Multifamily", "Townhomes", "Mixed-Use Residential"],
  },
  {
    title: "Development Support",
    items: [
      "Site Due Diligence",
      "Feasibility & Yield Studies",
      "Entitlement Strategy",
      "Owner Representation",
      "Development Consulting",
    ],
  },
  {
    title: "Professional Collaboration",
    items: [
      "Construction Documentation",
      "Project Management",
      "Construction Administration",
      "Architectural Consulting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-16">
          Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {serviceGroups.map((group) => (
            <div key={group.title} className="border-t border-ink/15 pt-6">
              <h2 className="font-display text-2xl text-ink mb-5">
                {group.title}
              </h2>
              <ul className="space-y-3 font-sans text-base text-ink/80">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-surface-dark px-8 md:px-16 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="font-display text-2xl md:text-3xl text-ink-on-dark max-w-md">
            Discuss a project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-accent text-surface-dark font-sans text-sm tracking-wide px-8 py-4 w-fit hover:bg-accent/90 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
