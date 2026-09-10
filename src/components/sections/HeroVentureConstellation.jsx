"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Zap, Sparkles, Building2, Cpu, Compass, Palette } from "lucide-react";

const VENTURES = [
  {
    name: "Robuzta",
    domain: "Chip Techlabs & Hardware",
    monogram: "RZ",
    color: "from-[#009688] to-[#004D40]",
    accent: "#009688",
    icon: Cpu,
    href: "https://robuzta.com",
    position: "top-left", // top-0 left-0
  },
  {
    name: "Dronebhai",
    domain: "UAV & Autonomous Drones",
    monogram: "DB",
    color: "from-[#00BCD4] to-[#00838F]",
    accent: "#00BCD4",
    icon: Zap,
    href: "https://dronebhai.com",
    position: "top-right", // top-0 right-0
  },
  {
    name: "Umyra D' Studio",
    domain: "Bespoke Couture & Design",
    monogram: "UD",
    color: "from-[#8E24AA] to-[#4A148C]",
    accent: "#8E24AA",
    icon: Palette,
    href: "/businesses",
    position: "bottom-left", // bottom-0 left-0
  },
  {
    name: "Rover & Roads",
    domain: "Overland Experiential Mobility",
    monogram: "RR",
    color: "from-[#E65100] to-[#BF360C]",
    accent: "#E65100",
    icon: Compass,
    href: "/businesses",
    position: "bottom-right", // bottom-0 right-0
  },
];

