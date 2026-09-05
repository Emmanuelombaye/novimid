import Link from "next/link";

const TRUST_BADGE_CSS = `
.brand-footer-trust {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem 3rem;
  max-width: 52rem;
  margin: 2.5rem auto 0;
  padding: 2rem 0.5rem 0.25rem;
  border-top: 1px solid rgba(44, 58, 53, 0.12);
}
.brand-footer-trust__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.85rem;
  width: 100%;
  max-width: 13.5rem;
  color: inherit;
  text-decoration: none;
  text-align: center;
}
.brand-footer-trust__badge {
  display: block;
  width: 5.5rem;
  height: 5.5rem;
  flex: none;
  object-fit: contain;
  border-radius: 50%;
  background: #fff;
  box-shadow:
    0 0 0 1px rgba(44, 58, 53, 0.1),
    0 10px 28px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.brand-footer-trust__item--link:hover .brand-footer-trust__badge,
.brand-footer-trust__item--link:focus-visible .brand-footer-trust__badge {
  transform: translateY(-2px) scale(1.03);
  box-shadow:
    0 0 0 1px rgba(107, 143, 113, 0.35),
    0 14px 32px rgba(107, 143, 113, 0.22);
}
.brand-footer-trust__copy {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}
.brand-footer-trust__kicker {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(44, 58, 53, 0.5);
}
.brand-footer-trust__title {
  font-family: var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 1.3;
  color: #2c3a35;
}
.brand-footer-trust__sub {
  display: block;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  line-height: 1.25;
  color: #2c3a35;
}
.brand-footer-trust__item--link:hover .brand-footer-trust__title {
  color: #6b8f71;
  text-decoration: underline;
  text-underline-offset: 4px;
}
@media (min-width: 768px) {
  .brand-footer-trust {
    gap: 2.5rem 4rem;
    margin-top: 2.75rem;
    padding-top: 2.5rem;
  }
  .brand-footer-trust__badge {
    width: 6.25rem;
    height: 6.25rem;
  }
  .brand-footer-trust__title {
    font-size: 1.05rem;
  }
}
@media (max-width: 640px) {
  .brand-footer-trust {
    flex-direction: column;
    align-items: stretch;
    gap: 1.35rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    max-width: 100%;
  }
  .brand-footer-trust__item {
    flex-direction: row;
    align-items: center;
    text-align: left;
    max-width: none;
    gap: 0.9rem;
  }
  .brand-footer-trust__copy {
    align-items: flex-start;
    text-align: left;
  }
  .brand-footer-trust__badge {
    width: 4rem;
    height: 4rem;
  }
  .brand-footer-trust__kicker {
    font-size: 9px;
    letter-spacing: 0.12em;
  }
  .brand-footer-trust__title {
    font-size: 0.875rem;
  }
  .brand-footer-trust__sub {
    font-size: 0.8125rem;
  }
}
`;

type FooterTrustBadgesProps = {
  hipaaHref?: string;
  providerNetworkHref?: string;
  layout?: "row" | "items";
};

function TrustItems({
  hipaaHref,
  providerNetworkHref,
}: {
  hipaaHref?: string;
  providerNetworkHref?: string;
}) {
  const itemClass = "brand-footer-trust__item";

  const providerBody = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/footer/provider-network.png"
        alt=""
        width={200}
        height={200}
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
        src="/images/footer/usa-pharmacies.png"
        alt=""
        width={200}
        height={200}
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
        src="/images/footer/hipaa-compliant.png"
        alt=""
        width={200}
        height={200}
        className="brand-footer-trust__badge"
        loading="lazy"
        decoding="async"
      />
      <span className="brand-footer-trust__copy">
        <span className="brand-footer-trust__kicker">Data protected</span>
        <span className="brand-footer-trust__title">
          HIPAA <span className="brand-footer-trust__sub">Compliant</span>
        </span>
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
  hipaaHref = "/policies/hipaa-notice",
  providerNetworkHref = "/policies/provider-network",
  layout = "row",
}: FooterTrustBadgesProps) {
  const items = <TrustItems hipaaHref={hipaaHref} providerNetworkHref={providerNetworkHref} />;

  return (
    <>
      <style>{TRUST_BADGE_CSS}</style>
      {layout === "items" ? (
        items
      ) : (
        <div className="brand-footer-trust" aria-label="Trust and compliance">
          {items}
        </div>
      )}
    </>
  );
}
