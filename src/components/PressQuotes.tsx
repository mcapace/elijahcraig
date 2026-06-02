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
    <Section id="press" className="py-24 md:py-32">
      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[900px]"
      >
        <motion.h2 variants={anim.fadeUp} className={`mb-6 text-center ${typeSectionTitle}`}>
          {press.heading}
        </motion.h2>

        <motion.p
          variants={anim.fadeUp}
          className="mb-14 text-center text-base leading-relaxed text-brand-cream/80 md:text-lg"
        >
          {press.intro}
        </motion.p>

        <div className="space-y-12">
          {press.quotes.map((item, i) => (
            <motion.blockquote
              key={i}
              variants={anim.fadeUp}
              className="relative border-l-2 border-brand-burgundy/40 pl-8 md:pl-10"
            >
              <span
                className="absolute -left-1 top-0 text-5xl leading-none text-brand-burgundy/25"
                style={{ fontFamily: "var(--font-playfair)" }}
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="mb-4 text-base leading-relaxed text-brand-cream/85 md:text-lg">
                {item.text}
              </p>
              <cite className="text-xs not-italic uppercase tracking-[0.15em] text-brand-cream/55">
                — {item.source}
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
