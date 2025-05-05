import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPythonFI: Metadata = {
    title: "Python Full Stack Kehitys | CHORN",
    description: "Python full stack kehitys, tekninen asiantuntemus dynaamisten ja skaalautuvien verkkosovellusten rakentamiseen.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.backend.python).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Python Kehitys | CHORN",
        description: "Rakenna dynaamisia ja skaalautuvia verkkosovelluksia Python full stack kehityksen teknisellä asiantuntemuksella.",
        images: metadataLink(LanguageCode.fi, MetaLinks.backend.python).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.backend.python).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Python Full Stack Kehitys | CHORN",
        description: "Python full stack kehityksen asiantuntemus dynaamisiin ja skaalautuviin verkkosovelluksiin.",
        images: metadataLink(LanguageCode.fi, MetaLinks.backend.python).twitter.images,
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
