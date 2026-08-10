import type { MetadataRoute } from "next";

const base = "https://novimid.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/how-it-works",
    "/treatments",
    "/about",
    "/providers",
    "/faq",
    "/start",
    "/privacy",
    "/terms",
    "/telehealth",
    "/compounding-disclosure",
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
