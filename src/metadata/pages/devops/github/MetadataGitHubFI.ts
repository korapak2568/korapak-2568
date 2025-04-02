import {Metadata} from "next";
import {MetadataLinkGitHub} from "@/metadata/pages/devops/github/common/MetadataLinkGitHub";

export const MetadataGitHubFI: Metadata = {
    title: "GitHub DevOps -palvelut | CHORN",
    description: "DevOps-tekniikan asiantuntemus, joka integroi GitHubin versionhallintaan, jatkuvaan integraatioon ja automatisoituihin työprosesseihin.",
    alternates: MetadataLinkGitHub.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitHub DevOps -palvelut | CHORN",
        description: "Paranna kehitystyöprosessiasi GitHub-pohjaisella DevOps-asiantuntemuksella CI/CD:lle ja versionhallintaan.",
        images: MetadataLinkGitHub.openGraph.images,
        url: MetadataLinkGitHub.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps -palvelut | CHORN",
        description: "Virtaviivaista kehitystyötäsi GitHubin DevOps-asiantuntemuksella versionhallintaan ja CI/CD-työprosesseihin.",
        images: MetadataLinkGitHub.twitter.images,
    },
    keywords: [
        "GitHub DevOps", "GitHub tekninen asiantuntemus", "versionhallinta", "CI/CD", "DevOps", "räätälöity ohjelmistokehitys",
        "jatkuva integraatio", "DevOps Suomi", "GitHub automaatio", "ohjelmistokehitystyöprosessi"
    ]
};
