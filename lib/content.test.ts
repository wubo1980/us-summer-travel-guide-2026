import { describe, expect, it } from "vitest";

import {
  articles,
  getArticleBySlug,
  getArticleParams,
  getLatestArticles,
  getRelatedArticles,
} from "./content";

/**
 * 验证文章内容辅助函数的输出。
 */
describe("content helpers", () => {
  it("returns exactly three latest articles for the homepage", () => {
    expect(getLatestArticles()).toHaveLength(3);
    expect(getLatestArticles().map((article) => article.slug)).toEqual(
      articles.slice(0, 3).map((article) => article.slug),
    );
  });

  it("resolves an article by slug", () => {
    const article = getArticleBySlug("how-to-find-cheap-flights-in-2026");

    expect(article?.title).toBe("How to Find Cheap Flights in 2026");
  });

  it("returns static params for all article routes", () => {
    expect(getArticleParams()).toHaveLength(articles.length);
    expect(getArticleParams()[0]).toHaveProperty("slug");
  });

  it("excludes the current article from related results", () => {
    const currentSlug = articles[0].slug;
    const relatedArticles = getRelatedArticles(currentSlug);

    expect(relatedArticles).toHaveLength(3);
    expect(relatedArticles.some((article) => article.slug === currentSlug)).toBe(
      false,
    );
  });
});
