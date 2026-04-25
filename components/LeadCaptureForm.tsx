"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface LeadCaptureFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  skillArea: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  company: "",
  teamSize: "",
  skillArea: "",
  message: "",
};

const TEAM_SIZES = ["10-50", "50-200", "200-500", "500+"];
const SKILL_AREAS = ["Data Science", "Product", "Engineering", "Leadership", "Other"];

export default function LeadCaptureForm({ isOpen, onClose }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Partial<FormData>>({});
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus first input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    },
    []
  );

  const validate = (): boolean => {
    const errors: Partial<FormData> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2)
      errors.name = "Full name is required (min 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      errors.email = "Please enter a valid work email.";
    if (!formData.company.trim() || formData.company.trim().length < 2)
      errors.company = "Company name is required.";
    if (!formData.teamSize) errors.teamSize = "Please select a team size.";
    if (!formData.skillArea) errors.skillArea = "Please select a skill area.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await res.json()) as { success: boolean; error?: string };

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFormData(INITIAL_FORM);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  const handleClose = () => {
    if (status === "submitting") return;
    setStatus("idle");
    setErrorMsg("");
    setFieldErrors({});
    setFormData(INITIAL_FORM);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Panel */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        {/* Header gradient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#1a56db] via-[#3b82f6] to-[#f97316]" />

        <div className="px-6 pt-6 pb-8 sm:px-8">
          {/* Close button */}
          <button
            id="modal-close-btn"
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {status === "success" ? (
            /* ─── SUCCESS STATE ─── */
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                You&apos;re all set! 🎉
              </h2>
              <p className="text-slate-600 mb-8">
                Thank you! Our enterprise team will reach out within{" "}
                <strong className="text-slate-900">24 hours</strong> to schedule your discovery call.
              </p>
              <button
                id="modal-success-close-btn"
                onClick={handleClose}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1a56db] to-[#3b82f6] text-white font-semibold hover:from-[#1340a8] hover:to-[#2563eb] transition-all"
              >
                Back to Homepage
              </button>
            </div>
          ) : (
            /* ─── FORM STATE ─── */
            <>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a56db] to-[#3b82f6] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <span className="text-xs font-semibold text-[#1a56db] uppercase tracking-widest">
                    Accredian Enterprise
                  </span>
                </div>
                <h2 id="modal-title" className="text-2xl font-extrabold text-slate-900 mt-3">
                  Get a Personalized Demo
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Tell us about your team and we&apos;ll design a tailored learning roadmap for you.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <p className="text-sm text-red-700">{errorMsg}</p>
                </div>
              )}

              <form id="lead-capture-form" onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lead-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={firstInputRef}
                      id="lead-name"
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                        fieldErrors.name
                          ? "border-red-400 focus:ring-red-400/30"
                          : "border-slate-200 focus:ring-[#1a56db]/30 focus:border-[#1a56db]"
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="text-xs text-red-500 mt-1">{fieldErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lead-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                        fieldErrors.email
                          ? "border-red-400 focus:ring-red-400/30"
                          : "border-slate-200 focus:ring-[#1a56db]/30 focus:border-[#1a56db]"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-red-500 mt-1">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="lead-company" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lead-company"
                    name="company"
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                      fieldErrors.company
                        ? "border-red-400 focus:ring-red-400/30"
                        : "border-slate-200 focus:ring-[#1a56db]/30 focus:border-[#1a56db]"
                    }`}
                  />
                  {fieldErrors.company && (
                    <p className="text-xs text-red-500 mt-1">{fieldErrors.company}</p>
                  )}
                </div>

                {/* Team Size & Skill Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lead-teamSize" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Team Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="lead-teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:bg-white transition-all appearance-none cursor-pointer ${
                        fieldErrors.teamSize
                          ? "border-red-400 focus:ring-red-400/30"
                          : "border-slate-200 focus:ring-[#1a56db]/30 focus:border-[#1a56db]"
                      } ${!formData.teamSize ? "text-slate-400" : ""}`}
                    >
                      <option value="" disabled>
                        Select team size
                      </option>
                      {TEAM_SIZES.map((size) => (
                        <option key={size} value={size} className="text-slate-900">
                          {size} employees
                        </option>
                      ))}
                    </select>
                    {fieldErrors.teamSize && (
                      <p className="text-xs text-red-500 mt-1">{fieldErrors.teamSize}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lead-skillArea" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Primary Skill Area <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="lead-skillArea"
                      name="skillArea"
                      value={formData.skillArea}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:bg-white transition-all appearance-none cursor-pointer ${
                        fieldErrors.skillArea
                          ? "border-red-400 focus:ring-red-400/30"
                          : "border-slate-200 focus:ring-[#1a56db]/30 focus:border-[#1a56db]"
                      } ${!formData.skillArea ? "text-slate-400" : ""}`}
                    >
                      <option value="" disabled>
                        Select skill area
                      </option>
                      {SKILL_AREAS.map((area) => (
                        <option key={area} value={area} className="text-slate-900">
                          {area}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.skillArea && (
                      <p className="text-xs text-red-500 mt-1">{fieldErrors.skillArea}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="lead-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message{" "}
                    <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="lead-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your learning goals or timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a56db]/30 focus:border-[#1a56db] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  id="lead-submit-btn"
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1a56db] to-[#3b82f6] text-white font-semibold text-sm shadow-md hover:shadow-lg hover:from-[#1340a8] hover:to-[#2563eb] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span>Submitting…</span>
                    </>
                  ) : (
                    <>
                      <span>Request My Demo</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  🔒 Your data is safe with us. No spam, ever.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
