"use client";

import Link from "next/link";
import { useState } from "react";
import { YuccaTreatmentsExplore } from "./YuccaTreatmentsExplore";
import type { YuccaTone } from "@/lib/yuccaExplore";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

type FaqItem = { q: string; a: string };

// ── Metabolic / GLP-1 ────────────────────────

const WL_FAQS: FaqItem[] = [
  {
    q: "What is GLP-1 care at novimid?",
    a: "Physician-directed metabolic support that may include GLP-1 (Semaglutide) and dual-pathway GLP-1 + GIP (Tirzepatide) protocols when clinically appropriate. Care begins with intake and physician review — every plan is built around you.",
  },
  {
    q: "What's the difference between Semaglutide and Tirzepatide?",
    a: "Semaglutide is a GLP-1 receptor agonist. Tirzepatide is a dual GIP and GLP-1 receptor agonist. Both support appetite regulation and metabolic health through different receptor pathways. Your physician reviews your history and goals to determine what may be appropriate.",
  },
  {
    q: "Who is metabolic GLP-1 care for?",
    a: "GLP-1 care may be considered for adults seeking physician-guided metabolic support who meet clinical criteria. Eligibility is determined by a licensed physician based on your medical history, current health, and goals. Treatment isn't right for everyone — every plan begins with a provider review.",
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

// ── Peptides ─────────────────────────────────

const NAD_FAQS: FaqItem[] = [
  {
    q: "What is peptide therapy at novimid?",
    a: "Physician-prescribed peptide protocols designed to support recovery, cellular energy, and performance. When clinically appropriate, prescriptions may be compounded through our licensed 503A pharmacy after physician review.",
  },
  {
    q: "How do peptide protocols support recovery and energy?",
    a: "Peptide therapies are selected to work with pathways involved in repair, cellular signaling, and metabolic function. Your physician chooses a protocol based on your goals, history, and clinical picture — not a one-size template.",
  },
  {
    q: "Who is peptide therapy for?",
    a: "Peptide therapy may be considered for adults focused on recovery, energy, performance, and long-term wellness. Eligibility is determined by a licensed physician. Treatment isn't right for everyone — every plan begins with a provider review.",
  },
  {
    q: "How does the prescription process work?",
    a: "You complete a short clinical intake, share your medical history, and connect with a licensed physician. If approved, medication is prepared when indicated and shipped directly. Your care team stays involved as your protocol is reviewed over time.",
  },
  {
    q: "Are compounded medications FDA-approved?",
    a: "No. Compounded medications are prepared for individual patients pursuant to a valid prescription through licensed U.S. pharmacies when clinically indicated. They are not FDA-approved and do not undergo FDA review for safety, effectiveness, or manufacturing quality.",
  },
];

// ── Hormones / TRT ───────────────────────────

const SERM_FAQS: FaqItem[] = [
  {
    q: "What is TRT at novimid?",
    a: "Testosterone replacement therapy under physician oversight — with labs, dosing, and follow-up built into an accountable plan. Eligibility and dosing are physician decisions based on your clinical picture.",
  },
  {
    q: "How does hormone optimization work here?",
    a: "Your physician reviews symptoms, history, and labs where appropriate, then designs a protocol around your biology. Follow-up keeps dosing accountable as your response is monitored over time.",
  },
  {
    q: "Who is TRT for?",
    a: "TRT may be considered for adults with clinically appropriate indications after physician evaluation. It isn't right for everyone — every plan begins with intake and provider review, not a checkout.",
  },
  {
    q: "How does the prescription process work?",
    a: "You complete a short clinical intake, share your medical history, and connect with a licensed physician. If approved, treatment is coordinated with clear instructions and ongoing oversight.",
  },
  {
    q: "Are compounded medications FDA-approved?",
    a: "No. When compounding is used, medications are prepared for individual patients pursuant to a valid prescription through licensed U.S. pharmacies when clinically indicated. They are not FDA-approved and do not undergo FDA review for safety, effectiveness, or manufacturing quality.",
  },
];

/* ─────────────────────────────────────────────
   ICON SVGs (inline, matching Yucca originals)
───────────────────────────────────────────── */

function IconWave() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="yt-protocol-icon-svg">
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13 34c3.2-7 6.4-7 9.6 0s6.4 7 9.6 0 6.4-7 9.6 0 6.4 7 9.6 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function IconDot() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="yt-protocol-icon-svg">
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 22C30 22 30 44 48 44" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 3.5" />
      <circle cx="30" cy="29" r="2.4" fill="currentColor" />
    </svg>
  );
}
function IconLines() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="yt-protocol-icon-svg">
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
    <svg viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="yt-calc-arrow-svg">
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

