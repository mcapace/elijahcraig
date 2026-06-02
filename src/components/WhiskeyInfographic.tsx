"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeEyebrow, typeSectionTitle } from "@/lib/typography";

function AnimatedBar({
  percent,
  delay,
}: {
  percent: number;
  delay: number;
}) {
  const reduced = useReducedMotion();

  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-brand-cream/[0.08] md:h-2">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-brand-burgundy via-brand-burgundy-light to-brand-gold"
        initial={{ width: reduced ? `${percent}%` : "0%" }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: reduced ? 0 : 1,
          delay: reduced ? 0 : delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </div>
  );
}

function PanelRule() {
  return (
    <div
      className="h-px bg-gradient-to-r from-transparent via-brand-cream/10 to-transparent"
      aria-hidden
    />
  );
}

export default function WhiskeyInfographic() {
  const { infographic, product } = siteConfig;
  const anim = useScrollAnimationVariants();
  const reduced = useReducedMotion();

  const batchParts = [
    { key: "letter", ...infographic.batchDecode.letter, title: "Release" },
    { key: "month", ...infographic.batchDecode.month, title: "Month" },
    { key: "year", ...infographic.batchDecode.year, title: "Year" },
  ];

  const tastingNotes = [
    { key: "nose" as const, label: "Nose" },
    { key: "palate" as const, label: "Taste" },
    { key: "finish" as const, label: "Finish" },
  ];

  return (
    <Section
      id="at-a-glance"
      fullBleed
      className="border-y border-brand-burgundy/10 bg-brand-charcoal/30 py-20 md:py-28"
    >
      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-[1100px] px-6 md:px-12"
      >
        <motion.div variants={anim.fadeUp} className="mb-14 text-center md:mb-16">
          <p className={`mb-3 ${typeEyebrow}`}>{infographic.subheading}</p>
          <h2 className={typeSectionTitle}>{infographic.heading}</h2>
        </motion.div>

        <motion.div
          variants={anim.fadeUp}
          className="mb-14 grid grid-cols-2 border-y border-brand-cream/10 md:mb-16 md:grid-cols-4"
        >
          {product.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduced ? 0 : i * 0.08, duration: 0.6 }}
              className={`flex flex-col items-center justify-center px-4 py-8 text-center sm:px-6 sm:py-9 ${
                i >= 2 ? "border-t border-brand-cream/10 md:border-t-0" : ""
              } ${i % 2 === 1 ? "border-l border-brand-cream/10" : ""} ${
                i > 0 ? "md:border-l md:border-brand-cream/10" : ""
              }`}
            >
              <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-brand-cream/55 sm:text-xs">
                {stat.label}
              </p>
              <motion.p
                initial={{ scale: reduced ? 1 : 0.95, opacity: reduced ? 1 : 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: reduced ? 0 : 0.15 + i * 0.08, duration: 0.5 }}
                className="text-2xl font-light text-brand-gold sm:text-3xl md:text-4xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={anim.fadeUp}
          className="overflow-hidden rounded-sm border border-brand-cream/[0.07] bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-brand-black/30"
        >
          <div className="px-6 py-10 md:px-12 md:py-12">
            <p
              className="mb-8 text-center text-sm uppercase tracking-[0.28em] text-brand-gold md:text-base"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Decode the Batch
            </p>

            <div className="mx-auto flex max-w-xl items-start justify-center gap-5 sm:gap-8 md:max-w-2xl md:gap-12">
              {batchParts.map((part, i) => (
                <div key={part.key} className="contents">
                  {i > 0 && (
                    <span
                      className="mt-10 hidden shrink-0 text-2xl font-light text-brand-gold/25 sm:inline md:mt-12 md:text-3xl"
                      style={{ fontFamily: "var(--font-playfair)" }}
                      aria-hidden
                    >
                      ·
                    </span>
                  )}
                  <motion.div
                    initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: reduced ? 0 : i * 0.1, duration: 0.5 }}
                    className="flex min-w-0 flex-1 flex-col items-center text-center"
                  >
                    <span className="mb-3 text-[0.65rem] uppercase tracking-[0.2em] text-brand-cream/50 sm:text-xs">
                      {part.title}
                    </span>
                    <span
                      className="text-4xl font-light leading-none text-brand-gold sm:text-5xl md:text-6xl"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {part.symbol}
                    </span>
                    <span className="mt-3 text-sm leading-snug text-brand-cream/70 md:text-base">
                      {part.meaning}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-brand-cream/45 md:mt-9">
              New batches release every {infographic.releases.join(", ")}
            </p>
          </div>

          <PanelRule />

          <div className="grid lg:grid-cols-2">
            <div className="px-6 py-10 md:px-12 md:py-12 lg:border-r lg:border-brand-cream/[0.06]">
              <p
                className="mb-8 text-sm uppercase tracking-[0.28em] text-brand-gold md:text-base"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Mash Bill
              </p>
              <div className="space-y-6">
                {infographic.mashBill.map((item, i) => (
                  <div key={item.grain}>
                    <div className="mb-2.5 flex items-baseline justify-between gap-4">
                      <span className="text-sm text-brand-cream/85 md:text-base">{item.grain}</span>
                      <span
                        className="shrink-0 text-lg font-light text-brand-gold md:text-xl"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {item.percent}%
                      </span>
                    </div>
                    <AnimatedBar percent={item.percent} delay={0.15 + i * 0.12} />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-brand-cream/[0.06] px-6 py-10 md:px-12 md:py-12 lg:border-t-0">
              <p
                className="mb-8 text-sm uppercase tracking-[0.28em] text-brand-gold md:text-base"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Tasting Profile
              </p>
              <div className="space-y-7 md:space-y-8">
                {tastingNotes.map((note, i) => (
                  <motion.div
                    key={note.key}
                    initial={{ opacity: reduced ? 1 : 0, x: reduced ? 0 : -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: reduced ? 0 : 0.08 + i * 0.1, duration: 0.5 }}
                    className="grid gap-3 sm:grid-cols-[5.5rem_1fr] sm:gap-6"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-brand-burgundy-light sm:pt-0.5 md:text-sm">
                      {note.label}
                    </p>
                    <p className="text-sm leading-relaxed text-brand-cream/80 md:text-base md:leading-7">
                      {product.tastingNotes[note.key]}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
