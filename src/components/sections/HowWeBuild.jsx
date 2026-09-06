"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionReveal";

export default function HowWeBuild() {
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
          <FadeIn direction="left" delay={0.2} className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7F9F9] border border-[#E5EAEA] text-xs font-semibold uppercase tracking-[0.2em] text-[#5F6868] whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 text-[#009688]" />
            <span>The 4-Stage Lifecycle</span>
          </FadeIn>
        </div>

        {/* 4-Step Process Grid with Staggered Entrance */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative" staggerDelay={0.15}>
          {/* Animated Connecting Line on desktop */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-[2px] bg-gradient-to-r from-[#009688]/20 via-[#009688]/40 to-[#009688]/20 -z-0" />

          {SITE_CONFIG.buildSteps.map((step, idx) => (
            <StaggerItem key={step.title} className="relative z-10">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/40 hover:bg-white hover:shadow-xl hover:shadow-[#009688]/5 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#009688]/40 group-hover:text-[#009688] group-hover:scale-110 transition-all duration-300 origin-left inline-block">
                      {step.number}
                    </span>
                    {idx < SITE_CONFIG.buildSteps.length - 1 && (
                      <div className="hidden lg:flex w-8 h-8 rounded-full bg-white border border-[#E5EAEA] items-center justify-center -mr-4 shadow-xs group-hover:border-[#009688]/40 transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 text-[#5F6868] group-hover:text-[#009688] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#172121] mb-3 group-hover:text-[#009688] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5F6868] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E5EAEA] flex items-center justify-between">
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
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
