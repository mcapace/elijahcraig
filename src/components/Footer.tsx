"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";
import CoBrandLockup from "./CoBrandLockup";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeButtonPrimary, typeButtonSecondary, typeSectionTitle } from "@/lib/typography";

export default function Footer() {
  const { cta, brand, publisher } = siteConfig;
  const anim = useScrollAnimationVariants();

  return (
    <footer className="relative">
      <Section
        id="cta"
        fullBleed
        className="bg-gradient-to-b from-brand-black via-brand-charcoal/40 to-brand-black py-28 md:py-40"
      >
        <motion.div
          variants={anim.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl px-6 text-center md:px-12"
        >
          <motion.div variants={anim.fadeUp} className="mb-10 flex justify-center">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={280}
              height={160}
              className="h-auto w-44 md:w-56"
            />
          </motion.div>

          <motion.h2 variants={anim.fadeUp} className={`mb-6 ${typeSectionTitle}`}>
            {cta.heading}
          </motion.h2>

          <motion.p
            variants={anim.fadeUp}
            className="mb-10 text-base leading-relaxed text-brand-cream/85 md:text-lg"
          >
            {cta.body}
          </motion.p>

          <motion.div
            variants={anim.fadeUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={cta.buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={typeButtonPrimary}
            >
              {cta.buttonText}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <a
              href={cta.secondaryButtonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={typeButtonSecondary}
            >
              {cta.secondaryButtonText}
            </a>
          </motion.div>
        </motion.div>
      </Section>

      <div className="border-t border-brand-burgundy/15 bg-brand-charcoal/50">
        <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-12">
          <div className="mb-8 flex flex-col items-center gap-6">
            <CoBrandLockup size="md" />
            <p className="text-xs tracking-wide text-brand-cream/55">
              A publication of {publisher.parent}
            </p>
          </div>

          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-brand-cream/10 to-transparent" />

          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex flex-col gap-1">
              <span className="sponsored-label">Sponsored Content</span>
              <p className="max-w-xl text-[0.6rem] leading-relaxed tracking-wide text-brand-cream/50">
                This content was produced in collaboration with {brand.name} and does not reflect
                the editorial opinion of {publisher.name}.
              </p>
            </div>
            <p className="shrink-0 text-[0.6rem] tracking-wide text-brand-cream/50">
              &copy; {new Date().getFullYear()} {publisher.parent}. All rights reserved.
              <br />
              Please sip responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
