import type { Metadata } from "next";
import { FutureSolutionsIndexPage } from "@/components/FutureSolutions/FutureSolutionsPages";
import { getFutureSolutionEraSummaries } from "@/lib/future-solutions/futureSolutionsContent";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import { getLayerPageInfo } from "@/lib/cgd/layerContent";

type FutureSolutionsPageInfo = {
  metadata?: {
    index?: {
      title?: string;
      description?: string;
    };
  };
};

type PageParams = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const metadata = (await getLayerPageInfo<FutureSolutionsPageInfo>(
    "future-solutions",
    locale,
  )).metadata?.index;
  const title = metadata?.title ?? "";
  const description =
    metadata?.description ??
    "Explore future solution lenses that connect roadmap milestones to current problems, industries, business opportunities, readiness, and human impact.";

  return {
    title,
    description,
    alternates: getLocalizedAlternates("/future-solutions/", locale),
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
  const { locale } = await params;

  return <FutureSolutionsIndexPage eras={await getFutureSolutionEraSummaries(locale)} lang={locale} />;
}