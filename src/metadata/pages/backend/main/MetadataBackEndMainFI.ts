import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataBackEndMainFI: Metadata = {
    title: "Back-End API-kehitys | CHORN",
    description: "Back-End API-kehityspalvelut teknisellä asiantuntemuksella, hyödyntäen moderneja teknologioita kuten Node.js, Java Spring Boot, .NET Core, Go, Python ja PHP rakentaakseen korkealaatuisia ja skaalautuvia sovelluksia liiketoiminnan tarpeisiin.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.backend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Back-End API-kehitys | CHORN",
        description: "Back-End API-kehitys teknisellä asiantuntemuksella hyödyntäen Node.js, Java Spring Boot, .NET Core, Go, Python ja PHP skaalautuvien sovellusten rakentamiseen.",
        images: metadataLink(LanguageCode.fi, MetaLinks.backend.main).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.backend.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Back-End API-kehitys | CHORN",
        description: "Rakenna skaalautuvia verkkosovelluksia Node.js:n, Java Spring Bootin, .NET Coren, Gon, Pythonin ja PHP:n avulla.",
        images: metadataLink(LanguageCode.fi, MetaLinks.backend.main).twitter.images,
    },
}