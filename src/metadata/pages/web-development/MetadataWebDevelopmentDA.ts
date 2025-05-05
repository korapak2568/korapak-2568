import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWebDevelopmentDA: Metadata = {
    title: "Webudviklingstjenester | Tilpassede Software- og Teknologiløsninger",
    description: "Udforsk CHORNs tekniske ekspertise inden for webudvikling, herunder ekspertise i Next.js, React, Angular, Vue og mere. CHORN tilbyder skræddersyede løsninger til virksomheder inden for områder som digital markedsføring, blockchain, e-handel og mere.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.webDevelopment).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Top Webudviklingstjenester | CHORN",
        description: "CHORN tilbyder webudviklingsekspertise med erfaring i populære frameworks som Next.js, React, Angular og mere. CHORN leverer løsninger til forskellige forretningsbehov som digital markedsføring, e-handel, blockchain og mere.",
        images: metadataLink(LanguageCode.da, MetaLinks.webDevelopment).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.webDevelopment).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Webudviklingstjenester | CHORN",
        description: "Opdag CHORNs ekspertise inden for webudvikling. Fra Next.js til Angular og mere tilbyder CHORN løsninger til alle forretningsbehov, herunder digital markedsføring, blockchain, e-handel og mere.",
        images: metadataLink(LanguageCode.da, MetaLinks.webDevelopment).twitter.images
    },
    keywords: [
        "webudvikling", "webudviklingsekspertise", "webudvikler", "tilpasset webudvikling",
        "responsiv webudvikling", "dynamiske hjemmesider", "enterprise webudvikling",
        "skalerbare webapplikationer", "tilpassede webapplikationer", "tilpasset softwareudvikling",
        "senior full stack webudvikler", "principal webudvikler", "senior .NET Core Angular webudvikler",
        "senior React Node.js webudvikler", "principal React Java udvikler", "senior Angular Spring Boot udvikler",
        "principal PHP Laravel webudvikler", "senior webudvikler", ".NET Core webudvikling", "React webudvikling",
        "Angular webudvikling", "Vue.js webudvikling", "Node.js webudvikling", "Java Spring Boot webudvikling",
        "PHP Laravel webudvikling", "tilpasset React webudvikling", "enterprise Angular webudvikling",
        "webudvikler Thailand", "webudvikler Bangkok", "webudvikler Chiang Mai",
        "senior webudvikler Thailand", "principal webudvikler Thailand", "backend udvikler Thailand",
        "frontend udvikler Thailand", "softwareingeniør Thailand", "CHORN", "digital innovation", "enterprise software", "skalerbare webapplikationer"
    ]
}
