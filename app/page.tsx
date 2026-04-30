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
        Riad di Siena is a working riad in the Marrakech medina. Six rooms. A kitchen that runs
        every day. Guests who come back. We learned hospitality with the keys in our hand.
      </>
    ),
    link: { href: "https://riaddisiena.com", label: "Riad di Siena" }
  },
  {
    id: "write",
    verb: "We write.",
    body: (
      <>
        Slow Morocco and Derb37 turn what we know into sentences. Region. Season. Kitchen.
        Lineage. We write for the reader past the first ten search results.
      </>
    ),
    link: { href: "https://slowmorocco.com", label: "Slow Morocco" }
  },
  {
    id: "teach",
    verb: "We teach.",
    body: (
      <>
        Darija.io covers Moroccan Arabic. Tamazight.io covers Amazigh. Two languages more written{" "}
        <em className="serif-italic">about</em> than spoken{" "}
        <em className="serif-italic">in</em>. We built both to be used.
      </>
    ),
    link: { href: "https://darija.io", label: "Darija.io" }
  },
  {
    id: "sell",
    verb: "We sell.",
    body: (
      <>
        Zfriti is a Moroccan pantry. Tilwen is a rug house. We sell what we live with. The
        cultural work tells us what those things are.
      </>
    ),
    link: { href: "https://zfriti.com", label: "Zfriti" }
  },
  {
    id: "measure",
    verb: "We measure.",
    body: (
      <>
        Hawazine organizes Moroccan real estate. Cadastre maps the land underneath. Travel
        Intelligence comes next. Buyers and operators see the ground before they move on it.
      </>
    ),
    link: { href: "https://hawazine.com", label: "Hawazine" }
  },
  {
    id: "archive",
    verb: "We archive.",
    body: (
      <>
        Ksour Archive holds Saharan earthen architecture. House of Weaves holds the rugs of North
        and West Africa. Tazmgha holds the Amazigh thread across the continent. We keep them in
        one place. Sourced. Cited.
      </>
    ),
    link: { href: "https://ksour.org", label: "Ksour Archive" }
  }
];

export default function HomePage() {
  return (
    <>
      <Masthead />

      {/* Thesis block, full viewport */}
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
              Dancing with Lions builds the systems hosts run on, the editorial layer places need,
              and the reference data travelers can trust. Six product lines. One company.
            </p>
          </Reveal>
        </div>
      </section>

      <PortfolioStrip />

      {/* Six tiers expanded */}
      <section className="mx-auto max-w-content px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <Reveal>
          <div className="mono uppercase-micro text-text-muted mb-12">Six tiers, one company</div>
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
              We build the infrastructure. Hosts run it. Places use it. Travelers trust it.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
