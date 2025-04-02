import {Metadata} from "next";
import {MetadataLinkAppium} from "@/metadata/pages/devops/appium/common/MetadataLinkAppium";

export const MetadataAppiumZH: Metadata = {
    title: "Appium 测试服务 | CHORN",
    description: "Appium 测试技术专长，支持跨多个平台的自动化移动应用测试，确保高质量的性能表现。",
    alternates: MetadataLinkAppium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Appium 测试 | CHORN",
        description: "利用 Appium 技术专长，实现全面的跨平台移动应用自动化测试。",
        images: MetadataLinkAppium.openGraph.images,
        url: MetadataLinkAppium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Appium 测试服务 | CHORN",
        description: "确保您的移动应用完美运行，利用 Appium 测试技术专长进行彻底的自动化跨平台测试。",
        images: MetadataLinkAppium.twitter.images,
    },
    keywords: [
        "Appium 测试", "移动应用测试", "CHORN", "Cloud DevOps",
        "跨平台测试", "测试自动化", "质量保证",
        "移动测试技术专长", "软件测试", "应用性能",
        "中国的测试技术专长", "Appium 技术专长", "移动应用测试"
    ]
};
