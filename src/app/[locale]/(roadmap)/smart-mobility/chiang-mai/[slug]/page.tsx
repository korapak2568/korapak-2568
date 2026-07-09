import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  generateSmartMobilityChiangMaiMetadata,
  isSmartMobilityChiangMaiSlug,
} from "@/components/SmartMobility/ChiangMai/ChiangMaiRoutes";
import { SmartMobilityChiangMaiPage } from "@/components/SmartMobility/ChiangMai/ChiangMaiPage";
import { getSmartMobilityNavigationActions } from "@/lib/platform-content/smartMobilityContent";
import { getSmartMobilityChiangMaiContentForPublicPage } from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";

export const dynamic = "force-dynamic";

type PageParams = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!(await isSmartMobilityChiangMaiSlug(slug, locale))) {
    return {
      title: "Smart Mobility Chiang Mai page not found",
    };
  }

  return generateSmartMobilityChiangMaiMetadata(slug, locale);
}

export default async function Page({ params }: PageParams) {
  const { locale, slug } = await params;

  if (!(await isSmartMobilityChiangMaiSlug(slug, locale))) {
    notFound();
  }

  const [content, navigationActions] = await Promise.all([
    getSmartMobilityChiangMaiContentForPublicPage(locale, slug).catch(() => null),
    getSmartMobilityNavigationActions(locale),
  ]);

  if (!content) {
    notFound();
  }

  return (
    <SmartMobilityChiangMaiPage
      locale={locale}
      slug={slug}
      content={content}
      navigationActions={navigationActions}
    />
  );
}
