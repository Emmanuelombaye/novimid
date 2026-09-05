import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Terms",
  description: "novimid website terms of use.",
};

export default function TermsPage() {
  redirect("/policies/terms-of-use");
}
