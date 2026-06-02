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
    <div className="h-2.5 overflow-hidden bg-brand-cream/10 md:h-3">
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
              className="bg-brand-black/80 px-4 py-7 text-center sm:px-6 sm:py-8"
            >
              <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-brand-cream/60 sm:text-xs md:text-sm">
                {stat.label}
              </p>
              <motion.p
                initial={{ scale: reduced ? 1 : 0.9, opacity: reduced ? 1 : 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: reduced ? 0 : 0.2 + i * 0.08, duration: 0.5 }}
                className="text-2xl font-light text-brand-gold sm:text-3xl md:text-4xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            variants={anim.fadeUp}
            className="relative flex flex-col justify-center overflow-hidden border border-brand-cream/8 bg-brand-black/40 p-8 md:p-12"
          >
            {!reduced && (
              <motion.div
                className="pointer-events-none absolute -top-12 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-brand-burgundy/20 blur-3xl"
                animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.08, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              />
            )}

            <h3
              className="relative mb-8 text-center text-base font-medium uppercase tracking-[0.18em] text-brand-gold md:text-lg"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Decode the Batch · A925
            </h3>
            <div className="relative flex items-stretch justify-center gap-4 md:gap-6">
              {batchParts.map((part, i) => (
                <motion.div
                  key={part.key}
                  initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduced ? 0 : i * 0.12, duration: 0.55 }}
                  className="flex flex-1 flex-col items-center text-center"
                >
                  <span className="mb-3 text-xs uppercase tracking-[0.16em] text-brand-cream/65 md:text-sm">
                    {part.title}
                  </span>
                  <motion.span
                    whileHover={reduced ? undefined : { scale: 1.05, borderColor: "rgba(201,169,110,0.5)" }}
                    className="flex h-20 w-full max-w-[100px] items-center justify-center border border-brand-burgundy/40 bg-brand-burgundy/10 text-4xl font-light text-brand-gold transition-colors md:h-24 md:max-w-[120px] md:text-5xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {part.symbol}
                  </motion.span>
                  <span className="mt-4 max-w-[9rem] text-sm leading-snug text-brand-cream/75 md:max-w-[10rem] md:text-base">
                    {part.meaning}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="relative mt-10 text-center text-sm text-brand-cream/60 md:text-base">
              New batches release every {infographic.releases.join(", ")}
            </p>
          </motion.div>

          <motion.div variants={anim.fadeUp} className="flex flex-col gap-8 lg:gap-10">
            <div className="border border-brand-cream/8 bg-brand-black/40 p-8 md:p-12">
              <h3
                className="mb-8 text-base font-medium uppercase tracking-[0.18em] text-brand-gold md:text-lg"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Mash Bill
              </h3>
              <div className="space-y-5 md:space-y-6">
                {infographic.mashBill.map((item, i) => (
                  <div key={item.grain}>
                    <div className="mb-2 flex justify-between text-sm md:text-base">
                      <span className="text-brand-cream/85">{item.grain}</span>
                      <span className="font-medium text-brand-gold">{item.percent}%</span>
                    </div>
                    <AnimatedBar percent={item.percent} delay={0.15 + i * 0.12} />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden border border-brand-cream/8 bg-brand-cream/8 sm:grid-cols-3">
              {(["nose", "palate", "finish"] as const).map((note, i) => (
                <motion.div
                  key={note}
                  initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduced ? 0 : 0.1 + i * 0.1, duration: 0.5 }}
                  whileHover={reduced ? undefined : { backgroundColor: "rgba(122,48,63,0.15)" }}
                  className="bg-brand-black/40 p-6 text-center transition-colors sm:p-5 md:p-7"
                >
                  <p className="mb-3 text-xs uppercase tracking-[0.16em] text-brand-burgundy-light md:text-sm">
                    {note === "palate" ? "Taste" : note}
                  </p>
                  <p className="text-sm leading-relaxed text-brand-cream/80 md:text-base md:leading-7">
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
