"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeEyebrow, typeEyebrowLight, typeSectionTitle, typeInfographicTitle } from "@/lib/typography";

const viewport = { once: true, amount: 0.25 as const };

function MashBillStack({
  items,
  delay,
}: {
  items: { grain: string; percent: number; color: string }[];
  delay: number;
}) {
  const reduced = useReducedMotion();

  return (
    <div className="relative flex h-5 overflow-hidden rounded-full bg-brand-cream/[0.06] ring-1 ring-brand-cream/10 md:h-6">
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          whileInView={{ x: "200%" }}
          viewport={viewport}
          transition={{ duration: 1.8, delay: delay + 0.6, ease: "easeInOut" }}
        />
      )}
      {items.map((item, i) => (
        <motion.div
          key={item.grain}
          className="relative h-full"
          style={{ backgroundColor: item.color }}
          initial={{ width: reduced ? `${item.percent}%` : "0%" }}
          whileInView={{ width: `${item.percent}%` }}
          viewport={viewport}
          transition={{
            duration: reduced ? 0 : 1,
            delay: reduced ? 0 : delay + i * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          title={`${item.grain} ${item.percent}%`}
        />
      ))}
    </div>
  );
}

function BatchCircle({
  symbol,
  index,
}: {
  symbol: string;
  index: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: reduced ? 1 : 0, scale: reduced ? 1 : 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
        delay: reduced ? 0 : 0.2 + index * 0.18,
      }}
      whileHover={reduced ? undefined : { scale: 1.05 }}
      className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-black ring-[5px] ring-brand-black sm:h-[4.5rem] sm:w-[4.5rem] sm:ring-[6px] md:h-20 md:w-20 md:ring-8"
    >
      <div className="absolute inset-0 rounded-full bg-brand-burgundy/25" />
      <span className="relative font-[family-name:var(--font-display)] text-3xl font-medium text-brand-gold sm:text-4xl md:text-5xl">
        {symbol}
      </span>
    </motion.div>
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

  return (
    <Section
      id="at-a-glance"
      fullBleed
      className="relative overflow-hidden border-y border-brand-burgundy/15 bg-brand-charcoal/40 py-16 md:py-28"
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
        viewport={{ once: true, margin: "-60px" }}
        className="relative mx-auto max-w-[1200px] px-4 sm:px-6 md:px-12"
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
              initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: reduced ? 0 : i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center bg-brand-black/75 px-4 py-7 text-center sm:py-8"
            >
              <p className="mb-2 font-[family-name:var(--font-body)] text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-cream/55">
                {stat.label}
              </p>
              <motion.p
                initial={{ opacity: reduced ? 1 : 0, scale: reduced ? 1 : 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ delay: reduced ? 0 : 0.15 + i * 0.1, type: "spring", stiffness: 200, damping: 16 }}
                className="font-[family-name:var(--font-display)] text-2xl font-medium text-brand-gold sm:text-3xl md:text-4xl"
              >
                {stat.value}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={anim.fadeUp} className="mb-14 md:mb-16">
          <div className="mb-8 text-center md:mb-10">
            <p className={`mb-4 ${typeInfographicTitle}`}>Crack the Code</p>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-brand-cream/72 md:text-base md:leading-7">
              {infographic.batchNote}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-sm border border-brand-burgundy/20 bg-brand-black/40 px-4 py-8 sm:px-5 sm:py-10 md:px-10 md:py-12">
            <motion.p
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-display)] text-[clamp(6rem,18vw,11rem)] font-medium leading-none text-brand-gold/[0.04]"
              aria-hidden
              animate={reduced ? undefined : { opacity: [0.03, 0.07, 0.03] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              A925
            </motion.p>

            <div className="relative mx-auto max-w-2xl md:max-w-3xl">
              <div className="grid grid-cols-3 gap-x-1.5 sm:gap-x-3 md:gap-x-6">
                {batchParts.map((part) => (
                  <p
                    key={`${part.key}-label`}
                    className="text-center font-[family-name:var(--font-body)] text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-brand-cream/55 sm:text-[0.68rem] sm:tracking-[0.24em]"
                  >
                    {part.title}
                  </p>
                ))}
              </div>

              <div className="relative my-4 grid grid-cols-3 items-center md:my-5">
                <motion.div
                  className="pointer-events-none absolute top-1/2 right-[16.666%] left-[16.666%] z-0 h-px -translate-y-1/2 origin-left bg-brand-gold/25"
                  initial={{ scaleX: reduced ? 1 : 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewport}
                  transition={{ duration: reduced ? 0 : 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden
                />
                {batchParts.map((part, i) => (
                  <div key={part.key} className="flex justify-center">
                    <BatchCircle symbol={part.symbol} index={i} />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-x-1.5 sm:gap-x-3 md:gap-x-6">
                {batchParts.map((part, i) => (
                  <motion.p
                    key={`${part.key}-meaning`}
                    initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ delay: reduced ? 0 : 0.45 + i * 0.15, duration: 0.5 }}
                    className="mx-auto max-w-none text-center text-xs leading-snug text-brand-cream/78 sm:max-w-[9rem] sm:text-sm md:max-w-[10rem] md:text-base"
                  >
                    {part.meaning}
                  </motion.p>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: reduced ? 1 : 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ delay: reduced ? 0 : 0.8, duration: 0.5 }}
              className="relative mt-6 text-center font-[family-name:var(--font-body)] text-[0.65rem] leading-relaxed tracking-wide text-brand-cream/45 sm:text-xs md:mt-10"
            >
              New batches every {infographic.releases.join(" · ")}
            </motion.p>
          </div>
        </motion.div>

        <motion.div variants={anim.fadeUp} className="mb-14 md:mb-16">
          <p className={`mb-8 text-center ${typeInfographicTitle}`}>From Barrel to Bottle</p>

          <div className="relative hidden lg:block">
            <motion.div
              className="absolute top-8 right-[12%] left-[12%] h-px origin-left bg-gradient-to-r from-brand-burgundy/40 via-brand-gold/35 to-brand-burgundy/40"
              initial={{ scaleX: reduced ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: reduced ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infographic.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: reduced ? 0 : 0.12 + i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduced ? undefined : { y: -6, transition: { duration: 0.25 } }}
                className="group relative overflow-hidden rounded-sm border border-brand-cream/10 bg-brand-black/55 p-6 transition-colors hover:border-brand-burgundy/35 hover:bg-brand-black/70"
              >
                <motion.span
                  initial={{ opacity: reduced ? 1 : 0, x: reduced ? 0 : -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ delay: reduced ? 0 : 0.2 + i * 0.12, duration: 0.45 }}
                  className="mb-4 block font-[family-name:var(--font-display)] text-4xl font-medium text-brand-burgundy/40 transition-colors group-hover:text-brand-gold/55"
                >
                  {step.step}
                </motion.span>
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
          className="mb-14 rounded-sm border border-brand-cream/10 bg-brand-black/50 p-5 sm:p-6 md:mb-16 md:p-10"
        >
          <div className="mb-8">
            <p className={`mb-2 ${typeInfographicTitle}`}>The Mash Bill</p>
            <p className="max-w-xl text-sm leading-relaxed text-brand-cream/72 md:text-base">
              {infographic.mashBillNote}
            </p>
          </div>

          <MashBillStack items={infographic.mashBill} delay={0.1} />

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {infographic.mashBill.map((item, i) => (
              <motion.div
                key={item.grain}
                initial={{ opacity: reduced ? 1 : 0, x: reduced ? 0 : -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ delay: reduced ? 0 : 0.5 + i * 0.12, duration: 0.45 }}
                className="flex items-center justify-between gap-3 sm:flex-col sm:items-start"
              >
                <div className="flex items-center gap-2">
                  <motion.span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                    initial={{ scale: reduced ? 1 : 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={viewport}
                    transition={{ delay: reduced ? 0 : 0.55 + i * 0.12, type: "spring", stiffness: 400, damping: 15 }}
                  />
                  <span className="font-[family-name:var(--font-body)] text-sm text-brand-cream/85">{item.grain}</span>
                </div>
                <span className="font-[family-name:var(--font-display)] text-xl font-medium text-brand-gold">
                  {item.percent}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={anim.fadeUp}>
          <div className="mb-10 text-center md:mb-12">
            <p className={`mb-3 ${typeEyebrow}`}>{infographic.flavorSubheading}</p>
            <p className={typeInfographicTitle}>{infographic.flavorHeading}</p>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-brand-cream/72 md:text-base md:leading-7">
              {infographic.flavorIntro}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {infographic.tastingNotes.map((note, i) => (
              <motion.div
                key={note.key}
                initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: reduced ? 0 : i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduced ? undefined : { y: -4 }}
                className="overflow-hidden rounded-sm border border-brand-cream/10 bg-brand-black/55 transition-colors hover:border-brand-burgundy/25"
              >
                <motion.div
                  className="h-1 w-full"
                  initial={{ scaleX: reduced ? 1 : 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.01 }}
                  transition={{ delay: reduced ? 0 : 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    transformOrigin: "left center",
                    background: `linear-gradient(to right, ${note.accentFrom}, ${note.accentTo})`,
                  }}
                />
                <div className="p-6 md:p-7">
                  <p className={`mb-3 ${typeEyebrowLight}`}>{note.label}</p>
                  <p className="text-sm leading-relaxed text-brand-cream/82 md:text-base md:leading-7">
                    {product.tastingNotes[note.key as keyof typeof product.tastingNotes]}
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
