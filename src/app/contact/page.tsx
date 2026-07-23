import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Borba Architecture",
  description:
    "Get in touch with Borba Architecture. Los Angeles, California.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-6 md:px-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display font-light text-3xl md:text-4xl text-ink mb-10">
          Contact
        </h1>
        <p className="font-sans text-base md:text-lg leading-relaxed text-ink/85 mb-12">
          For project inquiries, collaboration, or general questions, reach
          out directly.
        </p>

        <dl className="space-y-8 font-sans">
          <div>
            <dt className="text-xs tracking-[0.15em] uppercase text-ink/50 mb-1">
              Email
            </dt>
            <dd>
              <a
                href="mailto:borbapereira@gmail.com"
                className="font-display text-2xl text-ink hover:text-accent transition-colors"
              >
                borbapereira@gmail.com
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-xs tracking-[0.15em] uppercase text-ink/50 mb-1">
              Phone
            </dt>
            <dd>
              <a
                href="tel:+13109574795"
                className="font-display text-2xl text-ink hover:text-accent transition-colors"
              >
                (310) 957-4795
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-xs tracking-[0.15em] uppercase text-ink/50 mb-1">
              Location
            </dt>
            <dd className="font-display text-2xl text-ink">
              Los Angeles, California
            </dd>
          </div>

          <div>
            <dt className="text-xs tracking-[0.15em] uppercase text-ink/50 mb-1">
              LinkedIn
            </dt>
            <dd>
              <a
                href="https://www.linkedin.com/in/borbapereira/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl text-ink hover:text-accent transition-colors"
              >
                linkedin.com/in/borbapereira
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
