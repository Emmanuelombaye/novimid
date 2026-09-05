import { Reveal } from "./Reveal";
import { SiteImage } from "./SiteImage";
import type { SiteImage as SiteImageMeta } from "@/lib/media";

type Props = {
  image: SiteImageMeta;
  eyebrow: string;
  title: string;
  objectPosition?: string;
  priority?: boolean;
  /** Lighter overlay for brighter photos */
  tone?: "dark" | "soft";
};

/**
 * Full-bleed About page photo band — edge-to-edge image with bottom title.
 */
export function AboutBleedBand({
  image,
  eyebrow,
  title,
  objectPosition = "object-cover object-center",
  priority = false,
  tone = "dark",
}: Props) {
  const overlay =
    tone === "soft"
      ? "bg-[linear-gradient(180deg,rgba(44,58,53,0.06)_0%,transparent_40%,rgba(44,58,53,0.58)_100%)]"
      : "bg-[linear-gradient(180deg,rgba(32,46,40,0.1)_0%,transparent_36%,rgba(32,46,40,0.72)_100%)]";

  return (
    <section className="relative isolate w-full overflow-hidden">
      <div className="relative min-h-[min(70vh,620px)] w-full sm:min-h-[min(76vh,700px)] lg:min-h-[min(82vh,780px)]">
        <SiteImage
          image={image}
          fill
          priority={priority}
          className={`${objectPosition} scale-[1.01]`}
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlay}`} aria-hidden />
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="shell pb-10 pt-24 sm:pb-12 sm:pt-28 lg:pb-14">
            <Reveal>
              <p className="text-[12px] font-normal tracking-[0.16em] text-sage-mist uppercase">
                {eyebrow}
              </p>
              <h2 className="mt-3 max-w-[20ch] font-[family-name:var(--font-dm-sans)] text-[clamp(1.85rem,4.5vw,2.75rem)] font-light leading-[1.08] tracking-[-0.03em] text-white">
                {title}
              </h2>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
