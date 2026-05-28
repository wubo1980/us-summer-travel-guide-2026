import Link from "next/link";

import type { Article } from "@/lib/content";

type ArticleCardProps = {
  article: Article;
};

/**
 * 渲染文章摘要卡片。
 */
export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.35)]">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-blue-700 uppercase">
          {article.category}
        </span>
        <span className="text-xs text-slate-500">{article.readTime}</span>
      </div>
      <h3 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold text-slate-950">
        {article.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{article.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs text-slate-500">Updated {article.updatedAt}</span>
        <Link
          href={`/articles/${article.slug}`}
          className="text-sm font-semibold text-orange-600 transition hover:text-orange-700"
        >
          Open placeholder page
        </Link>
      </div>
    </article>
  );
}
