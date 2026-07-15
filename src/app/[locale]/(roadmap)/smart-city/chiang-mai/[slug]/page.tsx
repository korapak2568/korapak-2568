// src/app/[locale]/(legacy)/smart-city/chiang-mai/[slug]/page.tsx

import React from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import SmartCityMain from "@/components/SmartCity/ChiangMai/SmartCityMain";
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

  return (
    <div className="container">
      <SmartCityMain
        lang={lang}
        smartCityItem={smartCityContent.item}
        relatedItems={smartCityContent.relatedItems}
        bottomContent={smartCityContent.bottomContent}
      />
    </div>
  );
}
