export const whyPoints = [
  {
    title: "One clear price",
    body: "A single monthly figure per program, shown before you buy.",
  },
  {
    title: "No separate consultation charge",
    body: "The online clinical consultation is part of the program price.",
  },
  {
    title: "No standard-shipping fee",
    body: "Standard shipping is included once a prescription is approved.",
  },
  {
    title: "Licensed-provider review",
    body: "An independent clinician decides whether treatment is appropriate.",
  },
  {
    title: "Secure online experience",
    body: "Intake, identification, and messages stay inside your account.",
  },
  {
    title: "Ongoing support",
    body: "Program support and routine follow-up are included, not upsold.",
  },
  {
    title: "Easy program management",
    body: "Cancel, review orders, and track status from your account.",
  },
] as const;

export const whyIntro =
  "A deliberately simple commercial model, described plainly so nothing arrives as a surprise later.";

/** Why novimid — plain benefit list adapted from transparent-pricing telehealth pattern. */
export function WhyNovimidGrid() {
  return (
    <div className="mx-auto mt-7 max-w-3xl sm:mt-8">
      <p className="mx-auto max-w-xl text-center font-[family-name:var(--font-dm-sans)] text-[15px] font-light leading-relaxed text-forest sm:text-[16px]">
        {whyIntro}
      </p>
      <ul className="mt-9 grid gap-3 sm:mt-10 sm:gap-3.5">
        {whyPoints.map((item) => (
          <li
            key={item.title}
            className="flex gap-4 rounded-[12px] border-[0.5px] border-mist bg-cloud/60 px-5 py-4 sm:gap-5 sm:px-6 sm:py-[1.15rem]"
          >
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sage"
              aria-hidden
            />
            <div>
              <h3 className="font-[family-name:var(--font-dm-sans)] text-[16px] font-normal tracking-[-0.01em] text-midnight sm:text-[17px]">
                {item.title}
              </h3>
              <p className="mt-1 font-[family-name:var(--font-dm-sans)] text-[14px] font-light leading-relaxed text-forest sm:text-[15px]">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
