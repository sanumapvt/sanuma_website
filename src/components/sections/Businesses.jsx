"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BUSINESSES } from "@/data/businesses";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionReveal";

export default function Businesses() {
  const hasBusinesses = BUSINESSES.length > 0;

  return (
    <section id="businesses" className="py-14 sm:py-20 bg-[#FFFFFF] relative overflow-hidden" aria-label="Businesses Portfolio">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-14">
          <FadeIn direction="up">
            <SectionHeading
              label="Portfolio"
              title="Businesses we've built."
              subtitle="Sanuma has already created several proprietary businesses and collaborates with partner companies to build, develop and scale high-conviction ventures across India."
            />
          </FadeIn>
          <FadeIn direction="left" delay={0.2} className="flex items-center gap-6">
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
          </FadeIn>
        </div>

        {hasBusinesses ? (
          <div>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6" staggerDelay={0.08}>
              {BUSINESSES.map((biz) => (
                <StaggerItem key={biz.name}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="h-full p-6 rounded-2xl bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/40 hover:bg-white hover:shadow-md hover:shadow-black/[0.02] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Logo + Name */}
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${biz.monogramColor} text-white font-extrabold text-sm flex items-center justify-center tracking-wider shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform`}
                        >
                          {biz.monogram}
                        </div>
                        <h3 className="text-lg font-bold text-[#172121] group-hover:text-[#009688] transition-colors leading-snug">
                          {biz.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-[#5F6868] line-clamp-3 leading-relaxed">
                        {biz.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn direction="up" delay={0.2} className="mt-10 text-center">
              <Link
                href="/businesses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F7F9F9] hover:bg-white border border-[#E5EAEA] hover:border-[#009688]/40 text-sm font-semibold text-[#172121] hover:text-[#009688] transition-all shadow-xs"
              >
                <span>View all {BUSINESSES.length} ventures in portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </FadeIn>
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
