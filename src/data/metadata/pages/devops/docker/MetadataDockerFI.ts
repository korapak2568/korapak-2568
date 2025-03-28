import {Metadata} from "next";
import {MetadataLinkDocker} from "@/data/metadata/pages/devops/docker/common/MetadataLinkDocker";

export const MetadataDockerFI: Metadata = {
    title: "Docker DevOps -palvelut | CHORN",
    description: "Docker-pohjainen DevOps-asiantuntemus tehokkaaseen konttien hallintaan ja skaalautuvaan sovellusten käyttöönottoon.",
    alternates: MetadataLinkDocker.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Docker DevOps -palvelut | CHORN",
        description: "Hyödynnä Dockeria konttien hallintaan ja skaalautuvaan ohjelmistojen käyttöönottoon DevOps-asiantuntemuksella.",
        images: MetadataLinkDocker.openGraph.images,
        url: MetadataLinkDocker.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps -palvelut | CHORN",
        description: "Docker DevOps -asiantuntemus konttien hallintaan ja skaalautuvaan sovellusten käyttöönottoon.",
        images: MetadataLinkDocker.twitter.images,
    },
    keywords: [
        "Docker DevOps", "Docker-asiantuntemus", "konttien hallinta", "CHORN", "DevOps", "skaalautuva käyttöönotto",
        "räätälöity ohjelmistokehitys", "pilvipohjaiset sovellukset", "DevOps Suomi", "Docker-kontit"
    ]
};
