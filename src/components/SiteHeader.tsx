"use client";

import Link from "next/link";
import Image from "next/image";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-dark">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-display font-light text-2xl md:text-3xl tracking-wide text-ink-on-dark hover:text-accent transition-colors"
        >
          <Image
            src="/images/borba-icon.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 md:h-10 md:w-10"
            priority
          />
          <span>Borba Architecture</span>
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-px w-6 bg-ink-on-dark transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink-on-dark transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
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
            <Link
              href="/projects"
              className="font-sans text-xl md:text-2xl tracking-wide text-accent hover:text-ink-on-dark transition-colors"
            >
              Projects
            </Link>
            <ul className="space-y-1.5 mt-3">
              <li>
                <Link
                  href="/projects"
                  className="font-display font-light text-lg md:text-xl text-ink-on-dark/90 hover:text-accent transition-colors"
                >
                  Single Family
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="font-display font-light text-lg md:text-xl text-ink-on-dark/90 hover:text-accent transition-colors"
                >
                  Multi-Family
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="font-display font-light text-lg md:text-xl text-ink-on-dark/90 hover:text-accent transition-colors"
                >
                  Urban Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-xl md:text-2xl tracking-wide text-accent mb-3">
              Practice
            </p>
            <ul className="space-y-1.5">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display font-light text-lg md:text-xl text-ink-on-dark/90 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Link
              href="/contact"
              className="font-sans text-xl md:text-2xl tracking-wide text-accent hover:text-ink-on-dark transition-colors"
            >
              Connect
            </Link>
            <ul className="space-y-1.5 mt-3">
              <li>
                <a
                  href="mailto:borbapereira@gmail.com"
                  className="font-display font-light text-lg md:text-xl text-ink-on-dark/90 hover:text-accent transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel:+13109574795"
                  className="font-display font-light text-lg md:text-xl text-ink-on-dark/90 hover:text-accent transition-colors"
                >
                  Phone
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/borbapereira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-light text-lg md:text-xl text-ink-on-dark/90 hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
