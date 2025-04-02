import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkReact: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/front-end-developer/react-developer/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/front-end-developer/react-developer/",
            "th": "https://chorn.in.th/th/technical-expertise/front-end-developer/react-developer/",
            "fr": "https://chorn.in.th/fr/technical-expertise/front-end-developer/react-developer/",
            "ja": "https://chorn.in.th/ja/technical-expertise/front-end-developer/react-developer/",
            "vi": "https://chorn.in.th/vi/technical-expertise/front-end-developer/react-developer/",
            "zh": "https://chorn.in.th/zh/technical-expertise/front-end-developer/react-developer/",
            "de": "https://chorn.in.th/de/technical-expertise/front-end-developer/react-developer/",
            "nl": "https://chorn.in.th/nl/technical-expertise/front-end-developer/react-developer/",
            "da": "https://chorn.in.th/da/technical-expertise/front-end-developer/react-developer/",
            "fi": "https://chorn.in.th/fi/technical-expertise/front-end-developer/react-developer/",
            "ko": "https://chorn.in.th/ko/technical-expertise/front-end-developer/react-developer/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.frontend.react.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.frontend.react.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/front-end-developer/react-developer",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.frontend.react.url,
        ],
    },
}