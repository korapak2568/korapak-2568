import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWorkPolicyVI: Metadata = {
    title: "Chính sách làm việc | CHORN",
    description: "CHORN thích ứng với các mô hình làm việc khác nhau, bao gồm làm việc từ xa, tại văn phòng và mô hình kết hợp, điều chỉnh theo nhu cầu cụ thể của từng dự án. Cách tiếp cận này đảm bảo giao tiếp trôi chảy và hiệu quả.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.vi, MetaLinks.workplacePolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Chính sách làm việc | CHORN",
        description: "CHORN thích ứng với các mô hình làm việc khác nhau, bao gồm làm việc từ xa, tại văn phòng và mô hình kết hợp, điều chỉnh theo nhu cầu cụ thể của từng dự án. Cách tiếp cận này đảm bảo giao tiếp trôi chảy và hiệu quả.",
        images: metadataLink(LanguageCode.vi, MetaLinks.workplacePolicy).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.workplacePolicy).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chính sách làm việc | CHORN",
        description: "CHORN thích ứng với các mô hình làm việc khác nhau, bao gồm làm việc từ xa, tại văn phòng và mô hình kết hợp, điều chỉnh theo nhu cầu cụ thể của từng dự án. Cách tiếp cận này đảm bảo giao tiếp trôi chảy và hiệu quả.",
        images: metadataLink(LanguageCode.vi, MetaLinks.workplacePolicy).twitter.images,
    },
}