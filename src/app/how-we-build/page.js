import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getBreadcrumbSchema, getFAQSchema, getWebPageSchema } from "@/lib/schema";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Lightbulb,
  Hammer,
  Cpu,
  TrendingUp,
  Check,
  Shield,
  Layers,
  GitFork,
  HelpCircle,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionReveal";
import AccordionFAQ from "@/components/ui/AccordionFAQ";
import PhaseCardsList from "@/components/sections/PhaseCardsList";
export const metadata = {
  title: "How We Build Businesses | Sanuma India Private Limited",
  description:
    "Explore Sanuma's 4-stage business-building lifecycle: Idea, Build, Systemize, and Scale. We combine business strategy, robust systems, AI automation, and enterprise engineering in Ahmedabad, Gujarat.",
  alternates: {
    canonical: "/how-we-build",
  },
  openGraph: {
    title: "How We Build Businesses | Sanuma India Private Limited",
    description:
      "A disciplined, four-stage lifecycle engineered for resilience, operational autonomy, and compounding nationwide scale.",
    url: `${SITE_CONFIG.url}/how-we-build`,
    type: "website",
  },
};

const COMPARISON_POINTS = [
  {
    aspect: "Operating Model",
    agency: "Hourly billing, rigid project scopes, and code-and-leave mentality",
    sanuma: "Venture co-building, long-term alignment, and direct operating responsibility",
  },
  {
    aspect: "Systemization",
    agency: "Delivers isolated code without defining internal business SOPs",
    sanuma: "Codifies full repeatable operating systems so the business runs predictably",
  },
  {
    aspect: "AI Integration",
    agency: "Superficial chatbots or third-party wrappers attached as an afterthought",
    sanuma: "Deeply embedded AI decision pipelines built into core operational workflows",
  },
  {
    aspect: "Scalability Focus",
    agency: "Scope stops at software delivery; no responsibility for commercial scale",
    sanuma: "Engineered specifically for unit-economic durability and multi-region scale",
  },
];

const HOW_WE_BUILD_FAQS = [
  {
    question: "What makes Sanuma's business-building methodology unique?",
    answer:
      "Unlike traditional consultancies or IT agencies that merely deliver software, Sanuma acts as an active business-building company. We take direct responsibility for the strategic direction, systems architecture, AI automation, and long-term scaling of our ventures.",
  },
  {
    question: "How long does each stage of the lifecycle take?",
    answer:
      "Timelines depend on market complexity and scale. Idea validation typically takes 2–4 weeks, initial core infrastructure build takes 6–12 weeks, systemization occurs in parallel, and scaling is an ongoing compounding phase.",
  },
  {
    question: "Can existing businesses collaborate with Sanuma using this methodology?",
    answer:
      "Yes. Sanuma actively collaborates with established enterprises and ambitious founders across India to restructure operations, introduce AI automation, and scale existing businesses.",
  },
  {
    question: "How is AI embedded into the businesses Sanuma builds?",
    answer:
      "AI is not a gimmick for us. We embed AI into daily workflows for predictive analytics, automated document parsing, operational decision-making, and customer touchpoint optimization to multiply team leverage.",
  },
];

