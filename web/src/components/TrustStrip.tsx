import { ComplianceTrustBar } from "./LegitScriptBadge";
import { Reveal } from "./Reveal";

export function TrustStrip() {
  return (
    <section className="border-b border-midnight/15 bg-[#FAFBF9] py-4 sm:py-5">
      <div className="shell">
        <Reveal>
          <ComplianceTrustBar />
        </Reveal>
      </div>
    </section>
  );
}
