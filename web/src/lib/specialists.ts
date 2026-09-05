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
 * Named clinician profiles intentionally empty until counsel confirms real providers.
 * Do not invent doctor names or bios for marketing.
 */
export const specialists: Specialist[] = [];
