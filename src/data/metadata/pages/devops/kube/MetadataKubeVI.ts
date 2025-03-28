import {Metadata} from "next";
import {MetadataLinkKube} from "@/data/metadata/pages/devops/kube/common/MetadataLinkKube";

export const MetadataKubeVI: Metadata = {
    title: "Dịch vụ DevOps Kubernetes | CHORN",
    description: "Chuyên môn kỹ thuật DevOps dựa trên Kubernetes để tự động hóa triển khai, mở rộng và quản lý các ứng dụng chứa trong container.",
    alternates: MetadataLinkKube.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Dịch vụ DevOps Kubernetes | CHORN",
        description: "Tối ưu hóa cơ sở hạ tầng của bạn với chuyên môn DevOps dựa trên Kubernetes để tự động hóa việc mở rộng và quản lý ứng dụng.",
        images: MetadataLinkKube.openGraph.images,
        url: MetadataLinkKube.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ DevOps Kubernetes | CHORN",
        description: "Tận dụng chuyên môn DevOps của Kubernetes để tự động hóa và quản lý các ứng dụng container hóa có khả năng mở rộng.",
        images: MetadataLinkKube.twitter.images,
    },
    keywords: [
        "DevOps Kubernetes", "chuyên môn kỹ thuật Kubernetes", "orchestration container", "CHORN", "DevOps",
        "quản lý ứng dụng có khả năng mở rộng", "mở rộng tự động", "DevOps Việt Nam", "ứng dụng cloud-native"
    ]
};
