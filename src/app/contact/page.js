import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getBreadcrumbSchema, getOrganizationSchema, getWebPageSchema } from "@/lib/schema";
import { Mail, Phone, MapPin, ArrowRight, Building2 } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionReveal";

export const metadata = {
  title: "Contact Sanuma India Private Limited",
  description:
    "Contact Sanuma India Private Limited in Ahmedabad, Gujarat, India. Inquire about venture building, scaling, AI systems, and strategic partnerships.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Sanuma India Private Limited",
    description:
      "Connect with Sanuma India Private Limited in Ahmedabad, Gujarat, India.",
    url: `${SITE_CONFIG.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);
  const localBusinessSchema = getOrganizationSchema();
  const webPageSchema = getWebPageSchema({
    title: "Contact Sanuma India Private Limited",
    description:
      "Contact Sanuma India Private Limited in Ahmedabad, Gujarat, India.",
    url: `${SITE_CONFIG.url}/contact`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="pt-32 sm:pt-40 pb-24 sm:pb-32 bg-white">
        <Container>
          {/* Main Page Header (H1) */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <FadeIn direction="up">
              <SectionHeading
                as="h1"
                label="Contact"
                title="Contact Sanuma India Private Limited"
                subtitle="Connect with our leadership team in Ahmedabad for business partnerships, venture development, media inquiries, or institutional collaboration."
              />
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Main Contact Details with Semantic Address */}
            <FadeIn direction="up" delay={0.1} className="lg:col-span-7">
              <address className="not-italic space-y-6">
                {/* Email Card */}
                <div className="p-8 rounded-2xl bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/40 hover:bg-white hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-[#009688]/10 text-[#009688] flex items-center justify-center mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5F6868] mb-1">
                    Corporate Email
                  </div>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-xl sm:text-2xl font-bold text-[#172121] hover:text-[#009688] transition-colors break-all"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                  <p className="mt-2 text-sm text-[#5F6868]">
                    For official inquiries, business building proposals, and partnerships.
                  </p>
                </div>

                {/* Phone Card */}
                <div className="p-8 rounded-2xl bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/40 hover:bg-white hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-[#009688]/10 text-[#009688] flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5F6868] mb-1">
                    Direct Line
                  </div>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneClean}`}
                    className="text-xl sm:text-2xl font-bold text-[#172121] hover:text-[#009688] transition-colors"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                  <p className="mt-2 text-sm text-[#5F6868]">
                    Operating hours: Monday through Friday, 9:30 AM – 6:30 PM IST.
                  </p>
                </div>

                {/* Location Card */}
                <div className="p-8 rounded-2xl bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/40 hover:bg-white hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-[#009688]/10 text-[#009688] flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5F6868] mb-1">
                    Registered Headquarters
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#172121]">
                    {SITE_CONFIG.contact.address}
                  </div>
                  <p className="mt-2 text-sm text-[#5F6868]">
                    Corporate registry and executive operations in Ahmedabad, Gujarat, India.
                  </p>
                </div>
              </address>
            </FadeIn>

            {/* Right Column: Entity Summary & Direct Action */}
            <FadeIn direction="up" delay={0.2} className="lg:col-span-5 h-full">
              <div className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#172121] text-white shadow-xl shadow-black/5">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#009688]/20 text-[#009688] flex items-center justify-center mb-6">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#009688] mb-2">
                    Corporate Entity
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {SITE_CONFIG.legalName}
                  </h2>
                  <p className="text-sm text-[#F7F9F9]/80 leading-relaxed mb-6">
                    An Indian Private Limited entity incorporated in {SITE_CONFIG.foundingYear} to build, develop,
                    and scale modern businesses using artificial intelligence and
                    scalable operating architectures.
                  </p>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#F7F9F9]/70 space-y-2 mb-8">
                    <div className="flex justify-between">
                      <span>Structure:</span>
                      <span className="font-semibold text-white">Private Limited</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Founder:</span>
                      <span className="font-semibold text-white">{SITE_CONFIG.founder}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span className="font-semibold text-white">Ahmedabad, Gujarat, India</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domain:</span>
                      <span className="font-semibold text-white">sanuma.co.in</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                    Have a venture to build?
                  </div>
                  <Button
                    href="/collaborate"
                    variant="primary"
                    size="md"
                    className="w-full"
                  >
                    <span>Build &amp; Scale with Sanuma</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>
    </>
  );
}
