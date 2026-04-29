import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { PORTFOLIO } from "@/lib/portfolio";
import { aboutPageSchema, breadcrumbSchema, personSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dancing with Lions is a travel tech company. Six product lines. The portfolio is the proof.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Dancing with Lions",
    description: "The company, the portfolio, the founder.",
    url: "/about",
    type: "website"
  }
};

export default function AboutPage() {
  return (
    <>
      <Masthead />
      <JsonLd
        data={[
          aboutPageSchema(),
          personSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" }
          ])
        ]}
      />

      <section className="mx-auto max-w-content px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <Reveal>
          <div className="mono uppercase-micro text-text-muted mb-6">About</div>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className="serif text-text"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em"
            }}
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
                Dancing with Lions is a travel tech company. Six product lines: host, write, teach,
                sell, measure, archive. One umbrella.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body text-text-body">
                The thesis is calm. Travel, done well, is a considered act — not a chaotic one. We
                design technology that helps people arrive considered and stay that way: a working
                riad, editorial properties that read slowly, language apps for the languages that
                actually get spoken, a pantry, a rug house, a real-estate layer, archives for the
                things that tend to drift.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-body text-text-body">
                The portfolio is the proof. Each property is a different surface on the same idea.
                The travel tech is the company.
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
                        {p.status && (
                          <span
                            className="mono ml-2 align-middle text-text-muted"
                            style={{ fontSize: "11px" }}
                          >
                            ({p.status})
                          </span>
                        )}
                      </div>
                      <div className="md:col-span-6 mono text-sm text-text-secondary self-center">
                        {p.positioning}
                      </div>
                      <div className="md:col-span-2 md:text-right">
                        <a
                          href={p.url}
                          target={p.url.startsWith("http") ? "_blank" : undefined}
                          rel={p.url.startsWith("http") ? "noopener noreferrer" : undefined}
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
                Jacqueline Ng is the Canadian Founder and Architect of the Dancing with Lions
                ecosystem. She is based in Marrakech, Morocco.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
