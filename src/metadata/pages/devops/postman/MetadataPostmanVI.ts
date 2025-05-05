import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPostmanVI: Metadata = {
    title: "Dịch vụ kiểm thử API với Postman | CHORN",
    description: "Cung cấp chuyên môn kỹ thuật kiểm thử API bằng cách sử dụng Postman để đảm bảo độ tin cậy và hiệu suất của chuyên môn kỹ thuật web của bạn.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.devops.postman).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Dịch vụ kiểm thử API với Postman | CHORN",
        description: "Đảm bảo API của bạn hoạt động như mong đợi với chuyên môn kỹ thuật kiểm thử API dựa trên Postman.",
        images: metadataLink(LanguageCode.vi, MetaLinks.devops.postman).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.devops.postman).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ kiểm thử API với Postman | CHORN",
        description: "Chuyên môn kỹ thuật kiểm thử API dựa trên Postman để xác thực độ tin cậy và hiệu suất của chuyên môn kỹ thuật web của bạn.",
        images: metadataLink(LanguageCode.vi, MetaLinks.devops.postman).twitter.images,
    },
    keywords: [
        "Kiểm thử API với Postman", "Chuyên môn kỹ thuật Postman", "Kiểm thử API", "DevOps", "Kiểm thử API tự động", "CHORN",
        "Kiểm thử kỹ thuật web", "Hiệu suất API", "Phát triển phần mềm tùy chỉnh", "DevOps Việt Nam"
    ]
}
