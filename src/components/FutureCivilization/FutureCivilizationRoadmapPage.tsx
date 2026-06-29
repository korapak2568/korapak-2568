import Image from "next/image";
import Link from "next/link";
import {
  getFutureRoadmapEras,
  getFutureRoadmapFeaturedItems,
  getFutureRoadmapLayer,
  getFutureRoadmapManifest,
  getFutureRoadmapTaxonomy,
  type FutureRoadmapEra,
  type FutureRoadmapItem,
} from "@/lib/platform-content/futureRoadmapContent";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

function getStableItemScore(item: FutureRoadmapItem, salt: string) {
  const value = `${salt}:${item.id}:${item.slug}:${item.order}`;

  return Array.from(value).reduce(
    (score, character) => score + character.charCodeAt(0),
    0,
  );
}

function getMixedItems(
  items: FutureRoadmapItem[],
  count: number,
  salt: string,
) {
  return [...items]
    .sort(
      (firstItem, secondItem) =>
        getStableItemScore(firstItem, salt) -
          getStableItemScore(secondItem, salt) ||
        firstItem.order - secondItem.order,
    )
    .slice(0, count);
}

function FutureCivilizationSignalCard({
  item,
  lang,
  roadmapEra,
}: {
  item: FutureRoadmapItem;
  lang: string;
  roadmapEra: FutureRoadmapEra;
}) {
  const manifest = getFutureRoadmapManifest(lang);
  const layer = getFutureRoadmapLayer(item.layerId, lang);

  return (
    <article className="platform-outfit-card platform-mts-card future-civilization-random-card">
      <Link
        className="platform-outfit-card__link"
        href={`/${lang}/future-civilization/${roadmapEra.era.slug}/${item.slug}/`}
      >
        <div className="platform-outfit-card__media">
          <Image
            src={getPlatformImageSrc(item.image, "thumbnail")}
            alt={getPlatformImageAlt(item.image, "thumbnail")}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 410px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="platform-outfit-card__body">
          <span>
            {manifest.ui.navigation.eraLabel}{" "}
            {String(roadmapEra.era.order).padStart(2, "0")} /{" "}
            {String(item.order).padStart(2, "0")}
          </span>
          <h3>{item.shortTitle}</h3>
          <p>{item.description}</p>
          <div className="platform-outfit-card__meta">
            <strong>{manifest.ui.actions.viewSignal}</strong>
            <small>{layer?.title ?? item.layerId}</small>
          </div>
        </div>
      </Link>
    </article>
  );
}

function FutureCivilizationEraSignalSection({
  lang,
  roadmapEra,
}: {
  lang: string;
  roadmapEra: FutureRoadmapEra;
}) {
  const manifest = getFutureRoadmapManifest(lang);
  const randomItems = getMixedItems(roadmapEra.items, 9, roadmapEra.era.slug);

  return (
    <section className="platform-shell platform-outfit-detail-related future-civilization-random-signals">
      <div className="platform-section__header">
        <span>
          {manifest.ui.navigation.eraLabel}{" "}
          {String(roadmapEra.era.order).padStart(2, "0")} /{" "}
          {roadmapEra.era.timeframe.startYear}-
          {roadmapEra.era.timeframe.endYear}
        </span>
        <h2>{roadmapEra.era.title}</h2>
        <p>{roadmapEra.era.description}</p>
      </div>
      <div className="platform-outfit-detail-related__grid">
        {randomItems.map((item) => (
          <FutureCivilizationSignalCard
            key={item.id}
            item={item}
            lang={lang}
            roadmapEra={roadmapEra}
          />
        ))}
      </div>
    </section>
  );
}

export default function FutureCivilizationRoadmapPage({
  lang,
}: {
  lang: string;
}) {
  const manifest = getFutureRoadmapManifest(lang);
  const taxonomy = getFutureRoadmapTaxonomy(lang);
  const eras = getFutureRoadmapEras(lang);
  const signalCount = eras.reduce(
    (totalSignals, roadmapEra) => totalSignals + roadmapEra.items.length,
    0,
  );
  const featuredItems = getFutureRoadmapFeaturedItems(signalCount, lang);
  const heroItem = getMixedItems(featuredItems, 1, "landing-hero")[0];

  return (
    <main className="platform-page future-civilization-page">
      <section className="future-civilization-landing-hero">
        <div className="future-civilization-landing-hero__media">
          {heroItem ? (
            <Image
              src={getPlatformImageSrc(heroItem.image, "desktop")}
              alt={getPlatformImageAlt(heroItem.image, "desktop")}
              fill
              priority
              sizes="100vw"
            />
          ) : null}
        </div>
        <div className="future-civilization-landing-hero__content">
          <span>{manifest.ui.landingHero.eyebrow}</span>
          <h1>{manifest.title}</h1>
          <p>{manifest.description}</p>
        </div>
      </section>

      <section className="platform-shell future-civilization-featured-intro">
        <div className="platform-section__header">
          <span>{manifest.ui.landingSignalGallery.eyebrow}</span>
          <h2>{manifest.ui.landingSignalGallery.title}</h2>
          <p>{manifest.ui.landingSignalGallery.description}</p>
        </div>
        <div className="platform-mts-hero__actions">
          <Link
            className="platform-mts-hero__action platform-mts-hero__action--active"
            href={`/${lang}/future-civilization/`}
            aria-current="page"
          >
            {manifest.ui.navigation.indexLabel}
          </Link>
          {eras.map((roadmapEra) => (
            <Link
              key={roadmapEra.era.id}
              className="platform-mts-hero__action"
              href={`/${lang}/future-civilization/${roadmapEra.era.slug}/`}
            >
              {roadmapEra.era.title}
            </Link>
          ))}
        </div>
      </section>

      {eras.map((roadmapEra) => (
        <FutureCivilizationEraSignalSection
          key={roadmapEra.era.id}
          lang={lang}
          roadmapEra={roadmapEra}
        />
      ))}

      <section className="platform-shell future-civilization-layers">
        <div className="platform-section__header">
          <span>{manifest.ui.layersSection.eyebrow}</span>
          <h2>{manifest.ui.layersSection.title}</h2>
        </div>
        <div className="future-civilization-layers__grid">
          {taxonomy.layers.map((layer) => (
            <article key={layer.id}>
              <h3>{layer.title}</h3>
              <p>{layer.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
