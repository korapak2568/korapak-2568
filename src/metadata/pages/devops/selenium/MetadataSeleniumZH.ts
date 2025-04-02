import {Metadata} from "next";
import {MetadataLinkSelenium} from "@/metadata/pages/devops/selenium/common/MetadataLinkSelenium";

export const MetadataSeleniumZH: Metadata = {
    title: "Selenium测试服务 | CHORN",
    description: "通过自动化测试，提供全面的Selenium测试技术专长，以确保您的应用程序的质量和性能。",
    alternates: MetadataLinkSelenium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Selenium测试 | CHORN",
        description: "利用Selenium的技术专长自动化您的应用程序测试，以获得强大且可靠的结果。",
        images: MetadataLinkSelenium.openGraph.images,
        url: MetadataLinkSelenium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Selenium测试服务 | CHORN",
        description: "通过Selenium的技术专长，增强您的应用程序质量，实现高效的自动化测试。",
        images: MetadataLinkSelenium.twitter.images,
    },
    keywords: [
        "Selenium测试", "自动化测试", "CHORN", "云DevOps",
        "应用程序质量保证", "测试自动化", "软件测试",
        "质量保证技术专长", "测试技术专长", "测试脚本",
        "软件测试 中国", "Selenium技术专长", "Web应用程序测试"
    ]
}
