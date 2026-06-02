"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeSectionTitle } from "@/lib/typography";

export default function PressQuotes() {
  const { press } = siteConfig;
  const anim = useScrollAnimationVariants();

  return (
    <Section id="press" className="py-20 md:py-28">
      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-[1100px] px-6 md:px-12"
      >
        <motion.h2 variants={anim.fadeUp} className={`mb-4 text-center ${typeSectionTitle}`}>
          {press.heading}
        </motion.h2>

        <motion.p
          variants={anim.fadeUp}
          className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-brand-cream/75"
        >
          {press.intro}
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2">
          {press.quotes.map((item, i) => (
            <motion.blockquote
              key={i}
              variants={anim.fadeUp}
              className="flex h-full flex-col border border-brand-cream/8 bg-brand-charcoal/20 p-8"
            >
              <p className="mb-6 flex-1 text-base leading-relaxed text-brand-cream/85">
                &ldquo;{item.text}&rdquo;
              </p>
              <cite className="text-xs not-italic uppercase tracking-[0.12em] text-brand-cream/50">
                — {item.source}
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
