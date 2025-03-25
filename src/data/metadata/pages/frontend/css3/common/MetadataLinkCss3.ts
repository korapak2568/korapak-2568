import {OpenGraph} from "@/data/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/data/metadata/model/IMetadataLinkPage";

export const MetadataLinkCss3: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/front-end-developer/css3-developer/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/front-end-developer/css3-developer/",
            "th": "https://chorn.in.th/th/technical-expertise/front-end-developer/css3-developer/",
            "ja": "https://chorn.in.th/ja/technical-expertise/front-end-developer/css3-developer/",
            "fr": "https://chorn.in.th/fr/technical-expertise/front-end-developer/css3-developer/",
            "vi": "https://chorn.in.th/vi/technical-expertise/front-end-developer/css3-developer/",
            "zh": "https://chorn.in.th/zh/technical-expertise/front-end-developer/css3-developer/",
            "de": "https://chorn.in.th/de/technical-expertise/front-end-developer/css3-developer/",
            "nl": "https://chorn.in.th/nl/technical-expertise/front-end-developer/css3-developer/",
            "da": "https://chorn.in.th/da/technical-expertise/front-end-developer/css3-developer/",
            "fi": "https://chorn.in.th/fi/technical-expertise/front-end-developer/css3-developer/",
            "ko": "https://chorn.in.th/ko/technical-expertise/front-end-developer/css3-developer/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.frontend.css3.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.frontend.css3.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/front-end-developer/css3-developer/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.frontend.css3.url,
        ],
    },
}