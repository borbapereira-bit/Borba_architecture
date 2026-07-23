"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const practiceLinks = [
  { href: "/practice/architect", label: "The Architect" },
  { href: "/practice/practice", label: "The Practice" },
  { href: "/practice/services", label: "Services" },
  { href: "/practice/process", label: "Process" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll while menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <Link
          href="/"
          className="font-display text-2xl tracking-wide text-ink"
          style={{ color: open ? "#C17461" : undefined }}
        >
          Borba Architecture
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-px w-6 transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45 bg-ink-on-dark" : "bg-ink"
            }`}
          />
          <span
            className={`block h-px w-6 transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45 bg-ink-on-dark" : "bg-ink"
            }`}
          />
        </button>
      </div>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 bg-surface-dark transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="h-full w-full flex flex-col md:flex-row items-start md:items-center justify-center gap-10 md:gap-24 px-8"
          aria-label="Main"
        >
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">
              Projects
            </p>
            <Link
              href="/projects"
              className="font-display text-4xl md:text-5xl text-ink-on-dark hover:text-accent transition-colors"
            >
              All Projects
            </Link>
          </div>

          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">
              Practice
            </p>
            <ul className="space-y-2">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display text-4xl md:text-5xl text-ink-on-dark hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">
              Connect
            </p>
            <Link
              href="/contact"
              className="font-display text-4xl md:text-5xl text-ink-on-dark hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
