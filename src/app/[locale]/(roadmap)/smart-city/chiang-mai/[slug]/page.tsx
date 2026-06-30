// src/app/[locale]/(legacy)/smart-city/chiang-mai/[slug]/page.tsx

import React from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import SmartCityMain from "@/components/SmartCity/ChiangMai/SmartCityMain";
import { loadOptionalAiCompanionsContent } from "@/lib/ai-companions-content/optionalAiCompanionsContent";
import {
  getSmartCityChiangMaiContentFromJson,
  getSmartCityChiangMaiMetadataFromJson,
} from "@/lib/platform-content/smartCityContent";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const headersList = await headers();
  const lang = headersList.get("x-locale") || "en";
  const metadata = await getSmartCityChiangMaiMetadataFromJson(lang, slug);

  if (!metadata) notFound();

  return metadata;
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> },
) {
  const headersList = await headers();
  const lang = headersList.get("x-locale") || "en";
  const { slug } = await params;
  const smartCityContent = await getSmartCityChiangMaiContentFromJson(lang, slug);

  if (!smartCityContent?.item) notFound();

  const aiContent = await loadOptionalAiCompanionsContent(lang, `smart-city-chiang-mai/${slug}`);

  return (
    <div className="container">
      <SmartCityMain
        lang={lang}
        smartCityItem={smartCityContent.item}
        relatedItems={smartCityContent.relatedItems}
        bottomContent={smartCityContent.bottomContent}
      />
      {aiContent && (
        <>
          <AiSolutionsMain
            lang={lang}
            service={aiContent.service}
            llmSlides={aiContent.media.llmSlides}
          />
          <HomeFeatureMain
            lang={lang}
            feature={aiContent.feature}
            featureImage={aiContent.media.featureImage}
            isHideTopTitle={true}
          />
        </>
      )}
    </div>
  );
}