const WL_PROTOCOL: ProtocolData = {
  heading: "Hunger was never the enemy. Clarity was missing.",
  sub: "Novimid GLP-1 care restores the fullness signal your body already knows how to send \u2014 so appetite settles into something quieter, steadier, and finally easier to trust.",
  vialImg: "/images/novimid-vials-pair.png",
  vialAlt: "Personalized Tirzepatide and Semaglutide GLP-1 injection vials",
  cards: [
    {
      icon: <IconWave />,
      title: "Targets the hormone that tells your brain you\u2019re full.",
      body: "After you eat, your body releases a hormone called GLP-1 \u2014 a signal that travels to your brain and says: enough. GLP-1 medications mimic that signal. The result is a clearer, more consistent message to stop eating.",
    },
    {
      icon: <IconDot />,
      title: "Slows down how fast food leaves your stomach.",
      body: "These treatments reduce the rate at which your stomach empties after a meal. The physical sensation of fullness lasts longer \u2014 and hunger returns more slowly.",
    },
    {
      icon: <IconLines />,
      title: "Recalibrates your hunger system \u2014 not shuts it down.",
      body: "Over time, with structured dosing reviewed by your provider, GLP-1 therapy helps restore a more balanced hormonal response to food \u2014 so the process feels steadier, not like a fight you\u2019re constantly losing.",
    },
  ],
  ctaLink: "/start",
};

const NAD_PROTOCOL: ProtocolData = {
  heading: "Peptides work with pathways\nyour body already uses.",
  sub: "Physician-directed peptide protocols are selected to support recovery, cellular energy, and performance — compounded when clinically appropriate.",
  vialImg: "/images/novimid-vial-single.png",
  vialAlt: "Personalized peptide therapy vials",
  modifier: "retro-protocol--nad",
  cards: [
    {
      icon: <IconWave />,
      title: "Supports cellular signaling and repair.",
      body: "Peptide protocols are chosen to engage pathways involved in recovery and cellular communication. Your physician selects what fits your clinical picture — not a generic stack.",
    },
    {
      icon: <IconDot />,
      title: "Built around energy and performance goals.",
      body: "Whether the focus is steadier energy, training recovery, or long-term resilience, dosing and follow-up stay accountable to how you respond over time.",
    },
    {
      icon: <IconLines />,
      title: "Compounded when clinically indicated.",
      body: "When appropriate, prescriptions are prepared through our licensed 503A compounding pharmacy after physician review — with clear instructions and ongoing oversight.",
    },
  ],
  ctaLink: "/start",
};

const SERM_PROTOCOL: ProtocolData = {
  heading: "Hormone optimization\nwith accountable follow-up.",
  sub: "TRT at novimid pairs physician evaluation with labs, dosing, and follow-through — so your protocol stays precise as your biology responds.",
  vialImg: "/images/novimid-vial-single.png",
  vialAlt: "Personalized hormone therapy vial",
  modifier: "retro-protocol--sermorelin",
  cards: [
    {
      icon: <IconWave />,
      title: "Starts with physician evaluation.",
      body: "Eligibility and dosing are clinical decisions. Your physician reviews history, symptoms, and labs where appropriate before any protocol begins.",
    },
    {
      icon: <IconDot />,
      title: "Labs and dosing stay connected.",
      body: "Hormone optimization isn't set-and-forget. Monitoring helps your physician adjust dosing with accountability — aligned to your response and goals.",
    },
    {
      icon: <IconLines />,
      title: "Follow-up is part of the plan.",
      body: "Clear instructions, ongoing oversight, and a care team that stays involved — so hormone therapy remains measured, not guesswork.",
    },
  ],
  ctaLink: "/start",
};

