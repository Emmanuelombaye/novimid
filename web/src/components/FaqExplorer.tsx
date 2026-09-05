"use client";

import Link from "next/link";
import { faqItems } from "@/lib/content";
import { FaqAccordion } from "./FaqAccordion";
import { Reveal } from "./Reveal";

/** Full FAQ page — Efexia-style single accordion panel. */
export function FaqExplorer() {
  return (
    <div className="mx-auto max-w-3xl">
      <Reveal>
        <FaqAccordion items={faqItems} />
      </Reveal>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-12">
        <Link
          href="/how-it-works"
          className="text-[0.98rem] font-semibold text-midnight underline decoration-midnight/35 underline-offset-[3px] transition-colors hover:text-sage hover:decoration-current"
        >
          How it works
        </Link>
        <Link
          href="/policies/fda-and-medical-disclaimer"
          className="text-[0.98rem] font-semibold text-midnight underline decoration-midnight/35 underline-offset-[3px] transition-colors hover:text-sage hover:decoration-current"
        >
          Compounding disclosure
        </Link>
        <Link
          href="/policies/terms-of-use"
          className="text-[0.98rem] font-semibold text-midnight underline decoration-midnight/35 underline-offset-[3px] transition-colors hover:text-sage hover:decoration-current"
        >
          Terms and policies
        </Link>
      </div>

      <div className="mt-12 rounded-[16px] border border-midnight/10 bg-white px-6 py-8 text-center sm:mt-14 sm:px-10 sm:py-10">
        <p className="label-caps">Still have questions</p>
        <h2 className="mt-3 font-[family-name:var(--font-dm-sans)] text-[clamp(1.35rem,3vw,1.75rem)] font-light tracking-[-0.02em] text-midnight">
          A care coordinator can help
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[14px] font-light leading-relaxed text-forest sm:text-[15px]">
          Start intake and your team will clarify eligibility, shipping, and what to
          expect before licensed-provider review.
        </p>
        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/start"
            className="inline-flex h-11 items-center justify-center rounded-full bg-sage px-7 text-[14px] font-medium text-white transition-colors hover:bg-[#5F8165] sm:h-12 sm:text-[15px]"
          >
            Get started
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex h-11 items-center justify-center rounded-full border border-mist bg-cloud px-7 text-[14px] font-medium text-midnight transition-colors hover:border-sage/40 sm:h-12 sm:text-[15px]"
          >
            How it works
          </Link>
        </div>
      </div>
    </div>
  );
}
