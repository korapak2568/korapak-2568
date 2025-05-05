import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDevOpsMainFI: Metadata = {
    title: "Enterprise DevOps & Cloud Ratkaisut | CHORN",
    description: "Vauhdita digitaalista transformaatiotasi DevOps- ja pilviteknologiaosaamisella. Toimitamme virtaviivaisia CI/CD-putkia, infrastruktuuri-automaatioita ja pilviperustaisia ratkaisuja, jotka parantavat luotettavuutta ja lyhentävät markkinoille pääsyn aikaa.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.devops.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Enterprise DevOps & Cloud Ratkaisut | CHORN",
        description: "Vauhdita digitaalista transformaatiotasi DevOps- ja pilviteknologiaosaamisella. Toimitamme virtaviivaisia CI/CD-putkia, infrastruktuuri-automaatioita ja pilviperustaisia ratkaisuja, jotka parantavat luotettavuutta ja lyhentävät markkinoille pääsyn aikaa.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.main).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.devops.main).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise DevOps & Cloud Ratkaisut | CHORN",
        description: "Vauhdita digitaalista transformaatiotasi DevOps- ja pilviteknologiaosaamisella. Toimitamme virtaviivaisia CI/CD-putkia, infrastruktuuri-automaatioita ja pilviperustaisia ratkaisuja, jotka parantavat luotettavuutta ja lyhentävät markkinoille pääsyn aikaa.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.main).twitter.images,
    },
    keywords: [
        "Cloud DevOps", "DevOps-osaaminen", "ohjelmistotestaus", "jatkuva integraatio", "CI/CD-putki", "automaattitestaukset",
        "pilvipohjaiset ratkaisut", "räätälöity ohjelmistokehitys", "DevOps-konsultointi", "ohjelmistojen laadunvarmistus",
        "suorituskyvyn testaus", "kuormitustestaus", "turvallisuustestaus", "testiautomaatio", "DevOps Thaimaa",
        "DevOps-insinööri", "testausosaaminen Thaimaa", "IT-infrastruktuurihallinta", "ohjelmistokehityksen elinkaari",
        "ohjelmistokehittäjä Thaimaa", "DevOps-työkalut", "skaalautuvat sovellukset", "ohjelmistotestausratkaisut",
        "Full Stack -kehittäjä", "pilvi-infrastruktuuri"
    ],
}
