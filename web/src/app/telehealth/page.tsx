import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Telehealth",
  description: "novimid telehealth disclosures and care notices.",
};

export default function TelehealthPage() {
  redirect("/policies/consent-to-telehealth");
}
