"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BUSINESSES } from "@/data/businesses";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { FadeIn } from "@/components/ui/MotionReveal";

export default function Businesses() {
  const hasBusinesses = BUSINESSES.length > 0;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  // Sync activeIndex with user scrolling/swiping
  const updateActiveIndex = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const firstCard = carouselRef.current.firstElementChild?.firstElementChild;
    const cardWidth = firstCard ? firstCard.clientWidth + 24 : 360;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(BUSINESSES.length - 1, Math.max(0, index)));
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveIndex);
  }, []);

  // Gentle auto-slide (pauses on hover or manual swipe)
  useEffect(() => {
    if (isPaused || !hasBusinesses) return;
    const interval = setInterval(() => {
      if (!carouselRef.current) return;
      const nextIdx = (activeIndex + 1) % BUSINESSES.length;
      scrollToIndex(nextIdx);
    }, 4800);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, hasBusinesses]);

  const scrollToIndex = (index) => {
    if (!carouselRef.current) return;
    const firstCard = carouselRef.current.firstElementChild?.firstElementChild;
    const cardWidth = firstCard ? firstCard.clientWidth + 24 : 360;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const prevIdx = activeIndex === 0 ? BUSINESSES.length - 1 : activeIndex - 1;
    scrollToIndex(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % BUSINESSES.length;
    scrollToIndex(nextIdx);
  };

  return (
    <section
      id="businesses"
      className="py-16 sm:py-24 bg-[#FFFFFF] relative overflow-hidden"
      aria-label="Businesses Portfolio"
    >
      <Container>
        {/* Header with Title and Global Action Links */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-12">
          <FadeIn direction="up">
            <SectionHeading
              label="Portfolio"
              title="Businesses we've built."
              subtitle="Sanuma has already created several proprietary businesses and collaborates with partner companies to build, develop and scale high-conviction ventures across India."
            />
          </FadeIn>

          <FadeIn direction="left" delay={0.15} className="flex flex-wrap items-center gap-5 sm:gap-6">
            <Link
              href="/businesses"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#5F6868] hover:text-[#009688] transition-colors"
            >
              <span>View portfolio</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
            <Link
              href="/collaborate"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#009688] hover:text-[#00796B] transition-colors"
            >
              <span>Partner across India</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>

            {/* Carousel Navigation Arrows (Desktop view in header) */}
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-[#E5EAEA]">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous company"
                className="w-10 h-10 rounded-full border border-[#E5EAEA] bg-white hover:border-[#009688] hover:bg-[#009688]/10 text-[#172121] hover:text-[#009688] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next company"
                className="w-10 h-10 rounded-full border border-[#E5EAEA] bg-white hover:border-[#009688] hover:bg-[#009688]/10 text-[#172121] hover:text-[#009688] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </FadeIn>
        </div>

        {hasBusinesses ? (
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="relative"
          >
            {/* The Horizontal Carousel Scroll Track (Fluid 120fps Native Touch Momentum + Lenis Prevented) */}
            <div
              ref={carouselRef}
              data-lenis-prevent
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-6 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0"
              style={{
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div className="flex gap-5 sm:gap-6 w-max">
                {BUSINESSES.map((biz, idx) => {
                  const isCurrent = idx === activeIndex;

                  return (
                    <div
                      key={biz.name}
                      className="w-[84vw] sm:w-[380px] md:w-[400px] flex-shrink-0 snap-start"
                    >
                      <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`h-full p-6 sm:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden bg-white ${
                          isCurrent
                            ? "border-[#009688]/60 shadow-xl shadow-[#009688]/10 ring-2 ring-[#009688]/10"
                            : "border-[#E5EAEA] hover:border-[#009688]/40 hover:shadow-lg hover:shadow-black/[0.04]"
                        }`}
                      >
                        {/* Subtle Top Ambient Glow Accent */}
                        <div
                          className="absolute -top-16 -right-16 w-36 h-36 rounded-full pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity"
                          style={{
                            background: `radial-gradient(circle, #009688 0%, transparent 70%)`,
                          }}
                        />

                        {/* Card Top: Monogram, Name, Category & Status Pill */}
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <div className="flex items-center gap-3.5">
                              <div
                                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${biz.monogramColor} text-white font-extrabold text-base flex items-center justify-center tracking-wider shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform`}
                              >
                                {biz.monogram}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-[#172121] group-hover:text-[#009688] transition-colors leading-snug">
                                  {biz.name}
                                </h3>
                                <div className="flex items-center gap-1.5 text-xs text-[#5F6868] mt-0.5">
                                  <MapPin className="w-3 h-3 text-[#009688]" />
                                  <span>{biz.location}</span>
                                </div>
                              </div>
                            </div>

                            {/* Active Venture Badge */}
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#009688]/10 text-[10px] font-bold uppercase tracking-wider text-[#009688] flex-shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#009688] animate-pulse" />
                              <span>Active</span>
                            </span>
                          </div>

                          {/* Domain / Category Pill */}
                          <div className="mb-3.5">
                            <span className="inline-block text-[11px] font-semibold text-[#009688] bg-[#009688]/8 border border-[#009688]/15 px-2.5 py-1 rounded-lg">
                              {biz.category}
                            </span>
                          </div>

                          {/* Full Rich Description */}
                          <p className="text-sm text-[#5F6868] leading-relaxed mb-6">
                            {biz.description}
                          </p>
                        </div>

                        {/* Card Bottom: Website CTA or Venture Status */}
                        <div className="pt-4 border-t border-[#E5EAEA] flex items-center justify-between">
                          {biz.website ? (
                            <a
                              href={biz.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009688] hover:text-[#00796B] group/btn transition-colors"
                            >
                              <span>Visit {biz.displayUrl}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5F6868]">
                              <Sparkles className="w-3.5 h-3.5 text-[#009688]" />
                              <span>Proprietary Venture</span>
                            </span>
                          )}

                          <span className="text-[11px] font-mono text-[#5F6868]/60 uppercase tracking-wider">
                            0{idx + 1} / 0{BUSINESSES.length}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile & Desktop Carousel Bottom Controls (Dots + Navigation) */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Slide Counter & Dots */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  {BUSINESSES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => scrollToIndex(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        dotIdx === activeIndex
                          ? "w-8 bg-[#009688]"
                          : "w-2 bg-[#E5EAEA] hover:bg-[#009688]/40"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-mono text-[#5F6868] ml-2">
                  0{activeIndex + 1} of 0{BUSINESSES.length} Companies
                </span>
              </div>

              {/* Mobile Arrows & Global Link */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                {/* Mobile Arrows (< >) */}
                <div className="flex sm:hidden items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous company"
                    className="w-9 h-9 rounded-full border border-[#E5EAEA] bg-white text-[#172121] flex items-center justify-center active:bg-[#009688] active:text-white transition-all shadow-xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next company"
                    className="w-9 h-9 rounded-full border border-[#E5EAEA] bg-white text-[#172121] flex items-center justify-center active:bg-[#009688] active:text-white transition-all shadow-xs"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <Link
                  href="/businesses"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F7F9F9] hover:bg-white border border-[#E5EAEA] hover:border-[#009688]/40 text-xs font-semibold text-[#172121] hover:text-[#009688] transition-all shadow-xs"
                >
                  <span>View all {BUSINESSES.length} ventures</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <FadeIn direction="up" delay={0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="p-10 sm:p-14 rounded-3xl bg-[#F7F9F9] border border-[#E5EAEA] text-center max-w-3xl mx-auto hover:border-[#009688]/40 hover:shadow-xl hover:shadow-[#009688]/5 transition-all duration-300 group"
            >
              <div className="relative w-14 h-14 rounded-2xl bg-[#009688]/10 text-[#009688] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-7 h-7" aria-hidden="true" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#009688] rounded-full ring-4 ring-white animate-pulse" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#172121] mb-3 group-hover:text-[#009688] transition-colors">
                Ventures in Active Development &amp; Scale
              </h3>
              <p className="text-sm sm:text-base text-[#5F6868] max-w-lg mx-auto leading-relaxed mb-8">
                As a parent business-building company, Sanuma has already created several
                businesses and actively collaborates with companies across India. Verified
                brand showcases and portfolio entities will be featured here as they conclude
                their active build phases.
              </p>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#E5EAEA] text-xs font-semibold uppercase tracking-wider text-[#5F6868] shadow-xs group-hover:border-[#009688]/30 transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#009688] animate-ping" aria-hidden="true" />
                <span>Official Portfolio Registry</span>
              </div>
            </motion.div>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}
