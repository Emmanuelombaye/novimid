import type { Metadata } from "next";
import { HomeHero } from "@/components/HomeHero";
import { HomeSections } from "@/components/HomeSections";
import { brand } from "@/lib/content";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: { absolute: `${brand.displayName} — ${brand.positioning}` },
  description:
    "Clinician-guided telehealth weight-management programs. Semaglutide and Tirzepatide when clinically appropriate. Licensed U.S. pharmacy partners when prescribed. Completing intake does not guarantee a prescription.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${brand.displayName} — ${brand.positioning}`,
    description: brand.tagline,
    url: "/",
    images: [
      {
        url: media.og.src,
        width: media.og.width,
        height: media.og.height,
        alt: media.og.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.displayName} — ${brand.positioning}`,
    description: brand.tagline,
    images: [media.og.src],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: brand.displayName,
  description: brand.positioning,
  url: "https://novimid.com",
  image: `https://novimid.com${media.og.src}`,
  areaServed: "US",
  medicalSpecialty: "Telemedicine",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero />
      <HomeSections />
    </>
  );
}
