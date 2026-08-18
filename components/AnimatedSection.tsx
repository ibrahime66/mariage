"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  );
}
