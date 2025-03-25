import {OpenGraph} from "@/data/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/data/metadata/model/IMetadataLinkPage";

export const MetadataLinkAiPloy: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/ai-companions/ploy",
        languages: {
            "en": "https://chorn.in.th/en/ai-companions/ploy",
            "th": "https://chorn.in.th/th/ai-companions/ploy",
            "fr": "https://chorn.in.th/fr/ai-companions/ploy",
            "ja": "https://chorn.in.th/ja/ai-companions/ploy",
            "vi": "https://chorn.in.th/vi/ai-companions/ploy",
            "zh": "https://chorn.in.th/zh/ai-companions/ploy",
            "de": "https://chorn.in.th/de/ai-companions/ploy",
            "nl": "https://chorn.in.th/nl/ai-companions/ploy",
            "da": "https://chorn.in.th/da/ai-companions/ploy",
            "fi": "https://chorn.in.th/fi/ai-companions/ploy",
            "ko": "https://chorn.in.th/ko/ai-companions/ploy",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.aiPloy.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.aiPloy.alt,
            }
        ],
        url: "https://chorn.in.th/en/ai-companions/ploy",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.aiPloy.url,
        ],
    },
}