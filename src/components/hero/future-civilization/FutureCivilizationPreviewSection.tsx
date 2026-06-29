"use client";

import Image from "next/image";
import Link from "next/link";
import type {
  FutureRoadmapFeaturedItem,
  FutureRoadmapManifest,
} from "@/lib/platform-content/futureRoadmapContent";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

type FutureCivilizationPreviewCopy = FutureRoadmapManifest["ui"]["homePreview"];

export default function FutureCivilizationPreviewSection({
  lang,
  featuredItems,
  copy,
  eraLabel,
}: {
  lang: string;
  featuredItems: FutureRoadmapFeaturedItem[];
  copy: FutureCivilizationPreviewCopy;
  eraLabel: string;
}) {
  return (
    <section className="platform-shell future-civilization-preview">
      <div className="platform-section__header future-civilization-preview__header">
        <span>{copy.eyebrow}</span>
        <h2>{copy.title}</h2>
        <p>{copy.description}</p>
      </div>
      <div className="future-civilization-preview__grid">
        {featuredItems.map((item, index) => {
          const isFeatured = index === 0;
          const imageVariant = isFeatured ? "desktop" : "thumbnail";

          return (
            <article
              key={item.id}
              className={
                isFeatured
                  ? "future-civilization-preview-card future-civilization-preview-card--featured"
                  : "future-civilization-preview-card"
              }
            >
              <Link href={`/${lang}/future-civilization/${item.era.slug}/${item.slug}/`}>
                <div className="future-civilization-preview-card__media">
                  <Image
                    src={getPlatformImageSrc(item.image, imageVariant)}
                    alt={getPlatformImageAlt(item.image, imageVariant)}
                    fill
                    sizes={
                      isFeatured
                        ? "(max-width: 640px) 100vw, (max-width: 991px) 48vw, 44vw"
                        : "(max-width: 640px) 100vw, (max-width: 991px) 38vw, 32vw"
                    }
                  />
                </div>
              <div className="future-civilization-preview-card__body">
                <span>
                  {eraLabel} {String(item.era.order).padStart(2, "0")} /{" "}
                  {item.era.timeframe.startYear}-{item.era.timeframe.endYear}
                </span>
                <h3>{item.era.title}</h3>
                <p>{item.description}</p>
                <strong>{copy.actionLabel}</strong>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
