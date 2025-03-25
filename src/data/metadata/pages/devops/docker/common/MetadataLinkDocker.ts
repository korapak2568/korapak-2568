import {OpenGraph} from "@/data/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/data/metadata/model/IMetadataLinkPage";

export const MetadataLinkDocker: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/cloud-devops/docker/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/cloud-devops/docker/",
            "th": "https://chorn.in.th/th/technical-expertise/cloud-devops/docker/",
            "fr": "https://chorn.in.th/fr/technical-expertise/cloud-devops/docker/",
            "ja": "https://chorn.in.th/ja/technical-expertise/cloud-devops/docker/",
            "vi": "https://chorn.in.th/vi/technical-expertise/cloud-devops/docker/",
            "zh": "https://chorn.in.th/zh/technical-expertise/cloud-devops/docker/",
            "de": "https://chorn.in.th/de/technical-expertise/cloud-devops/docker/",
            "nl": "https://chorn.in.th/nl/technical-expertise/cloud-devops/docker/",
            "da": "https://chorn.in.th/da/technical-expertise/cloud-devops/docker/",
            "fi": "https://chorn.in.th/fi/technical-expertise/cloud-devops/docker/",
            "ko": "https://chorn.in.th/ko/technical-expertise/cloud-devops/docker/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.devops.docker.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.devops.docker.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/cloud-devops/docker/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.devops.docker.url,
        ],
    },
}