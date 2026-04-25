import { features } from "@/data/mockData";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1a56db] text-xs font-semibold uppercase tracking-widest mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Everything L&amp;D Teams Need
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            One unified platform to design, deploy, and measure enterprise learning at any scale.
          </p>
        </div>

        {/* 4×2 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-2xl border border-slate-100 p-6 card-lift cursor-default"
            >
              {/* Subtle top highlight on hover */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#1a56db] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
