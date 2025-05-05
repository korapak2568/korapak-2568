import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSeleniumFI: Metadata = {
    title: "Selenium Testauspalvelut | CHORN",
    description: "Kattavaa Selenium-testauksen teknistä asiantuntemusta, joka varmistaa sovellustesi laadun ja suorituskyvyn automaattisten testien avulla.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.devops.selenium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Selenium Testaus | CHORN",
        description: "Automatisoi sovellustestauksesi Seleniumin teknisellä asiantuntemuksella luotettavien ja tehokkaiden tulosten saamiseksi.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.selenium).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.devops.selenium).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Selenium Testauspalvelut | CHORN",
        description: "Paranna sovelluksesi laatua Selenium-testauksen teknisellä asiantuntemuksella tehokkaiden ja automatisoitujen testien avulla.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.selenium).twitter.images,
    },
    keywords: [
        "Selenium-testaus", "automaattiset testit", "CHORN", "Cloud DevOps",
        "sovelluksen laadunvarmistus", "testien automatisointi", "ohjelmistotestaus",
        "laadunvarmistus tekninen asiantuntemus", "testaus tekninen asiantuntemus", "testiskriptit",
        "ohjelmistotestaus Suomi", "Selenium tekninen asiantuntemus", "verkkosovellustestaus"
    ]
}
