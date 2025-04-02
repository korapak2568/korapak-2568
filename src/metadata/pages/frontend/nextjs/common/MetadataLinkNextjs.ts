import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkNextjs: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/front-end-developer/nextjs-developer",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/front-end-developer/nextjs-developer",
            "th": "https://chorn.in.th/th/technical-expertise/front-end-developer/nextjs-developer",
            "fr": "https://chorn.in.th/fr/technical-expertise/front-end-developer/nextjs-developer",
            "ja": "https://chorn.in.th/ja/technical-expertise/front-end-developer/nextjs-developer",
            "vi": "https://chorn.in.th/vi/technical-expertise/front-end-developer/nextjs-developer",
            "zh": "https://chorn.in.th/zh/technical-expertise/front-end-developer/nextjs-developer",
            "de": "https://chorn.in.th/de/technical-expertise/front-end-developer/nextjs-developer",
            "nl": "https://chorn.in.th/nl/technical-expertise/front-end-developer/nextjs-developer",
            "da": "https://chorn.in.th/da/technical-expertise/front-end-developer/nextjs-developer",
            "fi": "https://chorn.in.th/fi/technical-expertise/front-end-developer/nextjs-developer",
            "ko": "https://chorn.in.th/ko/technical-expertise/front-end-developer/nextjs-developer",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.frontend.nextjs.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.frontend.nextjs.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/front-end-developer/nextjs-developer",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.frontend.nextjs.url,
        ],
    },
}