/**
 * Site media registry — swap files later without touching layout components.
 */

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Tailwind object-position, e.g. object-[center_20%] */
  position?: string;
  /** next/image quality 1–100 */
  quality?: number;
  /** Responsive sizes attribute */
  sizes?: string;
};

const photoQ = 75;
const heroQ = 78;

export const media = {
  hero: {
    desktop: {
      src: "/images/hero-desktop.jpg",
      alt: "Adults representing physician-directed health optimization with novimid",
      width: 1400,
      height: 933,
      position: "object-[68%_center]",
      quality: heroQ,
      sizes: "(min-width: 1152px) 1152px, 100vw",
    } satisfies SiteImage,
    mobile: {
      src: "/images/hero-mobile.jpg",
      alt: "Adults representing physician-directed health optimization with novimid",
      width: 900,
      height: 1350,
      position: "object-[center_18%]",
      quality: heroQ,
      sizes: "100vw",
    } satisfies SiteImage,
  },

  lifestyle: {
    physician: {
      src: "/images/how-care-experience.jpg",
      alt: "Adult reviewing a personal care plan at home in soft morning light",
      width: 1280,
      height: 960,
      position: "object-cover object-center",
      quality: 84,
      sizes: "(max-width: 1024px) 92vw, 50vw",
    } satisfies SiteImage,
  },

  product: {
    glp1Hero: {
      src: "/images/product-glp1-v2.png",
      alt: "Semaglutide and tirzepatide injectable vials with pen",
      width: 1024,
      height: 1024,
      quality: 82,
      sizes: "(max-width: 1024px) 92vw, 480px",
    } satisfies SiteImage,
  },

  tabs: {
    metabolic: {
      src: "/images/tab-metabolic.png",
      alt: "",
      width: 1024,
      height: 1024,
      quality: 82,
      sizes: "220px",
    } satisfies SiteImage,
  },

  results: [
    {
      src: "/images/result-1.jpg",
      alt: "Adult representing physician-directed care",
      width: 900,
      height: 1200,
      quality: photoQ,
      sizes: "(max-width: 768px) 70vw, 280px",
    },
    {
      src: "/images/result-2.jpg",
      alt: "Adult representing metabolic care journey",
      width: 900,
      height: 1200,
      quality: photoQ,
      sizes: "(max-width: 768px) 70vw, 280px",
    },
    {
      src: "/images/result-3.jpg",
      alt: "Adult representing personalized protocol care",
      width: 900,
      height: 1200,
      quality: photoQ,
      sizes: "(max-width: 768px) 70vw, 280px",
    },
  ] as const satisfies readonly SiteImage[],

  why: [
    {
      src: "/images/why-1.jpg",
      alt: "Quality sourcing and compounding care",
      width: 900,
      height: 675,
      quality: photoQ,
      sizes: "(max-width: 768px) 92vw, 33vw",
    },
    {
      src: "/images/why-2.jpg",
      alt: "Physician medical review",
      width: 900,
      height: 675,
      quality: photoQ,
      sizes: "(max-width: 768px) 92vw, 33vw",
    },
    {
      src: "/images/why-3.jpg",
      alt: "Discreet home delivery fulfillment",
      width: 900,
      height: 675,
      quality: photoQ,
      sizes: "(max-width: 768px) 92vw, 33vw",
    },
  ] as const satisfies readonly SiteImage[],

  ctaPortrait: {
    src: "/images/cta-band-care.jpg",
    alt: "Adult in soft morning light on a calm coastal path",
    width: 1280,
    height: 720,
    quality: 86,
    sizes: "100vw",
  } satisfies SiteImage,

  closingCtaLifestyle: {
    src: "/images/cta-band-goals.jpg",
    alt: "Adult walking through sunlit trees toward personal health goals",
    width: 1280,
    height: 720,
    quality: 86,
    sizes: "100vw",
  } satisfies SiteImage,

  treatmentsCtaLifestyle: {
    src: "/images/cta-band-treatments.jpg",
    alt: "Adult walking a quiet sunlit path through soft coastal greenery",
    width: 1280,
    height: 720,
    quality: 86,
    sizes: "100vw",
  } satisfies SiteImage,

  about: {
    promiseBand: {
      src: "/images/about-band-promise.jpg",
      alt: "Adult looking toward coastal hills from a bright living space",
      width: 1280,
      height: 720,
      quality: 86,
      sizes: "100vw",
    } satisfies SiteImage,
    californiaBand: {
      src: "/images/about-band-california.jpg",
      alt: "Soft California coastal hills in morning light",
      width: 1280,
      height: 720,
      quality: 86,
      sizes: "100vw",
    } satisfies SiteImage,
    voiceBand: {
      src: "/images/about-band-voice.jpg",
      alt: "Adult journaling at a bright kitchen table in morning light",
      width: 1280,
      height: 720,
      quality: 86,
      sizes: "100vw",
    } satisfies SiteImage,
  },

  /** Social / SEO share image (landscape hero) */
  og: {
    src: "/images/hero-desktop.jpg",
    alt: "novimid — physician-directed health optimization",
    width: 1400,
    height: 933,
  } satisfies SiteImage,

  brand: {
    logoHoriz: "/brand/Novimid_HORIZ-GRADIENT.png",
    iconDark: "/brand/Novimid_ICON-DARK_512.png",
    iconLight: "/brand/Novimid_ICON-LT.png",
  },
} as const;

export type Media = typeof media;
