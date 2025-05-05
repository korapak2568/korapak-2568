import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPhpNL: Metadata = {
    title: "PHP Full Stack Ontwikkeling | CHORN",
    description: "PHP full stack ontwikkeling, technische expertise voor het bouwen van dynamische en schaalbare webapplicaties.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.backend.php).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "PHP Ontwikkeling | CHORN",
        description: "Benut PHP full stack ontwikkeling, technische expertise om schaalbare en dynamische webapplicaties te bouwen.",
        images: metadataLink(LanguageCode.nl, MetaLinks.backend.php).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.backend.php).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "PHP Full Stack Ontwikkeling | CHORN",
        description: "Expertise in PHP full stack ontwikkeling voor dynamische en schaalbare webapplicaties.",
        images: metadataLink(LanguageCode.nl, MetaLinks.backend.php).twitter.images,
    },
    keywords: [
        "PHP ontwikkeling", "PHP technische expertise", "PHP ontwikkelaar", "maatwerk PHP ontwikkeling", "PHP webapplicaties",
        "PHP full stack ontwikkeling", "PHP applicaties voor bedrijven", "maatwerk softwareontwikkeling",
        "Symfony ontwikkeling", "Laravel ontwikkeling", "Yii Framework ontwikkeling", "Phalcon ontwikkeling",
        "maatwerk Symfony ontwikkeling", "maatwerk Laravel ontwikkeling", "maatwerk Yii ontwikkeling", "maatwerk Phalcon ontwikkeling",
        "schaalbare webapplicaties", "backend ontwikkeling", "hoogpresterende webapplicaties",
        "maatwerk webapplicaties", "API ontwikkeling", "bedrijfssoftware", "PHP frameworks",
        "PHP ontwikkelaar Thailand", "PHP ontwikkelaar Bangkok", "PHP ontwikkelaar Chiang Mai",
        "Backend ontwikkelaar Thailand", "Full Stack ontwikkelaar Thailand", "Software engineer", "Software ontwikkelaar Thailand",
        "CHORN", "digitale innovatie", "bedrijfssoftware"
    ]
}
