"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#histoire", label: "Histoire" },
  { href: "#maries", label: "Mariés" },
  { href: "#programme", label: "Programme" },
  { href: "#lieu", label: "Lieu" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 md:top-6 left-1/2 z-40 w-[94%] max-w-3xl -translate-x-1/2"
    >
      <div className="flex items-center justify-between gap-4 rounded-full border-2 border-ink bg-white/90 px-5 py-2.5 shadow-pop backdrop-blur-sm">
        <a
          href="#"
          className="font-display text-sm font-extrabold tracking-widest text-ink"
        >
          IB
        </a>
        <div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-ink-muted">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-coral-600"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn-primary !px-4 !py-1.5 !text-xs">
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
