/**
 * Novimid treatments explore data — category copy and media.
 * Public offerings: Semaglutide + Tirzepatide only (Weight Management).
 */

export type ExploreTone = "semaglutide" | "tirzepatide";

export type ExploreCategory = {
  id: ExploreTone;
  /** Maps to lower-page stacks / treatment ids */
  novimidId: "semaglutide" | "tirzepatide";
  tab: string;
  tone: ExploreTone;
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
  "Physician-directed care, medications from U.S. licensed compounding pharmacies, and only charged if treatment is prescribed — with flexibility to change or cancel anytime. Completing intake does not guarantee a prescription.";

export const exploreCategories: ExploreCategory[] = [
  {
    id: "semaglutide",
    novimidId: "semaglutide",
    tab: "Semaglutide",
    tone: "semaglutide",
    title: "Personalized Semaglutide care",
    titleMaxCh: 18,
    summary:
      "A weekly physician-directed Semaglutide program designed to support appetite regulation and weight management when clinically appropriate. Completing intake does not guarantee a prescription.",
    chip: "Weight Management",
    chipClass: "bg-[#dce8dd] text-[#2c3a35]",
    stock: "In Stock",
    footerSocialBold: "Licensed",
    footerSocialSuffix: " U.S. provider review",
    tabImage: "/images/icon-vial-a-v2.png",
    productBg: "/images/card-vial-semaglutide.png",
    products: [
      {
        name: "Semaglutide",
        desc: "Gradual, physician-guided progress.",
        thumb: "/images/icon-vial-a-v2.png",
        thumbBg: "#dce8dd",
      },
    ],
    includes: [...INCLUDES],
    guarantee: GUARANTEE,
    ctaTone: "semaglutide",
  },
  {
    id: "tirzepatide",
    novimidId: "tirzepatide",
    tab: "Tirzepatide",
    tone: "tirzepatide",
    title: "Personalized Tirzepatide care",
    titleMaxCh: 18,
    summary:
      "A weekly physician-directed Tirzepatide program designed to support appetite regulation and weight management when clinically appropriate. Completing intake does not guarantee a prescription.",
    chip: "Weight Management",
    chipClass: "bg-[#dce8dd] text-[#2c3a35]",
    stock: "In Stock",
    footerSocialBold: "Licensed",
    footerSocialSuffix: " U.S. provider review",
    tabImage: "/images/icon-vial-b-v2.png",
    productBg: "/images/card-vial-tirzepatide.png",
    products: [
      {
        name: "Tirzepatide",
        desc: "Physician-guided dual-pathway support.",
        thumb: "/images/icon-vial-b-v2.png",
        thumbBg: "#dce8dd",
      },
    ],
    includes: [...INCLUDES],
    guarantee: GUARANTEE,
    ctaTone: "tirzepatide",
  },
];
