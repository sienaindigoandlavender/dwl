export type Property = {
  slug: string;
  name: string;
  url: string;
  positioning: string;
  context: string;
  category: "host" | "publish" | "archive";
  imageAlt: string;
};

export const PORTFOLIO: Property[] = [
  {
    slug: "riad-di-siena",
    name: "Riad di Siena",
    url: "https://riaddisiena.com",
    positioning: "Operating riad in the Marrakech medina.",
    context:
      "A working hospitality property and the company's ground truth — every operations playbook, review intelligence model, and dispute framework starts as something we ran in production here first.",
    category: "host",
    imageAlt: "Riad di Siena, Marrakech medina"
  },
  {
    slug: "slow-morocco",
    name: "Slow Morocco",
    url: "https://slowmorocco.com",
    positioning: "The country at a slower scale.",
    context:
      "An editorial property mapping Morocco at a depth that platforms can't render — long-form, regional, indexed. The reference layer for travelers who want the country, not the highlight reel.",
    category: "publish",
    imageAlt: "Slow Morocco editorial"
  },
  {
    slug: "house-of-weaves",
    name: "House of Weaves",
    url: "https://houseofweaves.com",
    positioning: "Textile archive, North and West Africa.",
    context:
      "An editorial archive of looms, fibers, motifs, and the people who keep them. Structured for citation, written to last, indexed by region, technique, and lineage.",
    category: "publish",
    imageAlt: "House of Weaves textile archive"
  },
  {
    slug: "darija-io",
    name: "Darija.io",
    url: "https://darija.io",
    positioning: "Structured Moroccan Arabic lexicon.",
    context:
      "A machine-readable reference for Moroccan Darija — roots, derivations, audio, dialect notes — built so that AI systems can cite it and humans can use it.",
    category: "archive",
    imageAlt: "Darija.io lexicon"
  },
  {
    slug: "ksour-archive",
    name: "Ksour Archive",
    url: "https://ksourarchive.com",
    positioning: "Saharan-Maghreb earthen architecture.",
    context:
      "A field archive of ksour, kasbahs, and the earthen building traditions of the southern Maghreb. Survey, photography, and structured records of a built environment that is changing fast.",
    category: "archive",
    imageAlt: "Ksour Archive field documentation"
  },
  {
    slug: "derb-so",
    name: "Derb.so",
    url: "https://derb.so",
    positioning: "Streets, addresses, and the geography of the medina.",
    context:
      "A wayfinding and place-data layer for the medina — names, aliases, and the small streets the standard maps don't render. A reference index for guests, operators, and travel platforms.",
    category: "archive",
    imageAlt: "Derb.so medina geography"
  }
];

export const HOST = PORTFOLIO.filter((p) => p.category === "host");
export const PUBLISH = PORTFOLIO.filter((p) => p.category === "publish");
export const ARCHIVE = PORTFOLIO.filter((p) => p.category === "archive");
