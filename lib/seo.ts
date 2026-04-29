import { PORTFOLIO } from "./portfolio";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://dancewithlions.com";

export const ORG_ID = `${SITE_URL}/#org`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_ID = `${SITE_URL}/about#founder`;

export const ORG_NAME = "Dancing with Lions";

const ORG_DESCRIPTION =
  "Travel tech company. Six product lines: host, write, teach, sell, measure, archive. One umbrella.";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: ORG_NAME,
    legalName: "Dancing with Lions",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/opengraph-image`,
    description: ORG_DESCRIPTION,
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Marrakech",
        addressCountry: "MA"
      }
    },
    founder: { "@id": FOUNDER_ID },
    sameAs: PORTFOLIO.filter((p) => p.url.startsWith("http")).map((p) => p.url)
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: ORG_NAME,
    url: SITE_URL,
    inLanguage: "en",
    description: ORG_DESCRIPTION,
    publisher: { "@id": ORG_ID }
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: "Jacqueline Ng",
    jobTitle: "Founder and Architect",
    nationality: { "@type": "Country", name: "Canada" },
    worksFor: { "@id": ORG_ID },
    homeLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Marrakech",
        addressCountry: "MA"
      }
    }
  };
}

export function portfolioCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/portfolio#collection`,
    url: `${SITE_URL}/portfolio`,
    name: "Portfolio — Dancing with Lions",
    description:
      "Fifteen properties across six tiers — host, write, teach, sell, measure, archive.",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    hasPart: PORTFOLIO.map((p) => ({
      "@type": "Brand",
      name: p.name,
      url: p.url,
      description: `${p.positioning} ${p.context}`.trim()
    }))
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#aboutpage`,
    url: `${SITE_URL}/about`,
    name: "About — Dancing with Lions",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": ORG_ID }
  };
}

export type BreadcrumbItem = { name: string; url: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}
