// src/app/[locale]/smart-city/[slug]/page.tsx

import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import HeroObservation from "@/components/SmartCity/HeroObservation";
import RelatesSignals from "@/components/SmartCity/RelatesSignals";
import SystemExplanation from "@/components/SmartCity/SystemExplanation";
import WhyItMatters from "@/components/SmartCity/WhyItMatters";
import {
  getSmartCityLandingContentFromJson,
  getSmartCityLandingMetadataFromJson,
} from "@/lib/platform-content/smartCityContent";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const headersList = await headers();
  const lang = headersList.get("x-locale") || "en";
  const metadata = await getSmartCityLandingMetadataFromJson(lang, slug);

  if (!metadata) notFound();

  return metadata;
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> },
) {
  const headersList = await headers();
  const lang = headersList.get("x-locale") || "en";
  const { slug } = await params;
  const data = await getSmartCityLandingContentFromJson(lang, slug);

  if (!data?.content) notFound();

  return (
    <>
      <HeroObservation lang={lang} {...data.content.heroObservation} />

      {data.content.systemExplanation && (
        <SystemExplanation lang={lang} {...data.content.systemExplanation} />
      )}

      {data.content.whyItMatters && (
        <WhyItMatters lang={lang} {...data.content.whyItMatters} />
      )}

      {data.content.relatedSignals && (
        <RelatesSignals lang={lang} signals={data.content.relatedSignals} />
      )}
    </>
  );
}
