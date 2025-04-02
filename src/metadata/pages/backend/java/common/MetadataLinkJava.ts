import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/model/IMetadataLinkPage";

export const MetadataLinkJava: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/full-stack-developer/java-spring-boot-developer/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/full-stack-developer/java-spring-boot-developer/",
            "th": "https://chorn.in.th/th/technical-expertise/full-stack-developer/java-spring-boot-developer/",
            "fr": "https://chorn.in.th/fr/technical-expertise/full-stack-developer/java-spring-boot-developer/",
            "ja": "https://chorn.in.th/ja/technical-expertise/full-stack-developer/java-spring-boot-developer/",
            "vi": "https://chorn.in.th/vi/technical-expertise/full-stack-developer/java-spring-boot-developer/",
            "zh": "https://chorn.in.th/zh/technical-expertise/full-stack-developer/java-spring-boot-developer/",
            "de": "https://chorn.in.th/de/technical-expertise/full-stack-developer/java-spring-boot-developer/",
            "nl": "https://chorn.in.th/nl/technical-expertise/full-stack-developer/java-spring-boot-developer/",
            "da": "https://chorn.in.th/da/technical-expertise/full-stack-developer/java-spring-boot-developer/",
            "fi": "https://chorn.in.th/fi/technical-expertise/full-stack-developer/java-spring-boot-developer/",
            "ko": "https://chorn.in.th/ko/technical-expertise/full-stack-developer/java-spring-boot-developer/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.backend.java.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.backend.java.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/full-stack-developer/java-spring-boot-developer/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.backend.java.url,
        ],
    },
}