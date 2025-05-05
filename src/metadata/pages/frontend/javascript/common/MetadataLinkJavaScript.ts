import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/metadataLink/model/IMetadataLinkPage";

export const MetadataLinkJavaScript: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/front-end-developer/javascript-developer/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/front-end-developer/javascript-developer/",
            "th": "https://chorn.in.th/th/technical-expertise/front-end-developer/javascript-developer/",
            "fr": "https://chorn.in.th/fr/technical-expertise/front-end-developer/javascript-developer/",
            "ja": "https://chorn.in.th/ja/technical-expertise/front-end-developer/javascript-developer/",
            "vi": "https://chorn.in.th/vi/technical-expertise/front-end-developer/javascript-developer/",
            "zh": "https://chorn.in.th/zh/technical-expertise/front-end-developer/javascript-developer/",
            "de": "https://chorn.in.th/de/technical-expertise/front-end-developer/javascript-developer/",
            "nl": "https://chorn.in.th/nl/technical-expertise/front-end-developer/javascript-developer/",
            "da": "https://chorn.in.th/da/technical-expertise/front-end-developer/javascript-developer/",
            "fi": "https://chorn.in.th/fi/technical-expertise/front-end-developer/javascript-developer/",
            "ko": "https://chorn.in.th/ko/technical-expertise/front-end-developer/javascript-developer/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.frontend.javascript.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.frontend.javascript.alt,
            },
        ],
        url: "https://chorn.in.th/en/technical-expertise/front-end-developer/javascript-developer/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.frontend.javascript.url,
        ],
    },
}