import type { Metadata } from "next";
import {
  generateSmartMobilityChiangMaiMetadata,
  getSmartMobilityChiangMaiDefaultRouteSlug,
} from "@/components/SmartMobility/ChiangMai/ChiangMaiRoutes";
import { SmartMobilityChiangMaiPage } from "@/components/SmartMobility/ChiangMai/ChiangMaiPage";
import { getSmartMobilityNavigationActions } from "@/lib/platform-content/smartMobilityContent";
import { getSmartMobilityChiangMaiContentForPublicPage } from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const defaultSlug = await getSmartMobilityChiangMaiDefaultRouteSlug(locale);

  return generateSmartMobilityChiangMaiMetadata(defaultSlug, locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const defaultSlug = await getSmartMobilityChiangMaiDefaultRouteSlug(locale);
  const [content, navigationActions] = await Promise.all([
    getSmartMobilityChiangMaiContentForPublicPage(locale, defaultSlug),
    getSmartMobilityNavigationActions(locale),
  ]);

  return (
    <SmartMobilityChiangMaiPage
      locale={locale}
      slug={defaultSlug}
      content={content}
      navigationActions={navigationActions}
    />
  );
}
