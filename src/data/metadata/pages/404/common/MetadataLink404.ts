import {OpenGraph} from "@/data/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/data/metadata/model/IMetadataLinkPage";

export const MetadataLink404: IMetadataLinkPage = {
    alternates: {
        canonical: 'https://chorn.in.th/en/404/',
        languages: {
            "en": "https://chorn.in.th/en/404/",
            "th": "https://chorn.in.th/th/404/",
            "fr": "https://chorn.in.th/fr/404/",
            "ja": "https://chorn.in.th/ja/404/",
            "vi": "https://chorn.in.th/vi/404/",
            "zh": "https://chorn.in.th/zh/404/",
            "de": "https://chorn.in.th/de/404/",
            "nl": "https://chorn.in.th/nl/404/",
            "da": "https://chorn.in.th/da/404/",
            "fi": "https://chorn.in.th/fi/404/",
            "ko": "https://chorn.in.th/ko/404/",
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
        url: "https://chorn.in.th/en//404/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.home.url,
        ],
    },
}