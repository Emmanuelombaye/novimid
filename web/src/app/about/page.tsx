import type { Metadata } from "next";
import { CTAPanel } from "@/components/CTAPanel";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SiteImage } from "@/components/SiteImage";
import { brand, caChain } from "@/lib/content";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "About",
  description:
    "novimid is physician-directed health optimization — telehealth, personalized protocols, and a licensed California compounding pharmacy.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About novimid"
        title="Where telehealth meets the compounding lab"
        body="Evidence-based. Physician-led. Personalized. novimid exists for patients who want real clinical oversight — not templates, not hype."
        serif
      />

      <section className="bg-white">
        <div className="shell section-y">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal>
              <p className="label-caps">Our promise</p>
              <h2 className="type-h2 mt-4 md:text-[1.75rem]">{brand.tagline}</h2>
              <p className="type-body mt-5">
                novimid connects patients with board-certified physicians who design
                evidence-based protocols — Semaglutide and Tirzepatide weight management
                programs when clinically appropriate —
                delivered through our licensed compounding pharmacy with clinical
                precision.
              </p>
              <p className="type-body mt-4">
                We speak with the authority of medicine and the warmth of a physician
                who listens. Precise language. No jargon walls. No overselling.
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)]">
                <SiteImage
                  image={media.about.california}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-midnight text-white">
        <div className="shell section-y">
          <Reveal>
            <p className="label-caps !text-sage-mist">Structural proof</p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.5rem,4vw,2.25rem)] font-light text-white">
              Created · Manufactured · Tested · Packaged · Shipped
            </h2>
            <p className="mt-3 text-[15px] font-light text-sage-mist sm:text-lg">
              All from start to finish in California
            </p>
            <p className="mt-5 max-w-2xl text-[15px] font-light leading-relaxed text-cloud">
              The integrated California supply chain is a credibility asset — deployed
              where trust is being evaluated. No overseas supply chains. No mystery
              middlemen. No compromises on quality.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3">
              {caChain.map((step) => (
                <li
                  key={step}
                  className="rounded-[var(--radius-card)] border-[0.5px] border-white/15 px-3 py-4 text-center text-[12px] font-light tracking-wide text-sage-mist sm:text-[13px]"
                >
                  {step}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-cloud">
        <div className="shell section-y">
          <Reveal>
            <p className="label-caps">Voice</p>
            <h2 className="type-h2 mt-4 md:text-[1.75rem]">
              Clinical, not cold. Confident, not loud.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                {
                  t: "Empowering",
                  b: "We inform, not dictate. You and your physician decide together.",
                },
                {
                  t: "Modern",
                  b: "We describe what we do plainly — no buzzwords that age overnight.",
                },
                {
                  t: "Transparent",
                  b: "We name compounding pharmacy, telehealth, and the therapies we offer.",
                },
              ].map((item) => (
                <div key={item.t}>
                  <h3 className="type-h3">{item.t}</h3>
                  <p className="type-body mt-3">{item.b}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTAPanel />
    </>
  );
}
