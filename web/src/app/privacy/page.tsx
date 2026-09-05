import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Privacy",
  description: "novimid privacy practices overview.",
};

export default function PrivacyPage() {
  redirect("/policies/privacy-policy");
}
