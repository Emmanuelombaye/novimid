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

const productStage: Record<Goal["tone"], string> = {
  sage: "bg-[#E7F0E8]",
  mist: "bg-[#EAF2EC]",
  sand: "bg-[#EEF2EB]",
};

import { YuccaTreatmentsExplore } from "./YuccaTreatmentsExplore";

export function PersonalizedTreatments() {
  return (
    <section className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20">
      <div className="mx-auto w-full max-w-[72rem] px-4 sm:px-6">
        <div className="mx-auto mb-6 max-w-[38rem] text-center sm:mb-8 lg:mb-9">
          <h2 className="mx-auto max-w-[20ch] font-[family-name:var(--font-dm-sans)] text-[1.75rem] font-medium leading-[1.12] tracking-[-0.03em] text-[#2c3a35] sm:text-[2.25rem] lg:text-[2.5rem]">
            Personalized treatments to help achieve your goals
          </h2>
          <p className="mx-auto mt-2.5 max-w-md font-[family-name:var(--font-dm-sans)] text-[14px] font-light text-forest sm:text-[15px]">
            Build a custom health plan by starting with a goal below.
          </p>
        </div>

        {/* Exact TryYucca.com Explore Layout Component */}
        <YuccaTreatmentsExplore />
      </div>
    </section>
  );
}
