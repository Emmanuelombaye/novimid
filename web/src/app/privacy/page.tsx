import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "novimid privacy practices overview.",
};

export default function PrivacyPage() {
  return (
    <LegalPage label="Legal" title="Privacy">
      <p>
        novimid respects patient privacy. This page will describe how personal and
        health information is collected, used, stored, and shared in connection with
        our website, intake, telehealth services, and pharmacy fulfillment.
      </p>
      <p>
        Health information handled in clinical care is subject to applicable privacy
        laws, including HIPAA where it applies. Marketing-site analytics should be
        configured with consent and minimum necessary data collection.
      </p>
      <p>
        Contact details for privacy requests and the effective date of the final policy
        will be published here after legal review.
      </p>
    </LegalPage>
  );
}
