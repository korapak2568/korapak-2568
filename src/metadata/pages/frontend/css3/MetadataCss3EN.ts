import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCss3EN: Metadata = {
    title: "CSS3 Development Services | CHORN",
    description: "Enhance your web applications with CSS3 development, technical expertise for modern and visually appealing designs.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.frontend.css3).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CSS3 Development | CHORN",
        description: "CSS3 development with technical expertise to create stylish and responsive web designs.",
        images: metadataLink(LanguageCode.en, MetaLinks.frontend.css3).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.frontend.css3).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CSS3 Development Services | CHORN",
        description: "Create visually stunning web designs with CSS3 with providing CSS3 development technical expertise.",
        images: metadataLink(LanguageCode.en, MetaLinks.frontend.css3).twitter.images,
    },
}