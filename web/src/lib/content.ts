import { media } from "./media";

export const brand = {
  name: "novimid",
  displayName: "Novimid",
  positioning: "Physician-Directed Health Optimization",
  tagline: "Your Protocol. Your Physician. Your Results.",
  subTagline: "Precision medicine, compounded for you.",
  seoTagline: "Evidence-based. Physician-led. Personalized.",
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
    body: "Meet a board-certified physician who listens first. Your goals, history, and symptoms shape the conversation.",
  },
  {
    n: "02",
    title: "Labs",
    body: "Targeted diagnostics give your physician a clear picture — not a template, your biology.",
  },
  {
    n: "03",
    title: "Protocol",
    body: "Your physician designs an evidence-based protocol around your labs, lifestyle, and clinical needs.",
  },
  {
    n: "04",
    title: "Compound",
    body: "When indicated, prescriptions are prepared through our licensed 503A compounding pharmacy with clinical precision.",
  },
  {
    n: "05",
    title: "Ship & follow",
    body: "Medication ships with clear instructions. Ongoing physician oversight keeps your protocol accountable.",
  },
] as const;

export const clinicalTools = [
  {
    title: "Peptide therapy",
    body: "Physician-prescribed peptide protocols, compounded when clinically appropriate for your plan.",
    image: media.tools.peptides,
  },
  {
    title: "GLP-1 care",
    body: "Metabolic support directed by a physician, aligned with current telemedicine guidelines.",
    image: media.tools.glp1,
  },
  {
    title: "TRT",
    body: "Hormone optimization with clinical oversight — labs, dosing, and follow-up built in.",
    image: media.tools.trt,
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

export const faqCategories: FaqCategory[] = [
  {
    id: "start",
    label: "Getting started",
    items: [
      {
        q: "What is novimid?",
        a: "novimid connects patients with board-certified physicians who design evidence-based protocols — from peptide therapy to GLP-1 and TRT — delivered through our licensed compounding pharmacy with clinical precision.",
      },
      {
        q: "How do I get started?",
        a: "Start your protocol to begin intake. A care coordinator will guide you to a physician consult and explain what to expect at each step.",
      },
      {
        q: "Who is this for?",
        a: "Adults seeking physician-directed metabolic, peptide, or hormone care through telehealth — when clinically appropriate. Eligibility is confirmed during intake and physician review.",
      },
      {
        q: "What happens after I submit intake?",
        a: "Your information is reviewed for clinical fit. If eligible, you are scheduled for a physician consult. Your care team stays available for questions throughout.",
      },
    ],
  },
  {
    id: "care",
    label: "Care & telehealth",
    items: [
      {
        q: "Is this telehealth?",
        a: "Yes. Care begins with a physician consult via telehealth. Eligibility, prescribing, and follow-up follow applicable state and federal telemedicine rules.",
      },
      {
        q: "How personalized is my protocol?",
        a: "Your protocol is designed around your labs, history, and goals — not a template. You and your physician decide the path together.",
      },
      {
        q: "Will I have ongoing physician oversight?",
        a: "Yes. Protocols include follow-up so dosing and goals can be adjusted based on labs and how you respond — not a one-and-done prescription.",
      },
      {
        q: "How soon might I notice changes?",
        a: "Timelines vary by protocol and individual biology. Your physician sets expectations during consult and adjusts based on follow-up.",
      },
    ],
  },
  {
    id: "compounding",
    label: "Compounding & shipping",
    items: [
      {
        q: "What is a 503A compounding pharmacy?",
        a: "A 503A pharmacy prepares personalized medications for individual patients pursuant to a valid prescription. Compounded formulations are not FDA-approved drugs; they are prepared for patient-specific need under applicable law.",
      },
      {
        q: "Are compounded medications FDA-approved?",
        a: "No. Compounded medications are prepared for individual patients and are not FDA-approved drug products. Marketing and clinical use follow 503A compounding-eligible standards.",
      },
      {
        q: "Where is medication prepared?",
        a: "When compounding is indicated, prescriptions are prepared through our licensed California 503A pharmacy — created, manufactured, tested, packaged, and shipped with clinical oversight.",
      },
      {
        q: "Do you ship nationwide?",
        a: "Shipping availability depends on state regulations and clinical eligibility. Your care team confirms where we can serve you during intake.",
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    items: [
      {
        q: "Who do I contact with questions?",
        a: "Your care coordinator is the first point of contact for logistics, shipping, and scheduling. Clinical questions are routed to your physician's care team.",
      },
      {
        q: "Can my protocol change over time?",
        a: "Yes. Follow-up labs and check-ins allow your physician to refine dosing, formulations, or goals as your response becomes clearer.",
      },
      {
        q: "What if I’m not eligible?",
        a: "If telehealth or a specific therapy isn’t appropriate, your team will say so clearly and may suggest next steps — without pressure to proceed.",
      },
    ],
  },
];

/** Curated homepage / how-it-works preview — fixed order for stable SSR */
export const faqPreview: FaqItem[] = [
  faqCategories[0].items[0], // What is novimid?
  faqCategories[1].items[0], // Is this telehealth?
  faqCategories[2].items[0], // What is a 503A compounding pharmacy?
  faqCategories[1].items[1], // How personalized is my protocol?
  faqCategories[0].items[1], // How do I get started?
];

/** Flat list of all FAQ items */
export const faqItems: FaqItem[] = faqCategories.flatMap((c) => c.items);

export const physicianReviewNote =
  "Draft marketing copy pending physician and legal review before public launch.";
