import Link from "next/link";
import type { SiteImage as SiteImageMeta } from "@/lib/media";
import { SiteImage } from "./SiteImage";

type Props = {
  image: SiteImageMeta;
  headline: string;
  headlineLine2?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  objectPosition?: string;
};

/**
 * Full-bleed CTA band:
 * edge-to-edge lifestyle photo, left white headline, solid + outline pills.
 */
export function CtaBand({
  image,
  headline,
  headlineLine2,
  primaryHref = "/start",
  primaryLabel = "Get started",
  secondaryHref = "/treatments",
  secondaryLabel = "Is this right for me?",
  objectPosition = "object-cover object-center",
}: Props) {
  return (
    <section className="relative isolate min-h-[min(72vh,640px)] w-full overflow-hidden sm:min-h-[min(78vh,720px)] lg:min-h-[min(82vh,760px)]">
      <div className="absolute inset-0" aria-hidden>
        <SiteImage
          image={image}
          fill
          loading="lazy"
          className={`${objectPosition} scale-[1.01]`}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(44,58,53,0.72)_0%,rgba(44,58,53,0.45)_36%,rgba(44,58,53,0.18)_62%,rgba(44,58,53,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,58,53,0.08)_0%,transparent_42%,rgba(44,58,53,0.22)_100%)]" />
      </div>

      <div className="relative z-10 flex min-h-[min(72vh,640px)] items-center sm:min-h-[min(78vh,720px)] lg:min-h-[min(82vh,760px)]">
        <div className="shell w-full py-16 sm:py-20 lg:py-24">
          <div className="max-w-[20rem] sm:max-w-[26rem] lg:max-w-[30rem]">
            <h2 className="font-[family-name:var(--font-dm-sans)] text-[clamp(2.6rem,7vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.04em] text-white">
              {headline}
              {headlineLine2 ? (
                <>
                  <br />
                  {headlineLine2}
                </>
              ) : null}
            </h2>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
              <Link
                href={primaryHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#6B8F71] px-7 text-[15px] font-medium text-white transition-colors hover:bg-[#5F8165] sm:h-[3.25rem] sm:min-w-[10.5rem] sm:px-8 sm:text-[16px]"
              >
                {primaryLabel}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/90 bg-white/12 px-7 text-[15px] font-medium text-white backdrop-blur-[2px] transition-colors hover:bg-white/20 sm:h-[3.25rem] sm:px-8 sm:text-[16px]"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
