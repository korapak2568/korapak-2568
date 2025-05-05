import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/metadataLink/model/IMetadataLinkPage";

export const MetadataLinkDevOpsMain: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/cloud-devops/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/cloud-devops/",
            "th": "https://chorn.in.th/th/technical-expertise/cloud-devops/",
            "fr": "https://chorn.in.th/fr/technical-expertise/cloud-devops/",
            "ja": "https://chorn.in.th/ja/technical-expertise/cloud-devops/",
            "vi": "https://chorn.in.th/vi/technical-expertise/cloud-devops/",
            "zh": "https://chorn.in.th/zh/technical-expertise/cloud-devops/",
            "de": "https://chorn.in.th/de/technical-expertise/cloud-devops/",
            "nl": "https://chorn.in.th/nl/technical-expertise/cloud-devops/",
            "da": "https://chorn.in.th/da/technical-expertise/cloud-devops/",
            "fi": "https://chorn.in.th/fi/technical-expertise/cloud-devops/",
            "ko": "https://chorn.in.th/ko/technical-expertise/cloud-devops/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.devops.main.url,
                width: 1360,
                height: 810,
                alt: OpenGraph.devops.main.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/cloud-devops/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.devops.main.url,
        ],
    },
}