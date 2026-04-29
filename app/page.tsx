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
        Riad di Siena is a working riad in the Marrakech medina. Six rooms, a kitchen that runs
        every day, guests who keep coming back. Everything we know about hospitality, we learned
        with the keys in our hand.
      </>
    ),
    link: { href: "https://riaddisiena.com", label: "Riad di Siena" }
  },
  {
    id: "write",
    verb: "We write.",
    body: (
      <>
        Slow Morocco and Derb37 are how we put what we know into sentences. Region, season,
        kitchen, lineage. Written slowly. Indexed for the long tail. Built for the reader who's
        already past the first ten search results.
      </>
    ),
    link: { href: "https://slowmorocco.com", label: "Slow Morocco" }
  },
  {
    id: "teach",
    verb: "We teach.",
    body: (
      <>
        Darija.io and Tamazight.io are language apps for the two languages most people talking{" "}
        <em className="serif-italic">about</em> Morocco never quite learn to speak{" "}
        <em className="serif-italic">in</em>. One for Moroccan Arabic. One for Amazigh. Both built
        to be used, not just admired.
      </>
    ),
    link: { href: "https://darija.io", label: "Darija.io" }
  },
  {
    id: "sell",
    verb: "We sell.",
    body: (
      <>
        Zfriti is a Moroccan pantry. Tilwen is a rug house. We only sell things we'd live with —
        and the cultural work makes sure we know what those are.
      </>
    ),
    link: { href: "https://zfriti.com", label: "Zfriti" }
  },
  {
    id: "measure",
    verb: "We measure.",
    body: (
      <>
        Hawazine is the way Moroccan real estate should have been organized a decade ago. Cadastre
        sits underneath. Travel Intelligence comes next. Quiet infrastructure for the people who
        need to see clearly before they move.
      </>
    ),
    link: { href: "https://hawazine.com", label: "Hawazine" }
  },
  {
    id: "archive",
    verb: "We archive.",
    body: (
      <>
        Ksour Archive, House of Weaves, and Tazmgha hold things that tend to drift — Saharan
        earthen architecture, the rugs of North and West Africa, the Amazigh thread across the
        continent. We keep them in one place. Cite-ready. Not going anywhere.
      </>
    ),
    link: { href: "https://ksour.org", label: "Ksour Archive" }
  }
];

export default function HomePage() {
  return (
    <>
      <Masthead />

      {/* Thesis block — full viewport */}
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
              Travel technology for people who want to{" "}
              <em className="serif-italic">arrive considered</em>.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mono text-base text-text-secondary mt-10 max-w-2xl leading-relaxed">
              Dancing with Lions is a travel tech company. Six product lines. One quiet idea —
              that travel, done well, is a considered act.
            </p>
          </Reveal>
        </div>
      </section>

      <PortfolioStrip />

      {/* Six tiers expanded */}
      <section className="mx-auto max-w-content px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <Reveal>
          <div className="mono uppercase-micro text-text-muted mb-12">Six tiers, one umbrella</div>
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

      {/* Closing line */}
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
              We design travel technology that helps people arrive considered — and stay that way.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
