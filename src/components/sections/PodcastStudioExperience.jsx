"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Radio,
  Headphones,
  Mic,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Zap,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Layers,
  Sliders,
  Disc,
  CheckCircle2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionReveal";

// Official streaming platforms with authentic brand palettes
const PLATFORMS = [
  {
    name: "Spotify",
    handle: "Sanuma Podcast",
    href: "https://open.spotify.com",
    badgeBg: "hover:bg-[#1DB954]/15 hover:border-[#1DB954] text-[#1DB954]",
    dotColor: "bg-[#1DB954]",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.309c-.218.358-.682.473-1.04.255-2.855-1.745-6.449-2.14-10.682-1.173-.409.093-.815-.164-.908-.573-.093-.41.164-.816.573-.909 4.636-1.06 8.607-.611 11.802 1.345.358.218.473.682.255 1.056zm1.469-3.266c-.273.445-.858.588-1.303.315-3.27-2.009-8.254-2.59-12.12-1.416-.502.152-1.034-.134-1.186-.636-.152-.502.134-1.034.636-1.186 4.417-1.341 9.907-.694 13.658 1.62.445.273.588.858.315 1.303zm.126-3.411c-3.921-2.328-10.384-2.543-14.137-1.404-.602.183-1.238-.163-1.421-.765-.183-.602.163-1.238.765-1.421 4.316-1.31 11.442-1.06 15.962 1.624.542.322.721 1.026.399 1.568-.322.542-1.026.721-1.568.398z" />
      </svg>
    ),
  },
  {
    name: "Apple Podcasts",
    handle: "Sanuma India",
    href: "https://podcasts.apple.com",
    badgeBg: "hover:bg-[#B150E2]/15 hover:border-[#B150E2] text-[#B150E2]",
    dotColor: "bg-[#B150E2]",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-1.04 2.76.99.08 2.06-.51 2.68-1.26" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "Watch in 4K",
    href: "https://youtube.com",
    badgeBg: "hover:bg-[#FF0000]/15 hover:border-[#FF0000] text-[#FF0000]",
    dotColor: "bg-[#FF0000]",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Amazon Music",
    handle: "HD Lossless",
    href: "https://music.amazon.com",
    badgeBg: "hover:bg-[#00A8E1]/15 hover:border-[#00A8E1] text-[#00A8E1]",
    dotColor: "bg-[#00A8E1]",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M13.9 14.8c-.2-.1-.4-.1-.5-.1-1.3 0-2.2.9-2.2 2.2 0 1.2.9 2.1 2.2 2.1.2 0 .4 0 .5-.1v-4.1zm5.1-4.7v7.5c0 1.9-1.2 3.2-3.1 3.2-.8 0-1.6-.3-2.1-.8-.4.5-1.1.8-1.9.8-1.9 0-3.4-1.5-3.4-3.5 0-2 1.4-3.5 3.4-3.5.7 0 1.4.2 1.9.7v-2c0-1.1-.7-1.7-1.8-1.7-.8 0-1.5.3-2 .8-.2.2-.5.2-.8 0l-.8-.8c-.2-.2-.2-.5 0-.7.8-.8 1.9-1.3 3.5-1.3 2.5 0 4.1 1.4 4.1 3.9v3.8c.2-.2.5-.3.8-.3.3 0 .5.2.5.5v.7c0 .4-.3.6-.6.7l-1.3.3c-.2 0-.4-.1-.5-.3v-7c0-.2.2-.4.4-.4.2 0 .4.2.4.4v.3h1.5z" />
      </svg>
    ),
  },
];

