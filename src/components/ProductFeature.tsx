"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeButtonPrimary, typeButtonSecondary, typeSectionTitle, typeEyebrow } from "@/lib/typography";

export default function ProductFeature() {
  const { product } = siteConfig;
  const anim = useScrollAnimationVariants();
  const reduced = useReducedMotion();

  return (
    <section id={product.id} className="bg-brand-black py-20 md:py-28">
      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-[1100px] items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12"
      >
        <motion.div variants={anim.slideInLeft} className="relative mx-auto w-full max-w-sm">
          <motion.div
            className="absolute inset-0 rounded-full bg-brand-burgundy/10 blur-3xl"
            animate={reduced ? undefined : { opacity: [0.4, 0.65, 0.4], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <motion.div
            animate={reduced ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-center py-4"
          >
            <div className="absolute h-48 w-48 rounded-full bg-brand-burgundy/15 blur-3xl md:h-64 md:w-64" aria-hidden />
            <Image
              src={product.imageSrc}
              alt={product.name}
              width={800}
              height={800}
              className="relative z-10 h-auto w-full max-w-[260px] object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)] md:max-w-[320px]"
            />
          </motion.div>
        </motion.div>

        <motion.div variants={anim.slideInRight}>
          <p className={`mb-3 ${typeEyebrow}`}>{product.batch}</p>
          <h2 className={`mb-4 ${typeSectionTitle}`}>{product.shortName}</h2>
          <p className="mb-6 text-base leading-relaxed text-brand-cream/80 md:text-lg md:leading-8">
            {product.description}
          </p>
          <p className="mb-8 text-xs uppercase tracking-[0.12em] text-brand-cream/50">{product.serving}</p>

          <blockquote className="mb-8 border-l-2 border-brand-burgundy/40 pl-5">
            <p className="text-sm italic leading-relaxed text-brand-cream/70">
              &ldquo;{product.quote.text}&rdquo;
            </p>
            <cite className="mt-2 block text-xs not-italic text-brand-cream/50">
              — {product.quote.source}
            </cite>
          </blockquote>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={product.ctaUrl} target="_blank" rel="noopener noreferrer" className={typeButtonPrimary}>
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
