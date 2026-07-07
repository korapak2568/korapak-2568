import Image from "next/image";
import Link from "next/link";

type CgdLinkListItem = {
  label: string;
  href: string;
  meta?: string;
  thumbnail?: {
    alt: string;
    height: number;
    src: string;
    width: number;
  };
};

export function CgdBreadcrumbs({
  items,
  lang,
}: {
  lang: string;
  items: Array<{ label: string; href?: string }>;
}) {
  return (
    <nav className="cgd-breadcrumbs" aria-label="Breadcrumb">
      <Link href={`/${lang}/future-civilization/`}>Future Civilization</Link>
      {items.map((item) => (
        <span key={`${item.label}-${item.href ?? "current"}`}>
          <span aria-hidden="true">/</span>
          {item.href ? (
            <Link href={`/${lang}${item.href}`}>{item.label}</Link>
          ) : (
            item.label
          )}
        </span>
      ))}
    </nav>
  );
}

export function CgdLinkList({
  emptyLabel = "No related links yet.",
  items,
  lang,
}: {
  emptyLabel?: string;
  items: CgdLinkListItem[];
  lang: string;
}) {
  if (items.length === 0) {
    return <p className="cgd-muted">{emptyLabel}</p>;
  }

  return (
    <div className="cgd-link-list">
      {items.map((item) => (
        <Link
          className={
            item.thumbnail
              ? "cgd-link-list__item cgd-link-list__item--with-thumbnail"
              : "cgd-link-list__item"
          }
          key={`${item.href}-${item.label}`}
          href={`/${lang}${item.href}`}
        >
          {item.thumbnail ? (
            <Image
              className="cgd-link-list__thumbnail"
              src={item.thumbnail.src}
              alt={item.thumbnail.alt}
              width={item.thumbnail.width}
              height={item.thumbnail.height}
              sizes="(min-width: 768px) 128px, 96px"
            />
          ) : null}
          <span className="cgd-link-list__content">
            <span>{item.label}</span>
            {item.meta ? <small>{item.meta}</small> : null}
          </span>
        </Link>
      ))}
    </div>
  );
}

export function CgdTagList({ items }: { items: string[] }) {
  if (items.length === 0) {
    return (
      <p className="cgd-muted">
        Related technologies will expand as the graph grows.
      </p>
    );
  }

  return (
    <ul className="cgd-tag-list">
      {items.map((item) => (
        <li key={item}>{item.replaceAll("-", " ")}</li>
      ))}
    </ul>
  );
}
