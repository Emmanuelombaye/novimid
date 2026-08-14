"use client";

import Image from "next/image";
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
    <section className="relative flex min-h-[calc(100vh-64px)] w-full flex-col justify-between overflow-hidden bg-[#fafbf9] text-midnight">
      {/* Novimid background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-brand.png"
          alt="Novimid precision medicine protocol"
          fill
          className="object-cover object-right-top opacity-90 sm:object-right"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafbf9] via-[#fafbf9]/80 to-[#fafbf9]/20 sm:via-[#fafbf9]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafbf9] via-transparent to-[#fafbf9]/30 sm:hidden" />
      </div>

      {/* Hims-style floating products + orbiting micro-copy */}
      <HeroOrbitStage />

      {/* Copy — left on desktop, stacked on mobile */}
      <div className="shell relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-6 pt-[min(52vh,420px)] sm:justify-center sm:px-10 sm:py-16 sm:pt-16 lg:px-16">
        <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-sage/20 bg-sage/10 px-4 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-sage" />
          <span className="text-[12px] font-medium tracking-wide uppercase text-midnight sm:text-[13px]">
            Physician-Directed Care
          </span>
        </div>

        <div className="max-w-2xl">
          <h1 className="font-display text-[2.25rem] font-normal leading-[1.08] tracking-[-0.025em] text-midnight sm:text-[3.4rem] lg:text-[4rem]">
            Personalized{" "}
            <span
              className={`inline-block font-medium text-sage transition-all duration-300 ${
                fade ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              }`}
            >
              {rotatingWords[index]}
            </span>
            <br />
            with physician oversight.
          </h1>

          <p className="mt-5 max-w-lg text-[15px] font-normal leading-relaxed text-forest sm:text-[18px]">
            Board-certified physicians. Evidence-based care. Licensed 503A California compounding when clinically indicated.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <Link
            href="/start"
            className="inline-flex h-13 items-center justify-center rounded-full bg-sage px-8 text-[15px] font-medium text-white shadow-lg shadow-sage/20 transition-all hover:scale-[1.01] hover:bg-sage-mid sm:min-w-[220px]"
          >
            See if I qualify
          </Link>
          <Link
            href="/treatments"
            className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-midnight/15 bg-white/80 px-7 text-[15px] font-medium text-midnight backdrop-blur-md transition-all hover:bg-white sm:min-w-[200px]"
          >
            Explore treatments
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-midnight text-[12px] text-white transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>

      <div className="relative z-10 border-t border-mist/60 bg-white/70 py-4 backdrop-blur-md">
        <div className="shell mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 sm:px-10 lg:px-16">
          {proofs.map((chip) => (
            <div key={chip.k} className="flex items-center gap-2">
              <span className="text-[13px] font-semibold text-sage">{chip.k}</span>
              <span className="text-[13px] text-forest">{chip.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
