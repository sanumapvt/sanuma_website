import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";
import { getBreadcrumbSchema, getOrganizationSchema, getWebPageSchema } from "@/lib/schema";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";
import { FadeIn } from "@/components/ui/MotionReveal";
import ContactForm from "@/components/ui/ContactForm";
import AccordionFAQ from "@/components/ui/AccordionFAQ";

export const metadata = {
  title: "Contact Sanuma India Private Limited | Ahmedabad, India",
  description:
    "Contact Sanuma India Private Limited in Ahmedabad, India. Inquire about venture building, scaling, AI systems, and strategic partnerships.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Sanuma India Private Limited | Ahmedabad, India",
    description:
      "Connect with our leadership team in Ahmedabad, India for business partnerships, venture development, and AI engineering.",
    url: `${SITE_CONFIG.url}/contact`,
    type: "website",
  },
};

const CONTACT_FAQS = [
  {
    question: "What is the typical response timeline for new inquiries?",
    answer:
      "Our executive team in Ahmedabad reviews all inquiries directly. You will receive a personalized response within 24 business hours.",
  },
  {
    question: "Do you sign non-disclosure agreements (NDAs) before discussions?",
    answer:
      "Yes. For proprietary venture discussions, technological architecture, or joint-venture opportunities, we are pleased to execute mutual NDAs prior to in-depth meetings.",
  },
  {
    question: "Can we meet the Sanuma team in person?",
    answer:
      "Yes. In-person meetings are hosted at our registered headquarters in Ahmedabad, India by prior appointment.",
  },
  {
    question: "How does Sanuma evaluate new venture opportunities?",
    answer:
      "We evaluate projects based on unit economics feasibility, addressable market whitespace, technological defensibility, and alignment with our 4-stage lifecycle (Idea → Build → Systemize → Scale).",
  },
];

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);
  const localBusinessSchema = getOrganizationSchema();
  const webPageSchema = getWebPageSchema({
    title: "Contact Sanuma India Private Limited | Ahmedabad, India",
    description:
      "Contact Sanuma India Private Limited in Ahmedabad, India.",
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

      <div className="pt-28 sm:pt-28 md:pt-32 pb-20 sm:pb-28 bg-white">
        <Container>
          {/* Main Page Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <FadeIn direction="up">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#172121] leading-tight mb-6">
                Let&apos;s build something <span className="text-[#009688]">meaningful.</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#5F6868] leading-relaxed">
                Connect with our team in Ahmedabad, India for venture building, AI operating
                systems, technology architecture, or strategic commercial partnerships.
              </p>
            </FadeIn>
          </div>

          {/* Core Content Grid: Form (Left) + Executive Support Details (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-24 sm:mb-32">
            {/* Left Column: Interactive Contact Form */}
            <FadeIn direction="up" delay={0.1} className="lg:col-span-7">
              <ContactForm />
            </FadeIn>

            {/* Right Column: Executive Contact & Headquarters Information */}
            <FadeIn direction="up" delay={0.2} className="lg:col-span-5 space-y-6">
              {/* Direct Channels Card */}
              <div className="p-8 rounded-3xl bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/30 transition-all">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#009688] mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#009688]" />
                  <span>Direct Communication</span>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#5F6868] mb-1">
                      Corporate Inquiries
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-lg sm:text-xl font-bold text-[#172121] hover:text-[#009688] transition-colors break-all"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="pt-4 border-t border-[#E5EAEA]">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#5F6868] mb-1">
                      Telephone Support
                    </div>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phoneClean}`}
                      className="text-lg sm:text-xl font-bold text-[#172121] hover:text-[#009688] transition-colors"
                    >
                      {SITE_CONFIG.contact.phone}
                    </a>
                    <div className="flex items-center gap-1.5 text-xs text-[#5F6868] mt-1">
                      <Clock className="w-3.5 h-3.5 text-[#009688]" />
                      <span>Mon – Fri, 9:30 AM – 6:30 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Headquarters Card */}
              <div className="p-8 rounded-3xl bg-[#F7F9F9] border border-[#E5EAEA] hover:border-[#009688]/30 transition-all">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#009688] mb-5 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#009688]" />
                  <span>Headquarters</span>
                </div>

                <h2 className="text-xl font-bold text-[#172121] mb-1">
                  {SITE_CONFIG.legalName}
                </h2>
                <div className="text-sm font-semibold text-[#009688] mb-3">
                  Ahmedabad, India
                </div>
                <p className="text-sm text-[#5F6868] leading-relaxed">
                  Corporate registry and executive operations in Ahmedabad, India.
                </p>
              </div>

              {/* Enterprise Response Guarantee Banner */}
              <div className="p-6 rounded-2xl bg-[#172121] text-white flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#009688]/20 text-[#009688] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-[#009688]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">
                    24-Hour Response Commitment
                  </div>
                  <p className="text-xs text-[#F7F9F9]/80 leading-relaxed">
                    Every message is routed directly to relevant engineering and strategy leads
                    without intermediate bureaucracy.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Direct Q&A / FAQs Section */}
          <FadeIn direction="up">
            <section
              aria-labelledby="contact-faq-heading"
              className="p-4 sm:p-8 md:p-14 rounded-2xl sm:rounded-3xl bg-[#F7F9F9] border border-[#E5EAEA]"
            >
              <div className="max-w-2xl mb-5 sm:mb-8">
                <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
                  <HelpCircle className="w-4 h-4 text-[#009688]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#009688]">
                    Frequently Asked Questions
                  </span>
                </div>
                <h2
                  id="contact-faq-heading"
                  className="text-xl sm:text-3xl font-extrabold text-[#172121]"
                >
                  Common Questions About Connecting
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-[#5F6868]">
                  Important context regarding collaboration, response timelines, and confidentiality.
                </p>
              </div>
              <AccordionFAQ items={CONTACT_FAQS} />
            </section>
          </FadeIn>
        </Container>
      </div>
    </>
  );
}
