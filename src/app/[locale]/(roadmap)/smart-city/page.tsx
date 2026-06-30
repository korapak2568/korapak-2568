// src/app/[locale]/smart-city/page.tsx

import PlatformSmartCityPage from "@/components/SmartCity/PlatformSmartCityPage";
import {
  getPlatformSmartCityContent,
  getSmartCityRootMetadata,
} from "@/lib/platform-content/smartCityContent";
import type { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const lang = headersList.get("x-locale") || "en";

  return getSmartCityRootMetadata(lang);
}

export default async function SmartCityPage() {
  const headersList = await headers();
  const lang = headersList.get("x-locale") || "en";
  const content = await getPlatformSmartCityContent(lang);

  return <PlatformSmartCityPage lang={lang} content={content} />;
}
