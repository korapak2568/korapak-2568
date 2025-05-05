import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHtml5FI: Metadata = {
    title: "HTML5 Kehityspalvelut | CHORN",
    description: "HTML5-kehitystekninen asiantuntemus responsiivisten ja vuorovaikutteisten web-sovellusten luomiseen.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.frontend.html5).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "HTML5 Kehitys | CHORN",
        description: "Rakenna moderneja ja vuorovaikutteisia web-sovelluksia teknisellä asiantuntemuksella.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.html5).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.frontend.html5).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "HTML5 Kehityspalvelut | CHORN",
        description: "Luo vuorovaikutteisia web-sovelluksia HTML5-asiantuntemuksella.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.html5).twitter.images,
    },
    keywords: [
        "HTML5 kehitys", "HTML5 tekninen asiantuntemus", "HTML5 kehittäjä", "räätälöity HTML5 kehitys", "HTML5 responsiivinen suunnittelu",
        "HTML5 web-sovellukset", "HTML5 mobiilikehitys", "räätälöidyt web-sovellukset", "HTML5 monialustasovellukset",
        "räätälöity ohjelmistokehitys",
        "yksisivuiset sovellukset", "frontend-kehitys", "web-kehittäjä", "skaalautuvat web-sovellukset",
        "korkean suorituskyvyn web-suunnittelu", "responsiivinen web-suunnittelu", "dynaamiset käyttöliittymät",
        "HTML5 kehittäjä Thaimaa", "HTML5 kehittäjä Bangkok", "HTML5 kehittäjä Chiang Mai", "frontend-kehittäjä Thaimaa",
        "web-kehittäjä Bangkok", "ohjelmistoinsinööri", "ohjelmistokehittäjä Thaimaa",
        "CHORN", "digitaalinen innovaatio", "yritysohjelmisto"
    ]
}
