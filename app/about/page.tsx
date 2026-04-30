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
    "Dancing with Lions is building calm travel infrastructure for places, hosts, and travelers. Operating from Marrakech.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Dancing with Lions",
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

      <section className="mx-auto max-w-content px-8 md:px-16 lg:px-24 pt-16 md:pt-24 pb-12">
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

      <section className="mx-auto max-w-content px-8 md:px-16 lg:px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <Reveal>
              <div className="mono uppercase-micro text-text-muted">01. The company</div>
            </Reveal>
          </div>
          <div className="md:col-span-9 space-y-6 max-w-prose">
            <Reveal delay={60}>
              <p className="text-body text-text-body">
                Dancing with Lions is building calm travel infrastructure for places, hosts, and
                travelers. Operating from Marrakech.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body text-text-body">
                The portfolio today: a six-room riad in the Marrakech medina, an editorial body
                about Morocco, open language references for Darija and Amazigh, a Moroccan pantry,
                a rug house, a real-estate index with a parcel layer beneath it, and archives for
                the architecture and weaving going missing first.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-body text-text-body">
                Six functions: host, write, teach, sell, measure, archive. Fifteen properties so
                far.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background-alt">
        <div className="mx-auto max-w-content px-8 md:px-16 lg:px-24 py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <Reveal>
                <div className="mono uppercase-micro text-text-muted">02. The portfolio</div>
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

      <section className="mx-auto max-w-content px-8 md:px-16 lg:px-24 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <Reveal>
              <div className="mono uppercase-micro text-text-muted">03. Founder</div>
            </Reveal>
          </div>
          <div className="md:col-span-9 max-w-prose">
            <Reveal delay={60}>
              <p className="text-body text-text-body">
                Jacqueline Ng founded Dancing with Lions. She runs it from Marrakech.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
