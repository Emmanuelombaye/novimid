"use client";

import Link from "next/link";
import { useState } from "react";
import { faqItems } from "@/lib/content";
import { media } from "@/lib/media";
import { TreatmentsExplore } from "./TreatmentsExplore";
import { CtaBand } from "./CtaBand";
import type { ExploreTone } from "@/lib/treatmentsExplore";

const IMG_PRODUCT = "/images/product-glp1-v2.png";
const IMG_VIAL_A = "/images/icon-vial-a-v2.png";
const IMG_VIAL_B = "/images/icon-vial-b-v2.png";

/* ─────────────────────────────────────────────
   ICON SVGs (inline)
───────────────────────────────────────────── */

function IconWave() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="tx-protocol-icon-svg">
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13 34c3.2-7 6.4-7 9.6 0s6.4 7 9.6 0 6.4-7 9.6 0 6.4 7 9.6 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function IconDot() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="tx-protocol-icon-svg">
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 22C30 22 30 44 48 44" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 3.5" />
      <circle cx="30" cy="29" r="2.4" fill="currentColor" />
    </svg>
  );
}
function IconLines() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="tx-protocol-icon-svg">
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.4" />
      <line x1="19" y1="26" x2="41" y2="26" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="19" y1="32" x2="46" y2="32" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="19" y1="38" x2="35" y2="38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 3.5" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
      <path d="m2.2 5.1 1.8 1.8 3.8-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SECTION: RetroProtocol
───────────────────────────────────────────── */

type ProtocolData = {
  heading: string;
  sub: string;
  vialImg: string;
  vialAlt: string;
  cards: { icon: React.ReactNode; title: string; body: string }[];
  ctaLink: string;
  modifier?: string;
};

const SEMA_PROTOCOL: ProtocolData = {
  heading: "Start with a clinical review — not a template.",
  sub: "The Semaglutide Program may be discussed only after clinical intake and licensed-provider review. Completing intake does not guarantee eligibility or a prescription. If appropriate, care is individualized and fulfilled through a licensed pharmacy partner.",
  vialImg: IMG_PRODUCT,
  vialAlt: "Illustrative Semaglutide program product photo — not a specific medication",
  cards: [
    {
      icon: <IconWave />,
      title: "Secure medical intake",
      body: "After checkout, you complete a secure health intake and identity-verification steps so a licensed clinician can review your information.",
    },
    {
      icon: <IconDot />,
      title: "Licensed-provider review",
      body: "An independent U.S.-licensed clinician evaluates whether treatment is clinically appropriate. Purchasing a program does not guarantee a prescription.",
    },
    {
      icon: <IconLines />,
      title: "Pharmacy fulfillment if prescribed",
      body: "If prescribed, medication is dispensed by a licensed pharmacy partner. Compounded medications, when used, are not FDA-approved finished products.",
    },
  ],
  ctaLink: "/start?treatment=semaglutide",
};

const TIRZ_PROTOCOL: ProtocolData = {
  heading: "Clinician-guided care, if prescribed.",
  sub: "The Tirzepatide Program may be considered after clinical intake and review by a U.S.-licensed clinician. Completing intake does not guarantee a prescription. If appropriate, care is individualized and fulfilled through a licensed pharmacy partner.",
  vialImg: IMG_PRODUCT,
  vialAlt: "Illustrative Tirzepatide program product photo — not a specific medication",
  modifier: "tx-protocol--tirzepatide",
  cards: [
    {
      icon: <IconWave />,
      title: "Secure medical intake",
      body: "After checkout, you complete a secure health intake and identity-verification steps so a licensed clinician can review your information.",
    },
    {
      icon: <IconDot />,
      title: "Licensed-provider review",
      body: "An independent U.S.-licensed clinician evaluates whether treatment is clinically appropriate. Purchasing a program does not guarantee a prescription.",
    },
    {
      icon: <IconLines />,
      title: "Pharmacy fulfillment if prescribed",
      body: "If prescribed, medication is dispensed by a licensed pharmacy partner. Compounded medications, when used, are not FDA-approved finished products.",
    },
  ],
  ctaLink: "/start?treatment=tirzepatide",
};

