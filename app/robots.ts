import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "CCBot",
  "Bytespider",
  "DuckAssistBot",
  "YouBot",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "FacebookBot",
  "MistralAI-User",
  "cohere-ai",
  "Diffbot"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: [] },
      ...AI_CRAWLERS.map((ua) => ({ userAgent: ua, allow: "/", disallow: [] }))
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
