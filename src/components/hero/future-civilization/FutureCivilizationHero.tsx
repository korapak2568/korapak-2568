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

type FutureCivilizationHeroCopy = FutureRoadmapManifest["ui"]["homeHero"];

export default function FutureCivilizationHero({
  lang,
  featuredItems,
  heroItem,
  copy,
  eraLabel,
}: {
  lang: string;
  featuredItems: FutureRoadmapFeaturedItem[];
  heroItem: FutureRoadmapFeaturedItem;
  copy: FutureCivilizationHeroCopy;
  eraLabel: string;
}) {
  const href = `/${lang}/future-civilization/`;

  return (
    <section className="future-civilization-home-hero">
      <div className="future-civilization-home-hero__body">
        <div className="platform-section__header future-civilization-home-hero__header">
          <span>{copy.eyebrow}</span>
          <h1 className="future-civilization-home-hero__headline">
            {copy.title}
          </h1>
        </div>

        <div className="future-civilization-home-hero__content">
          <p className="future-civilization-home-hero__paragraph">
            {copy.description}
          </p>

          <div className="future-civilization-home-hero__actions">
            <Link href={href}>{copy.actions.openRoadmap}</Link>
            <Link href={href}>{copy.actions.exploreRoadmap}</Link>
          </div>

          <div
            className="future-civilization-home-hero__rail"
            aria-label={copy.railAriaLabel}
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
              <span>{copy.imageCaptionEyebrow}</span>
              <strong>{heroItem.shortTitle}</strong>
              <small>{eraLabel} {String(heroItem.era.order).padStart(2, "0")}</small>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
