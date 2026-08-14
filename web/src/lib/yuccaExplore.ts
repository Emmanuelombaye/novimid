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
  "Physician-directed care, medications from U.S. licensed compounding pharmacies, and only charged if treatment is prescribed — with flexibility to change or cancel anytime.";

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
    chipClass: "bg-[#dce8dd] text-[#2c3a35]",
    stock: "In Stock",
    footerSocialBold: "Licensed",
    footerSocialSuffix: " U.S. provider review",
    tabImage: "/images/tab-metabolic.png",
    productBg: "/images/novimid-card-glp1.png",
    products: [
      {
        name: "GLP-1 (Semaglutide)",
        desc: "Gradual, physician-guided progress.",
        thumb: "/images/icon-vial-a-v2.png",
        thumbBg: "#dce8dd",
      },
      {
        name: "GLP-1 + GIP (Tirzepatide)",
        desc: "Dual-pathway metabolic support.",
        thumb: "/images/icon-vial-b-v2.png",
        thumbBg: "#dce8dd",
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
    tabImage: "/images/tab-peptides.png",
    productBg: "/images/novimid-card-peptide.png",
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
    chipClass: "bg-[#dce8dd] text-[#2c3a35]",
    stock: "In Stock",
    footerSocialBold: "Licensed",
    footerSocialSuffix: " U.S. provider review",
    tabImage: "/images/tab-hormones.png",
    productBg: "/images/novimid-card-trt.png",
    includes: [...INCLUDES],
    guarantee: GUARANTEE,
    ctaTone: "sermorelin",
  },
];
