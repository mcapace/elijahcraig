"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeEyebrow, typeSectionTitle } from "@/lib/typography";

/*
 * Plays the JW Player media as a plain HTML5 video from JW Player's CDN. The
 * JW Player embed sent analytics pings to JW Player on page load, before any
 * consent and even with GPC on; the CDN file and poster carry no tracking.
 */
function resolveJwMediaId(): string | null {
  const { video } = siteConfig;

  if (video.mediaId?.trim()) {
    return video.mediaId.trim();
  }

  // Older config: an embed URL like https://cdn.jwplayer.com/players/{mediaId}-{playerId}.html
  const match = video.embedUrl?.trim().match(/\/players\/([A-Za-z0-9]{8})-/);
  return match ? match[1] : null;
}

export default function VideoSection() {
  const { video } = siteConfig;
  const anim = useScrollAnimationVariants();
  const mediaId = resolveJwMediaId();

  if (!video.enabled || !mediaId) return null;

  return (
    <Section id="video" fullBleed className="relative overflow-hidden py-10 md:py-20 lg:py-24">
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
        className="relative mx-auto max-w-[1200px] px-4 sm:px-6 md:px-12"
      >
        <motion.div variants={anim.fadeUp} className="mx-auto mb-8 text-center md:mb-10">
          <p className={`mb-4 ${typeEyebrow}`}>Whisky Advocate</p>
          <h2 className={`mb-5 ${typeSectionTitle}`}>{video.heading}</h2>
          <p className="mx-auto max-w-3xl px-1 text-base leading-relaxed text-brand-cream/75 sm:px-0 md:text-lg md:leading-8">
            {video.subheading[0]}
            <br />
            {video.subheading[1]}
          </p>
        </motion.div>

        <motion.div
          variants={anim.fadeUp}
          className="overflow-hidden rounded-sm border border-brand-cream/[0.08] bg-brand-black/70 shadow-[0_32px_120px_rgba(0,0,0,0.55)] ring-1 ring-brand-burgundy/15"
        >
          <div className="relative aspect-video w-full">
            <video
              src={`https://cdn.jwplayer.com/videos/${mediaId}.mp4`}
              poster={`https://cdn.jwplayer.com/v2/media/${mediaId}/poster.jpg?width=1280`}
              title={video.iframeTitle}
              className="absolute inset-0 h-full w-full bg-black object-contain"
              controls
              playsInline
              preload="none"
            />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
