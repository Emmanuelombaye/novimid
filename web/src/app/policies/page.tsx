import type { Metadata } from "next";
import { PoliciesIndexPage } from "@/components/PoliciesIndexPage";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Novimid compliance documents: Telehealth Consent, HIPAA Notice, Terms of Use, Provider Network, Medical Disclaimer, and Privacy Policy.",
};

export default function PoliciesPage() {
  return <PoliciesIndexPage />;
}
