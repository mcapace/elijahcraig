"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/content";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const delay = reduceMotion ? 350 : 1200;
    const timer = setTimeout(() => setVisible(false), delay);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.12 : 0.4 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-black"
        >
          <Image
            src={siteConfig.brand.logo}
            alt={siteConfig.brand.name}
            width={240}
            height={48}
            priority
            className="h-auto w-40 md:w-48"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
