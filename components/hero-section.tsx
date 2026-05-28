import Link from "next/link";

/**
 * 渲染首页核心 Hero 区域。
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_36%),radial-gradient(circle_at_right,_rgba(249,115,22,0.22),_transparent_30%),linear-gradient(135deg,_#ffffff,_#eff6ff_58%,_#fff7ed)] px-6 py-16 shadow-[0_24px_90px_-40px_rgba(37,99,235,0.5)] sm:px-10 lg:px-14 lg:py-20">
      <div className="absolute inset-y-8 right-8 hidden w-72 rounded-full bg-blue-200/20 blur-3xl lg:block" />
      <div className="relative grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-blue-700 uppercase shadow-sm">
            2026 Summer Travel on a Budget
          </div>
          <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-heading)] text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Save Big, Travel Smart, and Keep Summer Trips Within Reach.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Spirit Airlines is gone. Airfare is at a 4-year high. Here&apos;s
            how to still afford your dream vacation with smarter routes,
            cheaper destinations, and practical planning.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#latest-articles"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
            >
              Read the Latest Guides
            </Link>
            <Link
              href="/#article-index"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Browse All Topics
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-xl shadow-blue-900/5 backdrop-blur">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Pressure Point
              </p>
              <p className="mt-3 text-3xl font-bold text-slate-950">77%</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                of Americans still want a summer trip, even with tighter
                budgets.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Cost Reality
              </p>
              <p className="mt-3 text-3xl font-bold text-slate-950">4-Year</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                high airfare is forcing families to rethink flights and trip
                length.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Site Promise
              </p>
              <p className="mt-3 text-3xl font-bold text-slate-950">Less $</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                More actionable advice on where to save without shrinking the
                experience.
              </p>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-orange-100 bg-orange-50/80 p-5">
            <p className="text-xs font-semibold tracking-[0.16em] text-orange-600 uppercase">
              Built for budget travelers
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Families of four, students, backpackers, and cautious middle-class
              travelers all need one thing in 2026: honest guidance that turns
              expensive headlines into affordable plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
