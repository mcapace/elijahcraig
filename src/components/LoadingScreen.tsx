"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import CoBrandLockup from "./CoBrandLockup";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const delay = reduceMotion ? 400 : 1600;
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
          transition={{ duration: reduceMotion ? 0.15 : 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-black"
        >
          <motion.div
            initial={{ opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5, ease: "easeOut" }}
          >
            <CoBrandLockup size="lg" priority />
          </motion.div>
          <motion.div
            initial={{ width: reduceMotion ? 100 : 0 }}
            animate={{ width: 100 }}
            transition={{
              duration: reduceMotion ? 0.01 : 1,
              ease: "easeInOut",
              delay: reduceMotion ? 0 : 0.25,
            }}
            className="mt-8 h-px bg-brand-burgundy/40"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
