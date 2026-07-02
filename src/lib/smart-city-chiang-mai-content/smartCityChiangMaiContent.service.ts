import type {
  PartialSmartCityChiangMaiContentPayload,
  SmartCityChiangMaiContentResponse,
} from "@/core/domain/smart-city-chiang-mai-content.entity";
import type { SmartCityChiangMaiContentPayload } from "@/lib/model/ISmartCityChiangMai";
import {
  getAllSmartCityChiangMaiContentFromJson,
  getSmartCityChiangMaiContentFromJson,
} from "@/lib/platform-content/smartCityContent";

function unsupportedSmartCityWrite(): never {
  throw new Error("Smart City Chiang Mai content is sourced from data/smart-city/en.json");
}

export async function getSmartCityChiangMaiContent(
  locale: string,
  slug: string,
): Promise<SmartCityChiangMaiContentPayload> {
  const content = await getSmartCityChiangMaiContentFromJson(locale, slug);

  if (!content) {
    throw new Error(`Smart City Chiang Mai content not found in data/smart-city/en.json for slug "${slug}"`);
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

export async function upsertSmartCityChiangMaiContent(
  _content: PartialSmartCityChiangMaiContentPayload,
): Promise<SmartCityChiangMaiContentResponse> {
  unsupportedSmartCityWrite();
}

export async function deleteSmartCityChiangMaiContent(
  _locale: string,
  _slug: string,
): Promise<void> {
  unsupportedSmartCityWrite();
}
