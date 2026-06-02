"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeEyebrow, typeSectionTitle, typeInfographicTitle } from "@/lib/typography";

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
  title,
  meaning,
  index,
}: {
  symbol: string;
  title: string;
  meaning: string;
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
      className="relative flex min-w-0 flex-1 flex-col items-center text-center"
    >
      <p className="mb-3 font-[family-name:var(--font-body)] text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-cream/55">
        {title}
      </p>

      <motion.div
        className="relative mb-4 flex h-[4.5rem] w-[4.5rem] items-center justify-center md:h-20 md:w-20"
        whileHover={reduced ? undefined : { scale: 1.06 }}
        animate={
          reduced
            ? undefined
            : {
                boxShadow: [
                  "0 0 0 rgba(201,169,110,0)",
                  "0 0 28px rgba(201,169,110,0.25)",
                  "0 0 0 rgba(201,169,110,0)",
                ],
              }
        }
        transition={
          reduced
            ? undefined
            : { duration: 2.8, repeat: Infinity, delay: index * 0.4, ease: "easeInOut" }
        }
      >
        <div className="absolute inset-0 rounded-full border border-brand-gold/40 bg-brand-burgundy/25" />
        <span className="relative font-[family-name:var(--font-display)] text-4xl font-medium text-brand-gold md:text-5xl">
          {symbol}
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ delay: reduced ? 0 : 0.45 + index * 0.15, duration: 0.5 }}
        className="max-w-[9rem] text-sm leading-snug text-brand-cream/78 md:max-w-[10rem] md:text-base"
      >
        {meaning}
      </motion.p>
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
        viewport={{ once: true, margin: "-60px" }}
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
                className="font-[family-name:var(--font-display)] text-3xl font-medium text-brand-gold md:text-4xl"
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

          <div className="relative overflow-hidden rounded-sm border border-brand-burgundy/20 bg-brand-black/40 px-5 py-10 md:px-10 md:py-12">
            <motion.p
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-display)] text-[clamp(6rem,18vw,11rem)] font-medium leading-none text-brand-gold/[0.04]"
              aria-hidden
              animate={reduced ? undefined : { opacity: [0.03, 0.07, 0.03] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              A925
            </motion.p>

            <div className="relative mx-auto max-w-3xl">
              <motion.div
                className="absolute left-[16%] right-[16%] top-[5.75rem] hidden h-px origin-left bg-gradient-to-r from-brand-burgundy/30 via-brand-gold/50 to-brand-burgundy/30 sm:block md:top-[6.25rem]"
                initial={{ scaleX: reduced ? 1 : 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewport}
                transition={{ duration: reduced ? 0 : 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden
              />

              <div className="relative flex items-start justify-center gap-3 sm:gap-6 md:gap-10">
                {batchParts.map((part, i) => (
                  <div key={part.key} className="contents">
                    {i > 0 && (
                      <motion.span
                        initial={{ opacity: reduced ? 1 : 0, scale: reduced ? 1 : 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={viewport}
                        transition={{ delay: reduced ? 0 : 0.35 + i * 0.15, type: "spring", stiffness: 300, damping: 20 }}
                        className="mt-12 hidden shrink-0 font-[family-name:var(--font-display)] text-2xl text-brand-gold/40 sm:block md:text-3xl"
                        aria-hidden
                      >
                        ·
                      </motion.span>
                    )}
                    <BatchCircle
                      symbol={part.symbol}
                      title={part.title}
                      meaning={part.meaning}
                      index={i}
                    />
                  </div>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: reduced ? 1 : 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ delay: reduced ? 0 : 0.8, duration: 0.5 }}
              className="relative mt-8 text-center font-[family-name:var(--font-body)] text-xs tracking-wide text-brand-cream/45 md:mt-10"
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
          className="mb-14 rounded-sm border border-brand-cream/10 bg-brand-black/50 p-6 md:mb-16 md:p-10"
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
          <p className={`mb-3 text-center ${typeInfographicTitle}`}>The Flavor Profile</p>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-brand-cream/72 md:text-base md:leading-7">
            {infographic.flavorIntro}
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {tastingNotes.map((note, i) => (
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
                  className={`h-1 bg-gradient-to-r ${note.accent}`}
                  initial={{ scaleX: reduced ? 1 : 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewport}
                  transition={{ delay: reduced ? 0 : 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "left center" }}
                />
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
