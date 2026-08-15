"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { media } from "@/lib/media";
import {
  getActiveScreeningQuestions,
  isScreeningComplete,
  questionIsDisqualified,
} from "@/lib/intake";

const TOTAL_STEPS = 5;

const goals = [
  {
    id: "health",
    label: "Improve overall health",
    hint: "Energy, resilience, long-term wellness",
    icon: "♥",
    color: "bg-[#E8F0EA] text-sage",
  },
  {
    id: "metabolic",
    label: "Metabolic support",
    hint: "Appetite regulation and body composition",
    icon: "◈",
    color: "bg-[#E8E4DC] text-forest",
  },
  {
    id: "hormones",
    label: "Hormone balance",
    hint: "Clinically guided hormone optimization",
    icon: "◎",
    color: "bg-[#DCE8DD] text-midnight",
  },
  {
    id: "recovery",
    label: "Recovery & performance",
    hint: "Sleep, recovery, peptide-supported care",
    icon: "✦",
    color: "bg-cloud text-sage-mid",
  },
] as const;

const interests = [
  {
    id: "glp1",
    label: "GLP-1 care",
    hint: "Physician-directed metabolic protocols",
    image: media.product.glp1Hero,
  },
  {
    id: "peptides",
    label: "Peptide therapy",
    hint: "Prescribed when clinically appropriate",
    image: media.product.peptideHero,
  },
  {
    id: "trt",
    label: "TRT",
    hint: "Labs, dosing, and follow-up built in",
    image: media.product.trtHero,
  },
  {
    id: "unsure",
    label: "Not sure yet",
    hint: "Start with a physician conversation",
    image: media.lifestyle.physician,
  },
] as const;

const usStates = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC",
];

type Draft = {
  goal: string;
  interest: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  notes: string;
  height: string;
  weight: string;
  sex: string;
  answers: Record<string, string>;
};

const empty: Draft = {
  goal: "",
  interest: "",
  name: "",
  email: "",
  phone: "",
  state: "",
  notes: "",
  height: "",
  weight: "",
  sex: "",
  answers: {},
};

