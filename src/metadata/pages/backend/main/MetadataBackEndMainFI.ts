import {Metadata} from "next";
import {MetadataLinkBackEndMain} from "@/metadata/pages/backend/main/common/MetadataLinkBackEndMain";

export const MetadataBackEndMainFI: Metadata = {
    title: "Back-End API-kehitys | CHORN",
    description: "Back-End API-kehityspalvelut teknisellä asiantuntemuksella, hyödyntäen moderneja teknologioita kuten Node.js, Java Spring Boot, .NET Core, Go, Python ja PHP rakentaakseen korkealaatuisia ja skaalautuvia sovelluksia liiketoiminnan tarpeisiin.",
    alternates: MetadataLinkBackEndMain.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Back-End API-kehitys | CHORN",
        description: "Back-End API-kehitys teknisellä asiantuntemuksella hyödyntäen Node.js, Java Spring Boot, .NET Core, Go, Python ja PHP skaalautuvien sovellusten rakentamiseen.",
        images: MetadataLinkBackEndMain.openGraph.images,
        url: MetadataLinkBackEndMain.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Back-End API-kehitys | CHORN",
        description: "Rakenna skaalautuvia verkkosovelluksia Node.js:n, Java Spring Bootin, .NET Coren, Gon, Pythonin ja PHP:n avulla.",
        images: MetadataLinkBackEndMain.twitter.images,
    },
}