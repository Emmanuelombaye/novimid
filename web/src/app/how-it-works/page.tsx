import type { Metadata } from "next";
import { HowItWorksFlow } from "@/components/HowItWorksFlow";
import { Reveal } from "@/components/Reveal";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "See how novimid works — intake, physician review, personalized protocol, 503A compounding when indicated, and ongoing follow-up.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-white pt-10 pb-4 sm:pt-14 sm:pb-8">
        <div className="shell">
          <Reveal>
            <h1 className="mx-auto max-w-3xl text-center text-[clamp(1.75rem,4.8vw,2.75rem)] font-normal leading-[1.15] tracking-tight text-midnight">
              novimid delivers a{" "}
              <span className="text-sage">seamless, patient-first experience</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-center text-[15px] font-light text-forest">
              See how it works below. {brand.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-24">
        <div className="shell">
          <HowItWorksFlow />
        </div>
      </section>
    </>
  );
}
