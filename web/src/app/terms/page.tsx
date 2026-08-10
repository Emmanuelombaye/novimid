import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "novimid website terms of use.",
};

export default function TermsPage() {
  return (
    <LegalPage label="Legal" title="Terms of use">
      <p>
        By using this website you agree to these terms. The site provides general
        information about physician-directed health optimization and does not create a
        physician-patient relationship by itself.
      </p>
      <p>
        Clinical services, prescribing, and compounding are subject to eligibility,
        applicable law, and separate patient agreements presented during intake and
        care.
      </p>
      <p>
        Content on this site is for informational purposes and may be updated. Final
        terms will be supplied by counsel before public launch.
      </p>
    </LegalPage>
  );
}
