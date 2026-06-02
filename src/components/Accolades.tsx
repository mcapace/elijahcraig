"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeEyebrow } from "@/lib/typography";

export default function Accolades() {
  const { accolades } = siteConfig;
  const anim = useScrollAnimationVariants();

  return (
    <Section
      id="accolades"
      fullBleed
      className="border-y border-brand-burgundy/10 bg-brand-charcoal/25 py-20 md:py-28"
    >
      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-[900px] px-6 md:px-12"
      >
        <motion.h2 variants={anim.fadeUp} className={`mb-12 text-center ${typeEyebrow}`}>
          Recognition & Acclaim
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
      </motion.div>
    </Section>
  );
}
