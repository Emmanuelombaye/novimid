"use client";

import { YuccaTreatmentsExplore } from "./YuccaTreatmentsExplore";

export function PersonalizedTreatments() {
  return (
    <section
      id="treatments"
      className="relative scroll-mt-20 bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20"
    >
      <div className="mx-auto w-full max-w-[72rem] px-4 sm:px-6">
        <div className="mx-auto mb-6 max-w-[38rem] text-center sm:mb-8 lg:mb-9">
          <h2 className="mx-auto max-w-[20ch] font-[family-name:var(--font-dm-sans)] text-[1.75rem] font-medium leading-[1.12] tracking-[-0.03em] text-[#2c3a35] sm:text-[2.25rem] lg:text-[2.5rem]">
            Personalized treatments to help achieve your goals
          </h2>
          <p className="mx-auto mt-2.5 max-w-md font-[family-name:var(--font-dm-sans)] text-[14px] font-light text-forest sm:text-[15px]">
            Build a custom health plan by starting with a goal below.
          </p>
        </div>

        <YuccaTreatmentsExplore />
      </div>
    </section>
  );
}
