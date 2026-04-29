import type { Metadata } from "next";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { PORTFOLIO } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "The properties of Dancing with Lions — hospitality, editorial, and archive. Evidence, not announcements."
};

export default function PortfolioPage() {
  return (
    <>
      <Masthead />

      <section className="mx-auto max-w-content px-6 md:px-10 pt-16 md:pt-24 pb-16">
        <Reveal>
          <div className="mono uppercase-micro text-text-muted mb-6">Portfolio</div>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className="serif text-text"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            The properties.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mono text-base text-text-secondary mt-8 max-w-2xl leading-relaxed">
            Each entry is a different surface on the same thesis: culture is data, and the world
            becomes legible when you map what connects.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-content px-6 md:px-10 pb-24 md:pb-32 space-y-24 md:space-y-32">
        {PORTFOLIO.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <Reveal key={p.slug}>
              <article
                id={p.slug}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start scroll-mt-24"
              >
                <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
                  <div
                    className="aspect-[16/9] w-full bg-light overflow-hidden"
                    role="img"
                    aria-label={p.imageAlt}
                  >
                    <PropertyArt slug={p.slug} />
                  </div>
                </div>
                <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
                  <div className="mono uppercase-micro text-text-muted mb-4">
                    0{i + 1} — {p.category}
                  </div>
                  <h2
                    className="serif text-text"
                    style={{ fontSize: "48px", lineHeight: 1.05, letterSpacing: "-0.02em" }}
                  >
                    {p.name}
                  </h2>
                  <p className="mono text-text-secondary mt-3" style={{ fontSize: "18px", lineHeight: 1.5 }}>
                    {p.positioning}
                  </p>
                  <p className="text-body text-text-body mt-6 max-w-prose">{p.context}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono uppercase-meta arrow-link text-text mt-8 inline-flex"
                  >
                    Visit {p.name} <span className="arrow">↗</span>
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Footer />
    </>
  );
}

const ART_GRADIENTS: Record<string, string> = {
  "riad-di-siena": "linear-gradient(135deg, #1f1f1f 0%, #3a3a3a 100%)",
  "slow-morocco": "linear-gradient(135deg, #262626 0%, #525252 100%)",
  "house-of-weaves": "linear-gradient(135deg, #0a0a0a 0%, #2a2a2a 100%)",
  "darija-io": "linear-gradient(135deg, #1a1a1a 0%, #404040 100%)",
  "ksour-archive": "linear-gradient(135deg, #2c2c2c 0%, #595959 100%)",
  "derb-so": "linear-gradient(135deg, #161616 0%, #383838 100%)"
};

function PropertyArt({ slug }: { slug: string }) {
  const bg = ART_GRADIENTS[slug] ?? "linear-gradient(135deg, #1f1f1f 0%, #3a3a3a 100%)";
  return (
    <div
      className="w-full h-full flex items-end p-8"
      style={{ background: bg }}
      aria-hidden="true"
    >
      <div className="mono uppercase-micro text-white/60">{slug}</div>
    </div>
  );
}
