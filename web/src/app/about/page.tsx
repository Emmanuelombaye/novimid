import type { Metadata } from "next";
import { AboutBleedBand } from "@/components/AboutBleedBand";
import { CTAPanel } from "@/components/CTAPanel";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { brand } from "@/lib/content";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "About",
  description:
    "Novimid is a technology platform that connects eligible patients with independent U.S.-licensed clinicians for weight-management programs when clinically appropriate.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Novimid"
        title="Clinician-guided care, without the noise"
        body="Licensed clinician review. Clear process. Personalized protocols when appropriate — not templates, not hype."
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
                Novimid is a technology platform that connects eligible patients with independent
                U.S.-licensed clinicians for Semaglutide and Tirzepatide weight-management programs
                when clinically appropriate. Completing intake does not guarantee a prescription.
              </p>
              <p className="type-body mt-5 text-[16px] sm:text-[17px]">
                Novimid is not a pharmacy and does not itself practice medicine. When prescribed,
                medication is fulfilled through licensed U.S. pharmacy partners. Compounded
                medications, when used, are not FDA-approved finished products.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutBleedBand
        image={media.about.californiaBand}
        eyebrow="How care is delivered"
        title="Licensed review · Pharmacy partners · Clear follow-up"
        objectPosition="object-cover object-[55%_center]"
        tone="soft"
      />

      <section className="bg-midnight text-white">
        <div className="shell section-y">
          <Reveal>
            <p className="mt-0 max-w-2xl text-[15px] font-light text-sage-mist sm:text-lg">
              Built for clinical accountability
            </p>
            <p className="mt-5 max-w-2xl text-[15px] font-light leading-relaxed text-cloud">
              Independent clinicians decide whether treatment is appropriate. Licensed pharmacy
              partners dispense when prescribed. We keep the process plain so nothing arrives as a
              surprise later.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
              {["Clinical intake", "Licensed review", "Fulfillment if prescribed"].map((step) => (
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
        objectPosition="object-cover object-[58%_center]"
        tone="soft"
      />

      <section className="bg-cloud">
        <div className="shell section-y">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  t: "Empowering",
                  b: "We inform, not dictate. You and your clinician decide together.",
                },
                {
                  t: "Modern",
                  b: "We describe what we do plainly — no buzzwords that age overnight.",
                },
                {
                  t: "Transparent",
                  b: "We name telehealth, pharmacy partners, and compounding status clearly.",
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
