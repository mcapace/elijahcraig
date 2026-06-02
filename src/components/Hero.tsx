"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import CoBrandLockup from "./CoBrandLockup";
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
    "pointer-events-none h-full w-full max-w-none select-none object-cover object-[center_42%] md:object-[center_42%]";

  const imgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    maxWidth: "none",
  };

  return (
    <>
      <div className="absolute inset-0 z-0 hidden overflow-hidden bg-brand-black md:block">
        {animate ? (
          <motion.img
            src={desktopSrc}
            alt={alt}
            width={2800}
            height={2600}
            decoding="sync"
            fetchPriority="high"
            className={imgClass}
            style={imgStyle}
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        ) : (
          <img
            src={desktopSrc}
            alt={alt}
            width={2800}
            height={2600}
            decoding="sync"
            fetchPriority="high"
            className={imgClass}
            style={imgStyle}
          />
        )}
      </div>
      <div className="absolute inset-0 z-0 overflow-hidden bg-brand-black md:hidden">
        {animate ? (
          <motion.img
            src={mobileSrc}
            alt={alt}
            width={1600}
            height={1600}
            decoding="sync"
            fetchPriority="high"
            className={`${imgClass} object-[center_40%]`}
            style={imgStyle}
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        ) : (
          <img
            src={mobileSrc}
            alt={alt}
            width={1600}
            height={1600}
            decoding="sync"
            fetchPriority="high"
            className={`${imgClass} object-[center_40%]`}
            style={imgStyle}
          />
        )}
      </div>
    </>
  );
}

function WhiskyOfTheYearBadge() {
  const { badge } = siteConfig.hero;
  const { publisher } = siteConfig;

  return (
    <div className="relative mb-8 inline-flex flex-col items-center">
      <div className="absolute -inset-4 rounded-2xl bg-brand-burgundy/15 blur-3xl" aria-hidden />
      <div className="relative flex flex-col items-center gap-4 rounded-xl border border-brand-burgundy/30 bg-brand-black/70 px-8 py-6 backdrop-blur-md md:flex-row md:gap-6 md:px-10">
        <div className="flex flex-col items-center md:items-start">
          <span className="mb-1 text-[0.55rem] font-medium uppercase tracking-[0.35em] text-brand-gold/90">
            {badge.publication} · {badge.detail}
          </span>
          <div className="flex items-baseline gap-2">
            <span
              className="text-4xl font-light leading-none text-brand-gold md:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {badge.rank}
            </span>
            <span
              className="text-xl font-light tracking-wide text-brand-cream md:text-2xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {badge.title}
            </span>
          </div>
          <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-brand-cream/60">
            {badge.year}
          </span>
        </div>
        <div className="hidden h-12 w-px bg-brand-cream/15 md:block" aria-hidden />
        <Image
          src={publisher.logo}
          alt={publisher.name}
          width={140}
          height={36}
          className="h-7 w-auto opacity-95 md:h-8"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const { hero, brand } = siteConfig;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="film-grain vignette relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pt-14 pb-16"
    >
      <HeroBackground
        desktopSrc={hero.imageSrc}
        mobileSrc={hero.mobileImageSrc}
        alt={`${brand.name} ${hero.headline} — Case Tucker photography`}
        animate={!reduceMotion}
      />

      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-brand-black/80 via-brand-black/35 to-brand-black/90" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-brand-black/50 via-transparent to-brand-black/50" />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_90%_60%_at_50%_38%,rgba(122,48,63,0.12),transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: reduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 0.4, duration: 0.8 }}
          className="sponsored-label mb-6"
        >
          Sponsored Content
        </motion.span>

        <motion.div
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.6, duration: 0.9, ease: "easeOut" }}
          className="mb-6"
        >
          <CoBrandLockup size="lg" priority />
        </motion.div>

        <motion.div
          initial={{ opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: reduceMotion ? 0 : 0.9, duration: 0.8, ease: "easeOut" }}
        >
          <WhiskyOfTheYearBadge />
        </motion.div>

        <motion.h1
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 1.1, duration: 0.9, ease: "easeOut" }}
          className="mb-3 max-w-3xl text-4xl font-light tracking-wide text-brand-cream md:text-5xl lg:text-6xl"
          style={{
            fontFamily: "var(--font-playfair)",
            textShadow: "0 2px 28px rgba(0,0,0,0.85), 0 1px 3px rgba(0,0,0,0.95)",
          }}
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: reduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 1.3, duration: 0.8 }}
          className="max-w-xl text-sm uppercase tracking-[0.15em] text-brand-cream/90 md:text-base"
          style={{ textShadow: "0 1px 18px rgba(0,0,0,0.85)" }}
        >
          {hero.subheadline}
        </motion.p>

        <motion.p
          initial={{ opacity: reduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 1.4, duration: 0.8 }}
          className="mt-3 text-xs tracking-wide text-brand-cream/55"
        >
          {brand.tagline} · Est. 1789
        </motion.p>

        <motion.div
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 1.6, duration: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href={siteConfig.cta.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={typeButtonPrimary}
          >
            Buy Now
          </a>
          <button
            type="button"
            onClick={() => {
              document.getElementById("barrel-proof-rye")?.scrollIntoView({ block: "start" });
            }}
            className={typeButtonSecondary}
          >
            Discover More
          </button>
        </motion.div>

        <motion.div
          initial={{ width: reduceMotion ? 80 : 0 }}
          animate={{ width: 80 }}
          transition={{ delay: reduceMotion ? 0 : 1.9, duration: 1, ease: "easeInOut" }}
          className="mt-10 h-px bg-brand-burgundy/50"
        />
      </div>
    </section>
  );
}
