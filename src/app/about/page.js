import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getBreadcrumbSchema, getFAQSchema, getWebPageSchema } from "@/lib/schema";
import {
  ArrowRight,
  Compass,
  GitFork,
  Cpu,
  Layers,
  ArrowUpRight,
  HelpCircle,
  Building2,
  Calendar,
  MapPin,
} from "lucide-react";
import AccordionFAQ from "@/components/ui/AccordionFAQ";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionReveal";

export const metadata = {
  title: "About Sanuma | Business Building Company in Ahmedabad",
  description:
    "Founded in 2021 in Ahmedabad, India, Sanuma India Private Limited is an AI & technology-driven business-building company combining strategy, systems, and execution.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Sanuma | Business Building Company in Ahmedabad",
    description:
      "Sanuma is an AI and technology-driven business-building company that creates, develops, and scales businesses using strategy, systems, processes, AI, and technology.",
    url: `${SITE_CONFIG.url}/about`,
    type: "website",
  },
};

const PILLAR_ICONS = {
  Strategy: Compass,
  Systems: GitFork,
  AI: Cpu,
  Technology: Layers,
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About Sanuma", url: "/about" },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);
  const faqSchema = getFAQSchema(SITE_CONFIG.faqs);
  const webPageSchema = getWebPageSchema({
    title: "About Sanuma | Business Building Company in Ahmedabad",
    description:
      "Sanuma is an AI and technology-driven business-building company founded in 2021 in Ahmedabad, India.",
    url: `${SITE_CONFIG.url}/about`,
  });

  return (
    <>
      {/* Structured Data (JSON-LD) for AEO and GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="pt-24 sm:pt-20 pb-20 sm:pb-28 bg-white">
        <Container>
          {/* Main Page Header (H1) */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <FadeIn direction="up">
              <SectionHeading
                as="h1"
                label="About Us"
                title="More than a technology company."
                subtitle="Sanuma is an AI and technology-driven business-building company that creates, develops and scales businesses by combining strategy, technology, AI and strong operating systems."
              />
            </FadeIn>
          </div>

          {/* GEO Entity Facts / Transparency Signals */}
          <FadeIn direction="up" delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-t border-b border-[#E5EAEA] mb-16">
              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-[#009688] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#5F6868]">
                    Entity
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#172121]">
                    Sanuma India Pvt. Ltd.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#009688] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#5F6868]">
                    Established
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#172121]">
                    {SITE_CONFIG.foundingYear}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#009688] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#5F6868]">
                    Headquarters
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#172121]">
                    Ahmedabad, India
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Core Story / Business Model */}
          <FadeIn direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-28">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#009688]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009688]">
                    Our Identity
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172121] leading-tight">
                  We build, develop and scale businesses from the ground up.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#5F6868] leading-relaxed">
                <p>
                  Traditional IT agencies deliver software projects or outsourced
                  code and step away. Sanuma operates on an entirely different
                  model. We are a business-building company that takes direct
                  responsibility for the full commercial, technical, and operational
                  development of our ventures.
                </p>
                <p>
                  Headquartered in Ahmedabad, India, we combine high-level
                  business strategy with deep AI automation and enterprise software
                  architecture. Every system we design is built to eliminate manual
                  inefficiencies and allow businesses to achieve reliable,
                  compounding scale.
                </p>
                <div className="pt-2">
                  <Link
                    href="/how-we-build"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#009688] hover:text-[#00796B] transition-colors"
                  >
                    <span>Explore our 4-stage business-building methodology</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 4 Core Pillars */}
          <div className="mb-20 sm:mb-28">
            <FadeIn direction="up">
              <div className="max-w-2xl mb-12">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#009688]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009688]">
                    Core Capabilities
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172121]">
                  The architecture of how we build.
                </h2>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" staggerDelay={0.1}>
              {SITE_CONFIG.pillars.map((pillar) => {
                const Icon = PILLAR_ICONS[pillar.name] || Compass;
                return (
                  <StaggerItem key={pillar.name}>
                    <div className="h-full p-8 sm:p-10 rounded-2xl bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/40 hover:bg-white hover:shadow-lg hover:shadow-black/[0.02] transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-[#009688]/10 text-[#009688] flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#009688] mb-1.5">
                        {pillar.tagline}
                      </div>
                      <h3 className="text-2xl font-bold text-[#172121] mb-3">
                        {pillar.name}
                      </h3>
                      <p className="text-base text-[#5F6868] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* AEO (Answer Engine Optimization) Q&A Section */}
          <FadeIn direction="up">
            <section
              aria-labelledby="aeo-faq-heading"
              className="mb-20 sm:mb-28 p-8 sm:p-14 rounded-3xl bg-[#F7F9F9] border border-[#E5EAEA]"
            >
              <div className="max-w-2xl mb-10">
                <div className="inline-flex items-center gap-2 mb-3">
                  <HelpCircle className="w-4 h-4 text-[#009688]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009688]">
                    Direct Answers
                  </span>
                </div>
                <h2
                  id="aeo-faq-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-[#172121]"
                >
                  Understanding Sanuma
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#5F6868]">
                  Clear, factual answers about Sanuma India Private Limited, our
                  operating model, and how we differ from traditional agencies.
                </p>
              </div>
              <AccordionFAQ items={SITE_CONFIG.faqs} />
            </section>
          </FadeIn>

          {/* Bottom Call to Action Card with internal links */}
          <FadeIn direction="up">
            <div className="p-8 sm:p-14 rounded-3xl bg-[#172121] text-white">
              <div className="max-w-3xl">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#009688] mb-3">
                  Sanuma Philosophy
                </div>
                <blockquote className="text-2xl sm:text-4xl font-bold leading-tight mb-6">
                  “The goal isn’t just to launch a business. It’s to build one
                  that can scale.”
                </blockquote>
                <p className="text-base text-white/80 leading-relaxed mb-8">
                  Learn more about partnering with our Ahmedabad team to build,
                  develop, and scale your business using our proven operating
                  systems.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button href="/collaborate" variant="primary" size="md">
                    <span>Build &amp; Scale with Sanuma</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full text-sm font-medium border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    <span>Contact Our Ahmedabad Team</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
    </>
  );
}
