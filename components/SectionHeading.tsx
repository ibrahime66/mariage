"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  const wrap =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div className={`mb-14 flex flex-col md:mb-20 ${wrap}`}>
      <motion.span
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="eyebrow-tag mb-4"
      >
        {eyebrow}
      </motion.span>
      <h2 className="section-title">{title}</h2>
      <svg
        aria-hidden="true"
        viewBox="0 0 200 16"
        className="mt-4 h-4 w-32 text-coral-500"
      >
        <path
          d="M2 8 C 30 -2, 50 18, 80 8 S 130 -2, 160 8 S 190 14, 198 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
