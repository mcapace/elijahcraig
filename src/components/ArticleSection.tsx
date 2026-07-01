"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig, type ArticleBlock } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";
import { typeEyebrow, typeSectionTitle } from "@/lib/typography";

function ArticleBlockView({ block, index }: { block: ArticleBlock; index: number }) {
  if (block.type === "divider") {
    return (
      <div
        className="my-10 h-px bg-gradient-to-r from-transparent via-brand-burgundy/35 to-transparent md:my-12"
        aria-hidden
      />
    );
  }

  if (block.type === "pullquote") {
    return (
      <motion.aside
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: index * 0.04, duration: 0.55 }}
        className="my-10 border-y border-brand-burgundy/25 bg-brand-black/40 px-6 py-8 md:my-12 md:px-10 md:py-10"
      >
        <p
          className="mb-4 text-xl font-medium text-brand-cream md:text-2xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {block.question}
        </p>
        <blockquote className="text-base leading-relaxed text-brand-cream/85 md:text-lg md:leading-8">
          &ldquo;{block.quote}&rdquo;
        </blockquote>
        <cite className="mt-4 block text-xs not-italic uppercase tracking-[0.14em] text-brand-cream/50">
          — {block.attribution}
        </cite>
      </motion.aside>
    );
  }

  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.04, duration: 0.55 }}
      className="mb-6 text-pretty text-base leading-relaxed text-brand-cream/82 last:mb-0 md:text-[1.0625rem] md:leading-8"
    >
      {block.text}
    </motion.p>
  );
}

export default function ArticleSection() {
  const { article } = siteConfig;
  const anim = useScrollAnimationVariants();

  return (
    <Section
      id="article"
      fullBleed
      className="border-y border-brand-burgundy/10 bg-brand-charcoal/20 py-16 md:py-24"
    >
      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-[720px] px-4 sm:px-6 md:px-12"
      >
        <motion.header variants={anim.fadeUp} className="mb-10 text-center md:mb-12">
          <p className={`mb-4 ${typeEyebrow}`}>{article.eyebrow}</p>
          <h2 className={`mb-5 ${typeSectionTitle}`}>{article.title}</h2>
          <p
            className="mx-auto max-w-[640px] text-lg leading-relaxed text-brand-cream/88 md:text-xl md:leading-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {article.deck}
          </p>
        </motion.header>

        <motion.div variants={anim.fadeUp}>
          {article.blocks.map((block, index) => (
            <ArticleBlockView key={index} block={block} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
