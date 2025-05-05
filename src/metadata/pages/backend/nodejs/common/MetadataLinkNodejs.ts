import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/metadataLink/model/IMetadataLinkPage";

export const MetadataLinkNodejs: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/full-stack-developer/nodejs-developer/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/full-stack-developer/nodejs-developer/",
            "th": "https://chorn.in.th/th/technical-expertise/full-stack-developer/nodejs-developer/",
            "fr": "https://chorn.in.th/fr/technical-expertise/full-stack-developer/nodejs-developer/",
            "ja": "https://chorn.in.th/ja/technical-expertise/full-stack-developer/nodejs-developer/",
            "vi": "https://chorn.in.th/vi/technical-expertise/full-stack-developer/nodejs-developer/",
            "zh": "https://chorn.in.th/zh/technical-expertise/full-stack-developer/nodejs-developer/",
            "de": "https://chorn.in.th/de/technical-expertise/full-stack-developer/nodejs-developer/",
            "nl": "https://chorn.in.th/nl/technical-expertise/full-stack-developer/nodejs-developer/",
            "da": "https://chorn.in.th/da/technical-expertise/full-stack-developer/nodejs-developer/",
            "fi": "https://chorn.in.th/fi/technical-expertise/full-stack-developer/nodejs-developer/",
            "ko": "https://chorn.in.th/ko/technical-expertise/full-stack-developer/nodejs-developer/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.backend.nodejs.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.backend.nodejs.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/full-stack-developer/nodejs-developer/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.backend.nodejs.url,
        ],
    },
}