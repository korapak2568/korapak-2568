import {Metadata} from "next";
import {MetadataLinkTermOfService} from "@/metadata/pages/terms-of-service/common/MetadataLinkTermOfService";

export const MetadataTermOfServiceZH: Metadata = {
    title: "服务条款 | CHORN",
    description: "CHORN 提供服务条款以规范本网站的使用。访问或使用本网站即表示您同意遵守这些条款。",
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
        title: "服务条款 | CHORN",
        description: "CHORN 提供服务条款以规范本网站的使用。访问或使用本网站即表示您同意遵守这些条款。",
        images: MetadataLinkTermOfService.openGraph.images,
        url: MetadataLinkTermOfService.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "服务条款 | CHORN",
        description: "CHORN 提供服务条款以规范本网站的使用。访问或使用本网站即表示您同意遵守这些条款。",
        images: MetadataLinkTermOfService.twitter.images,
    },
}