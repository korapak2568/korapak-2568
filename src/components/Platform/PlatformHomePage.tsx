"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import FutureCivilizationHero from "@/components/hero/future-civilization/FutureCivilizationHero";
import FutureCivilizationPreviewSection from "@/components/hero/future-civilization/FutureCivilizationPreviewSection";
import PlatformContentCard, {
  getLocalizedHref,
} from "@/components/Platform/PlatformContentCard";
import type {
  FutureRoadmapFeaturedItem,
  FutureRoadmapManifest,
} from "@/lib/platform-content/futureRoadmapContent";
import type {
  PlatformCircularContent,
  PlatformHomeContent,
  PlatformSection,
} from "@/lib/platform-content/homeContent";
import type { PlatformSofaCoupleStory } from "@/lib/platform-content/storyShared";
import {
  getPlatformOutfitLocalizedText,
  type PlatformOutfitSet,
} from "@/lib/platform-content/styleShared";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

function PlatformHomeSection({
  lang,
  section,
}: {
  lang: string;
  section: PlatformSection;
}) {
  return (
    <section
      className={`platform-section platform-section--${section.layout}`}
      id={section.id}
    >
      <div className="platform-section__header">
        <span>{section.eyebrow}</span>
        <h2>{section.title}</h2>
      </div>
      <div className="platform-card-grid">
        {section.cards.map((card) => (
          <PlatformContentCard
            key={`${section.id}-${card.title}`}
            lang={lang}
            card={card}
          />
        ))}
      </div>
    </section>
  );
}

export function PlatformHomeCircularSystemSection({
  lang,
  circular,
  sofaCoupleStory,
  showStoryLink = true,
  showTiktokLink = false,
}: {
  lang: string;
  circular: PlatformCircularContent;
  sofaCoupleStory: PlatformSofaCoupleStory;
  showStoryLink?: boolean;
  showTiktokLink?: boolean;
}) {
  return (
    <>
      <section className="platform-shell platform-outfit-detail-related platform-home-sofa-story platform-home-sofa-story--intro">
        <div className="platform-section__header platform-home-sofa-story__section1">
          <span>{circular.span}</span>
          <h2>{circular.title}</h2>
        </div>
      </section>

      <section className="platform-shell platform-outfit-detail-related platform-home-sofa-story platform-home-sofa-story--feature">
        <div
          className="platform-home-sofa-story__section2"
          aria-labelledby="platform-home-sofa-story-title"
        >
          <div className="platform-home-sofa-story__media">
            <Image
              src={getPlatformImageSrc(
                sofaCoupleStory.imagePortrait,
                "desktop",
              )}
              alt={getPlatformImageAlt(
                sofaCoupleStory.imagePortrait,
                "desktop",
              )}
              fill
              sizes="(max-width: 991px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="platform-home-sofa-story__content">
            <div className="platform-home-sofa-story__copy">
              <span>{circular.span}</span>
              <h3 id="platform-home-sofa-story-title">{circular.title}</h3>
              <p>{circular.description}</p>
            </div>
            <div className="platform-home-sofa-story__cards">
              {circular.categories.slice(0, 4).map((storyImage) => (
                <Link
                  key={storyImage.image.src}
                  className="platform-home-sofa-story__card-media"
                  href={getLocalizedHref(lang, storyImage.link)}
                >
                  <div className="platform-home-sofa-story__card-image">
                    <Image
                      src={getPlatformImageSrc(storyImage.image, "thumbnail")}
                      alt={getPlatformImageAlt(storyImage.image, "thumbnail")}
                      fill
                      sizes="(max-width: 640px) 50vw, 180px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <span className="platform-home-sofa-story__card-caption">
                    {storyImage.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PlatformHomeOutfitSection({
  lang,
  outfitSets,
  section,
}: {
  lang: string;
  outfitSets: PlatformOutfitSet[];
  section?: PlatformSection;
}) {

  return (
    <section className="platform-shell platform-outfit-detail-related platform-home-sofa-story platform-home-sofa-story--outfits">
      <div className="platform-section__header platform-home-sofa-story__section1">
        <span>{section?.eyebrow}</span>
        <h2>{section?.title}</h2>
      </div>

      <div className="platform-outfit-detail-related__grid platform-home-sofa-story__section3">
        {outfitSets.map((outfitSet) => (
          <article key={outfitSet.id} className="platform-outfit-card">
            <Link
              className="platform-outfit-card__link"
              href={`/${lang}/style/${outfitSet.id}/`}
            >
              <div className="platform-outfit-card__media">
                <Image
                  src={getPlatformImageSrc(outfitSet.image, "thumbnail")}
                  alt={getPlatformImageAlt(outfitSet.image, "thumbnail")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 410px"
                  style={{ objectFit: "cover", objectPosition: "50% 18%" }}
                />
              </div>
              <div className="platform-outfit-card__body">
                <span>{outfitSet.audience}</span>
                <h3>{getPlatformOutfitLocalizedText(outfitSet.title, lang)}</h3>
                <p>
                  {getPlatformOutfitLocalizedText(
                    outfitSet.visualSummary,
                    lang,
                  )}
                </p>
                <div className="platform-outfit-card__meta">
                  <strong>View Style</strong>
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
  );
}

export default function PlatformHomePage({
  lang,
  content,
  afterHero,
  futureRoadmapItems,
  futureRoadmapHeroItem,
  futureRoadmapManifest,
  outfitSets,
  sofaCoupleStory,
}: {
  lang: string;
  content: PlatformHomeContent;
  afterHero?: ReactNode;
  futureRoadmapItems: FutureRoadmapFeaturedItem[];
  futureRoadmapHeroItem: FutureRoadmapFeaturedItem;
  futureRoadmapManifest: FutureRoadmapManifest;
  outfitSets: PlatformOutfitSet[];
  sofaCoupleStory: PlatformSofaCoupleStory;
}) {
  const homeContent = content;
  const outfitSection = homeContent.sections.find(
    (section) => section.layout === "grid",
  );
  const platformSections = homeContent.sections.filter(
    (section) => section.layout !== "grid",
  );
  const futureHeroItems = futureRoadmapItems.slice(1, 5);
  const futurePreviewItems = futureRoadmapItems.slice(5, 9);

  return (
    <main className="platform-page platform-home">
      <FutureCivilizationHero
        lang={lang}
        featuredItems={futureHeroItems}
        heroItem={futureRoadmapHeroItem}
        copy={futureRoadmapManifest.ui.homeHero}
        eraLabel={futureRoadmapManifest.ui.navigation.eraLabel}
      />

      <FutureCivilizationPreviewSection
        lang={lang}
        featuredItems={futurePreviewItems}
        copy={futureRoadmapManifest.ui.homePreview}
        eraLabel={futureRoadmapManifest.ui.navigation.eraLabel}
      />

      {afterHero ? (
        <div className="platform-shell platform-home__after-hero">
          {afterHero}
        </div>
      ) : null}

      <div className="platform-shell">
        {platformSections.map((section) => (
          <PlatformHomeSection key={section.id} lang={lang} section={section} />
        ))}
      </div>

      <PlatformHomeCircularSystemSection
        lang={lang}
        circular={homeContent.circular}
        sofaCoupleStory={sofaCoupleStory}
      />

      <PlatformHomeOutfitSection
        lang={lang}
        outfitSets={outfitSets}
        section={outfitSection}
      />
    </main>
  );
}

