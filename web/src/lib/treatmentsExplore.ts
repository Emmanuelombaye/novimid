/**
 * Novimid treatments explore — Efexia-style catalog copy (LegitScript-cautious).
 * Public offerings: Semaglutide + Tirzepatide only (Weight Management).
 */

export type ExploreTone = "semaglutide" | "tirzepatide";

export type ExploreCategory = {
  id: ExploreTone;
  novimidId: "semaglutide" | "tirzepatide";
  tab: string;
  tone: ExploreTone;
  title: string;
  titleMaxCh: number;
  summary: string;
  chip: string;
  chipClass: string;
  /** Status/form badge — not inventory */
  stock: string;
  footerSocialBold: string;
  footerSocialSuffix: string;
  tabImage: string;
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
  /** Fineprint / important note (not a “guarantee”) */
  note: string;
  compounded: string;
  illustrative: string;
  ctaLabel: string;
  ctaTone: string;
};

const SHARED_NOTE =
  "Completing intake does not guarantee a prescription. Refund terms apply if treatment is not prescribed, as disclosed at checkout.";

const ILLUSTRATIVE =
  "Product imagery is illustrative; labels, lots, and concentrations shown are not real.";

export const exploreCategories: ExploreCategory[] = [
  {
    id: "semaglutide",
    novimidId: "semaglutide",
    tab: "Semaglutide",
    tone: "semaglutide",
    title: "Semaglutide Program",
    titleMaxCh: 18,
    summary:
      "A clinician-guided weight-management program using semaglutide, discussed only after clinical eligibility review. Treatment is never guaranteed by intake alone.",
    chip: "Weight Management",
    chipClass: "bg-[#dce8dd] text-[#2c3a35]",
    stock: "Rx Only",
    footerSocialBold: "Licensed",
    footerSocialSuffix: " U.S. provider review",
    tabImage: "/images/icon-vial-a-v2.png",
    productBg: "/images/card-vial-semaglutide.png",
    products: [
      {
        name: "Semaglutide",
        desc: "Clinician-guided program · if prescribed",
        thumb: "/images/icon-vial-a-v2.png",
        thumbBg: "#dce8dd",
      },
    ],
    includes: [
      "Clinical eligibility review first",
      "Secure medical intake after checkout",
      "Provider oversight if treatment continues",
      "Discreet fulfillment when prescribed",
      "Routine follow-up required by the program",
    ],
    note: SHARED_NOTE,
    compounded: "May be compounded — not FDA-approved",
    illustrative: ILLUSTRATIVE,
    ctaLabel: "Start clinical intake",
    ctaTone: "semaglutide",
  },
  {
    id: "tirzepatide",
    novimidId: "tirzepatide",
    tab: "Tirzepatide",
    tone: "tirzepatide",
    title: "Tirzepatide Program",
    titleMaxCh: 18,
    summary:
      "A clinician-guided weight-management program using tirzepatide, with licensed-provider review. Completing intake does not guarantee a prescription.",
    chip: "Weight Management",
    chipClass: "bg-[#dce8dd] text-[#2c3a35]",
    stock: "Rx Only",
    footerSocialBold: "Licensed",
    footerSocialSuffix: " U.S. provider review",
    tabImage: "/images/icon-vial-b-v2.png",
    productBg: "/images/card-vial-tirzepatide.png",
    products: [
      {
        name: "Tirzepatide",
        desc: "Clinician-guided program · if prescribed",
        thumb: "/images/icon-vial-b-v2.png",
        thumbBg: "#dce8dd",
      },
    ],
    includes: [
      "Online licensed-provider review",
      "Secure medical intake after checkout",
      "Ongoing program support by secure message",
      "Standard shipping when prescribed",
      "Routine follow-up required by the program",
    ],
    note: SHARED_NOTE,
    compounded: "May be compounded — not FDA-approved",
    illustrative: ILLUSTRATIVE,
    ctaLabel: "Start clinical intake",
    ctaTone: "tirzepatide",
  },
];
