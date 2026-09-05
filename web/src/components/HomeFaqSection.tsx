import Link from "next/link";
import { faqPreview } from "@/lib/content";
import { FaqAccordion } from "./FaqAccordion";
import { Reveal } from "./Reveal";

/** Homepage FAQ — Efexia split layout: intro left, accordion panel right. */
export function HomeFaqSection() {
  return (
    <section className="bg-cloud py-16 sm:py-20 lg:py-[5.5rem]" aria-labelledby="home-faq-title">
      <div className="shell grid items-start gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <h2
            id="home-faq-title"
            className="font-[family-name:var(--font-dm-serif)] text-[clamp(2.15rem,4.5vw,3.1rem)] font-normal leading-[1.08] tracking-[-0.02em] text-midnight"
          >
            Frequently asked
          </h2>
          <p className="mt-3.5 max-w-[34ch] text-[1.02rem] font-light leading-[1.65] text-forest">
            Six of the questions people ask most. Additional policy details are in
            our terms and legal resources.
          </p>
          <Link
            href="/faq"
            className="mt-3.5 inline-flex text-[0.98rem] font-semibold text-midnight underline decoration-midnight/35 underline-offset-[3px] transition-colors hover:text-sage hover:decoration-current"
          >
            Read the full FAQ
          </Link>
        </Reveal>

        <Reveal delayMs={80}>
          <FaqAccordion items={faqPreview} />
        </Reveal>
      </div>
    </section>
  );
}
