"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/content";

type CoBrandLockupProps = {
  variant?: "on-dark" | "on-light";
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
};

/** Matched logo heights so EC and WA read at equal visual weight. */
const sizes = {
  sm: { height: 24, maxWidth: 110, gap: "gap-2.5", sepWidth: 18, sepSize: "text-[0.85rem]" },
  md: { height: 28, maxWidth: 130, gap: "gap-3", sepWidth: 20, sepSize: "text-base" },
  lg: { height: 36, maxWidth: 160, gap: "gap-3.5", sepWidth: 24, sepSize: "text-lg" },
};

function LogoMark({
  src,
  alt,
  height,
  maxWidth,
  priority,
  align,
}: {
  src: string;
  alt: string;
  height: number;
  maxWidth: number;
  priority?: boolean;
  align: "start" | "end";
}) {
  return (
    <div
      className={`flex shrink-0 items-center ${align === "end" ? "justify-end" : "justify-start"}`}
      style={{ height, width: maxWidth }}
    >
      <Image
        src={src}
        alt={alt}
        width={maxWidth}
        height={height}
        priority={priority}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}

export default function CoBrandLockup({
  variant = "on-dark",
  size = "md",
  className = "",
  priority,
}: CoBrandLockupProps) {
  const { brand, publisher } = siteConfig;
  const s = sizes[size];
  const ecLogo = variant === "on-dark" ? brand.logo : brand.logoColor;
  const waLogo = variant === "on-dark" ? publisher.logo : publisher.logoColor;

  return (
    <div
      className={`inline-flex items-center ${s.gap} ${className}`.trim()}
      aria-label={`${brand.name} and ${publisher.name}`}
    >
      <LogoMark
        src={ecLogo}
        alt={brand.name}
        height={s.height}
        maxWidth={s.maxWidth}
        priority={priority}
        align="end"
      />
      <div
        className="flex shrink-0 items-center justify-center text-brand-cream/30"
        style={{ height: s.height, width: s.sepWidth }}
        aria-hidden
      >
        <span className={`block leading-none ${s.sepSize}`}>×</span>
      </div>
      <LogoMark
        src={waLogo}
        alt={publisher.name}
        height={s.height}
        maxWidth={s.maxWidth}
        priority={priority}
        align="start"
      />
    </div>
  );
}
