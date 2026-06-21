"use client";

import Image from "next/image";
import Link from "next/link";
import type { FutureRoadmapFeaturedItem } from "@/lib/platform-content/futureRoadmapContent";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

export default function FutureCivilizationPreviewSection({
  lang,
  featuredItems,
}: {
  lang: string;
  featuredItems: FutureRoadmapFeaturedItem[];
}) {
  return (
    <section className="platform-shell future-civilization-preview">
      <div className="platform-section__header future-civilization-preview__header">
        <span>Future Civilization Roadmap</span>
        <h2>Civilization Roadmap Signals</h2>
        <p>
          This set refreshes from the 40 ready signals in Era 01 and Era 02, so
          the homepage keeps surfacing different civilization, media, and technology signals.
        </p>
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
                  Era {String(item.era.order).padStart(2, "0")} /{" "}
                  {item.era.timeframe.startYear}-{item.era.timeframe.endYear}
                </span>
                <h3>{item.era.title}</h3>
                <p>{item.description}</p>
                <strong>Explore Era</strong>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
