import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkPhp: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/full-stack-developer/php-developer/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/full-stack-developer/php-developer/",
            "th": "https://chorn.in.th/th/technical-expertise/full-stack-developer/php-developer/",
            "fr": "https://chorn.in.th/fr/technical-expertise/full-stack-developer/php-developer/",
            "ja": "https://chorn.in.th/ja/technical-expertise/full-stack-developer/php-developer/",
            "vi": "https://chorn.in.th/vi/technical-expertise/full-stack-developer/php-developer/",
            "zh": "https://chorn.in.th/zh/technical-expertise/full-stack-developer/php-developer/",
            "de": "https://chorn.in.th/de/technical-expertise/full-stack-developer/php-developer/",
            "nl": "https://chorn.in.th/nl/technical-expertise/full-stack-developer/php-developer/",
            "da": "https://chorn.in.th/da/technical-expertise/full-stack-developer/php-developer/",
            "fi": "https://chorn.in.th/fi/technical-expertise/full-stack-developer/php-developer/",
            "ko": "https://chorn.in.th/ko/technical-expertise/full-stack-developer/php-developer/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.backend.php.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.backend.php.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/full-stack-developer/php-developer/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.backend.php.url,
        ],
    },
}