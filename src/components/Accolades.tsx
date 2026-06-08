"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeSectionTitle } from "@/lib/typography";

export default function Accolades() {
  const { accolades, press } = siteConfig;
  const anim = useScrollAnimationVariants();

  return (
    <Section
      id="accolades"
      fullBleed
      className="border-y border-brand-burgundy/10 bg-brand-charcoal/25 py-16 md:py-24"
    >
      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-12"
      >
        <motion.h2 variants={anim.fadeUp} className={`mb-6 text-center ${typeSectionTitle}`}>
          Recognition and Acclaim
        </motion.h2>

        <motion.p
          variants={anim.fadeUp}
          className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-brand-cream/75"
        >
          {press.intro}
        </motion.p>

        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {accolades.map((accolade, i) => (
            <motion.div
              key={i}
              variants={anim.fadeUp}
              className="flex min-h-[120px] flex-col items-center justify-center border border-brand-cream/8 bg-brand-black/50 px-6 py-8 text-center"
            >
              <p
                className="mb-2 text-xl font-light text-brand-gold md:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {accolade.quote}
              </p>
              <p className="mb-1 text-sm text-brand-cream/85">{accolade.source}</p>
              <p className="text-xs text-brand-cream/55">{accolade.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {press.quotes.map((item, i) => (
            <motion.blockquote
              key={i}
              variants={anim.fadeUp}
              className="flex h-full flex-col border border-brand-cream/8 bg-brand-black/40 p-6 md:p-8"
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
