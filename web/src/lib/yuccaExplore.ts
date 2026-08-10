/**
 * Novimid treatments explore data — Yucca layout structure, client category words.
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
  "Physician consultation",
  "Expedited shipping",
  "Dedicated clinical support",
  "Patient portal access",
] as const;

const GUARANTEE =
  "Physician-directed care, medications from U.S. licensed pharmacies, and only charged if treatment is prescribed — with flexibility to change or cancel anytime.";

export const yuccaExploreCategories: YuccaExploreCategory[] = [
  {
    id: "wl",
    novimidId: "metabolic",
    tab: "Metabolic",
    tone: "wl",
    title: "Personalized GLP-1 care",
    titleMaxCh: 16,
    summary:
      "A weekly physician-directed protocol designed to support appetite regulation and metabolic health. GLP-1 and dual-pathway options when clinically appropriate.",
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
        desc: "Gradual, physician-guided progress.",
        thumb: "/yucca/expt-wl-sema.jpg",
        thumbBg: "#c5d5b0",
      },
      {
        name: "GLP-1 + GIP (Tirzepatide)",
        desc: "Dual-pathway metabolic support.",
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
    tab: "Peptides",
    tone: "nad",
    title: "Peptide therapy",
    titleMaxCh: 14,
    summary:
      "Personalized peptide protocols to support recovery, cellular energy, and performance — compounded after physician review when appropriate.",
    chip: "503A",
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
    tab: "Hormones",
    tone: "sermorelin",
    title: "TRT",
    titleMaxCh: 8,
    summary:
      "Hormone optimization with labs, dosing, and follow-up built into an accountable plan. Eligibility and dosing are physician decisions.",
    chip: "Clinical oversight",
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
