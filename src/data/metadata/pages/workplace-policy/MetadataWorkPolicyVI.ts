import {Metadata} from "next";
import {MetadataLinkWorkPolicy} from "@/data/metadata/pages/workplace-policy/common/MetadataLinkWorkPolicy";

export const MetadataWorkPolicyVI: Metadata = {
    title: "Chính sách làm việc | CHORN",
    description: "CHORN thích ứng với các mô hình làm việc khác nhau, bao gồm làm việc từ xa, tại văn phòng và mô hình kết hợp, điều chỉnh theo nhu cầu cụ thể của từng dự án. Cách tiếp cận này đảm bảo giao tiếp trôi chảy và hiệu quả.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkWorkPolicy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Chính sách làm việc | CHORN",
        description: "CHORN thích ứng với các mô hình làm việc khác nhau, bao gồm làm việc từ xa, tại văn phòng và mô hình kết hợp, điều chỉnh theo nhu cầu cụ thể của từng dự án. Cách tiếp cận này đảm bảo giao tiếp trôi chảy và hiệu quả.",
        images: MetadataLinkWorkPolicy.openGraph.images,
        url: MetadataLinkWorkPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chính sách làm việc | CHORN",
        description: "CHORN thích ứng với các mô hình làm việc khác nhau, bao gồm làm việc từ xa, tại văn phòng và mô hình kết hợp, điều chỉnh theo nhu cầu cụ thể của từng dự án. Cách tiếp cận này đảm bảo giao tiếp trôi chảy và hiệu quả.",
        images: MetadataLinkWorkPolicy.twitter.images,
    },
}