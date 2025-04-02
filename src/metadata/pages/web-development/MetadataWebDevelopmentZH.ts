import {Metadata} from "next";
import {MetadataLinkContact} from "@/metadata/pages/contact/common/MetadataLinkContact";

export const MetadataWebDevelopmentZH: Metadata = {
    title: "网页开发服务 | 定制软件与技术解决方案",
    description: "探索CHORN在网页开发方面的技术专长，包括Next.js、React、Angular、Vue等技术。CHORN为各行各业的企业提供定制化解决方案，包括数字营销、区块链、电子商务等。",
    alternates: MetadataLinkContact.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "顶级网页开发服务 | CHORN",
        description: "CHORN提供前沿的网页开发技术专长，精通Next.js、React、Angular等流行框架。CHORN满足各种企业需求，包括数字营销、电子商务、区块链等。",
        images: MetadataLinkContact.openGraph.images,
        url: MetadataLinkContact.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "网页开发服务 | CHORN",
        description: "发现CHORN的网页开发专长。从Next.js到Angular等，CHORN为包括数字营销、区块链、电子商务等所有商业需求提供解决方案。",
        images: MetadataLinkContact.twitter.images
    },
    keywords: [
        "网页开发", "网页开发技术", "网页开发者", "定制网页开发",
        "响应式网页开发", "动态网站", "企业网页开发",
        "可扩展网页应用程序", "定制网页应用程序", "定制软件开发",
        "高级全栈网页开发者", "首席网页开发者", "高级.NET Core Angular网页开发者",
        "高级React Node.js网页开发者", "首席React Java开发者", "高级Angular Spring Boot开发者",
        "首席PHP Laravel网页开发者", "高级网页开发者", "NET Core网页开发", "React网页开发",
        "Angular网页开发", "Vue.js网页开发", "Node.js网页开发", "Java Spring Boot网页开发",
        "PHP Laravel网页开发", "定制React网页开发", "企业级Angular网页开发",
        "泰国网页开发者", "曼谷网页开发者", "清迈网页开发者",
        "泰国高级网页开发者", "泰国首席网页开发者", "泰国后端开发者",
        "泰国前端开发者", "泰国软件工程师", "CHORN", "数字创新", "企业软件", "可扩展网页应用程序"
    ]
}