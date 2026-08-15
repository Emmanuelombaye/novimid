/**
 * Site media registry — swap files later without touching layout components.
 *
 * Replace flow:
 * 1. Drop client files into `public/images/` (same filenames), OR change `src` below
 * 2. Update width/height if aspect ratio changes
 * 3. Tune `position` for face/product focal points per breakpoint
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
    metabolicPerson: {
      src: "/images/pt-metabolic-cutout.png",
      alt: "Adult representing metabolic GLP-1 care",
      width: 476,
      height: 1527,
      position: "object-contain object-bottom",
      quality: 82,
      sizes: "(max-width: 1024px) 70vw, 420px",
    } satisfies SiteImage,
    peptidePerson: {
      src: "/images/pt-peptides-cutout.png",
      alt: "Adult representing peptide therapy protocols",
      width: 639,
      height: 1513,
      position: "object-contain object-bottom",
      quality: 82,
      sizes: "(max-width: 1024px) 70vw, 420px",
    } satisfies SiteImage,
    trtPerson: {
      src: "/images/pt-hormones-cutout.png",
      alt: "Adult representing hormone TRT care",
      width: 712,
      height: 1504,
      position: "object-contain object-bottom",
      quality: 82,
      sizes: "(max-width: 1024px) 70vw, 420px",
    } satisfies SiteImage,
    woman: {
      src: "/images/care-woman-cutout.png",
      alt: "Adult representing personalized care",
      width: 749,
      height: 872,
      position: "object-contain object-bottom",
      quality: 78,
      sizes: "(max-width: 768px) 92vw, 33vw",
    } satisfies SiteImage,
    man: {
      src: "/images/care-man-cutout.png",
      alt: "Adult representing metabolic and hormone care",
      width: 448,
      height: 892,
      position: "object-contain object-bottom",
      quality: 78,
      sizes: "(max-width: 768px) 92vw, 33vw",
    } satisfies SiteImage,
    physician: {
      src: "/images/physician-1.png",
      alt: "Physician in a calm telehealth consult setting",
      width: 1000,
      height: 750,
      position: "object-cover object-center",
      quality: 80,
      sizes: "(max-width: 1024px) 92vw, 50vw",
    } satisfies SiteImage,
    physician1: {
      src: "/images/physician-1.png",
      alt: "Board-certified female physician in telehealth consult setting",
      width: 1000,
      height: 750,
      position: "object-cover object-center",
      quality: 80,
      sizes: "(max-width: 1024px) 92vw, 50vw",
    } satisfies SiteImage,
    physician2: {
      src: "/images/physician-2.png",
      alt: "Medical review team physician reviewing clinical protocols on tablet",
      width: 1000,
      height: 750,
      position: "object-cover object-center",
      quality: 80,
      sizes: "(max-width: 1024px) 92vw, 50vw",
    } satisfies SiteImage,
  },

  tools: {
    peptides: {
      src: "/images/care-woman.jpg",
      alt: "Adult representing personalized peptide care",
      width: 900,
      height: 900,
      position: "object-[center_14%]",
      quality: photoQ,
      sizes: "(max-width: 768px) 92vw, (max-width: 1152px) 33vw, 360px",
    } satisfies SiteImage,
    glp1: {
      src: "/images/care-man.jpg",
      alt: "Adult representing physician-directed metabolic care",
      width: 900,
      height: 900,
      position: "object-[center_26%]",
      quality: photoQ,
      sizes: "(max-width: 768px) 92vw, (max-width: 1152px) 33vw, 360px",
    } satisfies SiteImage,
    trt: {
      src: "/images/tool-trt.jpg",
      alt: "Hormone therapy pens and vial on a midnight forest backdrop",
      width: 900,
      height: 900,
      position: "object-center",
      quality: photoQ,
      sizes: "(max-width: 768px) 92vw, (max-width: 1152px) 33vw, 360px",
    } satisfies SiteImage,
  },

  product: {
    capsule: {
      src: "/images/product-capsule.jpg",
      alt: "Capsule therapy product photography",
      width: 900,
      height: 900,
      quality: photoQ,
      sizes: "(max-width: 768px) 82vw, 50vw",
    } satisfies SiteImage,
    oral: {
      src: "/images/product-oral.jpg",
      alt: "Oral therapy product photography",
      width: 900,
      height: 900,
      quality: photoQ,
      sizes: "(max-width: 768px) 82vw, 50vw",
    } satisfies SiteImage,
    glp1Hero: {
      src: "/images/product-glp1-v2.png",
      alt: "Personalized GLP-1 protocol vials",
      width: 1024,
      height: 1024,
      quality: 82,
      sizes: "(max-width: 1024px) 92vw, 480px",
    } satisfies SiteImage,
    peptideHero: {
      src: "/images/product-peptide-v2.png",
      alt: "Personalized peptide therapy vials",
      width: 1024,
      height: 1024,
      quality: 82,
      sizes: "(max-width: 1024px) 92vw, 480px",
    } satisfies SiteImage,
    trtHero: {
      src: "/images/product-trt-v2.png",
      alt: "Personalized hormone therapy pens and vial",
      width: 1024,
      height: 1024,
      quality: 82,
      sizes: "(max-width: 1024px) 92vw, 480px",
    } satisfies SiteImage,
  },

  tabs: {
    metabolic: {
      src: "/images/tab-metabolic.jpg",
      alt: "",
      width: 1376,
      height: 768,
      quality: 72,
      sizes: "220px",
    } satisfies SiteImage,
    peptides: {
      src: "/images/tab-peptides.jpg",
      alt: "",
      width: 1376,
      height: 768,
      quality: 72,
      sizes: "220px",
    } satisfies SiteImage,
    hormones: {
      src: "/images/tab-hormones.jpg",
      alt: "",
      width: 1376,
      height: 768,
      quality: 72,
      sizes: "220px",
    } satisfies SiteImage,
  },

  icons: {
    vialA: {
      src: "/images/icon-vial-a-v2.png",
      alt: "",
      width: 256,
      height: 256,
      quality: 80,
      sizes: "56px",
    } satisfies SiteImage,
    vialB: {
      src: "/images/icon-vial-b-v2.png",
      alt: "",
      width: 256,
      height: 256,
      quality: 80,
      sizes: "56px",
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

  timeline: [
    {
      src: "/images/timeline-1.png",
      alt: "Beginning a physician-directed protocol at home",
      width: 1100,
      height: 618,
      quality: photoQ,
      sizes: "(max-width: 768px) 92vw, 33vw",
    },
    {
      src: "/images/timeline-2.png",
      alt: "Settling into a personalized care rhythm",
      width: 1100,
      height: 618,
      quality: photoQ,
      sizes: "(max-width: 768px) 92vw, 33vw",
    },
    {
      src: "/images/timeline-3.png",
      alt: "Ongoing physician-guided optimization",
      width: 1100,
      height: 618,
      quality: photoQ,
      sizes: "(max-width: 768px) 92vw, 33vw",
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
    src: "/images/cta-banner.png",
    alt: "Adults representing personalized novimid health optimization and care",
    width: 1400,
    height: 933,
    quality: photoQ,
    sizes: "(max-width: 1024px) 100vw, 50vw",
  } satisfies SiteImage,

  closingCtaLifestyle: {
    src: "/images/closing-cta-lifestyle.png",
    alt: "Healthy athletic couple in modern sunlit living space representing novimid care",
    width: 1400,
    height: 933,
    quality: photoQ,
    sizes: "(max-width: 1024px) 100vw, 50vw",
  } satisfies SiteImage,

  about: {
    california: {
      src: "/images/about-california.jpg",
      alt: "Soft California coastal hills in morning light",
      width: 1200,
      height: 800,
      position: "object-center",
      quality: photoQ,
      sizes: "(max-width: 1024px) 100vw, 50vw",
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
