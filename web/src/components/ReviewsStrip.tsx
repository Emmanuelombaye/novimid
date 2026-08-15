"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { Stars } from "./Stars";

const featured = {
  h: "Clinical from the first conversation.",
  q: "My physician listened, ordered labs, and explained compounding in plain language before anything was prescribed. It felt like medicine — not a sales funnel.",
  n: "Taylor H.",
  focus: "Physician consult",
} as const;

const reviews = [
  {
    h: "Shipping was calm and precise.",
    q: "Instructions were clear. I never wondered whether my prescription was handled with care.",
    n: "Morgan P.",
    focus: "503A fulfillment",
  },
  {
    h: "Follow-up changed the plan — for the better.",
    q: "When labs shifted, so did my protocol. That accountability is why I stayed.",
    n: "Riley T.",
    focus: "Labs & follow-up",
  },
  {
    h: "No pressure. Clear next steps.",
    q: "Eligibility was explained honestly. I always knew what came next and why.",
    n: "Drew S.",
    focus: "Care coordination",
  },
] as const;

/** Verified reviews band before closing CTA */
export function ReviewsStrip() {
  return (
    <section className="bg-[#FAFBF9] py-16 sm:py-24">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-midnight/20 bg-white px-3.5 py-1 text-[11px] font-bold tracking-wider text-midnight uppercase shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse" />
              ✦ Verified Patient Reviews
            </span>
            <h2 className="mt-3.5 font-[family-name:var(--font-dm-sans)] text-[clamp(1.85rem,4.5vw,2.75rem)] font-bold tracking-tight text-midnight">
              Five-star experiences,{" "}
              <em className="font-[family-name:var(--font-dm-serif)] italic text-sage-dark">
                in their words
              </em>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] font-light leading-relaxed text-forest">
              Real feedback from patients receiving physician-directed care · Individual results vary
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-7 flex justify-center sm:mt-9">
          <div className="inline-flex items-center gap-3 rounded-full border-[1.5px] border-midnight bg-[#DCE8DD] px-5 py-2.5 shadow-[3px_3px_0_0_#1F2A37]">
            <Stars size="md" />
            <span className="text-[13px] font-bold text-midnight">5.0 Out of 5 Stars • Verified Reviews</span>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:mt-12 lg:grid-cols-12 lg:gap-6">
          {/* Featured Left Card */}
          <Reveal className="flex flex-col justify-between overflow-hidden rounded-[28px] border-[2px] border-midnight bg-white p-7 sm:p-9 shadow-[6px_6px_0_0_#1F2A37] transition-all hover:shadow-[8px_8px_0_0_#1F2A37] lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span
                  className="font-[family-name:var(--font-dm-serif)] text-[3.5rem] leading-none text-sage-dark"
                  aria-hidden
                >
                  “
                </span>
                <span className="rounded-full border border-midnight/20 bg-sage/20 px-3 py-1 text-[10.5px] font-bold tracking-wider text-sage-dark uppercase">
                  {featured.focus}
                </span>
              </div>

              <h3 className="mt-2 font-[family-name:var(--font-dm-sans)] text-[1.35rem] font-bold leading-snug tracking-[-0.02em] text-midnight sm:text-[1.5rem]">
                {featured.h}
              </h3>
              <p className="mt-4 text-[15px] font-normal leading-relaxed text-forest sm:text-[15.5px]">
                My physician listened, ordered labs, and explained compounding in plain language before anything was prescribed.{" "}
                <span className="rounded bg-sage/20 px-1 py-0.5 font-semibold text-midnight">
                  It felt like medicine — not a sales funnel.
                </span>
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-midnight/12 pt-5">
              <div>
                <p className="text-[14.5px] font-bold text-midnight">{featured.n}</p>
                <p className="mt-0.5 text-[11px] font-bold text-sage-dark">✓ Verified Patient</p>
              </div>
              <Stars size="sm" />
            </div>
          </Reveal>

          {/* Right 3 Stacked Cards */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            {reviews.map((r, i) => (
              <Reveal
                key={r.n}
                delayMs={i * 45}
                className="flex flex-1 flex-col justify-between rounded-[22px] border-[2px] border-midnight bg-white p-5.5 sm:p-6 shadow-[4px_4px_0_0_#1F2A37] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#1F2A37]"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="min-w-0 font-[family-name:var(--font-dm-sans)] text-[1.1rem] font-bold leading-snug text-midnight sm:text-[1.18rem]">
                      {r.h}
                    </h3>
                    <span className="shrink-0 rounded-full border border-midnight/20 bg-[#F4F7F4] px-3 py-1 text-[10px] font-bold tracking-wider text-midnight uppercase">
                      {r.focus}
                    </span>
                  </div>
                  <p className="mt-2.5 text-[14.5px] font-normal leading-relaxed text-forest">
                    {r.q}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-midnight/10 pt-3.5">
                  <p className="text-[13.5px] font-bold text-midnight">
                    {r.n}{" "}
                    <span className="font-normal text-sage-dark">· Verified Patient</span>
                  </p>
                  <Stars size="xs" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-lg text-center text-[11px] font-light italic text-fog sm:mt-10">
          Reviews are illustrative for layout. Individual patient experiences and results may vary.
        </p>

        <div className="mt-8 flex justify-center sm:mt-9">
          <Link
            href="/start"
            className="inline-flex h-11 items-center justify-center rounded-full bg-sage px-7 text-[14px] font-light text-white transition-colors hover:bg-sage-mid sm:h-12 sm:text-[15px]"
          >
            See if I qualify
          </Link>
        </div>
      </div>
    </section>
  );
}
