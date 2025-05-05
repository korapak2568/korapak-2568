import {Metadata} from "next";
import {metadataLinkCloudSolution} from "@/metadata/metadataLink/MetadataLinkCloudSolution";
import {LanguageCode} from "@/data/translate/LanguageCode";

export const MetadataCloudSolutionFR: Metadata = {
    title: "Architecture de solutions cloud et analyse des systèmes | CHORN | AWS, Azure, GCP, DigitalOcean",
    description: "CHORN propose des services d'architecture de solutions cloud et d'analyse des systèmes avec une expertise technique avancée. Nous optimisons les infrastructures cloud sur AWS, Azure, GCP et DigitalOcean pour garantir des performances optimales, une évolutivité et une rentabilité.",
    alternates: metadataLinkCloudSolution(LanguageCode.fr).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Architecture de solutions cloud et analyse des systèmes | CHORN",
        description: "Découvrez l'expertise de CHORN en architecture de solutions cloud et analyse des systèmes. Nous concevons des solutions cloud résilientes, évolutives et optimisées sur AWS, Azure, GCP et DigitalOcean.",
        images: metadataLinkCloudSolution(LanguageCode.fr).openGraph.images,
        url: metadataLinkCloudSolution(LanguageCode.fr).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Architecture de solutions cloud et analyse des systèmes | CHORN",
        description: "Optimisez votre infrastructure cloud avec l'expertise de CHORN en architecture de solutions cloud et analyse des systèmes sur AWS, Azure, GCP et DigitalOcean.",
        images: metadataLinkCloudSolution(LanguageCode.fr).twitter.images,
    },
    keywords: [
        "architecture de solutions cloud", "analyse des systèmes", "architecture AWS", "solutions cloud Azure",
        "architecture GCP", "infrastructure DigitalOcean", "optimisation cloud", "stratégies multi-cloud",
        "scalabilité cloud", "conception d'infrastructure cloud", "analyse de sécurité cloud",
        "consulting cloud AWS", "intégration système Azure", "optimisation des coûts GCP", "solutions DigitalOcean",
        "expertise en migration cloud", "optimisation des performances cloud", "intégration multi-cloud", "applications cloud-native",
        "architecte cloud France", "architecte AWS France", "architecte Azure France", "architecte GCP France",
        "développeur DigitalOcean France", "analyste système France", "expert en infrastructure cloud France",
        "CHORN", "solutions cloud", "innovation numérique", "conception d'infrastructure cloud", "systèmes cloud évolutifs"
    ]
}