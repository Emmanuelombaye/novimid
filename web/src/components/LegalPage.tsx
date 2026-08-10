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
          <p className="mt-10 text-[13px] font-light text-fog">
            Placeholder legal text for scaffolding. Replace with counsel-approved
            language before launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
