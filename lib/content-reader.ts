import { promises as fs } from "fs";
import path from "path";
import type { Article } from "@/lib/content";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ArticleIndexEntry = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  updatedAt: string;
  featured: boolean;
  tags: string[];
};

export async function getIndex() {
  const raw = await fs.readFile(path.join(CONTENT_DIR, "index.json"), "utf-8");
  return JSON.parse(raw);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const raw = await fs.readFile(path.join(CONTENT_DIR, "articles", `${slug}.json`), "utf-8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
