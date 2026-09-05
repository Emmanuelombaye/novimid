"use client";

import Link from "next/link";
import { useState } from "react";
import { TreatmentsExplore } from "./TreatmentsExplore";
import type { ExploreTone } from "@/lib/treatmentsExplore";

const IMG_PRODUCT = "/images/product-glp1-v2.png";
const IMG_VIAL_A = "/images/icon-vial-a-v2.png";
const IMG_VIAL_B = "/images/icon-vial-b-v2.png";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

type FaqItem = { q: string; a: string };

const SEMA_FAQS: FaqItem[] = [
  {
    q: "What is the Semaglutide Program at novimid?",
    a: "Physician-directed Semaglutide care for weight management when clinically appropriate. Care begins with intake and physician review — every plan is built around you. Completing intake does not guarantee a prescription.",
  },
  {
    q: "What's the difference between Semaglutide and Tirzepatide?",
    a: "Both support appetite regulation and weight management through related but different pathways. Your physician reviews your history and goals to determine what may be appropriate for you.",
  },
  {
    q: "Who is Semaglutide care for?",
    a: "Semaglutide may be considered for adults seeking physician-guided weight management who meet clinical criteria. Eligibility is determined by a licensed physician based on your medical history, current health, and goals. Treatment isn't right for everyone — every plan begins with a provider review.",
  },
  {
    q: "How does the prescription process work?",
    a: "You complete a short clinical intake, share your medical history, and connect with a licensed physician. If approved, medication is prepared through our licensed compounding pharmacy when indicated and shipped directly. Your physician stays involved as dosing is titrated over time.",
  },
  {
    q: "What should I know about side effects?",
    a: "Side effects vary by person. Common effects may include nausea, constipation, diarrhea, appetite changes, or digestive discomfort while your body adjusts. Your physician reviews your history, explains what to watch for, and can adjust your protocol if needed.",
  },
  {
    q: "Are compounded medications FDA-approved?",
    a: "No. Compounded medications are prepared for individual patients pursuant to a valid prescription through licensed U.S. pharmacies when clinically indicated. They are not FDA-approved and do not undergo FDA review for safety, effectiveness, or manufacturing quality.",
  },
];

