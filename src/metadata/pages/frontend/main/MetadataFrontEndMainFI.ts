import {Metadata} from "next";
import {MetadataLinkFrontEndMain} from "@/metadata/pages/frontend/main/common/MetadataLinkFrontEndMain";

export const MetadataFrontEndMainFI: Metadata = {
    title: "Frontend-kehityspalvelut | CHORN",
    description: "CHORN tarjoaa asiantuntevaa frontend-kehitystä moderneilla kehyksillä, kuten Next.js, React, Angular, Vue, HTML5 ja CSS3. Luo responsiivisia ja skaalautuvia verkkosivustoja uusimmilla teknologioilla.",
    alternates: MetadataLinkFrontEndMain.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Frontend-kehityspalvelut | CHORN",
        description: "CHORN tarjoaa frontend-kehitystä käyttäen moderneja teknologioita, kuten Next.js, React, Angular, Vue, HTML5 ja CSS3, rakentaakseen nopeita, responsiivisia ja skaalautuvia verkkosivustoja.",
        images: MetadataLinkFrontEndMain.openGraph.images,
        url: MetadataLinkFrontEndMain.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Frontend-kehityspalvelut | CHORN",
        description: "CHORN tarjoaa asiantuntevaa frontend-kehitystä Next.js, React, Angular, Vue, HTML5 ja CSS3 avulla responsiivisille ja skaalautuville verkkosivustoille.",
        images: MetadataLinkFrontEndMain.twitter.images,
    },
    keywords: [
        "frontend-kehitys", "frontend-asiantuntemus", "frontend-kehittäjä", "räätälöity frontend-kehitys",
        "dynaamiset käyttöliittymät", "single-page-sovellukset", "responsiivinen verkkosuunnittelu",
        "suorituskykyiset frontend-sovellukset", "räätälöity ohjelmistokehitys",
        "React-kehitys", "Angular-kehitys", "Vue.js-kehitys", "Next.js frontend-kehitys",
        "CHORN", "digitaalinen innovaatio", "yritysohjelmistot", "skaalautuvat verkkosovellukset"
    ]
}