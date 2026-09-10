"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function AccordionFAQ({ items = [], defaultOpenIndex = 0 }) {
  // Configurable default open item, or null for all closed
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggleItem = (idx) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`rounded-2xl border overflow-hidden transition-[border-color,background-color,box-shadow] duration-200 ${
              isOpen
                ? "bg-white border-[#009688]/50 shadow-md shadow-[#009688]/5"
                : "bg-white/80 border-[#E5EAEA] hover:border-[#009688]/30 hover:bg-white"
            }`}
          >
            {/* Valid HTML5 heading wrapping the button per W3C WAI-ARIA specs */}
            <h3 className="m-0 p-0 text-inherit font-inherit">
              <button
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#009688] rounded-2xl transition-colors group"
              >
                <span
                  className={`text-base sm:text-lg md:text-xl font-bold transition-colors font-heading ${
                    isOpen ? "text-[#009688]" : "text-[#172121] group-hover:text-[#009688]"
                  }`}
                >
                  {item.question}
                </span>

                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-[#009688] text-white rotate-180 shadow-xs"
                      : "bg-[#F7F9F9] text-[#5F6868] group-hover:bg-[#009688]/10 group-hover:text-[#009688]"
                  }`}
                >
                  <ChevronDown className="w-4 h-4 transition-transform duration-300" aria-hidden="true" />
                </div>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key={`faq-content-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.25, delay: 0.05 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.15 },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 border-t border-[#E5EAEA]/60">
                    <p className="text-sm sm:text-base text-[#5F6868] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