function RetroProtocol({ data }: { data: ProtocolData }) {
  return (
    <section className={`tx-protocol${data.modifier ? ` ${data.modifier}` : ""}`} aria-label={data.heading}>
      <div className="tx-protocol__inner">
        <div className="tx-protocol__left">
          <h2 className="tx-protocol__heading">{data.heading}</h2>
          <p className="tx-protocol__sub">{data.sub}</p>
          <div className="tx-protocol__vials" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="tx-protocol__vials-img" src={data.vialImg} alt={data.vialAlt} loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="tx-protocol__right">
          {data.cards.map((card, i) => (
            <article key={i} className="tx-protocol-card">
              <span className="tx-protocol-card__icon" aria-hidden="true">{card.icon}</span>
              <h3 className="tx-protocol-card__title">{card.title}</h3>
              <p className="tx-protocol-card__body">{card.body}</p>
            </article>
          ))}
          <Link href={data.ctaLink} className="tx-protocol__cta">Start clinical intake</Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: TreatmentCtaBand (replaces weight calculator)
───────────────────────────────────────────── */

function TreatmentCtaBand({
  headline,
  headlineLine2,
}: {
  headline: string;
  headlineLine2: string;
}) {
  return (
    <CtaBand
      image={media.treatmentsCtaLifestyle}
      headline={headline}
      headlineLine2={headlineLine2}
      primaryLabel="Get started"
      secondaryLabel="How it works"
      secondaryHref="/how-it-works"
      objectPosition="object-cover object-[58%_top]"
    />
  );
}

/* ─────────────────────────────────────────────
   SECTION: RetroClinical
───────────────────────────────────────────── */

type ClinicalData = {
  eyebrow: string;
  heading: string;
  body: React.ReactNode;
  vialImg: string;
  vialImg2?: string;
  products: {
    id: string;
    vialImg: string;
    title: string;
    sub: string;
    tag: string;
    tagColor: "purple" | "green" | "orange";
    features: string[];
    priceLine: string;
    fineprint: string;
    ctaLink: string;
  }[];
  modifier: string;
};

const SEMA_CLINICAL: ClinicalData = {
  eyebrow: "Weight Management · Semaglutide Program",
  heading: "Weight-management care,\nreviewed by licensed providers.",
  body: (
    <>
      <p>
        A clinician-guided weight-management program using semaglutide, discussed only after clinical
        eligibility review. Treatment is never guaranteed by intake alone.
      </p>
      <p>
        If prescribed, dosing and follow-up are directed by your licensed clinician. Compounded
        medications, when used, are not FDA-approved finished products.
      </p>
      <p>Completing intake does not guarantee a prescription.</p>
    </>
  ),
  vialImg: IMG_PRODUCT,
  vialImg2: IMG_VIAL_A,
  modifier: "tx-clinical--weight-loss",
  products: [
    {
      id: "semaglutide",
      vialImg: IMG_VIAL_A,
      title: "Semaglutide Program",
      sub: "Start with a clinical review",
      tag: "Weight Management",
      tagColor: "purple",
      features: [
        "Clinical eligibility review first",
        "Secure medical intake after checkout",
        "Provider oversight if treatment continues",
        "Discreet fulfillment when prescribed",
      ],
      priceLine: "Program price disclosed at checkout · if prescribed",
      fineprint:
        "Completing intake does not guarantee a prescription. Product imagery is illustrative.",
      ctaLink: "/start?treatment=semaglutide",
    },
  ],
};

const TIRZ_CLINICAL: ClinicalData = {
  eyebrow: "Weight Management · Tirzepatide Program",
  heading: "Weight-management care,\nreviewed by licensed providers.",
  body: (
    <>
      <p>
        A clinician-guided weight-management program using tirzepatide, with licensed-provider
        review. Completing intake does not guarantee a prescription.
      </p>
      <p>
        If prescribed, dosing and follow-up are directed by your licensed clinician. Compounded
        medications, when used, are not FDA-approved finished products.
      </p>
      <p>Individual results vary; no outcome is promised.</p>
    </>
  ),
  vialImg: IMG_PRODUCT,
  vialImg2: IMG_VIAL_B,
  modifier: "tx-clinical--tirzepatide",
  products: [
    {
      id: "tirzepatide",
      vialImg: IMG_VIAL_B,
      title: "Tirzepatide Program",
      sub: "Start with a clinical review",
      tag: "Weight Management",
      tagColor: "green",
      features: [
        "Online licensed-provider review",
        "Secure medical intake after checkout",
        "Ongoing program support by secure message",
        "Standard shipping when prescribed",
      ],
      priceLine: "Program price disclosed at checkout · if prescribed",
      fineprint:
        "Completing intake does not guarantee a prescription. Product imagery is illustrative.",
      ctaLink: "/start?treatment=tirzepatide",
    },
  ],
};

function RetroClinical({ data }: { data: ClinicalData }) {
  const [activeProd, setActiveProd] = useState(data.products[0]?.id ?? "");

  return (
    <section className={`tx-clinical ${data.modifier}`} aria-labelledby="tx-clinical-heading">
      <div className="tx-clinical__inner">
        <div className="tx-clinical__text">
          <p className="tx-clinical__eyebrow">{data.eyebrow}</p>
          <h2 id="tx-clinical-heading" className="tx-clinical__heading">{data.heading}</h2>
          <div className="tx-clinical__body">{data.body}</div>
        </div>
        <div className="tx-clinical__visual" aria-hidden="true">
          {data.vialImg2 ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="tx-clinical__vial tx-clinical__vial--tirz" src={data.vialImg} alt="" loading="lazy" decoding="async" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="tx-clinical__vial tx-clinical__vial--sema" src={data.vialImg2} alt="" loading="lazy" decoding="async" />
            </>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="tx-clinical__vial" src={data.vialImg} alt="" loading="lazy" decoding="async" />
          )}
        </div>
        <div className="tx-clinical__products">
          {data.products.map((p) => {
            const expanded = p.id === activeProd;
            return (
              <article
                key={p.id}
                className={`tx-clinical-product${expanded ? " tx-clinical-product--primary" : " tx-clinical-product--secondary"}`}
                data-expanded={expanded}
              >
                <button
                  type="button"
                  className="tx-clinical-product__top"
                  aria-expanded={expanded}
                  onClick={() => setActiveProd(p.id)}
                >
                  <div className="tx-clinical-product__thumb" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.vialImg} alt="" loading="lazy" decoding="async" />
                  </div>
                  <div className="tx-clinical-product__intro">
                    <h3 className="tx-clinical-product__title">{p.title}</h3>
                    <p className="tx-clinical-product__sub">{p.sub}</p>
                    <p className={`tx-clinical-product__tag tx-clinical-product__tag--${p.tagColor}`}>{p.tag}</p>
                  </div>
                  <span className="tx-clinical-product__check" aria-hidden="true"><IconCheck /></span>
                </button>
                {expanded ? (
                  <div className="tx-clinical__pricing">
                    <ul className="mb-4 space-y-2.5 px-1">
                      {p.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-[13px] font-medium leading-snug text-[#2c3a35]"
                        >
                          <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#2c3a35] text-white" aria-hidden>
                            <IconCheck />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mb-3 px-1 text-[13px] font-medium text-[#2c3a35]/70">{p.priceLine}</p>
                    <Link href={p.ctaLink} className="tx-clinical__cta">
                      Start clinical intake
                    </Link>
                    <p className="mt-3 px-1 text-[11px] leading-relaxed text-[#2c3a35]/55">{p.fineprint}</p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
        <a className="tx-clinical__scroll" href="#tx-expect-heading" aria-label="Scroll to the next section">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 5v13M6 12l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: RetroExpect (Timeline)
───────────────────────────────────────────── */

type ExpectCard = {
  img: string;
  alt: string;
  label: string;
  desc: string;
  /** Product photography — use contain so vials/pens are never cropped */
  product?: boolean;
};

const SEMA_EXPECT: { heading: string; sub: string; cards: ExpectCard[] } = {
  heading: "How the Semaglutide Program typically proceeds",
  sub: "Process steps after checkout — not outcome promises. Individual experiences vary. Completing intake does not guarantee a prescription.",
  cards: [
    {
      img: "/images/care-woman.jpg",
      alt: "Adult reviewing intake materials at home",
      label: "After checkout · Complete intake",
      desc: "You finish the secure medical intake and identity-verification steps required for licensed-provider review. This reserves clinical review — it is not a purchase of a prescription.",
    },
    {
      img: "/images/how-care-experience.jpg",
      alt: "Adult reviewing a care plan after provider evaluation",
      label: "Licensed-provider review",
      desc: "A U.S.-licensed clinician reviews your information and may request follow-up details, labs, or a live consultation. Treatment is provided only if clinically appropriate.",
    },
    {
      img: "/images/care-man.jpg",
      alt: "Adult at home during ongoing program support",
      label: "If prescribed · Ongoing oversight",
      desc: "When prescribed, medication is fulfilled through a licensed pharmacy partner. Routine follow-up required by the program continues with your care team. Results are not guaranteed.",
    },
  ],
};

const TIRZ_EXPECT: { heading: string; sub: string; cards: ExpectCard[] } = {
  heading: "How the Tirzepatide Program typically proceeds",
  sub: "Process steps after checkout — not outcome promises. Individual experiences vary. Completing intake does not guarantee a prescription.",
  cards: [
    {
      img: "/images/care-woman.jpg",
      alt: "Adult reviewing intake materials at home",
      label: "After checkout · Complete intake",
      desc: "You finish the secure medical intake and identity-verification steps required for licensed-provider review. This reserves clinical review — it is not a purchase of a prescription.",
    },
    {
      img: "/images/how-care-experience.jpg",
      alt: "Adult reviewing a care plan after provider evaluation",
      label: "Licensed-provider review",
      desc: "A U.S.-licensed clinician reviews your information and may request follow-up details, labs, or a live consultation. Treatment is provided only if clinically appropriate.",
    },
    {
      img: "/images/care-man.jpg",
      alt: "Adult at home during ongoing program support",
      label: "If prescribed · Ongoing oversight",
      desc: "When prescribed, medication is fulfilled through a licensed pharmacy partner. Routine follow-up required by the program continues with your care team. Results are not guaranteed.",
    },
  ],
};

function RetroExpect({ data, modifier }: { data: typeof SEMA_EXPECT; modifier?: string }) {
  return (
    <section className={`tx-expect${modifier ? ` ${modifier}` : ""}`} aria-labelledby="tx-expect-heading">
      <div className="tx-expect__inner">
        <h2 id="tx-expect-heading" className="tx-expect__heading">{data.heading}</h2>
        <p className="tx-expect__sub">{data.sub}</p>
        <div className="tx-expect__grid">
          {data.cards.map((card, i) => (
            <article key={i} className="tx-expect-card">
              <div
                className={`tx-expect-card__media${card.product ? " tx-expect-card__media--product" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="tx-expect-card__img" src={card.img} alt={card.alt} loading="lazy" decoding="async" />
              </div>
              <h3 className="tx-expect-card__label">{card.label}</h3>
              <p className="tx-expect-card__desc">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: RetroKnowall (FAQ accordion)
───────────────────────────────────────────── */

function RetroKnowall({
  vialImg,
  vialAlt,
  ctaLink,
  modifier,
}: {
  vialImg: string;
  vialAlt: string;
  ctaLink: string;
  modifier?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={`tx-knowall${modifier ? ` ${modifier}` : ""}`} aria-labelledby="tx-knowall-heading">
      <div className="tx-knowall__inner">
        <div className="tx-knowall__left">
          <h2 id="tx-knowall-heading" className="tx-knowall__heading">
            Frequently asked questions
          </h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="tx-knowall__vial" src={vialImg} alt={vialAlt} loading="lazy" decoding="async" />
        </div>
        <div className="tx-knowall__right">
          <ul className="tx-knowall__list" role="list">
            {faqItems.map((item, i) => (
              <li
                key={item.q}
                className="tx-knowall__item"
                data-open={open === i}
              >
                <button
                  type="button"
                  className="tx-knowall__toggle"
                  aria-expanded={open === i}
                  aria-controls={`tx-knowall-panel-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="tx-knowall__question">{item.q}</span>
                  <span className="tx-knowall__icon" aria-hidden="true">{open === i ? "−" : "+"}</span>
                </button>
                <div
                  id={`tx-knowall-panel-${i}`}
                  className="tx-knowall__panel"
                  role="region"
                  hidden={open !== i}
                >
                  <div className="tx-knowall__panel-inner">
                    <div className="tx-knowall__answer">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Link href={ctaLink} className="tx-knowall__cta">Start clinical intake</Link>
        </div>
      </div>
    </section>
  );
}

function SemaStack() {
  return (
    <>
      <RetroProtocol data={SEMA_PROTOCOL} />
      <TreatmentCtaBand headline="Care starts with" headlineLine2="clinical review." />
      <RetroClinical data={SEMA_CLINICAL} />
      <RetroExpect data={SEMA_EXPECT} />
      <RetroKnowall
        vialImg={IMG_PRODUCT}
        vialAlt="Illustrative Semaglutide program product photo"
        ctaLink="/start?treatment=semaglutide"
      />
    </>
  );
}

function TirzStack() {
  return (
    <>
      <RetroProtocol data={TIRZ_PROTOCOL} />
      <TreatmentCtaBand headline="Built around your" headlineLine2="biology." />
      <RetroClinical data={TIRZ_CLINICAL} />
      <RetroExpect data={TIRZ_EXPECT} />
      <RetroKnowall
        vialImg={IMG_PRODUCT}
        vialAlt="Illustrative Tirzepatide program product photo"
        ctaLink="/start?treatment=tirzepatide"
        modifier="tx-knowall--tirzepatide"
      />
    </>
  );
}

/* ─────────────────────────────────────────────
   ROOT: TreatmentsView
───────────────────────────────────────────── */

export function TreatmentsView() {
  const [activeTab, setActiveTab] = useState<ExploreTone>("semaglutide");

  return (
    <div className="treatments-page">
      {/* ── Headline ───────────────────────────── */}
      <section className="bg-white pt-3 pb-4 sm:pt-4 sm:pb-5 lg:pt-4 lg:pb-5">
        <div className="shell">
          <h1 className="mx-auto max-w-[42rem] text-center text-[1.75rem] font-semibold leading-[1] tracking-[-0.04em] text-neutral-900 sm:text-[2.25rem]">
            Weight-management programs,{" "}
            <em className="font-semibold italic">reviewed by licensed providers.</em>
          </h1>
          <p className="mx-auto mt-4 max-w-[36rem] text-center text-[15px] font-light leading-relaxed text-neutral-900/70">
            Compare Semaglutide and Tirzepatide below. Completing intake does not guarantee a prescription.
          </p>
        </div>
      </section>

      {/* ── Explore (tabs + split hero) ────────── */}
      <section className="bg-white overflow-x-clip pb-0 pt-0">
        <div className="mx-auto w-full max-w-[72rem] px-3 sm:px-5 lg:px-6">
          <TreatmentsExplore activeTone={activeTab} onToneChange={setActiveTab} />
        </div>
      </section>

      {/* ── Below-fold sections for active tab ── */}
      <div className="tx-stacks">
        <div hidden={activeTab !== "semaglutide"}>
          <SemaStack />
        </div>
        <div hidden={activeTab !== "tirzepatide"}>
          <TirzStack />
        </div>
      </div>
    </div>
  );
}
