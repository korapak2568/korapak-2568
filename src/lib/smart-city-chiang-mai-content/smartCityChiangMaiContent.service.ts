import type { SmartCityChiangMaiContentResponse } from "@/core/domain/smart-city-chiang-mai-content.entity";
import type { SmartCityChiangMaiContentPayload } from "@/lib/model/ISmartCityChiangMai";
import {
  getAllSmartCityChiangMaiContentFromJson,
  getSmartCityChiangMaiContentFromJson,
} from "@/lib/platform-content/smartCityContent";


export async function getSmartCityChiangMaiContent(
  locale: string,
  slug: string,
): Promise<SmartCityChiangMaiContentPayload> {
  const content = await getSmartCityChiangMaiContentFromJson(locale, slug);

  if (!content) {
    throw new Error(`Smart City Chiang Mai content not found in CHORN_DATA_URL/smart-city for slug "${slug}"`);
  }

  return content;
}

export async function getSmartCityChiangMaiContentForPublicPage(
  locale: string,
  slug: string,
): Promise<SmartCityChiangMaiContentPayload> {
  return getSmartCityChiangMaiContent(locale, slug);
}

export async function getAllSmartCityChiangMaiContent(): Promise<SmartCityChiangMaiContentResponse[]> {
  return getAllSmartCityChiangMaiContentFromJson() as Promise<SmartCityChiangMaiContentResponse[]>;
}
