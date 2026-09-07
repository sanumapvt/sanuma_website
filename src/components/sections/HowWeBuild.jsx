"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionReveal";

export default function HowWeBuild() {
  // Mobile accordion state: first phase open by default
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  const toggleMobilePhase = (idx) => {
    setActiveMobileIdx((curr) => (curr === idx ? null : idx));
  };

  return (
    <section id="how-we-build" className="py-24 sm:py-32 bg-[#FFFFFF] relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 sm:mb-20">
          <FadeIn direction="up">
            <SectionHeading
              label="How We Build"
              title="From idea to scale."
              subtitle="Every business we launch follows a deliberate, repeatable four-stage lifecycle engineered for resilience and scalable expansion."
            />
          </FadeIn>
          <FadeIn direction="left" delay={0.2} className="hidden lg:flex items-center gap-3">
            <Link
              href="/how-we-build"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#5F6868] hover:text-[#009688] transition-all whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#009688]" />
              <span>Explore Methodology</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* 4-Step Process Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative" staggerDelay={0.15}>
          {/* Animated Connecting Line on desktop */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-[2px] bg-gradient-to-r from-[#009688]/20 via-[#009688]/40 to-[#009688]/20 -z-0" />

          {SITE_CONFIG.buildSteps.map((step, idx) => {
            const isMobileOpen = activeMobileIdx === idx;

            return (
              <StaggerItem key={step.title} className="relative z-10">
                <div
                  onClick={() => toggleMobilePhase(idx)}
                  className={`h-full relative flex flex-col justify-between p-5 sm:p-7 lg:p-8 rounded-2xl bg-[#F7F9F9] border transition-all duration-300 group cursor-pointer md:cursor-default ${
                    isMobileOpen
                      ? "border-[#009688]/40 bg-white shadow-sm md:bg-[#F7F9F9] md:border-[#E5EAEA]"
                      : "border-[#E5EAEA] hover:border-[#009688]/30"
                  } md:hover:border-[#009688]/40 md:hover:bg-white md:hover:shadow-xl md:hover:shadow-[#009688]/5`}
                >
                  <div>
                    {/* Desktop Top Header with Number and Step Link Arrow */}
                    <div className="hidden md:flex items-center justify-between mb-8">
                      <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#009688]/40 group-hover:text-[#009688] group-hover:scale-110 transition-all duration-300 origin-left inline-block">
                        {step.number}
                      </span>
                      {idx < SITE_CONFIG.buildSteps.length - 1 && (
                        <div className="hidden lg:flex w-8 h-8 rounded-full bg-white border border-[#E5EAEA] items-center justify-center -mr-4 shadow-xs group-hover:border-[#009688]/40 transition-colors">
                          <ArrowRight className="w-3.5 h-3.5 text-[#5F6868] group-hover:text-[#009688] group-hover:translate-x-0.5 transition-all" />
                        </div>
                      )}
                    </div>

                    {/* Mobile Header Row: Number + Title + Interactive Chevron Toggle */}
                    <div className="flex md:hidden items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="font-heading text-2xl font-extrabold text-[#009688]">
                          {step.number}
                        </span>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#009688] block">
                            Phase {step.number}
                          </span>
                          <h3 className="text-lg font-bold text-[#172121]">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Mobile Arrow Toggle */}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          isMobileOpen
                            ? "bg-[#009688] text-white rotate-180"
                            : "bg-white border border-[#E5EAEA] text-[#5F6868]"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Desktop Title */}
                    <h3 className="hidden md:block text-xl sm:text-2xl font-bold text-[#172121] mb-3 group-hover:text-[#009688] transition-colors">
                      {step.title}
                    </h3>

                    {/* Desktop Description: Always visible on desktop / tablet */}
                    <p className="hidden md:block text-sm sm:text-base text-[#5F6868] leading-relaxed">
                      {step.description}
                    </p>

                    {/* Mobile Description: Expand/Collapse on tap */}
                    <div
                      className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                        isMobileOpen ? "max-h-64 opacity-100 mt-4 pt-3 border-t border-[#E5EAEA]" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm text-[#5F6868] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Phase Footer */}
                  <div className="hidden md:flex mt-8 pt-4 border-t border-[#E5EAEA] items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#009688] group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-semibold tracking-wider uppercase text-[#172121]">
                        Phase {step.number}
                      </span>
                    </div>
                    <span className="text-xs text-[#009688] opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                      Engineered
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
