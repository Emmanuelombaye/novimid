import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SpecialistsGrid } from "@/components/SpecialistsGrid";

export const metadata: Metadata = {
  title: "Providers",
  description:
    "Board-certified physicians who design evidence-based protocols with genuine clinical oversight.",
};

export default function ProvidersPage() {
  return (
    <>
      <section className="border-b-[0.5px] border-mist bg-white pt-12 pb-2 sm:pt-16">
        <div className="shell">
          <Reveal>
            <p className="label-caps text-center">Providers</p>
            <p className="mx-auto mt-3 max-w-xl text-center text-[15px] font-light text-forest">
              Physician-directed care across metabolic, peptide, and hormone protocols.
            </p>
          </Reveal>
        </div>
      </section>

      <SpecialistsGrid showProviderLink={false} />

      <section className="bg-white pb-14 sm:pb-20">
        <div className="flex justify-center px-[var(--gutter)]">
          <Link
            href="/start"
            className="inline-flex h-12 items-center justify-center rounded-full bg-sage px-7 text-[15px] font-light text-white transition-colors hover:bg-sage-mid"
          >
            Start your consult
          </Link>
        </div>
      </section>
    </>
  );
}
