"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { weddingConfig } from "@/lib/weddingData";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const yFront = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-6 py-28"
    >
      {/* Ruban décoratif, façon papier découpé, derrière le titre */}
      <motion.div
        style={{ y: yMid }}
        className="pointer-events-none absolute left-1/2 top-[18%] h-24 w-[85%] max-w-xl -translate-x-1/2 -rotate-2 rounded-full bg-gold-300/50 blur-2xl"
      />

      <motion.div
        style={{ y: yFront, opacity }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow-tag mb-8"
        >
          Une histoire en cours d&apos;écriture
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[13vw] leading-[0.95] tracking-tighter text-ink sm:text-7xl md:text-8xl lg:text-[8rem]"
        >
          {weddingConfig.groom.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 font-hand text-2xl text-coral-600 md:text-3xl"
        >
          bientôt marié à quelqu&apos;un — détails à suivre.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8 max-w-xl text-base text-ink-muted md:text-lg"
        >
          Chaque grande histoire commence par une rencontre. La mienne est
          encore en cours d&apos;écriture&hellip; Rendez-vous en{" "}
          <span className="font-semibold text-ink">
            {weddingConfig.weddingMonthLabel}
          </span>
          .
        </motion.p>

        <motion.a
          href="#histoire"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="btn-accent mt-10"
        >
          Découvrir notre histoire
        </motion.a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink-muted/70"
      >
        <ArrowDown size={20} strokeWidth={2} />
      </motion.div>
    </div>
  );
}
