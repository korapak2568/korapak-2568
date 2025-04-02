import {Metadata} from "next";
import {MetadataLinkDocker} from "@/metadata/pages/devops/docker/common/MetadataLinkDocker";

export const MetadataDockerVI: Metadata = {
    title: "Dịch vụ Docker DevOps | CHORN",
    description: "Chuyên môn kỹ thuật DevOps dựa trên Docker giúp tối ưu hóa việc đóng gói container và triển khai ứng dụng có khả năng mở rộng.",
    alternates: MetadataLinkDocker.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Dịch vụ Docker DevOps | CHORN",
        description: "Tận dụng Docker để đóng gói container và triển khai phần mềm có khả năng mở rộng với chuyên môn DevOps.",
        images: MetadataLinkDocker.openGraph.images,
        url: MetadataLinkDocker.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ Docker DevOps | CHORN",
        description: "Chuyên môn kỹ thuật Docker DevOps giúp đóng gói container và triển khai ứng dụng có khả năng mở rộng.",
        images: MetadataLinkDocker.twitter.images,
    },
    keywords: [
        "Docker DevOps", "Chuyên môn Docker", "Đóng gói container", "CHORN", "DevOps", "Triển khai mở rộng",
        "Phát triển phần mềm tùy chỉnh", "Ứng dụng đám mây", "DevOps Việt Nam", "Docker container"
    ]
};
