import {Metadata} from "next";
import {MetadataLinkWorkPolicy} from "@/data/metadata/pages/workplace-policy/common/MetadataLinkWorkPolicy";

export const MetadataWorkPolicyDE: Metadata = {
    title: "Arbeitsrichtlinie | CHORN",
    description: "CHORN passt sich verschiedenen Arbeitsmodellen an, einschließlich Remote-, Büro- und Hybridarbeit, und richtet sie auf die spezifischen Anforderungen jedes Projekts aus. Dieser Ansatz gewährleistet eine nahtlose Kommunikation und Effizienz.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkWorkPolicy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Arbeitsrichtlinie | CHORN",
        description: "CHORN passt sich verschiedenen Arbeitsmodellen an, einschließlich Remote-, Büro- und Hybridarbeit, und richtet sie auf die spezifischen Anforderungen jedes Projekts aus. Dieser Ansatz gewährleistet eine nahtlose Kommunikation und Effizienz.",
        images: MetadataLinkWorkPolicy.openGraph.images,
        url: MetadataLinkWorkPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Arbeitsrichtlinie | CHORN",
        description: "CHORN passt sich verschiedenen Arbeitsmodellen an, einschließlich Remote-, Büro- und Hybridarbeit, und richtet sie auf die spezifischen Anforderungen jedes Projekts aus. Dieser Ansatz gewährleistet eine nahtlose Kommunikation und Effizienz.",
        images: MetadataLinkWorkPolicy.twitter.images,
    },
}