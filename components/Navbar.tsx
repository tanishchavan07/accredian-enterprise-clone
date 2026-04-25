"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Programs", href: "#programs" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Partners", href: "#partners" },
];

interface NavbarProps {
  onDemoClick: () => void;
}

export default function Navbar({ onDemoClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-50% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 select-none"
            aria-label="Accredian Enterprise Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a56db] to-[#3b82f6] flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-lg font-bold brand-gradient-text hidden sm:inline">
              Accredian Enterprise
            </span>
            <span className="text-lg font-bold brand-gradient-text sm:hidden">
              Accredian
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#1a56db] bg-blue-50"
                      : "text-slate-600 hover:text-[#1a56db] hover:bg-blue-50"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="navbar-demo-btn"
              onClick={onDemoClick}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#1a56db] to-[#3b82f6] text-white text-sm font-semibold shadow-sm hover:shadow-md hover:from-[#1340a8] hover:to-[#2563eb] transition-all duration-200 active:scale-95"
            >
              Get a Demo
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-[#1a56db] hover:bg-blue-50 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        {/* Drawer panel */}
        <div
          className={`absolute top-16 right-0 w-72 bg-white shadow-2xl rounded-bl-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="p-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href);
                  }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#1a56db] bg-blue-50"
                      : "text-slate-600 hover:text-[#1a56db] hover:bg-blue-50"
                  }`}
                >
                  {label}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <button
                id="mobile-demo-btn"
                onClick={() => {
                  setMobileOpen(false);
                  onDemoClick();
                }}
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#1a56db] to-[#3b82f6] text-white text-sm font-semibold shadow hover:from-[#1340a8] hover:to-[#2563eb] transition-all"
              >
                Get a Demo
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
