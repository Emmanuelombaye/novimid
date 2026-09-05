import Link from "next/link";
import { Reveal } from "./Reveal";

/** Honest process / compounding disclosure — no fake reviews or ratings */
export function ReviewsStrip() {
  return (
    <section className="bg-[#FAFBF9] py-14 sm:py-20">
      <div className="shell max-w-2xl text-center">
        <Reveal>
          <h2 className="font-[family-name:var(--font-dm-sans)] text-[clamp(1.5rem,3.5vw,2rem)] font-bold tracking-tight text-midnight">
            Care starts with a physician review
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] font-light leading-relaxed text-forest">
            Licensed clinicians review your history before any prescription. When compounding is
            indicated, medications are prepared for individual patients through a licensed U.S. 503A
            pharmacy and are not FDA-approved.
          </p>
          <div className="mt-8">
            <Link
              href="/start"
              className="inline-flex h-11 items-center justify-center rounded-full bg-sage px-7 text-[14px] font-light text-white transition-colors hover:bg-sage-mid sm:h-12 sm:text-[15px]"
            >
              Start clinical intake
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
