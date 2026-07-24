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
          <div className="relative w-full overflow-hidden bg-bg">
            <Image
              src="/images/PORTRAIT.png"
              alt="Jose Eduardo Borba Pereira, Architect"
              width={1122}
              height={1122}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="w-full h-auto"
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
    </div>
  );
}
