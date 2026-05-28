import { MetadataRoute } from "next";

const baseUrl = "https://example.com";
const locales = ["pt", "en", "fr"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));
}
