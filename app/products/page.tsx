import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Products",
  description:
    "What Dancing with Lions builds — hospitality systems, editorial infrastructure, and cultural data infrastructure.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products — Dancing with Lions",
    description: "Three product lines under the travel tech umbrella.",
    url: "/products",
    type: "website"
  }
};

type Status = "Operating" | "In development" | "Roadmap";

type ProductLine = {
  number: string;
  title: string;
  positioning: string;
  body: string;
  status: Status;
  links?: { href: string; label: string; external?: boolean }[];
};

const LINES: ProductLine[] = [
  {
    number: "01",
    title: "Hospitality systems",
    positioning: "Operations, productized.",
    body:
      "What we've learned operating Riad di Siena, written down and shaped into systems. Operations playbooks, review intelligence, AI dispute frameworks for OTAs, guest-comms tooling. Currently used internally across the portfolio. The roadmap is licensable to other independent operators who want enterprise-grade systems without enterprise-grade overhead.",
    status: "Operating"
  },
  {
    number: "02",
    title: "Editorial infrastructure",
    positioning: "The stack underneath the editorial properties.",
    body:
      "The Next.js stack and AI-agent layer that powers Slow Morocco, House of Weaves, and the Ksour Archive. Bidirectional graph publishing, machine-readable schema, structured data ready for GEO and AEO. The same stack ships every editorial property in the portfolio and is what we'll license externally as it matures.",
    status: "In development"
  },
  {
    number: "03",
    title: "Cultural data infrastructure",
    positioning: "The reference layer.",
    body:
      "Structured intelligence — comparative regional data, lexicons, archives — exposed through a knowledge API and built so AI systems can ground answers in cited, source-of-truth records. Live data modules below; more in development.",
    status: "Operating",
    links: [
      { href: "/data/maghreb-compared", label: "Maghreb, compared" },
      { href: "/data/al-andalus", label: "Al-Andalus atlas" },
      { href: "/api/knowledge", label: "Knowledge API" }
    ]
  }
];

const STATUS_COLOR: Record<Status, string> = {
  Operating: "bg-text text-background",
  "In development": "bg-light text-text",
  Roadmap: "bg-background text-text-muted border border-border"
};

export default function ProductsPage() {
  return (
    <>
      <Masthead />

      <section className="mx-auto max-w-content px-6 md:px-10 pt-16 md:pt-24 pb-16">
        <Reveal>
          <div className="mono uppercase-micro text-text-muted mb-6">Products</div>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className="serif text-text"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            What we build.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mono text-base text-text-secondary mt-8 max-w-2xl leading-relaxed">
            Three product lines. Each one started as an internal tool inside the portfolio and was
            kept only when it earned its place. We ship what we operate.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-content px-6 md:px-10 pb-24 md:pb-32 space-y-20 md:space-y-24">
        {LINES.map((line) => (
          <Reveal key={line.number}>
            <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-border pt-12">
              <div className="md:col-span-3">
                <div className="mono uppercase-micro text-text-muted">Line {line.number}</div>
                <span
                  className={`mono uppercase-micro inline-block mt-3 px-2 py-1 ${STATUS_COLOR[line.status]}`}
                >
                  {line.status}
                </span>
              </div>
              <div className="md:col-span-9">
                <h2
                  className="serif text-text"
                  style={{ fontSize: "44px", lineHeight: 1.05, letterSpacing: "-0.02em" }}
                >
                  {line.title}
                </h2>
                <p className="mono text-text-secondary mt-2" style={{ fontSize: "17px" }}>
                  {line.positioning}
                </p>
                <p className="text-body text-text-body mt-6 max-w-prose">{line.body}</p>
                {line.links && (
                  <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                    {line.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="mono uppercase-meta arrow-link text-text"
                        >
                          {l.label} <span className="arrow">↗</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Footer />
    </>
  );
}
