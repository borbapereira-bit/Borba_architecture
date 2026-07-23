import Link from "next/link";
import { ReactNode } from "react";

export default function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-sans text-sm tracking-wide ${className}`}
    >
      <span className="border-b border-current pb-0.5">{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
