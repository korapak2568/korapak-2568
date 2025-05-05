import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/metadataLink/model/IMetadataLinkPage";

export const MetadataLinkBackEndMain: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/full-stack-developer/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/full-stack-developer/",
            "th": "https://chorn.in.th/th/technical-expertise/full-stack-developer/",
            "fr": "https://chorn.in.th/fr/technical-expertise/full-stack-developer/",
            "ja": "https://chorn.in.th/ja/technical-expertise/full-stack-developer/",
            "vi": "https://chorn.in.th/vi/technical-expertise/full-stack-developer/",
            "zh": "https://chorn.in.th/zh/technical-expertise/full-stack-developer/",
            "de": "https://chorn.in.th/de/technical-expertise/full-stack-developer/",
            "nl": "https://chorn.in.th/nl/technical-expertise/full-stack-developer/",
            "da": "https://chorn.in.th/da/technical-expertise/full-stack-developer/",
            "fi": "https://chorn.in.th/fi/technical-expertise/full-stack-developer/",
            "ko": "https://chorn.in.th/ko/technical-expertise/full-stack-developer/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.backend.main.url,
                width: 1360,
                height: 810,
                alt: OpenGraph.backend.main.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/full-stack-developer/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.backend.main.url,
        ],
    },
}