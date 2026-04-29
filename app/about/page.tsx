import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { PORTFOLIO } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dancing with Lions is a travel tech company building the cultural intelligence layer of the internet."
};

export default function AboutPage() {
  return (
    <>
      <Masthead />

      <section className="mx-auto max-w-content px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <Reveal>
          <div className="mono uppercase-micro text-text-muted mb-6">About</div>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className="serif text-text"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            The company.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-content px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <Reveal>
              <div className="mono uppercase-micro text-text-muted">01 — The company</div>
            </Reveal>
          </div>
          <div className="md:col-span-9 space-y-6 max-w-prose">
            <Reveal delay={60}>
              <p className="text-body text-text-body">
                Dancing with Lions is a travel tech company. We build the cultural intelligence
                layer of the internet — the structured, machine-readable, source-of-truth layer
                that platforms and search engines never made.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body text-text-body">
                The portfolio is the proof. A working riad in Marrakech. Editorial properties that
                map countries and crafts at depth. Reference archives that ground AI answers in
                real records. Each property is a different surface on the same thesis: culture is
                data, and the world becomes legible when you map what connects.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-body text-text-body">
                The portfolio earns the right to build the systems. The systems are the company.
                Travel tech is the umbrella.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background-alt">
        <div className="mx-auto max-w-content px-6 md:px-10 py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <Reveal>
                <div className="mono uppercase-micro text-text-muted">02 — The portfolio</div>
              </Reveal>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <ul className="divide-y divide-border">
                  {PORTFOLIO.map((p) => (
                    <li key={p.slug} className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4">
                      <div className="md:col-span-4">
                        <Link
                          href={`/portfolio#${p.slug}`}
                          className="serif text-2xl text-text hover:text-text"
                          style={{ letterSpacing: "-0.02em" }}
                        >
                          {p.name}
                        </Link>
                      </div>
                      <div className="md:col-span-6 mono text-sm text-text-secondary self-center">
                        {p.positioning}
                      </div>
                      <div className="md:col-span-2 md:text-right">
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mono uppercase-meta arrow-link text-text"
                        >
                          Visit <span className="arrow">↗</span>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <Reveal>
              <div className="mono uppercase-micro text-text-muted">03 — Founder</div>
            </Reveal>
          </div>
          <div className="md:col-span-9 max-w-prose">
            <Reveal delay={60}>
              <p className="text-body text-text-body">
                <span className="serif text-2xl text-text" style={{ letterSpacing: "-0.02em" }}>
                  Jacqueline Ng, Founder.
                </span>{" "}
                Operates the hospitality property and runs the company. The work is the portfolio
                and the systems it produces.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
