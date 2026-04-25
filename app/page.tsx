"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

// Lazy-load modal (avoids SSR issues with portal / body scroll lock)
const LeadCaptureForm = dynamic(() => import("@/components/LeadCaptureForm"), {
  ssr: false,
});

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Back-to-top visibility
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="animate-fade-in">
      {/* Navigation */}
      <Navbar onDemoClick={openModal} />

      {/* Page Sections */}
      <main>
        <HeroSection onDemoClick={openModal} />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ProgramsSection />
        <TestimonialsSection />
        <PartnersSection />

        {/* CTA Banner before footer */}
        <section className="py-20 bg-gradient-to-r from-[#1340a8] via-[#1a56db] to-[#2563eb]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join 500+ enterprises upskilling their teams with Accredian&apos;s platform. Get a personalized demo today.
            </p>
            <button
              id="cta-banner-demo-btn"
              onClick={openModal}
              className="px-8 py-4 rounded-xl bg-white text-[#1a56db] font-bold text-base shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-200 active:scale-95 inline-flex items-center gap-2"
            >
              Get Your Free Demo
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Lead Capture Modal */}
      <LeadCaptureForm isOpen={isModalOpen} onClose={closeModal} />

      {/* Back to Top */}
      <button
        id="back-to-top-btn"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-[#1a56db] to-[#3b82f6] text-white shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}
