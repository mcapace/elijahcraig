"use client";

import type { ReactNode } from "react";
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

function VideoFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-sm border border-brand-cream/[0.07] bg-brand-black/50 shadow-[0_24px_80px_rgba(0,0,0,0.45)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function VideoSection() {
  const { video } = siteConfig;
  const anim = useScrollAnimationVariants();
  const embedSrc = resolveJwEmbedSrc();
  const showFeature = video.enabled && !!embedSrc;
  const showSocial = video.social.enabled && !!video.social.src;

  if (!showFeature && !showSocial) return null;

  return (
    <Section
      id="video"
      fullBleed
      className="border-y border-brand-burgundy/10 bg-brand-charcoal/25 py-20 md:py-28"
    >
      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-[1100px] px-6 md:px-12"
      >
        <motion.div variants={anim.fadeUp} className="mb-10 text-center md:mb-12">
          <p className={`mb-3 ${typeEyebrow}`}>Whisky Advocate</p>
          <h2 className={`mb-4 ${typeSectionTitle}`}>{video.heading}</h2>
          {showFeature && (
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-brand-cream/75 md:text-lg">
              {video.subheading}
            </p>
          )}
        </motion.div>

        <div
          className={`grid gap-10 ${
            showFeature && showSocial
              ? "lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start lg:gap-12"
              : "mx-auto max-w-[960px]"
          }`}
        >
          {showFeature && (
            <motion.div variants={anim.fadeUp}>
              <VideoFrame>
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
              </VideoFrame>
            </motion.div>
          )}

          {showSocial && (
            <motion.div
              variants={anim.fadeUp}
              className={showFeature ? "mx-auto w-full max-w-[280px] lg:mx-0" : "mx-auto w-full max-w-[280px]"}
            >
              <div className="mb-4 text-center lg:text-left">
                <p className="mb-2 text-[0.65rem] uppercase tracking-[0.24em] text-brand-gold">
                  {video.social.eyebrow}
                </p>
                <p
                  className="text-lg font-light leading-snug text-brand-cream md:text-xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {video.social.heading}
                </p>
              </div>
              <VideoFrame>
                <div className="relative aspect-[9/16] w-full bg-brand-black">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.social.posterSrc}
                    aria-label={video.social.heading}
                  >
                    <source src={video.social.src} type="video/mp4" />
                  </video>
                </div>
              </VideoFrame>
            </motion.div>
          )}
        </div>
      </motion.div>
    </Section>
  );
}
