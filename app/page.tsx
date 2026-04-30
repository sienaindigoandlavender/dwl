import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PortfolioStrip from "@/components/PortfolioStrip";

type TierBlock = {
  id: string;
  verb: string;
  body: React.ReactNode;
  link: { href: string; label: string };
};

const TIER_BLOCKS: TierBlock[] = [
  {
    id: "host",
    verb: "We host.",
    body: (
      <>
        Riad di Siena is a six-room riad in the Marrakech medina. We run the front desk and the
        kitchen ourselves. Most guests come back.
      </>
    ),
    link: { href: "https://riaddisiena.com", label: "Riad di Siena" }
  },
  {
    id: "write",
    verb: "We write.",
    body: (
      <>
        Slow Morocco is the long-form regional editorial. Derb37 is the daily column, filed from
        inside the riad.
      </>
    ),
    link: { href: "https://slowmorocco.com", label: "Slow Morocco" }
  },
  {
    id: "teach",
    verb: "We teach.",
    body: (
      <>
        Darija.io is an open Moroccan Arabic reference. Tamazight.io is the same for Amazigh.
        Both are free to use.
      </>
    ),
    link: { href: "https://darija.io", label: "Darija.io" }
  },
  {
    id: "sell",
    verb: "We sell.",
    body: (
      <>
        Zfriti is a Moroccan pantry. Tilwen is a rug house from North and West Africa. Both hold
        what we already use at the riad.
      </>
    ),
    link: { href: "https://zfriti.com", label: "Zfriti" }
  },
  {
    id: "measure",
    verb: "We measure.",
    body: (
      <>
        Hawazine is the Moroccan real-estate index. Cadastre is the parcel layer beneath it.
        Travel Intelligence follows Cadastre.
      </>
    ),
    link: { href: "https://hawazine.com", label: "Hawazine" }
  },
  {
    id: "archive",
    verb: "We archive.",
    body: (
      <>
        Ksour Archive records Saharan earthen architecture. House of Weaves catalogues North and
        West African rug traditions. Tazmgha follows the Amazigh thread across the continent.
      </>
    ),
    link: { href: "https://ksour.org", label: "Ksour Archive" }
  }
];

export default function HomePage() {
  return (
    <>
      <Masthead />

      {/* Thesis */}
      <section className="min-h-[calc(100vh-96px)] flex items-center">
        <div className="mx-auto max-w-content w-full px-8 md:px-16 lg:px-24 py-24">
          <Reveal>
            <h1
              className="serif text-text"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em"
              }}
            >
              Calm travel infrastructure for{" "}
              <em className="serif-italic">places, hosts, and travelers</em>.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mono text-base text-text-secondary mt-10 max-w-2xl leading-relaxed">
              We are building it from Marrakech, in public. The portfolio today: a riad in the
              medina, an editorial body about Morocco, open language references for Darija and
              Amazigh, a Moroccan pantry, a rug house, a real-estate index with a parcel layer
              beneath it, and archives for the architecture and weaving going missing first.
            </p>
          </Reveal>
        </div>
      </section>

      <PortfolioStrip />

      {/* Tier blocks */}
      <section className="mx-auto max-w-content px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <Reveal>
          <div className="mono uppercase-micro text-text-muted mb-12">Six functions, one company</div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          {TIER_BLOCKS.map((tier, i) => (
            <Reveal key={tier.id} delay={(i % 3) * 80}>
              <article id={`tier-${tier.id}`} className="scroll-mt-24">
                <h2
                  className="serif text-text mb-5"
                  style={{ fontSize: "28px", letterSpacing: "-0.02em" }}
                >
                  {tier.verb}
                </h2>
                <p className="text-body text-text-body mb-6">{tier.body}</p>
                <a
                  href={tier.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono uppercase-meta arrow-link text-text"
                >
                  {tier.link.label} <span className="arrow">↗</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="bg-background-alt">
        <div className="mx-auto max-w-content px-8 md:px-16 lg:px-24 py-32 md:py-44 text-center">
          <Reveal>
            <p
              className="serif serif-italic text-text mx-auto max-w-4xl"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em"
              }}
            >
              Built from the Marrakech medina.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
