import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Data",
  description: "Structured cultural-data modules from Dancing with Lions."
};

const MODULES = [
  {
    slug: "maghreb-compared",
    title: "Maghreb, compared",
    description:
      "Comparative regional data across Morocco, Algeria, Tunisia, Libya, and Mauritania."
  },
  {
    slug: "al-andalus",
    title: "Al-Andalus atlas",
    description:
      "Places, lineages, and the post-1492 Maghreb diaspora — mapped and cross-indexed."
  }
];

export default function DataIndex() {
  return (
    <>
      <Masthead />
      <section className="mx-auto max-w-content px-6 md:px-10 pt-16 md:pt-24 pb-16">
        <div className="mono uppercase-micro text-text-muted mb-6">Data</div>
        <h1
          className="serif text-text"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
        >
          Cultural data infrastructure.
        </h1>
        <p className="mono text-base text-text-secondary mt-8 max-w-2xl leading-relaxed">
          Structured reference modules. Machine-readable, source-of-truth, cite-ready. Part of the{" "}
          <Link href="/products" className="underline">
            Cultural data infrastructure
          </Link>{" "}
          product line.
        </p>
      </section>
      <div className="mx-auto max-w-content px-6 md:px-10 pb-24 md:pb-32 grid grid-cols-1 md:grid-cols-2 gap-8">
        {MODULES.map((m) => (
          <Link
            key={m.slug}
            href={`/data/${m.slug}`}
            className="block border-t border-border pt-8 group"
          >
            <h2
              className="serif text-text group-hover:text-text"
              style={{ fontSize: "36px", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              {m.title}
            </h2>
            <p className="text-body text-text-body mt-4">{m.description}</p>
            <span className="mono uppercase-meta arrow-link text-text mt-6 inline-flex">
              Open module <span className="arrow">↗</span>
            </span>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}
