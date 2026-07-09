import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FutureSolutionsEraPage } from "@/components/FutureSolutions/FutureSolutionsPages";
import {
  getFutureSolutionEra,
  getFutureSolutionEraSummaries,
} from "@/lib/future-solutions/futureSolutionsContent";
import {
  formatPageInfoTemplate,
  getLayerPageInfo,
} from "@/lib/cgd/layerContent";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import { LOCALES } from "@/lib/SiteUrlLocales";

type FutureSolutionsPageInfo = {
  metadata?: {
    era?: {
      title_template?: string;
      description_template?: string;
      fallback_title?: string;
      fallback_description?: string;
    };
  };
};

type PageParams = {
  params: Promise<{
    locale: string;
    eraSlug: string;
  }>;
};

export async function generateStaticParams() {
  const params = await Promise.all(
    LOCALES.map(async (locale) =>
      (await getFutureSolutionEraSummaries(locale)).map((era) => ({
        locale,
        eraSlug: era.era_slug,
      })),
    ),
  );

  return params.flat();
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { eraSlug, locale } = await params;
  const era = await getFutureSolutionEra(eraSlug, locale);
  const eraMetadata = (await getLayerPageInfo<FutureSolutionsPageInfo>(
    "future-solutions",
    locale,
  )).metadata?.era;

  if (!era) {
    return {
      title: eraMetadata?.fallback_title ?? "",
      description:
        eraMetadata?.fallback_description ?? "",
    };
  }

  const title = formatPageInfoTemplate(
    eraMetadata?.title_template ?? "",
    { eraTitle: era.title },
  );
  const description = formatPageInfoTemplate(
    eraMetadata?.description_template ??
      "Explore {count} future solution lenses from {eraTitle}, connecting roadmap milestones to current problems, industries, and business opportunities.",
    { count: era.count, eraTitle: era.title },
  );
  const targetPath = `/future-solutions/${eraSlug}/`;

  return {
    title,
    description,
    alternates: getLocalizedAlternates(targetPath, locale),
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function Page({ params }: PageParams) {
  const { eraSlug, locale } = await params;
  const era = await getFutureSolutionEra(eraSlug, locale);

  if (!era) {
    notFound();
  }

  return <FutureSolutionsEraPage era={era} lang={locale} />;
}