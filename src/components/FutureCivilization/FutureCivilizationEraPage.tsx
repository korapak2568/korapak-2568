import Image from "next/image";
import Link from "next/link";
import {
  getFutureRoadmapContent,
  type FutureRoadmapEra,
} from "@/lib/platform-content/futureRoadmapContent";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

export default async function FutureCivilizationEraPage({
  lang,
  roadmapEra,
}: {
  lang: string;
  roadmapEra: FutureRoadmapEra;
}) {
  const { eras, manifest } = await getFutureRoadmapContent(lang);
  const { era, items } = roadmapEra;
  const heroItem = items[0];
  const eraSummaries = eras.map(({ era: summaryEra, items: summaryItems }) => ({
    ...summaryEra,
    coverItem: summaryItems[0],
    featuredItems: summaryItems.slice(0, 5),
  }));
  const otherEras = eraSummaries.filter((summary) => summary.slug !== era.slug);

  return (
    <main className="platform-page future-civilization-page future-civilization-era-page">
      <section className="future-civilization-era-hero">
        <div className="future-civilization-era-hero__media">
          <Image
            src={getPlatformImageSrc(heroItem.image, "desktop")}
            alt={getPlatformImageAlt(heroItem.image, "desktop")}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="future-civilization-era-hero__copy">
          <Link href={`/${lang}/future-civilization/`}>{manifest.ui.navigation.indexLabel}</Link>
          <span>
            {manifest.ui.navigation.eraLabel} {String(era.order).padStart(2, "0")} /{" "}
            {era.timeframe.startYear}-{era.timeframe.endYear}
          </span>
          <h1>{era.title}</h1>
          <p>{era.description}</p>
        </div>
      </section>

      <section className="platform-shell platform-outfit-detail-hero__copy future-civilization-item-summary-panel future-civilization-era-intro">
        <div className="platform-mts-hero__actions">
          <Link
            className="platform-mts-hero__action"
            href={`/${lang}/future-civilization/`}
          >
            {manifest.ui.navigation.indexLabel}
          </Link>

          {eraSummaries.map((roadmapEraSummary) => {
            const isActive = roadmapEraSummary.slug === era.slug;

            return (
              <Link
                key={roadmapEraSummary.id}
                className={
                  isActive
                    ? "platform-mts-hero__action platform-mts-hero__action--active"
                    : "platform-mts-hero__action"
                }
                href={`/${lang}/future-civilization/${roadmapEraSummary.slug}/`}
                aria-current={isActive ? "page" : undefined}
              >
                {roadmapEraSummary.title}
              </Link>
            );
          })}
        </div>

        <span className="platform-eyebrow">{era.subtitle}</span>
        <div className="platform-mts-station-summary future-civilization-item-summary">
          <strong>{heroItem.civilizationImpact}</strong>
          <p>{manifest.ui.eraPage.summaryDescription}</p>
        </div>
        <div className="future-civilization-item-summary__meta">
          <span>
            {era.timeframe.startYear}-{era.timeframe.endYear}
          </span>
          <span>{heroItem.maturity}</span>
          <span>{heroItem.impactLevel.replace("-", " ")}</span>
        </div>
      </section>

      <section className="platform-shell future-civilization-signal-grid">
        {items.map((item, index) => {
          const layer = manifest.taxonomy.layers.find(
            (candidate) => candidate.id === item.layerId,
          );

          return (
            <Link
              key={item.id}
              className="future-civilization-signal-card"
              href={`/${lang}/future-civilization/${era.slug}/${item.slug}/`}
            >
              <div className="future-civilization-signal-card__media">
                <Image
                  src={getPlatformImageSrc(item.image, "thumbnail")}
                  alt={getPlatformImageAlt(item.image, "thumbnail")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>
              <div className="future-civilization-signal-card__body">
                <span>
                  {String(item.order).padStart(2, "0")} /{" "}
                  {layer?.title ?? item.layerId}
                </span>
                <h3>{item.shortTitle}</h3>
                <p>{item.description}</p>
                <div className="future-civilization-signal-card__meta">
                  <small>
                    {item.timeframe.startYear}-{item.timeframe.endYear}
                  </small>
                  <small>{item.impactLevel.replace("-", " ")}</small>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="platform-shell future-civilization-more-eras">
        <div className="platform-section__header">
          <span>{manifest.ui.eraPage.continueTimeline.eyebrow}</span>
          <h2>{manifest.ui.eraPage.continueTimeline.title}</h2>
        </div>
        <div className="future-civilization-more-eras__grid">
          {otherEras.map((relatedEra) => (
            <Link
              key={relatedEra.id}
              href={`/${lang}/future-civilization/${relatedEra.slug}/`}
            >
              <span>{manifest.ui.navigation.eraLabel} {String(relatedEra.order).padStart(2, "0")}</span>
              <strong>{relatedEra.title}</strong>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}