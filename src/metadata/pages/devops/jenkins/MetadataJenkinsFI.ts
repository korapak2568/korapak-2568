import {Metadata} from "next";
import {MetadataLinkJenkins} from "@/metadata/pages/devops/jenkins/common/MetadataLinkJenkins";

export const MetadataJenkinsFI: Metadata = {
    title: "Jenkins DevOps Palvelut | CHORN",
    description: "Jenkins-pohjainen DevOps-asiantuntemus rakennusten, testien ja käyttöönoton automatisointiin kehitysputkessasi.",
    alternates: MetadataLinkJenkins.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Jenkins DevOps Palvelut | CHORN",
        description: "Automatisoi kehitysprosessisi Jenkins-pohjaisen DevOps-asiantuntemuksen avulla jatkuvaa integraatiota ja käyttöönottoa varten.",
        images: MetadataLinkJenkins.openGraph.images,
        url: MetadataLinkJenkins.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps Palvelut | CHORN",
        description: "Paranna ohjelmistokehityssykliäsi Jenkins-pohjaisella DevOps-asiantuntemuksella CHORNilta CI/CD-automatisointiin.",
        images: MetadataLinkJenkins.twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Jenkins asiantuntemus", "CI/CD automatisointi", "DevOps", "jatkuva integraatio", "DevOps Suomi",
        "Jenkins pipeline", "automaattiset testit", "build-automatisointi", "räätälöity ohjelmistokehitys"
    ]
};
