"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";
import { Compass, GitFork, Cpu, Layers, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionReveal";

const PILLAR_ICONS = {
  Strategy: Compass,
  Systems: GitFork,
  AI: Cpu,
  Technology: Layers,
};

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F7F9F9] border-t border-b border-[#E5EAEA] relative overflow-hidden" aria-label="About Sanuma">
      {/* Subtle ambient light gradient */}
      <div
        className="absolute top-1/2 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,150,136,0.06) 0%, transparent 70%)",
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Context with FadeIn */}
          <FadeIn direction="up" className="lg:col-span-5">
            <SectionHeading
              label="About Sanuma"
              title="More than a technology company."
            />
            <p className="mt-6 text-base sm:text-lg text-[#5F6868] leading-relaxed">
              We are not a traditional IT services shop, agency, or consultancy.
              Sanuma is an active, hands-on business-building company based in Ahmedabad, India.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="mt-8 p-6 rounded-2xl bg-white border border-[#E5EAEA] shadow-[0_4px_20px_-6px_rgba(0,0,0,0.05)] hover:border-[#009688]/40 transition-colors"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-[#009688] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#009688]" />
                <span>Our Core Mission</span>
              </div>
              <p className="text-sm sm:text-base text-[#172121] font-medium leading-relaxed">
                Sanuma creates, develops and scales businesses by combining
                strategy, technology, AI and strong operating systems.
              </p>
            </motion.div>
            <div className="mt-6">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#009688] hover:text-[#00796B] transition-colors"
              >
                <span>Read more about Sanuma in Ahmedabad</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>

          {/* Right Column: The 4 Pillars with Staggered entrance */}
          <div className="lg:col-span-7">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6" staggerDelay={0.12}>
              {SITE_CONFIG.pillars.map((pillar) => {
                const IconComponent = PILLAR_ICONS[pillar.name] || Compass;
                return (
                  <StaggerItem key={pillar.name}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-[#E5EAEA] hover:border-[#009688]/50 hover:shadow-lg hover:shadow-[#009688]/5 transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-11 h-11 rounded-xl bg-[#009688]/10 text-[#009688] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <IconComponent className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#009688] mb-1">
                          {pillar.tagline}
                        </div>
                        <h3 className="text-xl font-bold text-[#172121] mb-2.5">
                          {pillar.name}
                        </h3>
                        <p className="text-sm text-[#5F6868] leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-[#E5EAEA]/60 flex items-center justify-between text-xs text-[#5F6868] group-hover:text-[#009688] transition-colors">
                        <span className="font-medium">Pillar Architecture</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}
