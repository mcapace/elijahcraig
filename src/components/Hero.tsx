"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/content";
import { typeButtonPrimary, typeButtonSecondary } from "@/lib/typography";

function HeroBackground({
  desktopSrc,
  mobileSrc,
  alt,
  animate,
}: {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  animate: boolean;
}) {
  const imgClass =
    "pointer-events-none h-full w-full max-w-none select-none object-cover object-[center_38%]";

  const imgStyle: CSSProperties = { width: "100%", height: "100%", maxWidth: "none" };

  return (
    <>
      <div className="absolute inset-0 z-0 hidden overflow-hidden bg-brand-black md:block">
        {animate ? (
          <motion.img
            src={desktopSrc}
            alt={alt}
            className={imgClass}
            style={imgStyle}
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        ) : (
          <img src={desktopSrc} alt={alt} className={imgClass} style={imgStyle} />
        )}
      </div>
      <div className="absolute inset-0 z-0 overflow-hidden bg-brand-black md:hidden">
        <img src={mobileSrc} alt={alt} className={`${imgClass} object-[center_35%]`} style={imgStyle} />
      </div>
    </>
  );
}

export default function Hero() {
  const { hero, brand, publisher } = siteConfig;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="film-grain relative flex min-h-[92svh] flex-col items-center justify-end overflow-hidden pt-14 pb-16 md:justify-center"
    >
      <HeroBackground
        desktopSrc={hero.imageSrc}
        mobileSrc={hero.mobileImageSrc}
        alt={`${brand.name} ${hero.headline}`}
        animate={!reduceMotion}
      />

      {/* Strong scrim for readability */}
      <div className="absolute inset-0 z-[2] bg-brand-black/55" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/30" />

      <div className="relative z-10 w-full max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="sponsored-label mb-6"
        >
          Sponsored Content · {publisher.name}
        </motion.p>

        <motion.div
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-4 rounded-lg border border-brand-burgundy/30 bg-brand-black/75 px-5 py-4 backdrop-blur-sm"
        >
          <Image
            src={publisher.logo}
            alt={publisher.name}
            width={120}
            height={32}
            className="h-6 w-auto"
          />
          <div className="h-8 w-px bg-brand-cream/15" aria-hidden />
          <div className="text-left">
            <p className="text-[0.55rem] uppercase tracking-[0.25em] text-brand-gold/90">
              {hero.badge.rank} · {hero.badge.detail}
            </p>
            <p
              className="text-lg font-light text-brand-cream"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {hero.badge.title} {hero.badge.year}
            </p>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-3 text-4xl font-light tracking-wide text-brand-cream md:text-6xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-8 text-sm uppercase tracking-[0.14em] text-brand-cream/80 md:text-base"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col justify-center gap-3 sm:flex-row"
        >
          <a href={siteConfig.cta.buttonUrl} target="_blank" rel="noopener noreferrer" className={typeButtonPrimary}>
            Buy Now
          </a>
          <button
            type="button"
            onClick={() => document.getElementById("at-a-glance")?.scrollIntoView({ block: "start" })}
            className={typeButtonSecondary}
          >
            See the Rye
          </button>
        </motion.div>
      </div>
    </section>
  );
}
