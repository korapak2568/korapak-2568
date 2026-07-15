import type { Metadata } from "next";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import Image from "next/image";
import Link from "next/link";
import PlatformStorySection from "@/components/Story/PlatformStorySection";
import {
  getSmartMobilityContent,
  getSmartMobilityNavigationActions,
  type MtsStation,
} from "@/lib/platform-content/smartMobilityContent";
import { getPlatformStoryContent } from "@/lib/platform-content/storyContent";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

type PageParams = {
  params: Promise<{
    locale: string;
  }>;
};

function StoryMtsStationCard({
  locale,
  station,
  stationCtaLabel,
}: {
  locale: string;
  station: MtsStation;
  stationCtaLabel: string;
}) {
  return (
    <article className="platform-outfit-card platform-mts-card">
      <Link
        className="platform-outfit-card__link"
        href={`/${locale}/smart-mobility/mts/${station.slug}/`}
      >
        <div className="platform-outfit-card__media">
          <Image
            src={getPlatformImageSrc(station.image, "thumbnail")}
            alt={getPlatformImageAlt(station.image, "thumbnail")}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 410px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="platform-outfit-card__body">
          <span>{station.mts_station}</span>
          <h3>{station.name}</h3>
          <p>{station.story}</p>
          <div className="platform-outfit-card__meta">
            <strong>{stationCtaLabel}</strong>
            <small>{station.mts_line}</small>
          </div>
        </div>
      </Link>
    </article>
  );
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const storyContent = await getPlatformStoryContent(locale);
  const sofaCoupleStory = storyContent.sofaCoupleStory;
  const title = `${sofaCoupleStory.title} | Chorn Planet Story`;
  const description = sofaCoupleStory.story;
  const openGraphImage = sofaCoupleStory.openGraphImage;

  return {
    title,
    description,
    alternates: getLocalizedAlternates("/story/", locale),
    openGraph: {
      title,
      description,
      type: "website",
      url: `/${locale}/story/`,
      images: [
        {
          url: openGraphImage.src,
          width: openGraphImage.imageGenerationSize.width,
          height: openGraphImage.imageGenerationSize.height,
          alt: sofaCoupleStory.imageLandscape.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [openGraphImage.src],
    },
  };
}

export default async function Page({ params }: PageParams) {
  const { locale } = await params;
  const [storyContent, smartMobilityContent, navigationActions] = await Promise.all([
    getPlatformStoryContent(locale),
    getSmartMobilityContent(locale),
    getSmartMobilityNavigationActions(locale),
  ]);
  const valleyStations =
    smartMobilityContent.lines.find((line) => line.id === "valley")?.stations ??
    [];
  const coastalStations =
    smartMobilityContent.lines.find((line) => line.id === "coastal")
      ?.stations ?? [];
  const backlinkStations = [
    ...valleyStations.slice(0, 3),
    ...coastalStations.slice(0, 3),
  ];
  const uiCopy = storyContent.uiCopy;

  return (
    <main className="platform-page platform-home platform-story-index-page">
      <PlatformStorySection
        lang={locale}
        content={storyContent}
        navigationActions={navigationActions}
      />

      <section className="platform-shell platform-outfit-detail-related platform-story-mts-backlinks">
        <div className="platform-section__header">
          <span>{uiCopy.backlinks.eyebrow}</span>
          <h2>{uiCopy.backlinks.title}</h2>
          <p>{uiCopy.backlinks.description}</p>
        </div>
        <div className="platform-outfit-detail-related__grid">
          {backlinkStations.map((station) => (
            <StoryMtsStationCard
              key={station.slug}
              locale={locale}
              station={station}
              stationCtaLabel={uiCopy.stationCtaLabel}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
