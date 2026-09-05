import type { Metadata } from "next";
import { AboutBleedBand } from "@/components/AboutBleedBand";
import { CTAPanel } from "@/components/CTAPanel";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
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

      <AboutBleedBand
        image={media.about.promiseBand}
        eyebrow="Our promise"
        title={brand.tagline}
        objectPosition="object-cover object-[62%_center]"
        priority
        tone="soft"
      />

      <section className="bg-white">
        <div className="shell section-y">
          <Reveal>
            <div className="mx-auto max-w-2xl">
              <p className="type-body text-[16px] sm:text-[17px]">
                novimid connects patients with board-certified physicians who design
                evidence-based protocols — Semaglutide and Tirzepatide weight management
                programs when clinically appropriate — delivered through our licensed
                compounding pharmacy with clinical precision.
              </p>
              <p className="type-body mt-5 text-[16px] sm:text-[17px]">
                We speak with the authority of medicine and the warmth of a physician
                who listens. Precise language. No jargon walls. No overselling.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutBleedBand
        image={media.about.californiaBand}
        eyebrow="Structural proof"
        title="Created · Manufactured · Tested · Packaged · Shipped"
        objectPosition="object-cover object-[68%_center]"
      />

      <section className="bg-midnight text-white">
        <div className="shell section-y">
          <Reveal>
            <p className="mt-0 max-w-2xl text-[15px] font-light text-sage-mist sm:text-lg">
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

      <AboutBleedBand
        image={media.about.voiceBand}
        eyebrow="Voice"
        title="Clinical, not cold. Confident, not loud."
        objectPosition="object-cover object-[55%_center]"
      />

      <section className="bg-cloud">
        <div className="shell section-y">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-3">
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
