import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkContact: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/contact-chorn/",
        languages: {
            "en": "https://chorn.in.th/en/contact-chorn/",
            "th": "https://chorn.in.th/th/contact-chorn/",
            "fr": "https://chorn.in.th/fr/contact-chorn/",
            "ja": "https://chorn.in.th/ja/contact-chorn/",
            "vi": "https://chorn.in.th/vi/contact-chorn/",
            "zh": "https://chorn.in.th/zh/contact-chorn/",
            "de": "https://chorn.in.th/de/contact-chorn/",
            "nl": "https://chorn.in.th/nl/contact-chorn/",
            "da": "https://chorn.in.th/da/contact-chorn/",
            "fi": "https://chorn.in.th/fi/contact-chorn/",
            "ko": "https://chorn.in.th/ko/contact-chorn/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.contact.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.contact.alt,
            }
        ],
        url: "https://chorn.in.th/en/contact-chorn/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.contact.url,
        ],
    },
}