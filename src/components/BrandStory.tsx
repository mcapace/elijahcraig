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
            className="mb-12 text-pretty text-center text-base leading-relaxed text-brand-cream/75 md:mb-14 md:leading-8"
          >
            {brandStory.body}
          </motion.p>
        </div>

        <motion.div variants={anim.fadeUp} className="mx-auto max-w-[960px]">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-brand-cream/10 ring-1 ring-brand-cream/10 sm:grid-cols-4">
            {brandStory.highlights.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center bg-brand-black/75 px-4 py-7 text-center sm:py-8"
              >
                <p className="mb-2 font-[family-name:var(--font-body)] text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-cream/55">
                  {item.label}
                </p>
                <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-brand-gold sm:text-3xl md:text-4xl">
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
