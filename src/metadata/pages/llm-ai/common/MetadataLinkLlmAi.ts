import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkLlmAi: IMetadataLinkPage = {
    alternates: {
        canonical: "https://www.chorn.in.th/en/technical-expertise/ai-solutions/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/ai-solutions/",
            "th": "https://chorn.in.th/th/technical-expertise/ai-solutions/",
            "fr": "https://chorn.in.th/fr/technical-expertise/ai-solutions/",
            "ja": "https://chorn.in.th/ja/technical-expertise/ai-solutions/",
            "vi": "https://chorn.in.th/vi/technical-expertise/ai-solutions/",
            "zh": "https://chorn.in.th/zh/technical-expertise/ai-solutions/",
            "de": "https://chorn.in.th/de/technical-expertise/ai-solutions/",
            "nl": "https://chorn.in.th/nl/technical-expertise/ai-solutions/",
            "da": "https://chorn.in.th/da/technical-expertise/ai-solutions/",
            "fi": "https://chorn.in.th/fi/technical-expertise/ai-solutions/",
            "ko": "https://chorn.in.th/ko/technical-expertise/ai-solutions/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.llmAi.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.llmAi.alt
            }
        ],
        url: "https://www.chorn.in.th/en/technical-expertise/ai-solutions/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.llmAi.url
        ],
    },
}