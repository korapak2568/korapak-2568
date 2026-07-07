import Image from "next/image";
import Link from "next/link";
import type {
  FutureRoadmapItem,
  FutureRoadmapItemDetail,
} from "@/lib/platform-content/futureRoadmapContent";
import {
  getFutureRoadmapEraSummaries,
  getFutureRoadmapLayer,
  getFutureRoadmapManifest,
} from "@/lib/platform-content/futureRoadmapContent";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

function RelatedFutureSignalCard({
  eraSlug,
  item,
  lang,
}: {
  eraSlug: string;
  item: FutureRoadmapItem;
  lang: string;
}) {
  const manifest = getFutureRoadmapManifest(lang);
  const layer = getFutureRoadmapLayer(item.layerId, lang);

  return (
    <article className="platform-outfit-card platform-mts-card future-civilization-related-mts-card">
      <Link
        className="platform-outfit-card__link"
        href={`/${lang}/future-civilization/${eraSlug}/${item.slug}/`}
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
          <span>{String(item.order).padStart(2, "0")}</span>
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

export default function FutureCivilizationItemPage({
  lang,
  detail,
}: {
  lang: string;
  detail: FutureRoadmapItemDetail;
}) {
  const manifest = getFutureRoadmapManifest(lang);
  const { era, item, relatedItems } = detail;
  const layer = getFutureRoadmapLayer(item.layerId, lang);
  const eras = getFutureRoadmapEraSummaries(lang);
  const detailLabels = manifest.ui.itemPage.detail;
  const timeframeLabel = `${item.timeframe.startYear} - ${item.timeframe.endYear}`;

  return (
    <main className="platform-page platform-mts-page platform-mts-detail-page future-civilization-page future-civilization-item-page">
      <section className="platform-outfit-detail-hero platform-mts-hero">
        <div className="platform-outfit-detail-hero__copy">
          <div className="platform-mts-hero__actions">
            <Link
              className="platform-mts-hero__action"
              href={`/${lang}/future-civilization/`}
            >
              {manifest.ui.navigation.indexLabel}
            </Link>

            {eras.map((roadmapEra) => {
              const isActive = roadmapEra.slug === era.slug;

              return (
                <Link
                  key={roadmapEra.id}
                  className={
                    isActive
                      ? "platform-mts-hero__action platform-mts-hero__action--active"
                      : "platform-mts-hero__action"
                  }
                  href={`/${lang}/future-civilization/${roadmapEra.slug}/`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {roadmapEra.title}
                </Link>
              );
            })}
          </div>

          <span className="platform-eyebrow">{layer?.title ?? item.layerId}</span>
          <div className="platform-mts-station-summary future-civilization-item-summary">
            <strong>{item.shortTitle}</strong>
            <p>{item.description}</p>
            <p className="future-civilization-item-summary__impact">
              {item.civilizationImpact}
            </p>
          </div>

          <dl className="future-civilization-item-summary__meta">
            <div>
              <dt>{detailLabels.timeframeLabel}</dt>
              <dd>{timeframeLabel}</dd>
            </div>
            <div>
              <dt>{detailLabels.layerLabel}</dt>
              <dd>{layer?.title ?? item.layerId}</dd>
            </div>
            <div>
              <dt>{detailLabels.impactLabel}</dt>
              <dd>{item.impactLevel.replaceAll("-", " ")}</dd>
            </div>
            <div>
              <dt>{detailLabels.maturityLabel}</dt>
              <dd>{item.maturity.replaceAll("-", " ")}</dd>
            </div>
          </dl>

          <div className="future-civilization-item-intelligence-grid">
            <section className="future-civilization-item-intelligence-panel">
              <h2>{detailLabels.signalsTitle}</h2>
              <ul>
                {item.signals.map((signal, index) => (
                  <li key={`${item.id}-signal-${index}`}>{signal}</li>
                ))}
              </ul>
            </section>

            <section className="future-civilization-item-intelligence-panel">
              <h2>{detailLabels.implicationsTitle}</h2>
              <ul>
                {item.implications.map((implication, index) => (
                  <li key={`${item.id}-implication-${index}`}>{implication}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className="platform-outfit-detail-hero__media">
          <Image
            className="platform-mts-hero__image"
            src={getPlatformImageSrc(item.image, "desktop")}
            alt={getPlatformImageAlt(item.image, "desktop")}
            fill
            priority
            sizes="(max-width: 991px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="platform-shell platform-outfit-detail-related future-civilization-item-related">
        <div className="platform-section__header">
          <span>{manifest.ui.itemPage.relatedSignals.eyebrowPrefix} {era.title}</span>
          <h2>{manifest.ui.itemPage.relatedSignals.title}</h2>
          <p>
            {manifest.ui.itemPage.relatedSignals.descriptionPrefix} {era.title} {manifest.ui.itemPage.relatedSignals.descriptionSuffix}
          </p>
        </div>
        <div className="platform-outfit-detail-related__grid">
          {relatedItems.map((relatedItem) => (
            <RelatedFutureSignalCard
              key={relatedItem.id}
              eraSlug={era.slug}
              item={relatedItem}
              lang={lang}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
