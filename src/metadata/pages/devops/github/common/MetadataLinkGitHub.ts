import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/metadataLink/model/IMetadataLinkPage";

export const MetadataLinkGitHub: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/cloud-devops/github/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/cloud-devops/github/",
            "th": "https://chorn.in.th/th/technical-expertise/cloud-devops/github/",
            "fr": "https://chorn.in.th/fr/technical-expertise/cloud-devops/github/",
            "ja": "https://chorn.in.th/ja/technical-expertise/cloud-devops/github/",
            "vi": "https://chorn.in.th/vi/technical-expertise/cloud-devops/github/",
            "zh": "https://chorn.in.th/zh/technical-expertise/cloud-devops/github/",
            "de": "https://chorn.in.th/de/technical-expertise/cloud-devops/github/",
            "nl": "https://chorn.in.th/nl/technical-expertise/cloud-devops/github/",
            "da": "https://chorn.in.th/da/technical-expertise/cloud-devops/github/",
            "fi": "https://chorn.in.th/fi/technical-expertise/cloud-devops/github/",
            "ko": "https://chorn.in.th/ko/technical-expertise/cloud-devops/github/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.devops.github.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.devops.github.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/cloud-devops/github/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.devops.github.url,
        ],
    },
}