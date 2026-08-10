/**
 * Exact Try Yucca explore-treatments clone data (rebrand later).
 * Source: https://tryyucca.com/treatments/
 */

export type YuccaTone = "wl" | "nad" | "sermorelin";

export type YuccaExploreCategory = {
  id: YuccaTone;
  /** Maps to existing novimid lower-page sections */
  novimidId: "metabolic" | "peptides" | "hormones";
  tab: string;
  tone: YuccaTone;
  title: string;
  titleMaxCh: number;
  summary: string;
  chip: string;
  chipClass: string;
  stock: string;
  footerSocialBold: string;
  footerSocialSuffix: string;
  tabImage: string;
  /** CSS background product art (local mirror preferred) */
  productBg: string;
  productBgFallback?: string;
  priceBadge?: string;
  products?: {
    name: string;
    desc: string;
    thumb: string;
    thumbBg: string;
    tag?: string;
    tagClass?: string;
  }[];
  includes: string[];
  guarantee: string;
  ctaTone: string;
};

const INCLUDES = [
  "Free Medical Consultation",
  "Free Expedited Shipping",
  "24/7 Dedicated Support",
  "Access to Patient Portal",
] as const;

const GUARANTEE =
  "Physician-directed care, medications from U.S. licensed pharmacies, and only charged if treatment is prescribed — with flexibility to change or cancel anytime.";

export const yuccaExploreCategories: YuccaExploreCategory[] = [
  {
    id: "wl",
    novimidId: "metabolic",
    tab: "Weight Loss",
    tone: "wl",
    title: "Personalized GLP-1 Injections",
    titleMaxCh: 15,
    summary:
      "A weekly treatment designed to support appetite suppression, metabolic optimization, and long-term weight management through GLP-1 receptor activation.",
    chip: "Most Popular",
    chipClass: "bg-[#8bae8c] text-[#2c3a35]",
    stock: "In Stock",
    footerSocialBold: "Licensed",
    footerSocialSuffix: " U.S. provider review",
    tabImage: "/yucca/Weight-Loss-Image-from-TinyPNG.avif",
    productBg: "/yucca/Personalized-GLP-1-Injections.avif",
    priceBadge: "/yucca/lowest-price-ever-badge-6-mo.png",
    products: [
      {
        name: "GLP-1 (Semaglutide)",
        desc: "Gradual, effective results.",
        thumb: "/yucca/expt-wl-sema.jpg",
        thumbBg: "#c5d5b0",
      },
      {
        name: "GLP-1 + GIP (Tirzepatide)",
        desc: "Faster Results. Dual-action support.",
        thumb: "/yucca/expt-wl-tirz.jpg",
        thumbBg: "#f7d4a0",
      },
    ],
    includes: [...INCLUDES],
    guarantee: GUARANTEE,
    ctaTone: "wl",
  },
  {
    id: "nad",
    novimidId: "peptides",
    tab: "Longevity",
    tone: "nad",
    title: "NAD+ Injections",
    titleMaxCh: 10,
    summary:
      "A treatment designed to support cellular energy, focus, metabolism, and healthy aging through replenishment of NAD+ levels.",
    chip: "New",
    chipClass: "bg-[#dce8dd] text-[#2c3a35]",
    stock: "In Stock",
    footerSocialBold: "Licensed",
    footerSocialSuffix: " U.S. provider review",
    tabImage: "/yucca/Longevity--Image-.avif",
    productBg: "/yucca/Nad-Yucca-Image.avif",
    priceBadge: "/yucca/lowest-price-ever-badge-3-mo.png",
    includes: [...INCLUDES],
    guarantee: GUARANTEE,
    ctaTone: "nad",
  },
  {
    id: "sermorelin",
    novimidId: "hormones",
    tab: "Muscle Recovery",
    tone: "sermorelin",
    title: "Sermorelin Injections",
    titleMaxCh: 10,
    summary:
      "A daily peptide injection designed to support natural growth hormone production, energy, sleep quality, and recovery.",
    chip: "New",
    chipClass: "bg-[#ffe9c8] text-[#4a5a52]",
    stock: "In Stock",
    footerSocialBold: "Licensed",
    footerSocialSuffix: " U.S. provider review",
    tabImage: "/yucca/Muscle-Recovery-Image.avif",
    productBg: "/yucca/expt-sermorelin-vial.png",
    priceBadge: "/yucca/lowest-price-ever-badge-3-mo.png",
    includes: [...INCLUDES],
    guarantee: GUARANTEE,
    ctaTone: "sermorelin",
  },
];
