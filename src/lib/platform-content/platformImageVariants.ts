type GeneratedPlatformImageVariantKey = "mobile" | "thumbnail" | "desktop";

export type PlatformImageVariantKey =
  | GeneratedPlatformImageVariantKey
  | "open_graph";

export type PlatformResponsiveImageVariant = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  quality?: number;
};

export type PlatformResponsiveImage = {
  src?: string;
  url?: string;
  image_url?: string;
  alt: string;
  mobile?: PlatformResponsiveImageVariant;
  thumbnail?: PlatformResponsiveImageVariant;
  desktop?: PlatformResponsiveImageVariant;
  open_graph?: PlatformResponsiveImageVariant;
};

const platformImageVariantProfiles: Record<
  string,
  Record<
    GeneratedPlatformImageVariantKey,
    Omit<PlatformResponsiveImageVariant, "src" | "alt">
  >
> = {
  "16:9": {
    mobile: { width: 960, height: 540, quality: 78 },
    thumbnail: { width: 640, height: 360, quality: 72 },
    desktop: { width: 1920, height: 1080, quality: 82 },
  },
  "3:2": {
    mobile: { width: 768, height: 512, quality: 78 },
    thumbnail: { width: 480, height: 320, quality: 72 },
    desktop: { width: 1200, height: 800, quality: 82 },
  },
  "4:3": {
    mobile: { width: 768, height: 576, quality: 78 },
    thumbnail: { width: 480, height: 360, quality: 72 },
    desktop: { width: 1200, height: 900, quality: 82 },
  },
  "16:10": {
    mobile: { width: 800, height: 500, quality: 78 },
    thumbnail: { width: 640, height: 400, quality: 72 },
    desktop: { width: 1600, height: 1000, quality: 82 },
  },
  "2:3": {
    mobile: { width: 720, height: 1080, quality: 78 },
    thumbnail: { width: 480, height: 720, quality: 72 },
    desktop: { width: 1024, height: 1536, quality: 82 },
  },
  "9:16": {
    mobile: { width: 720, height: 1280, quality: 78 },
    thumbnail: { width: 405, height: 720, quality: 72 },
    desktop: { width: 900, height: 1600, quality: 82 },
  },
};

function getOriginalImageSrc(image: PlatformResponsiveImage): string {
  return image.src ?? image.url ?? image.image_url ?? "";
}

function getVariantSrc(
  src: string,
  variant: GeneratedPlatformImageVariantKey,
): string {
  if (!src.startsWith("/")) {
    return src;
  }

  const lastSlashIndex = src.lastIndexOf("/");
  const directory = lastSlashIndex >= 0 ? src.slice(0, lastSlashIndex) : "";
  const filename = lastSlashIndex >= 0 ? src.slice(lastSlashIndex + 1) : src;
  const extensionIndex = filename.lastIndexOf(".");
  const basename =
    extensionIndex >= 0 ? filename.slice(0, extensionIndex) : filename;

  return `${directory}/${variant}/${basename}.webp`;
}

function isResponsiveImageLike(
  value: unknown,
): value is PlatformResponsiveImage {
  if (!value || typeof value !== "object") {
    return false;
  }

  const image = value as Partial<PlatformResponsiveImage> & {
    width?: unknown;
    height?: unknown;
  };

  if (typeof image.width === "number" && typeof image.height === "number") {
    return false;
  }

  return (
    typeof image.alt === "string" &&
    (typeof image.src === "string" ||
      typeof image.url === "string" ||
      typeof image.image_url === "string")
  );
}

export function withPlatformImageVariants<T extends PlatformResponsiveImage>(
  image: T,
  aspectRatio = "16:9",
): T {
  const src = getOriginalImageSrc(image);
  const profile =
    platformImageVariantProfiles[aspectRatio] ??
    platformImageVariantProfiles["16:9"];

  return {
    ...image,
    mobile: image.mobile ?? {
      src: getVariantSrc(src, "mobile"),
      alt: image.alt,
      ...profile.mobile,
    },
    thumbnail: image.thumbnail ?? {
      src: getVariantSrc(src, "thumbnail"),
      alt: image.alt,
      ...profile.thumbnail,
    },
    desktop: image.desktop ?? {
      src: getVariantSrc(src, "desktop"),
      alt: image.alt,
      ...profile.desktop,
    },
  };
}

export function hydratePlatformImageVariants<T>(
  value: T,
  aspectRatio = "16:9",
): T {
  if (Array.isArray(value)) {
    return value.map((item) =>
      hydratePlatformImageVariants(item, aspectRatio),
    ) as T;
  }

  if (!value || typeof value !== "object") {
    return value;
  }

  if (isResponsiveImageLike(value)) {
    return withPlatformImageVariants(value, aspectRatio) as T;
  }

  const next = { ...(value as Record<string, unknown>) };

  for (const key of Object.keys(next)) {
    if (
      key === "mobile" ||
      key === "thumbnail" ||
      key === "desktop" ||
      key === "open_graph"
    ) {
      continue;
    }

    next[key] = hydratePlatformImageVariants(next[key], aspectRatio);
  }

  return next as T;
}

export function getPlatformImageVariant(
  image: PlatformResponsiveImage,
  variant: PlatformImageVariantKey,
): PlatformResponsiveImageVariant {
  return (
    image[variant] ?? {
      src: getOriginalImageSrc(image),
      alt: image.alt,
      width: 0,
      height: 0,
    }
  );
}

export function getPlatformImageSrc(
  image: PlatformResponsiveImage,
  variant: PlatformImageVariantKey,
): string {
  return getPlatformImageVariant(image, variant).src;
}

export function getPlatformImageAlt(
  image: PlatformResponsiveImage,
  variant: PlatformImageVariantKey,
): string {
  return getPlatformImageVariant(image, variant).alt ?? image.alt;
}
