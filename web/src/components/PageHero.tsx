import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Props = {
  label: string;
  title: string;
  body: string;
  serif?: boolean;
};

export function PageHero({ label, title, body, serif = false }: Props) {
  return (
    <section className="border-b-[0.5px] border-mist bg-white">
      <div className="shell section-y !py-14 md:!py-24">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
          <h1 className={`mt-4 max-w-3xl text-midnight ${serif ? "display-serif" : "type-h1"}`}>
            {title}
          </h1>
          <p className="type-body mt-5 max-w-2xl sm:mt-6">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}
