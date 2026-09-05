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
    "/policies",
    "/policies/consent-to-telehealth",
    "/policies/hipaa-notice",
    "/policies/terms-of-use",
    "/policies/provider-network",
    "/policies/fda-and-medical-disclaimer",
    "/policies/privacy-policy",
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
