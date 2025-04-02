import {Metadata} from "next";
import {MetadataLinkTermOfService} from "@/metadata/pages/terms-of-service/common/MetadataLinkTermOfService";

export const MetadataTermOfServiceKO: Metadata = {
    title: "서비스 이용약관 | CHORN",
    description: "CHORN은 이 웹사이트 이용을 규정하는 서비스 이용약관을 제공합니다. 웹사이트에 접속하거나 이용함으로써 귀하는 본 약관을 준수하는 것에 동의하게 됩니다.",
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
        title: "서비스 이용약관 | CHORN",
        description: "CHORN은 이 웹사이트 이용을 규정하는 서비스 이용약관을 제공합니다. 웹사이트에 접속하거나 이용함으로써 귀하는 본 약관을 준수하는 것에 동의하게 됩니다.",
        images: MetadataLinkTermOfService.openGraph.images,
        url: MetadataLinkTermOfService.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "서비스 이용약관 | CHORN",
        description: "CHORN은 이 웹사이트 이용을 규정하는 서비스 이용약관을 제공합니다. 웹사이트에 접속하거나 이용함으로써 귀하는 본 약관을 준수하는 것에 동의하게 됩니다.",
        images: MetadataLinkTermOfService.twitter.images,
    },
}
