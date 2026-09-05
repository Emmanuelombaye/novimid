"use client";

import Link from "next/link";
import { faqPreview } from "@/lib/content";
import { media } from "@/lib/media";
import { ClinicalProcess } from "./ClinicalProcess";
import { CtaBand } from "./CtaBand";
import { PersonalizedTreatments } from "./PersonalizedTreatments";
import { Reveal } from "./Reveal";
import { SpecialistsGrid } from "./SpecialistsGrid";
import { WhyNovimidGrid } from "./WhyNovimid";

export function HomeSections() {
  return (
    <>
      <PersonalizedTreatments />

      <ClinicalProcess />

      <CtaBand
        image={media.ctaPortrait}
        headline="Care that stays"
        headlineLine2="clinical."
        primaryLabel="Get started"
        secondaryLabel="Is this right for me?"
        objectPosition="object-cover object-[72%_center]"
      />

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

      <section className="bg-cloud py-14 sm:py-16 lg:py-20">
        <div className="shell max-w-[45rem]">
          <Reveal>
            <p className="text-center label-caps">FAQ</p>
            <h2 className="mt-3 text-center font-[family-name:var(--font-dm-sans)] text-[clamp(1.75rem,4vw,2.5rem)] font-light leading-[1.15] tracking-[-0.02em] text-midnight">
              Clear answers before you begin
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center text-[15px] font-light leading-relaxed text-forest">
              Telehealth, protocols, and California compounding — without the jargon.
            </p>
          </Reveal>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:gap-3.5">
            {faqPreview.map((item, i) => (
              <Reveal key={item.q} delayMs={i * 35}>
                <details className="group rounded-[12px] border-[0.5px] border-mist bg-white open:border-sage/40">
                  <summary className="cursor-pointer list-none px-5 py-4 marker:content-none sm:px-6 sm:py-[1.15rem] [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      <span className="font-[family-name:var(--font-dm-sans)] text-[15px] font-light tracking-[-0.01em] text-midnight sm:text-[16px]">
                        {item.q}
                      </span>
                      <span
                        className="faq-toggle flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[0.5px] border-mist font-[family-name:var(--font-dm-sans)] text-[18px] leading-none text-midnight transition-colors group-open:border-sage group-open:bg-sage group-open:text-white"
                        aria-hidden
                      >
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">×</span>
                      </span>
                    </span>
                  </summary>
                  <div className="border-t-[0.5px] border-mist px-5 pt-3 pb-5 sm:px-6">
                    <p className="faq-answer font-[family-name:var(--font-dm-sans)] text-[14px] font-light leading-relaxed text-forest sm:text-[15px]">
                      {item.a}
                    </p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 font-[family-name:var(--font-dm-sans)] text-[15px] font-light text-midnight underline-offset-4 transition-colors hover:text-sage hover:underline"
            >
              See all FAQs
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

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
