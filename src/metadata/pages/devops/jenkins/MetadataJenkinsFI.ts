import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJenkinsFI: Metadata = {
    title: "Jenkins DevOps Palvelut | CHORN",
    description: "Jenkins-pohjainen DevOps-asiantuntemus rakennusten, testien ja käyttöönoton automatisointiin kehitysputkessasi.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.devops.jenkins).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Jenkins DevOps Palvelut | CHORN",
        description: "Automatisoi kehitysprosessisi Jenkins-pohjaisen DevOps-asiantuntemuksen avulla jatkuvaa integraatiota ja käyttöönottoa varten.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.jenkins).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.devops.jenkins).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps Palvelut | CHORN",
        description: "Paranna ohjelmistokehityssykliäsi Jenkins-pohjaisella DevOps-asiantuntemuksella CHORNilta CI/CD-automatisointiin.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.jenkins).twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Jenkins asiantuntemus", "CI/CD automatisointi", "DevOps", "jatkuva integraatio", "DevOps Suomi",
        "Jenkins pipeline", "automaattiset testit", "build-automatisointi", "räätälöity ohjelmistokehitys"
    ]
};
