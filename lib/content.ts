import { getIndex, getArticleBySlug as readerGetArticle } from "@/lib/content-reader";

export type PlaceholderSection = {
  heading: string;
  body: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  updatedAt: string;
  featured: boolean;
  tags: string[];
  placeholderSections: PlaceholderSection[];
  image?: string;
  description?: string;
  date?: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  href: string;
};

export const siteNavigation = [
  { label: "Home", href: "/" },
  { label: "Flight Deals", href: "/#feature-cards" },
  { label: "Destinations", href: "/#article-index" },
  { label: "Road Trips", href: "/#feature-cards" },
  { label: "Tips & Hacks", href: "/#latest-articles" },
  { label: "About", href: "/#about" },
] as const;

export const featureCards: FeatureCard[] = [
  {
    title: "Flight Hacks",
    description:
      "Practical ways to search smarter, time price drops, and avoid hidden airline fees in a high-fare summer.",
    href: "/articles/how-to-find-cheap-flights-in-2026",
  },
  {
    title: "Cheapest Destinations",
    description:
      "Find cities, parks, and beach escapes that still feel like a vacation without crushing a family budget.",
    href: "/articles/10-cheapest-us-destinations-for-summer-2026",
  },
  {
    title: "Road Trip Tips",
    description:
      "Stretch every gas stop, campsite, motel night, and national park pass with a smarter summer route.",
    href: "/articles/budget-road-trip-planning-guide",
  },
  {
    title: "Travel Credit Cards",
    description:
      "Compare cashback and points options that can actually offset summer travel costs for real-world trips.",
    href: "/articles/best-travel-credit-cards-2026",
  },
];

export async function getAllArticles(): Promise<Article[]> {
  const index = await getIndex();
  const articles = await Promise.all(
    index.articles.map((entry: any) => readerGetArticle(entry.slug))
  );
  return articles.filter((a): a is Article => a !== null);
}

export async function getLatestArticles(): Promise<Article[]> {
  const all = await getAllArticles();
  return all.slice(0, 3);
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return (await readerGetArticle(slug)) ?? undefined;
}

export async function getArticleParams(): Promise<Array<{ slug: string }>> {
  const all = await getAllArticles();
  return all.map((article) => ({ slug: article.slug }));
}

export async function getRelatedArticles(slug: string): Promise<Article[]> {
  const all = await getAllArticles();
  return all.filter((article) => article.slug !== slug).slice(0, 3);
}
