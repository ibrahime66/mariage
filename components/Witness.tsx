"use client";

import { Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { weddingConfig } from "@/lib/weddingData";

export default function Witness() {
  return (
    <AnimatedSection className="relative flex flex-col items-center px-6 py-24 text-center md:py-36">
      <SectionHeading eyebrow="Un rôle d'honneur" title="Le témoin" />

      <div className="card card-hover flex max-w-sm flex-col items-center rounded-3xl px-10 py-10">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-ink bg-sage-400/25">
          <Award size={30} strokeWidth={1.8} className="text-sage-500" />
        </div>
        <h3 className="font-display text-xl font-bold text-ink">
          {weddingConfig.witness.name}
        </h3>
        <p className="mt-2 font-hand text-lg text-coral-600">
          {weddingConfig.witness.role}
        </p>
      </div>
    </AnimatedSection>
  );
}
