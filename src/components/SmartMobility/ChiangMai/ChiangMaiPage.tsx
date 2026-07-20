"use client";

import MainChiangMai from "@/components/SmartMobility/ChiangMai/MainChiangMai";
import type { SmartMobilityChiangMaiContentPayload } from "@/lib/model/ISmartMobilityChiangMai";
import type { SmartMobilityNavigationAction } from "@/lib/platform-content/smartMobilityContent";
import type { SmartMobilityChiangMaiSlug } from "./ChiangMaiRoutes";

export function SmartMobilityChiangMaiPage({
  locale,
  slug,
  content,
  navigationActions,
}: {
  locale: string;
  slug: SmartMobilityChiangMaiSlug;
  content: SmartMobilityChiangMaiContentPayload;
  navigationActions: SmartMobilityNavigationAction[];
}) {
  const lang = locale || "en";
  const smartMobilityContent = content;

  return (
    <main className={`smart-mobility-premium smart-mobility-premium--${slug}`}>
      <MainChiangMai
        lang={lang}
        content={smartMobilityContent}
        navigationActions={navigationActions}
      />
    </main>
  );
}




