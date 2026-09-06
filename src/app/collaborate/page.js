import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CollaborateForm from "./CollaborateForm";
import { SITE_CONFIG } from "@/lib/constants";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Build & Scale a Business with Sanuma",
  description:
    "Partner with Sanuma India Private Limited to build and scale your venture using strategy, systems, processes, AI, and enterprise technology across India.",
  alternates: {
    canonical: "/collaborate",
  },
  openGraph: {
    title: "Build & Scale a Business with Sanuma",
    description:
      "Sanuma collaborates with companies across India to develop, build and scale businesses.",
    url: `${SITE_CONFIG.url}/collaborate`,
    type: "website",
  },
};

export default function CollaboratePage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Collaborate", url: "/collaborate" },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);
  const webPageSchema = getWebPageSchema({
    title: "Build & Scale a Business with Sanuma",
    description:
      "Partner with Sanuma India Private Limited to build and scale your venture across India.",
    url: `${SITE_CONFIG.url}/collaborate`,
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Context & Direct Contact */}
            <div className="lg:col-span-5">
              <SectionHeading
                as="h1"
                label="Collaboration"
                title="Build & Scale a Business with Sanuma"
                subtitle="Have an idea, business or opportunity? Partner with Sanuma to build and scale it with robust operating systems, AI, and execution."
              />

              <div className="mt-8 space-y-6 text-sm sm:text-base text-[#5F6868] leading-relaxed">
                <p>
                  Sanuma is a parent business-building company that collaborates with
                  other companies, ambitious founders, and enterprise operators to build,
                  develop, and scale businesses across India with deep AI automation,
                  repeatable systems, and capital discipline.
                </p>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-[#172121]">
                    <CheckCircle2 className="w-5 h-5 text-[#009688] flex-shrink-0" />
                    <span>Parent business-builder commitment, not outsourced IT agency</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#172121]">
                    <CheckCircle2 className="w-5 h-5 text-[#009688] flex-shrink-0" />
                    <span>Cross-India collaboration to develop scalable ventures</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#172121]">
                    <CheckCircle2 className="w-5 h-5 text-[#009688] flex-shrink-0" />
                    <span>Systems, processes, AI &amp; enterprise technology execution</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-[#E5EAEA]">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#172121] mb-4">
                    Prefer direct communication?
                  </div>
                  <address className="not-italic space-y-3">
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="flex items-center gap-3 text-sm text-[#172121] hover:text-[#009688] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#009688]" />
                      <span>{SITE_CONFIG.contact.email}</span>
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phoneClean}`}
                      className="flex items-center gap-3 text-sm text-[#172121] hover:text-[#009688] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#009688]" />
                      <span>{SITE_CONFIG.contact.phone}</span>
                    </a>
                    <div className="flex items-center gap-3 text-sm text-[#5F6868]">
                      <MapPin className="w-4 h-4 text-[#009688]" />
                      <span>{SITE_CONFIG.contact.address}</span>
                    </div>
                  </address>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <CollaborateForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
