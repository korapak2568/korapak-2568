import type { Metadata } from "next";
import FutureCivilizationRoadmapPage from "@/components/FutureCivilization/FutureCivilizationRoadmapPage";
import { getFutureCivilizationMetadata } from "@/lib/metadata/futureCivilizationMetadata";

type PageParams = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;

  return getFutureCivilizationMetadata(locale);
}

export default async function Page({ params }: PageParams) {
  const { locale } = await params;

  return <FutureCivilizationRoadmapPage lang={locale} />;
}