import {Metadata} from "next";
import {MetadataLinkGitLab} from "@/metadata/pages/devops/gitlab/common/MetadataLinkGitLab";

export const MetadataGitLabFI: Metadata = {
    title: "GitLab DevOps -palvelut | CHORN",
    description: "DevOps-tekniikan asiantuntemus, joka integroi GitLabin versionhallintaan, jatkuvaan integrointiin ja automatisoituihin työnkulkuihin.",
    alternates: MetadataLinkGitLab.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitLab DevOps -palvelut | CHORN",
        description: "Paranna kehitystyöskentelyäsi GitLab-pohjaisella DevOps-tekniikan asiantuntemuksella CI/CD- ja versionhallintaa varten.",
        images: MetadataLinkGitLab.openGraph.images,
        url: MetadataLinkGitLab.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitLab DevOps -palvelut | CHORN",
        description: "Optimoi kehityksesi GitLab DevOps -asiantuntemuksella versionhallintaan ja CI/CD-työnkulkuihin.",
        images: MetadataLinkGitLab.twitter.images,
    },
    keywords: [
        "GitLab DevOps", "GitLab tekninen asiantuntemus", "CI/CD", "versionhallinta", "DevOps", "automatisointi", "DevOps-putki",
        "DevOps Suomi", "GitLab automatisointi", "jatkuva integraatio"
    ]
};
