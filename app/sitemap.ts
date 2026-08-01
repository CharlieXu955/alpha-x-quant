import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alphaxquant.com";
  return ["", "/research", "/about", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path ? ("monthly" as const) : ("weekly" as const),
    priority: path ? 0.8 : 1,
  }));
}
