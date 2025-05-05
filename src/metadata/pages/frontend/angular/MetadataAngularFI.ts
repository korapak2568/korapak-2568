import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAngularFI: Metadata = {
    title: "Angular Kehityspalvelut | CHORN",
    description: "Angular-kehityspalvelu, rakenna dynaamisia, skaalautuvia ja suorituskykyisiä verkkosovelluksia Angularilla.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.frontend.angular).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Angular Kehitys | CHORN",
        description: "Angular-kehitys teknisellä asiantuntemuksella nopeiden, skaalautuvien ja dynaamisten verkkosovellusten luomiseen.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.angular).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.frontend.angular).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Angular Kehityspalvelut | CHORN",
        description: "Paranna verkkosovelluksiasi asiantuntevalla Angular-kehityksellä.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.angular).twitter.images,
    },
    keywords: [
        "Angular kehitys", "Angular tekninen asiantuntemus", "Angular kehittäjä", "Angular kehitys Thaimaa",
        "Angular kehitys Bangkok", "Angular kehitys Chiang Mai", "Angular kehitysyhtiö",
        "räätälöity Angular kehitys", "räätälöity ohjelmistokehitys", "yrityksen Angular sovellukset",
        "frontend kehitys", "single-page sovellukset", "dynaamiset käyttöliittymät",
        "suorituskykyiset sovellukset", "skaalautuvat verkkosovellukset", "räätälöidyt verkkosovellukset",
        "web-kehittäjä", "full-stack kehittäjä", "ohjelmistoinsinööri", "ohjelmistokehittäjä Thaimaa",
        "Angular kehittäjä Thaimaa", "frontend kehittäjä Thaimaa", "web-kehittäjä Bangkok",
        "Angular kehittäjä Chiang Mai", "Angular kehittäjä Bangkok", "Angular kehitysyhtiö",
        "CHORN", "digitaalinen innovaatio", "yritysohjelmistot",
        "responsiivinen verkkosuunnittelu Angularilla", "responsiivinen verkkosuunnittelu Angular", "Angular responsiivinen suunnittelu"
    ]
}