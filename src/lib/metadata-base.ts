/**
 * Resolves absolute URLs for Open Graph / Twitter images in metadata.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://your-domain.vercel.app).
 */
export function getMetadataBaseUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    try {
      return new URL(explicit.endsWith("/") ? explicit.slice(0, -1) : explicit);
    } catch {
      /* fall through */
    }
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}
