import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

type Priority = 0.3 | 0.5 | 0.6 | 0.8 | 1.0;
type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type Entry = { path: string; priority: Priority; changeFrequency: ChangeFreq };

const ROUTES: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/data", priority: 0.5, changeFrequency: "monthly" },
  { path: "/data/maghreb-compared", priority: 0.5, changeFrequency: "monthly" },
  { path: "/data/al-andalus", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
  { path: "/intellectual-property", priority: 0.3, changeFrequency: "yearly" }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority
  }));
}
