import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BusinessNodeDirectory } from "@/components/CivilizationGraph/CgdDirectoryPages";
import {
  getBusinessOpportunityDirectoryData,
  getBusinessOpportunityNodeDirectoryData,
} from "@/lib/cgd/loader";
import {
  formatPageInfoTemplate,
  getLayerPageInfo,
} from "@/lib/cgd/layerContent";
import { LOCALES } from "@/lib/SiteUrlLocales";

type BusinessPageInfo = {
  metadata?: {
    node?: {
      title_template?: string;
      description_template?: string;
      fallback_title?: string;
      fallback_description?: string;
    };
  };
};

type PageParams = {
  params: Promise<{ locale: string; nodeSlug: string }>;
};

export async function generateStaticParams() {
  const directories = await Promise.all(
    LOCALES.map(async (locale) => ({
      locale,
      items: await getBusinessOpportunityDirectoryData(locale),
    })),
  );

  return directories.flatMap(({ locale, items }) =>
    items.map((item) => ({
      locale,
      nodeSlug: item.url.split("/").filter(Boolean)[1],
    })),
  );
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale, nodeSlug } = await params;
  const data = await getBusinessOpportunityNodeDirectoryData(nodeSlug, locale);
  const nodeMetadata = (await getLayerPageInfo<BusinessPageInfo>(
    "business_opportunities",
    locale,
  )).metadata?.node;

  return {
    title: data
      ? formatPageInfoTemplate(
          nodeMetadata?.title_template ?? "",
          { nodeName: data.node.name },
        )
      : nodeMetadata?.fallback_title ?? "",
    description: data
      ? formatPageInfoTemplate(
          nodeMetadata?.description_template ?? "",
          { nodeName: data.node.name },
        )
      : nodeMetadata?.fallback_description ?? "",
  };
}

export default async function Page({ params }: PageParams) {
  const { locale, nodeSlug } = await params;
  const data = await getBusinessOpportunityNodeDirectoryData(nodeSlug, locale);

  if (!data) {
    notFound();
  }

  return <BusinessNodeDirectory item={data} lang={locale} />;
}