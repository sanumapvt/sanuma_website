"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Completely bypass video playback on mobile screens (< 768px)
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return;
    }

    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    let isSectionVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isSectionVisible = entry.isIntersecting;
        if (isSectionVisible) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(section);

    // Momentarily pause video during active desktop scrolling to guarantee 60-120fps buttery momentum
    let scrollTimeout;
    const handleScrollPause = () => {
      if (isSectionVisible) {
        if (!video.paused) {
          video.pause();
        }
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (isSectionVisible) {
            video.play().catch(() => {});
          }
        }, 150);
      }
    };

    window.addEventListener("scroll", handleScrollPause, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollPause);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const metrics = [
    { label: "Foundation", value: "Strategy First", desc: "Targeted Market Positioning" },
    { label: "Architecture", value: "Scalable Systems", desc: "Repeatable Operating Models" },
    { label: "Leverage", value: "AI Automation", desc: "Intelligent Workflow Scale" },
    { label: "Execution", value: "End-to-End Build", desc: "Direct Venture Leadership" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-52 lg:pb-36 overflow-hidden bg-[#FFFFFF]"
      aria-label="Introduction"
    >
      {/* Full-Canvas Video Background Layer (Desktop/Laptop Only - Hidden on Mobile) */}
      <div
        className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none z-0"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.webm" type="video/webm" />
        </video>

        {/* Directional Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 md:via-white/60 to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />
      </div>

      {/* Ultra-Clean Ambient Background for Mobile Phones (0% CPU, 0% GPU, Zero Lag) */}
      <div
        className="md:hidden absolute inset-0 overflow-hidden pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 85% 15%, rgba(0, 150, 136, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 15% 85%, rgba(13, 240, 176, 0.05) 0%, transparent 50%)",
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Primary Headline (H1) with smooth spring reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold tracking-tight text-[#172121] leading-[1.08] mb-6 sm:mb-8 drop-shadow-xs"
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

          {/* Core Subtext with high-contrast text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl lg:text-2xl text-[#1F2937] leading-relaxed max-w-2xl mb-10 sm:mb-12 font-medium"
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
              className="group bg-white/90 hover:bg-white border border-[#E5EAEA] hover:border-[#009688] text-[#172121] hover:text-[#009688] shadow-xs transition-all duration-300 backdrop-blur-xs"
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
