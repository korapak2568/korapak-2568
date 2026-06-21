"use client";

import Image from "next/image";
import Link from "next/link";
import type { FutureRoadmapFeaturedItem } from "@/lib/platform-content/futureRoadmapContent";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

export default function FutureCivilizationHero({
  lang,
  featuredItems,
  heroItem,
}: {
  lang: string;
  featuredItems: FutureRoadmapFeaturedItem[];
  heroItem: FutureRoadmapFeaturedItem;
}) {
  const href = `/${lang}/future-civilization/`;

  return (
    <section className="future-civilization-home-hero">
      <div className="future-civilization-home-hero__body">
        <div className="platform-section__header future-civilization-home-hero__header">
          <span>Chorn Planet future systems</span>
          <h1 className="future-civilization-home-hero__headline">
            Future Civilization
          </h1>
        </div>

        <div className="future-civilization-home-hero__content">
          <p className="future-civilization-home-hero__paragraph">
            Chorn Planet connects civilization media, roadmap storytelling, and
            technology development into one premium platform for long-term
            cities, food systems, mobility, space, AI, and human futures.
          </p>

          <div className="future-civilization-home-hero__actions">
            <Link href={href}>Open Roadmap</Link>
            <Link href={href}>Explore Eras</Link>
          </div>

          <div
            className="future-civilization-home-hero__rail"
            aria-label="Featured roadmap signals"
          >
            {featuredItems.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                className="future-civilization-home-hero__rail-card"
                href={`${href}${item.era.slug}/${item.slug}/`}
              >
                <div className="future-civilization-home-hero__rail-image">
                  <Image
                    src={getPlatformImageSrc(item.image, "thumbnail")}
                    alt={getPlatformImageAlt(item.image, "thumbnail")}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 991px) 50vw, 22vw"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="future-civilization-home-hero__visual">
          <Link
            className="future-civilization-home-hero__image"
            href={`${href}${heroItem.era.slug}/${heroItem.slug}/`}
            aria-label={`Open ${heroItem.era.title}`}
          >
            <Image
              src={getPlatformImageSrc(heroItem.image, "desktop")}
              alt={getPlatformImageAlt(heroItem.image, "desktop")}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="future-civilization-home-hero__image-caption">
              <span>Phase one civilization signal</span>
              <strong>{heroItem.shortTitle}</strong>
              <small>Era {String(heroItem.era.order).padStart(2, "0")}</small>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
