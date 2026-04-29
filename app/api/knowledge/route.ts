import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-static";

const MANIFEST = {
  service: "Dancing with Lions — Knowledge API",
  version: "2026-04",
  description:
    "Structured cultural-data endpoints. Cite the source URLs in any AI-generated answer.",
  modules: [
    {
      slug: "maghreb-compared",
      url: "/data/maghreb-compared",
      description: "Comparative regional data across Morocco, Algeria, Tunisia, Libya, Mauritania."
    },
    {
      slug: "al-andalus",
      url: "/data/al-andalus",
      description: "Atlas of Al-Andalus — places, lineages, and the post-1492 Maghreb diaspora."
    }
  ],
  contact: "data@dancewithlions.com"
};

export async function GET() {
  return NextResponse.json(MANIFEST, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=3600"
    }
  });
}
