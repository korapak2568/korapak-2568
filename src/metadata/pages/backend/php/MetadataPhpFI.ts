import {Metadata} from "next";
import {MetadataLinkPhp} from "@/metadata/pages/backend/php/common/MetadataLinkPhp";

export const MetadataPhpFI: Metadata = {
    title: "PHP Full Stack Kehitys | CHORN",
    description: "PHP full stack kehitys, tekninen asiantuntemus dynaamisten ja skaalautuvien verkkosovellusten rakentamiseen.",
    alternates: MetadataLinkPhp.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "PHP Kehitys | CHORN",
        description: "Hyödynnä PHP full stack kehitystä, teknistä asiantuntemusta skaalautuvien ja dynaamisten verkkosovellusten rakentamiseen.",
        images: MetadataLinkPhp.openGraph.images,
        url: MetadataLinkPhp.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "PHP Full Stack Kehitys | CHORN",
        description: "PHP full stack kehityksen asiantuntemus dynaamisten ja skaalautuvien verkkosovellusten luomiseen.",
        images: MetadataLinkPhp.twitter.images,
    },
    keywords: [
        "PHP kehitys", "PHP tekninen asiantuntemus", "PHP kehittäjä", "räätälöity PHP kehitys", "PHP verkkosovellukset",
        "PHP full stack kehitys", "PHP sovellukset yrityksille", "räätälöity ohjelmistokehitys",
        "Symfony kehitys", "Laravel kehitys", "Yii Framework kehitys", "Phalcon kehitys",
        "räätälöity Symfony kehitys", "räätälöity Laravel kehitys", "räätälöity Yii kehitys", "räätälöity Phalcon kehitys",
        "skaalautuvat verkkosovellukset", "backend kehitys", "korkean suorituskyvyn verkkosovellukset",
        "räätälöidyt verkkosovellukset", "API kehitys", "yritysohjelmistot", "PHP kehykset",
        "PHP kehittäjä Thaimaa", "PHP kehittäjä Bangkok", "PHP kehittäjä Chiang Mai",
        "Backend kehittäjä Thaimaa", "Full Stack kehittäjä Thaimaa", "Ohjelmistoinsinööri", "Ohjelmistokehittäjä Thaimaa",
        "CHORN", "digitaalinen innovaatio", "yritysohjelmistot"
    ]
}
