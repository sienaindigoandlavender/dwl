import type { Metadata } from "next";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { PORTFOLIO, TIERS, type Property } from "@/lib/portfolio";
import { breadcrumbSchema, portfolioCollectionSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Fifteen properties across six tiers — host, write, teach, sell, measure, archive.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio — Dancing with Lions",
    description: "Fifteen properties across six tiers.",
    url: "/portfolio",
    type: "website"
  }
};

const ART_GRADIENTS: Record<string, string> = {
  "riad-di-siena": "linear-gradient(135deg, #1f1f1f 0%, #3a3a3a 100%)",
  "derb-so": "linear-gradient(135deg, #161616 0%, #383838 100%)",
  "hosh-space": "linear-gradient(135deg, #2a2a2a 0%, #4a4a4a 100%)",
  "slow-morocco": "linear-gradient(135deg, #262626 0%, #525252 100%)",
  derb37: "linear-gradient(135deg, #1a1a1a 0%, #404040 100%)",
  "darija-io": "linear-gradient(135deg, #1c1c1c 0%, #424242 100%)",
  "tamazight-io": "linear-gradient(135deg, #202020 0%, #464646 100%)",
  zfriti: "linear-gradient(135deg, #0f0f0f 0%, #2c2c2c 100%)",
  tilwen: "linear-gradient(135deg, #181818 0%, #3c3c3c 100%)",
  hawazine: "linear-gradient(135deg, #232323 0%, #4d4d4d 100%)",
  cadastre: "linear-gradient(135deg, #141414 0%, #353535 100%)",
  "travel-intelligence": "linear-gradient(135deg, #1e1e1e 0%, #444444 100%)",
  "ksour-archive": "linear-gradient(135deg, #2c2c2c 0%, #595959 100%)",
  "house-of-weaves": "linear-gradient(135deg, #0a0a0a 0%, #2a2a2a 100%)",
  tazmgha: "linear-gradient(135deg, #111111 0%, #303030 100%)"
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

function PortfolioEntry({ p, index, reverse }: { p: Property; index: number; reverse: boolean }) {
  return (
    <Reveal>
      <article
        id={p.slug}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start scroll-mt-24"
      >
        <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
          <div
            className="aspect-[16/9] w-full bg-light overflow-hidden"
            role="img"
            aria-label={p.name}
          >
            <PropertyArt slug={p.slug} />
          </div>
        </div>
        <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
          <div className="mono uppercase-micro text-text-muted mb-4">
            {String(index).padStart(2, "0")} — {p.tier}
          </div>
          <h2
            className="serif text-text"
            style={{ fontSize: "48px", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            {p.name}
            {p.status && (
              <span className="mono ml-3 align-middle text-text-muted" style={{ fontSize: "13px" }}>
                ({p.status})
              </span>
            )}
          </h2>
          <p className="mono text-text-secondary mt-3" style={{ fontSize: "18px", lineHeight: 1.5 }}>
            {p.positioning}
          </p>
          <p className="text-body text-text-body mt-6 max-w-prose">{p.context}</p>
          <a
            href={p.url}
            target={p.url.startsWith("http") ? "_blank" : undefined}
            rel={p.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="mono uppercase-meta arrow-link text-text mt-8 inline-flex"
          >
            Visit {p.name} <span className="arrow">↗</span>
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export default function PortfolioPage() {
  let runningIndex = 0;
  return (
    <>
      <Masthead />
      <JsonLd
        data={[
          portfolioCollectionSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Portfolio", url: "/portfolio" }
          ])
        ]}
      />

      <section className="mx-auto max-w-content px-8 md:px-16 lg:px-24 pt-16 md:pt-24 pb-16">
        <Reveal>
          <div className="mono uppercase-micro text-text-muted mb-6">Portfolio</div>
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
            The properties.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mono text-base text-text-secondary mt-8 max-w-2xl leading-relaxed">
            Six tiers. Fifteen properties. Each one a different surface on the same idea — that
            travel, done well, is a considered act.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-content px-8 md:px-16 lg:px-24 pb-24 md:pb-32 space-y-32 md:space-y-40">
        {TIERS.map((tier) => {
          const items = PORTFOLIO.filter((p) => p.tier === tier.id);
          if (items.length === 0) return null;
          return (
            <section key={tier.id} id={`tier-${tier.id}`} className="scroll-mt-24">
              <Reveal>
                <div className="mb-16 border-t border-border pt-8">
                  <div className="mono uppercase-micro text-text-muted">{tier.label}.</div>
                  <h2
                    className="serif text-text mt-3"
                    style={{ fontSize: "36px", letterSpacing: "-0.02em" }}
                  >
                    {tier.verb}
                  </h2>
                </div>
              </Reveal>
              <div className="space-y-24 md:space-y-32">
                {items.map((p) => {
                  runningIndex += 1;
                  const reverse = runningIndex % 2 === 0;
                  return (
                    <PortfolioEntry key={p.slug} p={p} index={runningIndex} reverse={reverse} />
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <Footer />
    </>
  );
}
