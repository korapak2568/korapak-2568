import {Metadata} from "next";
import {MetadataLinkBackEndMain} from "@/metadata/pages/backend/main/common/MetadataLinkBackEndMain";

export const MetadataBackEndMainNL: Metadata = {
    title: "Back-End API-ontwikkeling | CHORN",
    description: "Back-End API-ontwikkelingsdiensten met technische expertise, gebruikmakend van moderne technologieën zoals Node.js, Java Spring Boot, .NET Core, Go, Python en PHP om hoogwaardige en schaalbare applicaties te bouwen die aansluiten bij zakelijke behoeften.",
    alternates: MetadataLinkBackEndMain.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Back-End API-ontwikkeling | CHORN",
        description: "Back-End API-ontwikkeling met technische expertise, gebruikmakend van Node.js, Java Spring Boot, .NET Core, Go, Python en PHP om hoogwaardige en schaalbare applicaties te bouwen.",
        images: MetadataLinkBackEndMain.openGraph.images,
        url: MetadataLinkBackEndMain.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Back-End API-ontwikkeling | CHORN",
        description: "Bouw schaalbare webapplicaties met Node.js, Java Spring Boot, .NET Core, Go, Python en PHP.",
        images: MetadataLinkBackEndMain.twitter.images,
    },
}