import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitLabVI: Metadata = {
    title: "Dịch vụ GitLab DevOps | CHORN",
    description: "Chuyên môn kỹ thuật DevOps tích hợp GitLab cho kiểm soát phiên bản, tích hợp liên tục và các quy trình tự động.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.devops.gitlab).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Dịch vụ GitLab DevOps | CHORN",
        description: "Tăng cường quy trình phát triển của bạn với chuyên môn DevOps dựa trên GitLab cho CI/CD và kiểm soát phiên bản.",
        images: metadataLink(LanguageCode.vi, MetaLinks.devops.gitlab).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.devops.gitlab).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ GitLab DevOps | CHORN",
        description: "Tối ưu hóa phát triển của bạn với chuyên môn DevOps GitLab cho kiểm soát phiên bản và các quy trình CI/CD.",
        images: metadataLink(LanguageCode.vi, MetaLinks.devops.gitlab).twitter.images,
    },
    keywords: [
        "GitLab DevOps", "chuyên môn GitLab", "CI/CD", "kiểm soát phiên bản", "DevOps", "tự động hóa", "pipeline DevOps",
        "DevOps Việt Nam", "tự động hóa GitLab", "tích hợp liên tục"
    ]
};
