"use client";

import Link from "next/link";
import { faqPreview } from "@/lib/content";
import { media } from "@/lib/media";
import { ClinicalProcess } from "./ClinicalProcess";
import { PersonalizedTreatments } from "./PersonalizedTreatments";
import { Reveal } from "./Reveal";
import { SiteImage } from "./SiteImage";
import { SpecialistsGrid } from "./SpecialistsGrid";
import { WhyNovimidGrid } from "./WhyNovimid";

export function HomeSections() {
  return (
    <>
      <PersonalizedTreatments />

      <ClinicalProcess />

      <section className="bg-[#FAFBF9] py-16 sm:py-24">
        <div className="shell">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="text-[13px] font-medium leading-relaxed text-forest">
                Physician-directed telehealth · Prescription only when clinically appropriate
              </p>

              <h2 className="mt-6 font-[family-name:var(--font-dm-sans)] text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-midnight">
                Physician-directed care{" "}
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-midnight bg-sage text-[18px] font-bold text-midnight shadow-xs align-middle">
                  +
                </span>{" "}
                built around your goals.
              </h2>

              <p className="mt-4 max-w-xl text-[16px] font-light leading-relaxed text-forest">
                Our dedicated medical teams guide patients through personalized Semaglutide and Tirzepatide weight management programs — and we are ready to support you at every step.
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
                  See if I qualify →
                </Link>
              </div>
            </div>

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

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-midnight/20 bg-white/95 px-3.5 py-1.5 text-[11.5px] font-bold text-midnight backdrop-blur-md shadow-xs">
                      <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
                      Active MD Care
                    </span>
                    <span className="rounded-full border border-midnight/20 bg-midnight/90 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                      California 503A
                    </span>
                  </div>

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

      <SpecialistsGrid />

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

      <section className="bg-[#FAFBF9] px-[var(--gutter)] py-16 sm:py-24">
        <div className="shell">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="text-[13px] font-medium leading-relaxed text-forest">
                Physician-directed telehealth · Prescription only when clinically appropriate
              </p>

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
                  See if I qualify →
                </Link>
                <Link
                  href="/treatments"
                  className="inline-flex h-12 items-center justify-center rounded-full border-[1.5px] border-midnight bg-white px-7 text-[15px] font-bold text-midnight shadow-[3px_3px_0_0_#1F2A37] transition-all hover:bg-cloud hover:-translate-y-0.5"
                >
                  Explore treatments →
                </Link>
              </div>
            </div>

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

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-midnight/20 bg-white/95 px-3.5 py-1.5 text-[11.5px] font-bold text-midnight backdrop-blur-md shadow-xs">
                      <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
                      Physician-Directed Care
                    </span>
                    <span className="rounded-full border border-midnight/20 bg-midnight/90 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                      Licensed 503A
                    </span>
                  </div>

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
