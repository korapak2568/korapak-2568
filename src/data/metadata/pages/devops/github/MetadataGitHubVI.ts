import {Metadata} from "next";
import {MetadataLinkGitHub} from "@/data/metadata/pages/devops/github/common/MetadataLinkGitHub";

export const MetadataGitHubVI: Metadata = {
    title: "Dịch vụ GitHub DevOps | CHORN",
    description: "Chuyên môn kỹ thuật DevOps tích hợp GitHub cho kiểm soát phiên bản, tích hợp liên tục và các quy trình làm việc tự động.",
    alternates: MetadataLinkGitHub.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Dịch vụ GitHub DevOps | CHORN",
        description: "Tăng cường quy trình phát triển của bạn với chuyên môn kỹ thuật DevOps dựa trên GitHub cho CI/CD và kiểm soát phiên bản.",
        images: MetadataLinkGitHub.openGraph.images,
        url: MetadataLinkGitHub.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ GitHub DevOps | CHORN",
        description: "Đơn giản hóa quy trình phát triển của bạn với chuyên môn GitHub DevOps cho kiểm soát phiên bản và quy trình CI/CD.",
        images: MetadataLinkGitHub.twitter.images,
    },
    keywords: [
        "GitHub DevOps", "chuyên môn GitHub", "kiểm soát phiên bản", "CI/CD", "DevOps", "phát triển phần mềm tùy chỉnh",
        "tích hợp liên tục", "DevOps Việt Nam", "tự động hóa GitHub", "quy trình phát triển phần mềm"
    ]
};
