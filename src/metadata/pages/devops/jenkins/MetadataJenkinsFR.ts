import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJenkinsFR: Metadata = {
    title: "Services DevOps Jenkins | CHORN",
    description: "Expertise technique DevOps basée sur Jenkins pour automatiser les compilations, les tests et le déploiement dans votre pipeline de développement.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.devops.jenkins).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Services DevOps Jenkins | CHORN",
        description: "Automatisez votre processus de développement avec l'expertise technique DevOps basée sur Jenkins pour l'intégration continue et le déploiement.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.jenkins).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.devops.jenkins).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services DevOps Jenkins | CHORN",
        description: "Améliorez votre cycle de développement logiciel avec l'expertise technique DevOps basée sur Jenkins de CHORN pour l'automatisation CI/CD.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.jenkins).twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Expertise technique Jenkins", "Automatisation CI/CD", "DevOps", "Intégration continue", "DevOps France",
        "Pipeline Jenkins", "Tests automatisés", "Automatisation des builds", "Développement de logiciels sur mesure"
    ]
};
