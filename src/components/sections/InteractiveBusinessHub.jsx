"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  Building2,
  TrendingUp,
  Users,
  Cpu,
  Workflow,
  Layers,
  Megaphone,
  Lightbulb,
  Target,
  Zap,
  ArrowRight,
} from "lucide-react";
import { FadeIn } from "@/components/ui/MotionReveal";

const DEPARTMENTS = [
  {
    id: "sales",
    num: "01",
    name: "Sales & Marketing",
    short: "Sales & Growth",
    tagline: "Revenue Engine & Pan-India Distribution",
    icon: Target,
    angle: 0,
    accent: "#00E5D0",
    color: "#009688",
    description:
      "Engineering scalable revenue channels across Indian Tier 1, 2, and 3 markets through automated CRM pipelines and compounding retention loops.",
    systems: [
      "Algorithmic lead scoring & automated pipeline routing",
      "Omnichannel multi-region distribution architecture",
      "Compounding customer retention & CAC compression",
    ],
    metric: "Predictable Revenue",
  },
  {
    id: "finance",
    num: "02",
    name: "Finance & Accounting",
    short: "Finance & Accounts",
    tagline: "Capital Architecture & Unit Margins",
    icon: TrendingUp,
    angle: 40,
    accent: "#10B981",
    color: "#10B981",
    description:
      "Engineering uncompromising unit-economic durability with automated financial reconciliation, dynamic capital allocation, and stress-tested cashflows.",
    systems: [
      "Real-time unit-economic & margin telemetry",
      "Automated treasury & vendor reconciliation pipelines",
      "Dynamic capital stress-testing & forecasting",
    ],
    metric: "Real-time P&L Telemetry",
  },
  {
    id: "admin",
    num: "03",
    name: "Administration",
    short: "Administration",
    tagline: "Corporate Governance & Regulatory Velocity",
    icon: Building2,
    angle: 80,
    accent: "#14B8A6",
    color: "#14B8A6",
    description:
      "Eliminating corporate drag through standardized compliance pipelines, legal structuring, automated board telemetry, and institutional governance.",
    systems: [
      "Automated corporate regulatory & compliance filings",
      "Institutional contract lifecycle & legal workflows",
      "Centralized executive decision registry",
    ],
    metric: "100% Compliant Autonomy",
  },
  {
    id: "rd",
    num: "04",
    name: "Research & Development",
    short: "R&D & Innovation",
    tagline: "Whitespace Mapping & Product Prototyping",
    icon: Lightbulb,
    angle: 120,
    accent: "#F59E0B",
    color: "#F59E0B",
    description:
      "Uncovering commercial inefficiencies before competitors through rapid customer hypothesis sprints, de-risked economic models, and prototype stress-testing.",
    systems: [
      "White-space competitive analysis & vulnerability mapping",
      "Rapid prototype engineering with direct customer testing",
      "Applied AI capability exploration & proprietary IP creation",
    ],
    metric: "Validated Innovation",
  },
  {
    id: "pr",
    num: "05",
    name: "Public Relations",
    short: "PR & Brand",
    tagline: "Brand Conviction & Market Authority",
    icon: Megaphone,
    angle: 160,
    accent: "#EC4899",
    color: "#EC4899",
    description:
      "Building market trust and narrative conviction. We position ventures as category authorities across pan-India commercial ecosystems and partner networks.",
    systems: [
      "Category authority thought-leadership positioning",
      "High-conviction partner communications & enterprise trust",
      "Pan-India brand presence and reputation management",
    ],
    metric: "Category Authority",
  },
  {
    id: "production",
    num: "06",
    name: "Production & Delivery",
    short: "Production",
    tagline: "Quality Precision & Standardized Velocity",
    icon: Layers,
    angle: 200,
    accent: "#8B5CF6",
    color: "#8B5CF6",
    description:
      "Standardizing service delivery and product fulfillment with rigorous automated quality assurance gates, inventory telemetry, and customer handover precision.",
    systems: [
      "Quality assurance inspection protocols & defect zeroing",
      "Real-time operational fulfillment & delivery tracking",
      "Vendor orchestration and SLA compliance telemetry",
    ],
    metric: "Standardized Precision",
  },
  {
    id: "ops",
    num: "07",
    name: "Operations",
    short: "Operations & AI",
    tagline: "Codified SOPs & Autonomous AI Workflows",
    icon: Workflow,
    angle: 240,
    accent: "#00E5D0",
    color: "#009688",
    description:
      "Codifying business workflows into repeatable SOP playbooks and embedding autonomous AI agent loops to permanently eliminate operational bottlenecks.",
    systems: [
      "Standardized departmental playbooks eliminating heroics",
      "Autonomous agentic AI decision loops for workflows",
      "Cross-departmental SLA tracking & bottleneck elimination",
    ],
    metric: "Autonomous Execution",
  },
  {
    id: "it",
    num: "08",
    name: "Information Technology",
    short: "IT & Systems",
    tagline: "Enterprise Cloud & Zero-Debt Infrastructure",
    icon: Cpu,
    angle: 280,
    accent: "#06B6D4",
    color: "#06B6D4",
    description:
      "Architecting enterprise-grade digital infrastructure without agency debt. We deploy resilient cloud-native microservices and automated CI/CD pipelines.",
    systems: [
      "Resilient cloud microservices & database schemas",
      "Automated CI/CD deployment pipelines with zero downtime",
      "Enterprise cybersecurity & transactional encryption",
    ],
    metric: "Zero Technical Debt",
  },
  {
    id: "hr",
    num: "09",
    name: "Human Resources",
    short: "Human Resources",
    tagline: "Talent Density & Organizational Architecture",
    icon: Users,
    angle: 320,
    accent: "#3B82F6",
    color: "#3B82F6",
    description:
      "High-performing ventures require focused talent density. We replace subjective hiring with competency scorecards, automated onboarding, and clear org structures.",
    systems: [
      "Structured role competency scorecards & screening",
      "Automated employee onboarding & knowledge playbooks",
      "Objective KPI performance tracking & incentive alignment",
    ],
    metric: "High Talent Density",
  },
];

