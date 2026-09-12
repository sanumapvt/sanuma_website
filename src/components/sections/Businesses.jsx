"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BUSINESSES } from "@/data/businesses";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionReveal";

export default function Businesses() {
  const hasBusinesses = BUSINESSES.length > 0;
  const [isPaused, setIsPaused] = useState(false);

  // Seamless infinite loop repetition
  const marqueeList = [...BUSINESSES, ...BUSINESSES, ...BUSINESSES, ...BUSINESSES, ...BUSINESSES];

  return (
    <section
      id="businesses"
      className="py-16 sm:py-24 bg-[#FFFFFF] relative overflow-hidden"
      aria-label="Businesses Portfolio"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
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

        {hasBusinesses ? (
          /* Container sized so exactly 3 cards are visible at a time */
          <div className="max-w-5xl mx-auto relative overflow-hidden pt-2 pb-4">
            {/* Subtle Side Vignette Fades */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

            {/* Continuous Running Marquee (Hover stops, otherwise keeps running) */}
            <div
              className="flex w-max gap-4 sm:gap-5 marquee-ticker select-none py-2"
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              {marqueeList.map((biz, idx) => {
                const Card = (
                  <div
                    className="w-[260px] sm:w-[300px] md:w-[320px] px-5 sm:px-6 py-4 sm:py-5 rounded-2xl sm:rounded-3xl bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/60 hover:bg-white hover:shadow-xl hover:shadow-[#009688]/10 transition-all duration-300 flex items-center justify-between gap-3 group cursor-pointer flex-shrink-0"
                  >
                    {/* Icon + Name Only */}
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${biz.monogramColor} text-white font-extrabold text-base flex items-center justify-center tracking-wider shadow-xs group-hover:scale-105 transition-transform flex-shrink-0`}
                      >
                        {biz.monogram}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#172121] group-hover:text-[#009688] transition-colors truncate">
                        {biz.name}
                      </h3>
                    </div>

                    {/* Subtle External Arrow */}
                    <div className="w-8 h-8 rounded-full bg-white border border-[#E5EAEA] group-hover:border-[#009688] group-hover:bg-[#009688] text-[#5F6868] group-hover:text-white flex items-center justify-center transition-all shadow-xs flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                    {Card}
                  </a>
                ) : (
                  <Link
                    key={`${biz.name}-${idx}`}
                    href="/businesses"
                    className="block flex-shrink-0"
                  >
                    {Card}
                  </Link>
                );
              })}
            </div>

            {/* Micro Status Hint */}
            <div className="mt-5 text-center text-xs text-[#5F6868]/70 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009688] animate-pulse" />
              <span>Hover on any company to pause</span>
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
      </Container>

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
          animation: business-marquee 20s linear infinite;
          will-change: transform;
        }
        .marquee-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
