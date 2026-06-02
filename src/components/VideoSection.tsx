"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";

function VideoPlayer({
  vimeoId,
  title,
  iframeTitle,
  posterSrc,
}: {
  vimeoId: string;
  title: string;
  iframeTitle: string;
  posterSrc: string;
}) {
  const [playing, setPlaying] = useState(false);
  const reduceMotion = useReducedMotion();

  const iframeSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0&badge=0`;

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-brand-charcoal">
      {playing ? (
        <iframe
          src={iframeSrc}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          title={iframeTitle}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group relative block h-full w-full"
          aria-label={`Play ${title}`}
        >
          <Image
            src={posterSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className={
              reduceMotion
                ? "object-cover"
                : "object-cover transition-transform duration-700 group-hover:scale-105"
            }
          />
          <div className="absolute inset-0 bg-brand-black/40 transition-colors group-hover:bg-brand-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-cream/30 bg-brand-black/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-brand-burgundy/50 md:h-20 md:w-20">
              <svg
                className="ml-1 h-6 w-6 text-brand-cream transition-colors group-hover:text-brand-gold md:h-7 md:w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

export default function VideoSection() {
  const { video } = siteConfig;
  const anim = useScrollAnimationVariants();

  if (!video.enabled || !video.vimeoId) return null;

  return (
    <Section id="video" fullBleed className="py-24 md:py-36">
      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[900px] px-6 md:px-12"
      >
        <motion.div variants={anim.fadeUp} className="mb-12 text-center">
          <h2
            className="mb-4 text-3xl font-light tracking-wide text-brand-cream md:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {video.heading}
          </h2>
          <p className="text-sm tracking-wide text-brand-cream/75">{video.subheading}</p>
        </motion.div>

        <motion.div variants={anim.fadeUp}>
          <VideoPlayer
            vimeoId={video.vimeoId}
            title={video.heading}
            iframeTitle={video.iframeTitle}
            posterSrc={video.posterSrc}
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
