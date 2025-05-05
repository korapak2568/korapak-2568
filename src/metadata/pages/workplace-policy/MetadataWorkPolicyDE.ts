import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWorkPolicyDE: Metadata = {
    title: "Arbeitsrichtlinie | CHORN",
    description: "CHORN passt sich verschiedenen Arbeitsmodellen an, einschließlich Remote-, Büro- und Hybridarbeit, und richtet sie auf die spezifischen Anforderungen jedes Projekts aus. Dieser Ansatz gewährleistet eine nahtlose Kommunikation und Effizienz.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.de, MetaLinks.workplacePolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Arbeitsrichtlinie | CHORN",
        description: "CHORN passt sich verschiedenen Arbeitsmodellen an, einschließlich Remote-, Büro- und Hybridarbeit, und richtet sie auf die spezifischen Anforderungen jedes Projekts aus. Dieser Ansatz gewährleistet eine nahtlose Kommunikation und Effizienz.",
        images: metadataLink(LanguageCode.de, MetaLinks.workplacePolicy).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.workplacePolicy).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Arbeitsrichtlinie | CHORN",
        description: "CHORN passt sich verschiedenen Arbeitsmodellen an, einschließlich Remote-, Büro- und Hybridarbeit, und richtet sie auf die spezifischen Anforderungen jedes Projekts aus. Dieser Ansatz gewährleistet eine nahtlose Kommunikation und Effizienz.",
        images: metadataLink(LanguageCode.de, MetaLinks.workplacePolicy).twitter.images,
    },
}