import {OpenGraph} from "@/data/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/data/metadata/model/IMetadataLinkPage";

export const MetadataLinkAiAom: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/ai-companions/aom",
        languages: {
            "en": "https://chorn.in.th/en/ai-companions/aom",
            "th": "https://chorn.in.th/th/ai-companions/aom",
            "fr": "https://chorn.in.th/fr/ai-companions/aom",
            "ja": "https://chorn.in.th/ja/ai-companions/aom",
            "vi": "https://chorn.in.th/vi/ai-companions/aom",
            "zh": "https://chorn.in.th/zh/ai-companions/aom",
            "de": "https://chorn.in.th/de/ai-companions/aom",
            "nl": "https://chorn.in.th/nl/ai-companions/aom",
            "da": "https://chorn.in.th/da/ai-companions/aom",
            "fi": "https://chorn.in.th/fi/ai-companions/aom",
            "ko": "https://chorn.in.th/ko/ai-companions/aom",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.aiAom.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.aiAom.alt,
            }
        ],
        url: "https://chorn.in.th/en/ai-companions/aom",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.aiAom.url,
        ],
    },
}