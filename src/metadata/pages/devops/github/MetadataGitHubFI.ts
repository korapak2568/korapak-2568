import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitHubFI: Metadata = {
    title: "GitHub DevOps -palvelut | CHORN",
    description: "DevOps-tekniikan asiantuntemus, joka integroi GitHubin versionhallintaan, jatkuvaan integraatioon ja automatisoituihin työprosesseihin.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.devops.github).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "GitHub DevOps -palvelut | CHORN",
        description: "Paranna kehitystyöprosessiasi GitHub-pohjaisella DevOps-asiantuntemuksella CI/CD:lle ja versionhallintaan.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.github).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.devops.github).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps -palvelut | CHORN",
        description: "Virtaviivaista kehitystyötäsi GitHubin DevOps-asiantuntemuksella versionhallintaan ja CI/CD-työprosesseihin.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.github).twitter.images,
    },
    keywords: [
        "GitHub DevOps", "GitHub tekninen asiantuntemus", "versionhallinta", "CI/CD", "DevOps", "räätälöity ohjelmistokehitys",
        "jatkuva integraatio", "DevOps Suomi", "GitHub automaatio", "ohjelmistokehitystyöprosessi"
    ]
};
