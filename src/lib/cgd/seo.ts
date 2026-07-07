import type { Metadata } from "next";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import {
  getBusinessOpportunityPageData,
  getIndustryProblemPageData,
} from "@/lib/cgd/loader";
import {
  formatPageInfoTemplate,
  getLayerPageInfo,
} from "@/lib/cgd/layerContent";

type IndustryPageInfo = {
  metadata?: {
    detail?: {
      fallback_title?: string;
      fallback_description?: string;
      title_template?: string;
      description_template?: string;
    };
  };
};

type BusinessPageInfo = {
  metadata?: {
    detail?: {
      fallback_title?: string;
      fallback_description?: string;
      title_template?: string;
      description_template?: string;
    };
  };
};

export function getIndustryProblemMetadata(
  nodeSlug: string,
  subNodeSlug: string,
  problemSlug: string,
  locale?: string,
): Metadata {
  const data = getIndustryProblemPageData(nodeSlug, subNodeSlug, problemSlug, locale);
  const detailMetadata = getLayerPageInfo<IndustryPageInfo>(
    "industries",
    locale,
  ).metadata?.detail;

  if (!data) {
    return {
      title: detailMetadata?.fallback_title ?? "",
      description:
        detailMetadata?.fallback_description ??
        "Explore future civilization problems and solutions.",
    };
  }

  const title =
    data.search?.title ??
    formatPageInfoTemplate(
      detailMetadata?.title_template ?? "{problemName} | {subNodeName} | Chorn Planet",
      {
        problemName: data.problem.name,
        subNodeName: data.subNode.name,
      },
    );
  const description =
    data.search?.description ??
    formatPageInfoTemplate(
      detailMetadata?.description_template ??
        "{problemName} affects {nodeName} and {subNodeName}. Explore future roadmap solutions, business opportunities, and related civilization graph links.",
      {
        nodeName: data.node.name,
        problemName: data.problem.name,
        subNodeName: data.subNode.name,
      },
    );
  const targetPath = `/industries/${nodeSlug}/${subNodeSlug}/${problemSlug}/`;

  return {
    title,
    description,
    alternates: getLocalizedAlternates(targetPath, locale),
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export function getBusinessOpportunityMetadata(
  nodeSlug: string,
  businessSlug: string,
  locale?: string,
): Metadata {
  const data = getBusinessOpportunityPageData(nodeSlug, businessSlug, locale);
  const detailMetadata = getLayerPageInfo<BusinessPageInfo>(
    "business_opportunities",
    locale,
  ).metadata?.detail;

  if (!data) {
    return {
      title: detailMetadata?.fallback_title ?? "",
      description:
        detailMetadata?.fallback_description ??
        "Explore future civilization business opportunities.",
    };
  }

  const title =
    data.search?.title ??
    formatPageInfoTemplate(
      detailMetadata?.title_template ?? "{opportunityName} | {nodeName} | Chorn Planet",
      {
        nodeName: data.node.name,
        opportunityName: data.opportunity.name,
      },
    );
  const description =
    data.search?.description ??
    formatPageInfoTemplate(
      detailMetadata?.description_template ??
        "{opportunityName} connects {nodeName}, {subNodeName}, and the future civilization roadmap through the Chorn Planet Civilization Graph.",
      {
        nodeName: data.node.name,
        opportunityName: data.opportunity.name,
        subNodeName: data.subNode.name,
      },
    );
  const targetPath = `/business-opportunities/${nodeSlug}/${businessSlug}/`;

  return {
    title,
    description,
    alternates: getLocalizedAlternates(targetPath, locale),
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}