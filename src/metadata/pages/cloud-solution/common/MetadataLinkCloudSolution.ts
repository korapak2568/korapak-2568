import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkCloudSolution: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/cloud-infrastructure-systems-architecture/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/cloud-infrastructure-systems-architecture/",
            "th": "https://chorn.in.th/th/technical-expertise/cloud-infrastructure-systems-architecture/",
            "fr": "https://chorn.in.th/fr/technical-expertise/cloud-infrastructure-systems-architecture/",
            "ja": "https://chorn.in.th/ja/technical-expertise/cloud-infrastructure-systems-architecture/",
            "vi": "https://chorn.in.th/vi/technical-expertise/cloud-infrastructure-systems-architecture/",
            "zh": "https://chorn.in.th/zh/technical-expertise/cloud-infrastructure-systems-architecture/",
            "de": "https://chorn.in.th/de/technical-expertise/cloud-infrastructure-systems-architecture/",
            "nl": "https://chorn.in.th/nl/technical-expertise/cloud-infrastructure-systems-architecture/",
            "da": "https://chorn.in.th/da/technical-expertise/cloud-infrastructure-systems-architecture/",
            "fi": "https://chorn.in.th/fi/technical-expertise/cloud-infrastructure-systems-architecture/",
            "ko": "https://chorn.in.th/ko/technical-expertise/cloud-infrastructure-systems-architecture/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.cloudSolutions.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.cloudSolutions.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/cloud-infrastructure-systems-architecture/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.cloudSolutions.url,
        ],
    },
}