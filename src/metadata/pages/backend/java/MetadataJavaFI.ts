import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaFI: Metadata = {
    title: "Java Spring Boot Full Stack Kehitys | CHORN",
    description: "Java Spring Boot full stack kehitys, tekninen asiantuntemus luoda vahvoja ja skaalautuvia yrityssovelluksia.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.backend.java).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Java Spring Boot Kehitys | CHORN",
        description: "Hyödynnä Java Spring Boot full stack kehitys ja tekninen asiantuntemus rakentaaksesi skaalautuvia, turvallisia ja suorituskykyisiä sovelluksia.",
        images: metadataLink(LanguageCode.fi, MetaLinks.backend.java).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.backend.java).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Java Spring Boot Full Stack Kehitys | CHORN",
        description: "Asiantunteva Java Spring Boot full stack kehitys turvallisten ja skaalautuvien sovellusten luomiseksi.",
        images: metadataLink(LanguageCode.fi, MetaLinks.backend.java).twitter.images,
    },
    keywords: [
        "Spring Boot kehitys", "Java Spring Boot tekninen asiantuntemus", "Spring Boot kehittäjä", "Räätälöity Java kehitys",
        "Java Spring Boot sovellukset", "Yritys Java kehitys", "Spring Boot mikropalvelut",
        "Räätälöity ohjelmistokehitys", "Skaalautuvat web-sovellukset", "Backend kehitys", "Yritysohjelmistoratkaisut",
        "Korkean suorituskyvyn sovellukset", "Java web-sovellukset", "Mikropalveluiden kehitys", "API kehitys",
        "Spring Boot kehittäjä Thaimaa", "Java kehittäjä Thaimaa", "Java kehittäjä Bangkok",
        "Java kehittäjä Chiang Mai", "Backend kehittäjä Thaimaa", "Ohjelmistoinsinööri", "Ohjelmistokehittäjä Thaimaa",
        "CHORN", "Digitaalinen innovaatio", "Yritysohjelmisto"
    ]
}
