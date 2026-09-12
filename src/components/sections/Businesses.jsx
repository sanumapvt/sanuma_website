"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BUSINESSES } from "@/data/businesses";
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionReveal";

export default function Businesses() {
  const hasBusinesses = BUSINESSES.length > 0;
  const [isPaused, setIsPaused] = useState(false);

  // Repeat items for seamless 100% infinite continuous loop
  const marqueeList = [...BUSINESSES, ...BUSINESSES, ...BUSINESSES, ...BUSINESSES];

  return (
    <section
      id="businesses"
      className="py-16 sm:py-24 bg-[#FFFFFF] relative overflow-hidden"
      aria-label="Businesses Portfolio"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-14">
          <FadeIn direction="up">
            <SectionHeading
              label="Portfolio"
              title="Businesses we've built."
              subtitle="Sanuma has created several proprietary businesses and collaborates with partner companies to build, develop and scale high-conviction ventures across India."
            />
          </FadeIn>

          <FadeIn direction="left" delay={0.15} className="flex items-center gap-6">
            <Link
              href="/businesses"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#5F6868] hover:text-[#009688] transition-colors"
            >
              <span>View full portfolio</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
            <Link
              href="/collaborate"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#009688] hover:text-[#00796B] transition-colors"
            >
              <span>Partner across India</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </Container>

      {hasBusinesses ? (
        <div className="relative w-full overflow-hidden pt-2 pb-4">
          {/* Subtle Side Vignette Fades for modern infinite feel */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Continuous Infinite Running Track (Hover/Touch stops, otherwise keeps running) */}
          <div
            className="flex w-max gap-4 sm:gap-6 marquee-ticker select-none"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {marqueeList.map((biz, idx) => {
              const CardContent = (
                <div
                  className="w-[280px] sm:w-[320px] md:w-[340px] p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/60 hover:bg-white hover:shadow-xl hover:shadow-[#009688]/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer h-[190px] sm:h-[200px]"
                >
                  {/* Top Row: Monogram + Name + Action Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${biz.monogramColor} text-white font-extrabold text-sm flex items-center justify-center tracking-wider shadow-xs group-hover:scale-105 transition-transform`}
                      >
                        {biz.monogram}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#172121] group-hover:text-[#009688] transition-colors leading-snug">
                          {biz.name}
                        </h3>
                        <span className="text-[11px] font-medium text-[#5F6868]">
                          {biz.location}
                        </span>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white border border-[#E5EAEA] group-hover:border-[#009688] group-hover:bg-[#009688] text-[#5F6868] group-hover:text-white flex items-center justify-center transition-all shadow-xs">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Middle: Category / Industry Tag (Clean, compact, no heavy text) */}
                  <div>
                    <span className="inline-block text-xs font-semibold text-[#009688] bg-[#009688]/10 border border-[#009688]/20 px-2.5 py-1 rounded-lg line-clamp-1">
                      {biz.category}
                    </span>
                  </div>

                  {/* Bottom Row: URL / Status Indicator */}
                  <div className="pt-3 border-t border-[#E5EAEA]/80 flex items-center justify-between text-xs">
                    <span className="text-[#5F6868] font-medium group-hover:text-[#172121] transition-colors">
                      {biz.displayUrl ? biz.displayUrl : "Proprietary Venture"}
                    </span>
                    <span className="text-[11px] font-bold text-[#009688] flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              );

              return biz.website ? (
                <a
                  key={`${biz.name}-${idx}`}
                  href={biz.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block flex-shrink-0"
                >
                  {CardContent}
                </a>
              ) : (
                <Link
                  key={`${biz.name}-${idx}`}
                  href="/businesses"
                  className="block flex-shrink-0"
                >
                  {CardContent}
                </Link>
              );
            })}
          </div>

          {/* Micro Status Hint */}
          <div className="mt-6 text-center text-xs text-[#5F6868]/70 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009688] animate-pulse" />
            <span>Hover or tap on any company to pause</span>
          </div>
        </div>
      ) : (
        <FadeIn direction="up" delay={0.15}>
          <div className="p-10 sm:p-14 rounded-3xl bg-[#F7F9F9] border border-[#E5EAEA] text-center max-w-3xl mx-auto">
            <div className="relative w-14 h-14 rounded-2xl bg-[#009688]/10 text-[#009688] flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#172121] mb-3">
              Ventures in Active Development &amp; Scale
            </h3>
            <p className="text-sm sm:text-base text-[#5F6868] max-w-lg mx-auto leading-relaxed mb-6">
              As a parent business-building company, Sanuma has already created several
              businesses and actively collaborates with companies across India.
            </p>
          </div>
        </FadeIn>
      )}

      {/* 60fps GPU Hardware Accelerated Infinite Marquee Keyframe */}
      <style jsx global>{`
        @keyframes business-marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .marquee-ticker {
          display: flex;
          width: max-content;
          animation: business-marquee 24s linear infinite;
          will-change: transform;
        }
        .marquee-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
