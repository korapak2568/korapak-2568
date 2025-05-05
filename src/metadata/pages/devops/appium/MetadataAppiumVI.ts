import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAppiumVI: Metadata = {
    title: "Dịch vụ kiểm thử Appium | CHORN",
    description: "Chuyên môn kỹ thuật kiểm thử Appium để kiểm thử ứng dụng di động tự động trên nhiều nền tảng nhằm đảm bảo hiệu suất chất lượng cao.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.devops.appium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kiểm thử Appium | CHORN",
        description: "Tự động hóa kiểm thử ứng dụng di động của bạn với chuyên môn kỹ thuật Appium để kiểm thử đa nền tảng toàn diện.",
        images: metadataLink(LanguageCode.vi, MetaLinks.devops.appium).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.devops.appium).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ kiểm thử Appium | CHORN",
        description: "Đảm bảo ứng dụng di động của bạn hoạt động hoàn hảo với chuyên môn kiểm thử Appium để kiểm thử tự động toàn diện trên nhiều nền tảng.",
        images: metadataLink(LanguageCode.vi, MetaLinks.devops.appium).twitter.images,
    },
    keywords: [
        "Kiểm thử Appium", "Kiểm thử ứng dụng di động", "CHORN", "Cloud DevOps",
        "Kiểm thử đa nền tảng", "Tự động hóa kiểm thử", "Đảm bảo chất lượng",
        "Chuyên môn kiểm thử di động", "Kiểm thử phần mềm", "Hiệu suất ứng dụng",
        "Chuyên môn kiểm thử tại Việt Nam", "Chuyên môn Appium", "Kiểm thử ứng dụng di động"
    ]
};
