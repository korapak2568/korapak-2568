import {Metadata} from "next";
import {MetadataLinkJenkins} from "@/data/metadata/pages/devops/jenkins/common/MetadataLinkJenkins";

export const MetadataJenkinsVI: Metadata = {
    title: "Dịch vụ DevOps Jenkins | CHORN",
    description: "Chuyên môn kỹ thuật DevOps dựa trên Jenkins để tự động hóa xây dựng, kiểm tra và triển khai trong quy trình phát triển của bạn.",
    alternates: MetadataLinkJenkins.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Dịch vụ DevOps Jenkins | CHORN",
        description: "Tự động hóa quy trình phát triển của bạn với chuyên môn DevOps dựa trên Jenkins cho tích hợp liên tục và triển khai.",
        images: MetadataLinkJenkins.openGraph.images,
        url: MetadataLinkJenkins.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ DevOps Jenkins | CHORN",
        description: "Tăng cường vòng đời phát triển phần mềm của bạn với chuyên môn DevOps dựa trên Jenkins từ CHORN cho tự động hóa CI/CD.",
        images: MetadataLinkJenkins.twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Chuyên môn Jenkins", "Tự động hóa CI/CD", "DevOps", "Tích hợp liên tục", "DevOps Việt Nam",
        "Jenkins pipeline", "Kiểm thử tự động", "Tự động hóa xây dựng", "Phát triển phần mềm theo yêu cầu"
    ]
};
