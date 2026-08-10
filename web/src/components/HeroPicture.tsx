import { getImageProps } from "next/image";
import { media } from "@/lib/media";

/**
 * Art-directed hero: browser picks mobile OR desktop (one download),
 * optimized via next/image (AVIF/WebP).
 */
export function HeroPicture({ className = "" }: { className?: string }) {
  const { desktop, mobile } = media.hero;

  const common = {
    alt: mobile.alt,
    quality: desktop.quality ?? 85,
  };

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    width: desktop.width,
    height: desktop.height,
    src: desktop.src,
    sizes: desktop.sizes ?? "100vw",
  });

  const {
    props: { srcSet: mobileSrcSet, ...img },
  } = getImageProps({
    ...common,
    width: mobile.width,
    height: mobile.height,
    src: mobile.src,
    sizes: mobile.sizes ?? "100vw",
    priority: true,
  });

  return (
    <picture className="absolute inset-0 block h-full w-full overflow-hidden">
      <source
        media="(min-width: 640px)"
        srcSet={desktopSrcSet}
        sizes={desktop.sizes ?? "100vw"}
      />
      {/* alt from getImageProps */}
      <img
        {...img}
        srcSet={mobileSrcSet}
        sizes={mobile.sizes ?? "100vw"}
        className={`hero-ken absolute inset-0 h-full w-full max-w-none object-cover ${className}`.trim()}
        decoding="async"
        fetchPriority="high"
        draggable={false}
      />
    </picture>
  );
}
