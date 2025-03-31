import {OpenGraph} from "@/data/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/data/metadata/model/IMetadataLinkPage";

export const MetadataLinkPrivacyPolicy: IMetadataLinkPage = {
    alternates: {
        canonical: 'https://chorn.in.th/en/privacy-policy/',
        languages: {
            "en": "https://chorn.in.th/en/privacy-policy/",
            "th": "https://chorn.in.th/th/privacy-policy/",
            "fr": "https://chorn.in.th/fr/privacy-policy/",
            "ja": "https://chorn.in.th/ja/privacy-policy/",
            "vi": "https://chorn.in.th/vi/privacy-policy/",
            "zh": "https://chorn.in.th/zh/privacy-policy/",
            "de": "https://chorn.in.th/de/privacy-policy/",
            "nl": "https://chorn.in.th/nl/privacy-policy/",
            "da": "https://chorn.in.th/da/privacy-policy/",
            "fi": "https://chorn.in.th/fi/privacy-policy/",
            "ko": "https://chorn.in.th/ko/privacy-policy/",
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
        url: "https://chorn.in.th/en//privacy-policy/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.home.url,
        ],
    },
}