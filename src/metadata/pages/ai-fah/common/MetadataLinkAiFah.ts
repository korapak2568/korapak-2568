import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/metadataLink/model/IMetadataLinkPage";

export const MetadataLinkAiFah: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/ai-companions/fah",
        languages: {
            "en": "https://chorn.in.th/en/ai-companions/fah",
            "th": "https://chorn.in.th/th/ai-companions/fah",
            "fr": "https://chorn.in.th/fr/ai-companions/fah",
            "ja": "https://chorn.in.th/ja/ai-companions/fah",
            "vi": "https://chorn.in.th/vi/ai-companions/fah",
            "zh": "https://chorn.in.th/zh/ai-companions/fah",
            "de": "https://chorn.in.th/de/ai-companions/fah",
            "nl": "https://chorn.in.th/nl/ai-companions/fah",
            "da": "https://chorn.in.th/da/ai-companions/fah",
            "fi": "https://chorn.in.th/fi/ai-companions/fah",
            "ko": "https://chorn.in.th/ko/ai-companions/fah",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.aiFah.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.aiFah.alt,
            }
        ],
        url: "https://chorn.in.th/en/ai-companions/fah",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.aiFah.url,
        ],
    },
}