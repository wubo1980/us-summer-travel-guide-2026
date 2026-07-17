import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/article-card";
import { SiteHeader } from "@/components/site-header";
import {
  getArticleBySlug,
  getArticleParams,
  getRelatedArticles,
} from "@/lib/content";

/**
 * 为文章占位页生成静态参数。
 */
export async function generateStaticParams() {
  return await getArticleParams();
}

/**
 * 为文章占位页生成基础元信息。
 */
export async function generateMetadata(
  props: PageProps<"/articles/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article not found | Summer Budget Travel 2026",
    };
  }

  return {
    title: `${article.title} | Summer Budget Travel 2026`,
    description: article.excerpt,
  };
}

/**
 * 渲染文章占位详情页。
 */
export default async function ArticlePage(
  props: PageProps<"/articles/[slug]">,
) {
  const { slug } = await props.params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(article.slug);

  return (
    <div className="min-h-screen bg-transparent text-slate-950">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_20px_70px_-50px_rgba(15,23,42,0.35)] sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-blue-700 uppercase">
              {article.category}
            </span>
            <span className="text-xs text-slate-500">{article.readTime}</span>
            <span className="text-xs text-slate-500">Updated {article.updatedAt}</span>
          </div>
          <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-heading)] text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            {article.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          {article.image && (
            <div className="mt-8 overflow-hidden rounded-2xl">
              <Image
                src={article.image}
                alt={article.title + " - travel insurance and trip planning"}
                width={800}
                height={450}
                className="h-auto w-full object-cover"
              />
            </div>
          )}
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-orange-100 bg-orange-50/70 p-5">
            <p className="text-xs font-semibold tracking-[0.16em] text-orange-600 uppercase">
              Placeholder article
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              This page is a structured launch placeholder. It establishes the
              route, topic framing, and editorial direction while full article
              drafts are still being expanded.
            </p>
          </div>
        </section>

        <section className="grid gap-5">
          {article.placeholderSections.map((section) => (
            <article
              key={section.heading}
              className="rounded-[1.75rem] border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_60px_-48px_rgba(15,23,42,0.35)] sm:px-8"
            >
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-slate-950">
                {section.heading}
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600">
                {section.body}
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Keep exploring
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">
                More launch topics from the same site.
              </h2>
            </div>
            <Link
              href="/"
              className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Back to homepage
            </Link>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
