import Image from "next/image";
import Link from "next/link";
import type { PlatformCard } from "@/lib/platform-content/homeContent";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

function getLocalizedHref(lang: string, href: string): string {
  if (href.startsWith("http")) {
    return href;
  }

  const normalizedHref = href.startsWith("/") ? href : `/${href}`;
  return `/${lang}${normalizedHref}`;
}

export default function PlatformContentCard({
  lang,
  card,
}: {
  lang: string;
  card: PlatformCard;
}) {
  return (
    <article className="platform-card">
      <Link
        href={getLocalizedHref(lang, card.href)}
        className="platform-card__media"
        aria-label={card.title}
      >
        <Image
          src={getPlatformImageSrc(card.image, "thumbnail")}
          alt={getPlatformImageAlt(card.image, "thumbnail")}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 320px"
        />
      </Link>
      
      <div className="platform-card__body">
        <div className="platform-card__content">
          <span className="platform-card__category">{card.category}</span>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>

        <Link
          href={getLocalizedHref(lang, card.href)}
          className="platform-card__cta"
        >
          {card.cta}
        </Link>
      </div>
    </article>
  );
}

export { getLocalizedHref };
