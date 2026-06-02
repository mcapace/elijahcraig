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
    <Section id="brand-story" className="py-20 md:py-28">
      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="mx-auto max-w-[720px]">
          <motion.h2 variants={anim.fadeUp} className={`mb-8 text-center ${typeSectionTitle}`}>
            {brandStory.heading}
          </motion.h2>

          <motion.p
            variants={anim.fadeUp}
            className="mb-6 text-center text-lg leading-relaxed text-brand-cream md:text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {brandStory.lead}
          </motion.p>

          <motion.p
            variants={anim.fadeUp}
            className="mb-12 text-center text-base leading-relaxed text-brand-cream/75 md:mb-14 md:leading-8"
          >
            {brandStory.body}
          </motion.p>
        </div>

        <motion.div variants={anim.fadeUp} className="mx-auto max-w-[960px]">
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-brand-burgundy/20 bg-brand-burgundy/20 sm:grid-cols-4">
            {brandStory.highlights.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[5.5rem] flex-col items-center justify-center bg-brand-black/60 px-4 py-6 text-center sm:min-h-[6.25rem] sm:px-6 sm:py-7 md:min-h-[7rem] md:py-8"
              >
                <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-brand-cream/60 sm:text-xs md:mb-2.5 md:text-sm">
                  {item.label}
                </p>
                <p className="text-lg font-medium leading-tight text-brand-gold sm:text-xl md:text-2xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
