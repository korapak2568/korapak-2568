import {Metadata} from "next";
import {MetadataLinkBackEndMain} from "@/metadata/pages/backend/main/common/MetadataLinkBackEndMain";

export const MetadataBackEndMainZH: Metadata = {
    title: "后端API开发 | CHORN",
    description: "CHORN 提供后端API开发服务，利用现代技术（如 Node.js、Java Spring Boot、.NET Core、Go、Python 和 PHP）构建高质量、可扩展的应用程序，以满足企业需求。",
    alternates: MetadataLinkBackEndMain.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "后端API开发 | CHORN",
        description: "CHORN 提供后端API开发服务，利用 Node.js、Java Spring Boot、.NET Core、Go、Python 和 PHP 构建高质量、可扩展的应用程序。",
        images: MetadataLinkBackEndMain.openGraph.images,
        url: MetadataLinkBackEndMain.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "后端API开发 | CHORN",
        description: "使用 Node.js、Java Spring Boot、.NET Core、Go、Python 和 PHP 开发可扩展的 Web 应用程序。",
        images: MetadataLinkBackEndMain.twitter.images,
    },
}
