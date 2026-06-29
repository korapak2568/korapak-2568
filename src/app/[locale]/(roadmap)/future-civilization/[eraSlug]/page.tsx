import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FutureCivilizationEraPage from "@/components/FutureCivilization/FutureCivilizationEraPage";
import { getFutureCivilizationEraMetadata } from "@/lib/metadata/futureCivilizationMetadata";
import { getFutureRoadmapEraBySlug } from "@/lib/platform-content/futureRoadmapContent";

type PageParams = {
  params: Promise<{
    locale: string;
    eraSlug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, eraSlug } = await params;

  return getFutureCivilizationEraMetadata(eraSlug, locale);
}

export default async function Page({ params }: PageParams) {
  const { locale, eraSlug } = await params;
  const roadmapEra = getFutureRoadmapEraBySlug(eraSlug, locale);

  if (!roadmapEra) {
    notFound();
  }

  return <FutureCivilizationEraPage lang={locale} roadmapEra={roadmapEra} />;
}