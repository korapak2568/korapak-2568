import type { Metadata } from "next";
import {
  BusinessDirectoryGrid,
  CgdDirectoryHero,
} from "@/components/CivilizationGraph/CgdDirectoryPages";
import { getBusinessOpportunityDirectoryData } from "@/lib/cgd/loader";
import { getLayerPageInfo } from "@/lib/cgd/layerContent";

type BusinessPageInfo = {
  metadata?: {
    index?: {
      title?: string;
      description?: string;
    };
  };
  index?: {
    hero?: {
      eyebrow?: string;
      title?: string;
      description?: string;
    };
  };
};

export async function generateMetadata(): Promise<Metadata> {
  const pageInfo = await getLayerPageInfo<BusinessPageInfo>("business_opportunities");
  const indexMetadata = pageInfo.metadata?.index;

  return {
    title: indexMetadata?.title ?? "",
    description: indexMetadata?.description ?? "",
  };
}

type PageParams = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: PageParams) {
  const { locale } = await params;
  const items = await getBusinessOpportunityDirectoryData(locale);
  const localePageInfo = await getLayerPageInfo<BusinessPageInfo>("business_opportunities", locale);
  const hero = localePageInfo.index?.hero;

  return (
    <main className="platform-page future-civilization-page cgd-page cgd-directory-page cgd-business-directory-page">
      <CgdDirectoryHero
        eyebrow={hero?.eyebrow ?? ""}
        title={hero?.title ?? ""}
        description={
          hero?.description ?? ""
        }
      />
      <BusinessDirectoryGrid items={items} lang={locale} />
    </main>
  );
}