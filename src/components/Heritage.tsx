"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { typeSectionTitle, typeEyebrow } from "@/lib/typography";

export default function Heritage() {
  const { heritage } = siteConfig;

  return (
    <Section id="heritage" fullBleed className="py-20 md:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[1200px] px-6 md:px-12"
      >
        <motion.div variants={fadeUp} className="mb-14 text-center">
          <p className={`mb-4 ${typeEyebrow}`}>Since 1789</p>
          <h2 className={typeSectionTitle}>{heritage.heading}</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {heritage.milestones.map((milestone) => (
            <motion.div
              key={milestone.year}
              variants={fadeUp}
              className="relative border border-brand-burgundy/15 bg-brand-charcoal/25 p-8 md:p-10"
            >
              <div className="mb-4 flex items-center gap-4">
                <span
                  className="text-4xl font-light text-brand-burgundy-light md:text-5xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {milestone.year}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold/80">
                  {milestone.label}
                </span>
              </div>
              <p className="text-base leading-relaxed text-brand-cream/85">{milestone.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
