import Image from "next/image";
import Link from "next/link";
import type {
  FutureRoadmapItem,
  FutureRoadmapItemDetail,
} from "@/lib/platform-content/futureRoadmapContent";
import {
  getFutureRoadmapEraSummaries,
  getFutureRoadmapLayer,
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
  const layer = getFutureRoadmapLayer(item.layerId);

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
            <strong>View Signal</strong>
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
  const { era, item, relatedItems } = detail;
  const layer = getFutureRoadmapLayer(item.layerId);
  const eras = getFutureRoadmapEraSummaries();

  return (
    <main className="platform-page platform-mts-page platform-mts-detail-page future-civilization-page future-civilization-item-page">
      <section className="platform-outfit-detail-hero platform-mts-hero">
        <div className="platform-outfit-detail-hero__copy">
          <div className="platform-mts-hero__actions">
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
            <strong>{item.title}</strong>
            <p>{item.description}</p>
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
          <span>More From {era.title}</span>
          <h2>Continue through the civilization signal set.</h2>
          <p>
            Move across the {era.title} roadmap and open another future
            civilization node directly from this page.
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