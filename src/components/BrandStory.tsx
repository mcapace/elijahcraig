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
        className="mx-auto max-w-[720px]"
      >
        <motion.h2 variants={anim.fadeUp} className={`mb-8 text-center ${typeSectionTitle}`}>
          {brandStory.heading}
        </motion.h2>

        <motion.p
          variants={anim.fadeUp}
          className="mb-6 text-center text-lg leading-relaxed text-brand-cream md:text-xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {brandStory.lead}
        </motion.p>

        <motion.p
          variants={anim.fadeUp}
          className="mb-10 text-center text-base leading-relaxed text-brand-cream/75 md:leading-8"
        >
          {brandStory.body}
        </motion.p>

        <motion.div
          variants={anim.fadeUp}
          className="grid grid-cols-2 gap-px overflow-hidden border border-brand-burgundy/15 bg-brand-burgundy/15 sm:grid-cols-4"
        >
          {brandStory.highlights.map((item) => (
            <div key={item.label} className="bg-brand-black/60 px-4 py-5 text-center">
              <p className="mb-1 text-[0.55rem] uppercase tracking-[0.18em] text-brand-cream/45">
                {item.label}
              </p>
              <p className="text-sm font-medium text-brand-gold">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
