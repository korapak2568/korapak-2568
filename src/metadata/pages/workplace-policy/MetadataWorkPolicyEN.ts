import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWorkPolicyEN: Metadata = {
    title: "Work Policy | CHORN",
    description: "CHORN adapts to various work models, including remote, in-office, and hybrid setups, tailoring them to the specific needs of each project. This approach ensures seamless communication and efficiency.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks.workplacePolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Work Policy | CHORN",
        description: "CHORN adapts to various work models, including remote, in-office, and hybrid setups, tailoring them to the specific needs of each project. This approach ensures seamless communication and efficiency.",
        images: metadataLink(LanguageCode.en, MetaLinks.workplacePolicy).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.workplacePolicy).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Work Policy | CHORN",
        description: "CHORN adapts to various work models, including remote, in-office, and hybrid setups, tailoring them to the specific needs of each project. This approach ensures seamless communication and efficiency.",
        images: metadataLink(LanguageCode.en, MetaLinks.workplacePolicy).twitter.images,
    },
}