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
    <div className="h-2 overflow-hidden bg-brand-cream/10">
      <motion.div
        className="h-full bg-gradient-to-r from-brand-burgundy via-brand-burgundy-light to-brand-gold"
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

export default function WhiskeyInfographic() {
  const { infographic, product } = siteConfig;
  const anim = useScrollAnimationVariants();
  const reduced = useReducedMotion();

  const batchParts = [
    { key: "letter", ...infographic.batchDecode.letter, title: "Release" },
    { key: "month", ...infographic.batchDecode.month, title: "Month" },
    { key: "year", ...infographic.batchDecode.year, title: "Year" },
  ];

  return (
    <Section id="at-a-glance" fullBleed className="border-y border-brand-burgundy/10 bg-brand-charcoal/30 py-20 md:py-28">
      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-[1100px] px-6 md:px-12"
      >
        <motion.div variants={anim.fadeUp} className="mb-12 text-center">
          <p className={`mb-3 ${typeEyebrow}`}>{infographic.subheading}</p>
          <h2 className={typeSectionTitle}>{infographic.heading}</h2>
        </motion.div>

        <motion.div
          variants={anim.fadeUp}
          className="mb-10 grid grid-cols-2 gap-px overflow-hidden border border-brand-burgundy/20 bg-brand-burgundy/20 md:grid-cols-4"
        >
          {product.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduced ? 0 : i * 0.08, duration: 0.6 }}
              className="bg-brand-black/80 px-4 py-6 text-center"
            >
              <p className="mb-1 text-[0.6rem] uppercase tracking-[0.22em] text-brand-cream/50">
                {stat.label}
              </p>
              <motion.p
                initial={{ scale: reduced ? 1 : 0.9, opacity: reduced ? 1 : 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: reduced ? 0 : 0.2 + i * 0.08, duration: 0.5 }}
                className="text-2xl font-light text-brand-gold md:text-3xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={anim.fadeUp}
            className="relative flex flex-col justify-center overflow-hidden border border-brand-cream/8 bg-brand-black/40 p-8 md:p-10"
          >
            {!reduced && (
              <motion.div
                className="pointer-events-none absolute -top-12 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-brand-burgundy/20 blur-3xl"
                animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.08, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              />
            )}

            <h3 className="relative mb-6 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand-cream/70">
              Decode the Batch · A925
            </h3>
            <div className="relative flex items-stretch justify-center gap-3 md:gap-4">
              {batchParts.map((part, i) => (
                <motion.div
                  key={part.key}
                  initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduced ? 0 : i * 0.12, duration: 0.55 }}
                  className="flex flex-1 flex-col items-center text-center"
                >
                  <span className="mb-2 text-[0.55rem] uppercase tracking-[0.18em] text-brand-cream/45">
                    {part.title}
                  </span>
                  <motion.span
                    whileHover={reduced ? undefined : { scale: 1.05, borderColor: "rgba(201,169,110,0.5)" }}
                    className="flex h-16 w-full max-w-[88px] items-center justify-center border border-brand-burgundy/40 bg-brand-burgundy/10 text-3xl font-light text-brand-gold transition-colors md:h-20 md:text-4xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {part.symbol}
                  </motion.span>
                  <span className="mt-3 text-[0.65rem] leading-snug text-brand-cream/60">
                    {part.meaning}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="relative mt-8 text-center text-xs text-brand-cream/50">
              New batches release every {infographic.releases.join(", ")}
            </p>
          </motion.div>

          <motion.div variants={anim.fadeUp} className="flex flex-col gap-8">
            <div className="border border-brand-cream/8 bg-brand-black/40 p-8 md:p-10">
              <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-brand-cream/70">
                Mash Bill
              </h3>
              <div className="space-y-4">
                {infographic.mashBill.map((item, i) => (
                  <div key={item.grain}>
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span className="text-brand-cream/75">{item.grain}</span>
                      <span className="text-brand-gold">{item.percent}%</span>
                    </div>
                    <AnimatedBar percent={item.percent} delay={0.15 + i * 0.12} />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px overflow-hidden border border-brand-cream/8 bg-brand-cream/8">
              {(["nose", "palate", "finish"] as const).map((note, i) => (
                <motion.div
                  key={note}
                  initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduced ? 0 : 0.1 + i * 0.1, duration: 0.5 }}
                  whileHover={reduced ? undefined : { backgroundColor: "rgba(122,48,63,0.15)" }}
                  className="bg-brand-black/40 p-4 text-center transition-colors md:p-5"
                >
                  <p className="mb-2 text-[0.55rem] uppercase tracking-[0.18em] text-brand-burgundy-light">
                    {note === "palate" ? "Taste" : note}
                  </p>
                  <p className="text-[0.7rem] leading-relaxed text-brand-cream/70">
                    {product.tastingNotes[note]}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
