const STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "Our enterprise consultants conduct a deep-dive to map your team's skill gaps, business goals, and learning culture.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Program Design",
    description:
      "We co-create a curriculum tailored to your specific tech stack, team size, and organizational objectives.",
    icon: "📐",
  },
  {
    number: "03",
    title: "Live Cohort Launch",
    description:
      "Teams learn together in synchronized cohorts with live mentors, capstone projects, and real-time analytics.",
    icon: "🚀",
  },
  {
    number: "04",
    title: "ROI Reporting",
    description:
      "Get detailed impact reports covering completion rates, performance uplift, and business outcomes.",
    icon: "📊",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1a56db] text-xs font-semibold uppercase tracking-widest mb-4">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A simple 4-step process from your first call to a measurable impact report.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connector (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1a56db]/20 via-[#1a56db] to-[#1a56db]/20"
            style={{ top: "2.5rem" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {STEPS.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Vertical connector (mobile/tablet) */}
                {idx < STEPS.length - 1 && (
                  <div
                    className="lg:hidden absolute left-1/2 -translate-x-1/2 top-[5.5rem] w-0.5 h-12 bg-gradient-to-b from-[#1a56db] to-[#1a56db]/20"
                    aria-hidden="true"
                  />
                )}

                {/* Number circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-white border-4 border-[#1a56db] flex flex-col items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition-transform">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="text-[10px] font-bold text-[#1a56db] tracking-widest">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[220px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
