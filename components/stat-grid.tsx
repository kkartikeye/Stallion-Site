import { stats } from "@/lib/site";

export function StatGrid() {
  return (
    <div className="grid w-full max-w-[560px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
      {stats.map((item) => (
        <div
          key={item.label}
          className="min-w-0 rounded-2xl border border-white/10 bg-white/10 px-5 py-5 backdrop-blur-md transition hover:bg-white/15 sm:px-6"
        >
          <div className="break-words text-sm font-semibold uppercase tracking-wide text-slate-200">
            {item.label}
          </div>

          <div className="mt-3 break-words text-2xl font-semibold leading-snug text-white sm:text-[2rem]">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
