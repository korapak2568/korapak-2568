import {Metadata} from "next";
import {MetadataLinkTermOfService} from "@/metadata/pages/terms-of-service/common/MetadataLinkTermOfService";

export const MetadataTermOfServiceDE: Metadata = {
    title: "Nutzungsbedingungen | CHORN",
    description: "CHORN stellt die Nutzungsbedingungen bereit, die die Nutzung dieser Website regeln. Durch den Zugriff auf oder die Nutzung der Website erklären Sie sich mit diesen Bedingungen einverstanden.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkTermOfService.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Nutzungsbedingungen | CHORN",
        description: "CHORN stellt die Nutzungsbedingungen bereit, die die Nutzung dieser Website regeln. Durch den Zugriff auf oder die Nutzung der Website erklären Sie sich mit diesen Bedingungen einverstanden.",
        images: MetadataLinkTermOfService.openGraph.images,
        url: MetadataLinkTermOfService.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nutzungsbedingungen | CHORN",
        description: "CHORN stellt die Nutzungsbedingungen bereit, die die Nutzung dieser Website regeln. Durch den Zugriff auf oder die Nutzung der Website erklären Sie sich mit diesen Bedingungen einverstanden.",
        images: MetadataLinkTermOfService.twitter.images,
    },
}