import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAngularVI: Metadata = {
    title: "Dịch vụ phát triển Angular | CHORN",
    description: "Dịch vụ phát triển Angular, xây dựng ứng dụng web động, có thể mở rộng và hiệu suất cao bằng Angular.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.frontend.angular).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Phát triển Angular | CHORN",
        description: "Phát triển Angular với chuyên môn kỹ thuật để tạo ra các ứng dụng web nhanh chóng, có thể mở rộng và linh hoạt.",
        images: metadataLink(LanguageCode.vi, MetaLinks.frontend.angular).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.frontend.angular).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ phát triển Angular | CHORN",
        description: "Nâng cao ứng dụng web của bạn với chuyên môn phát triển Angular.",
        images: metadataLink(LanguageCode.vi, MetaLinks.frontend.angular).twitter.images,
    },
    keywords: [
        "phát triển Angular", "chuyên môn kỹ thuật Angular", "nhà phát triển Angular", "phát triển Angular tại Thái Lan",
        "phát triển Angular tại Bangkok", "phát triển Angular tại Chiang Mai", "công ty phát triển Angular",
        "phát triển Angular tùy chỉnh", "phát triển phần mềm tùy chỉnh", "ứng dụng Angular cho doanh nghiệp",
        "phát triển frontend", "ứng dụng trang đơn", "giao diện người dùng động",
        "ứng dụng hiệu suất cao", "ứng dụng web có thể mở rộng", "ứng dụng web tùy chỉnh",
        "lập trình viên web", "lập trình viên full stack", "kỹ sư phần mềm", "lập trình viên phần mềm tại Thái Lan",
        "nhà phát triển Angular tại Thái Lan", "nhà phát triển frontend tại Thái Lan", "lập trình viên web tại Bangkok",
        "nhà phát triển Angular tại Chiang Mai", "nhà phát triển Angular tại Bangkok", "công ty phát triển Angular",
        "CHORN", "đổi mới kỹ thuật số", "phần mềm doanh nghiệp",
        "thiết kế web đáp ứng với Angular", "thiết kế web đáp ứng Angular", "Angular thiết kế web đáp ứng"
    ]
}