import type { Metadata } from "next";
import { FaqExplorer } from "@/components/FaqExplorer";
import { Reveal } from "@/components/Reveal";
import { StarMark } from "@/components/Stars";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about novimid telehealth, physician-directed protocols, and California 503A compounding.",
};

export default function FaqPage() {
  return (
    <>
      <section className="border-b-[0.5px] border-mist bg-cloud">
        <div className="shell py-14 sm:py-16 md:py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="label-caps">FAQ</p>
              <h1 className="mt-3 font-[family-name:var(--font-dm-sans)] text-[clamp(1.85rem,4.5vw,2.75rem)] font-light leading-[1.12] tracking-[-0.02em] text-midnight">
                Clear answers before you{" "}
                <em className="font-[family-name:var(--font-dm-serif)] italic">begin</em>
              </h1>
              <p className="mx-auto mt-4 max-w-lg text-[15px] font-light leading-relaxed text-forest sm:text-[16px]">
                Physician-directed care, telehealth, and California compounding — explained without
                jargon or hype.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-8 flex max-w-xl flex-col items-stretch overflow-hidden rounded-full border-[0.5px] border-mist bg-white sm:mt-10 sm:flex-row">
            <div className="flex flex-1 items-center justify-center gap-2.5 px-5 py-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-[0.5px] border-mist bg-cloud">
                <StarMark size="xs" />
              </span>
              <p className="text-[12px] font-light text-midnight sm:text-[13px]">
                Physician-directed care
              </p>
            </div>
            <div className="hidden w-px bg-mist sm:block" aria-hidden />
            <div className="flex flex-1 items-center justify-center gap-2.5 border-t-[0.5px] border-mist px-5 py-3 sm:border-t-0">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage text-[9px] font-light text-white">
                CA
              </span>
              <p className="text-[12px] font-light text-midnight sm:text-[13px]">
                California compounding
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud pb-16 sm:pb-20 lg:pb-24">
        <div className="shell pt-10 sm:pt-12">
          <FaqExplorer />
        </div>
      </section>
    </>
  );
}
