import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkKube: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/cloud-devops/kubernetes/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/cloud-devops/kubernetes/",
            "th": "https://chorn.in.th/th/technical-expertise/cloud-devops/kubernetes/",
            "fr": "https://chorn.in.th/fr/technical-expertise/cloud-devops/kubernetes/",
            "ja": "https://chorn.in.th/ja/technical-expertise/cloud-devops/kubernetes/",
            "vi": "https://chorn.in.th/vi/technical-expertise/cloud-devops/kubernetes/",
            "zh": "https://chorn.in.th/zh/technical-expertise/cloud-devops/kubernetes/",
            "de": "https://chorn.in.th/de/technical-expertise/cloud-devops/kubernetes/",
            "nl": "https://chorn.in.th/nl/technical-expertise/cloud-devops/kubernetes/",
            "da": "https://chorn.in.th/da/technical-expertise/cloud-devops/kubernetes/",
            "fi": "https://chorn.in.th/fi/technical-expertise/cloud-devops/kubernetes/",
            "ko": "https://chorn.in.th/ko/technical-expertise/cloud-devops/kubernetes/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.devops.kube.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.devops.kube.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/cloud-devops/kubernetes/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.devops.kube.url,
        ],
    },
}