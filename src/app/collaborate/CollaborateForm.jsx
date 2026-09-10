"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

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
      <div className="p-8 sm:p-12 rounded-3xl bg-[#F7F9F9] border border-[#009688]/30 text-center">
        <div className="w-12 h-12 rounded-full bg-[#009688]/10 text-[#009688] flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-[#172121] mb-2">
          Message Received
        </h3>
        <p className="text-base text-[#5F6868] max-w-md mx-auto leading-relaxed mb-6">
          Thank you for reaching out. The Sanuma leadership team will review your
          collaboration proposal and respond promptly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-semibold text-[#009688] hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-bold uppercase tracking-wider text-[#172121] mb-2"
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
            className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E5EAEA] text-[#172121] placeholder-[#5F6868]/50 focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] text-sm transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-[#172121] mb-2"
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
            className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E5EAEA] text-[#172121] placeholder-[#5F6868]/50 focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] text-sm transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-bold uppercase tracking-wider text-[#172121] mb-2"
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
            className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E5EAEA] text-[#172121] placeholder-[#5F6868]/50 focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] text-sm transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="type"
            className="block text-xs font-bold uppercase tracking-wider text-[#172121] mb-2"
          >
            Engagement Model
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E5EAEA] text-[#172121] focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] text-sm transition-all"
          >
            <option value="New Venture Build">New Venture Build (Idea to Scale)</option>
            <option value="Scaling Existing Business">Scaling Existing Business</option>
            <option value="Systems & AI Architecture">Systems &amp; AI Integration</option>
            <option value="Strategic Partnership">Strategic Partnership</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wider text-[#172121] mb-2"
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
          className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E5EAEA] text-[#172121] placeholder-[#5F6868]/50 focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] text-sm transition-all"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        <span>Submit Collaboration Inquiry</span>
        <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );
}
