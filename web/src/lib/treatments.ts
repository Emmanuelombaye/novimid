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

/** Treatments explorer content — Novimid clinical tools */
export const treatmentCategories: TreatmentCategory[] = [
  {
    id: "metabolic",
    tab: "Metabolic",
    title: "Personalized GLP-1 care",
    summary:
      "A physician-directed weekly protocol designed to support appetite regulation, metabolic health, and long-term goals — prescribed only when clinically appropriate.",
    tabImage: media.tabs.metabolic,
    heroImage: media.product.glp1Hero,
    badge: "Physician-directed",
    options: [
      {
        name: "GLP-1 protocol",
        note: "Steady, provider-guided support.",
        tone: "sage",
      },
      {
        name: "Dual-pathway protocol",
        note: "When your physician recommends broader support.",
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
        body: "GLP-1 care is designed to work with hormonal pathways your body already uses — under physician oversight.",
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
    approachTitle: "A clinically guided approach to metabolic care",
    approachBody:
      "Your physician reviews history, labs, and goals before recommending a path. When compounding is indicated, formulations are prepared through our licensed 503A pharmacy.",
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
        q: "What is GLP-1 care at novimid?",
        a: "Physician-directed metabolic support that may include GLP-1–based protocols when clinically appropriate. Care begins with intake and physician review.",
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
    id: "peptides",
    tab: "Peptides",
    title: "Personalized peptide therapy",
    summary:
      "Physician-prescribed peptide protocols, compounded when clinically appropriate — selected for your plan, not marketed as a catalog of promises.",
    tabImage: media.tabs.peptides,
    heroImage: media.product.peptideHero,
    badge: "Compounded when indicated",
    options: [
      {
        name: "Peptide protocol",
        note: "Prescribed for your clinical plan.",
        tone: "sage",
      },
      {
        name: "Multi-tool plan",
        note: "Combined with other care when appropriate.",
        tone: "forest",
      },
    ],
    includes: [
      { label: "Physician consult & review", icon: "consult" },
      { label: "Labs informing your plan", icon: "labs" },
      { label: "Ongoing clinical follow-up", icon: "support" },
      { label: "Clear shipping & instructions", icon: "ship" },
    ],
    promise:
      "We lead with a physician relationship. Specific formulations are discussed in clinical context — not as outcome guarantees.",
    signalTitle: "Precision tools inside a physician relationship",
    signals: [
      {
        title: "Prescribed for your plan",
        body: "Peptides are clinical tools — considered when they fit your goals, history, and labs.",
      },
      {
        title: "Compounded with intention",
        body: "When indicated, formulations are prepared for the individual patient through our licensed 503A pharmacy.",
      },
      {
        title: "Accountable oversight",
        body: "Your physician stays involved so the protocol remains evidence-based and personal.",
      },
    ],
    approachTitle: "A clinically guided approach to peptide protocols",
    approachBody:
      "We do not lead with molecule names. We lead with physician-directed care — then use peptide therapy when it belongs in your protocol.",
    approachPoints: [
      "Specific formulations are discussed with your physician in clinical context.",
      "Compounded medications are not FDA-approved drug products.",
      "Follow-up keeps dosing and goals aligned over time.",
    ],
    timelineTitle: "What to expect, guided by your physician",
    timeline: [
      {
        phase: "Weeks 1–4 · Foundations",
        body: "Consult, diagnostics as needed, and a clear start plan with instructions from your care team.",
      },
      {
        phase: "Weeks 4–12 · Review",
        body: "Your physician assesses response and may refine the protocol based on clinical fit.",
      },
      {
        phase: "Month 3+ · Continuity",
        body: "Ongoing oversight keeps the plan accountable to your labs and goals.",
      },
    ],
    faqs: [
      {
        q: "What is peptide therapy at novimid?",
        a: "Physician-prescribed peptide protocols that may be compounded when clinically appropriate for your individual plan.",
      },
      {
        q: "Will you list specific peptides here?",
        a: "Specific options are discussed with your physician in clinical context — not marketed as a menu of outcomes.",
      },
      {
        q: "Is this biohacking?",
        a: "No. novimid is physician-directed care with evidence-based language and clinical oversight.",
      },
      {
        q: "Are compounded medications FDA-approved?",
        a: "No. Compounded medications are prepared for individual patients pursuant to a valid prescription.",
      },
    ],
  },
  {
    id: "hormones",
    tab: "Hormones",
    title: "Personalized TRT",
    summary:
      "Hormone optimization with clinical oversight — labs, dosing, and follow-up built into a physician-directed plan.",
    tabImage: media.tabs.hormones,
    heroImage: media.product.trtHero,
    badge: "Labs + follow-up",
    options: [
      {
        name: "TRT protocol",
        note: "Clinically supervised hormone care.",
        tone: "forest",
      },
      {
        name: "Monitored plan",
        note: "Labs and adjustments over time.",
        tone: "sage",
      },
    ],
    includes: [
      { label: "Physician consult & review", icon: "consult" },
      { label: "Labs informing your plan", icon: "labs" },
      { label: "Ongoing clinical follow-up", icon: "support" },
      { label: "Clear shipping & instructions", icon: "ship" },
    ],
    promise:
      "Eligibility is a physician decision. Monitoring and follow-up are part of care — not optional extras.",
    signalTitle: "Hormone care grounded in labs and judgment",
    signals: [
      {
        title: "Labs before assumptions",
        body: "Your physician uses clinical context and diagnostics — not a one-size template.",
      },
      {
        title: "Dosing with accountability",
        body: "Protocols are adjusted based on how you respond, with follow-up built in.",
      },
      {
        title: "Clarity over hype",
        body: "Precise clinical language — warm, clear, and never oversold.",
      },
    ],
    approachTitle: "A clinically guided approach to hormone optimization",
    approachBody:
      "TRT is considered when clinically appropriate. Your physician designs the plan around your biology and stays accountable over time.",
    approachPoints: [
      "Eligibility is determined by a board-certified physician.",
      "Monitoring and follow-up are part of care.",
      "When compounding is indicated, preparation follows 503A standards.",
    ],
    timelineTitle: "What to expect, guided by your physician",
    timeline: [
      {
        phase: "Weeks 1–4 · Assessment",
        body: "Intake, labs as needed, and a physician-designed starting plan with clear instructions.",
      },
      {
        phase: "Weeks 4–12 · Refinement",
        body: "Follow-up reviews how you are responding so dosing and support can be refined.",
      },
      {
        phase: "Month 3+ · Steady oversight",
        body: "Ongoing clinical accountability keeps the protocol aligned with your goals and labs.",
      },
    ],
    faqs: [
      {
        q: "What is TRT at novimid?",
        a: "Testosterone replacement therapy considered when clinically appropriate, with labs, dosing, and physician follow-up.",
      },
      {
        q: "Who determines if I qualify?",
        a: "A board-certified physician reviews your history and labs. Treatment is not right for everyone.",
      },
      {
        q: "Is this telehealth?",
        a: "Yes. Care begins with telehealth consult and follows applicable telemedicine rules.",
      },
      {
        q: "How do I start?",
        a: "Begin intake to share goals and history. A care coordinator guides you to a physician consult.",
      },
    ],
  },
];
