import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/content";

/**
 * Generates the sitemap.xml for the US Summer Travel Guide.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://us-summer-travel-guide-2026.vercel.app";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-05-30"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const articles = await getAllArticles();

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date("2026-05-30"),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages];
}
