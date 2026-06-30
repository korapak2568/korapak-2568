import Image from "next/image";
import type { ImageProps } from "next/image";

import type { PlatformResponsiveImage } from "@/lib/platform-content/platformImageVariants";
import {
  getPlatformImageAlt,
  getPlatformImageVariant,
} from "@/lib/platform-content/platformImageVariants";

type SmartCityResponsiveImageProps = {
  image: PlatformResponsiveImage;
  className?: string;
  priority?: boolean;
  sizes: string;
  variant?: "feature" | "card";
};

export default function SmartCityResponsiveImage({
  image,
  className,
  priority = false,
  sizes,
  variant = "feature",
}: SmartCityResponsiveImageProps) {
  const mobile = getPlatformImageVariant(image, "mobile");
  const thumbnail = getPlatformImageVariant(image, "thumbnail");
  const desktop = getPlatformImageVariant(image, "desktop");
  const fallback = variant === "card" ? thumbnail : desktop;
  const alt = getPlatformImageAlt(
    image,
    variant === "card" ? "thumbnail" : "desktop",
  );
  const loading: ImageProps["loading"] = priority ? "eager" : "lazy";
  const fetchPriority: ImageProps["fetchPriority"] = priority ? "high" : undefined;

  return (
    <picture>
      <source
        media="(max-width: 640px)"
        srcSet={mobile.src}
        width={mobile.width}
        height={mobile.height}
      />
      {variant === "card" ? (
        <source
          media="(min-width: 641px)"
          srcSet={thumbnail.src}
          width={thumbnail.width}
          height={thumbnail.height}
        />
      ) : (
        <source
          media="(min-width: 641px)"
          srcSet={desktop.src}
          width={desktop.width}
          height={desktop.height}
        />
      )}
      <Image
        className={className}
        src={fallback.src}
        alt={alt}
        width={fallback.width}
        height={fallback.height}
        loading={loading}
        fetchPriority={fetchPriority}
        sizes={sizes}
      />
    </picture>
  );
}
