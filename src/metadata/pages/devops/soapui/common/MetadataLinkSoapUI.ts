import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkSoapUI: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/cloud-devops/soapui/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/cloud-devops/soapui/",
            "th": "https://chorn.in.th/th/technical-expertise/cloud-devops/soapui/",
            "fr": "https://chorn.in.th/fr/technical-expertise/cloud-devops/soapui/",
            "ja": "https://chorn.in.th/ja/technical-expertise/cloud-devops/soapui/",
            "vi": "https://chorn.in.th/vi/technical-expertise/cloud-devops/soapui/",
            "zh": "https://chorn.in.th/zh/technical-expertise/cloud-devops/soapui/",
            "de": "https://chorn.in.th/de/technical-expertise/cloud-devops/soapui/",
            "nl": "https://chorn.in.th/nl/technical-expertise/cloud-devops/soapui/",
            "da": "https://chorn.in.th/da/technical-expertise/cloud-devops/soapui/",
            "fi": "https://chorn.in.th/fi/technical-expertise/cloud-devops/soapui/",
            "ko": "https://chorn.in.th/ko/technical-expertise/cloud-devops/soapui/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.devops.soapui.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.devops.soapui.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/cloud-devops/soapui/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.devops.soapui.url,
        ],
    },
}