"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeEyebrow, typeSectionTitle } from "@/lib/typography";

function resolveJwEmbedSrc(): string | null {
  const { video } = siteConfig;

  if (video.embedUrl?.trim()) {
    return video.embedUrl.trim();
  }

  const playerId =
    video.playerId?.trim() || process.env.NEXT_PUBLIC_JW_PLAYER_ID?.trim() || "";

  if (video.mediaId && playerId) {
    return `https://cdn.jwplayer.com/players/${video.mediaId}-${playerId}.html`;
  }

  return null;
}

export default function VideoSection() {
  const { video } = siteConfig;
  const anim = useScrollAnimationVariants();
  const embedSrc = resolveJwEmbedSrc();

  if (!video.enabled || !embedSrc) return null;

  return (
    <Section id="video" fullBleed className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-black via-brand-charcoal/50 to-brand-black"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-burgundy/10 blur-[120px]"
        aria-hidden
      />

      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10"
      >
        <div className="mb-10 grid gap-8 lg:mb-14 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-end lg:gap-14 xl:grid-cols-[minmax(0,420px)_1fr]">
          <motion.div variants={anim.fadeUp} className="text-center lg:text-left">
            <p className={`mb-4 ${typeEyebrow}`}>Whisky Advocate</p>
            <h2 className={`mb-5 ${typeSectionTitle}`}>{video.heading}</h2>
            <p className="text-base leading-relaxed text-brand-cream/75 md:text-lg md:leading-8">
              {video.subheading}
            </p>
          </motion.div>

          <motion.div variants={anim.fadeUp} className="hidden lg:block">
            <div className="h-px w-full bg-gradient-to-r from-brand-burgundy/40 via-brand-gold/30 to-transparent" />
          </motion.div>
        </div>

        <motion.div
          variants={anim.fadeUp}
          className="overflow-hidden rounded-sm border border-brand-cream/[0.08] bg-brand-black/70 shadow-[0_32px_120px_rgba(0,0,0,0.55)] ring-1 ring-brand-burgundy/15"
        >
          <div className="relative aspect-video w-full">
            <iframe
              src={embedSrc}
              title={video.iframeTitle}
              className="absolute inset-0 h-full w-full border-0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
