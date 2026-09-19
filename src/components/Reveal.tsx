"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps content in a subtle fade + slide-up animation that plays once,
 * when the element scrolls into view. Used throughout the site for the
 * "staggered section reveal" feel.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
