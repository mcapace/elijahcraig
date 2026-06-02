"use client";

/** Sponsored bar (40px + safe area) + nav (56px) = header stack. */
export const SPONSORED_BAR_HEIGHT =
  "min-h-10 pt-[env(safe-area-inset-top,0px)] h-[calc(2.5rem+env(safe-area-inset-top,0px))]";
export const NAV_TOP = "top-[calc(2.5rem+env(safe-area-inset-top,0px))]";
export const HEADER_PAD = "pt-[calc(6rem+env(safe-area-inset-top,0px))]";
export const MOBILE_NAV_TOP = "top-[calc(6rem+env(safe-area-inset-top,0px))]";

export default function SponsoredBar() {
  return (
    <div
      className={`fixed top-0 right-0 left-0 z-[101] ${SPONSORED_BAR_HEIGHT} border-b border-brand-burgundy/25 bg-brand-black/95 backdrop-blur-md`}
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-center px-4 sm:px-6 lg:px-10">
        <p className="text-center text-[0.58rem] leading-snug tracking-wide text-brand-cream/50 sm:text-[0.65rem] sm:whitespace-nowrap">
          <span className="sponsored-label">Sponsored content</span>
          <span className="mx-1.5 text-brand-cream/25 sm:mx-2">·</span>
          <span>Produced in partnership with Elijah Craig and Whisky Advocate</span>
        </p>
      </div>
    </div>
  );
}
