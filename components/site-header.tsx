import Link from "next/link";

import { siteNavigation } from "@/lib/content";

/**
 * 渲染站点顶部导航。
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20">
            SB
          </span>
          <div>
            <p className="font-[family-name:var(--font-heading)] text-sm font-semibold tracking-[0.16em] text-slate-900 uppercase">
              Summer Budget
            </p>
            <p className="text-xs text-slate-500">Travel Smart in 2026</p>
          </div>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 md:flex"
        >
          {siteNavigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#latest-articles"
          className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          Latest Guides
        </Link>
      </div>
    </header>
  );
}
