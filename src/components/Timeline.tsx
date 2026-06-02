"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { typeSectionTitle, typeEyebrow } from "@/lib/typography";

export default function Timeline() {
  const { timeline } = siteConfig;
  const reduced = useReducedMotion();

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
          <div className="absolute top-8 right-8 left-8 hidden h-px overflow-hidden md:block" aria-hidden>
            <motion.div
              className="h-full bg-brand-burgundy/40"
              initial={{ scaleX: reduced ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0 : 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "left center" }}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {timeline.milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                variants={fadeUp}
                className="relative text-center"
                whileHover={reduced ? undefined : { y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-brand-burgundy/40 bg-brand-black"
                  initial={{ scale: reduced ? 1 : 0.8, opacity: reduced ? 1 : 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduced ? 0 : i * 0.15, duration: 0.5 }}
                >
                  <span
                    className="text-lg font-light text-brand-gold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {milestone.year}
                  </span>
                </motion.div>
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