// Rich episode data structured for high visual clarity
const EPISODES = [
  {
    id: "ep-04",
    number: "04",
    title: "Building Autopilot Companies: Embedding Deterministic AI Workflows",
    category: "AI & Autopilot",
    categoryColor: "text-[#009688] bg-[#009688]/10 border-[#009688]/30",
    guest: "Sanuma AI Lab & Engineering Leads",
    totalSeconds: 2535, // 42:15
    durationStr: "42:15",
    date: "Sep 2026",
    highlightStat: "38+ Autonomous Pipelines",
    keyPunchline:
      "Deterministic workflow execution beats chatbot hype every single time. Here is how we replace operational bottlenecks with zero-fatigue software pipelines.",
    visualTakeaways: [
      { icon: Zap, label: "Autonomous AI Loops" },
      { icon: Cpu, label: "Deterministic Pipelines" },
      { icon: TrendingUp, label: "Zero Fatigue Margins" },
    ],
    waveformProfile: [
      35, 65, 80, 45, 95, 75, 40, 90, 60, 40, 85, 55, 90, 35, 70, 95, 50, 85,
      60, 75, 40, 95, 65, 80, 55, 90, 45, 70, 85, 40, 95, 60, 75, 50, 85, 40,
      90, 65, 80, 50,
    ],
  },
  {
    id: "ep-03",
    number: "03",
    title: "Unit Economics vs Growth Hacking: The Disciplined Path to Profit",
    category: "Unit Economics",
    categoryColor: "text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30",
    guest: "Venture Operating Partners",
    totalSeconds: 2280, // 38:00
    durationStr: "38:00",
    date: "Aug 2026",
    highlightStat: "4.8x LTV/CAC Floor",
    keyPunchline:
      "Growth without positive contribution margin is vanity. We break down pricing elasticity, Tier-2/3 unit payback curves, and capital efficiency.",
    visualTakeaways: [
      { icon: TrendingUp, label: "LTV/CAC Durability" },
      { icon: ShieldCheck, label: "Pricing Power in India" },
      { icon: Layers, label: "Payback Period < 90 Days" },
    ],
    waveformProfile: [
      50, 70, 45, 85, 60, 90, 40, 75, 55, 80, 40, 90, 65, 85, 50, 70, 40, 95,
      60, 80, 45, 85, 55, 75, 40, 90, 65, 80, 45, 70, 85, 50, 90, 60, 75, 40,
      85, 55, 70, 45,
    ],
  },
  {
    id: "ep-02",
    number: "02",
    title: "Zero Technical Debt: Architecting Cloud Stacks That Scale Nationwide",
    category: "Cloud Architecture",
    categoryColor: "text-[#06B6D4] bg-[#06B6D4]/10 border-[#06B6D4]/30",
    guest: "Principal Infrastructure Architect",
    totalSeconds: 2760, // 46:00
    durationStr: "46:00",
    date: "Aug 2026",
    highlightStat: "99.99% Cloud Uptime",
    keyPunchline:
      "How to avoid agency spaghetti code. We dismantle monolithic traps, relational database scaling, and event-driven micro-services.",
    visualTakeaways: [
      { icon: Cpu, label: "Event-Driven Streams" },
      { icon: ShieldCheck, label: "Zero-Downtime Deploy" },
      { icon: Layers, label: "PostgreSQL at Scale" },
    ],
    waveformProfile: [
      40, 60, 75, 50, 85, 65, 40, 90, 55, 80, 45, 70, 95, 60, 80, 45, 90, 65,
      50, 85, 40, 75, 90, 55, 70, 85, 40, 95, 60, 80, 45, 70, 90, 55, 75, 40,
      85, 60, 70, 45,
    ],
  },
  {
    id: "ep-01",
    number: "01",
    title: "Why India Needs Systems-Driven Venture Builders Over IT Agencies",
    category: "Venture Building",
    categoryColor: "text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/30",
    guest: "Sanuma Founding Team",
    totalSeconds: 2100, // 35:00
    durationStr: "35:00",
    date: "Jul 2026",
    highlightStat: "100% Equity Alignment",
    keyPunchline:
      "Consulting on hourly billing is broken. The future belongs to skin-in-the-game venture co-builders with rigorous execution playbooks.",
    visualTakeaways: [
      { icon: ShieldCheck, label: "The Agency Fallacy" },
      { icon: Zap, label: "Skin-In-The-Game Equity" },
      { icon: Layers, label: "Ahmedabad Studio HQ" },
    ],
    waveformProfile: [
      30, 55, 70, 40, 80, 60, 35, 85, 50, 75, 40, 65, 90, 55, 75, 40, 85, 60,
      45, 80, 35, 70, 85, 50, 65, 80, 35, 90, 55, 75, 40, 65, 85, 50, 70, 35,
      80, 55, 65, 40,
    ],
  },
];

