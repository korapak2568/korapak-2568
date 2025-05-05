import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCss3FI: Metadata = {
    title: "CSS3 Kehityspalvelut | CHORN",
    description: "Paranna web-sovelluksia CSS3-kehityksellä, teknistä asiantuntemusta nykyaikaisten ja visuaalisesti houkuttelevien suunnittelujen luomiseen.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.frontend.css3).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CSS3 Kehitys | CHORN",
        description: "CSS3-kehitys teknisellä asiantuntemuksella luodaksesi tyylikkäitä ja responsiivisia verkkosivustojen suunnitteluja.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.css3).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.frontend.css3).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CSS3 Kehityspalvelut | CHORN",
        description: "Luo visuaalisesti upeita verkkosivustojen suunnitteluja CSS3:n avulla tarjoamalla CSS3-kehityksen teknistä asiantuntemusta.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.css3).twitter.images,
    },
    keywords: [
        "CSS3-kehitys", "CSS3 tekninen asiantuntemus", "CSS3 kehittäjä", "räätälöity CSS3-kehitys", "responsiivinen CSS3-suunnittelu",
        "CSS3-websovellukset", "CSS3-mobiilikehitys", "räätälöidyt web-sovellukset", "cross-platform sovellukset CSS3",
        "räätälöity ohjelmistokehitys",
        "web-kehitys", "korkean suorituskyvyn verkkosuunnittelu", "dynaamiset käyttöliittymät",
        "CSS3-kehittäjä Thaimaa", "CSS3-kehittäjä Bangkok", "CSS3-kehittäjä Chiang Mai", "frontend kehittäjä Thaimaa",
        "web-kehittäjä Bangkok", "ohjelmistoinsinööri", "ohjelmistokehittäjä Thaimaa",
        "CHORN", "digitaalinen innovaatio", "yritysohjelmisto"
    ]
}
