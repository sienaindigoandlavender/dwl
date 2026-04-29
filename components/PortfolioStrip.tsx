"use client";

import Link from "next/link";
import { PORTFOLIO } from "@/lib/portfolio";

export default function PortfolioStrip() {
  return (
    <div className="border-y border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-10">
        <div className="mono uppercase-micro text-text-muted mb-6">The portfolio</div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8">
          {PORTFOLIO.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/portfolio#${p.slug}`}
                className="group block"
                aria-label={`${p.name} — ${p.positioning}`}
              >
                <div className="serif text-2xl leading-tight text-text group-hover:text-text">
                  {p.name}
                </div>
                <div className="mono text-xs text-text-muted mt-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {p.positioning}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
