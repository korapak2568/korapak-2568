import {Metadata} from "next";
import {MetadataLinkPhp} from "@/metadata/pages/backend/php/common/MetadataLinkPhp";

export const MetadataPythonFI: Metadata = {
    title: "Python Full Stack Kehitys | CHORN",
    description: "Python full stack kehitys, tekninen asiantuntemus dynaamisten ja skaalautuvien verkkosovellusten rakentamiseen.",
    alternates: MetadataLinkPhp.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Python Kehitys | CHORN",
        description: "Rakenna dynaamisia ja skaalautuvia verkkosovelluksia Python full stack kehityksen teknisellä asiantuntemuksella.",
        images: MetadataLinkPhp.openGraph.images,
        url: MetadataLinkPhp.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Python Full Stack Kehitys | CHORN",
        description: "Python full stack kehityksen asiantuntemus dynaamisiin ja skaalautuviin verkkosovelluksiin.",
        images: MetadataLinkPhp.twitter.images,
    },
    keywords: [
        "Python kehitys", "Python tekninen asiantuntemus", "Python kehittäjä", "räätälöity Python kehitys", "Python verkkosovellukset",
        "Python backend kehitys", "Python full stack kehitys", "räätälöity ohjelmistokehitys",
        "Skaalautuvat verkkosovellukset", "Backend kehitys", "Enterprise Python sovellukset",
        "Suorituskykyiset sovellukset", "Räätälöidyt verkkosovellukset", "API kehitys", "Koneoppimisen kehitys",
        "Python kehittäjä Thaimaa", "Python kehittäjä Bangkok", "Python kehittäjä Chiang Mai",
        "Backend kehittäjä Thaimaa", "Ohjelmistoinsinööri", "Ohjelmistokehittäjä Thaimaa",
        "CHORN", "Digitaalinen innovaatio", "Enterprise ohjelmisto"
    ]
}
