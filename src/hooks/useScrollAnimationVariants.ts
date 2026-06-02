"use client";

import { useReducedMotion } from "framer-motion";
import {
  fadeUp,
  reducedFadeUp,
  reducedSlideInLeft,
  reducedSlideInRight,
  reducedStaggerContainer,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/animations";

export function useScrollAnimationVariants() {
  const reduced = useReducedMotion();

  if (reduced) {
    return {
      fadeUp: reducedFadeUp,
      staggerContainer: reducedStaggerContainer,
      slideInLeft: reducedSlideInLeft,
      slideInRight: reducedSlideInRight,
    };
  }

  return {
    fadeUp,
    staggerContainer,
    slideInLeft,
    slideInRight,
  };
}
