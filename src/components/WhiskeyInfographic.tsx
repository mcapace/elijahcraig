"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeEyebrow, typeSectionTitle } from "@/lib/typography";

export default function WhiskeyInfographic() {
  const { infographic, product } = siteConfig;
  const anim = useScrollAnimationVariants();

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

        {/* Stats row */}
        <motion.div
          variants={anim.fadeUp}
          className="mb-10 grid grid-cols-2 gap-px overflow-hidden border border-brand-burgundy/20 bg-brand-burgundy/20 md:grid-cols-4"
        >
          {product.stats.map((stat) => (
            <div key={stat.label} className="bg-brand-black/80 px-4 py-6 text-center">
              <p className="mb-1 text-[0.6rem] uppercase tracking-[0.22em] text-brand-cream/50">
                {stat.label}
              </p>
              <p
                className="text-2xl font-light text-brand-gold md:text-3xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Batch decoder */}
          <motion.div
            variants={anim.fadeUp}
            className="flex flex-col justify-center border border-brand-cream/8 bg-brand-black/40 p-8 md:p-10"
          >
            <h3 className="mb-6 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand-cream/70">
              Decode the Batch · A925
            </h3>
            <div className="flex items-stretch justify-center gap-3 md:gap-4">
              {[
                { key: "letter", ...infographic.batchDecode.letter, title: "Release" },
                { key: "month", ...infographic.batchDecode.month, title: "Month" },
                { key: "year", ...infographic.batchDecode.year, title: "Year" },
              ].map((part) => (
                <div key={part.key} className="flex flex-1 flex-col items-center text-center">
                  <span className="mb-2 text-[0.55rem] uppercase tracking-[0.18em] text-brand-cream/45">
                    {part.title}
                  </span>
                  <span
                    className="flex h-16 w-full max-w-[88px] items-center justify-center border border-brand-burgundy/40 bg-brand-burgundy/10 text-3xl font-light text-brand-gold md:h-20 md:text-4xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {part.symbol}
                  </span>
                  <span className="mt-3 text-[0.65rem] leading-snug text-brand-cream/60">
                    {part.meaning}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-brand-cream/50">
              New batches release every{" "}
              {infographic.releases.join(", ")}
            </p>
          </motion.div>

          {/* Mash bill + tasting */}
          <motion.div variants={anim.fadeUp} className="flex flex-col gap-8">
            <div className="border border-brand-cream/8 bg-brand-black/40 p-8 md:p-10">
              <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-brand-cream/70">
                Mash Bill
              </h3>
              <div className="space-y-4">
                {infographic.mashBill.map((item) => (
                  <div key={item.grain}>
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span className="text-brand-cream/75">{item.grain}</span>
                      <span className="text-brand-gold">{item.percent}%</span>
                    </div>
                    <div className="h-2 overflow-hidden bg-brand-cream/10">
                      <div
                        className="h-full bg-gradient-to-r from-brand-burgundy to-brand-gold"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px overflow-hidden border border-brand-cream/8 bg-brand-cream/8">
              {(["nose", "palate", "finish"] as const).map((note) => (
                <div key={note} className="bg-brand-black/40 p-4 text-center md:p-5">
                  <p className="mb-2 text-[0.55rem] uppercase tracking-[0.18em] text-brand-burgundy-light">
                    {note === "palate" ? "Taste" : note}
                  </p>
                  <p className="text-[0.7rem] leading-relaxed text-brand-cream/70">
                    {product.tastingNotes[note].split(" — ")[0].split(",")[0]}
                    …
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
