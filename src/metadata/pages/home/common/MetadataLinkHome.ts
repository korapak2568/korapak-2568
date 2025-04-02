import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkHome: IMetadataLinkPage = {
    alternates: {
        canonical: 'https://chorn.in.th/',
        languages: {
            "en": "https://chorn.in.th/en",
            "th": "https://chorn.in.th/th",
            "fr": "https://chorn.in.th/fr",
            "ja": "https://chorn.in.th/ja",
            "vi": "https://chorn.in.th/vi",
            "zh": "https://chorn.in.th/zh",
            "de": "https://chorn.in.th/de",
            "nl": "https://chorn.in.th/nl",
            "da": "https://chorn.in.th/da",
            "fi": "https://chorn.in.th/fi",
            "ko": "https://chorn.in.th/ko",
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
        url: "https://chorn.in.th/en/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.home.url,
        ],
    },
}