import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/metadataLink/model/IMetadataLinkPage";

export const MetadataLinkTermOfService: IMetadataLinkPage = {
    alternates: {
        canonical: 'https://chorn.in.th/en/terms-of-service/',
        languages: {
            "en": "https://chorn.in.th/en/terms-of-service/",
            "th": "https://chorn.in.th/th/terms-of-service/",
            "fr": "https://chorn.in.th/fr/terms-of-service/",
            "ja": "https://chorn.in.th/ja/terms-of-service/",
            "vi": "https://chorn.in.th/vi/terms-of-service/",
            "zh": "https://chorn.in.th/zh/terms-of-service/",
            "de": "https://chorn.in.th/de/terms-of-service/",
            "nl": "https://chorn.in.th/nl/terms-of-service/",
            "da": "https://chorn.in.th/da/terms-of-service/",
            "fi": "https://chorn.in.th/fi/terms-of-service/",
            "ko": "https://chorn.in.th/ko/terms-of-service/",
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
        url: "https://chorn.in.th/en//terms-of-service/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.home.url,
        ],
    },
}