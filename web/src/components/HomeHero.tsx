"use client";

import Link from "next/link";
import { HeroPicture } from "./HeroPicture";

/** Hero proof chips: metric + caption */
const proofs = [
  { k: "Physician+", v: "Board-certified care — not a quiz", accent: "text-sage" },
  { k: "503A", v: "Licensed compounding when indicated", accent: "text-[#6b8f71]" },
  { k: "California", v: "Created · shipped end to end in CA", accent: "text-midnight" },
] as const;

export function HomeHero() {
  return (
    <section className="hero-fullbleed relative w-full overflow-hidden bg-white">
      <h1 className="sr-only">
        novimid — physician-directed metabolic, peptide, and hormone care
      </h1>

      {/* Full-bleed photo */}
      <div className="absolute inset-0">
        <HeroPicture className="hero-photo" />
        <div className="hero-scrim absolute inset-0" aria-hidden />
      </div>

      {/* Content layer */}
      <div className="hero-content relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-10 sm:px-10 sm:pb-14 lg:px-16 lg:pb-20">

        {/* Headline + subline */}
        <div className="hero-in mb-6 max-w-xl sm:mb-8 lg:mb-10">
          <p className="hero-label mb-3 text-[11px] font-medium tracking-[0.16em] uppercase text-forest sm:text-[12px]">
            Physician-Directed Health Optimization
          </p>
          <h2 className="hero-headline font-display text-[2.4rem] font-normal leading-[1.08] tracking-[-0.025em] text-midnight sm:text-[3.2rem] lg:text-[3.8rem]">
            Your Protocol.<br />Your Results.
          </h2>
          <p className="mt-4 text-[15px] font-normal leading-relaxed text-midnight/80 sm:text-[16px]">
            Board-certified physicians. Evidence-based care.<br className="hidden sm:block" />
            Licensed compounding when clinically appropriate.
          </p>
        </div>

        {/* CTAs */}
        <div className="hero-in delay-2 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/start"
            className="inline-flex h-13 items-center justify-center rounded-full bg-sage px-7 text-[15px] font-medium text-white shadow-[0_4px_24px_rgba(107,143,113,0.30)] transition-all hover:bg-sage-mid hover:shadow-[0_6px_32px_rgba(107,143,113,0.4)] sm:min-w-[220px]"
          >
            See if I qualify
          </Link>
          <Link
            href="/treatments"
            className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-midnight/15 bg-white/80 px-6 text-[15px] font-medium text-midnight backdrop-blur-md transition-all hover:bg-white sm:min-w-[200px]"
          >
            Explore treatments
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-midnight text-[12px] text-white transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        {/* Proof chips */}
        <div className="hero-in delay-3 mt-8 flex flex-wrap gap-2.5 sm:mt-10">
          {proofs.map((card) => (
            <div
              key={card.k}
              className="rounded-full border border-midnight/10 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-md"
            >
              <span className={`text-[13px] font-semibold ${card.accent}`}>{card.k}</span>
              <span className="ml-2 text-[12px] font-medium text-midnight/70">{card.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
