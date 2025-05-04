// src/metadata/pages/cloud-solution/common/MetadataLinkCloudSolution.ts

import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";
import {LanguageCode} from "@/data/translate/LanguageCode";

export const cloudSolutionUrls: Record<string, string> = {
    "en": "https://chorn.in.th/en/technical-expertise/cloud-infrastructure-systems-architecture/",
    "th": "https://chorn.in.th/th/technical-expertise/cloud-infrastructure-systems-architecture/",
    "fr": "https://chorn.in.th/fr/technical-expertise/cloud-infrastructure-systems-architecture/",
    "ja": "https://chorn.in.th/ja/technical-expertise/cloud-infrastructure-systems-architecture/",
    "vi": "https://chorn.in.th/vi/technical-expertise/cloud-infrastructure-systems-architecture/",
    "zh": "https://chorn.in.th/zh/technical-expertise/cloud-infrastructure-systems-architecture/",
    "de": "https://chorn.in.th/de/technical-expertise/cloud-infrastructure-systems-architecture/",
    "nl": "https://chorn.in.th/nl/technical-expertise/cloud-infrastructure-systems-architecture/",
    "da": "https://chorn.in.th/da/technical-expertise/cloud-infrastructure-systems-architecture/",
    "fi": "https://chorn.in.th/fi/technical-expertise/cloud-infrastructure-systems-architecture/",
    "ko": "https://chorn.in.th/ko/technical-expertise/cloud-infrastructure-systems-architecture/",
}

export const alternativeCloudSolution = (lang: string) => {
    return {
        canonical: cloudSolutionUrls[lang],
        languages: cloudSolutionUrls,
    }
}

export const MetadataLinkCloudSolution: IMetadataLinkPage = {
    alternates: {
        canonical: cloudSolutionUrls[LanguageCode.en],
        languages: cloudSolutionUrls,
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.cloudSolutions.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.cloudSolutions.alt,
            }
        ],
        url: cloudSolutionUrls[LanguageCode.en],
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.cloudSolutions.url,
        ],
    },
}