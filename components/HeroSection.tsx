"use client";

import { stats } from "@/data/mockData";

interface HeroSectionProps {
  onDemoClick: () => void;
}

export default function HeroSection({ onDemoClick }: HeroSectionProps) {
  const scrollToPrograms = () => {
    const el = document.getElementById("programs");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden hero-bg pt-16"
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #1a56db 0%, #3b82f6 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-24 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #f97316 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Grid dots texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(#1a56db 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1a56db] animate-pulse" />
            <span className="text-xs font-semibold text-[#1a56db] tracking-wide uppercase">
              India&apos;s Most Trusted Enterprise Learning Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
            Upskill Your{" "}
            <span className="brand-gradient-text">Workforce</span>{" "}
            at Scale
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in-2 text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
            Partner with IITs, IIMs, and global universities to upskill your
            enterprise teams with curated programs, live mentorship, and
            real-time analytics that deliver measurable ROI.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-3 flex flex-wrap gap-4 mb-16">
            <button
              id="hero-demo-btn"
              onClick={onDemoClick}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#1a56db] to-[#3b82f6] text-white font-semibold text-base shadow-lg hover:shadow-xl hover:from-[#1340a8] hover:to-[#2563eb] transition-all duration-200 active:scale-95 flex items-center gap-2"
            >
              <span>Get a Demo</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
            <button
              id="hero-explore-btn"
              onClick={scrollToPrograms}
              className="px-7 py-3.5 rounded-xl border-2 border-[#1a56db] text-[#1a56db] font-semibold text-base bg-white hover:bg-blue-50 transition-all duration-200 active:scale-95"
            >
              Explore Programs
            </button>
          </div>

          {/* Stats Row */}
          <div className="animate-fade-in-4 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div key={stat.id} className={`animate-fade-in-${Math.min(idx + 1, 4)}`}>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#1a56db]">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 mt-0.5 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating enterprise cards — decorative */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-80 space-y-4 animate-fade-in-4">
        {[
          { label: "Completion Rate", value: "94%", icon: "📈", color: "from-blue-500 to-blue-600" },
          { label: "Active Learners", value: "12,400+", icon: "👥", color: "from-orange-400 to-orange-500" },
          { label: "Programs Active", value: "150+", icon: "🎓", color: "from-violet-500 to-violet-600" },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-4"
            style={{ animationDelay: `${0.4 + i * 0.15}s` }}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-xl shadow-sm`}
            >
              {card.icon}
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">{card.label}</p>
              <p className="text-xl font-extrabold text-slate-900">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
