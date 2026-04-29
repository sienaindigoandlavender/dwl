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
      "Six rooms, real guests, a kitchen that runs every day. Everything we know about hospitality, we learned with the keys in our hand."
  },
  {
    slug: "derb-so",
    name: "Derb.so",
    url: "https://derb.so",
    tier: "host",
    positioning: "Streets, addresses, and the geography of the medina.",
    context:
      "A wayfinding layer for the medina — names, aliases, the small streets the standard maps miss. A reference for guests, operators, and travel platforms."
  },
  {
    slug: "hosh-space",
    name: "Hosh.space",
    url: "https://hosh.space",
    tier: "host",
    status: "In development",
    positioning: "Courtyards. Quiet stays.",
    context:
      "A short list of houses with courtyards, run the way Riad di Siena is run. In development."
  },

  // Write
  {
    slug: "slow-morocco",
    name: "Slow Morocco",
    url: "https://slowmorocco.com",
    tier: "write",
    positioning: "The country at a slower scale.",
    context:
      "Region, season, kitchen, lineage. Written slowly. Indexed for the long tail. Built for the reader past the first ten search results."
  },
  {
    slug: "derb37",
    name: "Derb37",
    url: "https://derb37.com",
    tier: "write",
    positioning: "Notes from the medina.",
    context:
      "A column written from inside the riad. Short, dated, observed. The same voice that writes Slow Morocco, with the volume turned down."
  },
  {
    slug: "darija-io",
    name: "Darija.io",
    url: "https://darija.io",
    tier: "write",
    positioning: "Moroccan Arabic, structured.",
    context:
      "A reference for Moroccan Darija — roots, derivations, audio, dialect notes. Built so a learner can speak in the language, and so AI systems can cite it."
  },
  {
    slug: "tamazight-io",
    name: "Tamazight.io",
    url: "https://tamazight.io",
    tier: "write",
    positioning: "Amazigh, structured.",
    context:
      "A companion to Darija.io for Tamazight. Same shape, different language. Built to be used."
  },

  // Sell
  {
    slug: "zfriti",
    name: "Zfriti",
    url: "https://zfriti.com",
    tier: "sell",
    positioning: "A Moroccan pantry.",
    context:
      "Olive oil, spices, preserved things. Only what we'd cook with. The cultural work makes sure we know what those are."
  },
  {
    slug: "tilwen",
    name: "Tilwen",
    url: "https://tilwen.com",
    tier: "sell",
    positioning: "A rug house.",
    context:
      "Rugs from North and West Africa, sourced where they're made and named where they come from. Catalogued before they're sold."
  },

  // Measure
  {
    slug: "hawazine",
    name: "Hawazine",
    url: "https://hawazine.com",
    tier: "measure",
    positioning: "Moroccan real estate, organized.",
    context:
      "Listings, prices, neighbourhoods, history. The way it should have been organized a decade ago."
  },
  {
    slug: "cadastre",
    name: "Cadastre",
    url: "https://hawazine.com",
    tier: "measure",
    status: "Working title",
    positioning: "The land layer.",
    context:
      "Parcels, ownership, deeds — the layer underneath Hawazine. Quiet infrastructure for the people who need to see clearly before they move."
  },
  {
    slug: "travel-intelligence",
    name: "Travel Intelligence",
    url: "/products",
    tier: "measure",
    status: "Future",
    positioning: "Reference data for travel operators.",
    context:
      "Comparative regional data, occupancy signals, source-of-truth records. Coming after Cadastre."
  },

  // Archive
  {
    slug: "ksour-archive",
    name: "Ksour Archive",
    url: "https://ksour.org",
    tier: "archive",
    positioning: "Saharan-Maghreb earthen architecture.",
    context:
      "Ksour, kasbahs, and the building traditions of the southern Maghreb. Survey, photography, structured records of a built environment that's changing fast."
  },
  {
    slug: "house-of-weaves",
    name: "House of Weaves",
    url: "https://houseofweaves.com",
    tier: "archive",
    positioning: "Rugs of North and West Africa.",
    context:
      "Looms, fibres, motifs, and the people who keep them. Indexed by region, technique, and lineage. The rugs only — for now."
  },
  {
    slug: "tazmgha",
    name: "Tazmgha",
    url: "https://tazmgha.africa",
    tier: "archive",
    positioning: "The Amazigh thread, across the continent.",
    context:
      "From the Atlas to the Sahel, the Amazigh world held in one place. Cite-ready. Not going anywhere."
  }
];

export function byTier(tier: Tier): Property[] {
  return PORTFOLIO.filter((p) => p.tier === tier);
}

export function getProperty(slug: string): Property | undefined {
  return PORTFOLIO.find((p) => p.slug === slug);
}
