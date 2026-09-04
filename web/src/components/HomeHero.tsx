"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HeroOrbitStage } from "@/components/HeroOrbitStage";

const rotatingWords = ["Semaglutide", "Tirzepatide", "Weight Management"] as const;

const proofs = [
  { k: "Physician-led", v: "Licensed clinician review" },
  { k: "U.S. pharmacies", v: "Compounded when indicated" },
  { k: "HIPAA", v: "Protected health information" },
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
      }, 280);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section relative flex min-h-0 w-full flex-col justify-between overflow-x-clip overflow-y-visible bg-[#fafbf9] text-midnight lg:min-h-[calc(100dvh-72px)]">
      <div className="hero-bg-layer absolute inset-0 z-0 bg-[#eef3ee]" aria-hidden>
        <div className="hero-atmosphere pointer-events-none absolute inset-0" />
        <div className="hero-copy-scrim pointer-events-none absolute inset-0 z-[2]" />
      </div>

      <HeroOrbitStage />

      <div className="hero-copy shell relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-start justify-end px-5 pb-8 pt-[clamp(13rem,40vw,17rem)] sm:justify-center sm:px-8 sm:py-14 sm:pt-14 lg:mx-0 lg:ml-12 lg:mr-auto lg:max-w-[42%] lg:pl-0 lg:pr-6 lg:pb-8 xl:ml-16">
        <p className="mb-4 text-[11px] font-semibold tracking-[0.14em] uppercase text-sage sm:mb-5 sm:text-[12px]">
          Physician-directed care
        </p>

        <div className="hero-copy-inner max-w-lg">
          <h1 className="font-display text-[2rem] font-normal leading-[1.1] tracking-[-0.03em] text-midnight min-[390px]:text-[2.15rem] sm:text-[2.85rem] lg:text-[3.25rem]">
            Personalized{" "}
            <span
              className={`inline-block font-medium text-sage transition-all duration-300 ${
                fade ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              }`}
            >
              {rotatingWords[index]}
            </span>
            <br />
            with clinical oversight.
          </h1>

          <p className="mt-4 max-w-sm text-[15px] font-normal leading-relaxed text-forest sm:mt-5 sm:text-[16px]">
            Licensed clinicians. Evidence-based protocols. Compounded through licensed U.S. pharmacies when indicated.
          </p>
        </div>

        <div className="hero-cta-row mt-7 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
          <Link
            href="/start"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-sage px-8 text-[15px] font-medium text-white transition-colors hover:bg-sage-mid sm:w-auto sm:min-w-[200px]"
          >
            See if I qualify
          </Link>
          <Link
            href="/treatments"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-midnight/15 bg-white/90 px-7 text-[15px] font-medium text-midnight transition-colors hover:bg-white sm:w-auto"
          >
            Explore treatments
          </Link>
        </div>
      </div>

      <div className="hero-proof-bar relative z-10 border-t border-mist/40 bg-white/90 py-3 backdrop-blur-sm sm:py-3.5">
        <div className="shell mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 sm:justify-between sm:px-10 lg:px-16">
          {proofs.map((chip) => (
            <div key={chip.k} className="flex items-baseline gap-2">
              <span className="text-[12px] font-semibold text-midnight sm:text-[13px]">{chip.k}</span>
              <span className="text-[12px] text-forest sm:text-[13px]">{chip.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
