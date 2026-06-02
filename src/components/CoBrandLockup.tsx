"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/content";

type CoBrandLockupProps = {
  variant?: "on-dark" | "on-light";
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: { logoHeight: 22, gap: 10, cross: 9 },
  md: { logoHeight: 26, gap: 12, cross: 10 },
  lg: { logoHeight: 34, gap: 14, cross: 12 },
};

function CrossMark({ size }: { size: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center text-brand-cream/35"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 12 12"
        fill="none"
        className="block"
      >
        <path
          d="M2.25 2.25L9.75 9.75M9.75 2.25L2.25 9.75"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
      </svg>
    </span>
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
      className={`inline-grid shrink-0 items-center ${className}`.trim()}
      style={{
        gridTemplateColumns: "auto max-content auto",
        columnGap: s.gap,
      }}
      aria-label={`${brand.name} and ${publisher.name}`}
    >
      <Image
        src={ecLogo}
        alt={brand.name}
        width={209}
        height={42}
        priority={priority}
        className="block w-auto max-w-none object-contain object-right"
        style={{ height: s.logoHeight }}
      />
      <CrossMark size={s.cross} />
      <Image
        src={waLogo}
        alt={publisher.name}
        width={374}
        height={135}
        priority={priority}
        className="block w-auto max-w-none object-contain object-left"
        style={{ height: s.logoHeight }}
      />
    </div>
  );
}
