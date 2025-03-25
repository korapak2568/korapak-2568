import {OpenGraph} from "@/data/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/data/metadata/model/IMetadataLinkPage";

export const MetadataLinkFrontEndMain: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/front-end-developer/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/front-end-developer/",
            "th": "https://chorn.in.th/th/technical-expertise/front-end-developer/",
            "fr": "https://chorn.in.th/fr/technical-expertise/front-end-developer/",
            "ja": "https://chorn.in.th/ja/technical-expertise/front-end-developer/",
            "vi": "https://chorn.in.th/vi/technical-expertise/front-end-developer/",
            "zh": "https://chorn.in.th/zh/technical-expertise/front-end-developer/",
            "de": "https://chorn.in.th/de/technical-expertise/front-end-developer/",
            "nl": "https://chorn.in.th/nl/technical-expertise/front-end-developer/",
            "da": "https://chorn.in.th/da/technical-expertise/front-end-developer/",
            "fi": "https://chorn.in.th/fi/technical-expertise/front-end-developer/",
            "ko": "https://chorn.in.th/ko/technical-expertise/front-end-developer/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.frontend.main.url,
                width: 1360,
                height: 810,
                alt: OpenGraph.frontend.main.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/front-end-developer/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.frontend.main.url,
        ],
    },
}