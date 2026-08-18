"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/lib/weddingData";

function getTimeLeft(target: number) {
  const now = Date.now();
  const diff = Math.max(target - now, 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center px-4 py-2 md:px-8">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="font-display text-3xl md:text-5xl font-extrabold text-ink tabular-nums"
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span className="mt-2 text-[10px] uppercase tracking-[0.25em] text-ink-muted">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const target = new Date(weddingConfig.weddingDateISO).getTime();
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(
    null
  );

  useEffect(() => {
    setTime(getTimeLeft(target));
    const interval = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <section
      id="compte-a-rebours"
      className="relative z-20 -mt-10 md:-mt-16 flex justify-center px-6 pb-28 md:pb-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-3xl"
      >
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 0.5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="card rounded-3xl px-4 py-8 md:px-10 md:py-10"
        >
          <div className="mb-6 flex items-center justify-center">
            <p className="eyebrow-tag">Compte à rebours</p>
          </div>

          {time && (
            <div className="flex flex-wrap items-center justify-center divide-x-2 divide-ink/10">
              <Unit value={time.days} label="Jours" />
              <Unit value={time.hours} label="Heures" />
              <Unit value={time.minutes} label="Minutes" />
              <Unit value={time.seconds} label="Secondes" />
            </div>
          )}

          <p className="mt-6 text-center text-xs text-ink-muted">
            In Sha Allah, jusqu&apos;au {weddingConfig.weddingMonthLabel}.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
