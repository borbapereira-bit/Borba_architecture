import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Architect — Borba Architecture",
  description:
    "Jose Eduardo Borba Pereira, Architect, NCARB, M.Arch. Los Angeles and São Paulo.",
};

export default function ArchitectPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
        <div className="md:col-span-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/PORTRAIT.png"
              alt="Jose Eduardo Borba Pereira, Architect"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="font-sans text-sm text-ink/70 mt-4">
            Jose Eduardo Borba Pereira
            <br />
            Architect · NCARB · M.Arch.
          </p>
        </div>

        <div className="md:col-span-2 space-y-8">
          <h1 className="font-display font-light text-3xl md:text-4xl text-ink">
            The Architect
          </h1>

          <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-ink/85">
            <p>
              From the mid-century home where I grew up to the Brutalist
              buildings that first captured my imagination, Brazilian
              architecture taught me how rough materials, light, and
              proportion can come together to create unforgettable spaces.
            </p>
            <p>
              As I became an architect, I found the missing piece of what I
              believe architecture can be in West Coast mid-century
              architecture: a modernism grounded in organic principles,
              refined by Asian spatial sensibilities, and shaped by the
              climate and lifestyle of the Pacific coast.
            </p>
            <p>
              The dialogue between these two traditions defines my
              architectural identity. I strive to create spaces shaped by
              light, material, and proportion, with a quiet respect for
              place.
            </p>
            <p className="font-display text-2xl md:text-3xl text-ink pt-2">
              Architecture earns its place.
            </p>
            <p>
              That belief guides every project. Before drawing, I listen —
              to the client, to the site, and to the opportunities already
              present. Rather than imposing a style, I seek to uncover the
              character of a place and shape architecture that belongs to
              it.
            </p>
            <p>
              Today, that philosophy is reinforced by years of experience
              working on both the architectural and development sides of the
              profession. Designing, permitting, coordinating consultants,
              and guiding projects through construction has taught me that
              good architecture is measured not only by its design, but by
              how thoughtfully it is built and how wisely it uses a client's
              investment.
            </p>
          </div>
        </div>
      </div>

      {/* The Borba Architecture Difference */}
      <div className="mx-auto max-w-3xl px-6 md:px-10 mt-24 md:mt-32">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-8">
          The Borba Architecture Difference
        </h2>
        <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-ink/85">
          <p>
            With more than 20 years of experience designing, permitting, and
            guiding projects through construction, I understand how to take
            an idea from its earliest stages to a completed building.
          </p>
          <p>
            What has shaped my approach most, however, is working on both
            sides of the industry. In addition to practicing architecture, I
            have spent years managing projects for developers, overseeing
            feasibility studies, permitting, consultant coordination,
            budgets, and construction. That experience changed the way I
            think about architecture — not only as design, but as a process
            that must be carefully planned, coordinated, and built.
          </p>
          <p>
            Good architecture is measured not only by its design, but by how
            thoughtfully it is built and how wisely it uses a client's
            investment.
          </p>
          <p>
            At Borba Architecture, every project begins by listening — to
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
      </div>
    </div>
  );
}
