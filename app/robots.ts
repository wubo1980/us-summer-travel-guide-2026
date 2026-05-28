import type { MetadataRoute } from "next";

/**
 * Generates the robots.txt for the US Summer Travel Guide.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://us-summer-travel-guide-2026.vercel.app/sitemap.xml",
  };
}