const TIRZ_FAQS: FaqItem[] = [
  {
    q: "What is the Tirzepatide Program at novimid?",
    a: "Physician-directed Tirzepatide care for weight management when clinically appropriate. Care begins with intake and physician review — every plan is built around you. Completing intake does not guarantee a prescription.",
  },
  {
    q: "What's the difference between Semaglutide and Tirzepatide?",
    a: "Both support appetite regulation and weight management through related but different pathways. Your physician reviews your history and goals to determine what may be appropriate for you.",
  },
  {
    q: "Who is Tirzepatide care for?",
    a: "Tirzepatide may be considered for adults seeking physician-guided weight management who meet clinical criteria. Eligibility is determined by a licensed physician based on your medical history, current health, and goals. Treatment isn't right for everyone — every plan begins with a provider review.",
  },
  {
    q: "How does the prescription process work?",
    a: "You complete a short clinical intake, share your medical history, and connect with a licensed physician. If approved, medication is prepared through our licensed compounding pharmacy when indicated and shipped directly. Your physician stays involved as dosing is titrated over time.",
  },
  {
    q: "What should I know about side effects?",
    a: "Side effects vary by person. Common effects may include nausea, constipation, diarrhea, appetite changes, or digestive discomfort while your body adjusts. Your physician reviews your history, explains what to watch for, and can adjust your protocol if needed.",
  },
  {
    q: "Are compounded medications FDA-approved?",
    a: "No. Compounded medications are prepared for individual patients pursuant to a valid prescription through licensed U.S. pharmacies when clinically indicated. They are not FDA-approved and do not undergo FDA review for safety, effectiveness, or manufacturing quality.",
  },
];

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
function IconArrowDown() {
  return (
    <svg viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="tx-calc-arrow-svg">
      <circle cx="6" cy="8" r="4.5" stroke="currentColor" strokeWidth="2" />
      <path d="M13 8h66" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="m73 2 7 6-7 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
  heading: "Hunger was never the enemy. Clarity was missing.",
  sub: "Novimid Semaglutide care helps restore the fullness signal your body already knows how to send \u2014 so appetite settles into something quieter, steadier, and finally easier to trust.",
  vialImg: IMG_PRODUCT,
  vialAlt: "Personalized Semaglutide program vial",
  cards: [
    {
      icon: <IconWave />,
      title: "Supports the signal that tells your brain you\u2019re full.",
      body: "After you eat, your body releases a natural fullness signal that travels to your brain and says: enough. Semaglutide helps reinforce that message. The result is a clearer, more consistent cue to stop eating.",
    },
    {
      icon: <IconDot />,
      title: "Slows down how fast food leaves your stomach.",
      body: "These treatments reduce the rate at which your stomach empties after a meal. The physical sensation of fullness lasts longer \u2014 and hunger returns more slowly.",
    },
    {
      icon: <IconLines />,
      title: "Recalibrates your hunger system \u2014 not shuts it down.",
      body: "Over time, with structured dosing reviewed by your provider, Semaglutide care helps restore a more balanced response to food \u2014 so the process feels steadier, not like a fight you\u2019re constantly losing.",
    },
  ],
  ctaLink: "/start",
};

const TIRZ_PROTOCOL: ProtocolData = {
  heading: "Hunger was never the enemy. Clarity was missing.",
  sub: "Novimid Tirzepatide care helps restore the fullness signal your body already knows how to send \u2014 so appetite settles into something quieter, steadier, and finally easier to trust.",
  vialImg: IMG_PRODUCT,
  vialAlt: "Personalized Tirzepatide program vial",
  modifier: "tx-protocol--tirzepatide",
  cards: [
    {
      icon: <IconWave />,
      title: "Supports the signal that tells your brain you\u2019re full.",
      body: "After you eat, your body releases a natural fullness signal that travels to your brain and says: enough. Tirzepatide helps reinforce that message through dual pathways. The result is a clearer, more consistent cue to stop eating.",
    },
    {
      icon: <IconDot />,
      title: "Slows down how fast food leaves your stomach.",
      body: "These treatments reduce the rate at which your stomach empties after a meal. The physical sensation of fullness lasts longer \u2014 and hunger returns more slowly.",
    },
    {
      icon: <IconLines />,
      title: "Recalibrates your hunger system \u2014 not shuts it down.",
      body: "Over time, with structured dosing reviewed by your provider, Tirzepatide care helps restore a more balanced response to food \u2014 so the process feels steadier, not like a fight you\u2019re constantly losing.",
    },
  ],
  ctaLink: "/start",
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
          <Link href={data.ctaLink} className="tx-protocol__cta">Get Started</Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: RetroCalculator
───────────────────────────────────────────── */

function RetroCalculator({ programLabel }: { programLabel: string }) {
  const [weight, setWeight] = useState("");
  const lbs = parseFloat(weight) || 0;
  const potential = lbs > 0 ? (lbs * 0.2).toFixed(1) : "00.0";

  return (
    <section className="tx-calculator" aria-labelledby="tx-calc-heading">
      <div className="tx-calculator__panel">
        <div className="tx-calculator__left">
          <h2 id="tx-calc-heading" className="tx-calculator__heading">
            Let&apos;s see your <em>potential</em> with {programLabel}
          </h2>
          <div className="tx-calculator__control">
            <label className="sr-only" htmlFor="tx-calc-weight">Enter your weight (lbs)</label>
            <input
              id="tx-calc-weight"
              className="tx-calculator__input"
              type="number"
              inputMode="decimal"
              min={120}
              max={400}
              step={1}
              placeholder="Enter your weight (lbs)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>
        <div className="tx-calculator__arrow" aria-hidden="true">
          <IconArrowDown />
        </div>
        <div className="tx-calculator__right">
          <span className="tx-calculator__readout-label">You could <em>lose up to</em></span>
          <span className="tx-calculator__readout" aria-hidden="true">
            <span className="tx-calculator__readout-number">{potential}</span>
            <span className="tx-calculator__readout-unit">lbs</span>
          </span>
          <span className="tx-calculator__readout-caption">*Based on our patients results in 6-month plans. Results may vary.</span>
        </div>
      </div>
    </section>
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
    patientsBold?: string;
    patientsRest?: string;
    plans: { name: string; save?: string; badge?: string; was?: string; now: string; perMonth?: string }[];
    ctaLink: string;
  }[];
  modifier: string;
};

const SEMA_CLINICAL: ClinicalData = {
  eyebrow: "Weight Management · Semaglutide Program",
  heading: "Evidence-based\npharmacotherapy for\nweight management.",
  body: (
    <>
      <p>Semaglutide engages pathways that govern satiety, gastric emptying, and metabolic balance — supporting measured, clinically supervised weight management care.</p>
      <ul>
        <li><strong>Semaglutide</strong> — selective receptor support for progressive appetite regulation when clinically appropriate.</li>
      </ul>
      <p>Each protocol is prescribed by a licensed physician and titrated to your response, tolerability, and clinical goals. Completing intake does not guarantee a prescription.</p>
    </>
  ),
  vialImg: IMG_PRODUCT,
  vialImg2: IMG_VIAL_A,
  modifier: "tx-clinical--weight-loss",
  products: [
    {
      id: "semaglutide",
      vialImg: IMG_VIAL_A,
      title: "Semaglutide",
      sub: "Gradual, physician-guided progress.",
      tag: "Weight Management",
      tagColor: "purple",
      patientsBold: "Physician-guided",
      patientsRest: "dosing protocols",
      plans: [
        { name: "Monthly supply", now: "Quoted after review" },
        { name: "Multi-month supply", badge: "If prescribed", now: "Discussed with your clinician" },
      ],
      ctaLink: "/start",
    },
  ],
};

const TIRZ_CLINICAL: ClinicalData = {
  eyebrow: "Weight Management · Tirzepatide Program",
  heading: "Evidence-based\npharmacotherapy for\nweight management.",
  body: (
    <>
      <p>Tirzepatide engages pathways that govern satiety, gastric emptying, and metabolic balance — supporting measured, clinically supervised weight management care.</p>
      <ul>
        <li><strong>Tirzepatide</strong> — dual-pathway support for broader appetite regulation when clinically appropriate.</li>
      </ul>
      <p>Each protocol is prescribed by a licensed physician and titrated to your response, tolerability, and clinical goals. Completing intake does not guarantee a prescription.</p>
    </>
  ),
  vialImg: IMG_PRODUCT,
  vialImg2: IMG_VIAL_B,
  modifier: "tx-clinical--tirzepatide",
  products: [
    {
      id: "tirzepatide",
      vialImg: IMG_VIAL_B,
      title: "Tirzepatide",
      sub: "Physician-guided dual-pathway support.",
      tag: "Weight Management",
      tagColor: "green",
      patientsBold: "Physician-guided",
      patientsRest: "dosing protocols",
      plans: [
        { name: "Monthly supply", now: "Quoted after review" },
        { name: "Multi-month supply", badge: "If prescribed", now: "Discussed with your clinician" },
      ],
      ctaLink: "/start",
    },
  ],
};

function RetroClinical({ data }: { data: ClinicalData }) {
  const [activeProd, setActiveProd] = useState(data.products[0]?.id ?? "");
  const [planByProduct, setPlanByProduct] = useState<Record<string, number>>(() =>
    Object.fromEntries(data.products.map((p) => [p.id, 0])),
  );

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
            const selectedPlan = planByProduct[p.id] ?? 0;
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
                    {p.patientsBold ? (
                      <p className="tx-clinical-product__patients">
                        <strong>{p.patientsBold}</strong> {p.patientsRest}
                      </p>
                    ) : null}
                  </div>
                  <span className="tx-clinical-product__check" aria-hidden="true"><IconCheck /></span>
                </button>
                {expanded ? (
                  <div className="tx-clinical__pricing" role="radiogroup" aria-label={`Choose your ${p.title} plan`}>
                    {p.plans.map((plan, i) => {
                      const on = i === selectedPlan;
                      return (
                        <button
                          key={i}
                          type="button"
                          className="tx-clinical-plan"
                          role="radio"
                          aria-checked={on}
                          data-selected={on ? "true" : "false"}
                          onClick={() => setPlanByProduct((prev) => ({ ...prev, [p.id]: i }))}
                        >
                          <span className="tx-clinical-plan__radio" aria-hidden="true" />
                          <span className="tx-clinical-plan__info">
                            <span className="tx-clinical-plan__name">
                              {plan.name}
                              {plan.badge ? <span className="tx-clinical-plan__badge">{plan.badge}</span> : null}
                            </span>
                            {plan.save ? <span className="tx-clinical-plan__save">{plan.save}</span> : null}
                          </span>
                          <span className="tx-clinical-plan__price">
                            {plan.was ? <span className="tx-clinical-plan__was">{plan.was}</span> : null}
                            <span className="tx-clinical-plan__now">{plan.now}</span>
                            {plan.perMonth ? <span className="tx-clinical-plan__per-month">{plan.perMonth}</span> : null}
                          </span>
                        </button>
                      );
                    })}
                    <Link href={p.ctaLink} className="tx-clinical__cta">
                      See if I qualify
                    </Link>
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
  heading: "What to expect, week by week with your Semaglutide care",
  sub: "No guesswork. Here’s how the first months typically look under physician-directed Semaglutide care. Individual experiences vary.",
  cards: [
    {
      img: "/images/care-woman.jpg",
      alt: "Patient examining dose and consultation summary",
      label: "Week 1 → 4 · Your body is adjusting",
      desc: "You start on a low dose — intentionally. Your Semaglutide protocol is introduced gradually so your body can adapt. Some patients notice appetite changes early. Others take a few more weeks. Both are normal. Your physician is available throughout.",
    },
    {
      img: "/images/how-care-experience.jpg",
      alt: "Adult reviewing a care plan as the protocol settles in",
      label: "Week 4 → 12 · The protocol starts to settle",
      desc: "This is when most patients begin to feel more consistent regulation. Food noise and cravings often quiet. Fullness arrives earlier and stays longer. Your dose may be reviewed and adjusted.",
    },
    {
      img: "/images/care-man.jpg",
      alt: "Patient at home as provider fine-tunes Semaglutide protocol",
      label: "Month 3+ · Calibrated to you",
      desc: "This is where care becomes truly personal. With how your body has responded — to the dose, to titration, to the protocol itself — your physician can fine-tune with real precision.",
    },
  ],
};

const TIRZ_EXPECT: { heading: string; sub: string; cards: ExpectCard[] } = {
  heading: "What to expect, week by week with your Tirzepatide care",
  sub: "No guesswork. Here’s how the first months typically look under physician-directed Tirzepatide care. Individual experiences vary.",
  cards: [
    {
      img: "/images/care-woman.jpg",
      alt: "Patient examining dose and consultation summary",
      label: "Week 1 → 4 · Your body is adjusting",
      desc: "You start on a low dose — intentionally. Your Tirzepatide protocol is introduced gradually so your body can adapt. Some patients notice appetite changes early. Others take a few more weeks. Both are normal. Your physician is available throughout.",
    },
    {
      img: "/images/how-care-experience.jpg",
      alt: "Adult reviewing a care plan as the protocol settles in",
      label: "Week 4 → 12 · The protocol starts to settle",
      desc: "This is when most patients begin to feel more consistent regulation. Food noise and cravings often quiet. Fullness arrives earlier and stays longer. Your dose may be reviewed and adjusted.",
    },
    {
      img: "/images/care-man.jpg",
      alt: "Patient at home as provider fine-tunes Tirzepatide protocol",
      label: "Month 3+ · Calibrated to you",
      desc: "This is where care becomes truly personal. With how your body has responded — to the dose, to titration, to the protocol itself — your physician can fine-tune with real precision.",
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
  faqs,
  vialImg,
  vialAlt,
  ctaLink,
  modifier,
}: {
  faqs: FaqItem[];
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
            What most patients want to know before they begin.
          </h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="tx-knowall__vial" src={vialImg} alt={vialAlt} loading="lazy" decoding="async" />
        </div>
        <div className="tx-knowall__right">
          <ul className="tx-knowall__list" role="list">
            {faqs.map((item, i) => (
              <li
                key={i}
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
          <Link href={ctaLink} className="tx-knowall__cta">See if I qualify</Link>
        </div>
      </div>
    </section>
  );
}

function SemaStack() {
  return (
    <>
      <RetroProtocol data={SEMA_PROTOCOL} />
      <RetroCalculator programLabel="Semaglutide care" />
      <RetroClinical data={SEMA_CLINICAL} />
      <RetroExpect data={SEMA_EXPECT} />
      <RetroKnowall
        faqs={SEMA_FAQS}
        vialImg={IMG_PRODUCT}
        vialAlt="Personalized Semaglutide program vial"
        ctaLink="/start"
      />
    </>
  );
}

function TirzStack() {
  return (
    <>
      <RetroProtocol data={TIRZ_PROTOCOL} />
      <RetroCalculator programLabel="Tirzepatide care" />
      <RetroClinical data={TIRZ_CLINICAL} />
      <RetroExpect data={TIRZ_EXPECT} />
      <RetroKnowall
        faqs={TIRZ_FAQS}
        vialImg={IMG_PRODUCT}
        vialAlt="Personalized Tirzepatide program vial"
        ctaLink="/start"
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
          <h1 className="mx-auto max-w-[40rem] text-center text-[1.75rem] font-semibold leading-[1] tracking-[-0.04em] text-neutral-900 sm:text-[2.25rem]">
            Explore our treatments below and choose what&apos;s best{" "}
            <em className="font-semibold italic">for you.</em>
          </h1>
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
