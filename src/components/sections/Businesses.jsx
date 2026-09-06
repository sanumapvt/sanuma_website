"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BUSINESSES } from "@/data/businesses";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionReveal";

export default function Businesses() {
  const hasBusinesses = BUSINESSES.length > 0;

  return (
    <section id="businesses" className="py-24 sm:py-32 bg-[#FFFFFF] relative overflow-hidden" aria-label="Businesses Portfolio">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 sm:mb-20">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {BUSINESSES.map((business) => (
              <motion.div
                key={business.name}
                whileHover={{ y: -6 }}
                className="p-8 rounded-2xl bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#172121]">
                  {business.name}
                </h3>
                <p className="mt-2 text-sm text-[#5F6868]">
                  {business.description}
                </p>
              </motion.div>
            ))}
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
