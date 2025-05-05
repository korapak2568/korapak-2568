import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAppiumFR: Metadata = {
    title: "Services de test Appium | CHORN",
    description: "Expertise en test Appium pour l'automatisation des tests d'applications mobiles sur plusieurs plateformes afin de garantir des performances de haute qualité.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.devops.appium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Tests Appium | CHORN",
        description: "Automatisez vos tests d’applications mobiles avec l'expertise Appium pour des tests multiplateformes complets.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.appium).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.devops.appium).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services de test Appium | CHORN",
        description: "Assurez la performance impeccable de vos applications mobiles avec l'expertise en test Appium pour des tests automatisés et complets sur plusieurs plateformes.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.appium).twitter.images,
    },
    keywords: [
        "Tests Appium", "Tests d’applications mobiles", "CHORN", "Cloud DevOps",
        "Tests multiplateformes", "Automatisation des tests", "Assurance qualité",
        "Expertise en tests mobiles", "Tests logiciels", "Performance des applications",
        "Expertise en test en France", "Expertise Appium", "Tests d’applications mobiles"
    ]
};
