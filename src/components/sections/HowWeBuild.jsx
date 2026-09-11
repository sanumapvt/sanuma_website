"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { FadeIn, SectionReveal } from "@/components/ui/MotionReveal";

// Exact original content from SITE_CONFIG.buildSteps
const BUILD_STEPS = SITE_CONFIG.buildSteps;

// Station percentage stops on the track (Safely padded inside track bed)
const STATION_POSITIONS = [16, 38.5, 61.5, 84];

// Dwell duration at each station before departing (4.2 seconds)
const DWELL_TIME_MS = 4200;

export default function HowWeBuild() {
  const [activeStation, setActiveStation] = useState(0);
  const [trainPos, setTrainPos] = useState(STATION_POSITIONS[0]);
  const [isWarping, setIsWarping] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  // Viewport observer to pause animation when offscreen
  useEffect(() => {
    const elem = sectionRef.current;
    if (!elem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(elem);
    return () => observer.disconnect();
  }, []);

  // Continuous Forward-Only Loop with Dwell Time (Active only on Desktop/Tablet when visible and not hovered)
  useEffect(() => {
    // Disable aggressive auto-advance on mobile phones to prevent layout stutter & frame drops while reading/scrolling
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return;
    }

    if (isHovered || !isInView) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    timerRef.current = setTimeout(() => {
      if (activeStation < BUILD_STEPS.length - 1) {
        // Move forward to next station
        const nextIdx = activeStation + 1;
        setActiveStation(nextIdx);
        setTrainPos(STATION_POSITIONS[nextIdx]);
      } else {
        // From Station 4 (Scale), train EXITS FORWARD into the right tunnel (114%)
        setTrainPos(114);

        // Step 2: Teleport seamlessly into the left tunnel (-14%) while hidden
        setTimeout(() => {
          setIsWarping(true);
          setTrainPos(-14);

          // Step 3: Glide forward from left tunnel into Station 01 (16%)
          setTimeout(() => {
            setIsWarping(false);
            setActiveStation(0);
            setTrainPos(STATION_POSITIONS[0]);
          }, 60);
        }, 850);
      }
    }, DWELL_TIME_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeStation, isHovered, isInView]);

  // Click/Hover on station
  const handleSelectStation = (idx) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsWarping(false);
    setActiveStation(idx);
    setTrainPos(STATION_POSITIONS[idx]);
  };

  const handlePrevStation = (e) => {
    e.stopPropagation();
    const prevIdx = (activeStation - 1 + BUILD_STEPS.length) % BUILD_STEPS.length;
    handleSelectStation(prevIdx);
  };

  const handleNextStation = (e) => {
    e.stopPropagation();
    const nextIdx = (activeStation + 1) % BUILD_STEPS.length;
    handleSelectStation(nextIdx);
  };

  const currentStep = BUILD_STEPS[activeStation];

  return (
    <section
      ref={sectionRef}
      id="how-we-build"
      className="py-16 sm:py-32 bg-[#FFFFFF] relative overflow-hidden"
    >
      {/* Keyframe animation for the dwell loading line */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes dwellProgressFill {
              0% { width: 0%; }
              100% { width: 100%; }
            }
          `,
        }}
      />

      {/* Subtle Background Glow (GPU-friendly Radial Gradient) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[400px] pointer-events-none -z-10"
        style={{ background: "radial-gradient(ellipse at center, rgba(0, 150, 136, 0.08) 0%, transparent 70%)" }}
      />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-16">
          <FadeIn direction="up">
            <SectionHeading
              label="How We Build"
              title="From idea to scale."
              subtitle="Every business we launch follows a deliberate, repeatable four-stage lifecycle engineered for resilience and scalable expansion."
            />
          </FadeIn>

          <FadeIn direction="left" delay={0.15} className="hidden lg:flex items-center gap-3">
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

        {/* ========================================================================= */}
        {/* UNIFIED RESPONSIVE RAILWAY TRACK & TRAIN (MOBILE & DESKTOP)               */}
        {/* ========================================================================= */}
        <div
          className="mb-6 sm:mb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* THE ENCLOSED TRACK BED (Train and Track Centered Harmoniously) */}
          <div className="relative h-40 sm:h-44 bg-[#FAFBFB] border border-[#E5EAEA] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs select-none">
            {/* Left & Right Tunnel Vignettes */}
            <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAFBFB] to-transparent z-30 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAFBFB] to-transparent z-30 pointer-events-none" />

            {/* 1. Track Sleepers (Rail Ties Pattern - Hardware Accelerated CSS Gradient) */}
            <div
              className="absolute top-[105px] sm:top-[108px] -translate-y-1/2 left-0 right-0 h-6 sm:h-7 pointer-events-none opacity-25"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, #5F6868 0px, #5F6868 3px, transparent 3px, transparent 22px)",
              }}
            />

            {/* 2. Dual Steel Rails + Glowing Central Maglev Rail (Centered on Track Line) */}
            <div className="absolute top-[105px] sm:top-[108px] -translate-y-1/2 left-0 right-0 h-5 sm:h-6 flex flex-col justify-between pointer-events-none">
              {/* Upper Steel Rail */}
              <div className="h-[2px] sm:h-[2.5px] bg-[#8A9696] shadow-xs" />

              {/* Glowing Center Power Rail */}
              <div className="relative h-[2px] bg-[#009688]/20">
                <div
                  style={{
                    width: `${Math.min(100, Math.max(0, trainPos))}%`,
                    transition: isWarping ? "none" : "width 900ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  className="h-full bg-gradient-to-r from-[#009688] via-[#0DF0B0] to-[#009688] shadow-[0_0_12px_#009688]"
                />
              </div>

              {/* Lower Steel Rail */}
              <div className="h-[2px] sm:h-[2.5px] bg-[#8A9696] shadow-xs" />
            </div>

            {/* 3. 4 Station Docking Nodes along the Track */}
            <div className="absolute top-2.5 sm:top-3.5 left-0 right-0 grid grid-cols-4 px-1.5 sm:px-4 z-20">
              {BUILD_STEPS.map((step, idx) => {
                const isDocked = activeStation === idx;

                return (
                  <div
                    key={step.number}
                    onClick={() => handleSelectStation(idx)}
                    onMouseEnter={() => handleSelectStation(idx)}
                    className="flex flex-col items-center cursor-pointer group active:scale-95 transition-transform"
                  >
                    {/* Concentric Station Signal Node */}
                    <div
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isDocked
                          ? "bg-[#172121] ring-3 sm:ring-4 ring-[#009688] shadow-lg shadow-[#009688]/50 scale-110"
                          : "bg-white border-2 border-[#8A9696] group-hover:border-[#009688] group-hover:scale-105"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                          isDocked ? "bg-[#0DF0B0] animate-pulse" : "bg-[#8A9696] group-hover:bg-[#009688]"
                        }`}
                      />
                    </div>

                    {/* Platform Tag */}
                    <div className="mt-1 sm:mt-1.5 text-center">
                      <div
                        className={`text-[9px] sm:text-[11px] font-mono font-bold tracking-wider uppercase transition-colors ${
                          isDocked ? "text-[#009688]" : "text-[#8A9696] group-hover:text-[#009688]"
                        }`}
                      >
                        P{step.number}
                      </div>
                      <div
                        className={`text-[11px] sm:text-sm font-extrabold tracking-tight transition-colors truncate max-w-[65px] sm:max-w-none ${
                          isDocked ? "text-[#172121]" : "text-[#5F6868] group-hover:text-[#172121]"
                        }`}
                      >
                        {step.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 4. THE BULLET TRAIN (Exact Center Alignment with Track Line) */}
            <div
              style={{
                left: `${trainPos}%`,
                transition: isWarping ? "none" : "left 900ms cubic-bezier(0.22, 1, 0.36, 1)",
                willChange: "left",
              }}
              className="absolute top-[105px] sm:top-[108px] -translate-y-1/2 -translate-x-1/2 z-25 pointer-events-none"
            >
              {/* Maglev Glow underneath */}
              <div className="absolute -bottom-1 left-1 sm:left-2 right-1 sm:right-2 h-2.5 sm:h-3 rounded-full shadow-[0_0_12px_#0DF0B0]" />

              {/* Aerodynamic Train Body */}
              <div className="relative w-20 sm:w-36 h-7 sm:h-11 bg-gradient-to-r from-[#172121] via-[#243333] to-[#0D1515] rounded-r-xl sm:rounded-r-2xl rounded-l-xs sm:rounded-l-md border border-[#009688]/70 shadow-2xl flex items-center px-1.5 sm:px-2">
                {/* Emerald Racing Stripe */}
                <div className="absolute top-1 sm:top-1.5 left-0 right-0 h-[1.5px] sm:h-[2px] bg-gradient-to-r from-[#009688] to-[#0DF0B0]" />

                {/* Train Windows */}
                <div className="flex items-center gap-0.5 sm:gap-1 ml-0.5 sm:ml-2 mr-auto">
                  <div className="w-2 sm:w-4 h-1.5 sm:h-2.5 rounded-xs bg-[#0DF0B0]/80 border border-black/40" />
                  <div className="w-2.5 sm:w-5 h-1.5 sm:h-2.5 rounded-xs bg-[#0DF0B0]/90 border border-black/40" />
                  <div className="hidden sm:block w-5 h-2.5 rounded-xs bg-[#0DF0B0]/90 border border-black/40" />
                </div>

                {/* Windshield */}
                <div className="w-3 sm:w-5 h-2 sm:h-3 bg-gradient-to-r from-[#0DF0B0] to-white rounded-r-md sm:rounded-r-lg border border-black/50 opacity-90 mr-0.5 sm:mr-1" />

                {/* Forward Headlights & Light Beam Cone */}
                <div className="relative flex flex-col gap-0.5 sm:gap-1 items-center">
                  <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-white shadow-[0_0_6px_#FFF]" />
                  <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#0DF0B0] shadow-[0_0_6px_#0DF0B0]" />
                  {/* Dynamic Light Beam Cone */}
                  <div className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-8 sm:w-16 h-5 sm:h-8 bg-gradient-to-r from-[#0DF0B0]/40 to-transparent pointer-events-none rounded-r-full" />
                </div>

                {/* Train Monogram */}
                <div className="absolute bottom-0.5 sm:bottom-1 left-1 sm:left-2 text-[6px] sm:text-[8px] font-mono font-bold tracking-widest text-white/60">
                  SANUMA · 0{activeStation + 1}
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* ACTIVE STATION CARD WITH DWELL LOADING LINE (MOBILE & DESKTOP)        */}
          {/* ===================================================================== */}
          <div className="mt-4 sm:mt-6 max-w-3xl mx-auto">
            <div className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#009688] shadow-xl sm:shadow-2xl shadow-[#009688]/15 relative overflow-hidden ring-2 sm:ring-4 ring-[#009688]/10">
              {/* DWELL LOADING PROGRESS LINE (Fills up, and when full, train moves!) */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#009688]/15 overflow-hidden">
                <motion.div
                  key={`${activeStation}-${isHovered}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: DWELL_TIME_MS / 1000,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: "left",
                    willChange: "transform",
                    animationPlayState: isHovered ? "paused" : "running",
                  }}
                  className="h-full bg-gradient-to-r from-[#009688] via-[#0DF0B0] to-[#009688]"
                />
              </div>

              <motion.div
                key={currentStep.number}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >

                {/* Card Header with Number, Tag and Status Badge */}
                <div className="flex items-center justify-between mb-4 sm:mb-6 pt-1">
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span className="font-heading text-3xl sm:text-5xl font-extrabold text-[#009688]">
                      {currentStep.number}
                    </span>
                    <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-[#009688]/10 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#009688]">
                      Phase 0{activeStation + 1}
                    </span>
                  </div>

                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#009688]/10 border border-[#009688]/20 flex items-center justify-center text-[#009688]">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-3xl font-bold text-[#172121] mb-2 sm:mb-4 font-heading">
                  {currentStep.title}
                </h3>

                {/* Original Exact Description */}
                <p className="text-sm sm:text-lg text-[#5F6868] leading-relaxed mb-5 sm:mb-8">
                  {currentStep.description}
                </p>

                {/* Footer with Phase & Status (Desktop view) */}
                <div className="hidden sm:flex pt-4 sm:pt-5 border-t border-[#E5EAEA] items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#009688]" />
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#172121]">
                      Lifecycle Stage {currentStep.number} of 04
                    </span>
                  </div>

                  <span className="text-xs text-[#009688] font-semibold">
                    Engineered for Scale
                  </span>
                </div>

                {/* MOBILE THUMB NAVIGATION BAR (Effortless thumb navigation on phones) */}
                <div className="flex sm:hidden items-center justify-between pt-4 border-t border-[#E5EAEA]">
                  <button
                    onClick={handlePrevStation}
                    aria-label="Previous station"
                    className="px-3 py-1.5 rounded-full bg-[#F7F9F9] border border-[#E5EAEA] text-xs font-semibold text-[#5F6868] active:bg-[#009688] active:text-white transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Prev</span>
                  </button>

                  {/* 4 station pill indicators */}
                  <div className="flex items-center gap-1.5">
                    {BUILD_STEPS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelectStation(i)}
                        aria-label={`Jump to station ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          activeStation === i ? "w-5 bg-[#009688]" : "w-1.5 bg-[#CBD5E1]"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNextStation}
                    aria-label="Next station"
                    className="px-3 py-1.5 rounded-full bg-[#009688] text-white text-xs font-semibold shadow-xs active:bg-[#00796B] transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
