import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const locales = ["pt", "en", "fr"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));
}
