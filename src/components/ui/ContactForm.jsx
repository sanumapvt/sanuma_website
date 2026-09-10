"use client";

import { useState } from "react";
import { Send, CheckCircle2, User, Mail, Phone, Building, MessageSquare, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable API response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#009688]/30 shadow-lg shadow-[#009688]/5 text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#009688]/10 text-[#009688] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
        </div>
        <h3 className="text-2xl font-extrabold text-[#172121] mb-3">
          Message Received Successfully
        </h3>
        <p className="text-base text-[#5F6868] max-w-md mx-auto leading-relaxed mb-8">
          Thank you for reaching out to Sanuma India Private Limited. Our executive leadership
          team in Ahmedabad will review your inquiry and respond within 24 business hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "", company: "", message: "" });
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/40 text-[#172121] hover:text-[#009688] transition-all cursor-pointer"
        >
          <span>Send Another Inquiry</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5EAEA] shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="mb-8">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#009688] mb-2 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Inquiry Form</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172121]">
          Send a Message to Sanuma
        </h2>
        <p className="mt-2 text-sm text-[#5F6868]">
          Provide your operational details and collaboration requirements below.
        </p>
      </div>

      {/* Name and Email Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#172121] mb-2">
            Full Name <span className="text-[#009688]">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#5F6868] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F7F9F9] border border-[#E5EAEA] text-sm text-[#172121] placeholder-[#5F6868]/60 focus:bg-white focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#172121] mb-2">
            Work Email <span className="text-[#009688]">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#5F6868] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F7F9F9] border border-[#E5EAEA] text-sm text-[#172121] placeholder-[#5F6868]/60 focus:bg-white focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] transition-all"
            />
          </div>
        </div>
      </div>

      {/* Phone and Company Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#172121] mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-[#5F6868] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 00000 00000"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F7F9F9] border border-[#E5EAEA] text-sm text-[#172121] placeholder-[#5F6868]/60 focus:bg-white focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-[#172121] mb-2">
            Company / Organization
          </label>
          <div className="relative">
            <Building className="w-4 h-4 text-[#5F6868] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Venture or Enterprise Name"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F7F9F9] border border-[#E5EAEA] text-sm text-[#172121] placeholder-[#5F6868]/60 focus:bg-white focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] transition-all"
            />
          </div>
        </div>
      </div>

      {/* Message Textarea */}
      <div className="mb-8">
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#172121] mb-2">
          Message &amp; Scope <span className="text-[#009688]">*</span>
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-[#5F6868] absolute left-3.5 top-3.5 pointer-events-none" />
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your venture, business problem, or collaboration goals..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F7F9F9] border border-[#E5EAEA] text-sm text-[#172121] placeholder-[#5F6868]/60 focus:bg-white focus:outline-none focus:border-[#009688] focus:ring-1 focus:ring-[#009688] transition-all resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-[#009688] text-white hover:bg-[#00796B] transition-all shadow-md hover:shadow-lg hover:shadow-[#009688]/20 active:scale-[0.99] cursor-pointer disabled:opacity-70"
      >
        {isSubmitting ? (
          <span>Transmitting inquiry...</span>
        ) : (
          <>
            <span>Submit Inquiry</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
