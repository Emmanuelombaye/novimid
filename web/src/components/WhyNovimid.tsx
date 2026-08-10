"use client";

import type { ReactNode } from "react";
import { media } from "@/lib/media";
import { SiteImage } from "./SiteImage";

function IconDiamond() {
  return (
    <svg width="13" height="13" viewBox="0 0 15 15" fill="none" aria-hidden>
      <path
        d="M7.5 1.75L13.25 7.5L7.5 13.25L1.75 7.5L7.5 1.75Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg width="13" height="13" viewBox="0 0 15 15" fill="none" aria-hidden>
      <path
        d="M7.5 3V12M3 7.5H12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHome() {
  return (
    <svg width="13" height="13" viewBox="0 0 15 15" fill="none" aria-hidden>
      <path
        d="M2.5 6.75L7.5 2.5L12.5 6.75V12.25H9.25V9H5.75V12.25H2.5V6.75Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhyTrustedVisual() {
  const rows = [
    { label: "Quality sourcing", icon: <IconDiamond /> },
    { label: "Medical review", icon: <IconPlus /> },
    { label: "Home delivery", icon: <IconHome /> },
  ] as const;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {rows.map((r) => (
        <div
          key={r.label}
          className="flex items-center gap-2 rounded-full border-[0.5px] border-white/20 bg-white/[0.05] px-2.5 py-2"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-sage-light">
            {r.icon}
          </span>
          <span className="flex-1 text-left font-[family-name:var(--font-dm-sans)] text-[11px] font-normal text-white">
            {r.label}
          </span>
          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sage text-[8px] font-normal text-white">
            ✓
          </span>
        </div>
      ))}
    </div>
  );
}

function WhyCareChartVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-[12px] border-[0.5px] border-white/15 bg-[#1A2420] px-2.5 pt-5 pb-2.5">
      <p
        className="pointer-events-none absolute top-1.5 left-1/2 -translate-x-1/2 select-none font-[family-name:var(--font-dm-sans)] text-[1.25rem] font-light tracking-tight text-white/[0.08]"
        aria-hidden
      >
        Progress
      </p>
      <svg viewBox="0 0 280 88" className="relative z-10 h-[72px] w-full" aria-hidden>
        <defs>
          <linearGradient id="whyCareLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C5D5B0" />
            <stop offset="55%" stopColor="#6B8F71" />
            <stop offset="100%" stopColor="#8BAE8C" />
          </linearGradient>
        </defs>
        {[22, 40, 58, 76].map((y) => (
          <line
            key={y}
            x1="14"
            y1={y}
            x2="266"
            y2={y}
            stroke="rgba(240,244,241,0.07)"
            strokeWidth="1"
          />
        ))}
        <path
          d="M18 68 C70 60, 100 44, 140 36 C180 28, 210 22, 262 16"
          fill="none"
          stroke="url(#whyCareLine)"
          strokeWidth="2.25"
          strokeLinecap="round"
        />
        <circle cx="18" cy="68" r="3.5" fill="#C5D5B0" />
        <circle cx="140" cy="36" r="3.5" fill="#6B8F71" />
        <circle cx="262" cy="16" r="3.5" fill="#8BAE8C" />
      </svg>
      <div className="mt-0.5 flex justify-between px-0.5 font-[family-name:var(--font-dm-sans)] text-[9px] font-normal tracking-wide text-white/40">
        <span>Week 1</span>
        <span>Week 4</span>
        <span>Week 8</span>
      </div>
    </div>
  );
}

function WhyScienceVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-[12px] border-[0.5px] border-white/15 bg-white">
      <div className="relative mx-auto h-[110px] w-full max-w-[150px]">
        <SiteImage
          image={media.product.glp1Hero}
          fill
          className="!object-contain !object-bottom p-2"
          sizes="150px"
        />
      </div>
    </div>
  );
}

function WhySupportVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[128px]">
      <div className="overflow-hidden rounded-[12px] border-[0.5px] border-white/20 bg-[#121A17]">
        <div className="mx-auto mt-2 h-0.5 w-8 rounded-full bg-white/20" />
        <div className="mx-1.5 mt-1.5 space-y-1.5 rounded-[8px] bg-[#1A2420] p-2">
          <div className="flex items-center justify-between">
            <span className="font-[family-name:var(--font-dm-sans)] text-[9px] font-normal text-white">
              Care portal
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
          </div>
          <div className="h-8 rounded-[8px] bg-cloud/20" />
          <div className="space-y-1">
            <div className="h-1 w-[78%] rounded-full bg-white/15" />
            <div className="h-1 w-[55%] rounded-full bg-white/10" />
          </div>
        </div>
        <div className="space-y-1 p-2 pt-1.5">
          <div className="rounded-full border-[0.5px] border-white/15 px-2 py-1 font-[family-name:var(--font-dm-sans)] text-[8px] font-normal text-white/90">
            Message physician
          </div>
          <div className="rounded-full border-[0.5px] border-white/15 px-2 py-1 font-[family-name:var(--font-dm-sans)] text-[8px] font-normal text-white/90">
            Track protocol
          </div>
          <div className="rounded-full bg-sage px-2 py-1.5 text-center font-[family-name:var(--font-dm-sans)] text-[8px] font-normal text-midnight">
            Update treatment
          </div>
        </div>
      </div>
    </div>
  );
}

export type WhyCard = {
  title: ReactNode;
  body: string;
  visual: ReactNode;
};

export const whyCards: WhyCard[] = [
  {
    title: (
      <>
        Transparent &amp; <em className="italic font-light">Trusted</em>
      </>
    ),
    body: "Pharmaceutical-grade quality and transparency — from sourcing to delivery.",
    visual: <WhyTrustedVisual />,
  },
  {
    title: (
      <>
        Tailored <em className="italic font-light">Personalized</em> Care
      </>
    ),
    body: "Plans built around your goals, labs, and physician guidance.",
    visual: <WhyCareChartVisual />,
  },
  {
    title: (
      <>
        Science-backed <em className="italic font-light">Results</em>
      </>
    ),
    body: "Clinically guided protocols for long-term health and wellbeing.",
    visual: <WhyScienceVisual />,
  },
  {
    title: (
      <>
        <em className="italic font-light">Ongoing Support</em>, Always Near
      </>
    ),
    body: "Your care team and protocol details — available whenever you need them.",
    visual: <WhySupportVisual />,
  },
];

/** Brand-book Why cards: flat midnight panels, 0.5px borders, light type. */
export function WhyNovimidGrid() {
  return (
    <div className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-3">
      {whyCards.map((item, i) => (
        <article
          key={i}
          className="why-card flex h-full flex-col rounded-[12px] border-[0.5px] border-white/15 bg-midnight px-4 pt-5 pb-4 text-center sm:px-4 sm:pt-6 sm:pb-4"
        >
          <h3 className="font-[family-name:var(--font-dm-sans)] text-[1.05rem] font-light leading-snug tracking-[-0.01em] text-white sm:text-[1.1rem]">
            {item.title}
          </h3>
          <p className="mx-auto mt-2 max-w-[15.5rem] font-[family-name:var(--font-dm-sans)] text-[12px] font-light leading-relaxed text-white/70">
            {item.body}
          </p>
          <div className="mt-5 flex flex-1 flex-col justify-end">{item.visual}</div>
        </article>
      ))}
    </div>
  );
}
