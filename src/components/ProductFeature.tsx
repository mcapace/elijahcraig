"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeButtonPrimary, typeButtonSecondary, typeSectionTitle, typeStatValue, typeEyebrow } from "@/lib/typography";

export default function ProductFeature() {
  const { product } = siteConfig;
  const anim = useScrollAnimationVariants();

  return (
    <section
      id={product.id}
      className="relative overflow-hidden bg-gradient-to-b from-[#140E0A] via-[#1A1208] to-[#140E0A] py-24 md:py-36"
    >
      {/* Ambient case photography from client assets */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <Image
          src={product.ambientImageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center blur-sm"
          aria-hidden
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "url('/assets/textures/oak-pattern.svg')",
          backgroundSize: "400px",
        }}
      />

      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto grid max-w-[1200px] items-center gap-8 px-6 md:grid-cols-[1fr_1fr] md:gap-12 md:px-12 lg:gap-20"
      >
        <motion.div variants={anim.slideInLeft} className="relative">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-lg">
            <div className="absolute top-1/4 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-brand-burgundy/20 blur-[90px]" />
            <Image
              src={product.imageSrc}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="relative z-10 object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.6)]"
            />
          </div>
        </motion.div>

        <motion.div variants={anim.slideInRight}>
          <motion.p variants={anim.fadeUp} className={`mb-4 ${typeEyebrow}`}>
            {product.tagline}
          </motion.p>

          <motion.h2 variants={anim.fadeUp} className={`mb-2 ${typeSectionTitle}`}>
            {product.shortName}
          </motion.h2>

          <motion.p
            variants={anim.fadeUp}
            className="mb-6 text-sm font-medium uppercase tracking-[0.15em] text-brand-burgundy-light"
          >
            {product.batch}
          </motion.p>

          <motion.p
            variants={anim.fadeUp}
            className="mb-6 text-base leading-relaxed text-brand-cream/90 md:text-lg"
          >
            {product.description}
          </motion.p>

          <motion.p
            variants={anim.fadeUp}
            className="mb-8 text-xs uppercase tracking-[0.12em] text-brand-cream/55"
          >
            {product.mashBill}
          </motion.p>

          <motion.div
            variants={anim.fadeUp}
            className="mb-8 grid grid-cols-2 gap-px overflow-hidden border border-brand-burgundy/20 bg-brand-burgundy/20 sm:grid-cols-4"
          >
            {product.stats.map((stat) => (
              <div key={stat.label} className="bg-brand-black/60 px-4 py-5 text-center">
                <p className="mb-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-brand-cream/50">
                  {stat.label}
                </p>
                <p className={typeStatValue}>{stat.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={anim.fadeUp} className="mb-6">
            <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-cream/70">
              Body & Color
            </h3>
            <p className="text-sm leading-relaxed italic text-brand-cream/80">{product.body}</p>
          </motion.div>

          <motion.div variants={anim.fadeUp} className="mb-8 space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-brand-cream/70">
              Tasting Notes
            </h3>
            <div className="space-y-3">
              {(["nose", "palate", "finish"] as const).map((note) => (
                <div key={note} className="flex gap-4 border-b border-brand-cream/5 pb-3 last:border-0">
                  <span className="w-16 shrink-0 text-xs font-medium uppercase tracking-widest text-brand-burgundy-light/80">
                    {note === "palate" ? "taste" : note}
                  </span>
                  <span className="text-sm leading-relaxed text-brand-cream/80">
                    {product.tastingNotes[note]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p variants={anim.fadeUp} className="mb-8 text-xs tracking-wide text-brand-cream/55">
            {product.serving}
          </motion.p>

          <motion.blockquote
            variants={anim.fadeUp}
            className="mb-10 border-l-2 border-brand-burgundy/40 pl-5"
          >
            <p className="mb-1 text-sm italic leading-relaxed text-brand-cream/70">
              &ldquo;{product.quote.text}&rdquo;
            </p>
            <cite className="text-xs not-italic tracking-wide text-brand-cream/55">
              — {product.quote.source}
            </cite>
          </motion.blockquote>

          <motion.div variants={anim.fadeUp} className="flex flex-col gap-4 sm:flex-row">
            <a
              href={product.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={typeButtonPrimary}
            >
              {product.ctaText}
            </a>
            <a
              href={product.secondaryCtaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={typeButtonSecondary}
            >
              {product.secondaryCtaText}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-burgundy/20 to-transparent" />
    </section>
  );
}
