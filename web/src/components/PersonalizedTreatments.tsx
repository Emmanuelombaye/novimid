"use client";

import Link from "next/link";
import { useState } from "react";
import { media } from "@/lib/media";
import { SiteImage } from "./SiteImage";

type Goal = {
  id: number;
  label: string;
  tone: "sage" | "mist" | "sand";
  badge: string;
  title: string;
  body: string;
  available: string;
  ghostLabel: string;
  product: typeof media.product.glp1Hero;
  person: typeof media.lifestyle.metabolicPerson;
};

const goals: Goal[] = [
  {
    id: 0,
    label: "Metabolic",
    tone: "sage",
    badge: "Physician-directed",
    title: "GLP-1 care",
    body: "A weekly physician-directed protocol designed to support appetite regulation and metabolic health.",
    available: "GLP-1 and dual-pathway options when clinically appropriate.",
    ghostLabel: "Care",
    product: media.product.glp1Hero,
    person: media.lifestyle.metabolicPerson,
  },
  {
    id: 1,
    label: "Peptides",
    tone: "mist",
    badge: "503A when indicated",
    title: "Peptide therapy",
    body: "Personalized peptide protocols to support recovery, cellular energy, and performance.",
    available: "Compounded after physician review when appropriate.",
    ghostLabel: "Plan",
    product: media.product.peptideHero,
    person: media.lifestyle.peptidePerson,
  },
  {
    id: 2,
    label: "Hormones",
    tone: "sand",
    badge: "Clinical oversight",
    title: "TRT",
    body: "Hormone optimization with labs, dosing, and follow-up built into an accountable plan.",
    available: "Eligibility and dosing are physician decisions.",
    ghostLabel: "Labs",
    product: media.product.trtHero,
    person: media.lifestyle.trtPerson,
  },
];

const sectionBg: Record<Goal["tone"], string> = {
  sage: "bg-cloud",
  mist: "bg-[#E8F0EA]",
  sand: "bg-[#F0F4F1]",
};

const tabOn: Record<Goal["tone"], string> = {
  sage: "bg-[#DCE8DD]",
  mist: "bg-white",
  sand: "bg-[#E8EDE6]",
};

/** Brand-book personalized treatments: flat Cloud wash, 0.5px, light type. */
export function PersonalizedTreatments() {
  const [goal, setGoal] = useState(0);
  const active = goals[goal];

  return (
    <section
      className={`relative isolate overflow-x-clip px-3 pt-8 pb-10 transition-colors duration-500 sm:px-5 sm:pt-10 sm:pb-12 lg:px-6 lg:pt-11 lg:pb-12 ${sectionBg[active.tone]}`}
    >
      <div className="relative z-[1] mx-auto w-full max-w-[72rem]">
        <div className="mx-auto mb-5 max-w-[38rem] text-center sm:mb-6 lg:mb-7">
          <h2 className="mx-auto max-w-[18ch] font-[family-name:var(--font-dm-sans)] text-[1.7rem] font-light leading-[1.12] tracking-[-0.02em] text-midnight sm:max-w-[20ch] sm:text-[2.1rem] lg:text-[2.45rem]">
            Personalized treatments to help achieve your goals
          </h2>
          <p className="mx-auto mt-2 mb-4 max-w-md font-[family-name:var(--font-dm-sans)] text-[13.5px] font-light text-forest sm:mt-2.5 sm:mb-5 sm:text-[15px]">
            Build a custom health plan by starting with a goal below.
          </p>

          <div
            className="mx-auto flex w-full max-w-md items-center justify-center gap-1 overflow-x-auto rounded-full border-[0.5px] border-midnight bg-white p-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:inline-flex sm:w-auto sm:max-w-none [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Treatment goals"
          >
            {goals.map((g) => {
              const on = goal === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setGoal(g.id)}
                  className={`min-w-0 flex-1 whitespace-nowrap rounded-full border-[0.5px] px-3 py-2.5 font-[family-name:var(--font-dm-sans)] text-[12.5px] font-light leading-none text-midnight transition-colors sm:flex-none sm:px-5 sm:text-[14px] ${
                    on
                      ? `${tabOn[g.tone]} border-midnight`
                      : "border-transparent bg-transparent"
                  }`}
                >
                  {g.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[48rem] flex-col items-center lg:max-w-[64rem] lg:flex-row lg:items-end lg:justify-center lg:gap-2 xl:gap-3">
          <div className="relative h-[22rem] w-[min(78vw,18.5rem)] shrink-0 sm:h-[26rem] sm:w-[20rem] lg:h-[32rem] lg:w-[22rem] xl:h-[34rem] xl:w-[24rem]">
            <p
              key={active.ghostLabel}
              className="pointer-events-none absolute top-1 left-[-4%] z-0 select-none font-[family-name:var(--font-dm-sans)] font-light uppercase tracking-[-0.04em] text-midnight/10"
              aria-hidden
            >
              <span className="block text-[clamp(3rem,12vw,5.25rem)] leading-[0.9]">
                {active.ghostLabel}
              </span>
            </p>

            <div className="pt-cutout absolute inset-0 z-[1]">
              <SiteImage
                key={active.person.src}
                image={active.person}
                fill
                className="!object-contain !object-bottom"
                sizes="(max-width:1024px) 78vw, 384px"
                priority={goal === 0}
              />
            </div>
          </div>

          <div className="relative z-[2] -mt-6 w-full max-w-[24rem] sm:-mt-8 sm:max-w-[26rem] lg:mt-0 lg:mb-0 lg:w-[26rem] lg:max-w-none lg:shrink-0 xl:w-[28rem]">
            <div className="rounded-[12px] border-[0.5px] border-midnight bg-white p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded-full bg-cloud px-2.5 py-0.5 text-[11px] font-light text-midnight">
                  {active.label}
                </span>
                <span className="rounded-full border-[0.5px] border-mist px-2.5 py-0.5 text-[11px] font-light text-forest">
                  {active.badge}
                </span>
              </div>

              <div className="relative mx-auto mt-3 h-[7.25rem] w-full max-w-[15rem] sm:h-[8.25rem]">
                <SiteImage
                  key={active.product.src}
                  image={active.product}
                  fill
                  className="!object-contain !object-center"
                  sizes="240px"
                />
              </div>

              <p className="label-caps mt-3">Personalized</p>
              <h3 className="mt-1 font-[family-name:var(--font-dm-sans)] text-[1.2rem] font-light leading-tight tracking-[-0.02em] text-midnight sm:text-[1.3rem]">
                {active.title}
              </h3>
              <p className="mt-2 text-[12.5px] font-light leading-relaxed text-forest sm:text-[13px]">
                {active.body}{" "}
                <span className="font-normal text-midnight">{active.available}</span>
              </p>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/start"
                  className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-sage px-4 text-[13px] font-light text-white sm:text-[14px]"
                >
                  See if I qualify
                </Link>
                <Link
                  href="/treatments"
                  className="inline-flex h-11 items-center justify-center rounded-full border-[0.5px] border-midnight bg-white px-4 text-[13px] font-light text-midnight sm:min-w-[6.75rem] sm:text-[14px]"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
