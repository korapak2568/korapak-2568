import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPhpDA: Metadata = {
    title: "PHP Full Stack Udvikling | CHORN",
    description: "PHP full stack udvikling, teknisk ekspertise til at bygge dynamiske og skalerbare webapplikationer.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.backend.php).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "PHP Udvikling | CHORN",
        description: "Udnyt PHP full stack udvikling, teknisk ekspertise til at bygge skalerbare og dynamiske webapplikationer.",
        images: metadataLink(LanguageCode.da, MetaLinks.backend.php).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.backend.php).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "PHP Full Stack Udvikling | CHORN",
        description: "PHP full stack udviklingsekspertise til dynamiske og skalerbare webapplikationer.",
        images: metadataLink(LanguageCode.da, MetaLinks.backend.php).twitter.images,
    },
    keywords: [
        "PHP udvikling", "PHP teknisk ekspertise", "PHP udvikler", "tilpasset PHP udvikling", "PHP webapplikationer",
        "PHP full stack udvikling", "PHP applikationer til virksomheder", "tilpasset softwareudvikling",
        "Symfony udvikling", "Laravel udvikling", "Yii Framework udvikling", "Phalcon udvikling",
        "tilpasset Symfony udvikling", "tilpasset Laravel udvikling", "tilpasset Yii udvikling", "tilpasset Phalcon udvikling",
        "skalerbare webapplikationer", "backend udvikling", "højtydende webapplikationer",
        "tilpassede webapplikationer", "API udvikling", "virksomhedssoftware", "PHP frameworks",
        "PHP udvikler Thailand", "PHP udvikler Bangkok", "PHP udvikler Chiang Mai",
        "Backend udvikler Thailand", "Full Stack udvikler Thailand", "Software ingeniør", "Software udvikler Thailand",
        "CHORN", "digital innovation", "virksomhedssoftware"
    ]
}
