"use client";

import Link from "next/link";
import { faqExtended, faqHowItWorksCopy } from "@/lib/content";
import { howWhy } from "@/lib/how-it-works";
import { media } from "@/lib/media";
import { FaqAccordion } from "./FaqAccordion";
import { HowItWorksStickySteps } from "./HowItWorksStickySteps";
import { Reveal } from "./Reveal";
import { SiteImage } from "./SiteImage";

export function HowItWorksFlow() {
  return (
    <div>
      <HowItWorksStickySteps />

      {/* Care path — clear numbered steps */}
      <section className="bg-cloud py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="label-caps">Care path</p>
              <h2 className="mt-3 font-[family-name:var(--font-dm-sans)] text-[clamp(1.85rem,4.5vw,2.75rem)] font-light leading-[1.1] tracking-[-0.03em] text-midnight">
                From first intake to ongoing care
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] font-light leading-relaxed text-forest sm:text-[16px]">
                Four accountable steps — structured for clarity, safety, and licensed-provider
                oversight. Completing intake does not guarantee a prescription.
              </p>
            </div>
          </Reveal>

          <ol className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "1",
                title: "Share your clinical picture",
                body: "Complete a secure intake so review starts with your history and goals — not a sales quiz.",
              },
              {
                n: "2",
                title: "Licensed-provider review",
                body: "An independent clinician evaluates fit, orders labs when indicated, and decides next steps.",
              },
              {
                n: "3",
                title: "Pharmacy when prescribed",
                body: "If treatment is appropriate, medication is prepared through licensed U.S. pharmacies.",
              },
              {
                n: "4",
                title: "Ongoing follow-through",
                body: "Stay connected with your care team so dosing and follow-up remain accountable over time.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delayMs={i * 70} as="li">
                <article className="flex h-full flex-col rounded-[16px] border border-mist bg-white p-6 sm:p-7">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-sage font-[family-name:var(--font-dm-sans)] text-[14px] font-medium text-white">
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-dm-sans)] text-[1.1rem] font-normal leading-snug tracking-[-0.01em] text-midnight sm:text-[1.15rem]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-light leading-relaxed text-forest sm:text-[15px]">
                    {step.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ol>
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
        <div className="shell">
          <div className="overflow-hidden rounded-[24px] border border-mist bg-white sm:rounded-[28px]">
            <div className="grid lg:grid-cols-2">
              <div className="media-frame relative min-h-[240px] sm:min-h-[320px]">
                <SiteImage
                  image={media.lifestyle.physician}
                  fill
                  className="object-cover object-[center_30%]"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="label-caps">Ongoing care</p>
                <h2 className="mt-3 text-[clamp(1.4rem,3vw,1.85rem)] font-light tracking-tight text-midnight">
                  Stay supported after you begin
                </h2>
                <ul className="mt-5 space-y-3">
                  {[
                    "Message your care team when questions come up",
                    "Adjust your protocol when clinically appropriate",
                    "Keep follow-up clear and accountable",
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
                  className="mt-7 inline-flex h-12 w-fit items-center justify-center rounded-full bg-sage px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#5F8165]"
                >
                  Start your protocol
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="shell grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-[clamp(2rem,4vw,2.75rem)] font-normal leading-[1.08] tracking-[-0.02em] text-midnight">
              {faqHowItWorksCopy.title}
            </h2>
            <p className="mt-3.5 max-w-[34ch] text-[1.02rem] font-light leading-[1.65] text-forest">
              {faqHowItWorksCopy.intro}
            </p>
            <Link
              href="/faq"
              className="mt-3.5 inline-flex text-[0.98rem] font-semibold text-midnight underline decoration-midnight/35 underline-offset-[3px] transition-colors hover:text-sage hover:decoration-current"
            >
              {faqHowItWorksCopy.link}
            </Link>
          </Reveal>
          <Reveal delayMs={80}>
            <FaqAccordion items={faqExtended} />
          </Reveal>
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
