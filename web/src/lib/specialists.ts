export type Specialist = {
  role: string;
  specialties: string[];
  name: string;
  bio: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

/**
 * Illustrative specialist profiles for layout (not Hims clinicians).
 * Replace with counsel-confirmed novimid providers before launch.
 */
export const specialists: Specialist[] = [
  {
    role: "Head of Metabolic Care, novimid",
    specialties: ["Metabolic Health"],
    name: "Dr. Elena Park, MD",
    bio: "A board-certified internist focused on metabolic medicine, Dr. Park designs evidence-based protocols around labs, history, and long-term metabolic goals.",
    image: {
      src: "/images/specialists/elena-park.png",
      alt: "Dr. Elena Park, Head of Metabolic Care",
      width: 768,
      height: 1024,
    },
  },
  {
    role: "Head of Hormone & Men’s Health",
    specialties: ["Hormone Health", "Metabolic Health"],
    name: "Dr. Marcus Hale, MD",
    bio: "A physician specializing in hormonal health and metabolic performance, Dr. Hale focuses on the clinical markers that shape energy, recovery, and long-term vitality in men.",
    image: {
      src: "/images/specialists/marcus-hale.png",
      alt: "Dr. Marcus Hale, Head of Hormone and Men’s Health",
      width: 768,
      height: 1024,
    },
  },
  {
    role: "Head of Medical Affairs, novimid",
    specialties: [
      "Inflammation & Stress",
      "Liver & Kidney Health",
      "Immune Defense",
      "Nutrients & Blood",
    ],
    name: "Dr. Sofia Reyes, MD",
    bio: "A board-certified family medicine physician with deep clinical oversight experience, Dr. Reyes brings rigorous medical affairs leadership to every novimid patient pathway.",
    image: {
      src: "/images/specialists/sofia-reyes.png",
      alt: "Dr. Sofia Reyes, Head of Medical Affairs",
      width: 768,
      height: 1024,
    },
  },
  {
    role: "Endocrinology Advisor",
    specialties: ["Thyroid Health"],
    name: "Dr. James Whitaker, MD",
    bio: "An endocrinology-focused clinician, Dr. Whitaker advises on thyroid, metabolic, and endocrine pathways so protocols stay precise, accountable, and physician-directed.",
    image: {
      src: "/images/specialists/james-whitaker.png",
      alt: "Dr. James Whitaker, Endocrinology Advisor",
      width: 768,
      height: 1024,
    },
  },
];
