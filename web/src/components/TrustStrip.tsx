import { FooterTrustBadges } from "./FooterTrustBadges";
import { Reveal } from "./Reveal";

/** Visible compliance strip — Provider Network · USA pharmacies · HIPAA */
export function TrustStrip() {
  return (
    <section className="border-b border-midnight/10 bg-white py-5 sm:py-6">
      <div className="shell">
        <Reveal>
          <FooterTrustBadges tone="light" hipaaHref="/privacy" providerNetworkHref="/providers" />
        </Reveal>
      </div>
    </section>
  );
}
