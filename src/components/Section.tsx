"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode, useMemo } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variants?: Variants;
  fullBleed?: boolean;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const reducedSectionVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

export default function Section({
  children,
  className = "",
  id,
  variants = defaultVariants,
  fullBleed = false,
}: SectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const resolvedVariants = useMemo(
    () => (prefersReducedMotion ? reducedSectionVariants : variants),
    [prefersReducedMotion, variants],
  );

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={resolvedVariants}
      className={`relative ${fullBleed ? "" : "mx-auto max-w-[1200px] px-6 md:px-12"} ${className}`}
    >
      {children}
    </motion.section>
  );
}
