import { media } from "@/lib/media";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { SiteImage } from "./SiteImage";

/** Product stills — swap via `lib/media.ts` */
const visuals = [
  { image: media.product.capsule, label: "Capsule protocols" },
  { image: media.product.oral, label: "Oral protocols" },
] as const;

export function TherapyVisuals() {
  return (
    <section className="bg-midnight text-white">
      <div className="shell section-y">
        <Reveal>
          <SectionLabel className="!text-sage-mist">Therapy forms</SectionLabel>
          <h2 className="mt-4 max-w-xl text-[clamp(1.5rem,4vw,2rem)] font-light tracking-tight text-white">
            Prescribed forms your physician may choose
          </h2>
          <p className="mt-4 max-w-xl text-[15px] font-light leading-relaxed text-sage-mist">
            Capsules, tablets, or injectables — selected for your protocol, not a
            one-size catalog.
          </p>
        </Reveal>

        {/* Mobile snap */}
        <div className="snap-rail mt-8 md:hidden" role="list">
          {visuals.map((v, i) => (
            <div key={v.image.src} className="snap-card" role="listitem">
              <Reveal delayMs={i * 50}>
                <figure className="overflow-hidden rounded-[var(--radius-card)] border-[0.5px] border-white/10">
                  <div className="relative aspect-square bg-midnight">
                    <SiteImage image={v.image} fill loading="lazy" className="object-cover" />
                  </div>
                  <figcaption className="bg-midnight px-4 py-3 label-caps !text-sage-mist">
                    {v.label}
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Desktop pair */}
        <div className="mt-10 hidden gap-6 md:grid md:grid-cols-2">
          {visuals.map((v, i) => (
            <Reveal key={v.image.src} delayMs={i * 80}>
              <figure className="overflow-hidden rounded-[var(--radius-card)] border-[0.5px] border-white/10">
                <div className="relative aspect-[5/4] bg-midnight">
                  <SiteImage image={v.image} fill loading="lazy" className="object-cover" />
                </div>
                <figcaption className="bg-midnight px-5 py-4 label-caps !text-sage-mist">
                  {v.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
