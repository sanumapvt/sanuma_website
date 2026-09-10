import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema";
import {
  Play,
  Headphones,
  Mic,
  Clock,
  Calendar,
  Radio,
  Share2,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Volume2,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionReveal";

export const metadata = {
  title: "The Sanuma Podcast | Building Scalable Businesses & AI Systems",
  description:
    "Listen to The Sanuma Podcast. Deep-dive conversations on venture building, operating systems, AI automation, and scalable business architecture in India.",
  alternates: {
    canonical: "/podcast",
  },
  openGraph: {
    title: "The Sanuma Podcast | Building Scalable Businesses & AI Systems",
    description:
      "Deep-dive conversations on venture building, operating systems, AI automation, and scalable business architecture.",
    url: `${SITE_CONFIG.url}/podcast`,
    type: "website",
  },
};

const PLATFORMS = [
  { name: "Spotify", href: "#", color: "hover:border-[#1DB954] hover:text-[#1DB954]" },
  { name: "Apple Podcasts", href: "#", color: "hover:border-[#A655FF] hover:text-[#A655FF]" },
  { name: "YouTube", href: "#", color: "hover:border-[#FF0000] hover:text-[#FF0000]" },
  { name: "Amazon Music", href: "#", color: "hover:border-[#00A8E1] hover:text-[#00A8E1]" },
];

const EPISODES = [
  {
    number: "04",
    title: "Building Autopilot Companies: How We Embed AI into Core Operating Workflows",
    duration: "42 min",
    date: "Sep 2026",
    category: "AI Automation",
    summary:
      "A deep dive into replacing manual operational bottlenecks with deterministic AI decision pipelines, telemetry monitoring, and compounding margins.",
    takeaways: ["Agentic workflow loops", "Deterministic AI vs Chatbots", "Compounding operational leverage"],
  },
  {
    number: "03",
    title: "Unit Economics vs Growth Hacking: The Disciplined Path to Compounding Profitability",
    duration: "38 min",
    date: "Aug 2026",
    category: "Venture Strategy",
    summary:
      "Why growth without positive unit contribution is fragile. We examine margin architecture, pricing elasticity, and customer acquisition payback periods.",
    takeaways: ["LTV/CAC durability", "Pricing power in Tier 2/3 India", "Capital-efficient expansion"],
  },
  {
    number: "02",
    title: "Zero Technical Debt: Architecting Cloud Infrastructure That Scales Nationwide",
    duration: "46 min",
    date: "Aug 2026",
    category: "Engineering",
    summary:
      "How to avoid the trap of agency-written spaghetti code. We break down our enterprise tech stack, data schemas, and high-concurrency architectures.",
    takeaways: ["Cloud-native foundations", "Relational data modeling", "Principal engineering velocity"],
  },
  {
    number: "01",
    title: "Why India Needs Systems-Driven Venture Builders Over Traditional IT Agencies",
    duration: "35 min",
    date: "Jul 2026",
    category: "Venture Building",
    summary:
      "Exploring the fundamental shift from hourly consulting to active venture co-building, skin-in-the-game leadership, and end-to-end execution.",
    takeaways: ["The agency fallacy", "Operating playbooks", "Building from Ahmedabad, India"],
  },
];

export default function PodcastPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Podcast", url: "/podcast" },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);
  const webPageSchema = getWebPageSchema({
    title: "The Sanuma Podcast | Building Scalable Businesses & AI Systems",
    description:
      "Deep-dive conversations on venture building, operating systems, AI automation, and scalable business architecture.",
    url: `${SITE_CONFIG.url}/podcast`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="pt-24 sm:pt-20 pb-20 sm:pb-28 bg-white">
        <Container>
          {/* Main Page Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <FadeIn direction="up">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#172121] leading-tight mb-6">
                The Sanuma <span className="text-[#009688]">Podcast.</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#5F6868] leading-relaxed max-w-3xl">
                Deep-dive conversations on the architecture of venture building, modern business
                systems, and scalable technology execution across India.
              </p>

              {/* Streaming Platforms Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mt-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5F6868] mr-2">
                  Listen On:
                </span>
                {PLATFORMS.map((platform) => (
                  <span
                    key={platform.name}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F7F9F9] border border-[#E5EAEA] text-xs font-semibold text-[#172121] transition-all cursor-pointer ${platform.color}`}
                  >
                    <span>{platform.name}</span>
                    <ExternalLink className="w-3 h-3 text-[#5F6868]" />
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Featured Episode Player Showcase */}
          <FadeIn direction="up" delay={0.15}>
            <div className="mb-20 sm:mb-28 p-8 sm:p-12 rounded-3xl bg-[#172121] text-white relative overflow-hidden shadow-2xl shadow-[#009688]/10">
              {/* Subtle ambient blur glow */}
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#009688]/20 blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Episode Info */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009688]/20 border border-[#009688]/30 text-xs font-semibold uppercase tracking-wider text-[#009688] mb-4">
                    <Radio className="w-3 h-3 animate-pulse text-[#009688]" />
                    <span>Featured Episode · Season 01</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                    Building Autopilot Companies: How We Embed AI into Core Operating Workflows
                  </h2>

                  <p className="text-sm sm:text-base text-[#F7F9F9]/80 leading-relaxed mb-6 max-w-2xl">
                    Discover how Sanuma moves beyond superficial generative AI wrappers to build
                    resilient operational pipelines that automate execution, minimize bottlenecks, and
                    unlock scale across our ventures.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#F7F9F9]/70">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#009688]" />
                      42 minutes
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#009688]" />
                      September 2026
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Headphones className="w-3.5 h-3.5 text-[#009688]" />
                      Episode 04
                    </span>
                  </div>
                </div>

                {/* Right Side: Interactive Audio Player UI */}
                <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#009688] text-white flex items-center justify-center shadow-md">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#009688] uppercase tracking-wider">
                          Audio Preview
                        </div>
                        <div className="text-sm font-bold text-white">Full Episode (42:15)</div>
                      </div>
                    </div>
                    <Volume2 className="w-5 h-5 text-[#009688]" />
                  </div>

                  {/* Waveform Visualization Bars */}
                  <div className="flex items-center justify-between gap-1 h-12 mb-4 px-2 bg-black/20 rounded-xl">
                    {[40, 65, 85, 45, 90, 70, 30, 95, 60, 40, 75, 50, 85, 30, 65, 90, 45, 80, 55, 70, 35, 90, 60, 75, 50, 85, 40, 65].map(
                      (h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`w-1 rounded-full transition-all ${
                            i < 12 ? "bg-[#009688]" : "bg-white/20"
                          }`}
                        />
                      )
                    )}
                  </div>

                  {/* Timeline Scrubber */}
                  <div className="flex items-center justify-between text-[11px] text-[#F7F9F9]/60 font-mono">
                    <span>14:30</span>
                    <span>42:15</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* All Episodes Archive Grid */}
          <section className="mb-20 sm:mb-28" aria-label="Recent Episodes">
            <FadeIn direction="up">
              <div className="max-w-3xl mb-12">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#009688] mb-2">
                  Archive
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#172121]">
                  Recent Episodes &amp; Strategic Discussions
                </h2>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" staggerDelay={0.1}>
              {EPISODES.map((ep) => (
                <StaggerItem key={ep.number}>
                  <div className="h-full flex flex-col justify-between p-8 rounded-2xl bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/40 hover:bg-white hover:shadow-xl hover:shadow-[#009688]/5 transition-all duration-300 group">
                    <div>
                      {/* Card Top Row: Number & Category */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="font-heading text-2xl font-extrabold text-[#009688]">
                            #{ep.number}
                          </span>
                          <span className="px-2.5 py-1 rounded-md bg-[#009688]/10 text-xs font-semibold text-[#009688]">
                            {ep.category}
                          </span>
                        </div>
                        <div className="text-xs text-[#5F6868] flex items-center gap-1.5 font-medium">
                          <Clock className="w-3.5 h-3.5" />
                          {ep.duration}
                        </div>
                      </div>

                      {/* Episode Title */}
                      <h3 className="text-xl font-bold text-[#172121] mb-3 group-hover:text-[#009688] transition-colors leading-snug">
                        {ep.title}
                      </h3>

                      {/* Episode Summary */}
                      <p className="text-sm text-[#5F6868] leading-relaxed mb-6">
                        {ep.summary}
                      </p>
                    </div>

                    {/* Card Bottom: Takeaways pills & Listen Button */}
                    <div className="pt-4 border-t border-[#E5EAEA]">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {ep.takeaways.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-medium text-[#5F6868] bg-white px-2 py-0.5 rounded border border-[#E5EAEA]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-[#5F6868] font-medium">{ep.date}</span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#009688] group-hover:translate-x-0.5 transition-transform">
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Listen Episode</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          {/* Pitch / Be Our Guest Banner */}
          <FadeIn direction="up">
            <div className="p-8 sm:p-14 rounded-3xl bg-[#F7F9F9] border border-[#E5EAEA] flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Mic className="w-4 h-4 text-[#009688]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#009688]">
                    Guest Inquiries
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172121] mb-3">
                  Have high-conviction insights on business building or AI?
                </h3>
                <p className="text-base text-[#5F6868] leading-relaxed">
                  We invite venture leaders, technical architects, and enterprise founders to discuss
                  operational systems, capital efficiency, and scaling companies in India.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Button href="/collaborate" variant="primary" size="md">
                  <span>Pitch as a Guest</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
    </>
  );
}
