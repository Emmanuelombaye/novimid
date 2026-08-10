import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Telehealth",
  description: "novimid telehealth disclosures and care notices.",
};

export default function TelehealthPage() {
  return (
    <LegalPage label="Legal" title="Telehealth disclosure">
      <p>
        novimid offers telehealth consultations with licensed clinicians where
        permitted. Telehealth has limitations compared with in-person care, including
        constraints on physical examination and technology requirements.
      </p>
      <p>
        Prescribing of controlled substances and other therapies via telemedicine must
        follow current DEA and state rules. Eligibility is determined by your
        physician.
      </p>
      <p>
        Emergency care should be sought through local emergency services. This
        disclosure will be replaced with jurisdiction-specific language after legal and
        clinical review.
      </p>
    </LegalPage>
  );
}
