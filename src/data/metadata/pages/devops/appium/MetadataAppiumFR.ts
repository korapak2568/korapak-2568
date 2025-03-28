import {Metadata} from "next";
import {MetadataLinkAppium} from "@/data/metadata/pages/devops/appium/common/MetadataLinkAppium";

export const MetadataAppiumFR: Metadata = {
    title: "Services de test Appium | CHORN",
    description: "Expertise en test Appium pour l'automatisation des tests d'applications mobiles sur plusieurs plateformes afin de garantir des performances de haute qualité.",
    alternates: MetadataLinkAppium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Tests Appium | CHORN",
        description: "Automatisez vos tests d’applications mobiles avec l'expertise Appium pour des tests multiplateformes complets.",
        images: MetadataLinkAppium.openGraph.images,
        url: MetadataLinkAppium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services de test Appium | CHORN",
        description: "Assurez la performance impeccable de vos applications mobiles avec l'expertise en test Appium pour des tests automatisés et complets sur plusieurs plateformes.",
        images: MetadataLinkAppium.twitter.images,
    },
    keywords: [
        "Tests Appium", "Tests d’applications mobiles", "CHORN", "Cloud DevOps",
        "Tests multiplateformes", "Automatisation des tests", "Assurance qualité",
        "Expertise en tests mobiles", "Tests logiciels", "Performance des applications",
        "Expertise en test en France", "Expertise Appium", "Tests d’applications mobiles"
    ]
};
