import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FutureCivilizationItemPage from "@/components/FutureCivilization/FutureCivilizationItemPage";
import { getFutureCivilizationItemMetadata } from "@/lib/metadata/futureCivilizationMetadata";
import { getFutureRoadmapItemBySlugs } from "@/lib/platform-content/futureRoadmapContent";

type PageParams = {
  params: Promise<{
    locale: string;
    eraSlug: string;
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, eraSlug, slug } = await params;

  return getFutureCivilizationItemMetadata(eraSlug, slug, locale);
}

export default async function Page({ params }: PageParams) {
  const { locale, eraSlug, slug } = await params;
  const detail = await getFutureRoadmapItemBySlugs(eraSlug, slug, locale);

  if (!detail) {
    notFound();
  }

  return <FutureCivilizationItemPage lang={locale} detail={detail} />;
}