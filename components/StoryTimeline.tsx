"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { weddingConfig } from "@/lib/weddingData";

export default function StoryTimeline() {
  return (
    <AnimatedSection
      id="histoire"
      className="relative mx-auto max-w-4xl px-6 py-28 md:py-40"
    >
      <SectionHeading eyebrow="Le récit (encore incomplet)" title="Notre histoire" />

      <div className="relative">
        <div className="absolute left-[19px] top-0 bottom-0 w-0.5 border-l-2 border-dashed border-ink/15 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10">
          {weddingConfig.story.map((item, i) => {
            const isLeft = i % 2 === 0;
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-start gap-6 md:w-full md:gap-0 ${
                  isLeft
                    ? "md:justify-start"
                    : "md:flex-row-reverse md:justify-end"
                }`}
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-gold-300 text-ink shadow-pop-sm md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Icon size={18} strokeWidth={2} />
                </div>

                <div
                  className={`card card-hover rounded-2xl p-6 md:w-[42%] ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <span className="font-hand text-lg text-coral-600">
                    Étape {item.step}
                  </span>
                  <h3 className="font-display mt-1 mb-2 text-xl font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-muted">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
