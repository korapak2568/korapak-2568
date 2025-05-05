import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataVueVI: Metadata = {
    title: "Dịch vụ phát triển Vue.js | CHORN",
    description: "Chuyên phát triển Vue.js để tạo ra các ứng dụng web tương tác và có thể mở rộng.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.frontend.vue).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Phát triển Vue.js | CHORN",
        description: "Phát triển Vue.js chuyên nghiệp, kiến thức kỹ thuật để xây dựng các ứng dụng web hiện đại.",
        images: metadataLink(LanguageCode.vi, MetaLinks.frontend.vue).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.frontend.vue).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ phát triển Vue.js | CHORN",
        description: "Nâng cao ứng dụng web của bạn với sự phát triển Vue.js chuyên nghiệp.",
        images: metadataLink(LanguageCode.vi, MetaLinks.frontend.vue).twitter.images,
    },
    keywords: [
        "Phát triển Vue.js", "Chuyên môn Vue.js", "Nhà phát triển Vue.js", "Phát triển Vue.js tùy chỉnh", "Ứng dụng Vue.js",
        "Phát triển full stack Vue.js", "Ứng dụng một trang Vue.js", "Giao diện người dùng Vue.js", "Ứng dụng web tùy chỉnh",
        "Phát triển phần mềm tùy chỉnh",
        "Ứng dụng web có thể mở rộng", "Phát triển frontend", "Ứng dụng web hiệu suất cao",
        "Giao diện người dùng động", "Ứng dụng một trang", "Nhà phát triển Vue.js",
        "Nhà phát triển Vue.js Thái Lan", "Nhà phát triển Vue.js Bangkok", "Nhà phát triển Vue.js Chiang Mai", "Nhà phát triển frontend Thái Lan",
        "Nhà phát triển web Bangkok", "Kỹ sư phần mềm", "Nhà phát triển phần mềm Thái Lan",
        "CHORN", "Đổi mới kỹ thuật số", "Phần mềm doanh nghiệp"
    ]
}
