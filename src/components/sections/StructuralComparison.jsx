"use client";

import {
  Clock,
  Code2,
  Bot,
  AlertTriangle,
  Zap,
  CheckCircle2,
  XCircle,
  Repeat,
  Sparkles,
  TrendingUp,
  Cpu,
  Layers,
  Handshake,
} from "lucide-react";

export default function StructuralComparison() {
  const agencyPoints = [
    {
      icon: Clock,
      title: "Charges by the clock",
      desc: "Hourly billing with zero skin in the commercial game",
    },
    {
      icon: Code2,
      title: "Code and disconnect",
      desc: "Delivers raw software with zero operational playbooks",
    },
    {
      icon: Bot,
      title: "Gimmick AI add-ons",
      desc: "Superficial chatbots glued on as an afterthought",
    },
    {
      icon: AlertTriangle,
      title: "Zero outcome risk",
      desc: "Paid regardless of whether your business succeeds or stalls",
    },
  ];

  const sanumaPoints = [
    {
      icon: Handshake,
      title: "Shared ownership",
      desc: "Skin in the game with long-term equity and growth alignment",
    },
    {
      icon: Layers,
      title: "Self-running systems",
      desc: "Complete SOPs and playbooks so business runs predictably",
    },
    {
      icon: Cpu,
      title: "Deep operational AI",
      desc: "Autonomous decision loops embedded into core revenue pipelines",
    },
    {
      icon: TrendingUp,
      title: "Engineered to scale",
      desc: "Direct responsibility for unit economics, margins, and nationwide growth",
    },
  ];

  return (
    <div className="w-full">
      {/* 2 Clean Side-by-Side Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 items-stretch">
        {/* CARD 1: Traditional IT Agency */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#FAFBFB] border border-red-200/60 flex flex-col justify-between shadow-xs">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-red-100/80 text-red-600 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#172121]">
                  Traditional IT Agency
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-500/10 text-red-600 border border-red-200/60">
                Vendor Mindset
              </span>
            </div>

            {/* One-Line Punchline */}
            <p className="text-xs sm:text-sm text-[#5F6868] font-medium mb-6 pb-4 border-b border-red-100">
              "Hired to write code by the hour, takes zero business ownership."
            </p>

            {/* 4 Minimal Visual Rows */}
            <div className="space-y-4 mb-6">
              {agencyPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#172121]">
                        {item.title}
                      </div>
                      <div className="text-[11px] sm:text-xs text-[#5F6868] mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Verdict Pill */}
          <div className="pt-4 border-t border-red-100 flex items-center justify-between">
            <span className="text-xs text-[#5F6868] font-medium">Verdict:</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-600 border border-red-200/80">
              ✕ Expensive Cost Center
            </span>
          </div>
        </div>

        {/* CARD 2: Sanuma Business Building */}
        <div className="rounded-3xl p-6 sm:p-8 bg-white border-2 border-[#009688] flex flex-col justify-between shadow-lg shadow-[#009688]/10 relative overflow-hidden">
          {/* Subtle Corner Glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#009688]/10 blur-2xl pointer-events-none" />

          <div>
            {/* Header */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#009688] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#172121]">
                  Sanuma Business Building
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#009688]/10 text-[#00796B] border border-[#009688]/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#009688]" />
                Co-Builder Mindset
              </span>
            </div>

            {/* One-Line Punchline */}
            <p className="text-xs sm:text-sm text-[#00796B] font-semibold mb-6 pb-4 border-b border-[#009688]/15">
              "Co-owns the venture, builds the operating engine, scales to profit."
            </p>

            {/* 4 Minimal Visual Rows */}
            <div className="space-y-4 mb-6">
              {sanumaPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#009688]/10 text-[#009688] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#172121] flex items-center gap-1.5">
                        <span>{item.title}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#009688]" />
                      </div>
                      <div className="text-[11px] sm:text-xs text-[#5F6868] mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Verdict Pill */}
          <div className="pt-4 border-t border-[#E5EAEA] flex items-center justify-between">
            <span className="text-xs text-[#5F6868] font-medium">Verdict:</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#009688]/10 text-[#00796B] border border-[#009688]/30 shadow-xs">
              ✓ Compounding Business Asset
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