export default function HeroVentureConstellation() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-square flex items-center justify-center select-none py-6">
      {/* Ambient Breathing Background Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#009688]/10 via-[#00BCD4]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Radial Blueprint Circuit Circles */}
      <div className="absolute w-[360px] h-[360px] rounded-full border border-[#009688]/15 pointer-events-none" />
      <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-[#172121]/10 pointer-events-none animate-[spin_60s_linear_infinite]" />

      {/* SVG Connecting Laser Beams from Center Core to 4 Cards */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 500 500"
      >
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#009688" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00BCD4" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glowBeam" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Diagonal Beams to 4 corners */}
        {/* Top-Left: to ~ (110, 110) */}
        <line
          x1="250"
          y1="250"
          x2="130"
          y2="120"
          stroke="#009688"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle r="3" fill="#009688" filter="url(#glowBeam)">
          <animateMotion path="M 250 250 L 130 120" dur="2.4s" repeatCount="indefinite" />
        </circle>

        {/* Top-Right: to ~ (370, 120) */}
        <line
          x1="250"
          y1="250"
          x2="370"
          y2="120"
          stroke="#00BCD4"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle r="3" fill="#00BCD4" filter="url(#glowBeam)">
          <animateMotion path="M 250 250 L 370 120" dur="2.8s" repeatCount="indefinite" />
        </circle>

        {/* Bottom-Left: to ~ (130, 380) */}
        <line
          x1="250"
          y1="250"
          x2="130"
          y2="380"
          stroke="#8E24AA"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle r="3" fill="#8E24AA" filter="url(#glowBeam)">
          <animateMotion path="M 250 250 L 130 380" dur="3.2s" repeatCount="indefinite" />
        </circle>

        {/* Bottom-Right: to ~ (370, 380) */}
        <line
          x1="250"
          y1="250"
          x2="370"
          y2="380"
          stroke="#E65100"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle r="3" fill="#E65100" filter="url(#glowBeam)">
          <animateMotion path="M 250 250 L 370 380" dur="2.6s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* ========================================================================= */}
      {/* THE CENTRAL SANUMA VENTURE ENGINE CORE                                    */}
      {/* ========================================================================= */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        className="relative z-20 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-b from-[#172121] to-[#0A1212] border-2 border-[#009688] text-white shadow-[0_0_35px_rgba(0,150,136,0.35)]"
      >
        <span className="animate-ping absolute inline-flex h-20 w-20 rounded-full bg-[#009688] opacity-25 pointer-events-none" />
        <div className="w-9 h-9 rounded-full bg-[#009688]/20 border border-[#009688]/60 flex items-center justify-center text-[#00E5D0] mb-1">
          <Sparkles className="w-4 h-4 text-[#00E5D0]" />
        </div>
        <div className="text-[11px] sm:text-xs font-black tracking-[0.2em] uppercase text-white">
          SANUMA
        </div>
        <div className="text-[8px] sm:text-[9px] font-mono tracking-wider text-[#00E5D0]/80 uppercase">
          Parent Engine
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 4 SATELLITE VENTURE CARDS (Real Companies Built by Sanuma)                */}
      {/* ========================================================================= */}
      {/* 1. Robuzta (Top-Left) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute top-2 sm:top-4 left-0 z-30"
      >
        <Link
          href="/businesses"
          className="group block p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5EAEA] hover:border-[#009688] shadow-md hover:shadow-lg transition-all duration-300 w-44 sm:w-50"
        >
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#009688] to-[#004D40] text-white font-black text-xs flex items-center justify-center shadow-xs">
              RZ
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs sm:text-sm font-extrabold text-[#172121] group-hover:text-[#009688] transition-colors truncate flex items-center justify-between">
                <span>Robuzta</span>
                <ArrowUpRight className="w-3 h-3 text-[#5F6868] group-hover:text-[#009688] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
          <div className="text-[10px] text-[#5F6868] truncate font-medium">
            Chip-Level Techlabs
          </div>
          <div className="mt-1.5 flex items-center gap-1.5 text-[9px] font-mono font-bold text-[#009688]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009688] animate-pulse" />
            <span>Built by Sanuma</span>
          </div>
        </Link>
      </motion.div>

      {/* 2. Dronebhai (Top-Right) */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.4 }}
        className="absolute top-2 sm:top-4 right-0 z-30"
      >
        <Link
          href="/businesses"
          className="group block p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5EAEA] hover:border-[#00BCD4] shadow-md hover:shadow-lg transition-all duration-300 w-44 sm:w-50"
        >
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00BCD4] to-[#00838F] text-white font-black text-xs flex items-center justify-center shadow-xs">
              DB
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs sm:text-sm font-extrabold text-[#172121] group-hover:text-[#00BCD4] transition-colors truncate flex items-center justify-between">
                <span>Dronebhai</span>
                <ArrowUpRight className="w-3 h-3 text-[#5F6868] group-hover:text-[#00BCD4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
          <div className="text-[10px] text-[#5F6868] truncate font-medium">
            UAV & Autonomous Drones
          </div>
          <div className="mt-1.5 flex items-center gap-1.5 text-[9px] font-mono font-bold text-[#00838F]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
            <span>Built by Sanuma</span>
          </div>
        </Link>
      </motion.div>

      {/* 3. Umyra D' Studio (Bottom-Left) */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-2 sm:bottom-4 left-0 z-30"
      >
        <Link
          href="/businesses"
          className="group block p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5EAEA] hover:border-[#8E24AA] shadow-md hover:shadow-lg transition-all duration-300 w-44 sm:w-50"
        >
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#8E24AA] to-[#4A148C] text-white font-black text-xs flex items-center justify-center shadow-xs">
              UD
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs sm:text-sm font-extrabold text-[#172121] group-hover:text-[#8E24AA] transition-colors truncate flex items-center justify-between">
                <span>Umyra D' Studio</span>
                <ArrowUpRight className="w-3 h-3 text-[#5F6868] group-hover:text-[#8E24AA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
          <div className="text-[10px] text-[#5F6868] truncate font-medium">
            Couture & Design Studio
          </div>
          <div className="mt-1.5 flex items-center gap-1.5 text-[9px] font-mono font-bold text-[#8E24AA]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8E24AA] animate-pulse" />
            <span>Built by Sanuma</span>
          </div>
        </Link>
      </motion.div>

      {/* 4. Rover & Roads (Bottom-Right) */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-2 sm:bottom-4 right-0 z-30"
      >
        <Link
          href="/businesses"
          className="group block p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5EAEA] hover:border-[#E65100] shadow-md hover:shadow-lg transition-all duration-300 w-44 sm:w-50"
        >
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#E65100] to-[#BF360C] text-white font-black text-xs flex items-center justify-center shadow-xs">
              RR
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs sm:text-sm font-extrabold text-[#172121] group-hover:text-[#E65100] transition-colors truncate flex items-center justify-between">
                <span>Rover & Roads</span>
                <ArrowUpRight className="w-3 h-3 text-[#5F6868] group-hover:text-[#E65100] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
          <div className="text-[10px] text-[#5F6868] truncate font-medium">
            Experiential Mobility
          </div>
          <div className="mt-1.5 flex items-center gap-1.5 text-[9px] font-mono font-bold text-[#E65100]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E65100] animate-pulse" />
            <span>Built by Sanuma</span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
