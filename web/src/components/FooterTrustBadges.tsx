import Link from "next/link";

const TRUST_BADGE_CSS = `
.brand-footer-trust {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
  justify-items: center;
  gap: 1.5rem 2rem;
  max-width: 52rem;
  margin: 2rem auto 0;
  padding: 1.75rem 0.5rem 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.brand-footer-trust--light {
  border-top-color: rgba(44, 58, 53, 0.12);
}
.brand-footer-trust__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  width: 100%;
  max-width: 14rem;
  color: inherit;
  text-decoration: none;
  text-align: center;
}
.brand-footer-trust__badge {
  display: block;
  width: 8.25rem;
  height: 8.25rem;
  flex: none;
  object-fit: contain;
  filter: drop-shadow(0 14px 28px rgba(0, 0, 0, 0.18));
  transition: transform 0.2s ease, filter 0.2s ease;
}
.brand-footer-trust__item--link:hover .brand-footer-trust__badge,
.brand-footer-trust__item--link:focus-visible .brand-footer-trust__badge {
  transform: translateY(-2px) scale(1.02);
  filter: drop-shadow(0 18px 32px rgba(107, 143, 113, 0.28));
}
.brand-footer-trust__copy {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}
.brand-footer-trust__kicker {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(196, 204, 216, 0.78);
}
.brand-footer-trust--light .brand-footer-trust__kicker,
.brand-footer-trust__item--light .brand-footer-trust__kicker {
  color: rgba(44, 58, 53, 0.5);
}
.brand-footer-trust__title {
  font-family: var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 1.3;
  color: #fff;
}
.brand-footer-trust--light .brand-footer-trust__title,
.brand-footer-trust__item--light .brand-footer-trust__title {
  color: #2c3a35;
}
.brand-footer-trust__sub {
  display: block;
  font-weight: 600;
  font-size: 0.98rem;
  letter-spacing: 0.02em;
  line-height: 1.25;
  color: #fff;
}
.brand-footer-trust--light .brand-footer-trust__sub,
.brand-footer-trust__item--light .brand-footer-trust__sub {
  color: #2c3a35;
}
.brand-footer-trust__item--link:hover .brand-footer-trust__title {
  text-decoration: underline;
  text-underline-offset: 4px;
}
@media (max-width: 640px) {
  .brand-footer-trust {
    margin-top: 1rem;
    padding-top: 1rem;
    gap: 0.75rem 0.4rem;
    max-width: 100%;
  }
  .brand-footer-trust__item {
    max-width: none;
    gap: 8px;
  }
  .brand-footer-trust__badge {
    width: 5.1rem;
    height: 5.1rem;
  }
  .brand-footer-trust__kicker {
    font-size: 8px;
    letter-spacing: 0.1em;
  }
  .brand-footer-trust__title {
    font-size: 0.78rem;
  }
  .brand-footer-trust__sub {
    font-size: 0.74rem;
  }
}
`;

type FooterTrustBadgesProps = {
  hipaaHref?: string;
  providerNetworkHref?: string;
  tone?: "dark" | "light";
  layout?: "row" | "items";
};

function TrustItems({
  hipaaHref,
  providerNetworkHref,
  tone,
}: {
  hipaaHref?: string;
  providerNetworkHref?: string;
  tone: "dark" | "light";
}) {
  const itemClass = `brand-footer-trust__item${tone === "light" ? " brand-footer-trust__item--light" : ""}`;

  const providerBody = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/footer-provider-network.svg"
        alt=""
        width={220}
        height={220}
        className="brand-footer-trust__badge"
        loading="lazy"
        decoding="async"
      />
      <span className="brand-footer-trust__copy">
        <span className="brand-footer-trust__kicker">Clinical services via</span>
        <span className="brand-footer-trust__title">Provider Network</span>
      </span>
    </>
  );

  const usaBody = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/footer-usa-pharmacies.svg"
        alt=""
        width={220}
        height={220}
        className="brand-footer-trust__badge"
        loading="lazy"
        decoding="async"
      />
      <span className="brand-footer-trust__copy">
        <span className="brand-footer-trust__kicker">Compounded by</span>
        <span className="brand-footer-trust__title">Licensed Pharmacies in the USA</span>
      </span>
    </>
  );

  const hipaaBody = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/footer-hipaa-notice.svg"
        alt=""
        width={220}
        height={220}
        className="brand-footer-trust__badge"
        loading="lazy"
        decoding="async"
      />
      <span className="brand-footer-trust__copy">
        <span className="brand-footer-trust__kicker">Data protected</span>
        <span className="brand-footer-trust__title">HIPAA</span>
        <span className="brand-footer-trust__sub">Compliant</span>
      </span>
    </>
  );

  return (
    <>
      {providerNetworkHref ? (
        <Link href={providerNetworkHref} className={`${itemClass} brand-footer-trust__item--link`}>
          {providerBody}
        </Link>
      ) : (
        <div className={itemClass}>{providerBody}</div>
      )}
      <div className={itemClass} aria-label="Compounded by licensed pharmacies in the USA">
        {usaBody}
      </div>
      {hipaaHref ? (
        <Link href={hipaaHref} className={`${itemClass} brand-footer-trust__item--link`}>
          {hipaaBody}
        </Link>
      ) : (
        <div className={itemClass}>{hipaaBody}</div>
      )}
    </>
  );
}

/** Provider Network · USA pharmacies · HIPAA trust badges. */
export function FooterTrustBadges({
  hipaaHref = "/privacy",
  providerNetworkHref = "/providers",
  tone = "dark",
  layout = "row",
}: FooterTrustBadgesProps) {
  const items = (
    <TrustItems hipaaHref={hipaaHref} providerNetworkHref={providerNetworkHref} tone={tone} />
  );

  return (
    <>
      <style>{TRUST_BADGE_CSS}</style>
      {layout === "items" ? (
        items
      ) : (
        <div className={`brand-footer-trust brand-footer-trust--${tone}`} aria-label="Trust and compliance">
          {items}
        </div>
      )}
    </>
  );
}
