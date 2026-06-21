"use client";

import Image from "next/image";
import Link from "next/link";
import { getLocalizedHref } from "@/components/Platform/PlatformContentCard";
import type { PlatformHero } from "@/lib/platform-content/homeContent";
import {
  getPlatformImageAlt,
  getPlatformImageSrc,
} from "@/lib/platform-content/platformImageVariants";

export default function NatureFriendshipHero({
  lang,
  hero,
}: {
  lang: string;
  hero: PlatformHero;
}) {
  return (
    <section className="platform-hero">
      <div className="platform-hero__media">
        <Image
          src={getPlatformImageSrc(hero.image, "desktop")}
          alt={getPlatformImageAlt(hero.image, "desktop")}
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="platform-hero__overlay" />
      <div className="platform-shell platform-hero__content">
        <div className="platform-hero__actions">
          {hero.actions.map((action) => (
            <Link key={action.href} href={getLocalizedHref(lang, action.href)}>
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
