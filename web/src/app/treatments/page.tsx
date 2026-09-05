import type { Metadata } from "next";
import Link from "next/link";
import { TreatmentsView } from "@/components/TreatmentsView";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore physician-directed Semaglutide and Tirzepatide weight management programs from novimid when clinically appropriate. Licensed 503A compounding. Completing intake does not guarantee a prescription.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsPage() {
  return (
    <>
      <TreatmentsView />

      <section className="border-t-[0.5px] border-mist bg-cloud py-10">
        <div className="shell max-w-3xl text-center">
          <p className="text-[13px] font-light leading-relaxed text-forest">
            Compounded medications are not FDA-approved drug products. They are prepared
            for individual patients pursuant to a valid prescription through our licensed
            503A compounding pharmacy when clinically indicated.{" "}
            <Link
              href="/policies/fda-and-medical-disclaimer"
              className="text-sage underline-offset-4 hover:underline"
            >
              Compounding disclosure
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
