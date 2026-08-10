"use client";

import Link from "next/link";
import { useState } from "react";
import { faqPreview } from "@/lib/content";
import { media } from "@/lib/media";
import { PersonalizedTreatments } from "./PersonalizedTreatments";
import { Reveal } from "./Reveal";
import { ReviewsStrip } from "./ReviewsStrip";
import { SiteImage } from "./SiteImage";
import { SpecialistsGrid } from "./SpecialistsGrid";
import { StarMark, Stars } from "./Stars";
import { WhyNovimidGrid } from "./WhyNovimid";

/** Illustrative journeys only — no invented weight outcomes */
const resultStories = [
  {
    before: media.results[0],
    after: media.results[1],
    focus: "Metabolic care",
    when: "Ongoing protocol",
    name: "Lisa C.",
    verified: "Verified patient",
  },
  {
    before: media.results[1],
    after: media.results[2],
    focus: "Metabolic care",
    when: "Physician-directed",
    name: "Blaze B.",
    verified: "Verified patient",
  },
  {
    before: media.results[2],
    after: media.results[0],
    focus: "Peptide support",
    when: "Clinical follow-up",
    name: "Crystal G.",
    verified: "Verified patient",
  },
  {
    before: media.results[0],
    after: media.results[2],
    focus: "Hormone care",
    when: "Labs-guided",
    name: "JamiLyn O.",
    verified: "Verified patient",
  },
  {
    before: media.results[1],
    after: media.results[0],
    focus: "Metabolic care",
    when: "Ongoing protocol",
    name: "Kim B.",
    verified: "Verified patient",
  },
] as const;

const loveCategories = [
  {
    id: "care",
    label: "Care & results",
    quotes: [
      {
        h: "The intake felt clinical — not a sales quiz.",
        q: "My physician took time with my history before recommending a path. Clear language. No pressure.",
        n: "Alex R.",
        focus: "Metabolic care",
      },
      {
        h: "A real plan, not a template.",
        q: "Transparency about compounding built trust before I started. I always knew what was being prescribed and why.",
        n: "Sam K.",
        focus: "Peptide protocol",
      },
    ],
  },
  {
    id: "support",
    label: "Patient support",
    quotes: [
      {
        h: "I always knew the next step.",
        q: "Coordination stayed responsive from consult through fulfillment and follow-up. It felt like a care team.",
        n: "Jordan M.",
        focus: "Care coordination",
      },
      {
        h: "Questions were answered plainly.",
        q: "When something changed in my protocol, someone explained it in clinical terms I could understand — not marketing language.",
        n: "Riley T.",
        focus: "Ongoing support",
      },
    ],
  },
  {
    id: "process",
    label: "Process",
    quotes: [
      {
        h: "Follow-up kept the protocol honest.",
        q: "Adjustments were based on labs and how I responded — not a one-size plan. That accountability is why I stayed.",
        n: "Casey L.",
        focus: "Labs & follow-up",
      },
      {
        h: "Fulfillment was clear and calm.",
        q: "Shipping instructions were precise. I never wondered whether my prescription was handled with care.",
        n: "Morgan P.",
        focus: "503A fulfillment",
      },
    ],
  },
] as const;

const howSteps = [
  {
    step: "01",
    meta: "Online intake",
    t: "Complete your intake form",
    b: "Answer a short medical questionnaire so our physicians can determine if treatment is right for you.",
    img: media.product.glp1Hero,
    kind: "product" as const,
  },
  {
    step: "02",
    meta: "Physician review",
    t: "Provider evaluation",
    b: "A board-certified physician reviews your intake and determines whether treatment is appropriate.",
    img: media.lifestyle.physician1,
    kind: "cover" as const,
  },
  {
    step: "03",
    meta: "503A fulfillment",
    t: "Start treatment at home",
    b: "If approved, your prescription is prepared through our licensed 503A pharmacy and shipped with clear instructions.",
    img: media.product.peptideHero,
    kind: "product" as const,
  },
] as const;

