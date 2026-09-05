import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Compounding disclosure",
  description:
    "Information about 503A compounding and compounded medications offered through novimid.",
};

export default function CompoundingDisclosurePage() {
  redirect("/policies/fda-and-medical-disclaimer");
}
