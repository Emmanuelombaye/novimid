"use client";

import { media } from "@/lib/media";
import { ClinicalProcess } from "./ClinicalProcess";
import { CtaBand } from "./CtaBand";
import { HomeFaqSection } from "./HomeFaqSection";
import { PersonalizedTreatments } from "./PersonalizedTreatments";
import { Reveal } from "./Reveal";
import { SpecialistsGrid } from "./SpecialistsGrid";
import { WhyNovimidGrid } from "./WhyNovimid";

export function HomeSections() {
  return (
    <>
      <PersonalizedTreatments />

      <ClinicalProcess />

      <SpecialistsGrid />

      <section className="bg-white py-12 sm:py-16">
        <div className="shell">
          <Reveal>
            <h2 className="text-center font-[family-name:var(--font-dm-sans)] text-[clamp(1.65rem,3.5vw,2.35rem)] font-light tracking-[-0.02em] text-midnight">
              Why novimid?
            </h2>
          </Reveal>
          <Reveal>
            <WhyNovimidGrid />
          </Reveal>
        </div>
      </section>

      <HomeFaqSection />

      <CtaBand
        image={media.closingCtaLifestyle}
        headline="Built around"
        headlineLine2="your goals."
        primaryLabel="Get started"
        secondaryLabel="Explore treatments"
        secondaryHref="/treatments"
        objectPosition="object-cover object-[78%_center]"
      />
    </>
  );
}
