"use client";

import Link from "next/link";
import { HeroPicture } from "./HeroPicture";

/** Hero proof chips: metric + caption */
const proofs = [
  { k: "Physician+", v: "Board-certified care — not a quiz", accent: "text-sage" },
  { k: "503A", v: "Licensed compounding when indicated", accent: "text-forest" },
  { k: "California", v: "Created · shipped end to end in CA", accent: "text-midnight" },
] as const;

export function HomeHero() {
  return (
    <section className="bg-white px-[var(--gutter)] pt-3 pb-8 sm:pt-5 sm:pb-12">
      <h1 className="sr-only">
        novimid — physician-directed metabolic, peptide, and hormone care
      </h1>
      <div className="hero-frame relative mx-auto min-h-[640px] max-w-6xl overflow-hidden rounded-[28px] border-[0.5px] border-midnight bg-midnight sm:min-h-[700px] sm:rounded-[36px] lg:min-h-[740px]">
        <div className="absolute inset-0">
          <HeroPicture className="hero-photo" />
          <div className="hero-scrim absolute inset-0" aria-hidden />
        </div>

        <div className="absolute bottom-[7.25rem] left-4 z-10 flex max-w-[230px] flex-col gap-2 sm:bottom-8 sm:left-8 sm:max-w-[250px]">
          {proofs.map((card, i) => (
            <div
              key={card.k}
              className={`proof-card proof-float rounded-2xl border-[0.5px] border-white/25 bg-white px-3.5 py-2.5 shadow-[0_8px_24px_rgba(44,58,53,0.16)] proof-delay-${i + 1}`}
            >
              <p className={`text-[17px] font-normal sm:text-[18px] ${card.accent}`}>{card.k}</p>
              <p className="mt-0.5 text-[11px] font-light text-forest sm:text-[12px]">{card.v}</p>
            </div>
          ))}
        </div>

        <div className="hero-in delay-4 absolute inset-x-0 bottom-5 z-10 flex flex-col items-stretch justify-center gap-3 px-4 sm:bottom-8 sm:flex-row sm:items-center sm:px-8">
          <Link
            href="/start"
            className="inline-flex h-12 items-center justify-center rounded-full border-[0.5px] border-midnight bg-sage px-6 text-[15px] font-normal text-[#FFFFFF] sm:min-w-[220px]"
          >
            See if I qualify
          </Link>
          <Link
            href="/treatments"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border-[0.5px] border-midnight bg-white px-5 text-[15px] font-normal text-midnight sm:min-w-[220px]"
          >
            Explore treatments
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-midnight text-[12px] text-white transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
