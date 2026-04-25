import { partners } from "@/data/mockData";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1a56db] text-xs font-semibold uppercase tracking-widest mb-4">
            Academic Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Certified by India&apos;s Best Institutions
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Our programs carry the prestige of IITs, IIMs, and other premier institutions trusted by industry worldwide.
          </p>
        </div>

        {/* Partner Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex flex-col items-center justify-center gap-1.5 px-4 py-5 rounded-2xl border-2 border-[#1a56db]/20 bg-blue-50/30 hover:border-[#1a56db] hover:bg-blue-50 transition-all duration-300 cursor-default card-lift text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a56db] to-[#3b82f6] flex items-center justify-center shadow-sm mb-1 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xs font-bold leading-tight text-center">
                  {partner.abbreviation.split(" ")[0]}
                </span>
              </div>
              <p className="font-bold text-[#1a56db] text-sm leading-none">
                {partner.abbreviation}
              </p>
              <p className="text-xs text-slate-500 leading-snug">{partner.name}</p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-100 text-center">
          <p className="text-slate-700 text-base font-medium">
            🏅 All Accredian Enterprise certifications carry the recognized seal of India&apos;s premier institutions — backed by NAAC &amp; NBA accreditation frameworks.
          </p>
        </div>
      </div>
    </section>
  );
}
