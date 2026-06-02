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
  sm: { ec: "h-5 w-auto sm:h-6", wa: "h-4 w-auto sm:h-5", gap: "gap-2.5", sep: "text-sm" },
  md: { ec: "h-6 w-auto sm:h-7", wa: "h-5 w-auto sm:h-6", gap: "gap-3", sep: "text-base" },
  lg: { ec: "h-8 w-auto md:h-9", wa: "h-6 w-auto md:h-7", gap: "gap-4", sep: "text-lg" },
};

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
      <Image
        src={ecLogo}
        alt={brand.name}
        width={200}
        height={40}
        priority={priority}
        className={`${s.ec} shrink-0 object-contain`}
      />
      <span
        className={`font-light leading-none text-brand-cream/35 ${s.sep}`}
        aria-hidden
      >
        ×
      </span>
      <Image
        src={waLogo}
        alt={publisher.name}
        width={160}
        height={40}
        priority={priority}
        className={`${s.wa} shrink-0 object-contain ${variant === "on-dark" ? "opacity-95" : ""}`}
      />
    </div>
  );
}
