import {OpenGraph} from "@/data/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/data/metadata/model/IMetadataLinkPage";

export const MetadataLinkGallery: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/gallery/",
        languages: {
            "en": "https://chorn.in.th/en/gallery/",
            "th": "https://chorn.in.th/th/gallery/",
            "fr": "https://chorn.in.th/fr/gallery/",
            "ja": "https://chorn.in.th/ja/gallery/",
            "vi": "https://chorn.in.th/vi/gallery/",
            "zh": "https://chorn.in.th/zh/gallery/",
            "de": "https://chorn.in.th/de/gallery/",
            "nl": "https://chorn.in.th/nl/gallery/",
            "da": "https://chorn.in.th/da/gallery/",
            "fi": "https://chorn.in.th/fi/gallery/",
            "ko": "https://chorn.in.th/ko/gallery/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.gallery.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.gallery.alt,
            },
        ],
        url: "https://chorn.in.th/en/gallery/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.gallery.url,
        ],
    },
}