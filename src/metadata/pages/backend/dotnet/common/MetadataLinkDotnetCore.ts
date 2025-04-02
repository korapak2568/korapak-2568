import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkDotnetCore: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/full-stack-developer/dotnetcore-developer/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/full-stack-developer/dotnetcore-developer/",
            "th": "https://chorn.in.th/th/technical-expertise/full-stack-developer/dotnetcore-developer/",
            "fr": "https://chorn.in.th/fr/technical-expertise/full-stack-developer/dotnetcore-developer/",
            "ja": "https://chorn.in.th/ja/technical-expertise/full-stack-developer/dotnetcore-developer/",
            "vi": "https://chorn.in.th/vi/technical-expertise/full-stack-developer/dotnetcore-developer/",
            "zh": "https://chorn.in.th/zh/technical-expertise/full-stack-developer/dotnetcore-developer/",
            "de": "https://chorn.in.th/de/technical-expertise/full-stack-developer/dotnetcore-developer/",
            "nl": "https://chorn.in.th/nl/technical-expertise/full-stack-developer/dotnetcore-developer/",
            "da": "https://chorn.in.th/da/technical-expertise/full-stack-developer/dotnetcore-developer/",
            "fi": "https://chorn.in.th/fi/technical-expertise/full-stack-developer/dotnetcore-developer/",
            "ko": "https://chorn.in.th/ko/technical-expertise/full-stack-developer/dotnetcore-developer/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.backend.dotnetcore.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.backend.dotnetcore.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/full-stack-developer/dotnetcore-developer/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.backend.dotnetcore.url,
        ],
    },
}