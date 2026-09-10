import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E5EAEA] pt-16 sm:pt-20 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#E5EAEA]">
          {/* Column 1: Official Brand Logo & Identity */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="inline-flex items-center group mb-4" aria-label="Sanuma Home">
              <img
                src="/footerlogo.png"
                alt="Sanuma India Private Limited"
                className="h-7 sm:h-8 w-auto object-contain transition-opacity hover:opacity-90"
              />
            </Link>
            <p className="text-sm font-semibold text-[#172121] tracking-wide mb-2">
              {SITE_CONFIG.legalName}
            </p>
            <p className="text-sm text-[#5F6868] max-w-sm leading-relaxed mb-4">
              An AI and technology-driven business-building company based in
              Ahmedabad, India. Founded in {SITE_CONFIG.foundingYear} to create, develop,
              and scale companies through strategy, operating systems, and precision execution.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F7F9F9] border border-[#E5EAEA] text-xs font-medium text-[#5F6868]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009688]" aria-hidden="true" />
              Ahmedabad, India
            </div>
          </div>

          {/* Column 2: Logical Internal Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#172121] mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#5F6868] hover:text-[#009688] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Semantic Contact NAP */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#172121] mb-5">
              Contact Sanuma
            </h3>
            <address className="not-italic flex flex-col gap-4">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="group flex items-start gap-3 text-sm text-[#5F6868] hover:text-[#009688] transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 text-[#009688] flex-shrink-0" aria-hidden="true" />
                <span className="break-all">{SITE_CONFIG.contact.email}</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.contact.phoneClean}`}
                className="group flex items-start gap-3 text-sm text-[#5F6868] hover:text-[#009688] transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 text-[#009688] flex-shrink-0" aria-hidden="true" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-[#5F6868]">
                <MapPin className="w-4 h-4 mt-0.5 text-[#009688] flex-shrink-0" aria-hidden="true" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>

              <div className="pt-2">
                <Link
                  href="/collaborate"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#009688] hover:text-[#00796B] transition-colors"
                >
                  <span>Build &amp; Scale with Sanuma</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5F6868]">
          <p>© {currentYear} {SITE_CONFIG.legalName}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
