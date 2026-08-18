"use client";

import { motion } from "framer-motion";
import { HelpCircle, User } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { weddingConfig } from "@/lib/weddingData";

export default function Couple() {
  return (
    <AnimatedSection
      id="maries"
      className="relative mx-auto max-w-5xl px-6 py-28 md:py-40"
    >
      <SectionHeading eyebrow="Les principaux concernés" title="Les mariés" />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Groom card */}
        <motion.div
          whileHover={{ y: -6, rotate: -1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="card flex flex-col items-center rounded-3xl p-10 text-center"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-ink bg-coral-400/25">
            <User size={36} strokeWidth={1.8} className="text-coral-600" />
          </div>
          <h3 className="font-display mt-6 text-2xl font-bold text-ink">
            {weddingConfig.groom.name}
          </h3>
          <p className="mt-2 text-sm text-ink-muted">
            {weddingConfig.groom.role}
          </p>
        </motion.div>

        {/* Bride card */}
        <motion.div
          whileHover={{ y: -6, rotate: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="card flex flex-col items-center rounded-3xl p-10 text-center"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-dashed border-ink/40 bg-cream-100">
            <HelpCircle
              size={36}
              strokeWidth={1.8}
              className="text-ink-muted"
            />
          </div>
          <h3 className="font-display mt-6 text-2xl font-bold text-ink">
            {weddingConfig.bride.name}
          </h3>
          <p className="mt-2 text-sm text-ink-muted">
            Photo indisponible pour le moment.
          </p>

          <p className="mt-6 max-w-xs text-sm text-ink-muted">
            {weddingConfig.bride.status}
            <br />
            Sélection selon les critères divins uniquement.
            <br />
            Merci de patienter jusqu&apos;au décret d&apos;Allah.
          </p>

          <button
            disabled
            className="mt-6 cursor-not-allowed rounded-full border-2 border-ink/20 px-6 py-2 text-xs font-semibold uppercase tracking-widest text-ink-muted/60"
          >
            Bientôt disponible
          </button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
