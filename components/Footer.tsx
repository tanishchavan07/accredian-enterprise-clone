import { programs } from "@/data/mockData";

const COMPANY_LINKS = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/accredian",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1a56db] to-[#3b82f6] flex items-center justify-center shadow">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-bold text-lg">Accredian Enterprise</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              India&apos;s most trusted enterprise learning platform — co-created with IITs, IIMs, and global universities to upskill your workforce at scale.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#1a56db] flex items-center justify-center transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
              Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p.id}>
                  <a
                    href="#programs"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:enterprise@accredian.com"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <span>✉️</span> enterprise@accredian.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/accredian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <span>💼</span> LinkedIn
                </a>
              </li>
              <li>
                <p className="text-sm text-slate-400 flex items-center gap-2">
                  <span>📍</span> Bengaluru, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Accredian Enterprise. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
