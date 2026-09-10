"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  const metrics = [
    { label: "Foundation", value: "Strategy First", desc: "Targeted Market Positioning" },
    { label: "Architecture", value: "Scalable Systems", desc: "Repeatable Operating Models" },
    { label: "Leverage", value: "AI Automation", desc: "Intelligent Workflow Scale" },
    { label: "Execution", value: "End-to-End Build", desc: "Direct Venture Leadership" },
  ];

  return (
    <section
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 overflow-hidden bg-[#FFFFFF]"
      aria-label="Introduction"
    >
      {/* Ambient Breathing Gradient Orb for modern tech elegance */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#009688] to-[#004D40] blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.04, 0.09, 0.04],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#009688] to-[#80CBC4] blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Subtle architectural grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#172121 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-4xl">

          {/* Primary Headline (H1) with smooth spring reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight text-[#172121] leading-[1.08] mb-6 sm:mb-8"
          >
            We build world-class{" "}
            <span className="text-[#009688] relative inline-block">
              companies.
              {/* Subtle underline flourish */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-1.5 left-0 right-0 h-[3px] bg-[#009688]/30 rounded-full origin-left"
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          {/* Core Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl lg:text-2xl text-[#5F6868] leading-relaxed max-w-2xl mb-10 sm:mb-12 font-normal"
          >
            Sanuma builds and scales businesses using systems, processes, AI
            and technology.
          </motion.p>

          {/* Actions with hover bounce and arrow glide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            <Button
              href="/about"
              variant="primary"
              size="lg"
              className="group hover:shadow-lg hover:shadow-[#009688]/20 transition-all duration-300"
            >
              <span>Explore Sanuma</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button
              href="/collaborate"
              variant="ghost"
              size="lg"
              className="group hover:bg-[#F7F9F9] transition-all duration-300"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Button>
          </motion.div>
        </div>

        {/* Minimal metrics / reassurance strip with staggered interactive cards */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 sm:mt-24 pt-8 border-t border-[#E5EAEA] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-4 sm:p-5 rounded-xl bg-[#F7F9F9]/70 border border-[#E5EAEA] hover:border-[#009688]/40 hover:bg-white hover:shadow-sm transition-all duration-300 group cursor-default"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#009688] mb-1.5 flex items-center justify-between">
                <span>{item.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#009688]/40 group-hover:bg-[#009688] transition-colors" />
              </div>
              <div className="text-base sm:text-lg font-bold text-[#172121] mb-1">
                {item.value}
              </div>
              <div className="text-xs text-[#5F6868]">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
