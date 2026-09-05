import type { Metadata } from "next";
import { HowItWorksFlow } from "@/components/HowItWorksFlow";
import { Reveal } from "@/components/Reveal";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "See how Novimid works — intake, licensed-provider review, personalized protocol when appropriate, pharmacy fulfillment if prescribed, and ongoing follow-up.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-white pt-8 pb-3 sm:pt-14 sm:pb-8">
        <div className="shell px-5 sm:px-8">
          <Reveal>
            <h1 className="mx-auto max-w-3xl text-center text-[clamp(1.65rem,5.2vw,2.75rem)] font-normal leading-[1.15] tracking-tight text-midnight">
              novimid delivers a{" "}
              <span className="text-sage">seamless, patient-first experience</span>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-center text-[14px] font-light leading-relaxed text-forest sm:mt-4 sm:text-[15px]">
              See how it works below. {brand.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-12 sm:pb-24">
        <div className="shell px-4 sm:px-8">
          <HowItWorksFlow />
        </div>
      </section>
    </>
  );
}
