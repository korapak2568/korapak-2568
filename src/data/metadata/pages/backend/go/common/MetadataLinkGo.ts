import {OpenGraph} from "@/data/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/data/metadata/model/IMetadataLinkPage";

export const MetadataLinkGo: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/full-stack-developer/go-developer/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/full-stack-developer/go-developer/",
            "th": "https://chorn.in.th/th/technical-expertise/full-stack-developer/go-developer/",
            "fr": "https://chorn.in.th/fr/technical-expertise/full-stack-developer/go-developer/",
            "ja": "https://chorn.in.th/ja/technical-expertise/full-stack-developer/go-developer/",
            "vi": "https://chorn.in.th/vi/technical-expertise/full-stack-developer/go-developer/",
            "zh": "https://chorn.in.th/zh/technical-expertise/full-stack-developer/go-developer/",
            "de": "https://chorn.in.th/de/technical-expertise/full-stack-developer/go-developer/",
            "nl": "https://chorn.in.th/nl/technical-expertise/full-stack-developer/go-developer/",
            "da": "https://chorn.in.th/da/technical-expertise/full-stack-developer/go-developer/",
            "fi": "https://chorn.in.th/fi/technical-expertise/full-stack-developer/go-developer/",
            "ko": "https://chorn.in.th/ko/technical-expertise/full-stack-developer/go-developer/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.backend.go.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.backend.go.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/full-stack-developer/go-developer/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.backend.go.url,
        ],
    },
}