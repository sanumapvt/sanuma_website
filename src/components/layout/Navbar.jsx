"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";

import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5EAEA] py-3 sm:py-3.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]"
          : "bg-white/80 backdrop-blur-sm py-4 sm:py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link
          href="/"
          className="flex items-center focus:outline-none group"
          id="nav-logo"
          aria-label="Sanuma India Private Limited Home"
        >
          <img
            src="/logo.png"
            alt="Sanuma India Private Limited"
            className="h-7 sm:h-8 w-auto object-contain transition-all duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#009688] relative py-1 ${
                  isActive ? "text-[#009688]" : "text-[#5F6868]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#009688] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/collaborate"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium bg-[#009688] text-white hover:bg-[#00796B] transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#009688]/20 active:scale-95 cursor-pointer group"
            id="nav-cta"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2 text-[#172121] hover:text-[#009688] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#009688] rounded-lg transition-colors cursor-pointer"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          id="nav-hamburger"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Menu Overlay & Drawer with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] bg-[#172121]/30 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white border-b border-[#E5EAEA] px-6 py-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-5">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base font-medium text-[#172121] hover:text-[#009688] transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-[#E5EAEA]">
                  <Link
                    href="/collaborate"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-medium bg-[#009688] text-white hover:bg-[#00796B] transition-colors shadow-sm"
                  >
                    <span>Let's Talk</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
