import { programs } from "@/data/mockData";

const TAG_COLORS: Record<string, string> = {
  Python: "bg-yellow-50 text-yellow-700 border-yellow-200",
  ML: "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Deep Learning": "bg-purple-50 text-purple-700 border-purple-200",
  Strategy: "bg-green-50 text-green-700 border-green-200",
  Roadmapping: "bg-teal-50 text-teal-700 border-teal-200",
  Agile: "bg-cyan-50 text-cyan-700 border-cyan-200",
  MLOps: "bg-pink-50 text-pink-700 border-pink-200",
  PyTorch: "bg-orange-50 text-orange-700 border-orange-200",
  Kubernetes: "bg-blue-50 text-blue-700 border-blue-200",
  SQL: "bg-violet-50 text-violet-700 border-violet-200",
  Tableau: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Statistics: "bg-sky-50 text-sky-700 border-sky-200",
  React: "bg-cyan-50 text-cyan-700 border-cyan-200",
  "Node.js": "bg-green-50 text-green-700 border-green-200",
  AWS: "bg-amber-50 text-amber-700 border-amber-200",
  Leadership: "bg-rose-50 text-rose-700 border-rose-200",
  Executive: "bg-slate-50 text-slate-700 border-slate-200",
};

function getTagClass(tag: string): string {
  return TAG_COLORS[tag] ?? "bg-gray-50 text-gray-700 border-gray-200";
}

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1a56db] text-xs font-semibold uppercase tracking-widest mb-4">
            Our Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Our Programs
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Co-created with India&apos;s premier institutions, delivering real-world outcomes for enterprise teams.
          </p>
        </div>

        {/* Program Cards — horizontal scroll on mobile, 3-col grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible snap-x snap-mandatory lg:snap-none scrollbar-hide">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group flex-shrink-0 w-[300px] sm:w-[340px] lg:w-auto snap-start bg-white rounded-2xl border border-slate-100 p-6 card-lift flex flex-col"
            >
              {/* University Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1a56db] to-[#3b82f6] flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-bold">
                    {program.university.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                  </span>
                </div>
                <span className="text-sm font-semibold text-[#1a56db]">
                  {program.university}
                </span>
              </div>

              {/* Program Name */}
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                {program.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {program.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getTagClass(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta + CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <span>⏱</span> {program.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <span>👥</span> {program.enrolled} enrolled
                  </span>
                </div>
                <button
                  id={`program-learn-more-${program.id}`}
                  className="text-xs font-semibold text-[#1a56db] hover:text-[#1340a8] flex items-center gap-1 transition-colors"
                >
                  Learn More
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
