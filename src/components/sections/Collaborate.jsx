import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export default function Collaborate() {
  return (
    <section id="collaborate" className="py-20 sm:py-28 lg:py-32 bg-[#F7F9F9] border-t border-[#E5EAEA]">
      <Container>
        <div className="bg-white border border-[#E5EAEA] rounded-3xl p-10 sm:p-16 lg:p-20 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] text-center relative overflow-hidden">
          {/* Subtle brand ambient glow */}
          <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#009688]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F9F9] border border-[#E5EAEA] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#009688]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009688]">
                Collaborate
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#172121] leading-[1.15] mb-5">
              Let’s build something together.
            </h2>

            {/* Body */}
            <p className="text-base sm:text-lg text-[#5F6868] leading-relaxed max-w-xl mx-auto mb-10">
              Have an idea, business or opportunity? Partner with Sanuma to build
              and scale it.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/collaborate"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-[#009688] text-white hover:bg-[#00796B] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] cursor-pointer"
                id="collaborate-talk-btn"
              >
                <span>Talk to Sanuma</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-medium border border-[#E5EAEA] bg-white text-[#172121] hover:border-[#009688] hover:text-[#009688] transition-all duration-200 active:scale-[0.99] cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#009688]" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
