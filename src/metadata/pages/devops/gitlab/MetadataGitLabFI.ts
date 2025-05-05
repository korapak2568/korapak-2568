import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitLabFI: Metadata = {
    title: "GitLab DevOps -palvelut | CHORN",
    description: "DevOps-tekniikan asiantuntemus, joka integroi GitLabin versionhallintaan, jatkuvaan integrointiin ja automatisoituihin työnkulkuihin.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.devops.gitlab).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitLab DevOps -palvelut | CHORN",
        description: "Paranna kehitystyöskentelyäsi GitLab-pohjaisella DevOps-tekniikan asiantuntemuksella CI/CD- ja versionhallintaa varten.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.gitlab).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.devops.gitlab).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitLab DevOps -palvelut | CHORN",
        description: "Optimoi kehityksesi GitLab DevOps -asiantuntemuksella versionhallintaan ja CI/CD-työnkulkuihin.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.gitlab).twitter.images,
    },
    keywords: [
        "GitLab DevOps", "GitLab tekninen asiantuntemus", "CI/CD", "versionhallinta", "DevOps", "automatisointi", "DevOps-putki",
        "DevOps Suomi", "GitLab automatisointi", "jatkuva integraatio"
    ]
};
