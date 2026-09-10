"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

export default function CollaborateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "New Venture Build",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful form handling
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#009688]/30 text-center shadow-sm">
        <div className="w-12 h-12 rounded-full bg-[#009688]/10 text-[#009688] flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#172121] mb-2">
          Inquiry Received
        </h3>
        <p className="text-sm sm:text-base text-[#5F6868] max-w-md mx-auto leading-relaxed mb-6">
          Thank you for reaching out. The Sanuma leadership team will review your
          collaboration proposal and respond promptly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs sm:text-sm font-semibold text-[#009688] hover:underline cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#172121] mb-1.5"
          >
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-[#E5EAEA] text-[#172121] placeholder-[#5F6868]/50 focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] text-base sm:text-sm transition-all shadow-2xs"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#172121] mb-1.5"
          >
            Work Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-[#E5EAEA] text-[#172121] placeholder-[#5F6868]/50 focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] text-base sm:text-sm transition-all shadow-2xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label
            htmlFor="company"
            className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#172121] mb-1.5"
          >
            Venture / Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Entity or Working Title"
            className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-[#E5EAEA] text-[#172121] placeholder-[#5F6868]/50 focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] text-base sm:text-sm transition-all shadow-2xs"
          />
        </div>

        <div>
          <label
            htmlFor="type"
            className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#172121] mb-1.5"
          >
            Engagement Model
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 pr-10 rounded-xl bg-white border border-[#E5EAEA] text-[#172121] focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] text-base sm:text-sm transition-all appearance-none cursor-pointer shadow-2xs truncate"
            >
              <option value="New Venture Build">New Venture Build (Idea to Scale)</option>
              <option value="Scaling Existing Business">Scaling Existing Business</option>
              <option value="Systems & AI Architecture">Systems &amp; AI Integration</option>
              <option value="Strategic Partnership">Strategic Partnership</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#5F6868]">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#172121] mb-1.5"
        >
          Tell Us About The Opportunity *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe the vision, current traction, or specific areas where you want Sanuma's systems, AI, and execution power."
          className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-white border border-[#E5EAEA] text-[#172121] placeholder-[#5F6868]/50 focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] text-base sm:text-sm transition-all shadow-2xs resize-y min-h-[100px]"
        />
      </div>

      {/* Fully Mobile-Responsive Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold bg-[#009688] hover:bg-[#00796B] text-white shadow-md hover:shadow-lg shadow-[#009688]/20 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
        >
          <span>Submit Collaboration Inquiry</span>
          <ArrowRight className="w-4 h-4 flex-shrink-0" />
        </button>
      </div>
    </form>
  );
}
