"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { weddingConfig } from "@/lib/weddingData";

export default function Program() {
  return (
    <AnimatedSection
      id="programme"
      className="relative mx-auto max-w-3xl px-6 py-28 md:py-40"
    >
      <SectionHeading eyebrow="Déroulé de la journée" title="Programme" />

      <ol className="space-y-3">
        {weddingConfig.program.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="card card-hover flex items-center gap-5 rounded-2xl px-6 py-4"
          >
            <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-gold-300 text-sm font-bold text-ink">
              {item.time.padStart(2, "0")}
            </span>
            <span className="text-base font-medium text-ink">
              {item.title}
            </span>
          </motion.li>
        ))}
      </ol>
    </AnimatedSection>
  );
}
