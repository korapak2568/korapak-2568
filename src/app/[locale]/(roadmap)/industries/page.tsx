import type { Metadata } from "next";
import {
  CgdDirectoryHero,
  IndustryDirectoryGrid,
} from "@/components/CivilizationGraph/CgdDirectoryPages";
import { getIndustryDirectoryData } from "@/lib/cgd/loader";
import { getLayerPageInfo } from "@/lib/cgd/layerContent";

type IndustryPageInfo = {
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
    stats?: {
      industry_nodes?: string;
      linked_problem_pages?: string;
      problem_catalog?: string;
    };
  };
};

export async function generateMetadata(): Promise<Metadata> {
  const pageInfo = await getLayerPageInfo<IndustryPageInfo>("industries");
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
  const items = await getIndustryDirectoryData();
  const linkedProblems = items.reduce((total, item) => total + item.linkedProblemCount, 0);
  const problemCatalog = items.reduce((total, item) => total + item.totalProblemCount, 0);
  const localePageInfo = await getLayerPageInfo<IndustryPageInfo>("industries", locale);
  const hero = localePageInfo.index?.hero;
  const stats = localePageInfo.index?.stats;

  return (
    <main className="platform-page future-civilization-page cgd-page cgd-directory-page cgd-industry-directory-page">
      <CgdDirectoryHero
        eyebrow={hero?.eyebrow ?? ""}
        title={hero?.title ?? ""}
        description={
          hero?.description ?? ""
        }
        stats={[
          { label: stats?.industry_nodes ?? "", value: items.length },
          { label: stats?.linked_problem_pages ?? "", value: linkedProblems },
          { label: stats?.problem_catalog ?? "", value: problemCatalog },
        ]}
      />
      <IndustryDirectoryGrid items={items} lang={locale} />
    </main>
  );
}