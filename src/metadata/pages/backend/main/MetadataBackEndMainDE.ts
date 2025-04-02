import {Metadata} from "next";
import {MetadataLinkBackEndMain} from "@/metadata/pages/backend/main/common/MetadataLinkBackEndMain";

export const MetadataBackEndMainDE: Metadata = {
    title: "Back-End API-Entwicklung | CHORN",
    description: "Back-End API-Entwicklungsdienste mit technischer Expertise unter Verwendung moderner Technologien wie Node.js, Java Spring Boot, .NET Core, Go, Python und PHP zur Erstellung hochwertiger und skalierbarer Anwendungen für Unternehmen.",
    alternates: MetadataLinkBackEndMain.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Back-End API-Entwicklung | CHORN",
        description: "Back-End API-Entwicklung mit technischer Expertise unter Verwendung von Node.js, Java Spring Boot, .NET Core, Go, Python und PHP zur Erstellung skalierbarer Anwendungen.",
        images: MetadataLinkBackEndMain.openGraph.images,
        url: MetadataLinkBackEndMain.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Back-End API-Entwicklung | CHORN",
        description: "Erstellen Sie skalierbare Webanwendungen mit Node.js, Java Spring Boot, .NET Core, Go, Python und PHP.",
        images: MetadataLinkBackEndMain.twitter.images,
    },
}