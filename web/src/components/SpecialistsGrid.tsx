"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";

type Props = {
  showProviderLink?: boolean;
};

/** Provider network overview — no named clinician profiles until counsel confirms. */
export function SpecialistsGrid({ showProviderLink = true }: Props) {
  return (
    <section className="bg-[#F9F7F2] py-16 sm:py-20 lg:py-[5.5rem]">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-[40rem] text-center">
            <h2 className="font-[family-name:var(--font-dm-sans)] text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
              <span className="block text-[#A67C52]">Clinical care</span>
              <span className="block text-[#111111]">through a licensed provider network</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[32rem] text-[15px] font-normal leading-[1.45] text-[#5C5C5C] sm:text-[16px]">
              Independent U.S.-licensed clinicians review your intake and determine whether treatment
              is appropriate. Completing intake does not guarantee a prescription.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:mt-12 sm:grid-cols-3">
          {[
            {
              title: "Licensed review",
              body: "A clinician evaluates your history before any treatment decision.",
            },
            {
              title: "Personalized protocols",
              body: "Semaglutide or Tirzepatide only when clinically indicated.",
            },
            {
              title: "Ongoing oversight",
              body: "Follow-up and adjustments stay with your care team.",
            },
          ].map((item, i) => (
            <Reveal
              key={item.title}
              delayMs={i * 40}
              className="rounded-[1.25rem] border border-[#E8E2D8] bg-white px-5 py-6 text-center"
            >
              <h3 className="text-[15px] font-semibold text-[#111111]">{item.title}</h3>
              <p className="mt-2 text-[13px] font-normal leading-relaxed text-[#5C5C5C]">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>

        {showProviderLink ? (
          <Reveal className="mt-10 text-center">
            <Link
              href="/providers"
              className="inline-flex min-h-11 items-center text-[14px] font-medium text-[#A67C52] underline-offset-4 hover:underline"
            >
              Learn about our provider network
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
