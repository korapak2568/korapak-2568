import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/metadataLink/model/IMetadataLinkPage";

export const MetadataLinkWorkPolicy: IMetadataLinkPage = {
    alternates: {
        canonical: 'https://chorn.in.th/en/workplace-policy/',
        languages: {
            "en": "https://chorn.in.th/en/workplace-policy/",
            "th": "https://chorn.in.th/th/workplace-policy/",
            "fr": "https://chorn.in.th/fr/workplace-policy/",
            "ja": "https://chorn.in.th/ja/workplace-policy/",
            "vi": "https://chorn.in.th/vi/workplace-policy/",
            "zh": "https://chorn.in.th/zh/workplace-policy/",
            "de": "https://chorn.in.th/de/workplace-policy/",
            "nl": "https://chorn.in.th/nl/workplace-policy/",
            "da": "https://chorn.in.th/da/workplace-policy/",
            "fi": "https://chorn.in.th/fi/workplace-policy/",
            "ko": "https://chorn.in.th/ko/workplace-policy/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.home.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.home.alt,
            },
        ],
        url: "https://chorn.in.th/en//workplace-policy/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.home.url,
        ],
    },
}