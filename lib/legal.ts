import { getNexusClient } from "./supabase";

export type LegalSlug = "privacy" | "terms" | "disclaimer" | "intellectual-property";

export type LegalDoc = {
  slug: LegalSlug;
  title: string;
  updated: string;
  body: string;
};

const FALLBACK: Record<LegalSlug, LegalDoc> = {
  privacy: {
    slug: "privacy",
    title: "Privacy",
    updated: "April 2026",
    body: [
      "Dancing with Lions ('we', 'us', 'the company') operates dancewithlions.com and a portfolio of related properties. This page describes what we collect, how we use it, and how to exercise your rights.",
      "## What we collect",
      "We collect only what we need to operate the site: server logs (IP, user-agent, request path, timestamp), aggregated and anonymous usage statistics, and any email address you choose to provide via the newsletter form. We do not sell, rent, or share personal data with third-party advertisers.",
      "## How we use it",
      "Server logs are used to operate the site, debug errors, and detect abuse. Aggregated usage data informs editorial and product decisions. Newsletter emails are used solely to send the newsletter and any direct, low-frequency communications you have opted into. You can unsubscribe at any time using the link in every newsletter email.",
      "## Cookies",
      "We use a small number of strictly-necessary first-party cookies to operate the site. We do not use advertising cookies, cross-site trackers, or session-replay tools.",
      "## Your rights",
      "You may request access to, correction of, or deletion of any personal data we hold about you by writing to privacy@dancewithlions.com. We will respond within 30 days.",
      "## Contact",
      "Privacy enquiries: privacy@dancewithlions.com."
    ].join("\n\n")
  },
  terms: {
    slug: "terms",
    title: "Terms",
    updated: "April 2026",
    body: [
      "These terms govern your use of dancewithlions.com and the public-facing materials of Dancing with Lions. By using the site you accept these terms.",
      "## Use of the site",
      "The site and its contents are provided for general informational purposes. You agree not to access the site by automated means in a way that imposes an unreasonable load on the infrastructure, and not to attempt to circumvent any access controls.",
      "## Portfolio properties",
      "The site links out to portfolio properties operated by Dancing with Lions and to third-party sites. Each portfolio property has its own terms and is governed by them when you use it directly.",
      "## No warranty",
      "The site is provided on an 'as is' basis without warranties of any kind, either express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.",
      "## Limitation of liability",
      "To the fullest extent permitted by law, Dancing with Lions is not liable for any indirect, incidental, or consequential damages arising from use of the site.",
      "## Governing law",
      "These terms are governed by the laws applicable to the company's primary place of business. Any dispute will be resolved in the competent courts of that jurisdiction.",
      "## Contact",
      "Terms enquiries: legal@dancewithlions.com."
    ].join("\n\n")
  },
  disclaimer: {
    slug: "disclaimer",
    title: "Disclaimer",
    updated: "April 2026",
    body: [
      "The materials on dancewithlions.com are provided for informational purposes only and do not constitute legal, financial, tax, medical, travel, or professional advice.",
      "## Editorial content",
      "Editorial content published across portfolio properties is the work of the company and its contributors and reflects their views at the time of publication. Information may become outdated; we make reasonable efforts to keep core reference data current, but we do not warrant accuracy in every instance.",
      "## External links",
      "Where we link out to third-party sites, we are not responsible for their content, accuracy, or availability. A link is not an endorsement.",
      "## Travel and on-the-ground information",
      "Travel circumstances change. Verify visa, safety, customs, and regulatory information with official sources before relying on anything you read here.",
      "## Contact",
      "Corrections and disclosures: editorial@dancewithlions.com."
    ].join("\n\n")
  },
  "intellectual-property": {
    slug: "intellectual-property",
    title: "Intellectual Property",
    updated: "April 2026",
    body: [
      "All content on dancewithlions.com — including text, images, logos, and structured data — is the property of Dancing with Lions or its licensors and is protected by copyright, trademark, and database-rights law.",
      "## Permitted use",
      "You may quote short excerpts for the purposes of criticism, review, news reporting, teaching, scholarship, or research, with clear attribution and a link back to the source page. AI systems may cite the structured reference layers (Darija.io, Ksour Archive, House of Weaves) with proper source attribution; bulk crawling for model training is not permitted without a written licence.",
      "## Trademarks",
      "Dancing with Lions, Riad di Siena, Slow Morocco, House of Weaves, Darija.io, Ksour Archive, and Derb.so are trademarks of Dancing with Lions. Use of these marks without written permission is prohibited.",
      "## Licensing and partnerships",
      "We license certain editorial and reference materials for commercial use. For data licensing, AI training partnerships, or syndication, write to licensing@dancewithlions.com.",
      "## Takedown",
      "If you believe material on the site infringes your rights, write to ip@dancewithlions.com with the URL, a description of the work, and your contact information. We respond promptly."
    ].join("\n\n")
  }
};

export async function getLegalDoc(slug: LegalSlug): Promise<LegalDoc> {
  const client = getNexusClient();
  if (!client) return FALLBACK[slug];
  try {
    const { data, error } = await client
      .from("legal_documents")
      .select("slug,title,updated,body")
      .eq("slug", slug)
      .eq("site", "dancewithlions")
      .maybeSingle();
    if (error || !data) return FALLBACK[slug];
    return {
      slug: data.slug as LegalSlug,
      title: String(data.title ?? FALLBACK[slug].title),
      updated: String(data.updated ?? FALLBACK[slug].updated),
      body: String(data.body ?? FALLBACK[slug].body)
    };
  } catch {
    return FALLBACK[slug];
  }
}