export function StartIntake() {
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<Draft>(empty);
  const [submitted, setSubmitted] = useState(false);

  const progress = useMemo(() => ((step + 1) / TOTAL_STEPS) * 100, [step]);
  const screeningIntake = useMemo(
    () => ({ answers: draft.answers, sexAtBirth: draft.sex }),
    [draft.answers, draft.sex],
  );
  const screeningQuestions = useMemo(
    () => getActiveScreeningQuestions(screeningIntake),
    [screeningIntake],
  );
  const canContinue =
    (step === 0 && !!draft.goal) ||
    (step === 1 && !!draft.interest) ||
    (step === 2 &&
      !!draft.name &&
      !!draft.email &&
      !!draft.state &&
      !!draft.height &&
      !!draft.weight &&
      !!draft.sex) ||
    step === 3 ||
    (step === 4 && isScreeningComplete(screeningIntake));

  function setAnswer(id: string, value: string) {
    setDraft((d) => ({ ...d, answers: { ...d.answers, [id]: value } }));
  }

  function next() {
    setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    if (step === 0) return;
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.info("[novimid intake stub]", draft);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F7F9F7]">
        <IntakeTopBar
          step={TOTAL_STEPS - 1}
          progress={100}
          onBack={() => {
            setSubmitted(false);
            setStep(TOTAL_STEPS - 1);
          }}
          backLabel="Back"
        />
        <div className="shell py-14 sm:py-20">
          <div className="mx-auto max-w-lg rounded-[28px] border-[0.5px] border-midnight bg-white p-8 text-center sm:p-10">
            <p className="label-caps">Received</p>
            <h1 className="mt-4 text-[clamp(1.6rem,4vw,2.1rem)] font-normal tracking-tight text-midnight">
              Thank you. We will be in touch.
            </h1>
            <p className="mt-4 text-[15px] font-light leading-relaxed text-forest">
              A care coordinator will review your intake and follow up to schedule your
              physician consult.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/how-it-works"
                className="inline-flex h-12 items-center justify-center rounded-full bg-sage text-[15px] font-normal text-[#FFFFFF]"
              >
                See how it works
              </Link>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-full border-[0.5px] border-midnight bg-white text-[15px] font-normal text-midnight"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F9F7]">
      <IntakeTopBar
        step={step}
        progress={progress}
        onBack={step === 0 ? undefined : back}
        backHref={step === 0 ? "/" : undefined}
        backLabel={step === 0 ? "Home" : "Back"}
      />

      <div className="shell flex-1 py-6 pb-36 sm:py-10 sm:pb-40">
        <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-3">
          {[
            { k: "Physician-led", v: "Board-certified oversight" },
            { k: "503A pharmacy", v: "Compounded when indicated" },
            { k: "California chain", v: "Created · shipped in CA" },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-[16px] border-[0.5px] border-mist bg-white px-4 py-3.5 text-center"
            >
              <p className="text-[15px] font-normal text-sage">{item.k}</p>
              <p className="mt-0.5 text-[12px] font-light text-forest">{item.v}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-[16px] font-light text-forest">
            See if you qualify for physician-directed care.
          </p>
          <p className="mt-1 text-[16px] font-normal text-midnight">
            Takes less than 2 mins.
          </p>
          <p className="mt-3 text-[13px] font-light text-fog">
            Step {step + 1} of {TOTAL_STEPS}
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-2xl sm:mt-8">
          {step === 0 ? (
            <StepCard
              title="What are you hoping care could help you with?"
              hint="Select your primary reason."
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {goals.map((g) => (
                  <ChoiceCard
                    key={g.id}
                    selected={draft.goal === g.id}
                    title={g.label}
                    hint={g.hint}
                    icon={g.icon}
                    iconClass={g.color}
                    onClick={() => setDraft((d) => ({ ...d, goal: g.id }))}
                  />
                ))}
              </div>
            </StepCard>
          ) : null}

          {step === 1 ? (
            <StepCard
              title="Which path are you exploring?"
              hint="You can refine this later with your physician."
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {interests.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDraft((d) => ({ ...d, interest: item.id }))}
                    className={`overflow-hidden rounded-[20px] border-[0.5px] text-left transition-colors ${
                      draft.interest === item.id
                        ? "border-midnight bg-[#DCE8DD]"
                        : "border-mist bg-white hover:border-sage"
                    }`}
                  >
                    <div
                      className={`relative aspect-[4/3] sm:aspect-[16/10] ${
                        item.image.src.includes("product-") ? "bg-[#E8F0EA]" : "bg-cloud"
                      }`}
                    >
                      <Image
                        src={item.image.src}
                        alt=""
                        fill
                        className={
                          item.image.src.includes("product-")
                            ? "object-contain object-center p-5"
                            : "object-cover object-center"
                        }
                        sizes="(max-width: 640px) 92vw, 280px"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-[15px] font-normal text-midnight">{item.label}</p>
                      <p className="mt-1 text-[12px] font-light text-forest">{item.hint}</p>
                    </div>
                  </button>
                ))}
              </div>
            </StepCard>
          ) : null}

          {step === 2 ? (
            <StepCard
              title="A few details so we can follow up"
              hint="Used only to coordinate your physician consult."
            >
              <div className="space-y-4">
                <Field
                  label="Full name"
                  value={draft.name}
                  onChange={(v) => setDraft((d) => ({ ...d, name: v }))}
                  autoComplete="name"
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={draft.email}
                  onChange={(v) => setDraft((d) => ({ ...d, email: v }))}
                  autoComplete="email"
                  required
                />
                <Field
                  label="Phone"
                  type="tel"
                  value={draft.phone}
                  onChange={(v) => setDraft((d) => ({ ...d, phone: v }))}
                  autoComplete="tel"
                />
                <label className="block">
                  <span className="label-caps">State of residence</span>
                  <select
                    required
                    value={draft.state}
                    onChange={(e) => setDraft((d) => ({ ...d, state: e.target.value }))}
                    className="field-control"
                  >
                    <option value="">Select state</option>
                    {usStates.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Height"
                    value={draft.height}
                    onChange={(v) => setDraft((d) => ({ ...d, height: v }))}
                    required
                  />
                  <Field
                    label="Weight (lbs)"
                    type="number"
                    value={draft.weight}
                    onChange={(v) => setDraft((d) => ({ ...d, weight: v }))}
                    required
                  />
                </div>
                <label className="block">
                  <span className="label-caps">Sex assigned at birth</span>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {["Male", "Female", "Other"].map((sex) => (
                      <button
                        key={sex}
                        type="button"
                        onClick={() => setDraft((d) => ({ ...d, sex }))}
                        className={`h-11 rounded-full border-[0.5px] text-[14px] ${
                          draft.sex === sex
                            ? "border-midnight bg-[#DCE8DD] text-midnight"
                            : "border-mist bg-white text-forest"
                        }`}
                      >
                        {sex}
                      </button>
                    ))}
                  </div>
                </label>
              </div>
            </StepCard>
          ) : null}

          {step === 3 ? (
            <StepCard
              title="Anything else your care team should know?"
              hint="Optional — share goals or context for your consult."
            >
              <div className="space-y-5">
                <label className="block">
                  <span className="label-caps">Notes for your care team</span>
                  <textarea
                    rows={4}
                    value={draft.notes}
                    onChange={(e) => setDraft((d) => ({ ...d, notes: e.target.value }))}
                    className="field-control"
                    placeholder="Goals, timeline, questions…"
                  />
                </label>
              </div>
            </StepCard>
          ) : null}

          {step === 4 ? (
            <StepCard
              title="Clinical screening"
              hint="Answer each question. Completing intake does not guarantee a prescription."
            >
              <form id="intake-final" className="space-y-5" onSubmit={onSubmit}>
                {screeningQuestions.map((q) => {
                  const value = draft.answers[q.id] || "";
                  const blocked = questionIsDisqualified(q, value);
                  return (
                    <div key={q.id}>
                      <p className="text-[15px] font-normal text-midnight">
                        {q.question}
                        {q.required ? " *" : ""}
                      </p>
                      {q.type === "boolean" ? (
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          {(["yes", "no"] as const).map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setAnswer(q.id, opt)}
                              className={`h-11 rounded-full border-[0.5px] text-[14px] ${
                                value === opt
                                  ? "border-midnight bg-[#DCE8DD] text-midnight"
                                  : "border-mist bg-white text-forest"
                              }`}
                            >
                              {opt === "yes" ? "Yes" : "No"}
                            </button>
                          ))}
                        </div>
                      ) : q.type === "select" ? (
                        <select
                          className="field-control mt-2"
                          value={value}
                          onChange={(e) => setAnswer(q.id, e.target.value)}
                        >
                          <option value="">Select</option>
                          {(q.options || []).map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <textarea
                          rows={3}
                          className="field-control mt-2"
                          value={value}
                          onChange={(e) => setAnswer(q.id, e.target.value)}
                          placeholder="Enter your answer…"
                        />
                      )}
                      {blocked ? (
                        <p className="mt-2 text-[13px] font-light text-[#9B3A3A]">
                          This answer requires physician review before treatment can continue.
                        </p>
                      ) : null}
                    </div>
                  );
                })}
                <label className="flex items-start gap-3 rounded-2xl border-[0.5px] border-mist bg-cloud p-4 text-[13px] font-light leading-relaxed text-forest">
                  <input
                    type="checkbox"
                    required
                    name="consent"
                    className="mt-1 size-4 shrink-0 accent-[var(--sage)]"
                  />
                  <span>
                    I understand this form begins intake and does not create a
                    physician-patient relationship until a consult is completed. Compounded
                    medications, when indicated, are not FDA-approved drug products.
                  </span>
                </label>
              </form>
            </StepCard>
          ) : null}
        </div>
      </div>

      {/* Sticky bottom nav — always visible Back + Continue */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t-[0.5px] border-mist bg-white/95 backdrop-blur-sm">
        <div className="shell flex items-center gap-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:py-4">
          {step === 0 ? (
            <Link
              href="/"
              className="inline-flex h-12 min-w-[7.5rem] items-center justify-center rounded-full border-[0.5px] border-midnight bg-white px-5 text-[15px] font-normal text-midnight"
            >
              ← Home
            </Link>
          ) : (
            <button
              type="button"
              onClick={back}
              className="inline-flex h-12 min-w-[7.5rem] items-center justify-center rounded-full border-[0.5px] border-midnight bg-white px-5 text-[15px] font-normal text-midnight"
            >
              ← Back
            </button>
          )}

          {step < 4 ? (
            <button
              type="button"
              disabled={!canContinue}
              onClick={next}
              className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-sage text-[15px] font-normal text-[#FFFFFF] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue →
            </button>
          ) : (
            <button
              type="submit"
              form="intake-final"
              disabled={!canContinue}
              className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-sage text-[15px] font-normal text-[#FFFFFF] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit intake
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function IntakeTopBar({
  step,
  progress,
  onBack,
  backHref,
  backLabel,
}: {
  step: number;
  progress: number;
  onBack?: () => void;
  backHref?: string;
  backLabel: string;
}) {
  const backClass =
    "inline-flex h-11 items-center gap-1.5 rounded-full border-[0.5px] border-midnight bg-white px-4 text-[14px] font-normal text-midnight";

  return (
    <div className="sticky top-0 z-50 border-b-[0.5px] border-mist bg-white">
      <div className="shell flex h-14 items-center justify-between gap-3 sm:h-16">
        {backHref ? (
          <Link href={backHref} className={backClass}>
            <span aria-hidden>←</span> {backLabel}
          </Link>
        ) : (
          <button type="button" onClick={onBack} className={backClass}>
            <span aria-hidden>←</span> {backLabel}
          </button>
        )}

        <Link href="/" className="relative h-7 w-[110px] shrink-0 sm:w-[128px]" aria-label="novimid home">
          <Image
            src={media.brand.logoHoriz}
            alt="novimid"
            fill
            className="object-contain"
            sizes="128px"
            priority
          />
        </Link>

        <Link
          href="/faq"
          className="inline-flex h-11 items-center rounded-full border-[0.5px] border-midnight bg-white px-4 text-[14px] font-normal text-midnight"
        >
          Help
        </Link>
      </div>
      <div className="h-1.5 w-full bg-mist">
        <div
          className="h-full bg-midnight transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%` }}
          aria-label={`Step ${step + 1} progress`}
        />
      </div>
    </div>
  );
}

function StepCard({
  title,
  hint,
  children,
}: {
  title: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[28px] border-[0.5px] border-midnight bg-white p-5 sm:rounded-[32px] sm:p-8">
      <h1 className="text-[clamp(1.4rem,3.5vw,1.9rem)] font-normal leading-tight tracking-tight text-midnight">
        {title}
      </h1>
      <p className="mt-2 text-[14px] font-light italic text-fog">{hint}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function ChoiceCard({
  selected,
  title,
  hint,
  icon,
  iconClass,
  onClick,
}: {
  selected: boolean;
  title: string;
  hint: string;
  icon: string;
  iconClass: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-[132px] rounded-[20px] border-[0.5px] p-5 text-left transition-colors ${
        selected
          ? "border-midnight bg-[#DCE8DD]"
          : "border-mist bg-white hover:border-sage"
      }`}
    >
      <span
        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full text-[16px] ${iconClass}`}
        aria-hidden
      >
        {icon}
      </span>
      <p className="text-[15px] font-normal text-midnight">{title}</p>
      <p className="mt-1 text-[12px] font-light text-forest">{hint}</p>
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="label-caps">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        className="field-control"
      />
    </label>
  );
}
