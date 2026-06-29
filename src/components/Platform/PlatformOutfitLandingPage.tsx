"use client";

import Image from "next/image";
import Link from "next/link";
import type {
  PlatformOutfitHeroImage,
  PlatformOutfitSet,
  ResolvedPlatformOutfitContent,
} from "@/lib/platform-content/styleContent";
import { getPlatformOutfitLocalizedText } from "@/lib/platform-content/styleContent";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";
import { usePlatformStyleContent } from "@/lib/platform-content/usePlatformStyleContent";

function getLocalizedAnchor(lang: string, id: string): string {
  return `/${lang}/style/#${id}`;
}

function getLocalizedOutfitHref(lang: string, id: string): string {
  return `/${lang}/style/${id}/`;
}

function HeroImage({
  image,
  priority = false,
}: {
  image: PlatformOutfitHeroImage;
  priority?: boolean;
}) {
  return (
    <Image
      src={getPlatformImageSrc(image, "desktop")}
      alt={getPlatformImageAlt(image, "desktop")}
      fill
      priority={priority}
      sizes={image.sizes}
      style={{ objectFit: "cover", objectPosition: "50% 18%" }}
    />
  );
}

function OutfitImage({
  outfitSet,
  sizes,
}: {
  outfitSet: PlatformOutfitSet;
  sizes: string;
}) {
  return (
    <Image
      src={getPlatformImageSrc(outfitSet.image, "thumbnail")}
      alt={getPlatformImageAlt(outfitSet.image, "thumbnail")}
      fill
      sizes={sizes}
      style={{ objectFit: "cover", objectPosition: "50% 18%" }}
    />
  );
}

export default function PlatformOutfitLandingPage({
  lang,
  content,
}: {
  lang: string;
  content: ResolvedPlatformOutfitContent;
}) {
  const { data: cachedContent } = usePlatformStyleContent(lang, content);
  const styleContent = cachedContent ?? content;
  const [primaryHeroImage, secondaryHeroImage, tertiaryHeroImage] =
    styleContent.hero.images;
  const featuredSection = styleContent.layoutSections.find(
    (section) => section.id === "featured-outfit-sets",
  );

  return (
    <main className="platform-page platform-outfit-page">
      <section className="platform-outfit-hero">
        <div className="platform-outfit-hero__copy">
          <span className="platform-eyebrow">{styleContent.hero.eyebrow}</span>
          <h1>{styleContent.hero.title}</h1>
          <p>{styleContent.hero.description}</p>
          <div className="platform-outfit-hero__actions">
            <Link href={getLocalizedAnchor(lang, "featured-outfit-sets")}>
              {styleContent.hero.primaryCta}
            </Link>
          </div>
        </div>
        <div
          className="platform-outfit-hero__mosaic"
          aria-label={styleContent.hero.imageStrategy}
        >
          {primaryHeroImage && (
            <figure className="platform-outfit-hero__tile platform-outfit-hero__tile--1">
              <HeroImage image={primaryHeroImage} priority />
            </figure>
          )}
          <div className="platform-outfit-hero__side">
            {secondaryHeroImage && (
              <figure className="platform-outfit-hero__tile platform-outfit-hero__tile--2">
                <HeroImage image={secondaryHeroImage} />
              </figure>
            )}
            {tertiaryHeroImage && (
              <figure className="platform-outfit-hero__tile platform-outfit-hero__tile--3">
                <HeroImage image={tertiaryHeroImage} />
              </figure>
            )}
          </div>
        </div>
      </section>

      <section
        id="featured-outfit-sets"
        className="platform-shell platform-outfit-section"
      >
        <div className="platform-section__header">
          <span>{featuredSection?.label ?? "Featured Sets"}</span>
          <h2>{featuredSection?.title ?? "Starter outfit sets"}</h2>
        </div>
        <div className="platform-outfit-grid">
          {styleContent.outfitSets.map((outfitSet) => (
            <article key={outfitSet.id} className="platform-outfit-card">
              <Link
                className="platform-outfit-card__link"
                href={getLocalizedOutfitHref(lang, outfitSet.id)}
              >
                <div className="platform-outfit-card__media">
                  <OutfitImage
                    outfitSet={outfitSet}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="platform-outfit-card__body">
                  <span>{outfitSet.audience}</span>
                  <h3>
                    {getPlatformOutfitLocalizedText(
                      outfitSet.title,
                      styleContent.locale,
                    )}
                  </h3>
                  <p>
                    {getPlatformOutfitLocalizedText(
                      outfitSet.visualSummary,
                      styleContent.locale,
                    )}
                  </p>
                  <div className="platform-outfit-card__meta">
                    <strong>
                      {outfitSet.subZoneRequired
                        ? styleContent.landingPage.subZoneRequiredLabel ?? ""
                        : styleContent.landingPage.zoneReadyLabel ?? ""}
                    </strong>
                    <small>
                      {outfitSet.zoneDisplay?.[0] ?? outfitSet.zoneCandidates?.[0] ?? ""}
                    </small>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
