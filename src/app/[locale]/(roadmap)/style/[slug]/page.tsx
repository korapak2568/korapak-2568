import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import {
  getPlatformOutfitContent,
  getPlatformOutfitDetailMetadata,
  getPlatformOutfitSetById,
  getPlatformOutfitSets,
} from "@/lib/platform-content/styleContent";
import { getPlatformOutfitLocalizedText } from "@/lib/platform-content/styleShared";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

type PageParams = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, slug } = await params;

  return getPlatformOutfitDetailMetadata({ locale, slug });
}

export default async function Page({ params }: PageParams) {
  const { locale, slug } = await params;
  const content = await getPlatformOutfitContent(locale);
  const { detailPage } = content;
  const outfitSet = await getPlatformOutfitSetById(slug, locale);

  if (!outfitSet) {
    notFound();
  }

  const title = getPlatformOutfitLocalizedText(outfitSet.title, locale);
  const story = getPlatformOutfitLocalizedText(outfitSet.story, locale);
  const relatedOutfits = (await getPlatformOutfitSets(locale)).filter(
    (relatedOutfitSet) => relatedOutfitSet.id !== outfitSet.id,
  );

  return (
    <main className="platform-page platform-outfit-detail-page">
      <section className="platform-outfit-detail-hero">
        <div className="platform-outfit-detail-hero__copy">
          <h1>{title}</h1>
          <p>{story}</p>
          <div
            className="platform-outfit-detail-tags"
            aria-label={detailPage.tagListLabel}
          >
            {outfitSet.tags.slice(0, 5).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a
            className="platform-outfit-detail-cta"
            href={outfitSet.tiktok_url}
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="platform-outfit-detail-cta__icons"
              aria-hidden="true"
            >
              <ShoppingBag
                className="platform-outfit-detail-cta__shopping-icon"
                size={18}
                strokeWidth={2.4}
              />
              <FaTiktok className="platform-outfit-detail-cta__tiktok-icon" />
            </span>
            <span>{detailPage.externalCta}</span>
          </a>
        </div>
        <div className="platform-outfit-detail-hero__media">
          <Image
            src={getPlatformImageSrc(outfitSet.image, "desktop")}
            alt={getPlatformImageAlt(outfitSet.image, "desktop")}
            fill
            priority
            sizes="(max-width: 991px) 100vw, 48vw"
            style={{ objectFit: "cover", objectPosition: "50% 18%" }}
          />
        </div>
      </section>


      <section className="platform-shell platform-outfit-detail-gallery">
        {outfitSet.images.map((detailImage, index) => (
          <figure key={detailImage.image.src}>
            <Image
              src={getPlatformImageSrc(detailImage.image, "thumbnail")}
              alt={getPlatformImageAlt(detailImage.image, "thumbnail")}
              fill
              sizes="(max-width: 768px) 50vw, 24vw"
              style={{ objectFit: "cover", objectPosition: "50% 18%" }}
            />
            <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
          </figure>
        ))}
      </section>

      <section className="platform-shell platform-outfit-detail-related">
        <div className="platform-section__header">
          <span>{detailPage.relatedLabel}</span>
          <h2>{detailPage.relatedTitle}</h2>
        </div>
        <div className="platform-outfit-detail-related__grid">
          {relatedOutfits.map((relatedOutfitSet) => (
            <article key={relatedOutfitSet.id} className="platform-outfit-card">
              <Link
                className="platform-outfit-card__link"
                href={`/${locale}/style/${relatedOutfitSet.id}/`}
              >
                <div className="platform-outfit-card__media">
                  <Image
                    src={getPlatformImageSrc(
                      relatedOutfitSet.image,
                      "thumbnail",
                    )}
                    alt={getPlatformImageAlt(
                      relatedOutfitSet.image,
                      "thumbnail",
                    )}
                    fill
                    sizes="(max-width: 768px) 100vw, 31vw"
                    style={{ objectFit: "cover", objectPosition: "50% 18%" }}
                  />
                </div>
                <div className="platform-outfit-card__body">
                  <span>{relatedOutfitSet.audience}</span>
                  <h3>
                    {getPlatformOutfitLocalizedText(
                      relatedOutfitSet.title,
                      locale,
                    )}
                  </h3>
                  <p>
                    {getPlatformOutfitLocalizedText(
                      relatedOutfitSet.visualSummary,
                      locale,
                    )}
                  </p>
                  <div className="platform-outfit-card__meta">
                    <strong>{detailPage.relatedCardCta}</strong>
                    <small>
                      {relatedOutfitSet.zoneDisplay?.[0] ??
                        relatedOutfitSet.zoneCandidates?.[0] ??
                        ""}
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
