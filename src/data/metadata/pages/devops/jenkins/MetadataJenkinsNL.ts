import {Metadata} from "next";
import {MetadataLinkJenkins} from "@/data/metadata/pages/devops/jenkins/common/MetadataLinkJenkins";

export const MetadataJenkinsNL: Metadata = {
    title: "Jenkins DevOps Diensten | CHORN",
    description: "DevOps technische expertise gebaseerd op Jenkins voor het automatiseren van builds, tests en implementaties in uw ontwikkel-pijplijn.",
    alternates: MetadataLinkJenkins.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Jenkins DevOps Diensten | CHORN",
        description: "Automatiseer uw ontwikkelingsproces met Jenkins-gebaseerde DevOps technische expertise voor continue integratie en implementatie.",
        images: MetadataLinkJenkins.openGraph.images,
        url: MetadataLinkJenkins.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps Diensten | CHORN",
        description: "Verbeter uw softwareontwikkelingscyclus met Jenkins-gebaseerde DevOps technische expertise van CHORN voor CI/CD-automatisering.",
        images: MetadataLinkJenkins.twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Jenkins technische expertise", "CI/CD automatisering", "DevOps", "continue integratie", "DevOps Nederland",
        "Jenkins pipeline", "geautomatiseerde tests", "build automatisering", "maatwerksoftwareontwikkeling"
    ]
};
