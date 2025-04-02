import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkJenkins: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/cloud-devops/jenkins/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/cloud-devops/jenkins/",
            "th": "https://chorn.in.th/th/technical-expertise/cloud-devops/jenkins/",
            "fr": "https://chorn.in.th/fr/technical-expertise/cloud-devops/jenkins/",
            "ja": "https://chorn.in.th/ja/technical-expertise/cloud-devops/jenkins/",
            "vi": "https://chorn.in.th/vi/technical-expertise/cloud-devops/jenkins/",
            "zh": "https://chorn.in.th/zh/technical-expertise/cloud-devops/jenkins/",
            "de": "https://chorn.in.th/de/technical-expertise/cloud-devops/jenkins/",
            "nl": "https://chorn.in.th/nl/technical-expertise/cloud-devops/jenkins/",
            "da": "https://chorn.in.th/da/technical-expertise/cloud-devops/jenkins/",
            "fi": "https://chorn.in.th/fi/technical-expertise/cloud-devops/jenkins/",
            "ko": "https://chorn.in.th/ko/technical-expertise/cloud-devops/jenkins/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.devops.jenkins.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.devops.jenkins.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/cloud-devops/jenkins/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.devops.jenkins.url,
        ],
    },
}