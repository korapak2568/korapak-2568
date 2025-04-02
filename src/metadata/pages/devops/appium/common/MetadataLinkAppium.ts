import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkAppium: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/cloud-devops/appium/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/cloud-devops/appium/",
            "th": "https://chorn.in.th/th/technical-expertise/cloud-devops/appium/",
            "fr": "https://chorn.in.th/fr/technical-expertise/cloud-devops/appium/",
            "ja": "https://chorn.in.th/ja/technical-expertise/cloud-devops/appium/",
            "vi": "https://chorn.in.th/vi/technical-expertise/cloud-devops/appium/",
            "zh": "https://chorn.in.th/zh/technical-expertise/cloud-devops/appium/",
            "de": "https://chorn.in.th/de/technical-expertise/cloud-devops/appium/",
            "nl": "https://chorn.in.th/nl/technical-expertise/cloud-devops/appium/",
            "da": "https://chorn.in.th/da/technical-expertise/cloud-devops/appium/",
            "fi": "https://chorn.in.th/fi/technical-expertise/cloud-devops/appium/",
            "ko": "https://chorn.in.th/ko/technical-expertise/cloud-devops/appium/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.devops.appium.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.devops.appium.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/cloud-devops/appium/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.devops.appium.url,
        ],
    },
}