import { ArticleCard } from "@/components/article-card";
import { FeatureGrid } from "@/components/feature-grid";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { articles, featureCards, getLatestArticles } from "@/lib/content";

/**
 * 渲染站点首页。
 */
export default function Home() {
  const latestArticles = getLatestArticles();

  return (
    <div className="min-h-screen bg-transparent text-slate-950">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <HeroSection />

        <section
          id="feature-cards"
          className="rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-10 sm:px-8"
        >
          <div className="mb-8 flex max-w-3xl flex-col gap-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-blue-700 uppercase">
              Core topics
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">
              Four fast paths to saving money on summer travel.
            </h2>
            <p className="text-sm leading-7 text-slate-600">
              Start with the area that hurts your budget most: flights,
              destinations, road trips, or travel card strategy.
            </p>
          </div>
          <FeatureGrid cards={featureCards} />
        </section>

        <section id="latest-articles" className="grid gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase">
              Latest posts
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">
              The newest placeholder guides ready for expansion.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section
          id="article-index"
          className="rounded-[2rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_20px_70px_-50px_rgba(15,23,42,0.35)] sm:px-8"
        >
          <div className="mb-8 flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
              Launch collection
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">
              All eight launch topics for the first version of the site.
            </h2>
            <p className="max-w-3xl text-sm leading-7 text-slate-600">
              These pages are intentionally light, structured placeholders that
              establish routing, SEO-friendly topic coverage, and a clear content
              map for future expansion.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