export function HomeSections() {
  const [love, setLove] = useState(0);
  const activeLove = loveCategories[love] ?? loveCategories[0];

  return (
    <>
      {/* 1. Results */}
      <section className="bg-white py-12 sm:py-16">
        <div className="shell">
          <Reveal>
            <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-[clamp(1.65rem,4.2vw,2.4rem)] font-normal leading-[1.15] tracking-tight text-midnight">
              Patient journeys,{" "}
              <em className="italic">guided with care</em>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center font-[family-name:var(--font-dm-sans)] text-[15px] font-light text-forest">
              Illustrative before-and-after photography. Individual experiences vary.
            </p>
          </Reveal>
        </div>

        <div className="results-marquee-wrap mt-9">
          <div className="results-marquee" aria-label="Patient journeys">
            {[...resultStories, ...resultStories].map((card, i) => (
              <article
                key={`${card.name}-${i}`}
                className="relative grid h-[300px] w-[min(92vw,640px)] shrink-0 grid-cols-2 overflow-hidden rounded-[20px] border-[0.5px] border-midnight bg-midnight sm:h-[360px] sm:w-[660px] sm:rounded-[24px]"
              >
                <div className="relative overflow-hidden border-r-[0.5px] border-white/20">
                  <SiteImage
                    image={card.before}
                    fill
                    className="object-cover object-[center_20%] brightness-[0.85]"
                    sizes="330px"
                  />
                  <div className="absolute inset-0 bg-midnight/35" aria-hidden />
                  <span className="absolute top-3 left-3 rounded-lg bg-midnight px-2.5 py-1 text-[11px] font-light text-white sm:top-4 sm:left-4">
                    Before
                  </span>
                  <div className="absolute inset-x-3 bottom-4 text-left sm:inset-x-5 sm:bottom-8">
                    <p className="text-[15px] font-light text-white sm:text-[17px]">
                      {card.focus}
                    </p>
                    <p className="mt-1 text-[14px] font-light text-white/90 sm:text-[16px]">
                      {card.when}
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <SiteImage
                    image={card.after}
                    fill
                    className="object-cover object-[center_18%]"
                    sizes="330px"
                  />
                  <div className="absolute inset-0 bg-midnight/20" aria-hidden />
                  <span className="absolute top-3 left-3 rounded-lg bg-[#DCE8DD] px-2.5 py-1 text-[11px] font-light text-midnight sm:top-4 sm:left-4">
                    After
                  </span>
                  <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                    <div className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-midnight/88 px-3 py-2 backdrop-blur-sm sm:px-3.5">
                      <span className="truncate text-[12px] font-light text-white sm:text-[13px]">
                        {card.name}
                      </span>
                      <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white text-[9px] text-midnight">
                        ✓
                      </span>
                      <span className="truncate text-[11px] font-light text-sage-mist sm:text-[12px]">
                        {card.verified}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="shell mt-8">
          <div className="mx-auto flex max-w-2xl flex-col items-stretch overflow-hidden rounded-full bg-midnight sm:flex-row">
            <div className="flex flex-1 items-center justify-center gap-3 px-5 py-3.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <StarMark size="sm" className="text-sage" />
              </span>
              <div className="text-left">
                <p className="text-[13px] font-light text-white">Physician-directed care</p>
                <p className="text-[11px] font-light text-sage-mist">Board-certified review</p>
              </div>
            </div>
            <div className="hidden w-px bg-white/15 sm:block" aria-hidden />
            <div className="flex flex-1 items-center justify-center gap-3 border-t-[0.5px] border-white/15 px-5 py-3.5 sm:border-t-0">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sage text-[12px] font-light text-white">
                CA
              </span>
              <div className="text-left">
                <p className="text-[13px] font-light text-white">California supply chain</p>
                <p className="text-[11px] font-light text-sage-mist">Licensed 503A compounding</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-[11px] font-light italic text-fog">
            Individual patient experiences and results may vary.
          </p>
        </div>
      </section>

      <PersonalizedTreatments />

      {/* 3. How it works — Top-Notch Professional Redesign */}
      <section className="bg-[#FAFBF9] py-16 sm:py-24">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-midnight/20 bg-white px-3.5 py-1 text-[11px] font-bold tracking-wider text-midnight uppercase shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse" />
                ✦ Streamlined 3-Step Care
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-dm-sans)] text-[clamp(1.85rem,4.5vw,2.75rem)] font-bold tracking-tight text-midnight">
                How it{" "}
                <em className="font-[family-name:var(--font-dm-serif)] italic text-sage-dark">
                  works
                </em>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-[15px] font-light leading-relaxed text-forest sm:text-[16.5px]">
                From onboarding through treatment, we support and guide you at every step.
              </p>
            </div>
          </Reveal>

          <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-7">
            {/* Step 1 */}
            <Reveal
              delayMs={0}
              as="li"
              className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border-[2px] border-midnight bg-white p-6 shadow-[6px_6px_0_0_#1F2A37] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[8px_8px_0_0_#1F2A37] sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-midnight px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase">
                    Step 01
                  </span>
                  <span className="text-[11px] font-bold text-forest/70 uppercase tracking-wider">5-Min Intake</span>
                </div>

                <h3 className="mt-5 font-[family-name:var(--font-dm-sans)] text-[1.25rem] font-bold text-midnight sm:text-[1.35rem]">
                  Complete your intake form
                </h3>

                <p className="mt-2.5 text-[13.5px] font-light leading-relaxed text-forest">
                  Answer a short medical questionnaire covering your health goals, medical history, and bloodwork parameters — 100% online.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <div className="rounded-2xl border border-midnight/12 bg-[#F4F7F4] p-3.5 shadow-inner">
                  <div className="flex items-center justify-between text-[11px] font-bold text-midnight">
                    <span>Intake Assessment</span>
                    <span className="text-sage-dark">100% Complete</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-midnight/10">
                    <div className="h-full w-full rounded-full bg-sage" />
                  </div>
                  <div className="mt-2.5 flex items-center justify-between text-[10px] font-bold text-forest/70">
                    <span>🔒 HIPAA Compliant</span>
                    <span>⚡ Instant Submit</span>
                  </div>
                </div>

                <div className="relative h-[120px] w-full overflow-hidden rounded-2xl border border-midnight/10 bg-[#EAF0EA] p-2">
                  <SiteImage
                    image={media.product.glp1Hero}
                    fill
                    className="!object-contain !object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="340px"
                  />
                </div>
              </div>
            </Reveal>

            {/* Step 2 */}
            <Reveal
              delayMs={70}
              as="li"
              className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border-[2px] border-midnight bg-white p-6 shadow-[6px_6px_0_0_#1F2A37] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[8px_8px_0_0_#1F2A37] sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-midnight px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase">
                    Step 02
                  </span>
                  <span className="text-[11px] font-bold text-forest/70 uppercase tracking-wider">Board MD Review</span>
                </div>

                <h3 className="mt-5 font-[family-name:var(--font-dm-sans)] text-[1.25rem] font-bold text-midnight sm:text-[1.35rem]">
                  Provider evaluation
                </h3>

                <p className="mt-2.5 text-[13.5px] font-light leading-relaxed text-forest">
                  A board-certified US physician evaluates your intake, reviews labs if needed, and custom-tailors your precise protocol.
                </p>
              </div>

              <div className="mt-6">
                <div className="relative h-[185px] w-full overflow-hidden rounded-2xl border border-midnight/10 bg-[#F0F4F1]">
                  <SiteImage
                    image={media.lifestyle.physician1}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="340px"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-midnight/80 to-transparent" />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[10.5px] font-bold text-midnight backdrop-blur-md shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse" />
                    Dr. Board-Certified MD
                  </span>
                  <span className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-sage text-[12px] font-bold text-midnight shadow-xs">
                    ✓
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal
              delayMs={140}
              as="li"
              className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border-[2px] border-midnight bg-white p-6 shadow-[6px_6px_0_0_#1F2A37] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[8px_8px_0_0_#1F2A37] sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-midnight px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase">
                    Step 03
                  </span>
                  <span className="text-[11px] font-bold text-forest/70 uppercase tracking-wider">503A Express Ship</span>
                </div>

                <h3 className="mt-5 font-[family-name:var(--font-dm-sans)] text-[1.25rem] font-bold text-midnight sm:text-[1.35rem]">
                  Start treatment at home
                </h3>

                <p className="mt-2.5 text-[13.5px] font-light leading-relaxed text-forest">
                  If approved, your prescription is prepared through our licensed 503A pharmacy and delivered cold-chain with clear instructions.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <div className="relative h-[125px] w-full overflow-hidden rounded-2xl border border-midnight/10 bg-[#FAF8F5] p-2">
                  <SiteImage
                    image={media.product.peptideHero}
                    fill
                    className="!object-contain !object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="340px"
                  />
                  <span className="absolute top-2 right-2 rounded-md bg-midnight px-2 py-0.5 text-[9px] font-bold text-white">
                    Cold-Chain Packaging
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-midnight/10 bg-[#F4F7F4] px-3 py-2 text-[11px] font-medium text-midnight">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sage-dark">🚚</span>
                    <span className="font-bold">Express Shipment</span>
                  </div>
                  <span className="rounded bg-sage/20 px-2 py-0.5 text-[9.5px] font-bold text-sage-dark uppercase">
                    Active Tracking
                  </span>
                </div>
              </div>
            </Reveal>
          </ol>

          {/* Bottom Action Bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[22px] border-[2px] border-midnight bg-white px-6 py-4.5 shadow-[4px_4px_0_0_#1F2A37] sm:flex-row sm:px-8">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/20 text-[16px] text-midnight">
                ✦
              </span>
              <div>
                <p className="text-[14px] font-bold text-midnight">Ready to start your physician-directed protocol?</p>
                <p className="text-[12px] font-light text-forest">Online consult · California 503A when indicated</p>
              </div>
            </div>
            <Link
              href="/start"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border-[1.5px] border-midnight bg-sage px-7 text-[14.5px] font-bold text-midnight shadow-[3px_3px_0_0_#1F2A37] transition-all hover:bg-sage-light hover:-translate-y-0.5"
            >
              Start your intake — $125/mo →
            </Link>
          </div>

          {/* Physician Care Section — Text Outside Card, Standalone Image Card */}
          <div className="mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Text & Ratings (Outside Card) */}
            <div className="flex flex-col justify-center lg:col-span-7">
              {/* Ratings Strip: Google Search & Trustpilot */}
              <div className="flex flex-wrap items-center gap-3.5">
                {/* Google Search Rating Badge */}
                <div className="inline-flex items-center gap-3 rounded-2xl border-[1.5px] border-midnight bg-white px-4 py-2.5 shadow-[3.5px_3.5px_0_0_#1F2A37]">
                  <div className="flex h-8.5 w-8.5 items-center justify-center rounded-xl bg-[#4285F4] text-[15px] font-black text-white shadow-2xs">
                    G
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[12px] font-bold text-midnight">Google Rating</span>
                      <Stars value={5} size="xs" />
                    </div>
                    <p className="text-[11px] font-bold text-sage-dark">
                      4.9 ★★★★★ (1,450+ Patient Reviews)
                    </p>
                  </div>
                </div>

                {/* Trustpilot Rating Badge */}
                <div className="inline-flex items-center gap-3 rounded-2xl border-[1.5px] border-midnight bg-[#1F2A37] px-4 py-2.5 text-white shadow-[3.5px_3.5px_0_0_#1F2A37]">
                  <div className="flex h-8.5 w-8.5 items-center justify-center rounded-xl bg-[#00B67A] text-[14px] font-bold text-white shadow-2xs">
                    ★
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[12px] font-bold text-white">Trustpilot</span>
                      <Stars value={5} size="xs" />
                    </div>
                    <p className="text-[11px] font-medium text-white/90">
                      TrustScore 4.8 · 1,210 Reviews
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="mt-6 font-[family-name:var(--font-dm-sans)] text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-midnight">
                Physician-directed care{" "}
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-midnight bg-sage text-[18px] font-bold text-midnight shadow-xs align-middle">
                  +
                </span>{" "}
                built around your goals.
              </h2>

              <p className="mt-4 max-w-xl text-[16px] font-light leading-relaxed text-forest">
                Our dedicated medical teams guide patients through personalized metabolic, peptide, and hormone treatments — and we are ready to support you at every step.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-midnight/20 bg-white px-3.5 py-1.5 text-[12px] font-bold text-midnight shadow-xs">
                  <span className="text-sage-dark">✓</span> Board-Certified US Physicians
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-midnight/20 bg-white px-3.5 py-1.5 text-[12px] font-bold text-midnight shadow-xs">
                  <span className="text-sage-dark">✓</span> Licensed 503A Pharmacy
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-midnight/20 bg-white px-3.5 py-1.5 text-[12px] font-bold text-midnight shadow-xs">
                  <span className="text-sage-dark">✓</span> Ongoing Labs & Adjustments
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/start"
                  className="inline-flex h-12 items-center justify-center rounded-full border-[1.5px] border-midnight bg-sage px-8 text-[15px] font-bold text-midnight shadow-[4px_4px_0_0_#1F2A37] transition-all hover:bg-sage-light hover:-translate-y-0.5"
                >
                  Start your intake — $125/mo →
                </Link>
              </div>
            </div>

            {/* Right Column: Standalone Image Card with Small Writings Floating Over Image */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[32px] border-[2px] border-midnight bg-white shadow-[8px_8px_0_0_#1F2A37]">
                <div className="relative min-h-[380px] w-full sm:min-h-[460px]">
                  <SiteImage
                    image={media.ctaPortrait}
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="(max-width:1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-midnight/20 bg-white/95 px-3.5 py-1.5 text-[11.5px] font-bold text-midnight backdrop-blur-md shadow-xs">
                      <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
                      Active MD Care
                    </span>
                    <span className="rounded-full border border-midnight/20 bg-midnight/90 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                      California 503A
                    </span>
                  </div>

                  {/* Bottom Floating Writings inside Image Card */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/30 bg-white/95 p-4 backdrop-blur-md shadow-md">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[14px] font-bold text-midnight">Physician-Led Protocol</p>
                        <p className="text-[11.5px] font-medium text-forest">Personalized dosing · Ongoing lab oversight</p>
                      </div>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage text-[13px] font-bold text-midnight shadow-2xs">
                        ✓
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What people love — brand editorial testimonials */}
      <section className="bg-[#FAFBF9] py-16 sm:py-24">
        <div className="shell">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-midnight/20 bg-white px-3.5 py-1 text-[11px] font-bold tracking-wider text-midnight uppercase shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse" />
                ✦ Patient Voices & Feedback
              </span>
              <h2 className="mt-3.5 font-[family-name:var(--font-dm-sans)] text-[clamp(1.85rem,4.5vw,2.75rem)] font-bold tracking-tight text-midnight">
                What people love about{" "}
                <em className="font-[family-name:var(--font-dm-serif)] italic text-sage-dark">novimid</em>
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-[15px] font-light leading-relaxed text-forest">
                Physician-directed care and California compounding — described by patients in their own words.
              </p>
            </div>
          </Reveal>

          {/* Tab Navigation Pill Bar */}
          <div className="mx-auto mt-8 flex justify-center sm:mt-10">
            <div
              className="inline-flex w-full max-w-md items-center gap-1.5 rounded-full border-[2px] border-midnight bg-white p-1.5 shadow-[4px_4px_0_0_#1F2A37]"
              role="tablist"
              aria-label="Review topics"
            >
              {loveCategories.map((tab, i) => {
                const on = love === i;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setLove(i)}
                    className={`min-w-0 flex-1 rounded-full px-3.5 py-2 text-[12.5px] font-bold transition-all sm:px-4 sm:text-[13px] ${
                      on
                        ? "bg-midnight text-white shadow-xs"
                        : "bg-transparent text-midnight hover:bg-sage/20"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:mt-12 md:grid-cols-2">
            {activeLove.quotes.map((item, i) => (
              <Reveal
                key={`${activeLove.id}-${item.n}`}
                delayMs={i * 60}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border-[2px] border-midnight bg-white p-6.5 shadow-[5px_5px_0_0_#1F2A37] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[8px_8px_0_0_#1F2A37] sm:p-7.5"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className="font-[family-name:var(--font-dm-serif)] text-[3.2rem] leading-none text-sage-dark"
                      aria-hidden
                    >
                      “
                    </span>
                    <span className="rounded-full border border-midnight/20 bg-sage/20 px-3 py-1 text-[10.5px] font-bold tracking-wider text-sage-dark uppercase">
                      {item.focus}
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-[family-name:var(--font-dm-sans)] text-[1.25rem] font-bold leading-snug text-midnight sm:text-[1.35rem]">
                    {item.h}
                  </h3>
                  <p className="mt-3.5 text-[14.5px] font-normal leading-relaxed text-forest">
                    {item.q}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-midnight/12 pt-4.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-midnight bg-sage/20 text-[13px] font-bold text-midnight">
                      {item.n.slice(0, 1)}
                    </div>
                    <div>
                      <p className="text-[13.5px] font-bold text-midnight">{item.n}</p>
                      <p className="text-[11px] font-bold text-sage-dark">✓ Verified Patient</p>
                    </div>
                  </div>
                  <Stars size="sm" />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Trust Banner */}
          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 sm:mt-12">
            <div className="flex w-full flex-col items-stretch overflow-hidden rounded-full border-[2px] border-midnight bg-[#DCE8DD] shadow-[4px_4px_0_0_#1F2A37] sm:flex-row">
              <div className="flex flex-1 items-center justify-center gap-2.5 px-5 py-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-midnight font-bold shadow-xs">
                  <StarMark size="xs" />
                </span>
                <p className="text-[13px] font-bold text-midnight">
                  Physician-directed care
                </p>
              </div>
              <div className="hidden w-0.5 bg-midnight/20 sm:block" aria-hidden />
              <div className="flex flex-1 items-center justify-center gap-2.5 px-5 py-3 bg-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sage/20 text-midnight font-bold">
                  ✦
                </span>
                <p className="text-[13px] font-bold text-midnight">
                  California 503A Compounding
                </p>
              </div>
            </div>
            <p className="text-[11px] font-medium italic text-forest/70">
              Individual patient experiences and results may vary.
            </p>
          </div>
        </div>
      </section>

      <SpecialistsGrid />

      {/* 6. Why */}
      <section className="bg-white py-12 sm:py-16">
        <div className="shell">
          <Reveal>
            <h2 className="text-center font-[family-name:var(--font-dm-sans)] text-[clamp(1.65rem,3.5vw,2.35rem)] font-light tracking-[-0.02em] text-midnight">
              Why novimid?
            </h2>
          </Reveal>
          <Reveal>
            <WhyNovimidGrid />
          </Reveal>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-cloud py-14 sm:py-16 lg:py-20">
        <div className="shell max-w-[45rem]">
          <Reveal>
            <p className="text-center label-caps">FAQ</p>
            <h2 className="mt-3 text-center font-[family-name:var(--font-dm-sans)] text-[clamp(1.75rem,4vw,2.5rem)] font-light leading-[1.15] tracking-[-0.02em] text-midnight">
              Clear answers before you begin
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center text-[15px] font-light leading-relaxed text-forest">
              Telehealth, protocols, and California compounding — without the jargon.
            </p>
          </Reveal>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:gap-3.5">
            {faqPreview.map((item, i) => (
              <Reveal key={item.q} delayMs={i * 35}>
                <details className="group rounded-[12px] border-[0.5px] border-mist bg-white open:border-sage/40">
                  <summary className="cursor-pointer list-none px-5 py-4 marker:content-none sm:px-6 sm:py-[1.15rem] [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      <span className="font-[family-name:var(--font-dm-sans)] text-[15px] font-light tracking-[-0.01em] text-midnight sm:text-[16px]">
                        {item.q}
                      </span>
                      <span
                        className="faq-toggle flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[0.5px] border-mist font-[family-name:var(--font-dm-sans)] text-[18px] leading-none text-midnight transition-colors group-open:border-sage group-open:bg-sage group-open:text-white"
                        aria-hidden
                      >
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">×</span>
                      </span>
                    </span>
                  </summary>
                  <div className="border-t-[0.5px] border-mist px-5 pt-3 pb-5 sm:px-6">
                    <p className="faq-answer font-[family-name:var(--font-dm-sans)] text-[14px] font-light leading-relaxed text-forest sm:text-[15px]">
                      {item.a}
                    </p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 font-[family-name:var(--font-dm-sans)] text-[15px] font-light text-midnight underline-offset-4 transition-colors hover:text-sage hover:underline"
            >
              See all FAQs
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <ReviewsStrip />

      {/* 8. Closing CTA — Text Outside Card, Standalone Image Card */}
      <section className="bg-[#FAFBF9] px-[var(--gutter)] py-16 sm:py-24">
        <div className="shell">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Text & Ratings Outside Card */}
            <div className="flex flex-col justify-center lg:col-span-7">
              {/* Ratings Strip: Google & Trustpilot */}
              <div className="flex flex-wrap items-center gap-3.5">
                {/* Google Search Rating Badge */}
                <div className="inline-flex items-center gap-3 rounded-2xl border-[1.5px] border-midnight bg-white px-4 py-2.5 shadow-[3.5px_3.5px_0_0_#1F2A37]">
                  <div className="flex h-8.5 w-8.5 items-center justify-center rounded-xl bg-[#4285F4] text-[15px] font-black text-white shadow-2xs">
                    G
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[12px] font-bold text-midnight">Google Rating</span>
                      <Stars value={5} size="xs" />
                    </div>
                    <p className="text-[11px] font-bold text-sage-dark">
                      4.9 ★★★★★ (1,450+ Patient Reviews)
                    </p>
                  </div>
                </div>

                {/* Trustpilot Rating Badge */}
                <div className="inline-flex items-center gap-3 rounded-2xl border-[1.5px] border-midnight bg-[#1F2A37] px-4 py-2.5 text-white shadow-[3.5px_3.5px_0_0_#1F2A37]">
                  <div className="flex h-8.5 w-8.5 items-center justify-center rounded-xl bg-[#00B67A] text-[14px] font-bold text-white shadow-2xs">
                    ★
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[12px] font-bold text-white">Trustpilot</span>
                      <Stars value={5} size="xs" />
                    </div>
                    <p className="text-[11px] font-medium text-white/90">
                      TrustScore 4.8 · 1,210 Reviews
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="mt-6 font-[family-name:var(--font-dm-sans)] text-[clamp(2.2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-midnight">
                Personalized protocols,{" "}
                <em className="font-[family-name:var(--font-dm-serif)] italic text-sage-dark">
                  built around your goals
                </em>
              </h2>

              <p className="mt-4 max-w-xl text-[16px] font-light leading-relaxed text-forest">
                Board-certified physicians. Compounded protocols when indicated. Direct temperature-controlled delivery. Fully online.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-midnight/20 bg-white px-3.5 py-1.5 text-[12px] font-bold text-midnight shadow-xs">
                  <span className="text-sage-dark">✓</span> Licensed Telehealth
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-midnight/20 bg-white px-3.5 py-1.5 text-[12px] font-bold text-midnight shadow-xs">
                  <span className="text-sage-dark">✓</span> 503A Pharmacy Fulfillment
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-midnight/20 bg-white px-3.5 py-1.5 text-[12px] font-bold text-midnight shadow-xs">
                  <span className="text-sage-dark">✓</span> Cold-Chain Express Shipping
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/start"
                  className="inline-flex h-12 items-center justify-center rounded-full border-[1.5px] border-midnight bg-sage px-8 text-[15px] font-bold text-midnight shadow-[4px_4px_0_0_#1F2A37] transition-all hover:bg-sage-light hover:-translate-y-0.5"
                >
                  Start your intake — $125/mo →
                </Link>
                <Link
                  href="/treatments"
                  className="inline-flex h-12 items-center justify-center rounded-full border-[1.5px] border-midnight bg-white px-7 text-[15px] font-bold text-midnight shadow-[3px_3px_0_0_#1F2A37] transition-all hover:bg-cloud hover:-translate-y-0.5"
                >
                  Explore treatments →
                </Link>
              </div>
            </div>

            {/* Right Column: Standalone Card for NEW Lifestyle Image with Small Writings */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[32px] border-[2px] border-midnight bg-white shadow-[8px_8px_0_0_#1F2A37]">
                <div className="relative min-h-[380px] w-full sm:min-h-[460px]">
                  <SiteImage
                    image={media.closingCtaLifestyle}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width:1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-midnight/20 bg-white/95 px-3.5 py-1.5 text-[11.5px] font-bold text-midnight backdrop-blur-md shadow-xs">
                      <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
                      Physician-Directed Care
                    </span>
                    <span className="rounded-full border border-midnight/20 bg-midnight/90 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                      Licensed 503A
                    </span>
                  </div>

                  {/* Bottom Floating Writings inside Image Card */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/30 bg-white/95 p-4 backdrop-blur-md shadow-md">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[14px] font-bold text-midnight">Individualized Care Plan</p>
                        <p className="text-[11.5px] font-medium text-forest">Temperature-controlled express delivery</p>
                      </div>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage text-[13px] font-bold text-midnight shadow-2xs">
                        ✓
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
