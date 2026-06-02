import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";
import { getMetadataBaseUrl } from "@/lib/metadata-base";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getMetadataBaseUrl(),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [{ url: siteConfig.seo.ogImage }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0A0806" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-brand-black text-brand-cream antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-0 z-[10001] -translate-y-full rounded-b border border-t-0 border-brand-copper/50 bg-brand-black px-4 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-cream shadow-lg transition-transform focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
