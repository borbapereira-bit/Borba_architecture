import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-ink-on-dark">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <p className="font-display text-2xl text-ink-on-dark">
            Borba Architecture
          </p>
          <p className="font-sans text-sm mt-1 text-ink-on-dark/80">
            Los Angeles, California
          </p>
        </div>

        <nav
          className="flex flex-col md:flex-row gap-2 md:gap-8 font-sans text-sm"
          aria-label="Footer"
        >
          <a
            href="mailto:borbapereira@gmail.com"
            className="hover:text-accent transition-colors"
          >
            borbapereira@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/borbapereira/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/borbaarchitecture"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Instagram
          </a>
        </nav>
      </div>
      <div className="border-t border-ink-on-dark/20">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-5">
          <p className="font-sans text-xs text-ink-on-dark/70">
            © {year} Borba Architecture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
