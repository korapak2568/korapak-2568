import {OpenGraph} from "@/data/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/data/metadata/model/IMetadataLinkPage";

export const MetadataLinkAiCompanion: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/ai-companions",
        languages: {
            "en": "https://chorn.in.th/en/ai-companions",
            "th": "https://chorn.in.th/th/ai-companions",
            "fr": "https://chorn.in.th/fr/ai-companions",
            "ja": "https://chorn.in.th/ja/ai-companions",
            "vi": "https://chorn.in.th/vi/ai-companions",
            "zh": "https://chorn.in.th/zh/ai-companions",
            "de": "https://chorn.in.th/de/ai-companions",
            "nl": "https://chorn.in.th/nl/ai-companions",
            "da": "https://chorn.in.th/da/ai-companions",
            "fi": "https://chorn.in.th/fi/ai-companions",
            "ko": "https://chorn.in.th/ko/ai-companions",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.aiCompanions.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.aiCompanions.alt,
            }
        ],
        url: "https://chorn.in.th/en/ai-companions",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.aiCompanions.url
        ],
    },
}