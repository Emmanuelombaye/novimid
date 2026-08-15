"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HeroOrbitStage } from "@/components/HeroOrbitStage";

const rotatingWords = [
  "GLP-1 Weight Loss",
  "Peptide Protocols",
  "Hormone Optimization",
  "Precision Medicine",
];

const proofs = [
  { k: "Physician+", v: "Board-certified care — not a quiz" },
  { k: "503A", v: "Licensed compounding when indicated" },
  { k: "California", v: "Created & shipped end-to-end in CA" },
] as const;

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        setFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section relative flex min-h-0 w-full flex-col justify-between overflow-x-clip overflow-y-visible bg-[#fafbf9] text-midnight lg:min-h-[calc(100dvh-64px)]">
      {/* Soft brand atmosphere — products live in the orbit stage (no double product art) */}
      <div className="hero-bg-layer absolute inset-0 z-0 bg-[#eef3ee]" aria-hidden>
        <div className="hero-atmosphere pointer-events-none absolute inset-0" />
        <div className="hero-copy-scrim pointer-events-none absolute inset-0 z-[2]" />
        <div className="hero-bottom-scrim pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-32 sm:h-24" />
      </div>

      {/* Hims-style floating products + orbiting micro-copy */}
      <HeroOrbitStage />

      {/* Copy — stacked on mobile (Yucca-style), left on desktop */}
      <div className="hero-copy shell relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-start justify-end px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[clamp(16.75rem,47vw,20.5rem)] sm:justify-center sm:px-8 sm:py-16 sm:pt-16 lg:mx-0 lg:ml-10 lg:mr-auto lg:max-w-[46%] lg:pl-0 lg:pr-8 lg:pb-5 xl:ml-14 xl:mr-auto xl:pr-12">
        <div className="hero-badge mb-5 inline-flex items-center gap-2 rounded-full border border-sage/20 bg-white/75 px-4 py-1.5 backdrop-blur-md sm:mb-6 sm:bg-sage/10">
          <span className="h-2 w-2 animate-pulse rounded-full bg-sage" />
          <span className="text-[11px] font-medium tracking-wide uppercase text-midnight sm:text-[12px]">
            Physician-Directed Care
          </span>
        </div>

        <div className="hero-copy-inner max-w-xl lg:max-w-[30rem]">
          <h1 className="font-display text-[1.75rem] font-normal leading-[1.14] tracking-[-0.025em] text-midnight min-[390px]:text-[1.9rem] sm:text-[2.65rem] lg:text-[3rem] xl:text-[3.15rem]">
            Personalized{" "}
            <span
              className={`inline-block max-w-full font-medium text-sage transition-all duration-300 ${
                fade ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              }`}
            >
              {rotatingWords[index]}
            </span>
            <br />
            with physician oversight.
          </h1>

          <p className="mt-4 max-w-md text-[14px] font-normal leading-relaxed text-forest sm:mt-5 sm:text-[15px] lg:text-[16px]">
            Board-certified physicians. Evidence-based care. Licensed 503A California compounding when clinically indicated.
          </p>
        </div>

        <div className="hero-cta-row mt-6 flex w-full max-w-md flex-col gap-3 sm:mt-7 lg:max-w-none lg:flex-row lg:items-center">
          <Link
            href="/start"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-sage px-8 text-[15px] font-medium text-white shadow-lg shadow-sage/20 transition-all hover:scale-[1.01] hover:bg-sage-mid sm:h-13 sm:min-w-[220px] sm:w-auto"
          >
            See if I qualify
          </Link>
          <Link
            href="/treatments"
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-midnight/15 bg-white/85 px-7 text-[15px] font-medium text-midnight backdrop-blur-md transition-all hover:bg-white sm:h-13 sm:min-w-[200px] sm:w-auto"
          >
            Explore treatments
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-midnight text-[12px] text-white transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>

      <div className="hero-proof-bar relative z-10 border-t border-mist/50 bg-white/92 py-3 backdrop-blur-md sm:bg-white/80 sm:py-4">
        <div className="shell mx-auto grid max-w-7xl gap-2 px-5 sm:flex sm:flex-wrap sm:items-stretch sm:justify-between sm:gap-4 sm:px-10 lg:px-16">
          {proofs.map((chip) => (
            <div
              key={chip.k}
              className="hero-proof-chip flex items-center gap-2 border-b border-mist/40 py-2 last:border-b-0 sm:min-w-0 sm:border-b-0 sm:py-0"
            >
              <span className="shrink-0 text-[11px] font-semibold text-sage sm:text-[13px]">{chip.k}</span>
              <span className="text-[11px] leading-snug text-forest sm:text-[13px]">{chip.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
