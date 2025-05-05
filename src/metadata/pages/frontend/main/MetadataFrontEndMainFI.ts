import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataFrontEndMainFI: Metadata = {
    title: "Frontend-kehityspalvelut | CHORN",
    description: "CHORN tarjoaa asiantuntevaa frontend-kehitystä moderneilla kehyksillä, kuten Next.js, React, Angular, Vue, HTML5 ja CSS3. Luo responsiivisia ja skaalautuvia verkkosivustoja uusimmilla teknologioilla.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.frontend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Frontend-kehityspalvelut | CHORN",
        description: "CHORN tarjoaa frontend-kehitystä käyttäen moderneja teknologioita, kuten Next.js, React, Angular, Vue, HTML5 ja CSS3, rakentaakseen nopeita, responsiivisia ja skaalautuvia verkkosivustoja.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.main).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.frontend.main).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Frontend-kehityspalvelut | CHORN",
        description: "CHORN tarjoaa asiantuntevaa frontend-kehitystä Next.js, React, Angular, Vue, HTML5 ja CSS3 avulla responsiivisille ja skaalautuville verkkosivustoille.",
        images: metadataLink(LanguageCode.fi, MetaLinks.frontend.main).twitter.images,
    },
    keywords: [
        "frontend-kehitys", "frontend-asiantuntemus", "frontend-kehittäjä", "räätälöity frontend-kehitys",
        "dynaamiset käyttöliittymät", "single-page-sovellukset", "responsiivinen verkkosuunnittelu",
        "suorituskykyiset frontend-sovellukset", "räätälöity ohjelmistokehitys",
        "React-kehitys", "Angular-kehitys", "Vue.js-kehitys", "Next.js frontend-kehitys",
        "CHORN", "digitaalinen innovaatio", "yritysohjelmistot", "skaalautuvat verkkosovellukset"
    ]
}