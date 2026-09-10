"use client";

import { motion } from "framer-motion";

export default function BlueprintAIBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* 1. Atmospheric Blueprint Vignette with Soft Radiant Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0FDFB]/70 via-[#FFFFFF]/85 to-[#FFFFFF] opacity-95" />
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#009688]/10 via-[#00BCD4]/8 to-transparent blur-3xl" />
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] rounded-full bg-[#00E5D0]/8 blur-3xl" />

      {/* 2. Precision Architectural CAD Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #009688 1px, transparent 1px),
            linear-gradient(to bottom, #009688 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #172121 2px, transparent 2px),
            linear-gradient(to bottom, #172121 2px, transparent 2px)
          `,
          backgroundSize: "176px 176px",
        }}
      />

      {/* 3. The Timelapse Construction Canvas */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glowing Shader Filters */}
          <filter id="neonBeamGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="laserPulseGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Gradients */}
          <linearGradient id="columnGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#009688" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#009688" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00E5D0" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="craneLaserGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00E5D0" stopOpacity="1" />
            <stop offset="100%" stopColor="#009688" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="floorMeshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#009688" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#00BCD4" stopOpacity="0.16" />
          </linearGradient>
        </defs>

        {/* ========================================================================= */}
        {/* FOUNDATION BLUEPRINT MESH (Ground Plane with pulsing construction anchors) */}
        {/* ========================================================================= */}
        <g opacity="0.65">
          {/* Ground CAD Grid Lines */}
          <path
            d="M 120 780 L 1380 780"
            stroke="#009688"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity="0.5"
          />
          <path
            d="M 880 750 L 1340 750"
            stroke="#009688"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.3"
          />

          {/* Construction Anchor Coordinates */}
          <g opacity="0.4" className="font-mono text-[9px] fill-[#009688]">
            <text x="140" y="805">SITE_DATUM // 00:00:00:00</text>
            <text x="960" y="805">TOWER_01 // HIGH-CONCURRENCY_HUB</text>
            <text x="680" y="805">SANUMA_VENTURE_ASSEMBLY_MATRIX</text>
          </g>
        </g>

        {/* ========================================================================= */}
        {/* BUILDING 1 (RIGHT): THE MAIN ENTERPRISE TOWER — TIMELAPSE CONSTRUCTION    */}
        {/* ========================================================================= */}
        <g id="main-enterprise-tower" className="origin-bottom">
          {/* Foundation Concrete Base Plinth (Stage 1: Snaps in first) */}
          <g className="timelapse-foundation">
            <polygon
              points="1000,750 1160,680 1320,750 1160,820"
              fill="url(#floorMeshGrad)"
              stroke="#009688"
              strokeWidth="1.5"
              opacity="0.7"
            />
            {/* Base Anchors with glowing ping rings */}
            <circle cx="1000" cy="750" r="3.5" fill="#009688" />
            <circle cx="1320" cy="750" r="3.5" fill="#009688" />
            <circle cx="1160" cy="820" r="3.5" fill="#009688" />
            <circle cx="1160" cy="680" r="3.5" fill="#009688" />
          </g>

          {/* Vertical Steel Girders & Pillars (Stage 2: Shoots upward like timelapse) */}
          <g className="timelapse-columns origin-bottom">
            <line x1="1000" y1="750" x2="1000" y2="240" stroke="url(#columnGrad)" strokeWidth="1.8" />
            <line x1="1160" y1="820" x2="1160" y2="310" stroke="url(#columnGrad)" strokeWidth="2.2" />
            <line x1="1320" y1="750" x2="1320" y2="240" stroke="url(#columnGrad)" strokeWidth="1.8" />
            <line x1="1160" y1="680" x2="1160" y2="170" stroke="url(#columnGrad)" strokeWidth="1.2" strokeDasharray="3 3" />

            {/* Diagonal Engineering Cross-Bracing Cables */}
            <line x1="1000" y1="750" x2="1160" y2="670" stroke="#009688" strokeWidth="0.8" strokeOpacity="0.3" />
            <line x1="1160" y1="750" x2="1000" y2="670" stroke="#009688" strokeWidth="0.8" strokeOpacity="0.3" />
            <line x1="1160" y1="670" x2="1320" y2="590" stroke="#009688" strokeWidth="0.8" strokeOpacity="0.3" />
            <line x1="1320" y1="670" x2="1160" y2="590" stroke="#009688" strokeWidth="0.8" strokeOpacity="0.3" />
          </g>

          {/* Floor-by-Floor Construction Stacking (Stage 3: 7 Modular Floors Drop In) */}
          {/* Floor 1 (Lowest) */}
          <g className="timelapse-floor-1">
            <polygon
              points="1020,730 1160,780 1300,730 1160,680"
              fill="rgba(0, 150, 136, 0.05)"
              stroke="#009688"
              strokeWidth="1.2"
              opacity="0.8"
            />
          </g>

          {/* Floor 2 */}
          <g className="timelapse-floor-2">
            <polygon
              points="1020,650 1160,700 1300,650 1160,600"
              fill="rgba(0, 150, 136, 0.06)"
              stroke="#009688"
              strokeWidth="1.2"
              opacity="0.85"
            />
          </g>

          {/* Floor 3 */}
          <g className="timelapse-floor-3">
            <polygon
              points="1020,570 1160,620 1300,570 1160,520"
              fill="rgba(0, 150, 136, 0.07)"
              stroke="#009688"
              strokeWidth="1.3"
              opacity="0.9"
            />
          </g>

          {/* Floor 4 */}
          <g className="timelapse-floor-4">
            <polygon
              points="1025,490 1160,540 1295,490 1160,440"
              fill="rgba(0, 150, 136, 0.08)"
              stroke="#009688"
              strokeWidth="1.4"
              opacity="0.95"
            />
          </g>

          {/* Floor 5 */}
          <g className="timelapse-floor-5">
            <polygon
              points="1030,410 1160,460 1290,410 1160,360"
              fill="rgba(0, 188, 212, 0.09)"
              stroke="#00BCD4"
              strokeWidth="1.5"
              opacity="0.95"
            />
          </g>

          {/* Floor 6 */}
          <g className="timelapse-floor-6">
            <polygon
              points="1035,330 1160,380 1285,330 1160,280"
              fill="rgba(0, 188, 212, 0.1)"
              stroke="#00BCD4"
              strokeWidth="1.6"
              opacity="1"
            />
          </g>

          {/* Floor 7 (Penthouse / Crown) */}
          <g className="timelapse-floor-7">
            <polygon
              points="1040,250 1160,300 1280,250 1160,200"
              fill="url(#floorMeshGrad)"
              stroke="#00E5D0"
              strokeWidth="2"
              filter="url(#neonBeamGlow)"
            />
            {/* Rooftop Antenna Spire */}
            <line x1="1160" y1="200" x2="1160" y2="110" stroke="#00E5D0" strokeWidth="2.5" filter="url(#neonBeamGlow)" />
            <circle cx="1160" cy="110" r="4.5" fill="#00E5D0" filter="url(#laserPulseGlow)">
              <animate attributeName="r" values="3.5;6;3.5" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="1160" cy="110" r="16" stroke="#00E5D0" strokeWidth="1" opacity="0.5" strokeDasharray="3 3">
              <animate attributeName="r" values="10;32" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0" dur="2.4s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Construction AI Laser Crane (Positions and drops floors from above) */}
          <g className="timelapse-crane">
            {/* Crane Base Mast */}
            <line x1="1260" y1="180" x2="1260" y2="80" stroke="#009688" strokeWidth="2.5" />
            {/* Crane Horizontal Jib Arm */}
            <line x1="1100" y1="80" x2="1360" y2="80" stroke="#009688" strokeWidth="2" />
            <line x1="1260" y1="80" x2="1360" y2="95" stroke="#009688" strokeWidth="1" strokeOpacity="0.5" />
            {/* Laser Hoist Cable reaching down to active floor */}
            <line x1="1160" y1="80" x2="1160" y2="240" stroke="url(#craneLaserGrad)" strokeWidth="2" strokeDasharray="4 2" />
            {/* Laser Welding Spark at hook */}
            <circle cx="1160" cy="245" r="3" fill="#00E5D0" filter="url(#laserPulseGlow)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="0.3s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* AI Energy Scan Wave (Stage 4: Sweeps up through completed floors) */}
          <g className="timelapse-scan-wave">
            <line
              x1="980"
              y1="0"
              x2="1340"
              y2="0"
              stroke="url(#columnGrad)"
              strokeWidth="3.5"
              filter="url(#neonBeamGlow)"
              opacity="0.9"
            />
          </g>

          {/* Blueprint Engineering Elevation Rulers */}
          <g opacity="0.6" className="font-mono text-[9px] fill-[#009688]">
            <text x="1335" y="255">▲ LVL_07 // PENTHOUSE</text>
            <text x="1335" y="415">■ LVL_05 // AI_DECISION_SUITE</text>
            <text x="1335" y="575">■ LVL_03 // SYSTEMS_FRAME</text>
            <text x="1335" y="735">● LVL_01 // BEDROCK_FOUNDATION</text>
            <line x1="1330" y1="250" x2="1380" y2="250" stroke="#009688" strokeWidth="0.8" strokeDasharray="2 2" />
            <line x1="1330" y1="410" x2="1380" y2="410" stroke="#009688" strokeWidth="0.8" strokeDasharray="2 2" />
            <line x1="1330" y1="570" x2="1380" y2="570" stroke="#009688" strokeWidth="0.8" strokeDasharray="2 2" />
            <line x1="1330" y1="730" x2="1380" y2="730" stroke="#009688" strokeWidth="0.8" strokeDasharray="2 2" />
          </g>
        </g>

        {/* ========================================================================= */}
        {/* BUILDING 2 (LEFT): THE R&D VENTURE LAB — SECONDARY TIMELAPSE RISE        */}
        {/* ========================================================================= */}
        <g id="secondary-rd-lab" className="origin-bottom">
          {/* Foundation & Columns */}
          <g className="timelapse-b2-columns origin-bottom">
            <polygon
              points="140,780 280,720 420,780 280,840"
              fill="url(#floorMeshGrad)"
              stroke="#009688"
              strokeWidth="1.2"
              opacity="0.5"
            />
            <line x1="140" y1="780" x2="140" y2="480" stroke="url(#columnGrad)" strokeWidth="1.5" />
            <line x1="280" y1="840" x2="280" y2="540" stroke="url(#columnGrad)" strokeWidth="1.8" />
            <line x1="420" y1="780" x2="420" y2="480" stroke="url(#columnGrad)" strokeWidth="1.5" />
          </g>

          {/* Floor Plates Stacking */}
          <g className="timelapse-b2-floor-1">
            <polygon
              points="140,680 280,740 420,680 280,620"
              fill="rgba(0, 150, 136, 0.05)"
              stroke="#009688"
              strokeWidth="1.2"
              opacity="0.8"
            />
          </g>
          <g className="timelapse-b2-floor-2">
            <polygon
              points="140,580 280,640 420,580 280,520"
              fill="rgba(0, 188, 212, 0.07)"
              stroke="#00BCD4"
              strokeWidth="1.4"
              opacity="0.9"
            />
          </g>
          <g className="timelapse-b2-floor-3">
            {/* Angular High-Tech Faceted Roof */}
            <polygon
              points="140,480 280,420 420,480 280,540"
              fill="url(#floorMeshGrad)"
              stroke="#00E5D0"
              strokeWidth="1.8"
              filter="url(#neonBeamGlow)"
            />
            {/* Structural Cross-Lattice */}
            <line x1="140" y1="480" x2="420" y2="480" stroke="#009688" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="280" y1="420" x2="280" y2="540" stroke="#009688" strokeWidth="0.8" strokeDasharray="3 3" />
          </g>
        </g>

        {/* ========================================================================= */}
        {/* INTER-BUILDING DATA CONDUITS & ENERGY PHOTON PULSES                       */}
        {/* ========================================================================= */}
        <g opacity="0.6">
          <path
            d="M 280 540 L 480 540 L 580 620 L 860 620 L 960 540 L 1020 540"
            stroke="#009688"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            strokeOpacity="0.4"
          />
          {/* Traveling Energy Photon */}
          <circle r="3.5" fill="#00E5D0" filter="url(#laserPulseGlow)">
            <animateMotion
              path="M 280 540 L 480 540 L 580 620 L 860 620 L 960 540 L 1020 540"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>

      {/* 4. Bottom Fade-Out Gradient for Seamless Content Contrast */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent pointer-events-none" />

      {/* ========================================================================= */}
      {/* CSS 60FPS TIMELAPSE ANIMATION ENGINE (GPU-Accelerated 10s Seamless Cycle)  */}
      {/* ========================================================================= */}
      <style jsx global>{`
        /* 1. Foundation: Snaps in at 0s */
        .timelapse-foundation {
          animation: foundation-snap 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes foundation-snap {
          0%, 3% {
            opacity: 0;
            transform: scale(0.92);
          }
          6%, 92% {
            opacity: 0.85;
            transform: scale(1);
          }
          97%, 100% {
            opacity: 0;
            transform: scale(0.92);
          }
        }

        /* 2. Columns: Shoot upward rapidly from ground (0.5s - 2s) */
        .timelapse-columns {
          transform-origin: 1160px 820px;
          animation: columns-rise 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes columns-rise {
          0%, 5% {
            opacity: 0;
            transform: scaleY(0);
          }
          15%, 92% {
            opacity: 1;
            transform: scaleY(1);
          }
          97%, 100% {
            opacity: 0;
            transform: scaleY(0);
          }
        }

        /* 3. Floors Drop and Stack In Rapid Succession (2s - 6s) */
        .timelapse-floor-1 {
          animation: floor-drop-1 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes floor-drop-1 {
          0%, 14% {
            opacity: 0;
            transform: translateY(-40px);
          }
          18%, 92% {
            opacity: 1;
            transform: translateY(0);
          }
          97%, 100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .timelapse-floor-2 {
          animation: floor-drop-2 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes floor-drop-2 {
          0%, 20% {
            opacity: 0;
            transform: translateY(-40px);
          }
          24%, 92% {
            opacity: 1;
            transform: translateY(0);
          }
          97%, 100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .timelapse-floor-3 {
          animation: floor-drop-3 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes floor-drop-3 {
          0%, 26% {
            opacity: 0;
            transform: translateY(-40px);
          }
          30%, 92% {
            opacity: 1;
            transform: translateY(0);
          }
          97%, 100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .timelapse-floor-4 {
          animation: floor-drop-4 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes floor-drop-4 {
          0%, 32% {
            opacity: 0;
            transform: translateY(-40px);
          }
          36%, 92% {
            opacity: 1;
            transform: translateY(0);
          }
          97%, 100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .timelapse-floor-5 {
          animation: floor-drop-5 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes floor-drop-5 {
          0%, 38% {
            opacity: 0;
            transform: translateY(-40px);
          }
          42%, 92% {
            opacity: 1;
            transform: translateY(0);
          }
          97%, 100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .timelapse-floor-6 {
          animation: floor-drop-6 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes floor-drop-6 {
          0%, 44% {
            opacity: 0;
            transform: translateY(-40px);
          }
          48%, 92% {
            opacity: 1;
            transform: translateY(0);
          }
          97%, 100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .timelapse-floor-7 {
          animation: floor-drop-7 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes floor-drop-7 {
          0%, 50% {
            opacity: 0;
            transform: translateY(-50px) scale(0.95);
          }
          55%, 92% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          97%, 100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        /* 4. Crane Animation: Guides construction across top (10% - 60%) */
        .timelapse-crane {
          animation: crane-activity 10s linear infinite;
        }
        @keyframes crane-activity {
          0%, 8% {
            opacity: 0;
            transform: translateX(30px);
          }
          14%, 60% {
            opacity: 0.9;
            transform: translateX(0);
          }
          66%, 100% {
            opacity: 0;
            transform: translateX(-30px);
          }
        }

        /* 5. AI Energy Scan Wave: Sweeps vertically from 60% to 75% */
        .timelapse-scan-wave {
          animation: scan-wave-sweep 10s ease-in-out infinite;
        }
        @keyframes scan-wave-sweep {
          0%, 58% {
            opacity: 0;
            transform: translateY(780px);
          }
          60% {
            opacity: 0.95;
            transform: translateY(780px);
          }
          72% {
            opacity: 0.95;
            transform: translateY(180px);
          }
          76%, 100% {
            opacity: 0;
            transform: translateY(140px);
          }
        }

        /* 6. Building 2 Secondary Timelapse (Staggered by ~1.5s) */
        .timelapse-b2-columns {
          transform-origin: 280px 840px;
          animation: b2-cols 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes b2-cols {
          0%, 18% {
            opacity: 0;
            transform: scaleY(0);
          }
          26%, 92% {
            opacity: 1;
            transform: scaleY(1);
          }
          97%, 100% {
            opacity: 0;
            transform: scaleY(0);
          }
        }

        .timelapse-b2-floor-1 {
          animation: b2-f1 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes b2-f1 {
          0%, 26% { opacity: 0; transform: translateY(-30px); }
          30%, 92% { opacity: 1; transform: translateY(0); }
          97%, 100% { opacity: 0; }
        }

        .timelapse-b2-floor-2 {
          animation: b2-f2 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes b2-f2 {
          0%, 34% { opacity: 0; transform: translateY(-30px); }
          38%, 92% { opacity: 1; transform: translateY(0); }
          97%, 100% { opacity: 0; }
        }

        .timelapse-b2-floor-3 {
          animation: b2-f3 10s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes b2-f3 {
          0%, 42% { opacity: 0; transform: translateY(-40px); }
          48%, 92% { opacity: 1; transform: translateY(0); }
          97%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
