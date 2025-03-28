import {Metadata} from "next";
import {MetadataLinkBackEndMain} from "@/data/metadata/pages/backend/main/common/MetadataLinkBackEndMain";

export const MetadataBackEndMainDA: Metadata = {
    title: "Back-End API-udvikling | CHORN",
    description: "Back-End API-udviklingstjenester med teknisk ekspertise ved hjælp af moderne teknologier som Node.js, Java Spring Boot, .NET Core, Go, Python og PHP for at skabe højkvalitets og skalerbare applikationer til forretningsbehov.",
    alternates: MetadataLinkBackEndMain.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Back-End API-udvikling | CHORN",
        description: "Back-End API-udvikling med teknisk ekspertise ved hjælp af Node.js, Java Spring Boot, .NET Core, Go, Python og PHP for at bygge skalerbare applikationer.",
        images: MetadataLinkBackEndMain.openGraph.images,
        url: MetadataLinkBackEndMain.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Back-End API-udvikling | CHORN",
        description: "Udvikling af skalerbare webapplikationer ved hjælp af Node.js, Java Spring Boot, .NET Core, Go, Python og PHP.",
        images: MetadataLinkBackEndMain.twitter.images,
    },
}