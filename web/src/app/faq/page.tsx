import type { Metadata } from "next";
import Link from "next/link";
import { FaqExplorer } from "@/components/FaqExplorer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Novimid programs, intake, pricing, compounding, and cancellations.",
};

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-mist bg-white">
        <div className="shell py-14 sm:py-16 md:py-20">
          <Reveal>
            <nav className="mb-5 flex items-center gap-2 text-[13px] font-light text-forest" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-midnight">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-midnight">FAQ</span>
            </nav>
            <p className="label-caps">FAQ</p>
            <h1 className="mt-3 max-w-2xl font-[family-name:var(--font-dm-serif)] text-[clamp(2rem,4.5vw,3rem)] font-normal leading-[1.08] tracking-[-0.02em] text-midnight">
              Frequently asked
            </h1>
            <p className="mt-4 max-w-xl text-[15px] font-light leading-relaxed text-forest sm:text-[16px]">
              Six of the questions people ask most — plus intake, pricing, and policy
              details. Purchasing does not guarantee a prescription.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/start"
                className="inline-flex h-11 items-center justify-center rounded-full bg-sage px-7 text-[14px] font-medium text-white transition-colors hover:bg-[#5F8165]"
              >
                Get started
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex h-11 items-center justify-center rounded-full border border-mist bg-cloud px-7 text-[14px] font-medium text-midnight transition-colors hover:border-sage/40"
              >
                How it works
              </Link>
            </div>
          </Reveal>
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
