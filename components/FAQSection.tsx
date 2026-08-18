"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { weddingConfig } from "@/lib/weddingData";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <AnimatedSection
      id="faq"
      className="relative mx-auto max-w-2xl px-6 py-28 md:py-40"
    >
      <SectionHeading eyebrow="Questions fréquentes" title="FAQ" />

      <div className="space-y-3">
        {weddingConfig.faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.question} className="card overflow-hidden rounded-2xl">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-display text-base font-bold text-ink">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="shrink-0 text-coral-500"
                >
                  <ChevronDown size={18} strokeWidth={2} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden px-6"
                  >
                    <p className="pb-5 text-sm text-ink-muted">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
