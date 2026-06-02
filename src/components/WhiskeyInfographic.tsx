"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeEyebrow, typeSectionTitle, typeInfographicTitle } from "@/lib/typography";

function MashBillStack({
  items,
  delay,
}: {
  items: { grain: string; percent: number; color: string }[];
  delay: number;
}) {
  const reduced = useReducedMotion();

  return (
    <div className="flex h-4 overflow-hidden rounded-full ring-1 ring-brand-cream/10 md:h-5">
      {items.map((item, i) => (
        <motion.div
          key={item.grain}
          className="h-full"
          style={{ backgroundColor: item.color }}
          initial={{ width: reduced ? `${item.percent}%` : "0%" }}
          whileInView={{ width: `${item.percent}%` }}
          viewport={{ once: true }}
          transition={{
            duration: reduced ? 0 : 0.9,
            delay: reduced ? 0 : delay + i * 0.12,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          title={`${item.grain} ${item.percent}%`}
        />
      ))}
    </div>
  );
}

export default function WhiskeyInfographic() {
  const { infographic, product } = siteConfig;
  const anim = useScrollAnimationVariants();
  const reduced = useReducedMotion();

  const batchParts = [
    { key: "letter", ...infographic.batchDecode.letter },
    { key: "month", ...infographic.batchDecode.month },
    { key: "year", ...infographic.batchDecode.year },
  ];

  const tastingNotes = [
    { key: "nose" as const, label: "Nose", accent: "from-brand-burgundy/80 to-brand-burgundy-light/40" },
    { key: "palate" as const, label: "Palate", accent: "from-brand-amber/80 to-brand-gold/30" },
    { key: "finish" as const, label: "Finish", accent: "from-brand-gold/70 to-brand-copper/40" },
  ];

  return (
    <Section
      id="at-a-glance"
      fullBleed
      className="relative overflow-hidden border-y border-brand-burgundy/15 bg-brand-charcoal/40 py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-brand-burgundy/8 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-brand-gold/5 blur-[90px]"
        aria-hidden
      />

      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mx-auto max-w-[1200px] px-6 md:px-12"
      >
        <motion.div variants={anim.fadeUp} className="mb-12 text-center md:mb-16">
          <p className={`mb-3 ${typeEyebrow}`}>{infographic.subheading}</p>
          <h2 className={typeSectionTitle}>{infographic.heading}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-brand-cream/78 md:text-lg md:leading-8">
            {infographic.intro}
          </p>
        </motion.div>

        <motion.div
          variants={anim.fadeUp}
          className="mb-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-brand-cream/10 ring-1 ring-brand-cream/10 md:mb-16 md:grid-cols-4"
        >
          {product.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduced ? 0 : i * 0.07, duration: 0.5 }}
              className="flex flex-col items-center justify-center bg-brand-black/75 px-4 py-7 text-center sm:py-8"
            >
              <p className="mb-2 font-[family-name:var(--font-body)] text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-cream/55">
                {stat.label}
              </p>
              <p className="font-[family-name:var(--font-display)] text-3xl font-medium text-brand-gold md:text-4xl">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mb-14 grid gap-10 lg:mb-16 lg:grid-cols-[minmax(240px,320px)_1fr] lg:items-center lg:gap-14">
          <motion.div variants={anim.fadeUp} className="relative mx-auto w-full max-w-[280px] lg:max-w-none">
            <div className="absolute inset-0 rounded-full bg-brand-gold/10 blur-3xl" aria-hidden />
            <div className="relative rounded-sm bg-gradient-to-b from-brand-cream/[0.07] to-transparent p-6 ring-1 ring-brand-cream/10">
              <Image
                src={product.imageSrc}
                alt={product.name}
                width={400}
                height={600}
                className="mx-auto h-auto w-full max-w-[220px] object-contain drop-shadow-2xl lg:max-w-none"
              />
            </div>
          </motion.div>

          <motion.div variants={anim.fadeUp}>
            <p className={`mb-6 ${typeInfographicTitle}`}>Crack the Code</p>
            <p className="mb-8 max-w-xl text-sm leading-relaxed text-brand-cream/72 md:text-base md:leading-7">
              {infographic.batchNote}
            </p>

            <div className="relative rounded-sm border border-brand-burgundy/25 bg-brand-black/50 p-6 md:p-8">
              <div className="absolute left-8 right-8 top-[4.5rem] hidden h-px bg-gradient-to-r from-brand-burgundy/20 via-brand-gold/40 to-brand-burgundy/20 sm:block" aria-hidden />

              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {batchParts.map((part, i) => (
                  <motion.div
                    key={part.key}
                    initial={{ opacity: reduced ? 1 : 0, scale: reduced ? 1 : 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: reduced ? 0 : 0.15 + i * 0.12, duration: 0.5 }}
                    className="text-center"
                  >
                    <p className="mb-3 font-[family-name:var(--font-body)] text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-cream/50">
                      {part.title}
                    </p>
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-brand-gold/35 bg-brand-burgundy/15 sm:h-[4.5rem] sm:w-[4.5rem]">
                      <span className="font-[family-name:var(--font-display)] text-3xl font-medium text-brand-gold sm:text-4xl">
                        {part.symbol}
                      </span>
                    </div>
                    <p className="text-sm leading-snug text-brand-cream/75">{part.meaning}</p>
                  </motion.div>
                ))}
              </div>

              <p className="mt-8 text-center font-[family-name:var(--font-body)] text-xs tracking-wide text-brand-cream/45">
                New batches every {infographic.releases.join(" · ")}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div variants={anim.fadeUp} className="mb-14 md:mb-16">
          <p className={`mb-8 text-center ${typeInfographicTitle}`}>From Barrel to Bottle</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infographic.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduced ? 0 : i * 0.1, duration: 0.5 }}
                whileHover={reduced ? undefined : { y: -4 }}
                className="group relative overflow-hidden rounded-sm border border-brand-cream/10 bg-brand-black/55 p-6 transition-colors hover:border-brand-burgundy/30 hover:bg-brand-black/70"
              >
                <span className="mb-4 block font-[family-name:var(--font-display)] text-4xl font-medium text-brand-burgundy/40 transition-colors group-hover:text-brand-gold/50">
                  {step.step}
                </span>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl font-medium text-brand-gold">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-cream/75 md:text-[0.95rem] md:leading-7">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={anim.fadeUp}
          className="mb-14 rounded-sm border border-brand-cream/10 bg-brand-black/50 p-6 md:mb-16 md:p-10"
        >
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className={`mb-2 ${typeInfographicTitle}`}>The Mash Bill</p>
              <p className="max-w-xl text-sm leading-relaxed text-brand-cream/72 md:text-base">
                {infographic.mashBillNote}
              </p>
            </div>
          </div>

          <MashBillStack items={infographic.mashBill} delay={0.1} />

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {infographic.mashBill.map((item) => (
              <div key={item.grain} className="flex items-center justify-between gap-3 sm:flex-col sm:items-start">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="font-[family-name:var(--font-body)] text-sm text-brand-cream/85">{item.grain}</span>
                </div>
                <span className="font-[family-name:var(--font-display)] text-xl font-medium text-brand-gold">
                  {item.percent}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={anim.fadeUp}>
          <p className={`mb-3 text-center ${typeInfographicTitle}`}>The Flavor Profile</p>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-brand-cream/72 md:text-base md:leading-7">
            {infographic.flavorIntro}
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {tastingNotes.map((note, i) => (
              <motion.div
                key={note.key}
                initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduced ? 0 : 0.08 + i * 0.1, duration: 0.5 }}
                className="overflow-hidden rounded-sm border border-brand-cream/10 bg-brand-black/55"
              >
                <div className={`h-1 bg-gradient-to-r ${note.accent}`} />
                <div className="p-6 md:p-7">
                  <p className="mb-3 font-[family-name:var(--font-body)] text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-gold">
                    {note.label}
                  </p>
                  <p className="text-sm leading-relaxed text-brand-cream/82 md:text-base md:leading-7">
                    {product.tastingNotes[note.key]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
