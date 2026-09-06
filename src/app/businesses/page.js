import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { BUSINESSES } from "@/data/businesses";
import { SITE_CONFIG } from "@/lib/constants";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema";
import { ShieldCheck, ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Businesses Built by Sanuma",
  description:
    "Explore businesses created, developed, and scaled by Sanuma India Private Limited. Sanuma has created several businesses and collaborates across India.",
  alternates: {
    canonical: "/businesses",
  },
  openGraph: {
    title: "Businesses Built by Sanuma",
    description:
      "Businesses created, developed, and scaled by Sanuma India Private Limited in Ahmedabad.",
    url: `${SITE_CONFIG.url}/businesses`,
    type: "website",
  },
};

export default function BusinessesPage() {
  const hasBusinesses = BUSINESSES.length > 0;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Businesses", url: "/businesses" },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);
  const webPageSchema = getWebPageSchema({
    title: "Businesses Built by Sanuma",
    description:
      "Businesses created, developed, and scaled by Sanuma India Private Limited.",
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

      <div className="pt-32 sm:pt-40 pb-24 sm:pb-32 bg-white">
        <Container>
          {/* Main Page Header (H1) */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <SectionHeading
              as="h1"
              label="Portfolio"
              title="Businesses Built by Sanuma"
              subtitle="Sanuma is a parent business-building company that has already created several businesses and collaborates with partner companies to build, develop, and scale ventures across India."
            />
          </div>

          {hasBusinesses ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BUSINESSES.map((biz) => (
                <div
                  key={biz.name}
                  className="p-8 rounded-2xl bg-[#F7F9F9] border border-[#E5EAEA]"
                >
                  <h2 className="text-xl font-bold text-[#172121]">{biz.name}</h2>
                  <p className="mt-2 text-sm text-[#5F6868]">{biz.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 px-8 sm:px-16 rounded-3xl bg-[#F7F9F9] border border-[#E5EAEA] text-center max-w-3xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-[#009688]/10 text-[#009688] flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-7 h-7" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172121] mb-4">
                Ventures in Active Development &amp; Scale
              </h2>
              <p className="text-base sm:text-lg text-[#5F6868] leading-relaxed max-w-xl mx-auto mb-8">
                Sanuma operates as a parent business-building company. Having already
                created and developed multiple ventures, we actively collaborate with
                forward-thinking companies across India to build scalable market leaders.
                Brand showcases and verified assets will be featured here upon emergence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/collaborate" variant="primary" size="md">
                  <span>Collaborate Across India</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  <span>Contact Sanuma Team</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}
