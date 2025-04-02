import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkSelenium: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/cloud-devops/selenium/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/cloud-devops/selenium/",
            "th": "https://chorn.in.th/th/technical-expertise/cloud-devops/selenium/",
            "fr": "https://chorn.in.th/fr/technical-expertise/cloud-devops/selenium/",
            "ja": "https://chorn.in.th/ja/technical-expertise/cloud-devops/selenium/",
            "vi": "https://chorn.in.th/vi/technical-expertise/cloud-devops/selenium/",
            "zh": "https://chorn.in.th/zh/technical-expertise/cloud-devops/selenium/",
            "de": "https://chorn.in.th/de/technical-expertise/cloud-devops/selenium/",
            "nl": "https://chorn.in.th/nl/technical-expertise/cloud-devops/selenium/",
            "da": "https://chorn.in.th/da/technical-expertise/cloud-devops/selenium/",
            "fi": "https://chorn.in.th/fi/technical-expertise/cloud-devops/selenium/",
            "ko": "https://chorn.in.th/ko/technical-expertise/cloud-devops/selenium/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.devops.selenium.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.devops.selenium.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/cloud-devops/selenium/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.devops.selenium.url,
        ],
    },
}