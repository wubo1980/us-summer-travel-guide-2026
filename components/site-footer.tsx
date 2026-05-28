/**
 * 渲染首页底部说明与信任信息。
 */
export function SiteFooter() {
  return (
    <footer
      id="about"
      className="rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-10 text-slate-200 sm:px-8"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-blue-300 uppercase">
            About this site
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">
            Independent budget travel coverage for the 2026 summer season.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Built in 2026 to help US travelers stretch every dollar on flights,
            road trips, destinations, and travel tools. Content is editorially
            independent and designed for practical decision-making.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">Monetization paths</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Amazon travel gear, travel credit card comparisons, and booking
              platform partnerships.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">Editorial stance</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Non-sponsored content, transparent affiliate intent, and a focus
              on useful travel value over hype.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
