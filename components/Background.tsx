"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Fond global chaleureux : papier crème, pointillés discrets, grain léger,
// et quelques taches de couleur organiques qui dérivent lentement.
// Monté une seule fois, position fixed, derrière tout le contenu.
export default function Background() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const blobY1 = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-cream-50"
    >
      {/* Pointillés type papier à motifs */}
      <div className="absolute inset-0 bg-dots opacity-70" />

      {/* Taches de couleur organiques, très douces, en mouvement lent */}
      <motion.div
        style={{ y: blobY1 }}
        className="absolute -top-32 left-[10%] h-[30rem] w-[30rem] rounded-full bg-coral-400/[0.14] blur-[110px] animate-blob"
      />
      <motion.div
        style={{ y: blobY2 }}
        className="absolute top-[35%] right-[-5%] h-[26rem] w-[26rem] rounded-full bg-gold-400/[0.18] blur-[110px] animate-blob"
      />
      <motion.div
        style={{ y: blobY1 }}
        className="absolute bottom-0 left-[5%] h-[24rem] w-[24rem] rounded-full bg-sage-400/[0.14] blur-[110px] animate-blob"
      />

      {/* Grain très léger pour casser la platitude du fond */}
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}
