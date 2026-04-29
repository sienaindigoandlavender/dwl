"use client";

import Link from "next/link";
import { TIERS, getProperty } from "@/lib/portfolio";

export default function PortfolioStrip() {
  return (
    <div className="border-y border-border">
      <div className="mx-auto max-w-content px-8 md:px-16 lg:px-24 py-10">
        <div className="mono uppercase-micro text-text-muted mb-8">The portfolio</div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
          {TIERS.map((tier) => {
            const marquee = getProperty(tier.marquee);
            if (!marquee) return null;
            return (
              <li key={tier.id}>
                <Link
                  href={`#tier-${tier.id}`}
                  className="group block"
                  aria-label={`${tier.label} — ${marquee.name}`}
                >
                  <div className="mono uppercase-micro text-text-muted mb-3">{tier.label}</div>
                  <div
                    className="serif text-text leading-tight"
                    style={{ fontSize: "26px", letterSpacing: "-0.02em" }}
                  >
                    {marquee.name}
                  </div>
                  <div className="mono text-xs text-text-muted mt-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {marquee.positioning}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
