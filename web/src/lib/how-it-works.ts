import { media, type SiteImage } from "./media";

export type HowStep = {
  n: string;
  title: string;
  titleItalic: string;
  body: string;
  image: SiteImage;
  chips?: string[];
  callout?: { value: string; label: string };
  reverse?: boolean;
};

export const howSteps: HowStep[] = [
  {
    n: "01",
    title: "Start your",
    titleItalic: "intake",
    body: "Share your goals and history in a short intake. Browse physician-directed weight management options — Semaglutide or Tirzepatide — so your care team can confirm whether treatment may be appropriate. Completing intake does not guarantee a prescription.",
    image: {
      src: "/images/how-step1.jpg",
      alt: "Personalized protocol vials representing treatment options",
      width: 1200,
      height: 900,
      quality: 75,
      sizes: "(max-width: 1024px) 92vw, 50vw",
    },
    chips: ["Semaglutide", "Tirzepatide", "Weight Management"],
    callout: {
      value: "Physician-first",
      label: "Care begins with clinical fit — not a template checkout.",
    },
  },
  {
    n: "02",
    title: "Consult &",
    titleItalic: "verify",
    body: "A care coordinator guides next steps. Identity and eligibility checks follow applicable telehealth rules so prescribing stays safe, compliant, and accountable.",
    image: {
      src: "/images/how-step2.jpg",
      alt: "Secure intake and verification interface",
      width: 1200,
      height: 900,
      quality: 75,
      sizes: "(max-width: 1024px) 92vw, 50vw",
    },
    chips: ["Secure intake", "Telehealth eligible", "Clear next steps"],
    reverse: true,
  },
  {
    n: "03",
    title: "Physician",
    titleItalic: "review",
    body: "A licensed clinician reviews your history and labs as needed. If clarification is required, your care team follows up. Completing intake does not guarantee a prescription.",
    image: {
      src: "/images/how-step3.jpg",
      alt: "Adult reviewing care details at home in soft morning light",
      width: 1200,
      height: 900,
      quality: 78,
      sizes: "(max-width: 1024px) 92vw, 50vw",
    },
    chips: ["Licensed clinician", "Labs when indicated", "No one-size plan"],
  },
  {
    n: "04",
    title: "Compound &",
    titleItalic: "ship",
    body: "When clinically indicated and prescribed, medication is prepared through a licensed U.S. pharmacy partner and shipped with clear instructions. Compounded medications are not FDA-approved finished products.",
    image: {
      src: "/images/how-step4.jpg",
      alt: "Medication package delivered to your door",
      width: 1200,
      height: 900,
      quality: 75,
      sizes: "(max-width: 1024px) 92vw, 50vw",
    },
    chips: ["Licensed pharmacy", "Clear instructions", "If prescribed"],
    reverse: true,
    callout: {
      value: "When indicated",
      label: "Compounded medications are not FDA-approved drug products.",
    },
  },
  {
    n: "05",
    title: "Start &",
    titleItalic: "follow through",
    body: "Care continues after delivery. Onboarding guidance, follow-up, and physician oversight keep your protocol accountable as your labs and goals evolve.",
    image: {
      src: "/images/how-step5.jpg",
      alt: "Patient beginning protocol with digital onboarding support",
      width: 1200,
      height: 900,
      quality: 75,
      sizes: "(max-width: 1024px) 92vw, 50vw",
    },
    chips: ["Onboarding support", "Ongoing follow-up", "Real accountability"],
  },
];

export const howWhy = [
  {
    image: media.why[0],
    title: "Transparent & trusted",
    body: "Licensed 503A compounding with clear clinical language — never vague wellness claims.",
  },
  {
    image: media.why[1],
    title: "Tailored personalized care",
    body: "Protocols built around your labs and goals, decided with your physician.",
  },
  {
    image: media.why[2],
    title: "Science-backed results",
    body: "Clinically guided care designed for long-term optimization, not trends.",
  },
] as const;
