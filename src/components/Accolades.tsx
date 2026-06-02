"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig, type Accolade } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeEyebrow } from "@/lib/typography";

function AccoladeCard({ accolade }: { accolade: Accolade & { featured?: boolean } }) {
  const featured = "featured" in accolade && accolade.featured;

  return (
    <div
      className={`group relative p-8 text-center transition-all duration-500 motion-reduce:transition-none ${
        featured
          ? "border border-brand-burgundy/40 bg-gradient-to-b from-brand-burgundy/15 to-brand-black/60 md:col-span-2 lg:col-span-1"
          : "border border-brand-burgundy/10 bg-brand-black/50 hover:border-brand-burgundy/30 hover:bg-brand-charcoal/30"
      }`}
    >
      <div
        className={`absolute top-0 left-1/2 h-[2px] -translate-x-1/2 bg-brand-gold transition-all duration-500 ${
          featured ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
      <p
        className={`mb-2 font-light tracking-wide text-brand-gold ${
          featured ? "text-5xl md:text-6xl" : "text-2xl md:text-3xl"
        }`}
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {accolade.quote}
      </p>
      <p className="mb-3 text-sm font-medium tracking-wide text-brand-cream">{accolade.source}</p>
      <p className="mb-1 text-xs text-brand-cream/70">{accolade.detail}</p>
      <p className="text-[0.65rem] uppercase tracking-[0.15em] text-brand-burgundy-light/80">
        {accolade.product}
      </p>
    </div>
  );
}

export default function Accolades() {
  const { accolades } = siteConfig;
  const anim = useScrollAnimationVariants();

  return (
    <Section
      id="accolades"
      fullBleed
      className="border-y border-brand-burgundy/15 bg-gradient-to-b from-brand-charcoal/60 via-brand-charcoal to-brand-charcoal/60 py-24 md:py-32"
    >
      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[1200px] px-6 md:px-12"
      >
        <motion.h2 variants={anim.fadeUp} className={`mb-16 text-center ${typeEyebrow}`}>
          Recognition & Acclaim
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accolades.map((accolade, i) => (
            <motion.div key={i} variants={anim.fadeUp}>
              <AccoladeCard accolade={accolade} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
