import { testimonials } from "@/data/mockData";

const AVATAR_COLORS = [
  "from-[#1a56db] to-[#3b82f6]",
  "from-[#f97316] to-[#ea6c0a]",
  "from-[#7c3aed] to-[#6d28d9]",
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1a56db] text-xs font-semibold uppercase tracking-widest mb-4">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Trusted by L&amp;D Leaders
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            See how enterprise teams across India and beyond are transforming their talent.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className="group bg-white rounded-2xl border border-slate-100 p-8 card-lift flex flex-col relative overflow-hidden"
            >
              {/* Subtle top accent */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${AVATAR_COLORS[idx]} opacity-80`}
              />

              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-[#1a56db]/15 mb-6 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              {/* Quote */}
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base flex-1 mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${AVATAR_COLORS[idx]} flex items-center justify-center flex-shrink-0 shadow-sm`}
                >
                  <span className="text-white font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
