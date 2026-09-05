import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  label: string;
  title: string;
  children: ReactNode;
};

export function LegalPage({ label, title, children }: Props) {
  return (
    <section className="bg-white">
      <div className="shell py-14 md:py-28">
        <Reveal className="mx-auto max-w-3xl">
          <p className="label-caps">{label}</p>
          <h1 className="type-h1 mt-4">{title}</h1>
          <div className="type-body mt-8 space-y-5">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
