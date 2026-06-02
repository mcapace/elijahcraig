"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeSectionTitle } from "@/lib/typography";

export default function BrandStory() {
  const { brandStory } = siteConfig;
  const anim = useScrollAnimationVariants();

  return (
    <Section id="brand-story" className="py-28 md:py-40">
      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.div variants={anim.fadeUp} className="mb-8 flex justify-center">
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-brand-burgundy/40 to-transparent" />
        </motion.div>

        <motion.h2 variants={anim.fadeUp} className={`mb-10 ${typeSectionTitle}`}>
          {brandStory.heading}
        </motion.h2>

        {brandStory.body.map((paragraph, i) => (
          <motion.p
            key={i}
            variants={anim.fadeUp}
            className="mb-6 text-base leading-relaxed text-brand-cream/90 last:mb-0 md:text-lg md:leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}

        <motion.div variants={anim.fadeUp} className="mt-12 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-brand-burgundy/30" />
            <div className="h-1.5 w-1.5 rotate-45 border border-brand-gold/40" />
            <div className="h-px w-12 bg-brand-burgundy/30" />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
