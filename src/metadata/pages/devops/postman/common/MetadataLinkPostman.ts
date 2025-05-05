import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/metadataLink/model/IMetadataLinkPage";

export const MetadataLinkPostman: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/cloud-devops/postman/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/cloud-devops/postman/",
            "th": "https://chorn.in.th/th/technical-expertise/cloud-devops/postman/",
            "fr": "https://chorn.in.th/fr/technical-expertise/cloud-devops/postman/",
            "ja": "https://chorn.in.th/ja/technical-expertise/cloud-devops/postman/",
            "vi": "https://chorn.in.th/vi/technical-expertise/cloud-devops/postman/",
            "zh": "https://chorn.in.th/zh/technical-expertise/cloud-devops/postman/",
            "de": "https://chorn.in.th/de/technical-expertise/cloud-devops/postman/",
            "nl": "https://chorn.in.th/nl/technical-expertise/cloud-devops/postman/",
            "da": "https://chorn.in.th/da/technical-expertise/cloud-devops/postman/",
            "fi": "https://chorn.in.th/fi/technical-expertise/cloud-devops/postman/",
            "ko": "https://chorn.in.th/ko/technical-expertise/cloud-devops/postman/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.devops.postman.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.devops.postman.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/cloud-devops/postman/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.devops.postman.url,
        ],
    },
}