const CATEGORIES = [
  "All Tapes",
  "AI & Autopilot",
  "Unit Economics",
  "Cloud Architecture",
  "Venture Building",
];

const SOUNDBITES = [
  {
    quote:
      "If your business breaks when you step away for 48 hours, you didn't build a company. You built a high-stress job.",
    speaker: "Sanuma Studio Tape #03",
    tag: "Operational Resilience",
  },
  {
    quote:
      "Deterministic AI pipelines create compounding cash flow. Generic chatbots just create monthly OpenAI token bills.",
    speaker: "Sanuma Studio Tape #04",
    tag: "Applied AI Philosophy",
  },
  {
    quote:
      "Venture architecture is like structural civil engineering: write code that survives high pressure and high volume.",
    speaker: "Sanuma Studio Tape #02",
    tag: "Scalable Engineering",
  },
];

export default function PodcastStudioExperience() {
  const [activeEpIndex, setActiveEpIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSeconds, setPlaybackSeconds] = useState(145); // initial teaser offset
  const [playbackSpeed, setPlaybackSpeed] = useState("1.0x");
  const [isMuted, setIsMuted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Tapes");
  const [scrubberHover, setScrubberHover] = useState(null);

  const activeEpisode = EPISODES[activeEpIndex];

  // Live timer effect when playing
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlaybackSeconds((prev) => {
          if (prev >= activeEpisode.totalSeconds) {
            setIsPlaying(false);
            return 0;
          }
          const speedMultiplier = parseFloat(playbackSpeed) || 1.0;
          return Math.min(prev + Math.round(speedMultiplier), activeEpisode.totalSeconds);
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeEpisode.totalSeconds, playbackSpeed]);

  // Format seconds to mm:ss
  const formatTime = (totalSec) => {
    const m = Math.floor(totalSec / 60);
    const s = Math.floor(totalSec % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Playhead scrub handler
  const handleScrub = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    setPlaybackSeconds(Math.floor(ratio * activeEpisode.totalSeconds));
  };

  const cycleSpeed = () => {
    const speeds = ["1.0x", "1.25x", "1.5x", "2.0x"];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIdx]);
  };

  const skipSeconds = (delta) => {
    setPlaybackSeconds((prev) =>
      Math.max(0, Math.min(prev + delta, activeEpisode.totalSeconds))
    );
  };

  const selectAndPlay = (idx) => {
    setActiveEpIndex(idx);
    setPlaybackSeconds(0);
    setIsPlaying(true);
    // Smooth scroll to top of console if on mobile
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const consoleElem = document.getElementById("master-podcast-console");
      if (consoleElem) {
        consoleElem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const filteredEpisodes =
    selectedCategory === "All Tapes"
      ? EPISODES
      : EPISODES.filter((ep) => ep.category === selectedCategory);

  const progressPercent = (playbackSeconds / activeEpisode.totalSeconds) * 100;

  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-32 bg-[#FAFBFB] relative overflow-hidden">
      {/* Background Decorative Studio Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#009688]/12 via-[#009688]/4 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-96 right-0 w-[500px] h-[500px] bg-[#0DF0B0]/6 blur-[120px] pointer-events-none -z-10" />

      <Container>
        {/* ===================== HERO / HEADER ===================== */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <FadeIn direction="up">
            {/* Live Studio Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#172121] text-white shadow-lg border border-[#009688]/30 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0DF0B0] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#009688]" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0DF0B0]">
                STUDIO RECORDING HQ · AHMEDABAD
              </span>
              <span className="text-[#5F6868] text-xs">|</span>
              <span className="text-[11px] font-medium text-[#D1D5DB]">
                SEASON 01 MASTERED
              </span>
            </div>

            {/* Bold Punchy Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#172121] leading-[1.08] mb-5">
              The Sanuma <span className="text-[#009688]">Podcast.</span>
            </h1>

            {/* 1-Liner Vision - Minimal Theory, Instant Impact */}
            <p className="text-lg sm:text-2xl text-[#5F6868] max-w-2xl mx-auto font-medium leading-relaxed mb-8">
              Raw venture breakdowns, AI operating systems, and unfiltered
              architectural blueprints from India.
            </p>

            {/* Streaming Platform Interactive Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {PLATFORMS.map((plat) => (
                <a
                  key={plat.name}
                  href={plat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-white border border-[#E5EAEA] shadow-xs text-xs font-semibold text-[#172121] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${plat.badgeBg}`}
                >
                  <span className="flex-shrink-0 transition-transform group-hover:scale-110">
                    {plat.icon}
                  </span>
                  <span>{plat.name}</span>
                  <ExternalLink className="w-3 h-3 text-[#9CA3AF] group-hover:text-current opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* ===================== MASTER AUDIO CONSOLE (VISUAL CENTERPIECE) ===================== */}
        <FadeIn direction="up" delay={0.1}>
          <div
            id="master-podcast-console"
            className="mb-16 sm:mb-24 rounded-3xl bg-[#0D1515] border border-[#009688]/30 text-white relative overflow-hidden shadow-2xl shadow-[#009688]/15"
          >
            {/* Ambient console backlights */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#009688]/20 via-[#009688]/5 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#0DF0B0]/10 blur-3xl pointer-events-none" />

            {/* Subtle top studio telemetry strip */}
            <div className="border-b border-white/10 px-6 sm:px-10 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs bg-black/40 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#009688]/20 text-[#0DF0B0] font-mono text-[11px] font-bold tracking-wider">
                  <Radio className="w-3 h-3 animate-pulse" />
                  AUDIO FEED ACTIVE
                </span>
                <span className="text-white/60 hidden sm:inline text-[11px] font-mono">
                  DOLBY ATMOS · 24-BIT / 96KHZ LOSSLESS
                </span>
              </div>
              <div className="flex items-center gap-4 text-white/70 font-mono text-[11px]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#009688]" />
                  {activeEpisode.durationStr}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-[#0DF0B0] font-semibold">
                  {activeEpisode.highlightStat}
                </span>
              </div>
            </div>

            {/* Console Core Body */}
            <div className="p-6 sm:p-10 lg:p-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Vinyl / Disc Visualizer + Episode Info */}
              <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* 3D Vinyl Cassette Graphic with Spin when Playing */}
                <div className="relative flex-shrink-0 group">
                  <div
                    className={`w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-[#172121] via-[#004D40] to-[#009688] p-1.5 shadow-2xl relative overflow-hidden flex items-center justify-center border border-white/20 transition-all duration-500 ${
                      isPlaying ? "ring-4 ring-[#009688]/50 shadow-[#009688]/40" : ""
                    }`}
                  >
                    {/* Vinyl Grooves pattern */}
                    <div
                      className={`w-full h-full rounded-xl bg-[#0B1111] border border-white/10 flex items-center justify-center relative overflow-hidden ${
                        isPlaying ? "animate-[spin_10s_linear_infinite]" : ""
                      }`}
                    >
                      <div className="absolute inset-1 rounded-full border border-white/5" />
                      <div className="absolute inset-3 rounded-full border border-white/5" />
                      <div className="absolute inset-5 rounded-full border border-white/10" />
                      <div className="w-10 h-10 rounded-full bg-[#009688] border-2 border-[#172121] flex items-center justify-center shadow-inner">
                        <Disc className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Holographic corner badge */}
                    <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono font-bold text-[#0DF0B0] border border-white/20">
                      EP {activeEpisode.number}
                    </div>
                  </div>

                  {/* Play/Pause overlay badge for vinyl */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? "Pause episode" : "Play episode"}
                    className="absolute inset-0 rounded-2xl bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer backdrop-blur-[2px]"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#009688] text-white flex items-center justify-center shadow-lg">
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      )}
                    </div>
                  </button>
                </div>

                {/* Episode Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#009688]/20 text-[#0DF0B0] border border-[#009688]/40">
                      {activeEpisode.category}
                    </span>
                    <span className="text-xs text-white/50 font-mono">
                      {activeEpisode.date}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-2 tracking-tight">
                    {activeEpisode.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-white/70 line-clamp-2 leading-relaxed mb-4">
                    {activeEpisode.keyPunchline}
                  </p>

                  {/* Takeaway Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {activeEpisode.visualTakeaways.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-medium text-white/80"
                        >
                          <Icon className="w-3 h-3 text-[#0DF0B0]" />
                          {item.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Audio Spectrum Visualizer & Controls Deck */}
              <div className="lg:col-span-6 bg-white/[0.04] border border-white/10 rounded-2xl p-5 sm:p-7 backdrop-blur-xl">
                {/* Dynamic Equalizer Audio Waveform Bars */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/50 mb-2">
                    <span className="flex items-center gap-1.5 text-[#0DF0B0]">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isPlaying ? "bg-[#0DF0B0] animate-ping" : "bg-white/40"
                        }`}
                      />
                      SPECTRUM FREQUENCY ANALYZER
                    </span>
                    <span>{isPlaying ? "LIVE PLAYBACK" : "PAUSED"}</span>
                  </div>

                  {/* 40-bar dynamic visualizer */}
                  <div
                    onClick={handleScrub}
                    className="h-16 sm:h-20 flex items-end justify-between gap-[2px] sm:gap-1 px-3 py-2 bg-black/50 rounded-xl cursor-pointer group/wave border border-white/5 hover:border-[#009688]/40 transition-colors"
                    title="Click anywhere on waveform to seek"
                  >
                    {activeEpisode.waveformProfile.map((height, i) => {
                      const barProgress = (i / activeEpisode.waveformProfile.length) * 100;
                      const hasPlayed = barProgress <= progressPercent;

                      // When playing, add staggered rhythmic height adjustments
                      const dynamicHeight = isPlaying
                        ? Math.min(100, Math.max(20, height + ((i % 4) - 2) * 12))
                        : height;

                      return (
                        <div
                          key={i}
                          style={{
                            height: `${dynamicHeight}%`,
                            transition: isPlaying
                              ? "height 220ms ease-in-out"
                              : "height 400ms ease",
                          }}
                          className={`w-full rounded-full transition-colors ${
                            hasPlayed
                              ? "bg-gradient-to-t from-[#00796B] to-[#0DF0B0] shadow-xs shadow-[#009688]/50"
                              : "bg-white/15 group-hover/wave:bg-white/25"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Timeline Interactive Scrubber */}
                <div className="mb-5">
                  <div
                    onClick={handleScrub}
                    className="relative h-2 bg-white/10 rounded-full cursor-pointer group py-1"
                  >
                    {/* Background track */}
                    <div className="absolute inset-0 bg-white/10 rounded-full" />
                    {/* Played progress fill */}
                    <div
                      style={{ width: `${progressPercent}%` }}
                      className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#009688] to-[#0DF0B0] rounded-full transition-all"
                    />
                    {/* Scrub head */}
                    <div
                      style={{ left: `${progressPercent}%` }}
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md border-2 border-[#009688] opacity-90 group-hover:scale-125 transition-transform"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-white/60 mt-2">
                    <span className="text-[#0DF0B0] font-semibold">
                      {formatTime(playbackSeconds)}
                    </span>
                    <span>{formatTime(activeEpisode.totalSeconds)}</span>
                  </div>
                </div>

                {/* Tactile Control Buttons Deck */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  {/* Speed Pill */}
                  <button
                    onClick={cycleSpeed}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-mono font-bold text-white transition-colors cursor-pointer border border-white/10"
                    title="Change Playback Speed"
                  >
                    {playbackSpeed}
                  </button>

                  {/* Transport Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => skipSeconds(-15)}
                      aria-label="Skip backward 15 seconds"
                      className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                      title="Back 15s"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>

                    {/* Master Play/Pause Button */}
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      aria-label={isPlaying ? "Pause audio preview" : "Play audio preview"}
                      className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#009688] to-[#0DF0B0] text-[#0D1515] flex items-center justify-center font-bold shadow-lg shadow-[#009688]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      )}
                    </button>

                    <button
                      onClick={() => skipSeconds(30)}
                      aria-label="Skip forward 30 seconds"
                      className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                      title="Forward 30s"
                    >
                      <RotateCw className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Mute/Unmute */}
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-red-400" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-[#0DF0B0]" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ===================== STUDIO STATS / VISUAL TELEMETRY ===================== */}
        <FadeIn direction="up" delay={0.15}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24">
            <div className="p-5 rounded-2xl bg-white border border-[#E5EAEA] shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#172121] mb-1 font-heading">
                Top 5%
              </div>
              <div className="text-xs font-semibold text-[#009688] uppercase tracking-wider mb-1">
                Tech & Venture
              </div>
              <div className="text-[11px] text-[#5F6868]">Ranked across Indian builder networks</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E5EAEA] shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#172121] mb-1 font-heading">
                4.9 / 5.0
              </div>
              <div className="text-xs font-semibold text-[#009688] uppercase tracking-wider mb-1">
                Listener Rating
              </div>
              <div className="text-[11px] text-[#5F6868]">Verified on Spotify & Apple Podcasts</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E5EAEA] shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#172121] mb-1 font-heading">
                100%
              </div>
              <div className="text-xs font-semibold text-[#009688] uppercase tracking-wider mb-1">
                Zero Theory
              </div>
              <div className="text-[11px] text-[#5F6868]">Unfiltered execution blueprints only</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E5EAEA] shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#172121] mb-1 font-heading">
                4K HDR
              </div>
              <div className="text-xs font-semibold text-[#009688] uppercase tracking-wider mb-1">
                Studio Quality
              </div>
              <div className="text-[11px] text-[#5F6868]">Recorded at Sanuma HQ, Ahmedabad</div>
            </div>
          </div>
        </FadeIn>

        {/* ===================== EPISODES DIRECTORY (VISUAL "TAPES" DECK) ===================== */}
        <section className="mb-16 sm:mb-24" aria-label="Podcast Episode Directory">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#009688] mb-2">
                STUDIO CATALOGUE
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#172121] tracking-tight">
                Master Studio Tapes
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#172121] text-white shadow-sm"
                      : "bg-white text-[#5F6868] border border-[#E5EAEA] hover:border-[#009688]/40 hover:text-[#172121]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Episode Cards Grid */}
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            staggerDelay={0.08}
          >
            {filteredEpisodes.map((ep) => {
              const originalIndex = EPISODES.findIndex((e) => e.id === ep.id);
              const isCurrentPlaying = activeEpIndex === originalIndex;

              return (
                <StaggerItem key={ep.id}>
                  <div
                    className={`h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border transition-all duration-300 relative group overflow-hidden ${
                      isCurrentPlaying
                        ? "border-[#009688] shadow-xl shadow-[#009688]/10 ring-2 ring-[#009688]/20"
                        : "border-[#E5EAEA] hover:border-[#009688]/40 hover:shadow-xl hover:shadow-[#009688]/5"
                    }`}
                  >
                    {/* Top ambient card accent */}
                    {isCurrentPlaying && (
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#009688] to-[#0DF0B0]" />
                    )}

                    <div>
                      {/* Card Header Row: Ep Number, Category & Status */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-3xl font-extrabold text-[#009688]">
                            #{ep.number}
                          </span>
                          <span
                            className={`px-2.5 py-1 rounded-md text-xs font-bold border ${ep.categoryColor}`}
                          >
                            {ep.category}
                          </span>
                        </div>

                        {/* Active playing indicator badge */}
                        {isCurrentPlaying ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#009688]/15 text-[#009688] text-[11px] font-bold font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#009688] animate-ping" />
                            IN CONSOLE
                          </span>
                        ) : (
                          <span className="text-xs font-mono text-[#5F6868] flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {ep.durationStr}
                          </span>
                        )}
                      </div>

                      {/* Episode Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-[#172121] leading-snug mb-3 group-hover:text-[#009688] transition-colors">
                        {ep.title}
                      </h3>

                      {/* Punchline Takeaway (Minimal theory, high impact) */}
                      <p className="text-xs sm:text-sm text-[#5F6868] leading-relaxed mb-6">
                        {ep.keyPunchline}
                      </p>
                    </div>

                    {/* Card Bottom: Visual Pills & Instant Play Action */}
                    <div className="pt-5 border-t border-[#E5EAEA]">
                      {/* Takeaway Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {ep.visualTakeaways.map((item, tIdx) => {
                          const Icon = item.icon;
                          return (
                            <span
                              key={tIdx}
                              className="inline-flex items-center gap-1 text-[11px] font-medium text-[#172121] bg-[#F7F9F9] px-2.5 py-1 rounded-md border border-[#E5EAEA]"
                            >
                              <Icon className="w-3 h-3 text-[#009688]" />
                              {item.label}
                            </span>
                          );
                        })}
                      </div>

                      {/* Action Bar */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-[#5F6868] font-mono">
                          {ep.date} · Studio Master
                        </span>

                        {/* Play / Load Button */}
                        <button
                          onClick={() => selectAndPlay(originalIndex)}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            isCurrentPlaying && isPlaying
                              ? "bg-[#009688] text-white shadow-md shadow-[#009688]/30"
                              : "bg-[#172121] text-white hover:bg-[#009688] hover:shadow-md hover:shadow-[#009688]/20"
                          }`}
                        >
                          {isCurrentPlaying && isPlaying ? (
                            <>
                              <Pause className="w-3.5 h-3.5 fill-current" />
                              <span>Pause Tape</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5 fill-current" />
                              <span>Play in Console</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>

        {/* ===================== STUDIO SOUNDBITES (KEY QUOTES) ===================== */}
        <section className="mb-16 sm:mb-24" aria-label="Studio Quotes">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#009688] mb-2">
                UNFILTERED BLUEPRINTS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172121]">
                Hard-Hitting Studio Soundbites
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOUNDBITES.map((bite, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#172121] to-[#0D1515] text-white border border-white/10 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#009688]/15 blur-2xl pointer-events-none" />

                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-[#0DF0B0] uppercase tracking-wider mb-4">
                      <Sparkles className="w-3 h-3" />
                      {bite.tag}
                    </div>

                    <p className="text-sm sm:text-base font-medium text-white/90 leading-relaxed mb-6 italic">
                      &ldquo;{bite.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50 font-mono">
                    <span>{bite.speaker}</span>
                    <span className="text-[#0DF0B0]">HQ TAPE</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ===================== PITCH AS GUEST STUDIO CTA ===================== */}
        <FadeIn direction="up">
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-r from-[#172121] via-[#102020] to-[#0D1515] border border-[#009688]/30 text-white relative overflow-hidden shadow-2xl">
            {/* Ambient visual studio glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#009688]/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0DF0B0]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009688]/20 border border-[#009688]/30 text-xs font-bold uppercase tracking-wider text-[#0DF0B0] mb-4">
                  <Mic className="w-3.5 h-3.5 text-[#0DF0B0]" />
                  <span>BE OUR GUEST · STUDIO TAPING</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
                  Have high-conviction blueprints on AI systems or venture building?
                </h3>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  We host engineering leaders, founders, and venture architects for
                  deep-dive discussions recorded at our Ahmedabad studio HQ.
                </p>
              </div>

              <div className="flex-shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button href="/collaborate" variant="primary" size="lg">
                  <span>Pitch as a Guest</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