export default function InteractiveBusinessHub() {
  const [activeId, setActiveId] = useState("ops");
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const elem = sectionRef.current;
    if (!elem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(elem);
    return () => observer.disconnect();
  }, []);

  const activeDept =
    DEPARTMENTS.find((d) => d.id === (hoveredId || activeId)) || DEPARTMENTS[0];
  const ActiveIcon = activeDept.icon;

  // Geometry configuration: perfectly tuned so nodes have 90px+ space between each other
  const centerCoord = 270;
  const orbitRadius = 195;
  const playState = isInView && !isPaused ? "running" : "paused";

  return (
    <section
      ref={sectionRef}
      id="business-architecture"
      className="py-14 sm:py-20 bg-[#050909] text-white relative overflow-hidden"
      aria-label="The 360° Business Operating System"
    >
      {/* Background Cyber Ambient Grid & Pulsing Glows (GPU-friendly Radial Gradients) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#00E5D0 1.5px, transparent 1.5px)`,
          backgroundSize: "36px 36px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0, 150, 136, 0.14) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0, 229, 208, 0.10) 0%, transparent 70%)" }}
      />

      <Container className="relative z-10">
        {/* Section Header: Compact & Focused without extra eyebrow badge */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <FadeIn direction="up">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-3 sm:mb-4">
              The 360° Business{" "}
              <span className="bg-gradient-to-r from-[#00E5D0] via-[#009688] to-[#10B981] bg-clip-text text-transparent">
                Operating System.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#F7F9F9]/70 leading-relaxed max-w-2xl mx-auto">
              We architect, systemize, and automate all nine interconnected departments that make an enterprise resilient, profitable, and self-compounding.
            </p>
          </FadeIn>
        </div>

        {/* ========================================================================= */}
        {/* RESPONSIVE 360° VIEW: Mobile Touch Grid (<lg) & Desktop Revolving Orbit (>=lg) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 xl:gap-12 items-center">
          {/* MOBILE & TABLET: Ultra-Lightweight Touch Matrix (Zero 13-Animation Lag on Phones) */}
          <div className="col-span-12 lg:hidden">
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 max-w-md mx-auto">
              {DEPARTMENTS.map((dept) => {
                const isSelected = dept.id === activeDept.id;
                const Icon = dept.icon;

                return (
                  <button
                    key={`mobile-${dept.id}`}
                    type="button"
                    onClick={() => {
                      setActiveId(dept.id);
                      setHoveredId(dept.id);
                    }}
                    className={`p-2.5 sm:p-3 rounded-xl border transition-all duration-150 flex flex-col items-center justify-center text-center cursor-pointer active:scale-95 ${
                      isSelected
                        ? "bg-[#00E5D0]/15 border-[#00E5D0] shadow-md shadow-[#00E5D0]/20"
                        : "bg-[#091313] border-white/10 text-white/70 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mb-1 transition-colors ${
                        isSelected
                          ? "bg-[#00E5D0] text-[#050909]"
                          : "bg-white/5 text-white/80"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs font-bold leading-tight line-clamp-1 ${
                        isSelected ? "text-white" : "text-white/70"
                      }`}
                    >
                      {dept.short}
                    </span>
                    <span className="text-[8px] font-mono text-white/40 mt-0.5">
                      {dept.num}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* DESKTOP (>=lg): High-End Revolving Planetary Orbit Canvas */}
          <div
            className="hidden lg:flex lg:col-span-7 flex-col items-center justify-center relative select-none w-full overflow-hidden py-2"
            style={{ touchAction: "pan-y" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              setHoveredId(null);
            }}
          >
            {/* Responsive Scaled Orbit Canvas */}
            <div className="relative w-[540px] h-[540px] flex items-center justify-center">
              <div className="absolute w-[540px] h-[540px] origin-center flex items-center justify-center">
                {/* Outer Subtle Orbit Guide Ring */}
                <div className="absolute w-[490px] h-[490px] rounded-full border border-white/10 pointer-events-none opacity-40" />

                {/* Main Orbit Path */}
                <div className="absolute w-[390px] h-[390px] rounded-full border border-white/15 pointer-events-none shadow-[0_0_40px_rgba(0,150,136,0.15)]" />
                <div
                  className="absolute w-[390px] h-[390px] rounded-full border border-dashed border-[#00E5D0]/35 pointer-events-none"
                  style={{
                    animation: "planetary-orbit 60s linear infinite",
                    animationPlayState: playState,
                    willChange: "transform",
                  }}
                />

                {/* Inner Reverse Tech Orbit Ring */}
                <div
                  className="absolute w-[260px] h-[260px] rounded-full border border-white/10 pointer-events-none"
                  style={{
                    animation: "reverse-spin 70s linear infinite",
                    animationPlayState: playState,
                    willChange: "transform",
                  }}
                />

                {/* Center Core: THE BUSINESS REACTOR */}
                <div className="relative z-30 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-b from-[#132424] via-[#0E1A1A] to-[#060B0B] border-2 border-[#00E5D0] shadow-[0_0_50px_rgba(0,229,208,0.4)] group cursor-pointer">
                  <span className="animate-pulse absolute inline-flex h-16 w-16 rounded-full bg-[#00E5D0] opacity-20 pointer-events-none" />
                  <div className="w-11 h-11 rounded-full bg-[#00E5D0]/20 border border-[#00E5D0]/50 flex items-center justify-center text-[#00E5D0] shadow-inner mb-1 group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-[#00E5D0] drop-shadow-[0_0_8px_rgba(0,229,208,0.8)]" />
                  </div>
                  <div className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-white">
                    BUSINESS
                  </div>
                </div>

                {/* --------------------------------------------------------------------- */}
                {/* THE 9 REVOLVING PLANETARY ORBS + DYNAMIC SVG LASER SPOKES             */}
                {/* --------------------------------------------------------------------- */}
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    animation: "planetary-orbit 55s linear infinite",
                    animationPlayState: playState,
                    willChange: "transform",
                  }}
                >
                {/* SVG Connecting Laser Spokes from Center to each Node */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 540 540"
                >
                  {DEPARTMENTS.map((dept) => {
                    const rad = (dept.angle * Math.PI) / 180;
                    const x = centerCoord + orbitRadius * Math.cos(rad);
                    const y = centerCoord + orbitRadius * Math.sin(rad);
                    const isSelected = dept.id === activeDept.id;

                    return (
                      <g key={`beam-${dept.id}`}>
                        {/* Spoke line */}
                        <line
                          x1={centerCoord}
                          y1={centerCoord}
                          x2={x}
                          y2={y}
                          stroke={isSelected ? dept.accent : "rgba(255, 255, 255, 0.1)"}
                          strokeWidth={isSelected ? "2.5" : "1"}
                          strokeDasharray={isSelected ? "5 4" : "2 6"}
                          className="transition-all duration-300"
                        />
                        {/* Static Glowing Energy Dot on active spoke */}
                        {isSelected && (
                          <circle
                            cx={(centerCoord + x) / 2}
                            cy={(centerCoord + y) / 2}
                            r="3"
                            fill="#00E5D0"
                            className="pointer-events-none shadow-xs"
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* The 9 Distinct Planetary Satellite Orbs (Generous spacing, NO COLLAPSE) */}
                {DEPARTMENTS.map((dept) => {
                  const rad = (dept.angle * Math.PI) / 180;
                  const x = centerCoord + orbitRadius * Math.cos(rad);
                  const y = centerCoord + orbitRadius * Math.sin(rad);
                  const isSelected = dept.id === activeDept.id;
                  const Icon = dept.icon;

                  return (
                    <div
                      key={dept.id}
                      style={{
                        position: "absolute",
                        left: `${x}px`,
                        top: `${y}px`,
                      }}
                      className="-translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                    >
                      {/* Counter-rotation so labels & icons ALWAYS stay upright */}
                      <div
                        style={{
                          animation: "counter-rotate 55s linear infinite",
                          animationPlayState: playState,
                          willChange: "transform",
                        }}
                        className="flex flex-col items-center"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setActiveId(dept.id);
                            setHoveredId(dept.id);
                          }}
                          onMouseEnter={() => setHoveredId(dept.id)}
                          className={`group relative flex flex-col items-center cursor-pointer focus:outline-none transition-transform duration-300 ${
                            isSelected ? "scale-115 z-30" : "hover:scale-110 z-10"
                          }`}
                        >
                          {/* Circular Planetary Orb */}
                          <div
                            className={`relative w-13 h-13 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                              isSelected
                                ? "border-2 border-white shadow-[0_0_30px_rgba(0,229,208,0.8)] bg-[#0C1616]"
                                : "bg-[#0C1616] border border-white/20 hover:border-white/50 shadow-lg"
                            }`}
                            style={{
                              backgroundColor: isSelected ? dept.accent : undefined,
                              boxShadow: isSelected
                                ? `0 0 35px ${dept.accent}90, 0 0 10px ${dept.accent}`
                                : undefined,
                            }}
                          >
                            {/* Department Icon */}
                            <Icon
                              className={`w-5 h-5 transition-colors ${
                                isSelected
                                  ? "text-[#050909]"
                                  : "text-white/80 group-hover:text-white"
                              }`}
                            />

                            {/* Node Number Badge */}
                            <span
                              className={`absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold leading-none border shadow-xs ${
                                isSelected
                                  ? "bg-[#050909] text-white border-white/40"
                                  : "bg-[#142323] text-white/70 border-white/15"
                              }`}
                            >
                              {dept.num}
                            </span>
                          </div>

                          {/* Compact Upright Micro-Label Chip */}
                          <div
                            className={`mt-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold tracking-tight whitespace-nowrap transition-all duration-200 shadow-md ${
                              isSelected
                                ? "bg-white text-black font-extrabold shadow-[0_2px_12px_rgba(0,229,208,0.4)]"
                                : "bg-[#0A1414]/90 text-white/80 border border-white/15 group-hover:border-[#00E5D0] group-hover:text-white"
                            }`}
                          >
                            {dept.short}
                          </div>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

          {/* Right 5 Columns: Compact, Sleek Minimalist HUD Card */}
          <div className="lg:col-span-5 max-w-sm sm:max-w-md w-full mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDept.id}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#091313] border border-white/15 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] relative overflow-hidden"
                style={{
                  borderColor: `${activeDept.accent}35`,
                }}
              >
                {/* Subtle Ambient Glow */}
                <div
                  className="absolute -top-20 -right-20 w-48 h-48 rounded-full pointer-events-none opacity-20"
                  style={{
                    background: `radial-gradient(circle, ${activeDept.accent} 0%, transparent 70%)`,
                  }}
                />

                {/* Department Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md border"
                    style={{
                      backgroundColor: `${activeDept.color}25`,
                      borderColor: `${activeDept.accent}45`,
                    }}
                  >
                    <ActiveIcon
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ color: activeDept.accent }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white tracking-tight leading-snug">
                      {activeDept.name}
                    </h3>
                    <div
                      className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-0.5"
                      style={{ color: activeDept.accent }}
                    >
                      {activeDept.tagline}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#F7F9F9]/80 leading-relaxed mb-3.5 sm:mb-5">
                  {activeDept.description}
                </p>

                {/* How We Build Link */}
                <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href="/how-we-build"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00E5D0] hover:text-white transition-all group"
                  >
                    <span>How We Build</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00E5D0] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>

      {/* Embedded 60fps GPU Keyframe Animations */}
      <style jsx global>{`
        @keyframes planetary-orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes counter-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes radar-sweep {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}



