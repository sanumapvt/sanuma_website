"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionReveal";

export default function Approach() {
  const points = [
    {
      title: "Business Strategy",
      description:
        "Clear market direction, competitive differentiation, and economic models designed for long-term compounding.",
    },
    {
      title: "Strong Systems & Processes",
      description:
        "Documented, repeatable operating models that run reliably, eliminate bottlenecks, and ensure consistency.",
    },
    {
      title: "AI-Driven Solutions",
      description:
        "Intelligent automation and AI workflows embedded into execution to multiply output and speed up decision-making.",
    },
    {
      title: "Enterprise Technology",
      description:
        "Modern, scalable software and cloud architecture engineered to support multi-tier growth without friction.",
    },
    {
      title: "Hands-on Execution",
      description:
        "Direct principal involvement in building the venture from the ground up, avoiding outsourced agency inefficiencies.",
    },
    {
      title: "Sustainable Scalability",
      description:
        "Engineered unit economics and distribution systems that allow businesses to expand predictably across India.",
    },
  ];

  return (
    <section id="how-we-build-approach" className="py-24 sm:py-32 bg-[#F7F9F9] border-t border-b border-[#E5EAEA] relative overflow-hidden" aria-label="Our Approach">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Bold Highlight with FadeIn */}
          <FadeIn direction="up" className="lg:col-span-5 flex flex-col justify-center">
            <SectionHeading
              label="Our Core USP"
              title="Built on systems. Powered by technology."
              subtitle="Building world-class companies through systems, processes, AI and technology."
            />

            {/* Core Highlight Quote with subtle elevation hover */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="mt-8 sm:mt-10 p-8 rounded-2xl bg-white border-l-4 border-l-[#009688] border border-[#E5EAEA] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-[#009688]/5 transition-all duration-300"
            >
              <blockquote className="text-xl sm:text-2xl font-bold text-[#172121] leading-snug tracking-tight">
                “The goal isn’t just to launch a business. It’s to build one that
                can scale.”
              </blockquote>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-0.5 bg-[#009688]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009688]">
                  Sanuma Core Philosophy
                </p>
              </div>
            </motion.div>
          </FadeIn>

          {/* Right Column: 6 Core Capabilities with Stagger */}
          <div className="lg:col-span-7">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
              {points.map((point) => (
                <StaggerItem key={point.title}>
                  <motion.div
                    whileHover={{ y: -4, x: 2 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="h-full p-5 sm:p-6 rounded-xl bg-white border border-[#E5EAEA] hover:border-[#009688]/50 hover:shadow-md hover:shadow-[#009688]/5 transition-all duration-300 group cursor-default"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-6 h-6 rounded-md bg-[#009688]/10 text-[#009688] group-hover:bg-[#009688] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#172121] group-hover:text-[#009688] transition-colors">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5F6868] leading-relaxed pl-8.5">
                      {point.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}
