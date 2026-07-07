import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryNodeDirectory } from "@/components/CivilizationGraph/CgdDirectoryPages";
import {
  getIndustryDirectoryData,
  getIndustryNodeDirectoryData,
} from "@/lib/cgd/loader";
import {
  formatPageInfoTemplate,
  getLayerPageInfo,
} from "@/lib/cgd/layerContent";
import { LOCALES } from "@/lib/SiteUrlLocales";

type IndustryPageInfo = {
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

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    getIndustryDirectoryData().map((item) => ({
      locale,
      nodeSlug: item.url.split("/").filter(Boolean)[1],
    })),
  );
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale, nodeSlug } = await params;
  const data = getIndustryNodeDirectoryData(nodeSlug);
  const nodeMetadata = getLayerPageInfo<IndustryPageInfo>("industries", locale).metadata?.node;

  return {
    title: data
      ? formatPageInfoTemplate(
          nodeMetadata?.title_template ?? "",
          { nodeName: data.node.name },
        )
      : nodeMetadata?.fallback_title ?? "",
    description: data
      ? formatPageInfoTemplate(
          nodeMetadata?.description_template ??
            "Browse current problems, sub-nodes, and future solution paths for {nodeName}.",
          { nodeName: data.node.name },
        )
      : nodeMetadata?.fallback_description ??
        "Browse industry nodes in the Chorn Planet Civilization Graph.",
  };
}

export default async function Page({ params }: PageParams) {
  const { locale, nodeSlug } = await params;
  const data = getIndustryNodeDirectoryData(nodeSlug);

  if (!data) {
    notFound();
  }

  return <IndustryNodeDirectory item={data} lang={locale} />;
}