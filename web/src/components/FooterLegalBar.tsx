import { COMPANY } from "@/lib/company";

type FooterLegalBarProps = {
  copyright: string;
  note?: string;
};

export function FooterLegalBar({ copyright, note }: FooterLegalBarProps) {
  return (
    <div className="mt-8 grid gap-5 border-t-[0.5px] border-mist pt-6 text-center sm:mt-10 sm:pt-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-8 lg:text-left">
      <div className="space-y-1.5">
        <p className="text-[12px] font-light leading-relaxed text-fog">{copyright}</p>
        {note ? <p className="text-[12px] font-light leading-relaxed text-fog">{note}</p> : null}
      </div>
      <address className="not-italic lg:justify-self-end lg:text-right">
        <strong className="block font-[family-name:var(--font-dm-sans)] text-[13px] font-medium tracking-wide text-midnight">
          {COMPANY.legalName}
        </strong>
        <span className="mt-1 block text-[12px] font-light text-fog">{COMPANY.street}</span>
        <span className="block text-[12px] font-light text-fog">{COMPANY.cityLine}</span>
        <span className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[12px] font-light text-forest lg:justify-end">
          <a
            href={`mailto:${COMPANY.email}`}
            className="underline-offset-2 hover:text-sage hover:underline"
          >
            {COMPANY.email}
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="underline-offset-2 hover:text-sage hover:underline"
          >
            {COMPANY.phoneDisplay}
          </a>
        </span>
      </address>
    </div>
  );
}
