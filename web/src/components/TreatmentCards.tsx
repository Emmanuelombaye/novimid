"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";

const cards = [
  {
    label: "Weight Management",
    badge: "Physician-directed",
    title: "Semaglutide Program",
    body: "A weekly physician-directed Semaglutide program designed to support appetite regulation and weight management when clinically appropriate. Completing intake does not guarantee a prescription.",
    vial: "/images/card-vial-semaglutide.png",
    vialAlt: "Semaglutide injectable solution vial",
    stage: "bg-[#E7F0E8]",
    treatment: "semaglutide",
  },
  {
    label: "Weight Management",
    badge: "Physician-directed",
    title: "Tirzepatide Program",
    body: "A weekly physician-directed Tirzepatide program designed to support appetite regulation and weight management when clinically appropriate. Completing intake does not guarantee a prescription.",
    vial: "/images/card-vial-tirzepatide.png",
    vialAlt: "Tirzepatide injectable solution vial",
    stage: "bg-[#EAF2EC]",
    treatment: "tirzepatide",
  },
] as const;

/** Treatment cards — separate vial per program. */
export function TreatmentCards() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
      {cards.map((card, i) => (
        <Reveal key={card.title} delayMs={i * 90}>
          <article className="flex h-full flex-col rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_1px_2px_rgba(44,58,53,0.04)] sm:rounded-[32px] sm:p-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#EEF1EF] px-3 py-1 text-[12px] font-normal text-[#3D4A44]">
                {card.label}
              </span>
              <span className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-[12px] font-normal text-[#3D4A44]">
                {card.badge}
              </span>
            </div>

            <div
              className={`relative mx-auto mt-5 aspect-square w-full max-w-[14rem] overflow-hidden rounded-[22px] ${card.stage}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.vial}
                alt={card.vialAlt}
                className="h-full w-full object-contain object-center p-4 sm:p-5"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="mt-5 text-[11px] font-normal tracking-[0.14em] text-[#8A9690] uppercase">
              Personalized
            </p>
            <h3 className="mt-1.5 font-[family-name:var(--font-dm-sans)] text-[1.5rem] leading-[1.15] tracking-[-0.03em] text-[#1F2A26]">
              {card.title}
            </h3>
            <p className="mt-3 flex-1 text-[14px] leading-[1.55] font-light text-[#4A5A52]">
              {card.body}
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              <Link
                href={`/start?treatment=${card.treatment}`}
                className="inline-flex h-11 flex-[1.35] items-center justify-center rounded-full bg-sage px-4 text-[13px] font-normal text-white transition-colors hover:bg-[#5F8165]"
              >
                Start clinical intake
              </Link>
              <Link
                href="/treatments"
                className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-[#2C3A35] bg-white px-3 text-[13px] font-normal text-[#2C3A35] transition-colors hover:bg-cloud"
              >
                Learn more
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
