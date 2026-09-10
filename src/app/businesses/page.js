import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { BUSINESSES } from "@/data/businesses";
import { SITE_CONFIG } from "@/lib/constants";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionReveal";

export const metadata = {
  title: "Companies Built by Sanuma | Portfolio",
  description:
    "Explore companies built, developed, and scaled by Sanuma India Private Limited. Operating across AI, systems, and enterprise technology.",
  alternates: {
    canonical: "/businesses",
  },
  openGraph: {
    title: "Companies Built by Sanuma | Portfolio",
    description:
      "Companies built, developed, and scaled by Sanuma India Private Limited in Ahmedabad, India.",
    url: `${SITE_CONFIG.url}/businesses`,
    type: "website",
  },
};

export default function BusinessesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Businesses", url: "/businesses" },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);
  const webPageSchema = getWebPageSchema({
    title: "Companies Built by Sanuma | Portfolio",
    description:
      "Companies built, developed, and scaled by Sanuma India Private Limited.",
    url: `${SITE_CONFIG.url}/businesses`,
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

      <div className="pt-28 sm:pt-28 md:pt-32 pb-20 sm:pb-28 bg-white">
        <Container>
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <FadeIn direction="up">
              <SectionHeading
                as="h1"
                label="Portfolio"
                title="Businesses built by Sanuma."
                subtitle="Sanuma originates proprietary companies and co-develops high-conviction ventures across India by combining strategy, robust operating systems, AI, and scalable technology."
              />
            </FadeIn>
          </div>

          {/* Clean Company Cards Grid: Logo + Name + Category + Description + Website + Location */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24" staggerDelay={0.08}>
            {BUSINESSES.map((biz) => (
              <StaggerItem key={biz.name}>
                <div className="h-full p-7 sm:p-8 rounded-2xl bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/40 hover:bg-white hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Company Logo + Name */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${biz.monogramColor} text-white font-extrabold text-base flex items-center justify-center tracking-wider shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform`}
                      >
                        {biz.monogram}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#172121] group-hover:text-[#009688] transition-colors leading-snug">
                        {biz.name}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#5F6868] leading-relaxed">
                      {biz.description}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="mt-6 pt-4 border-t border-[#E5EAEA] flex items-center justify-end text-xs text-[#5F6868]">
                    {biz.website ? (
                      <a
                        href={biz.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#009688] hover:text-[#00796B] font-semibold inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Visit Website</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-semibold text-[#5F6868]/70">
                        Proprietary Venture
                      </span>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Simple Bottom Collaboration Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#172121] text-white">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#009688] mb-3">
                Collaborate
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Have a business you want to build or scale?
              </h2>
              <p className="text-base text-white/80 leading-relaxed mb-8">
                We partner with ambitious enterprises and founders across India to build scalable operating models and deploy high-leverage technology.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href="/collaborate" variant="primary" size="md">
                  <span>Work With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full text-sm font-medium border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  <span>Contact Our Team</span>
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
