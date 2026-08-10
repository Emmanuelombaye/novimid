"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";

export function StartForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    console.info("[novimid intake stub]", payload);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-4">
        <p className="label-caps">Received</p>
        <h2 className="type-h2 mt-4">Thank you. We will be in touch.</h2>
        <p className="type-body mt-4">
          A care coordinator will review your intake and follow up to schedule your
          physician consult.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Full name" name="name" required autoComplete="name" />
      <Field label="Email" name="email" type="email" required autoComplete="email" />
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      <Field
        label="State of residence"
        name="state"
        required
        autoComplete="address-level1"
      />
      <label className="block">
        <span className="label-caps">What brings you to novimid?</span>
        <textarea name="goals" rows={4} className="field-control" />
      </label>
      <label className="flex items-start gap-3 text-[13px] font-light leading-relaxed text-forest">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 size-4 shrink-0 accent-[var(--sage)]"
        />
        <span>
          I understand this form begins intake and does not create a physician-patient
          relationship until a consult is completed.
        </span>
      </label>
      <Button type="submit" variant="primary" className="w-full">
        Submit intake
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="label-caps">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="field-control"
      />
    </label>
  );
}
