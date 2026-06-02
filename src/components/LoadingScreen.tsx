"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import CoBrandLockup from "./CoBrandLockup";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const delay = reduceMotion ? 350 : 1400;
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
          transition={{ duration: reduceMotion ? 0.12 : 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-brand-black"
        >
          <CoBrandLockup size="md" priority />
          {!reduceMotion && (
            <motion.div
              className="h-px w-24 bg-brand-burgundy/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
