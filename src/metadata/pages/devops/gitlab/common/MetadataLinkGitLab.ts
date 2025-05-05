import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/metadataLink/model/IMetadataLinkPage";

export const MetadataLinkGitLab: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/cloud-devops/gitlab/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/cloud-devops/gitlab/",
            "th": "https://chorn.in.th/th/technical-expertise/cloud-devops/gitlab/",
            "fr": "https://chorn.in.th/fr/technical-expertise/cloud-devops/gitlab/",
            "ja": "https://chorn.in.th/ja/technical-expertise/cloud-devops/gitlab/",
            "vi": "https://chorn.in.th/vi/technical-expertise/cloud-devops/gitlab/",
            "zh": "https://chorn.in.th/zh/technical-expertise/cloud-devops/gitlab/",
            "de": "https://chorn.in.th/de/technical-expertise/cloud-devops/gitlab/",
            "nl": "https://chorn.in.th/nl/technical-expertise/cloud-devops/gitlab/",
            "da": "https://chorn.in.th/da/technical-expertise/cloud-devops/gitlab/",
            "fi": "https://chorn.in.th/fi/technical-expertise/cloud-devops/gitlab/",
            "ko": "https://chorn.in.th/ko/technical-expertise/cloud-devops/gitlab/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.devops.gitlab.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.devops.gitlab.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/cloud-devops/gitlab/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.devops.gitlab.url,
        ],
    },
}