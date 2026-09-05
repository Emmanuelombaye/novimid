import Link from "next/link";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "1",
    title: "Choose a program",
    body: "Review program information and transparent pricing.",
  },
  {
    n: "2",
    title: "Complete checkout",
    body: "Purchase your Novimid program securely.",
  },
  {
    n: "3",
    title: "Complete your medical intake",
    body: "After checkout, complete the required secure health intake and identity-verification process.",
  },
  {
    n: "4",
    title: "Licensed-provider review",
    body: "A licensed provider reviews your information. Treatment is provided only if appropriate.",
  },
] as const;

/**
 * Clinical pathway — Scriptful-style numbered steps + important notice.
 */
export function ClinicalProcess() {
  return (
    <section className="bg-white">
      <div className="shell section-y">
        <Reveal>
          <p className="label-caps text-center">Clinical pathway</p>
          <h2 className="mx-auto mt-3 max-w-[18ch] text-center font-[family-name:var(--font-dm-sans)] text-[clamp(1.85rem,4.5vw,2.75rem)] font-light leading-[1.1] tracking-[-0.03em] text-midnight">
            Care that starts with clinical process
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[15px] font-light leading-relaxed text-forest sm:text-[16px]">
            From choosing a program through licensed-provider review — structured
            steps designed for clarity, safety, and oversight.
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.n} delayMs={i * 70} as="li">
              <article className="flex h-full flex-col rounded-[16px] border-[0.5px] border-mist bg-cloud/50 p-6 sm:p-7">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-sage font-[family-name:var(--font-dm-sans)] text-[14px] font-medium text-white">
                  {step.n}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-dm-sans)] text-[1.1rem] font-normal leading-snug tracking-[-0.01em] text-midnight sm:text-[1.15rem]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] font-light leading-relaxed text-forest sm:text-[15px]">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal delayMs={280}>
          <div className="mt-8 rounded-[16px] border-[0.5px] border-sage/35 bg-cloud p-6 sm:mt-10 sm:p-7">
            <p className="text-[14px] font-light leading-relaxed text-midnight sm:text-[15px]">
              <span className="font-medium">Important.</span> Purchasing a
              program does not guarantee that a prescription will be issued. If
              the provider does not approve treatment, the order will be handled
              according to the Novimid refund and cancellation policy.
            </p>
            <Link
              href="/policies/terms-of-use"
              className="mt-3 inline-block text-[14px] font-normal text-sage underline-offset-4 transition-colors hover:text-midnight hover:underline"
            >
              Read the refund and cancellation policy
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
