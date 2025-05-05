import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSoapUIZH: Metadata = {
    title: "SoapUI 测试服务 | CHORN",
    description: "SoapUI 测试技术专长，确保您的 API 和 Web 技术得到充分测试并且可靠。",
    alternates: metadataLink(LanguageCode.zh, MetaLinks.devops.soapui).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "SoapUI 测试 | CHORN",
        description: "利用测试技术专长，确保您的 API 和 Web 技术的可靠性。",
        images: metadataLink(LanguageCode.zh, MetaLinks.devops.soapui).openGraph.images,
        url: metadataLink(LanguageCode.zh, MetaLinks.devops.soapui).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUI 测试服务 | CHORN",
        description: "利用 SoapUI 技术专长优化您的 API 测试，实现全面可靠的 Web 服务测试。",
        images: metadataLink(LanguageCode.zh, MetaLinks.devops.soapui).twitter.images,
    },
    keywords: [
        "SoapUI 测试", "API 测试", "CHORN", "Cloud DevOps",
        "Web 服务测试", "可靠性测试", "测试自动化",
        "质量保证", "软件测试", "API 可靠性",
        "中国测试技术专长", "SoapUI 技术专长", "Web 应用测试"
    ]
}