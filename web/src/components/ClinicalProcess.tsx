"use client";

import Link from "next/link";
import { media, type SiteImage as MediaAsset } from "@/lib/media";
import { Reveal } from "./Reveal";
import { SiteImage } from "./SiteImage";

const stages: {
  n: string;
  phase: string;
  title: string;
  body: string;
  image: MediaAsset;
  tone: string;
}[] = [
  {
    n: "01",
    phase: "Intake",
    title: "Share your clinical picture",
    body: "A structured medical questionnaire captures goals, history, and relevant context — so review starts with clarity, not a sales quiz.",
    image: {
      src: "/images/how-step2.jpg",
      alt: "Secure clinical intake on a calm workspace",
      width: 1200,
      height: 900,
      quality: 78,
      sizes: "(max-width: 768px) 92vw, 32vw",
    },
    tone: "bg-[#E7F0E8]",
  },
  {
    n: "02",
    phase: "Review",
    title: "Physician-directed decisions",
    body: "A board-certified physician evaluates fit, orders labs when indicated, and designs a protocol around your biology — with oversight built in.",
    image: media.lifestyle.physician1,
    tone: "bg-[#EAF1EC]",
  },
  {
    n: "03",
    phase: "Fulfill",
    title: "Pharmacy to your door",
    body: "When clinically indicated, prescriptions are prepared through our licensed 503A pharmacy and shipped with clear instructions for safe start.",
    image: {
      src: "/images/pharmacy-craft.jpg",
      alt: "Licensed compounding pharmacy fulfillment",
      width: 1200,
      height: 900,
      quality: 78,
      sizes: "(max-width: 768px) 92vw, 32vw",
    },
    tone: "bg-[#EEF3EF]",
  },
];

/**
 * Homepage clinical pathway — editorial process spine with photography.
 * One job: show intake → physician → pharmacy as a clear, calm sequence.
 */
export function ClinicalProcess() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 8% 0%, rgba(197,213,176,0.45) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 92% 100%, rgba(107,143,113,0.14) 0%, transparent 50%), linear-gradient(180deg, #F7FAF7 0%, #EEF3EF 48%, #F7FAF7 100%)",
        }}
        aria-hidden
      />

      <div className="shell py-16 sm:py-20 lg:py-24">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <p className="text-[12px] font-normal tracking-[0.16em] text-sage uppercase">
              Clinical pathway
            </p>
            <h2 className="mt-3 max-w-[16ch] font-[family-name:var(--font-dm-sans)] text-[clamp(2rem,5.2vw,3.15rem)] font-light leading-[1.05] tracking-[-0.03em] text-midnight">
              Care that starts with{" "}
              <em className="font-[family-name:var(--font-dm-serif)] italic text-sage">
                clinical process
              </em>
            </h2>
          </Reveal>

          <Reveal delayMs={80} className="lg:col-span-5 lg:pb-1">
            <p className="max-w-md text-[15px] font-light leading-relaxed text-forest sm:text-[16px] lg:ml-auto lg:text-right">
              From intake through pharmacy fulfillment — structured steps designed
              for clarity, safety, and provider oversight.
            </p>
          </Reveal>
        </div>

        {/* Process spine */}
        <div className="relative mt-12 sm:mt-14">
          <div
            className="pointer-events-none absolute top-[42%] right-0 left-0 z-0 hidden h-px bg-gradient-to-r from-transparent via-sage/45 to-transparent lg:block"
            aria-hidden
          />

          <ol className="relative z-[1] grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-7">
            {stages.map((stage, i) => (
              <Reveal key={stage.n} delayMs={i * 100} as="li">
                <article className="group flex h-full flex-col">
                  <div
                    className={`relative overflow-hidden rounded-[28px] ${stage.tone} sm:rounded-[32px]`}
                  >
                    <div className="media-frame relative aspect-[4/5] sm:aspect-[5/6]">
                      <SiteImage
                        image={stage.image}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        sizes={stage.image.sizes ?? "(max-width:768px) 92vw, 32vw"}
                        priority={i === 0}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-midnight/55 via-midnight/10 to-transparent"
                        aria-hidden
                      />
                      <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-normal tracking-[0.08em] text-midnight uppercase backdrop-blur-sm">
                        <span className="tabular-nums text-sage">{stage.n}</span>
                        {stage.phase}
                      </span>
                      <p
                        className="pointer-events-none absolute right-3 bottom-2 select-none font-[family-name:var(--font-dm-sans)] text-[clamp(4.5rem,12vw,6.5rem)] leading-none font-light tracking-[-0.06em] text-white/15"
                        aria-hidden
                      >
                        {stage.n}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-1 flex-col px-1">
                    <div className="mb-3 flex items-center gap-3 lg:hidden">
                      <span className="h-px flex-1 bg-sage/30" aria-hidden />
                    </div>
                    <h3 className="font-[family-name:var(--font-dm-sans)] text-[1.35rem] font-normal leading-tight tracking-[-0.02em] text-midnight sm:text-[1.45rem]">
                      {stage.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[14px] font-light leading-relaxed text-forest sm:text-[15px]">
                      {stage.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delayMs={220} className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-midnight/10 pt-8 sm:mt-14 sm:flex-row sm:items-center">
          <p className="max-w-md text-[14px] font-light text-forest sm:text-[15px]">
            Clear steps. Licensed providers. California 503A compounding when indicated.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/start"
              className="inline-flex h-12 items-center justify-center rounded-full bg-sage px-7 text-[14px] font-normal text-white transition-colors hover:bg-[#5F8165]"
            >
              Start your intake
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-full border border-midnight/25 bg-white/70 px-6 text-[14px] font-normal text-midnight backdrop-blur-sm transition-colors hover:border-midnight hover:bg-white"
            >
              See full process
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
