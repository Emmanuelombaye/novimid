import { media, type SiteImage } from "./media";

export type TreatmentCategory = {
  id: string;
  tab: string;
  title: string;
  summary: string;
  tabImage: SiteImage;
  heroImage: SiteImage;
  badge: string;
  options: { name: string; note: string; tone: "sage" | "sand" | "forest" }[];
  includes: { label: string; icon: "consult" | "ship" | "support" | "portal" | "labs" }[];
  promise: string;
  signalTitle: string;
  signals: { title: string; body: string }[];
  approachTitle: string;
  approachBody: string;
  approachPoints: string[];
  timelineTitle: string;
  timeline: { phase: string; body: string }[];
  faqs: { q: string; a: string }[];
};

/** Treatments explorer content — Semaglutide + Tirzepatide only */
export const treatmentCategories: TreatmentCategory[] = [
  {
    id: "semaglutide",
    tab: "Semaglutide",
    title: "Semaglutide Program",
    summary:
      "A physician-directed weekly Semaglutide program designed to support appetite regulation and weight management — prescribed only when clinically appropriate. Completing intake does not guarantee a prescription.",
    tabImage: media.tabs.metabolic,
    heroImage: media.product.glp1Hero,
    badge: "Weight Management",
    options: [
      {
        name: "Semaglutide",
        note: "Steady, provider-guided support.",
        tone: "sage",
      },
    ],
    includes: [
      { label: "Physician consult & review", icon: "consult" },
      { label: "Clear shipping & instructions", icon: "ship" },
      { label: "Ongoing clinical follow-up", icon: "support" },
      { label: "Coordinated care pathway", icon: "portal" },
    ],
    promise:
      "Provider-guided care. Licensed 503A compounding when indicated. Begin with intake — your physician determines if treatment is appropriate.",
    signalTitle: "Working with your biology — not against it",
    signals: [
      {
        title: "Supports natural fullness signals",
        body: "Semaglutide care is designed to work with pathways your body already uses — under physician oversight.",
      },
      {
        title: "Pacing that respects adaptation",
        body: "Dosing is introduced and adjusted by your physician so your protocol stays clinically appropriate.",
      },
      {
        title: "Built for sustainability",
        body: "A steady, accountable plan — not a template, and not a trend.",
      },
    ],
    approachTitle: "A clinically guided approach to Semaglutide care",
    approachBody:
      "Your physician reviews history, labs, and goals before recommending Semaglutide. When compounding is indicated, formulations are prepared through our licensed 503A pharmacy.",
    approachPoints: [
      "Eligibility and dosing are physician decisions — not checkout defaults.",
      "Compounded medications are not FDA-approved drug products; they are prepared for individual patients pursuant to a valid prescription.",
      "Follow-up keeps your protocol accountable as your biology responds.",
    ],
    timelineTitle: "What to expect, guided by your physician",
    timeline: [
      {
        phase: "Weeks 1–4 · Foundations",
        body: "Intake, physician review, and a measured start. Early changes vary — your care team sets expectations with you.",
      },
      {
        phase: "Weeks 4–12 · Calibration",
        body: "Your physician reviews response and may refine the protocol. Consistency and clinical fit come first.",
      },
      {
        phase: "Month 3+ · Your protocol",
        body: "The plan becomes more personal — adjusted to labs, tolerability, and your goals with ongoing oversight.",
      },
    ],
    faqs: [
      {
        q: "What is the Semaglutide Program at novimid?",
        a: "Physician-directed Semaglutide care for weight management when clinically appropriate. Care begins with intake and physician review. Completing intake does not guarantee a prescription.",
      },
      {
        q: "Who might be eligible?",
        a: "Eligibility depends on medical history, labs, and clinical criteria. A board-certified physician determines whether care is right for you.",
      },
      {
        q: "Are compounded medications FDA-approved?",
        a: "No. Compounded medications are prepared for individual patients and are not FDA-approved drug products.",
      },
      {
        q: "How does fulfillment work?",
        a: "When indicated, prescriptions are prepared through our licensed compounding pharmacy and shipped with clear instructions.",
      },
    ],
  },
  {
    id: "tirzepatide",
    tab: "Tirzepatide",
    title: "Tirzepatide Program",
    summary:
      "A physician-directed weekly Tirzepatide program designed to support appetite regulation and weight management — prescribed only when clinically appropriate. Completing intake does not guarantee a prescription.",
    tabImage: media.tabs.metabolic,
    heroImage: media.product.glp1Hero,
    badge: "Weight Management",
    options: [
      {
        name: "Tirzepatide",
        note: "Physician-guided dual-pathway support.",
        tone: "sand",
      },
    ],
    includes: [
      { label: "Physician consult & review", icon: "consult" },
      { label: "Clear shipping & instructions", icon: "ship" },
      { label: "Ongoing clinical follow-up", icon: "support" },
      { label: "Coordinated care pathway", icon: "portal" },
    ],
    promise:
      "Provider-guided care. Licensed 503A compounding when indicated. Begin with intake — your physician determines if treatment is appropriate.",
    signalTitle: "Working with your biology — not against it",
    signals: [
      {
        title: "Supports natural fullness signals",
        body: "Tirzepatide care is designed to work with pathways your body already uses — under physician oversight.",
      },
      {
        title: "Pacing that respects adaptation",
        body: "Dosing is introduced and adjusted by your physician so your protocol stays clinically appropriate.",
      },
      {
        title: "Built for sustainability",
        body: "A steady, accountable plan — not a template, and not a trend.",
      },
    ],
    approachTitle: "A clinically guided approach to Tirzepatide care",
    approachBody:
      "Your physician reviews history, labs, and goals before recommending Tirzepatide. When compounding is indicated, formulations are prepared through our licensed 503A pharmacy.",
    approachPoints: [
      "Eligibility and dosing are physician decisions — not checkout defaults.",
      "Compounded medications are not FDA-approved drug products; they are prepared for individual patients pursuant to a valid prescription.",
      "Follow-up keeps your protocol accountable as your biology responds.",
    ],
    timelineTitle: "What to expect, guided by your physician",
    timeline: [
      {
        phase: "Weeks 1–4 · Foundations",
        body: "Intake, physician review, and a measured start. Early changes vary — your care team sets expectations with you.",
      },
      {
        phase: "Weeks 4–12 · Calibration",
        body: "Your physician reviews response and may refine the protocol. Consistency and clinical fit come first.",
      },
      {
        phase: "Month 3+ · Your protocol",
        body: "The plan becomes more personal — adjusted to labs, tolerability, and your goals with ongoing oversight.",
      },
    ],
    faqs: [
      {
        q: "What is the Tirzepatide Program at novimid?",
        a: "Physician-directed Tirzepatide care for weight management when clinically appropriate. Care begins with intake and physician review. Completing intake does not guarantee a prescription.",
      },
      {
        q: "Who might be eligible?",
        a: "Eligibility depends on medical history, labs, and clinical criteria. A board-certified physician determines whether care is right for you.",
      },
      {
        q: "Are compounded medications FDA-approved?",
        a: "No. Compounded medications are prepared for individual patients and are not FDA-approved drug products.",
      },
      {
        q: "How does fulfillment work?",
        a: "When indicated, prescriptions are prepared through our licensed compounding pharmacy and shipped with clear instructions.",
      },
    ],
  },
];
