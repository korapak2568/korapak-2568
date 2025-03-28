import {Metadata} from "next";
import {MetadataLinkJavaScript} from "@/data/metadata/pages/frontend/javascript/common/MetadataLinkJavaScript";

export const MetadataJavaScriptFI: Metadata = {
    title: "JavaScript | CHORN - Räätälöityjen ohjelmistoratkaisujen asiantuntijat",
    description: "Hyödyntää JavaScriptiä luodakseen skaalautuvia, kestäviä ja tehokkaita räätälöityjä ohjelmistoratkaisuja yrityksille eri toimialoilla.",
    alternates: MetadataLinkJavaScript.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - JavaScript räätälöity ohjelmistokehitys",
        description: "JavaScript-asiantuntemus, tehokas työkalu skaalautuvien ja suorituskykyisten sovellusten rakentamiseen. Opi, miksi valitsemme JavaScriptin räätälöityihin ohjelmistoratkaisuihin.",
        images: MetadataLinkJavaScript.openGraph.images,
        url: MetadataLinkJavaScript.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - JavaScript kehitys räätälöityihin ohjelmistoratkaisuihin",
        description: "Hyödynnä JavaScriptiä toimittaaksesi skaalautuvia ja korkealaatuisia ohjelmistoratkaisuja, jotka on räätälöity yritysten tarpeiden mukaan.",
        images: MetadataLinkJavaScript.twitter.images,
    },
    keywords: [
        "JavaScript-kehitys", "JavaScript-asiantuntemus", "JavaScript-kehittäjä", "räätälöity JavaScript-kehitys",
        "JavaScript-verkkosovellukset", "JavaScript full stack kehitys", "JavaScript frontend kehitys",
        "räätälöity ohjelmistokehitys",
        "skaalautuvat verkkosovellukset", "frontend-kehitys", "backend-kehitys",
        "suorituskykyiset sovellukset", "yritysohjelmistoratkaisut", "räätälöidyt verkkosovellukset", "API-kehitys",
        "JavaScript-kehittäjä Thaimaa", "JavaScript-kehittäjä Bangkok", "JavaScript-kehittäjä Chiang Mai",
        "frontend-kehittäjä Thaimaa", "backend-kehittäjä Thaimaa", "full stack-kehittäjä Thaimaa",
        "ohjelmistoinsinööri", "ohjelmistokehittäjä Thaimaa",
        "CHORN", "digitaalinen innovaatio", "yritysohjelmisto"
    ]
}
