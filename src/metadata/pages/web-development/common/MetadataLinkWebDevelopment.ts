import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/metadataLink/model/IMetadataLinkPage";

export const MetadataLinkWebDevelopment: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/web-development/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/web-development/",
            "th": "https://chorn.in.th/th/technical-expertise/web-development/",
            "fr": "https://chorn.in.th/fr/technical-expertise/web-development/",
            "ja": "https://chorn.in.th/ja/technical-expertise/web-development/",
            "vi": "https://chorn.in.th/vi/technical-expertise/web-development/",
            "zh": "https://chorn.in.th/zh/technical-expertise/web-development/",
            "de": "https://chorn.in.th/de/technical-expertise/web-development/",
            "nl": "https://chorn.in.th/nl/technical-expertise/web-development/",
            "da": "https://chorn.in.th/da/technical-expertise/web-development/",
            "fi": "https://chorn.in.th/fi/technical-expertise/web-development/",
            "ko": "https://chorn.in.th/ko/technical-expertise/web-development/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.webDevelopment.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.webDevelopment.alt
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/web-development/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.webDevelopment.url,
        ],
    }
}