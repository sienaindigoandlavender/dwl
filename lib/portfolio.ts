export type Tier = "host" | "write" | "teach" | "sell" | "measure" | "archive";

export type Status = "Operating" | "In development" | "Future" | "Working title";

export type Property = {
  slug: string;
  name: string;
  url: string;
  tier: Tier;
  positioning: string;
  context: string;
  status?: Status;
};

export const TIERS: { id: Tier; label: string; verb: string; marquee: string }[] = [
  { id: "host", label: "Host", verb: "We host.", marquee: "riad-di-siena" },
  { id: "write", label: "Write", verb: "We write.", marquee: "slow-morocco" },
  { id: "teach", label: "Teach", verb: "We teach.", marquee: "darija-io" },
  { id: "sell", label: "Sell", verb: "We sell.", marquee: "zfriti" },
  { id: "measure", label: "Measure", verb: "We measure.", marquee: "hawazine" },
  { id: "archive", label: "Archive", verb: "We archive.", marquee: "ksour-archive" }
];

export const PORTFOLIO: Property[] = [
  // Host
  {
    slug: "riad-di-siena",
    name: "Riad di Siena",
    url: "https://riaddisiena.com",
    tier: "host",
    positioning: "A working riad in the Marrakech medina.",
    context:
      "Six rooms. A kitchen that runs every day. We run the front desk and the kitchen ourselves."
  },
  {
    slug: "derb-so",
    name: "Derb.so",
    url: "https://derb.so",
    tier: "host",
    positioning: "Streets, addresses, and the geography of the medina.",
    context:
      "Names, aliases, and the small streets standard maps miss. A reference for guests, hosts, and travel platforms."
  },
  {
    slug: "hosh-space",
    name: "Hosh.space",
    url: "https://hosh.space",
    tier: "host",
    status: "In development",
    positioning: "A guest-management app for hosts.",
    context:
      "Built so a host can run day-to-day operations calmly. We use it inside Riad di Siena first."
  },

  // Write
  {
    slug: "slow-morocco",
    name: "Slow Morocco",
    url: "https://slowmorocco.com",
    tier: "write",
    positioning: "The long-form regional editorial.",
    context:
      "Long pieces about places, kitchens, and lineages in Morocco. Written from the medina."
  },
  {
    slug: "derb37",
    name: "Derb37",
    url: "https://derb37.com",
    tier: "write",
    positioning: "The daily column, filed from inside the riad.",
    context:
      "Short, dated entries. A working journal in public. Same voice as Slow Morocco, volume turned down."
  },

  // Teach
  {
    slug: "darija-io",
    name: "Darija.io",
    url: "https://darija.io",
    tier: "teach",
    positioning: "A learning app for Moroccan Arabic.",
    context:
      "Built for people who want to actually speak Darija. Lessons, audio, and a structured reference behind them."
  },
  {
    slug: "tamazight-io",
    name: "Tamazight.io",
    url: "https://tamazight.io",
    tier: "teach",
    positioning: "A learning app for Amazigh.",
    context:
      "Companion to Darija.io. Same shape, different language."
  },

  // Sell
  {
    slug: "zfriti",
    name: "Zfriti",
    url: "https://zfriti.com",
    tier: "sell",
    positioning: "A Moroccan pantry.",
    context:
      "Olive oil, spices, and preserved goods. We stock what we already cook with at the riad."
  },
  {
    slug: "tilwen",
    name: "Tilwen",
    url: "https://tilwen.com",
    tier: "sell",
    positioning: "A rug house from North and West Africa.",
    context:
      "Rugs sourced where they are made and named where they come from. Catalogued before they move."
  },

  // Measure
  {
    slug: "hawazine",
    name: "Hawazine",
    url: "https://hawazine.com",
    tier: "measure",
    positioning: "The Moroccan real-estate index.",
    context:
      "Listings, prices, neighbourhoods, history. One place to see the market clearly."
  },
  {
    slug: "cadastre",
    name: "Cadastre",
    url: "https://hawazine.com",
    tier: "measure",
    status: "Working title",
    positioning: "The parcel layer beneath Hawazine.",
    context:
      "Parcels, ownership, deeds. The land record under the listings."
  },
  {
    slug: "travel-intelligence",
    name: "Travel Intelligence",
    url: "/products",
    tier: "measure",
    status: "Future",
    positioning: "Reference data for travel operators.",
    context:
      "Comparative regional data and occupancy signals. Follows Cadastre."
  },

  // Archive
  {
    slug: "ksour-archive",
    name: "Ksour Archive",
    url: "https://ksour.org",
    tier: "archive",
    positioning: "A record of Saharan-Maghreb earthen architecture.",
    context:
      "Ksour, kasbahs, and the building traditions of the southern Maghreb. Survey, photography, and structured records of a built environment that is changing fast."
  },
  {
    slug: "house-of-weaves",
    name: "House of Weaves",
    url: "https://houseofweaves.com",
    tier: "archive",
    positioning: "A catalogue of North and West African rug traditions.",
    context:
      "Looms, fibres, motifs, and the weavers who keep them. Indexed by region, technique, and lineage."
  },
  {
    slug: "tazmgha",
    name: "Tazmgha",
    url: "https://tazmgha.africa",
    tier: "archive",
    positioning: "The Amazigh thread, across the continent.",
    context:
      "From the Atlas to the Sahel. The Amazigh world held in one place."
  }
];

export function byTier(tier: Tier): Property[] {
  return PORTFOLIO.filter((p) => p.tier === tier);
}

export function getProperty(slug: string): Property | undefined {
  return PORTFOLIO.find((p) => p.slug === slug);
}
