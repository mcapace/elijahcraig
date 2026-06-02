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
  sm: { height: 24, maxWidth: 110, gap: "gap-3", sep: "text-sm" },
  md: { height: 28, maxWidth: 130, gap: "gap-3.5", sep: "text-base" },
  lg: { height: 36, maxWidth: 160, gap: "gap-4", sep: "text-lg" },
};

function LogoMark({
  src,
  alt,
  height,
  maxWidth,
  priority,
}: {
  src: string;
  alt: string;
  height: number;
  maxWidth: number;
  priority?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center justify-center"
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
      className={`flex items-center justify-center ${s.gap} ${className}`.trim()}
      aria-label={`${brand.name} and ${publisher.name}`}
    >
      <LogoMark
        src={ecLogo}
        alt={brand.name}
        height={s.height}
        maxWidth={s.maxWidth}
        priority={priority}
      />
      <span
        className={`font-light leading-none text-brand-cream/30 ${s.sep}`}
        aria-hidden
      >
        ×
      </span>
      <LogoMark
        src={waLogo}
        alt={publisher.name}
        height={s.height}
        maxWidth={s.maxWidth}
        priority={priority}
      />
    </div>
  );
}
