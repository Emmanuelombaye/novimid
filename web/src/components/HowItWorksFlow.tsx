"use client";

import Link from "next/link";
import { faqPreview } from "@/lib/content";
import { howWhy } from "@/lib/how-it-works";
import { media } from "@/lib/media";
import { HowItWorksStickySteps } from "./HowItWorksStickySteps";
import { Reveal } from "./Reveal";
import { SiteImage } from "./SiteImage";

export function HowItWorksFlow() {
  return (
    <div>
      <HowItWorksStickySteps />

      {/* Every Protocol Has A Story — Unique Interactive Journey Board */}
      <section className="bg-[#FAFBF9] py-16 sm:py-24">
        <div className="shell">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-midnight/20 bg-white px-3.5 py-1 text-[11px] font-bold tracking-wider text-midnight uppercase shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse" />
                ✦ Patient Care Milestones
              </span>
              <h2 className="mt-3.5 font-[family-name:var(--font-dm-sans)] text-[clamp(1.85rem,4.5vw,2.75rem)] font-bold tracking-tight text-midnight">
                Every protocol has a{" "}
                <em className="font-[family-name:var(--font-dm-serif)] italic text-sage-dark">
                  story
                </em>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] font-light leading-relaxed text-forest sm:text-[16px]">
                Physician-directed care, clear compounding language, and accountable follow-through.
              </p>
            </div>
          </Reveal>

          {/* Unique Milestone Journey Line */}
          <div className="mt-10 hidden items-center justify-between gap-4 rounded-full border-[1.5px] border-midnight bg-white p-2.5 shadow-[4px_4px_0_0_#1F2A37] lg:flex">
            {[
              { phase: "Phase 01", title: "Intake & Lab Review" },
              { phase: "Phase 02", title: "MD Consultation" },
              { phase: "Phase 03", title: "503A Compounding" },
              { phase: "Phase 04", title: "Ongoing Oversight" },
            ].map((step, idx) => (
              <div key={step.phase} className="flex flex-1 items-center justify-between px-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-midnight text-[11px] font-bold text-white">
                    0{idx + 1}
                  </span>
                  <div>
                    <p className="text-[10px] font-bold text-sage-dark uppercase tracking-wider">{step.phase}</p>
                    <p className="text-[12px] font-bold text-midnight">{step.title}</p>
                  </div>
                </div>
                {idx < 3 ? <span className="text-[14px] text-midnight/30">→</span> : null}
              </div>
            ))}
          </div>

          {/* Care journey milestones — no invented patient reviews */}
          <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                img: media.results[0],
                title: "Clinical intake",
                timeline: "Share history & goals",
                body: "A licensed clinician reviews your information before any treatment decision.",
                metric: "Intake",
                focus: "Eligibility first",
              },
              {
                step: "02",
                img: media.results[1],
                title: "Physician review",
                timeline: "Labs when indicated",
                body: "Recommendations are individualized. Completing intake does not guarantee a prescription.",
                metric: "Clinical review",
                focus: "Provider-led",
              },
              {
                step: "03",
                img: media.results[2],
                title: "Pharmacy fulfillment",
                timeline: "If prescribed",
                body: "When compounding is indicated, medications are prepared through licensed U.S. pharmacies.",
                metric: "503A when indicated",
                focus: "U.S. pharmacies",
              },
              {
                step: "04",
                img: media.closingCtaLifestyle,
                title: "Ongoing oversight",
                timeline: "Follow-up & adjustments",
                body: "Your care team stays involved so dosing and follow-up stay accountable over time.",
                metric: "Follow-up",
                focus: "Long-term care",
              },
            ].map((story, i) => (
              <Reveal
                key={story.title}
                delayMs={i * 60}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border-[2px] border-midnight bg-white shadow-[6px_6px_0_0_#1F2A37] transition-all duration-300 hover:-translate-y-2 hover:shadow-[9px_9px_0_0_#1F2A37]"
              >
                <div className="relative h-[220px] w-full overflow-hidden bg-[#FAFBF9]">
                  <SiteImage
                    image={story.img}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="300px"
                  />
                  <span className="absolute top-3 right-3 rounded-md border border-midnight/20 bg-white/95 px-2 py-0.5 text-[9.5px] font-bold text-midnight shadow-xs">
                    Phase {story.step}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="rounded-full bg-sage/20 px-2.5 py-0.5 text-[9.5px] font-bold text-sage-dark uppercase">
                        {story.metric}
                      </span>
                      <span className="text-[10px] font-bold text-forest/70 uppercase">
                        {story.focus}
                      </span>
                    </div>

                    <h3 className="mt-3 font-[family-name:var(--font-dm-sans)] text-[1.2rem] font-bold leading-snug text-midnight">
                      {story.title}
                    </h3>
                    <p className="mt-1 text-[11.5px] font-semibold text-sage-dark">
                      {story.timeline}
                    </p>

                    <p className="mt-3 text-[13px] font-normal leading-relaxed text-forest/90">
                      {story.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <Reveal>
          <h2 className="text-center text-[clamp(1.5rem,3.5vw,2rem)] font-normal tracking-tight text-midnight">
            Why novimid
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {howWhy.map((item, i) => (
            <Reveal
              key={item.title}
              delayMs={i * 70}
              className="overflow-hidden rounded-[24px] border-[0.5px] border-mist bg-white"
            >
              <div className="media-frame relative aspect-[4/3]">
                <SiteImage image={item.image} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-[1.05rem] font-normal text-midnight">{item.title}</h3>
                <p className="mt-2 text-[14px] font-light leading-relaxed text-forest">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="overflow-hidden rounded-[28px] border-[0.5px] border-midnight bg-cloud sm:rounded-[36px]">
          <div className="grid lg:grid-cols-2">
            <div className="media-frame relative min-h-[240px] sm:min-h-[300px]">
              <SiteImage
                image={media.lifestyle.physician}
                fill
                className="object-cover object-[center_18%]"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <h2 className="text-[clamp(1.4rem,3vw,1.85rem)] font-normal tracking-tight text-midnight">
                Exceptional experience is our priority
              </h2>
              <ul className="mt-5 space-y-3">
                {[
                  "Stay in touch with your physician",
                  "Update your protocol when clinically appropriate",
                  "Track follow-up with clear accountability",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[14px] font-light text-forest"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/start"
                className="btn-pill-primary mt-7 inline-flex h-12 w-fit items-center justify-center rounded-full bg-sage px-6 text-[15px] font-normal text-[#FFFFFF]"
              >
                Start your protocol
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <Reveal>
          <p className="label-caps text-center">FAQ</p>
          <h2 className="mx-auto mt-3 max-w-xl text-center font-[family-name:var(--font-dm-sans)] text-[clamp(1.5rem,3.5vw,2rem)] font-light tracking-[-0.02em] text-midnight">
            Clear answers before you begin
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-[14px] font-light text-forest sm:text-[15px]">
            Telehealth, protocols, and California compounding — without the jargon.
          </p>
        </Reveal>
        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3">
          {faqPreview.map((item, i) => (
            <Reveal key={item.q} delayMs={i * 40}>
              <details className="group rounded-[12px] border-[0.5px] border-mist bg-white open:border-sage/40">
                <summary className="cursor-pointer list-none px-5 py-4 marker:content-none sm:px-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    <span className="text-[15px] font-light text-midnight sm:text-[16px]">
                      {item.q}
                    </span>
                    <span
                      className="faq-toggle flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[0.5px] border-mist text-[18px] leading-none text-midnight transition-colors group-open:border-sage group-open:bg-sage group-open:text-white"
                      aria-hidden
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">×</span>
                    </span>
                  </span>
                </summary>
                <div className="border-t-[0.5px] border-mist px-5 pt-3 pb-5 sm:px-6">
                  <p className="faq-answer text-[14px] font-light leading-relaxed text-forest sm:text-[15px]">
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
            className="inline-flex items-center gap-1.5 text-[15px] font-light text-midnight underline-offset-4 transition-colors hover:text-sage hover:underline"
          >
            See all FAQs
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="overflow-hidden rounded-[28px] border-[0.5px] border-midnight sm:rounded-[36px]">
        <div className="grid lg:grid-cols-2">
          <div className="media-frame relative min-h-[260px] bg-midnight sm:min-h-[320px]">
            <SiteImage
              image={media.ctaPortrait}
              fill
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="flex flex-col justify-center bg-midnight px-6 py-10 text-white sm:px-10">
            <p className="label-caps !text-sage-mist">Begin care</p>
            <h2 className="mt-3 text-[clamp(1.5rem,3vw,2rem)] font-light tracking-tight text-white">
              Ready for a physician-led plan?
            </h2>
            <p className="mt-4 text-[15px] font-light leading-relaxed text-cloud">
              Start intake. Meet your physician. Build a protocol around your labs.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/start"
                className="btn-pill-primary inline-flex h-12 items-center justify-center rounded-full bg-sage px-6 text-[15px] font-normal text-[#FFFFFF]"
              >
                Start your protocol
              </Link>
              <Link
                href="/treatments"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-[15px] font-normal text-midnight"
              >
                Explore treatments
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
