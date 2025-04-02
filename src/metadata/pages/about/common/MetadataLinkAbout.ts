import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkAbout: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/about-chorn/",
        languages: {
            "en": "https://chorn.in.th/en/about-chorn/",
            "th": "https://chorn.in.th/th/about-chorn/",
            "fr": "https://chorn.in.th/fr/about-chorn/",
            "ja": "https://chorn.in.th/ja/about-chorn/",
            "vi": "https://chorn.in.th/vi/about-chorn/",
            "zh": "https://chorn.in.th/zh/about-chorn/",
            "de": "https://chorn.in.th/de/about-chorn/",
            "nl": "https://chorn.in.th/nl/about-chorn/",
            "da": "https://chorn.in.th/da/about-chorn/",
            "fi": "https://chorn.in.th/fi/about-chorn/",
            "ko": "https://chorn.in.th/ko/about-chorn/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.about.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.about.alt,
            }
        ],
        url: "https://chorn.in.th/en/about-chorn/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.about.url,
        ],
    },
}