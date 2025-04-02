import {Metadata} from "next";
import {MetadataLinkPhp} from "@/metadata/pages/backend/php/common/MetadataLinkPhp";

export const MetadataPhpEN: Metadata = {
    title: "PHP Full Stack Development | CHORN",
    description: "PHP full stack development, technical expertise for building dynamic and scalable web applications.",
    alternates: MetadataLinkPhp.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "PHP Development | CHORN",
        description: "Leverage PHP full stack development, technical-expertise to build scalable and dynamic web applications.",
        images: MetadataLinkPhp.openGraph.images,
        url: MetadataLinkPhp.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "PHP Full Stack Development | CHORN",
        description: "Expert PHP full stack development for dynamic and scalable web applications.",
        images: MetadataLinkPhp.twitter.images,
    },
    keywords: [
        // Core PHP & service Keywords
        "PHP development", "PHP technical-expertise", "PHP developer", "custom PHP development", "PHP web applications",
        "PHP full stack development", "enterprise PHP applications", "custom software development",

        // PHP Frameworks
        "Symfony development", "Laravel development", "Yii Framework development", "Phalcon development",
        "custom Symfony development", "custom Laravel development", "custom Yii development", "custom Phalcon development",

        // Web & Application Development Keywords
        "scalable web applications", "backend development", "high-performance web applications",
        "custom web applications", "API development", "enterprise software", "PHP frameworks",

        // Developer & Location-Specific Keywords
        "PHP developer Thailand", "PHP developer Bangkok", "PHP developer Chiang Mai",
        "backend developer Thailand", "full stack developer Thailand", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]
}