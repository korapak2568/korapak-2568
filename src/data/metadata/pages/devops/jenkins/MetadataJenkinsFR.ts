import {Metadata} from "next";
import {MetadataLinkJenkins} from "@/data/metadata/pages/devops/jenkins/common/MetadataLinkJenkins";

export const MetadataJenkinsFR: Metadata = {
    title: "Services DevOps Jenkins | CHORN",
    description: "Expertise technique DevOps basée sur Jenkins pour automatiser les compilations, les tests et le déploiement dans votre pipeline de développement.",
    alternates: MetadataLinkJenkins.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Services DevOps Jenkins | CHORN",
        description: "Automatisez votre processus de développement avec l'expertise technique DevOps basée sur Jenkins pour l'intégration continue et le déploiement.",
        images: MetadataLinkJenkins.openGraph.images,
        url: MetadataLinkJenkins.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services DevOps Jenkins | CHORN",
        description: "Améliorez votre cycle de développement logiciel avec l'expertise technique DevOps basée sur Jenkins de CHORN pour l'automatisation CI/CD.",
        images: MetadataLinkJenkins.twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Expertise technique Jenkins", "Automatisation CI/CD", "DevOps", "Intégration continue", "DevOps France",
        "Pipeline Jenkins", "Tests automatisés", "Automatisation des builds", "Développement de logiciels sur mesure"
    ]
};
