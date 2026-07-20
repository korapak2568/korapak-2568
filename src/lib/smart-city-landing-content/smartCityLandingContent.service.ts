import type { SmartCityLandingContentResponse } from "@/core/domain/smart-city-landing-content.entity";
import type { SmartCityLandingContentPayload } from "@/lib/model/ISmartCityLandingContent";
import {
  getAllSmartCityLandingContentFromJson,
  getSmartCityLandingContentFromJson,
} from "@/lib/platform-content/smartCityContent";


export async function getSmartCityLandingContent(
  locale: string,
  slug: string,
): Promise<SmartCityLandingContentPayload> {
  const content = await getSmartCityLandingContentFromJson(locale, slug);

  if (!content) {
    throw new Error(`Smart City landing content not found in CHORN_DATA_URL/smart-city/landing for slug "${slug}"`);
  }

  return content;
}

export async function getSmartCityLandingContentForPublicPage(
  locale: string,
  slug: string,
): Promise<SmartCityLandingContentPayload> {
  return getSmartCityLandingContent(locale, slug);
}

export async function getAllSmartCityLandingContent(): Promise<SmartCityLandingContentResponse[]> {
  return getAllSmartCityLandingContentFromJson() as Promise<SmartCityLandingContentResponse[]>;
}
