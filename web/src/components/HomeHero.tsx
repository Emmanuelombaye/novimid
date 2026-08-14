"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const rotatingWords = [
  "GLP-1 Weight Loss",
  "Peptide Therapy",
  "Hormone Optimization (TRT)",
  "Metabolic Care",
];

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
    <section className="relative w-full bg-[#181310] text-[#f4efe8] overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-20">
      {/* Top Banner Chip */}
      <div className="flex justify-center px-4 mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#e8c599]/30 bg-[#2d241e]/80 px-4 py-1.5 text-[12px] font-medium text-[#e8c599] backdrop-blur-sm sm:text-[13px]">
          <span>The GLP-1 & Peptide protocol is here.</span>
          <Link href="/start" className="underline hover:text-white transition-colors">
            Check eligibility →
          </Link>
        </div>
      </div>

      <div className="shell mx-auto max-w-6xl px-4">
        {/* Studio Product Centerpiece Image (Hims Aesthetic) */}
        <div className="relative mx-auto h-[320px] w-full max-w-3xl overflow-hidden rounded-3xl border border-[#382c23] shadow-2xl sm:h-[440px] lg:h-[480px]">
          <Image
            src="/images/hero-hims.png"
            alt="Novimid studio compound pill and pen protocol"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle Warm Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181310] via-transparent to-transparent opacity-80" />
        </div>

        {/* Text Container with Hims-style Dynamic Rotating Headline */}
        <div className="mt-8 text-center sm:mt-12">
          <h1 className="font-display text-[2rem] font-medium leading-tight text-[#f4efe8] sm:text-[3rem] lg:text-[3.6rem]">
            Personalized{" "}
            <span
              className={`inline-block text-[#e8c599] transition-all duration-300 ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              {rotatingWords[index]}
            </span>
            <br />
            with physician oversight.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[15px] font-normal leading-relaxed text-[#c7bcae] sm:text-[17px]">
            Evidence-based protocols designed around your biology — compounded through our licensed California pharmacy.
          </p>

          {/* CTA Group */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/start"
              className="inline-flex h-13 min-w-[240px] items-center justify-center rounded-full bg-[#e8c599] px-8 text-[15px] font-semibold text-[#181310] transition-all hover:bg-[#f0d4b0] hover:scale-[1.02]"
            >
              Get Started Now
            </Link>
            <Link
              href="/treatments"
              className="inline-flex h-13 min-w-[200px] items-center justify-center rounded-full border border-[#382c23] bg-[#231c18] px-6 text-[15px] font-medium text-[#f4efe8] transition-all hover:border-[#524134] hover:bg-[#2d241e]"
            >
              View Treatments
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
