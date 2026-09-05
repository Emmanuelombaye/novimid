"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";

const programs = [
  {
    id: "semaglutide",
    label: "Weight Management",
    title: "Semaglutide",
    body: "Weekly physician-directed care for appetite regulation and steady progress — prescribed only when clinically appropriate.",
    vial: "/images/card-vial-semaglutide.png",
    vialAlt: "Semaglutide injectable solution vial",
    stage: "bg-[#E7F0E8]",
  },
  {
    id: "tirzepatide",
    label: "Weight Management",
    title: "Tirzepatide",
    body: "Weekly physician-directed dual-pathway support — reviewed by a licensed clinician before any prescription is issued.",
    vial: "/images/card-vial-tirzepatide.png",
    vialAlt: "Tirzepatide injectable solution vial",
    stage: "bg-[#EAF2EC]",
  },
] as const;

/**
 * Homepage treatments — two separate program cards, one vial each.
 */
export function PersonalizedTreatments() {
  return (
    <section
      id="treatments"
      className="relative scroll-mt-20 bg-white pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20"
    >
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-[40rem] text-center">
            <p className="label-caps">Programs</p>
            <h2 className="mt-3 font-[family-name:var(--font-dm-sans)] text-[clamp(1.85rem,4.5vw,2.65rem)] font-medium leading-[1.1] tracking-[-0.03em] text-midnight">
              Two clear programs.
              <br className="hidden sm:block" />{" "}
              One clinical standard.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] font-light leading-relaxed text-forest sm:text-[16px]">
              Semaglutide or Tirzepatide — each shown separately, each reviewed by a
              licensed clinician. Completing intake does not guarantee a prescription.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
          {programs.map((program, i) => (
            <Reveal key={program.id} delayMs={i * 90}>
              <article className="flex h-full flex-col rounded-[24px] border border-mist bg-cloud/40 p-6 sm:rounded-[28px] sm:p-7">
                <span className="w-fit rounded-full border border-mist bg-white px-3 py-1 text-[12px] font-normal text-forest">
                  {program.label}
                </span>

                <div
                  className={`relative mx-auto mt-5 aspect-square w-full max-w-[15rem] overflow-hidden rounded-[20px] ${program.stage}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={program.vial}
                    alt={program.vialAlt}
                    className="h-full w-full object-contain object-center p-5 sm:p-6"
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>

                <h3 className="mt-6 font-[family-name:var(--font-dm-sans)] text-[1.45rem] font-medium leading-tight tracking-[-0.02em] text-midnight sm:text-[1.6rem]">
                  {program.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[14px] font-light leading-relaxed text-forest sm:text-[15px]">
                  {program.body}
                </p>

                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <Link
                    href={`/start?treatment=${program.id}`}
                    className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-sage px-5 text-[14px] font-medium text-white transition-colors hover:bg-[#5F8165]"
                  >
                    Start clinical intake
                  </Link>
                  <Link
                    href="/treatments"
                    className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-midnight/25 bg-white px-5 text-[14px] font-medium text-midnight transition-colors hover:border-midnight"
                  >
                    Learn more
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
