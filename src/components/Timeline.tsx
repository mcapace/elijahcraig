"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { typeSectionTitle, typeEyebrow } from "@/lib/typography";

export default function Timeline() {
  const { timeline } = siteConfig;

  return (
    <Section id="heritage" fullBleed className="py-20 md:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-[1100px] px-6 md:px-12"
      >
        <motion.div variants={fadeUp} className="mb-14 text-center">
          <p className={`mb-3 ${typeEyebrow}`}>Since 1789</p>
          <h2 className={typeSectionTitle}>{timeline.heading}</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute top-8 right-8 left-8 hidden h-px bg-brand-burgundy/30 md:block" aria-hidden />

          <div className="grid gap-8 md:grid-cols-3">
            {timeline.milestones.map((milestone, i) => (
              <motion.div key={milestone.year} variants={fadeUp} className="relative text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-brand-burgundy/40 bg-brand-black">
                  <span
                    className="text-lg font-light text-brand-gold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {milestone.year}
                  </span>
                </div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-gold/80">
                  {milestone.label}
                </p>
                <p className="mx-auto max-w-[260px] text-sm leading-relaxed text-brand-cream/75">
                  {milestone.body}
                </p>
                {i < timeline.milestones.length - 1 && (
                  <div className="mx-auto mt-8 h-8 w-px bg-brand-burgundy/20 md:hidden" aria-hidden />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
