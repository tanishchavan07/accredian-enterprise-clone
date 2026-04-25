import { stats } from "@/data/mockData";

const ICONS = ["🏢", "✅", "🧑‍🏫", "🎓"];

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative py-20 bg-gradient-to-r from-[#1340a8] via-[#1a56db] to-[#2563eb] overflow-hidden"
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/5 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                {ICONS[idx]}
              </div>
              <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm sm:text-base text-blue-100 font-medium leading-snug max-w-[140px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
