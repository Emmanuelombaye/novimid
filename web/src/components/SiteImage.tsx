import Image, { type ImageProps } from "next/image";
import type { SiteImage as SiteImageMeta } from "@/lib/media";

type Props = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  image: SiteImageMeta;
  /** Override registry alt when context needs a different description */
  alt?: string;
};

/**
 * Thin next/image wrapper bound to the media registry.
 * Prefer `fill` inside aspect-ratio boxes; pass width/height when not filling.
 */
export function SiteImage({
  image,
  alt,
  className = "",
  quality,
  sizes,
  fill,
  ...rest
}: Props) {
  const shared = {
    alt: alt ?? image.alt,
    quality: quality ?? image.quality ?? 82,
    sizes: sizes ?? image.sizes,
    className: `${image.position ?? ""} ${className}`.trim(),
  };

  if (fill) {
    return <Image {...rest} {...shared} src={image.src} fill />;
  }

  return (
    <Image
      {...rest}
      {...shared}
      src={image.src}
      width={image.width}
      height={image.height}
    />
  );
}
