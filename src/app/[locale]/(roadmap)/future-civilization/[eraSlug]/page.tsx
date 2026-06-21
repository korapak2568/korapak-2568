import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FutureCivilizationEraPage from "@/components/FutureCivilization/FutureCivilizationEraPage";
import {
  getFutureCivilizationEraMetadata,
  getFutureRoadmapEraBySlug,
} from "@/lib/platform-content/futureRoadmapContent";

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
  const { eraSlug } = await params;

  return getFutureCivilizationEraMetadata(eraSlug);
}

export default async function Page({ params }: PageParams) {
  const { locale, eraSlug } = await params;
  const roadmapEra = getFutureRoadmapEraBySlug(eraSlug);

  if (!roadmapEra) {
    notFound();
  }

  return <FutureCivilizationEraPage lang={locale} roadmapEra={roadmapEra} />;
}