import Link from "next/link";
import { brand } from "@/lib/content";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
};

export function CTAPanel({
  eyebrow = "Begin care",
  title = brand.tagline,
  body = "Meet a physician who designs your protocol around your labs — then delivers with clinical precision.",
}: Props) {
  return (
    <section className="bg-white px-[var(--gutter)] pb-10 sm:pb-14">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-midnight px-6 py-12 text-white sm:rounded-[36px] sm:px-12 sm:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <p className="label-caps !text-sage-mist">{eyebrow}</p>
            <h2 className="mt-3 text-[clamp(1.5rem,4vw,2.25rem)] font-light tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-4 text-[15px] font-light leading-relaxed text-sage-mist">
              {body}
            </p>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/start"
                className="btn-pill-primary inline-flex h-12 items-center justify-center rounded-full bg-sage px-6 text-[15px] font-normal text-[#FFFFFF]"
              >
                Start your protocol
              </Link>
              <Link
                href="/how-it-works"
                className="btn-pill-secondary inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-[15px] font-normal text-midnight"
              >
                How it works
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
