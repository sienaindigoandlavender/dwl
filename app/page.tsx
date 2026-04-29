import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PortfolioStrip from "@/components/PortfolioStrip";

export default function HomePage() {
  return (
    <>
      <Masthead />

      {/* Thesis block — full viewport */}
      <section className="min-h-[calc(100vh-96px)] flex items-center">
        <div className="mx-auto max-w-content w-full px-6 md:px-10 py-24">
          <Reveal>
            <h1 className="serif text-hero text-text" style={{ letterSpacing: "-0.03em" }}>
              Travel tech for a <em className="serif-italic">more legible</em> world.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mono text-base md:text-[16px] text-text-secondary mt-10 max-w-2xl leading-relaxed">
              Dancing with Lions builds the cultural intelligence layer of the internet — through
              a portfolio of hospitality, editorial, and archive properties.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-12 flex items-center gap-6">
              <Link href="/portfolio" className="mono uppercase-meta arrow-link text-text">
                The portfolio <span className="arrow">↗</span>
              </Link>
              <Link href="/products" className="mono uppercase-meta arrow-link text-text">
                What we build <span className="arrow">↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <PortfolioStrip />

      {/* Thesis expanded — three blocks */}
      <section className="mx-auto max-w-content px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <div className="mono uppercase-micro text-text-muted mb-12">The thesis</div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          <Reveal>
            <article>
              <h2 className="serif text-h2 text-text mb-4">We host.</h2>
              <p className="text-body text-text-body mb-6">
                Riad di Siena is a working riad in the Marrakech medina. Real guests, real
                revenue, real operations. Hospitality is the company's ground truth — every
                product line we build was a problem we solved here first.
              </p>
              <Link href="/portfolio#riad-di-siena" className="mono uppercase-meta arrow-link text-text">
                Riad di Siena <span className="arrow">↗</span>
              </Link>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article>
              <h2 className="serif text-h2 text-text mb-4">We write.</h2>
              <p className="text-body text-text-body mb-6">
                Slow Morocco and House of Weaves are editorial properties that map cultural depth
                — country, region, textile, lineage. Long-form, indexed, written for the long
                tail of search and citation.
              </p>
              <Link href="/portfolio#slow-morocco" className="mono uppercase-meta arrow-link text-text">
                Slow Morocco <span className="arrow">↗</span>
              </Link>
            </article>
          </Reveal>
          <Reveal delay={240}>
            <article>
              <h2 className="serif text-h2 text-text mb-4">We archive.</h2>
              <p className="text-body text-text-body mb-6">
                Darija.io and the Ksour Archive are structured reference layers — machine-readable,
                cite-ready, built so AI systems can ground answers in real sources rather than
                generic ones.
              </p>
              <Link href="/portfolio#darija-io" className="mono uppercase-meta arrow-link text-text">
                Darija.io <span className="arrow">↗</span>
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Why this matters */}
      <section className="bg-background-alt">
        <div className="mx-auto max-w-content px-6 md:px-10 py-28 md:py-40">
          <Reveal>
            <div className="mono uppercase-micro text-text-muted mb-10">Why this matters</div>
          </Reveal>
          <Reveal delay={120}>
            <p
              className="serif text-text max-w-4xl"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
            >
              Travel platforms ranked the world. Search engines indexed it. Neither one made it{" "}
              <em className="serif-italic">legible</em>. We build the layer that does.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
