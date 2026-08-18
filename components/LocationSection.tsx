"use client";

import { MapPin, Navigation } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { weddingConfig } from "@/lib/weddingData";

export default function LocationSection() {
  return (
    <AnimatedSection
      id="lieu"
      className="relative mx-auto max-w-4xl px-6 py-28 md:py-40"
    >
      <SectionHeading eyebrow="Où se retrouver" title="Le lieu" />

      <div className="card overflow-hidden rounded-3xl">
        <div className="aspect-video w-full grayscale-[0.15] contrast-[1.02] sepia-[0.08]">
          <iframe
            title="Carte du lieu du mariage"
            src={weddingConfig.location.mapsEmbedSrc}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-6 p-8 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-coral-400/25">
              <MapPin size={18} strokeWidth={2} className="text-coral-600" />
            </div>
            <div className="text-left">
              <p className="font-display text-lg font-bold text-ink">
                {weddingConfig.location.name}
              </p>
              <p className="text-sm text-ink-muted">
                {weddingConfig.location.city}, {weddingConfig.location.country}
              </p>
            </div>
          </div>

          <a
            href={weddingConfig.location.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Navigation size={16} strokeWidth={2} />
            Ouvrir dans Google Maps
          </a>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border-2 border-dashed border-ink/20 bg-cream-100/60 px-8 py-6 text-center">
        <p className="font-hand mb-1 text-xl text-coral-600">Stationnement</p>
        <p className="text-sm text-ink-muted">
          Bienvenue en Guinée. Garez-vous là où il reste une place… sans
          bloquer les voisins.
        </p>
      </div>
    </AnimatedSection>
  );
}
