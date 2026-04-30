import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Every tool we build started as an internal tool inside our tourism operations. We build for ourselves first, then share with others.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Dancing with Lions",
    description:
      "Every PMS claims more revenue and profit. We claim calm. Without calm, an operation cannot scale.",
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
    positioning: "The systems we use to run the riad.",
    body:
      "The internal systems behind Riad di Siena and the rest of the host portfolio. Hosh.space is the guest-management app at the front of this line.",
    status: "Operating"
  },
  {
    number: "02",
    title: "Editorial infrastructure",
    positioning: "The stack underneath the editorial properties.",
    body:
      "The publishing system behind Slow Morocco, Derb37, House of Weaves, and Ksour Archive. Built so the editorial can move at our pace.",
    status: "In development"
  },
  {
    number: "03",
    title: "Cultural data infrastructure",
    positioning: "The reference layer.",
    body:
      "Comparative regional data, lexicons, and archives. The Knowledge API exposes the records. Live modules below.",
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

      <section className="mx-auto max-w-content px-8 md:px-16 lg:px-24 pt-16 md:pt-24 pb-16">
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
            Every tool we build started as an internal tool inside our tourism operations. We
            build for ourselves first. Now we are sharing the tools with others. Every PMS claims
            more revenue and more profit. We claim calm. Without calm, an operation cannot scale.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-content px-8 md:px-16 lg:px-24 pb-24 md:pb-32 space-y-20 md:space-y-24">
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
