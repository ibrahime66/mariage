"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5"
          >
            <span className="eyebrow-tag font-display text-xl tracking-wide text-ink">
              IB
            </span>
            <div className="relative h-1.5 w-32 overflow-hidden rounded-full border-2 border-ink bg-white">
              <motion.div
                className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-coral-500"
                animate={{ x: ["-100%", "220%"] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
