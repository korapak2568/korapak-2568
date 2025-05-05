import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitHubVI: Metadata = {
    title: "Dịch vụ GitHub DevOps | CHORN",
    description: "Chuyên môn kỹ thuật DevOps tích hợp GitHub cho kiểm soát phiên bản, tích hợp liên tục và các quy trình làm việc tự động.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.devops.github).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Dịch vụ GitHub DevOps | CHORN",
        description: "Tăng cường quy trình phát triển của bạn với chuyên môn kỹ thuật DevOps dựa trên GitHub cho CI/CD và kiểm soát phiên bản.",
        images: metadataLink(LanguageCode.vi, MetaLinks.devops.github).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.devops.github).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ GitHub DevOps | CHORN",
        description: "Đơn giản hóa quy trình phát triển của bạn với chuyên môn GitHub DevOps cho kiểm soát phiên bản và quy trình CI/CD.",
        images: metadataLink(LanguageCode.vi, MetaLinks.devops.github).twitter.images,
    },
    keywords: [
        "GitHub DevOps", "chuyên môn GitHub", "kiểm soát phiên bản", "CI/CD", "DevOps", "phát triển phần mềm tùy chỉnh",
        "tích hợp liên tục", "DevOps Việt Nam", "tự động hóa GitHub", "quy trình phát triển phần mềm"
    ]
};
