import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Compounding disclosure",
  description:
    "Information about 503A compounding and compounded medications offered through novimid.",
};

export default function CompoundingDisclosurePage() {
  return (
    <LegalPage label="Legal" title="Compounding disclosure">
      <p>
        When clinically indicated, prescriptions may be prepared by a licensed 503A
        compounding pharmacy for an individual patient pursuant to a valid
        prescription.
      </p>
      <p>
        Compounded medications are not FDA-approved drug products. Marketing and
        clinical communications use language consistent with compounding-eligible
        status — never FDA-approved drug claims.
      </p>
      <p>
        Specific formulations are discussed in clinical context. Patient-facing
        marketing leads with physician-directed optimization rather than individual
        compound names. Regulatory status of certain bulk substances may change; copy
        must be kept current with counsel and pharmacy compliance.
      </p>
    </LegalPage>
  );
}
