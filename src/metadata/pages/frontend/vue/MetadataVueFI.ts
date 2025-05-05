import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataVueFI: Metadata = {
    title: "Vue.js Kehityspalvelut | CHORN",
    description: "Erikoistunut Vue.js-kehitykseen luodakseen interaktiivisia ja skaalautuvia verkkosovelluksia.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.frontend.vue).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Vue.js Kehitys | CHORN",
        description: "Vue.js-asiantuntemus, tekninen asiantuntemus nykyaikaisten verkkosovellusten luomiseen.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.vue).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.frontend.vue).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Vue.js Kehityspalvelut | CHORN",
        description: "Paranna verkkosovelluksiasi Vue.js-kehityksen asiantuntemuksella.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.vue).twitter.images,
    },
    keywords: [
        "Vue.js kehitys", "Vue.js tekninen asiantuntemus", "Vue.js kehittäjä", "räätälöity Vue.js kehitys", "Vue.js sovellukset",
        "Vue.js full stack kehitys", "Vue.js single-page sovellukset", "Vue.js käyttöliittymät", "räätälöidyt verkkosovellukset",
        "räätälöity ohjelmistokehitys",
        "skaalautuvat verkkosovellukset", "frontend kehitys", "korkean suorituskyvyn verkkosovellukset",
        "dynaamiset käyttöliittymät", "single-page sovellukset", "Vue.js kehittäjä",
        "Vue.js kehittäjä Thaimaa", "Vue.js kehittäjä Bangkok", "Vue.js kehittäjä Chiang Mai", "frontend kehittäjä Thaimaa",
        "verkkokehittäjä Bangkok", "ohjelmistoinsinööri", "ohjelmistokehittäjä Thaimaa",
        "CHORN", "digitaalinen innovaatio", "yritysohjelmisto"
    ]
}
