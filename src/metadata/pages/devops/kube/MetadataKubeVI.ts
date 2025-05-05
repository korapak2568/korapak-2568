import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataKubeVI: Metadata = {
    title: "Dịch vụ DevOps Kubernetes | CHORN",
    description: "Chuyên môn kỹ thuật DevOps dựa trên Kubernetes để tự động hóa triển khai, mở rộng và quản lý các ứng dụng chứa trong container.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.devops.kube).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Dịch vụ DevOps Kubernetes | CHORN",
        description: "Tối ưu hóa cơ sở hạ tầng của bạn với chuyên môn DevOps dựa trên Kubernetes để tự động hóa việc mở rộng và quản lý ứng dụng.",
        images: metadataLink(LanguageCode.vi, MetaLinks.devops.kube).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.devops.kube).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ DevOps Kubernetes | CHORN",
        description: "Tận dụng chuyên môn DevOps của Kubernetes để tự động hóa và quản lý các ứng dụng container hóa có khả năng mở rộng.",
        images: metadataLink(LanguageCode.vi, MetaLinks.devops.kube).twitter.images,
    },
    keywords: [
        "DevOps Kubernetes", "chuyên môn kỹ thuật Kubernetes", "orchestration container", "CHORN", "DevOps",
        "quản lý ứng dụng có khả năng mở rộng", "mở rộng tự động", "DevOps Việt Nam", "ứng dụng cloud-native"
    ]
};
