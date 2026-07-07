import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BusinessOpportunityPage from "@/components/CivilizationGraph/BusinessOpportunityPage";
import {
  getBusinessOpportunityPageData,
  getCgdStaticParams,
} from "@/lib/cgd/loader";
import { getBusinessOpportunityMetadata } from "@/lib/cgd/seo";
import { LOCALES } from "@/lib/SiteUrlLocales";

type PageParams = {
  params: Promise<{
    locale: string;
    nodeSlug: string;
    businessSlug: string;
  }>;
};

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    getCgdStaticParams("business-opportunity").map((segments) => ({
      locale,
      nodeSlug: segments[1],
      businessSlug: segments[2],
    })),
  );
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, nodeSlug, businessSlug } = await params;

  return getBusinessOpportunityMetadata(nodeSlug, businessSlug, locale);
}

export default async function Page({ params }: PageParams) {
  const { locale, nodeSlug, businessSlug } = await params;

  const data = getBusinessOpportunityPageData(nodeSlug, businessSlug, locale);

  if (!data) {
    notFound();
  }

  return <BusinessOpportunityPage data={data} lang={locale} />;
}
