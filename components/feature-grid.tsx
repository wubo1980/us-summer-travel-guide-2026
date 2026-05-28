import Link from "next/link";

import type { FeatureCard } from "@/lib/content";

type FeatureGridProps = {
  cards: FeatureCard[];
};

/**
 * 渲染首页主题功能卡片。
 */
export function FeatureGrid({ cards }: FeatureGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => (
        <Link
          key={card.title}
          href={card.href}
          className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_70px_-40px_rgba(37,99,235,0.35)]"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
            0{index + 1}
          </span>
          <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl font-bold text-slate-950">
            {card.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {card.description}
          </p>
          <span className="mt-6 inline-flex text-sm font-semibold text-blue-600 transition group-hover:translate-x-1">
            Explore topic
          </span>
        </Link>
      ))}
    </div>
  );
}
