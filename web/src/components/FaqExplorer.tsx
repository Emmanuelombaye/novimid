"use client";

import Link from "next/link";
import { faqItems } from "@/lib/content";
import { FaqAccordion } from "./FaqAccordion";
import { Reveal } from "./Reveal";

/** Full FAQ page — Efexia merge of home + how-it-works FAQ items. */
export function FaqExplorer() {
  return (
    <div className="mx-auto max-w-3xl">
      <Reveal>
        <FaqAccordion items={faqItems} defaultOpenIndex={0} />
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
          Safety and eligibility
        </Link>
        <Link
          href="/policies/terms-of-use"
          className="text-[0.98rem] font-semibold text-midnight underline decoration-midnight/35 underline-offset-[3px] transition-colors hover:text-sage hover:decoration-current"
        >
          Terms and policies
        </Link>
      </div>
    </div>
  );
}
