"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionReveal";
import { BUILD_PHASES } from "@/lib/buildPhases";

export default function PhaseCardsList({ phases = BUILD_PHASES }) {
  // Mobile accordion state: null = all collapsed initially (or single active)
  const [activeMobileIdx, setActiveMobileIdx] = useState(null);

  const toggleMobilePhase = (idx) => {
    setActiveMobileIdx((curr) => (curr === idx ? null : idx));
  };

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {phases.map((phase, idx) => {
        const Icon = phase.icon;
        const isMobileOpen = activeMobileIdx === idx;

        return (
          <FadeIn key={phase.number} direction="up" delay={idx * 0.08}>
            {/* ============================================================ */}
            {/* DESKTOP / TABLET VIEW (md and up): Always Full 2-Col Display */}
            {/* ============================================================ */}
            <div className="hidden md:block p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/40 hover:shadow-xl hover:shadow-[#009688]/5 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column (5 cols) */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#009688]">
                      {phase.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#009688]/10 text-[#009688] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#009688] mb-1">
                    Phase {phase.number} · {phase.name}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#172121] mb-4">
                    {phase.subtitle}
                  </h3>
                  <p className="text-base text-[#5F6868] leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Right Column (7 cols) - Core Engineering Deliverables */}
                <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5EAEA]">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#172121] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#009688]" />
                    <span>Core Engineering Deliverables</span>
                  </div>
                  <ul className="space-y-3.5">
                    {phase.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#5F6868]">
                        <div className="w-5 h-5 rounded-md bg-[#009688]/10 text-[#009688] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ============================================================ */}
            {/* MOBILE VIEW (< md): Collapsible Accordion (Image 1 & Image 2) */}
            {/* ============================================================ */}
            <div className="block md:hidden">
              <div
                onClick={() => toggleMobilePhase(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
                  isMobileOpen
                    ? "border-[#009688]/40 bg-white shadow-md"
                    : "border-[#E5EAEA] bg-[#F7F9F9] hover:border-[#009688]/30"
                }`}
              >
                {/* Collapsed State Header (Exact Match to User Image 1) */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-3xl font-extrabold text-[#009688]">
                      {phase.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#009688]/10 text-[#009688] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  {/* Chevron Toggle */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isMobileOpen
                        ? "bg-[#009688] text-white rotate-180"
                        : "bg-white border border-[#E5EAEA] text-[#5F6868]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#009688] mt-3.5">
                  Phase {phase.number} · {phase.name}
                </div>
                <h3 className="text-xl font-bold text-[#172121] mt-1 leading-snug">
                  {phase.subtitle}
                </h3>

                {/* Expanded Content (Exact Match to User Image 2) */}
                <AnimatePresence initial={false}>
                  {isMobileOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      {/* Description */}
                      <p className="text-sm text-[#5F6868] leading-relaxed mt-4">
                        {phase.description}
                      </p>

                      {/* Core Engineering Deliverables Box */}
                      <div className="bg-white p-5 rounded-2xl border border-[#E5EAEA] mt-5">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#172121] flex items-center gap-2 mb-3.5">
                          <span className="w-2 h-2 rounded-full bg-[#009688]" />
                          <span>Core Engineering Deliverables</span>
                        </div>
                        <ul className="space-y-3">
                          {phase.deliverables.map((item, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-3 text-xs sm:text-sm text-[#5F6868]"
                            >
                              <div className="w-4 h-4 rounded bg-[#009688]/10 text-[#009688] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="w-3 h-3 stroke-[2.5]" />
                              </div>
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
