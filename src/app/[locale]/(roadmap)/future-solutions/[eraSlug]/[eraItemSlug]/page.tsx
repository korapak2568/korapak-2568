import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FutureSolutionDetailPage } from "@/components/FutureSolutions/FutureSolutionsPages";
import {
  getFutureSolutionBySlug,
  getFutureSolutionStaticParams,
} from "@/lib/future-solutions/futureSolutionsContent";
import { getLayerPageInfo } from "@/lib/cgd/layerContent";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import { LOCALES } from "@/lib/SiteUrlLocales";

type FutureSolutionsPageInfo = {
  metadata?: {
    detail?: {
      fallback_title?: string;
      fallback_description?: string;
    };
  };
};

type PageParams = {
  params: Promise<{
    locale: string;
    eraSlug: string;
    eraItemSlug: string;
  }>;
};

export async function generateStaticParams() {
  const params = await Promise.all(
    LOCALES.map(async (locale) =>
      (await getFutureSolutionStaticParams(locale)).map((item) => ({
        locale,
        eraSlug: item.eraSlug,
        eraItemSlug: item.eraItemSlug,
      })),
    ),
  );

  return params.flat();
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { eraSlug, eraItemSlug, locale } = await params;
  const data = await getFutureSolutionBySlug(eraSlug, eraItemSlug, locale);
  const detailMetadata = (await getLayerPageInfo<FutureSolutionsPageInfo>(
    "future-solutions",
    locale,
  )).metadata?.detail;

  if (!data) {
    return {
      title: detailMetadata?.fallback_title ?? "",
      description:
        detailMetadata?.fallback_description ??
        "Explore future solution lenses from the Civilization Graph.",
    };
  }

  const { solution } = data;
  const targetPath = `/future-solutions/${eraSlug}/${eraItemSlug}/`;

  return {
    title: solution.seo.meta_title,
    description: solution.seo.meta_description,
    keywords: solution.seo.keywords,
    alternates: {
      ...getLocalizedAlternates(targetPath, locale),
      canonical: solution.canonical.roadmap_url,
    },
    openGraph: {
      title: solution.seo.meta_title,
      description: solution.seo.meta_description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: solution.seo.meta_title,
      description: solution.seo.meta_description,
    },
  };
}

export default async function Page({ params }: PageParams) {
  const { eraSlug, eraItemSlug, locale } = await params;
  const data = await getFutureSolutionBySlug(eraSlug, eraItemSlug, locale);

  if (!data) {
    notFound();
  }

  return (
    <FutureSolutionDetailPage
      lang={locale}
      relatedSolutions={data.relatedSolutions}
      solution={data.solution}
    />
  );
}