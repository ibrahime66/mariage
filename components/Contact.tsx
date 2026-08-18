"use client";

import { Phone, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { weddingConfig } from "@/lib/weddingData";

export default function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="relative flex flex-col items-center px-6 py-28 text-center md:py-40"
    >
      <SectionHeading eyebrow="Une question ?" title="Contact" />

      <p className="font-display mb-8 text-xl font-bold text-ink">
        {weddingConfig.contact.phone}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a href={weddingConfig.contact.telLink} className="btn-accent">
          <Phone size={16} strokeWidth={2} />
          Appeler
        </a>
        <a
          href={weddingConfig.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <MessageCircle size={16} strokeWidth={2} />
          WhatsApp
        </a>
      </div>
    </AnimatedSection>
  );
}
