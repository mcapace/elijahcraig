"use client";

import CoBrandLockup from "./CoBrandLockup";
import { siteConfig } from "@/lib/content";

/** Sponsored bar (40px) + nav (56px) = 96px total header stack. */
export const SPONSORED_BAR_HEIGHT = "h-10";
export const NAV_TOP = "top-10";
export const HEADER_PAD = "pt-24";
export const MOBILE_NAV_TOP = "top-24";

export default function SponsoredBar() {
  const { publisher } = siteConfig;

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-[101] ${SPONSORED_BAR_HEIGHT} border-b border-brand-burgundy/25 bg-brand-black/95 backdrop-blur-md`}
    >
      <div className="relative mx-auto flex h-full max-w-[1400px] items-center justify-center px-4 sm:px-6 lg:px-10">
        <span className="sponsored-label absolute left-4 sm:left-6 lg:left-10">
          Sponsored Content
        </span>

        <CoBrandLockup size="sm" priority />

        <span className="absolute right-4 hidden text-[0.55rem] uppercase tracking-[0.2em] text-brand-cream/40 md:inline sm:right-6 lg:right-10">
          {publisher.parent}
        </span>
      </div>
    </div>
  );
}
