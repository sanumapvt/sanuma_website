"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  Compass,
  Layers,
  Cpu,
  Cloud,
  Hammer,
  TrendingUp,
  Quote,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionReveal";

export default function Approach() {
  const points = [
    {
      number: "01",
      title: "Business Strategy",
      domain: "Strategy & Economics",
      description:
        "Clear market direction, competitive differentiation, and economic models designed for long-term compounding.",
      icon: Compass,
      spanClass: "col-span-12 lg:col-span-8", // Linear Wide Bento Card
    },
    {
      number: "02",
      title: "Strong Systems & Processes",
      domain: "Operational Architecture",
      description:
        "Documented, repeatable operating models that run reliably, eliminate bottlenecks, and ensure consistency.",
      icon: Layers,
      spanClass: "col-span-12 lg:col-span-4", // Linear Companion Bento Card
    },
    {
      number: "03",
      title: "AI-Driven Solutions",
      domain: "AI & Workflow Intelligence",
      description:
        "Intelligent automation and AI workflows embedded into execution to multiply output and speed up decision-making.",
      icon: Cpu,
      spanClass: "col-span-12 md:col-span-4", // Linear 3-col Grid Card
    },
    {
      number: "04",
      title: "Enterprise Technology",
      domain: "Scalable Cloud Architecture",
      description:
        "Modern, scalable software and cloud architecture engineered to support multi-tier growth without friction.",
      icon: Cloud,
      spanClass: "col-span-12 md:col-span-4", // Linear 3-col Grid Card
    },
    {
      number: "05",
      title: "Hands-on Execution",
      domain: "Principal-Led Building",
      description:
        "Direct principal involvement in building the venture from the ground up, avoiding outsourced agency inefficiencies.",
      icon: Hammer,
      spanClass: "col-span-12 md:col-span-4", // Linear 3-col Grid Card
    },
    {
      number: "06",
      title: "Sustainable Scalability",
      domain: "Nationwide Growth Engine",
      description:
        "Engineered unit economics and distribution systems that allow businesses to expand predictably across India.",
      icon: TrendingUp,
      spanClass: "col-span-12", // Full-Width Linear Anchor Card
    },
  ];

  return (
    <section
      id="how-we-build-approach"
      className="py-16 sm:py-32 bg-[#FAFBFB] border-t border-b border-[#E5EAEA] relative overflow-hidden"
      aria-label="Our Approach"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#009688]/6 via-[#009688]/2 to-transparent blur-3xl pointer-events-none -z-10" />

      <Container>
        {/* ========================================================================= */}
        {/* TOP SECTION: Eyebrow, Headline & Subtitle                                 */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16">
          <FadeIn direction="up">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009688]/10 border border-[#009688]/25 text-xs font-bold uppercase tracking-[0.2em] text-[#009688] mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009688] animate-pulse" />
              <span>OUR CORE USP</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-[#172121] leading-[1.1] mb-4 sm:mb-5 font-heading">
              Built on systems.{" "}
              <span className="text-[#009688]">Powered by technology.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-[#5F6868] max-w-2xl mx-auto leading-relaxed">
              Building world-class companies through systems, processes, AI and technology.
            </p>
          </FadeIn>
        </div>

        {/* ========================================================================= */}
        {/* LINEAR.APP ASYMMETRICAL BENTO GRID MATRIX (Full Width 12 Cols)             */}
        {/* ========================================================================= */}
        <StaggerContainer
          className="grid grid-cols-12 gap-4 sm:gap-6"
          staggerDelay={0.08}
        >
          {points.map((point) => {
            const Icon = point.icon;
            const isFullWidth = point.number === "06";

            return (
              <StaggerItem
                key={point.number}
                className={`${point.spanClass} h-full`}
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E5EAEA] hover:border-[#009688]/50 hover:shadow-2xl hover:shadow-[#009688]/8 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden cursor-default ${
                    isFullWidth ? "md:flex-row md:items-center md:justify-between gap-6" : ""
                  }`}
                >
                  {/* Subtle Ambient Hover Corner Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#009688]/10 via-[#0DF0B0]/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Top / Left Content */}
                  <div className={isFullWidth ? "max-w-xl" : ""}>
                    {/* Header Row: Icon + Domain Tag + Monospace Badge */}
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#009688]/10 text-[#009688] group-hover:bg-[#009688] group-hover:text-white group-hover:scale-105 flex items-center justify-center transition-all duration-300 shadow-xs">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="hidden xs:inline-block px-2 sm:px-2.5 py-0.5 rounded-full bg-[#FAFBFB] border border-[#E5EAEA] text-[10px] font-mono font-medium text-[#5F6868]">
                          {point.domain}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FAFBFB] border border-[#E5EAEA] text-[11px] font-mono font-bold text-[#8A9696] group-hover:text-[#009688] group-hover:border-[#009688]/30 transition-colors">
                          /{point.number}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-2xl font-bold text-[#172121] group-hover:text-[#009688] transition-colors mb-2.5 sm:mb-3 tracking-tight font-heading">
                      {point.title}
                    </h3>

                    {/* Exact Original Description */}
                    <p className="text-sm sm:text-base text-[#5F6868] leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                  {/* Additional Visual Accent for the Full Width Card 06 (Responsive for mobile & desktop) */}
                  {isFullWidth && (
                    <div className="mt-4 md:mt-0 flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-[#FAFBFB] border border-[#E5EAEA] flex-shrink-0 self-start md:self-auto shadow-2xs">
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#009688] animate-pulse" />
                      <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#172121]">
                        Compounding Growth Engine
                      </span>
                    </div>
                  )}
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* ========================================================================= */}
        {/* PHILOSOPHY QUOTE CARD (Positioned Below the Cards)                        */}
        {/* ========================================================================= */}
        <FadeIn direction="up" delay={0.15} className="mt-10 sm:mt-16 max-w-3xl mx-auto">
          <div className="p-6 sm:p-9 rounded-2xl sm:rounded-3xl bg-white border border-[#E5EAEA] shadow-xs relative overflow-hidden text-left hover:border-[#009688]/40 hover:shadow-xl hover:shadow-[#009688]/5 transition-all duration-300">
            {/* Left Accent Color Spine */}
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-[#009688] to-[#0DF0B0]" />

            {/* Watermark Quote Icon */}
            <Quote className="absolute right-4 sm:right-6 top-4 sm:top-6 w-12 sm:w-16 h-12 sm:h-16 text-[#009688]/6 pointer-events-none -rotate-12" />

            <blockquote className="text-lg sm:text-2xl font-bold text-[#172121] leading-snug tracking-tight mb-4 sm:mb-5 relative z-10 font-heading">
              &ldquo;The goal isn’t just to launch a business. It’s to build one that
              can scale.&rdquo;
            </blockquote>

            <div className="flex items-center gap-3 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#009688]/10 border border-[#009688]/20 flex items-center justify-center text-[#009688] font-bold text-xs">
                S
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#172121]">
                  Sanuma Founding Principle
                </div>
                <div className="text-[10px] sm:text-xs text-[#8A9696] font-mono">
                  Disciplined Venture Architecture
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