export default function HowWeBuildPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "How We Build", url: "/how-we-build" },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);
  const faqSchema = getFAQSchema(HOW_WE_BUILD_FAQS);
  const webPageSchema = getWebPageSchema({
    title: "How We Build Businesses | Sanuma India Private Limited",
    description:
      "A disciplined, four-stage lifecycle engineered for resilience, operational autonomy, and compounding nationwide scale.",
    url: `${SITE_CONFIG.url}/how-we-build`,
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

      <div className="pt-32 sm:pt-40 pb-24 sm:pb-32 bg-white">
        <Container>
          {/* Header Section */}
          <div className="max-w-4xl mb-16 sm:mb-20">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F9F9] border border-[#E5EAEA] text-xs font-semibold uppercase tracking-[0.2em] text-[#009688] mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Proprietary Methodology</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#172121] leading-tight mb-6">
                From idea to <span className="text-[#009688]">scale.</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#5F6868] leading-relaxed max-w-3xl">
                Every venture we build follows an uncompromising, repeatable four-stage lifecycle.
                We eliminate guesswork by combining market strategy, enterprise-grade technology,
                and embedded AI operating systems.
              </p>
            </FadeIn>

            {/* Quick Metrics Bar */}
            <FadeIn direction="up" delay={0.2}>
              <div className="mt-10 pt-8 border-t border-[#E5EAEA] grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#009688]">4 Phases</div>
                  <div className="text-xs font-semibold text-[#5F6868] uppercase tracking-wider mt-1">Systematic Lifecycle</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#172121]">AI First</div>
                  <div className="text-xs font-semibold text-[#5F6868] uppercase tracking-wider mt-1">Embedded Automations</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#009688]">Zero Debt</div>
                  <div className="text-xs font-semibold text-[#5F6868] uppercase tracking-wider mt-1">Enterprise Architecture</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#172121]">Pan-India</div>
                  <div className="text-xs font-semibold text-[#5F6868] uppercase tracking-wider mt-1">Scalable Reach</div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Detailed 4-Stage Deep Dive */}
          <section className="mb-24 sm:mb-32" aria-label="4-Stage Lifecycle Deep Dive">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#009688] mb-2">
                The 4-Stage Lifecycle
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#172121]">
                A disciplined engineering approach to venture creation.
              </h2>
            </div>

            <PhaseCardsList />
          </section>

          {/* Agency vs Sanuma Comparison Matrix (AEO Clarifier) */}
          <section className="mb-24 sm:mb-32" aria-label="Why Sanuma is Different">
            <FadeIn direction="up">
              <div className="max-w-3xl mb-12">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#009688] mb-2">
                  Structural Difference
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#172121]">
                  Why business building is not IT outsourcing.
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[#5F6868] leading-relaxed">
                  Most organizations hire software vendors who write code but take zero commercial ownership.
                  Sanuma partners as a parent business-building company to ensure unit economics, systems, and execution compound together.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-[#E5EAEA] bg-white shadow-xs">
                <div className="grid grid-cols-1 md:grid-cols-12 bg-[#F7F9F9] border-b border-[#E5EAEA] p-5 sm:p-6 text-xs font-bold uppercase tracking-wider text-[#172121]">
                  <div className="md:col-span-3">Dimension</div>
                  <div className="md:col-span-4 text-[#5F6868]">Traditional IT Agency</div>
                  <div className="md:col-span-5 text-[#009688]">Sanuma Business Building</div>
                </div>

                <div className="divide-y divide-[#E5EAEA]">
                  {COMPARISON_POINTS.map((item) => (
                    <div key={item.aspect} className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 gap-3 sm:gap-4 items-center">
                      <div className="md:col-span-3 font-bold text-[#172121] text-sm sm:text-base">
                        {item.aspect}
                      </div>
                      <div className="md:col-span-4 text-sm text-[#5F6868]">
                        <span className="md:hidden font-semibold text-xs text-[#5F6868] block mb-1">Traditional Agency:</span>
                        {item.agency}
                      </div>
                      <div className="md:col-span-5 text-sm sm:text-base font-medium text-[#172121] flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#009688]/10 text-[#009688] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <div>
                          <span className="md:hidden font-semibold text-xs text-[#009688] block mb-1">Sanuma Approach:</span>
                          {item.sanuma}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </section>

          {/* AEO FAQ Section */}
          <section className="mb-20 sm:mb-28 p-8 sm:p-14 rounded-3xl bg-[#F7F9F9] border border-[#E5EAEA]" aria-label="Frequently Asked Questions">
            <div className="max-w-2xl mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <HelpCircle className="w-4 h-4 text-[#009688]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009688]">
                  Direct Answers
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172121]">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#5F6868]">
                Clear details on our business-building engagements, timelines, and technical integration.
              </p>
            </div>
            <AccordionFAQ items={HOW_WE_BUILD_FAQS} />
          </section>

          {/* Bottom CTA Card */}
          <div className="p-8 sm:p-14 rounded-3xl bg-[#172121] text-white">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#009688] mb-3">
                Ready to Build
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Have a venture you want to build or scale?
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
                Collaborate directly with our Ahmedabad leadership team. We engineer the systems, deploy the AI, and scale the business together.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href="/collaborate" variant="primary" size="lg">
                  <span>Start a Collaboration</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-4 rounded-full text-base font-medium border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  <span>Speak with Our Team</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