function RetroProtocol({ data }: { data: ProtocolData }) {
  return (
    <section className={`yt-protocol${data.modifier ? ` ${data.modifier}` : ""}`} aria-label={data.heading}>
      <div className="yt-protocol__inner">
        <div className="yt-protocol__left">
          <h2 className="yt-protocol__heading">{data.heading}</h2>
          <p className="yt-protocol__sub">{data.sub}</p>
          <div className="yt-protocol__vials" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="yt-protocol__vials-img" src={data.vialImg} alt={data.vialAlt} loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="yt-protocol__right">
          {data.cards.map((card, i) => (
            <article key={i} className="yt-protocol-card">
              <span className="yt-protocol-card__icon" aria-hidden="true">{card.icon}</span>
              <h3 className="yt-protocol-card__title">{card.title}</h3>
              <p className="yt-protocol-card__body">{card.body}</p>
            </article>
          ))}
          <Link href={data.ctaLink} className="yt-protocol__cta">Get Started</Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: RetroCalculator (WL only)
───────────────────────────────────────────── */

function RetroCalculator() {
  const [weight, setWeight] = useState("");
  const lbs = parseFloat(weight) || 0;
  const potential = lbs > 0 ? (lbs * 0.2).toFixed(1) : "00.0";

  return (
    <section className="yt-calculator" aria-labelledby="yt-calc-heading">
      <div className="yt-calculator__panel">
        <div className="yt-calculator__left">
          <h2 id="yt-calc-heading" className="yt-calculator__heading">
            Let&apos;s see your <em>potential</em> with GLP-1 care
          </h2>
          <div className="yt-calculator__control">
            <label className="sr-only" htmlFor="yt-calc-weight">Enter your weight (lbs)</label>
            <input
              id="yt-calc-weight"
              className="yt-calculator__input"
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
        <div className="yt-calculator__arrow" aria-hidden="true">
          <IconArrowDown />
        </div>
        <div className="yt-calculator__right">
          <span className="yt-calculator__readout-label">You could <em>lose up to</em></span>
          <span className="yt-calculator__readout" aria-hidden="true">
            <span className="yt-calculator__readout-number">{potential}</span>
            <span className="yt-calculator__readout-unit">lbs</span>
          </span>
          <span className="yt-calculator__readout-caption">*Based on our patients results in 6-month plans. Results may vary.</span>
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

const WL_CLINICAL: ClinicalData = {
  eyebrow: "Metabolic · Physician-directed GLP-1 care",
  heading: "Evidence-based\npharmacotherapy for\nmetabolic health.",
  body: (
    <>
      <p>GLP-1 receptor agonists engage pathways that govern satiety, gastric emptying, and glycemic control — supporting measured, clinically supervised metabolic care.</p>
      <ul>
        <li><strong>Semaglutide (GLP-1)</strong> — selective GLP-1 receptor agonism for progressive appetite regulation.</li>
        <li><strong>Tirzepatide (GLP-1 + GIP)</strong> — dual incretin agonism for broader metabolic support when clinically appropriate.</li>
      </ul>
      <p>Each protocol is prescribed by a licensed physician and titrated to your response, tolerability, and clinical goals.</p>
    </>
  ),
  vialImg: "/images/novimid-vials-pair.png",
  vialImg2: "/images/novimid-vial-single.png",
  modifier: "yt-clinical--weight-loss",
  products: [
    {
      id: "sema",
      vialImg: "/images/novimid-vial-single.png",
      title: "GLP-1 (Semaglutide)",
      sub: "Gradual, physician-guided progress.",
      tag: "Most accessible",
      tagColor: "purple",
      patientsBold: "Physician-guided",
      patientsRest: "dosing protocols",
      plans: [
        { name: "1 Month Supply", save: "Save 43%", was: "$256/mo", now: "$146/mo" },
        { name: "6 Month Supply", badge: "Best value", save: "Save 51%", was: "$256/mo", now: "$750 total", perMonth: "$125/mo" },
      ],
      ctaLink: "/start",
    },
    {
      id: "tirz",
      vialImg: "/images/novimid-vials-pair.png",
      title: "GLP-1 + GIP (Tirzepatide)",
      sub: "Dual-pathway metabolic support.",
      tag: "Dual pathway",
      tagColor: "green",
      patientsBold: "Physician-guided",
      patientsRest: "dosing protocols",
      plans: [
        { name: "1 Month Supply", save: "Save 46%", was: "$475/mo", now: "$258/mo" },
        { name: "6 Month Supply", badge: "Best value", save: "Save 53%", was: "$475/mo", now: "$1,350 total", perMonth: "$225/mo" },
      ],
      ctaLink: "/start",
    },
  ],
};

const NAD_CLINICAL: ClinicalData = {
  eyebrow: "Peptides · 503A when indicated",
  heading: "Physician-directed\npeptide protocols for\nrecovery and energy.",
  body: (
    <>
      <p>Personalized peptide therapy is reviewed by a licensed physician and adjusted as you progress. When clinically appropriate, prescriptions may be compounded through our licensed 503A pharmacy.</p>
      <p>Protocols are selected around your goals — recovery, cellular energy, and performance — with clear follow-through.</p>
    </>
  ),
  vialImg: "/images/novimid-vial-single.png",
  modifier: "yt-clinical--nad",
  products: [
    {
      id: "nad",
      vialImg: "/images/novimid-vial-single.png",
      title: "Peptide therapy",
      sub: "Recovery, energy, and performance support.",
      tag: "Personalized",
      tagColor: "green",
      plans: [
        { name: "*3 month supply", now: "$158" },
      ],
      ctaLink: "/start",
    },
  ],
};

const SERM_CLINICAL: ClinicalData = {
  eyebrow: "Hormones · Clinical oversight",
  heading: "Accountable TRT with\nlabs, dosing, and\nfollow-up.",
  body: (
    <>
      <p>Hormone optimization at novimid is physician-directed. Eligibility and dosing are clinical decisions — supported by labs where appropriate and follow-up that keeps your protocol accountable.</p>
    </>
  ),
  vialImg: "/images/novimid-vial-single.png",
  modifier: "yt-clinical--sermorelin",
  products: [
    {
      id: "sermorelin",
      vialImg: "/images/novimid-vial-single.png",
      title: "TRT",
      sub: "Labs, dosing, and physician follow-up.",
      tag: "Clinical oversight",
      tagColor: "orange",
      plans: [
        { name: "*3 month supply", now: "$158" },
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
    <section className={`yt-clinical ${data.modifier}`} aria-labelledby="yt-clinical-heading">
      <div className="yt-clinical__inner">
        <div className="yt-clinical__text">
          <p className="yt-clinical__eyebrow">{data.eyebrow}</p>
          <h2 id="yt-clinical-heading" className="yt-clinical__heading">{data.heading}</h2>
          <div className="yt-clinical__body">{data.body}</div>
        </div>
        <div className="yt-clinical__visual" aria-hidden="true">
          {data.vialImg2 ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="yt-clinical__vial yt-clinical__vial--tirz" src={data.vialImg} alt="" loading="lazy" decoding="async" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="yt-clinical__vial yt-clinical__vial--sema" src={data.vialImg2} alt="" loading="lazy" decoding="async" />
            </>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="yt-clinical__vial" src={data.vialImg} alt="" loading="lazy" decoding="async" />
          )}
        </div>
        <div className="yt-clinical__products">
          {data.products.map((p) => {
            const selectedPlan = planByProduct[p.id] ?? 0;
            const expanded = p.id === activeProd;
            return (
              <article
                key={p.id}
                className={`yt-clinical-product${expanded ? " yt-clinical-product--primary" : " yt-clinical-product--secondary"}`}
                data-expanded={expanded}
              >
                <button
                  type="button"
                  className="yt-clinical-product__top"
                  aria-expanded={expanded}
                  onClick={() => setActiveProd(p.id)}
                >
                  <div className="yt-clinical-product__thumb" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.vialImg} alt="" loading="lazy" decoding="async" />
                  </div>
                  <div className="yt-clinical-product__intro">
                    <h3 className="yt-clinical-product__title">{p.title}</h3>
                    <p className="yt-clinical-product__sub">{p.sub}</p>
                    <p className={`yt-clinical-product__tag yt-clinical-product__tag--${p.tagColor}`}>{p.tag}</p>
                    {p.patientsBold ? (
                      <p className="yt-clinical-product__patients">
                        <strong>{p.patientsBold}</strong> {p.patientsRest}
                      </p>
                    ) : null}
                  </div>
                  <span className="yt-clinical-product__check" aria-hidden="true"><IconCheck /></span>
                </button>
                {expanded ? (
                  <div className="yt-clinical__pricing" role="radiogroup" aria-label={`Choose your ${p.title} plan`}>
                    {p.plans.map((plan, i) => {
                      const on = i === selectedPlan;
                      return (
                        <button
                          key={i}
                          type="button"
                          className="yt-clinical-plan"
                          role="radio"
                          aria-checked={on}
                          data-selected={on ? "true" : "false"}
                          onClick={() => setPlanByProduct((prev) => ({ ...prev, [p.id]: i }))}
                        >
                          <span className="yt-clinical-plan__radio" aria-hidden="true" />
                          <span className="yt-clinical-plan__info">
                            <span className="yt-clinical-plan__name">
                              {plan.name}
                              {plan.badge ? <span className="yt-clinical-plan__badge">{plan.badge}</span> : null}
                            </span>
                            {plan.save ? <span className="yt-clinical-plan__save">{plan.save}</span> : null}
                          </span>
                          <span className="yt-clinical-plan__price">
                            {plan.was ? <span className="yt-clinical-plan__was">{plan.was}</span> : null}
                            <span className="yt-clinical-plan__now">{plan.now}</span>
                            {plan.perMonth ? <span className="yt-clinical-plan__per-month">{plan.perMonth}</span> : null}
                          </span>
                        </button>
                      );
                    })}
                    <Link href={p.ctaLink} className="yt-clinical__cta">
                      See if I qualify
                    </Link>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
        <a className="yt-clinical__scroll" href="#yt-expect-heading" aria-label="Scroll to the next section">
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

type ExpectCard = { img: string; alt: string; label: string; desc: string };

const WL_EXPECT: { heading: string; sub: string; cards: ExpectCard[] } = {
  heading: "What to expect, week by week with your GLP-1 care",
  sub: "No guesswork. Here’s how the first months typically look under physician-directed metabolic care. Individual experiences vary.",
  cards: [
    {
      img: "/images/care-woman.jpg",
      alt: "Patient examining dose and consultation summary",
      label: "Week 1 → 4 · Your body is adjusting",
      desc: "You start on a low dose — intentionally. Your GLP-1 protocol is introduced gradually so your body can adapt. Some patients notice appetite changes early. Others take a few more weeks. Both are normal. Your physician is available throughout.",
    },
    {
      img: "/images/physician-1.png",
      alt: "Patient in morning light as GLP-1 protocol settles in",
      label: "Week 4 → 12 · The protocol starts to settle",
      desc: "This is when most patients begin to feel more consistent regulation. Food noise and cravings often quiet. Fullness arrives earlier and stays longer. Your dose may be reviewed and adjusted.",
    },
    {
      img: "/images/care-man.jpg",
      alt: "Patient at home as provider fine-tunes GLP-1 protocol",
      label: "Month 3+ · Calibrated to you",
      desc: "This is where care becomes truly personal. With how your body has responded — to the dose, to titration, to the protocol itself — your physician can fine-tune with real precision.",
    },
  ],
};

const NAD_EXPECT: { heading: string; sub: string; cards: ExpectCard[] } = {
  heading: "What to expect,\nweek by week",
  sub: "Peptide therapy unfolds gradually under physician oversight. Here’s how the first months typically look. Individual experiences vary.",
  cards: [
    {
      img: "/images/care-woman.jpg",
      alt: "Patient reviewing their peptide protocol",
      label: "Week 1 → 4 · Protocol begins",
      desc: "You start on a measured dose — intentionally. Your peptide protocol is introduced so your body can begin to respond. Some patients notice early shifts in energy or recovery. Others take longer. Both are normal.",
    },
    {
      img: "/images/physician-2.png",
      alt: "Patient as their peptide protocol settles in",
      label: "Week 4 → 12 · Consistency builds",
      desc: "This is when most patients begin to feel the protocol working more consistently. Energy, recovery, or focus may hold steadier. Your physician may review and adjust dosing.",
    },
    {
      img: "/images/care-man.jpg",
      alt: "Patient as their provider fine-tunes peptide care",
      label: "Month 3+ · Long-term support",
      desc: "This is where the protocol becomes truly personal. The focus shifts from adjustment to consistency, and long-term support becomes the rhythm.",
    },
  ],
};

const SERM_EXPECT: { heading: string; sub: string; cards: ExpectCard[] } = {
  heading: "What to expect,\nweek by week",
  sub: "TRT is monitored carefully. Here’s how the first months typically unfold under physician-directed hormone care.",
  cards: [
    {
      img: "/images/care-man.jpg",
      alt: "Patient beginning hormone optimization with Novimid",
      label: "Week 1 \u2192 4 \u00b7 Evaluation to start",
      desc: "Care begins with physician review and a starting protocol when appropriate. Early follow-up confirms tolerability and clarifies what to expect as dosing settles in.",
    },
    {
      img: "/yucca/expect-ser-2.avif",
      alt: "Patient during hormone protocol follow-up",
      label: "Week 4 \u2192 12 \u00b7 Dosing finds rhythm",
      desc: "Labs and check-ins help your physician refine dosing. Many patients notice steadier energy and clearer follow-through as the protocol is calibrated.",
    },
    {
      img: "/yucca/expect-ser-3.avif",
      alt: "Patient with sustained hormone care support",
      label: "Month 3+ \u00b7 Accountable maintenance",
      desc: "This is where hormone care becomes long-term and precise. Monitoring continues so your protocol stays aligned to your response and clinical goals.",
    },
  ],
};

function RetroExpect({ data, modifier }: { data: typeof WL_EXPECT; modifier?: string }) {
  return (
    <section className={`yt-expect${modifier ? ` ${modifier}` : ""}`} aria-labelledby="yt-expect-heading">
      <div className="yt-expect__inner">
        <h2 id="yt-expect-heading" className="yt-expect__heading">{data.heading}</h2>
        <p className="yt-expect__sub">{data.sub}</p>
        <div className="yt-expect__grid">
          {data.cards.map((card, i) => (
            <article key={i} className="yt-expect-card">
              <div className="yt-expect-card__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="yt-expect-card__img" src={card.img} alt={card.alt} loading="lazy" decoding="async" />
              </div>
              <h3 className="yt-expect-card__label">{card.label}</h3>
              <p className="yt-expect-card__desc">{card.desc}</p>
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
    <section className={`yt-knowall${modifier ? ` ${modifier}` : ""}`} aria-labelledby="yt-knowall-heading">
      <div className="yt-knowall__inner">
        <div className="yt-knowall__left">
          <h2 id="yt-knowall-heading" className="yt-knowall__heading">
            What most patients want to know before they begin.
          </h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="yt-knowall__vial" src={vialImg} alt={vialAlt} loading="lazy" decoding="async" />
        </div>
        <div className="yt-knowall__right">
          <ul className="yt-knowall__list" role="list">
            {faqs.map((item, i) => (
              <li
                key={i}
                className="yt-knowall__item"
                data-open={open === i}
              >
                <button
                  type="button"
                  className="yt-knowall__toggle"
                  aria-expanded={open === i}
                  aria-controls={`yt-knowall-panel-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="yt-knowall__question">{item.q}</span>
                  <span className="yt-knowall__icon" aria-hidden="true">{open === i ? "−" : "+"}</span>
                </button>
                <div
                  id={`yt-knowall-panel-${i}`}
                  className="yt-knowall__panel"
                  role="region"
                  hidden={open !== i}
                >
                  <div className="yt-knowall__panel-inner">
                    <div className="yt-knowall__answer">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Link href={ctaLink} className="yt-knowall__cta">See if I qualify</Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   RETRO HAPPY — patient results marquee
───────────────────────────────────────────── */

type HappyWlCard = {
  kind: "wl";
  src: string;
  name: string;
  lbs: string;
  time: string;
  alt: string;
};

type HappyNadCard = {
  kind: "nad";
  before: string;
  after: string;
  name: string;
};

type HappyCard = HappyWlCard | HappyNadCard;

const WL_HAPPY: HappyWlCard[] = [
  {
    kind: "wl",
    src: "/yucca/happy/Lisa-C.-p-800.avif",
    name: "Lisa C.",
    lbs: "75",
    time: "in 10 Months",
    alt: "Before and after photo of GLP-1 patient Lisa C., who lost 75 lbs in 10 months.",
  },
  {
    kind: "wl",
    src: "/yucca/happy/Blaze-B.-p-800.avif",
    name: "Blaze B.",
    lbs: "50",
    time: "in 6 Months",
    alt: "Before and after photo of GLP-1 patient Blaze B., who lost 50 lbs in 6 months.",
  },
  {
    kind: "wl",
    src: "/yucca/happy/Crystal-G.-p-800.avif",
    name: "Crystal G.",
    lbs: "50",
    time: "in 6 Months",
    alt: "Before and after photo of GLP-1 patient Crystal G., who lost 50 lbs in 6 months.",
  },
  {
    kind: "wl",
    src: "/yucca/happy/Jamilyn-C.-p-800.avif",
    name: "JamiLyn O.",
    lbs: "36",
    time: "in 14 Weeks",
    alt: "Before and after photo of GLP-1 patient JamiLyn O., who lost 36 lbs in 14 weeks.",
  },
  {
    kind: "wl",
    src: "/yucca/happy/Kim-B.-p-800.avif",
    name: "Kim B.",
    lbs: "8",
    time: "in 6 Weeks",
    alt: "Before and after photo of GLP-1 patient Kim B., who lost 8 lbs in 6 weeks.",
  },
];

const NAD_HAPPY: HappyNadCard[] = [
  {
    kind: "nad",
    before: "/yucca/happy/nad-ba-1-before.avif",
    after: "/yucca/happy/nad-ba-1-after.avif",
    name: "Mart C.",
  },
  {
    kind: "nad",
    before: "/yucca/happy/nad-ba-2-before.avif",
    after: "/yucca/happy/nad-ba-2-after.avif",
    name: "Dana R.",
  },
  {
    kind: "nad",
    before: "/yucca/happy/nad-ba-3-before.avif",
    after: "/yucca/happy/nad-ba-3-after.avif",
    name: "Alex P.",
  },
  {
    kind: "nad",
    before: "/yucca/happy/nad-ba-4-before.avif",
    after: "/yucca/happy/nad-ba-4-after.avif",
    name: "Jordan M.",
  },
];

function RetroHappy({ variant }: { variant: YuccaTone }) {
  const cards: HappyCard[] =
    variant === "wl" ? WL_HAPPY : variant === "nad" ? NAD_HAPPY : NAD_HAPPY;
  const loop = [...cards, ...cards];

  return (
    <section
      className={`yt-happy${variant === "nad" ? " yt-happy--nad" : ""}${
        variant === "sermorelin" ? " yt-happy--sermorelin" : ""
      }`}
      aria-labelledby={`yt-happy-heading-${variant}`}
    >
      <h2 id={`yt-happy-heading-${variant}`} className="yt-happy__heading">
        Our <em className="yt-happy__heading-accent">patients&apos; incredible results</em>
        <br />- built to last!
      </h2>

      <div className="yt-happy__marquee" aria-label="Patient transformation showcase">
        <div className="yt-happy__track" role="list">
          <ul className="yt-happy__group" role="list">
            {loop.map((card, i) => (
              <li key={`${card.name}-${i}`} className="yt-happy__card" role="listitem">
                {card.kind === "wl" ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="yt-happy__photo"
                      src={card.src}
                      alt={card.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="yt-happy__chip yt-happy__chip--before">Before</span>
                    <span className="yt-happy__chip yt-happy__chip--after">After</span>
                    <div className="yt-happy__scrim" aria-hidden />
                    <div className="yt-happy__metric">
                      <div className="yt-happy__metric-row">
                        <span className="yt-happy__metric-label">Lost</span>
                        <svg className="yt-happy__metric-arrow" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="yt-happy__metric-number yt-happy__metric-lbs">
                        {card.lbs}
                        <span className="yt-happy__metric-unit">lbs</span>
                      </div>
                      <div className="yt-happy__metric-time">{card.time}</div>
                    </div>
                    <div className="yt-happy__pill">
                      <span className="yt-happy__pill-name">{card.name}</span>
                      <svg className="yt-happy__pill-check" viewBox="0 0 20 20" fill="none" aria-hidden>
                        <circle cx="10" cy="10" r="9" fill="#fff" />
                        <path d="M6 10.2l2.4 2.4L14 7.5" stroke="#2c3a35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="yt-happy__pill-verified">Verified patient</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="yt-happy__photos">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="yt-happy__photo" src={card.before} alt={`${card.name} — before`} loading="lazy" decoding="async" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="yt-happy__photo" src={card.after} alt={`${card.name} — after`} loading="lazy" decoding="async" />
                    </div>
                    <span className="yt-happy__chip yt-happy__chip--before">Before</span>
                    <span className="yt-happy__chip yt-happy__chip--after">After</span>
                    <div className="yt-happy__scrim" aria-hidden />
                    <div className="yt-happy__pill">
                      <span className="yt-happy__pill-name">{card.name}</span>
                      <svg className="yt-happy__pill-check" viewBox="0 0 20 20" fill="none" aria-hidden>
                        <circle cx="10" cy="10" r="9" fill="#fff" />
                        <path d="M6 10.2l2.4 2.4L14 7.5" stroke="#2c3a35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="yt-happy__pill-verified">Verified patient</span>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="yt-happy__reviews-wrap">
        <div className="yt-happy__reviews-card">
          <div className="yt-happy__reviews-inner">
            <button type="button" className="yt-happy__reviews-google">
              <span className="yt-happy__reviews-google-icon" aria-hidden>
                G
              </span>
              <span className="yt-happy__reviews-google-text">
                <span className="yt-happy__reviews-google-label">Google Rating</span>
                <span className="yt-happy__reviews-google-rating">
                  <strong>4.9</strong>
                  <span className="yt-happy__reviews-stars" aria-hidden>
                    ★★★★★
                  </span>
                </span>
              </span>
            </button>
            <span className="yt-happy__reviews-divider" aria-hidden />
            <button type="button" className="yt-happy__reviews-trust">
              <span className="yt-happy__reviews-trust-icon" aria-hidden>
                ★
              </span>
              <span className="yt-happy__reviews-trust-text">
                <span>Trustpilot</span>
                <span className="yt-happy__reviews-trust-score">TrustScore 4.8 · Patient reviews</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TAB STACKS
───────────────────────────────────────────── */

function WlStack() {
  return (
    <>
      <RetroProtocol data={WL_PROTOCOL} />
      <RetroCalculator />
      <RetroClinical data={WL_CLINICAL} />
      <RetroExpect data={WL_EXPECT} />
      <RetroKnowall
        faqs={WL_FAQS}
        vialImg="/images/novimid-vials-pair.png"
        vialAlt="Personalized Tirzepatide and Semaglutide GLP-1 injection vials"
        ctaLink="/start"
      />
    </>
  );
}

function NadStack() {
  return (
    <>
      <RetroClinical data={NAD_CLINICAL} />
      <RetroProtocol data={NAD_PROTOCOL} />
      <RetroExpect data={NAD_EXPECT} modifier="yt-expect--nad" />
      <RetroKnowall
        faqs={NAD_FAQS}
        vialImg="/images/novimid-vial-single.png"
        vialAlt="Personalized peptide therapy vial"
        ctaLink="/start"
        modifier="yt-knowall--nad"
      />
    </>
  );
}

function SermStack() {
  return (
    <>
      <RetroClinical data={SERM_CLINICAL} />
      <RetroProtocol data={SERM_PROTOCOL} />
      <RetroExpect data={SERM_EXPECT} modifier="yt-expect--sermorelin" />
      <RetroKnowall
        faqs={SERM_FAQS}
        vialImg="/images/novimid-vial-single.png"
        vialAlt="Personalized hormone therapy vial"
        ctaLink="/start"
        modifier="yt-knowall--sermorelin"
      />
    </>
  );
}

/* ─────────────────────────────────────────────
   PAGE-LEVEL: What people love (reviews grid)
───────────────────────────────────────────── */

const HOME_REVIEWS = [
  {
    quote:
      "The process was seamless from intake to delivery. My physician explained everything clearly and checked in regularly.",
    name: "Sarah M.",
    treatment: "Metabolic",
  },
  {
    quote:
      "I noticed better energy within the first few weeks. Having a licensed physician guide the protocol made all the difference.",
    name: "David K.",
    treatment: "Peptides",
  },
  {
    quote:
      "Labs, dosing, and follow-up felt accountable. The team was responsive whenever I had questions.",
    name: "Emily R.",
    treatment: "Hormones",
  },
] as const;

function YuccaHomeReviews() {
  return (
    <section className="yt-home-reviews" aria-labelledby="yt-home-reviews-heading">
      <div className="shell">
        <div className="yt-home-reviews__head">
          <div className="yt-home-reviews__stars" aria-label="Rated 4.8 out of 5">
            {"★★★★★"}
          </div>
          <h2 id="yt-home-reviews-heading" className="yt-home-reviews__heading">
            What people love about novimid
          </h2>
        </div>
        <ul className="yt-home-reviews__grid" role="list">
          {HOME_REVIEWS.map((r) => (
            <li key={r.name} className="yt-home-reviews__card" role="listitem">
              <p className="yt-home-reviews__quote">&ldquo;{r.quote}&rdquo;</p>
              <p className="yt-home-reviews__meta">
                <strong>{r.name}</strong>
                <span> · {r.treatment}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ROOT: YuccaTreatmentsPage
───────────────────────────────────────────── */

export function YuccaTreatmentsPage() {
  const [activeTab, setActiveTab] = useState<YuccaTone>("wl");

  return (
    <div className="yucca-treatments">
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
          <YuccaTreatmentsExplore activeTone={activeTab} onToneChange={setActiveTab} />
        </div>
      </section>

      {/* ── Results marquee (inside tab pane on Yucca) ── */}
      <RetroHappy variant={activeTab} />

      {/* ── Below-fold sections for active tab ── */}
      <div className="yt-stacks">
        <div hidden={activeTab !== "wl"}>
          <WlStack />
        </div>
        <div hidden={activeTab !== "nad"}>
          <NadStack />
        </div>
        <div hidden={activeTab !== "sermorelin"}>
          <SermStack />
        </div>
      </div>

      <YuccaHomeReviews />
    </div>
  );
}
