import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryProblemPage from "@/components/CivilizationGraph/IndustryProblemPage";
import {
  getCgdStaticParams,
  getIndustryProblemPageData,
} from "@/lib/cgd/loader";
import { getIndustryProblemMetadata } from "@/lib/cgd/seo";
import { LOCALES } from "@/lib/SiteUrlLocales";

type PageParams = {
  params: Promise<{
    locale: string;
    nodeSlug: string;
    subNodeSlug: string;
    problemSlug: string;
  }>;
};

export async function generateStaticParams() {
  const staticParams = await getCgdStaticParams("industry-problem");

  return LOCALES.flatMap((locale) =>
    staticParams.map((segments) => ({
      locale,
      nodeSlug: segments[1],
      subNodeSlug: segments[2],
      problemSlug: segments[3],
    })),
  );
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, nodeSlug, subNodeSlug, problemSlug } = await params;

  return getIndustryProblemMetadata(nodeSlug, subNodeSlug, problemSlug, locale);
}

export default async function Page({ params }: PageParams) {
  const { locale, nodeSlug, subNodeSlug, problemSlug } = await params;


  const data = await getIndustryProblemPageData(nodeSlug, subNodeSlug, problemSlug, locale);

  if (!data) {
    notFound();
  }

  return <IndustryProblemPage data={data} lang={locale} />;
}
