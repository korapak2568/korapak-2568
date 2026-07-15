"use client";

import Image from "next/image";
import SmartMobilityActions from "@/components/SmartMobility/SmartMobilityActions";
import type { SmartMobilityNavigationAction } from "@/lib/platform-content/smartMobilityContent";
import type { PlatformStoryContent } from "@/lib/platform-content/storyShared";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";
import { usePlatformStoryContent } from "@/lib/platform-content/usePlatformStoryContent";

export default function PlatformStorySection({
  lang,
  content,
  navigationActions,
}: {
  lang: string;
  content: PlatformStoryContent;
  navigationActions: SmartMobilityNavigationAction[];
}) {
  const { data: cachedContent } = usePlatformStoryContent(lang, content);
  const storyContent = cachedContent ?? content;
  const sofaCoupleStory = storyContent.sofaCoupleStory;
  const uiCopy = storyContent.uiCopy;

  return (
    <>
      <section className="platform-story-landscape-hero">
        <Image
          className="platform-story-landscape-hero__image"
          src={getPlatformImageSrc(sofaCoupleStory.imageLandscape, "desktop")}
          alt={getPlatformImageAlt(sofaCoupleStory.imageLandscape, "desktop")}
          fill
          priority
          sizes="100vw"
        />
      </section>

      <section className="platform-shell platform-mts-action-nav">
        <SmartMobilityActions
          locale={lang}
          actions={navigationActions}
          activeHref="/story/"
          style={{ marginBottom: 18 }}
        />
      </section>

      <section className="platform-shell platform-outfit-detail-related platform-home-sofa-story platform-home-sofa-story--intro">
        <div className="platform-section__header platform-home-sofa-story__section1">
          <span>{uiCopy.intro.eyebrow}</span>
          <h2>{uiCopy.intro.title}</h2>
          <p>{uiCopy.intro.description}</p>
        </div>
      </section>

      <section className="platform-shell platform-outfit-detail-related platform-home-sofa-story platform-home-sofa-story--feature">
        <div
          className="platform-home-sofa-story__section2 platform-home-sofa-story__content"
          aria-labelledby="platform-home-sofa-story-title"
        >
          <div className="platform-home-sofa-story__copy">
            <span>{uiCopy.featureEyebrow}</span>
            <h3 id="platform-home-sofa-story-title">
              {sofaCoupleStory.title}
            </h3>
            <p>{sofaCoupleStory.story}</p>
          </div>
          <div className="platform-home-sofa-story__cards">
            {sofaCoupleStory.images.slice(0, 4).map((storyImage) => (
              <figure
                key={storyImage.image.src}
                className="platform-home-sofa-story__card-media"
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
                <figcaption>{storyImage.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
