"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { typeSectionTitle, typeEyebrow } from "@/lib/typography";

export default function Craftsmanship() {
  const { craftsmanship } = siteConfig;

  return (
    <Section id="craftsmanship" fullBleed className="py-24 md:py-36">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[1200px] px-6 md:px-12"
      >
        <motion.div variants={fadeUp} className="mb-16 text-center">
          <p className={`mb-4 ${typeEyebrow}`}>The Process</p>
          <h2 className={typeSectionTitle}>{craftsmanship.heading}</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {craftsmanship.features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative border border-brand-cream/8 bg-brand-charcoal/30 p-8 transition-all duration-500 hover:border-brand-burgundy/25 hover:bg-brand-charcoal/50 md:p-10"
            >
              <span
                className="mb-4 block text-4xl font-light text-brand-burgundy/25"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                0{i + 1}
              </span>
              <h3
                className="mb-3 text-xl font-light tracking-wide text-brand-cream md:text-2xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-cream/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
