/**
 * Canonical site URL for SEO (metadata, sitemap, robots).
 * Set NEXT_PUBLIC_SITE_URL on Vercel when using a custom domain.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "https://diogo-jose-luis-developer.vercel.app";
}
