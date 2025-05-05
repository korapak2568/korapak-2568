import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCss3VI: Metadata = {
    title: "Dịch vụ Phát triển CSS3 | CHORN",
    description: "Nâng cao ứng dụng web của bạn với phát triển CSS3, chuyên môn kỹ thuật cho thiết kế hiện đại và hấp dẫn.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.frontend.css3).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Phát triển CSS3 | CHORN",
        description: "Phát triển CSS3 với chuyên môn kỹ thuật để tạo ra thiết kế web thời trang và phản hồi tốt.",
        images: metadataLink(LanguageCode.vi, MetaLinks.frontend.css3).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.frontend.css3).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ Phát triển CSS3 | CHORN",
        description: "Tạo thiết kế web ấn tượng với CSS3 và chuyên môn phát triển CSS3 của chúng tôi.",
        images: metadataLink(LanguageCode.vi, MetaLinks.frontend.css3).twitter.images,
    },
    keywords: [
        "phát triển CSS3", "chuyên môn CSS3", "lập trình viên CSS3", "phát triển CSS3 tùy chỉnh", "thiết kế đáp ứng CSS3",
        "ứng dụng web CSS3", "phát triển di động CSS3", "ứng dụng web tùy chỉnh", "ứng dụng đa nền tảng CSS3",
        "phát triển phần mềm tùy chỉnh",
        "phát triển web", "thiết kế web hiệu suất cao", "giao diện người dùng động",
        "lập trình viên CSS3 Thái Lan", "lập trình viên CSS3 Bangkok", "lập trình viên CSS3 Chiang Mai", "lập trình viên frontend Thái Lan",
        "lập trình viên web Bangkok", "kỹ sư phần mềm", "lập trình viên phần mềm Thái Lan",
        "CHORN", "đổi mới kỹ thuật số", "phần mềm doanh nghiệp"
    ]
}
