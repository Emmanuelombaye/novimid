import type { Metadata } from "next";
import Link from "next/link";
import { YuccaTreatmentsPage } from "@/components/YuccaTreatmentsPage";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore physician-directed treatments from novimid — GLP-1 care, peptide therapy, and TRT when clinically appropriate. Licensed 503A compounding.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsPage() {
  return (
    <>
      <YuccaTreatmentsPage />

      <section className="border-t-[0.5px] border-mist bg-cloud py-10">
        <div className="shell max-w-3xl text-center">
          <p className="text-[13px] font-light leading-relaxed text-forest">
            Compounded medications are not FDA-approved drug products. They are prepared
            for individual patients pursuant to a valid prescription through our licensed
            503A compounding pharmacy when clinically indicated.{" "}
            <Link
              href="/compounding-disclosure"
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
