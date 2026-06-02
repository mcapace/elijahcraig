"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CoBrandLockup from "./CoBrandLockup";
import SponsoredBar, { MOBILE_NAV_TOP, NAV_TOP } from "./SponsoredBar";
import { siteConfig } from "@/lib/content";
import { typeButtonPrimary } from "@/lib/typography";

const NAV_LINKS = [
  { id: "brand-story", label: "Story" },
  { id: "at-a-glance", label: "At a Glance" },
  { id: "barrel-proof-rye", label: "The Rye" },
  { id: "heritage", label: "Legacy" },
  { id: "accolades", label: "Awards" },
] as const;

export default function StickyNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ block: "start" });
  };

  return (
    <>
      <SponsoredBar />

      <header
        className={`fixed ${NAV_TOP} right-0 left-0 z-[100] border-b border-white/[0.06] bg-brand-black/95 shadow-[0_1px_0_rgba(122,48,63,0.12)] backdrop-blur-xl`}
      >
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="flex shrink-0 items-center rounded-sm outline-none ring-brand-burgundy/40 focus-visible:ring-2"
            aria-label={`${siteConfig.brand.name} — home`}
          >
            <CoBrandLockup size="sm" />
          </button>

          <nav className="hidden items-center lg:flex" aria-label="Page sections">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="rounded-sm px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-brand-cream/70 transition-colors hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy/50 xl:px-3.5"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={siteConfig.cta.buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${typeButtonPrimary} hidden !min-h-0 !px-4 !py-2 text-[0.6rem] sm:inline-flex`}
            >
              Buy Now
            </a>
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-brand-cream transition-colors hover:border-brand-burgundy/40 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy/50 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className={`fixed ${MOBILE_NAV_TOP} right-0 bottom-0 left-0 z-[99] bg-black/70 backdrop-blur-sm lg:hidden`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              id="mobile-nav"
              className={`fixed ${MOBILE_NAV_TOP} left-0 right-0 z-[100] max-h-[min(70vh,520px)] overflow-y-auto border-b border-white/10 bg-brand-black/98 px-4 py-4 shadow-xl backdrop-blur-xl lg:hidden`}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-0.5">
                {NAV_LINKS.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(id)}
                      className="w-full rounded-md px-3 py-3 text-left text-xs font-medium uppercase tracking-[0.2em] text-brand-cream/85 transition-colors hover:bg-white/[0.05] hover:text-brand-gold"
                    >
                      {label}
                    </button>
                  </li>
                ))}
                <li className="mt-2 border-t border-white/10 pt-2">
                  <a
                    href={siteConfig.cta.buttonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-3 text-left text-xs font-medium uppercase tracking-[0.2em] text-brand-gold"
                  >
                    Buy Now
                  </a>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
