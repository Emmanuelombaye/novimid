export const brand = {
  name: "novimid",
  displayName: "Novimid",
  positioning: "Physician-Directed Health Optimization",
  tagline: "Your Protocol. Your Physician. Your Results.",
  subTagline: "Precision medicine, compounded for you.",
  seoTagline: "Clinician-guided. Personalized. Transparent.",
} as const;

export const navLinks = [
  { href: "/treatments", label: "Treatments" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About us" },
] as const;

export const journeySteps = [
  {
    n: "01",
    title: "Consult",
    body: "Meet a licensed clinician who listens first. Your goals, history, and symptoms shape the conversation.",
  },
  {
    n: "02",
    title: "Labs",
    body: "Targeted diagnostics may be requested so your clinician has a clear picture — not a template, your biology.",
  },
  {
    n: "03",
    title: "Protocol",
    body: "If appropriate, your clinician designs a protocol around your history, labs, lifestyle, and clinical needs.",
  },
  {
    n: "04",
    title: "Compound",
    body: "When indicated, prescriptions are prepared through licensed U.S. pharmacy partners for individual patients.",
  },
  {
    n: "05",
    title: "Ship & follow",
    body: "Medication ships with clear instructions when prescribed. Ongoing clinician oversight keeps care accountable.",
  },
] as const;

export const caChain = [
  "Created",
  "Manufactured",
  "Tested",
  "Packaged",
  "Shipped",
] as const;

export type FaqItem = { q: string; a: string };
export type FaqCategory = { id: string; label: string; items: FaqItem[] };

/** Homepage FAQ preview — exact Efexia home FAQ set (EN). */
export const faqPreview: FaqItem[] = [
  {
    q: "What is Novimid?",
    a: "Novimid is a technology platform that connects eligible patients with independent U.S.-licensed clinicians for weight-management programs. Novimid is not a pharmacy. Fulfillment occurs through licensed pharmacy partners only when prescribed.",
  },
  {
    q: "When do I complete my medical intake?",
    a: "After you complete checkout and payment authorization, you finish the secure medical intake and identity-verification steps required for licensed-provider review.",
  },
  {
    q: "Does purchasing guarantee a prescription?",
    a: "No. Purchasing or completing intake does not guarantee a prescription. A licensed clinician must determine that treatment is medically appropriate before any prescription is issued.",
  },
  {
    q: "What does the monthly price include?",
    a: "Program pricing reflects the online clinical consultation, standard shipping when a prescription is approved, ordinary program support, and routine follow-up required by the program. Laboratory testing, expedited shipping, and third-party services are not included unless specifically stated.",
  },
  {
    q: "Are the products FDA-approved?",
    a: "Compounded medications are not FDA-approved. They may be prescribed for an individual patient when a licensed clinician determines they are clinically appropriate.",
  },
  {
    q: "How do I cancel a program?",
    a: "You may cancel or manage your program through your account or by contacting support@novimid.com. Refund eligibility depends on program status and the terms described in our policies.",
  },
];

/** How-it-works FAQ set — exact Efexia how-it-works FAQ items (EN). */
export const faqExtended: FaqItem[] = [
  {
    q: "Why does the medical intake happen after checkout?",
    a: "Your payment reserves clinical review capacity and creates the account your intake is attached to. The intake itself is the clinical step, and it happens immediately after checkout — before any provider decision and before any fulfillment.",
  },
  {
    q: "Does paying mean I will receive a prescription?",
    a: "No. Purchasing or completing intake does not guarantee a prescription. A licensed clinician must determine that treatment is medically appropriate before any prescription is issued.",
  },
  {
    q: "How long does provider review usually take?",
    a: "Many reviews are completed within one to two business days after a complete intake is submitted. Complex cases or requests for additional information may take longer.",
  },
  {
    q: "What if a provider asks for more information?",
    a: "You may receive secure messages requesting clarification, photos, or laboratory work before a decision is made. The program cannot move forward until required information is complete.",
  },
  {
    q: "Can I change programs after checkout?",
    a: "If a clinician determines another program is more appropriate, that recommendation is handled through the clinical review process rather than self-switching products after payment.",
  },
  {
    q: "Is shipping really included?",
    a: "Standard shipping is included in the monthly program price when a prescription is approved and fulfilled. Expedited or replacement shipments may not be included unless specifically stated.",
  },
];

/** Full FAQ page — Efexia merge of home + how-it-works FAQ items. */
export const faqItems: FaqItem[] = (() => {
  const seen = new Set<string>();
  return [...faqPreview, ...faqExtended].filter((item) => {
    if (seen.has(item.q)) return false;
    seen.add(item.q);
    return true;
  });
})();

export const faqPageCopy = {
  breadcrumb: "FAQ",
  heroTitle: "Frequently asked questions",
  heroLead:
    "Answers on intake timing, pricing, prescriptions, compounded medications, and program management.",
  ctaPrimary: "Start clinical intake",
  ctaSecondary: "How it works",
} as const;

export const faqHomeCopy = {
  title: "Frequently asked",
  intro:
    "Six of the questions people ask most. Additional policy details are in our terms and legal resources.",
  link: "Read the full FAQ",
} as const;

export const faqHowItWorksCopy = {
  title: "The questions people ask before their first program.",
  intro: "If something here is still unclear, the full FAQ and Safety page go further.",
  link: "Read the full FAQ",
} as const;

/** @deprecated kept for any leftover imports — prefer faqPreview / faqItems */
export const faqCategories: FaqCategory[] = [
  { id: "programs", label: "Programs & pricing", items: faqPreview },
  { id: "process", label: "Intake & review", items: faqExtended },
];

export const physicianReviewNote =
  "Compounded medications are prepared for individual patients pursuant to a valid prescription through licensed U.S. pharmacies when clinically indicated. They are not FDA-approved and do not undergo FDA review for safety, effectiveness, or manufacturing quality.";
