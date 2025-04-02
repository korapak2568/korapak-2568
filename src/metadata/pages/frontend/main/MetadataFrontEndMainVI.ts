import {Metadata} from "next";
import {MetadataLinkFrontEndMain} from "@/metadata/pages/frontend/main/common/MetadataLinkFrontEndMain";

export const MetadataFrontEndMainVI: Metadata = {
    title: "Dịch vụ phát triển Frontend | CHORN",
    description: "CHORN cung cấp chuyên môn kỹ thuật phát triển Frontend, chuyên về các framework hiện đại như Next.js, React, Angular, Vue, HTML5 và CSS3. Xây dựng các trang web phản hồi nhanh và có khả năng mở rộng với công nghệ tiên tiến.",
    alternates: MetadataLinkFrontEndMain.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Dịch vụ phát triển Frontend | CHORN",
        description: "CHORN cung cấp chuyên môn kỹ thuật phát triển Frontend bằng các công nghệ hiện đại như Next.js, React, Angular, Vue, HTML5 và CSS3 để tạo ra các trang web nhanh, phản hồi tốt và mở rộng dễ dàng.",
        images: MetadataLinkFrontEndMain.openGraph.images,
        url: MetadataLinkFrontEndMain.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ phát triển Frontend | CHORN",
        description: "Chuyên môn kỹ thuật phát triển Frontend của CHORN, sử dụng Next.js, React, Angular, Vue, HTML5 và CSS3 để xây dựng các trang web phản hồi nhanh và mở rộng tốt.",
        images: MetadataLinkFrontEndMain.twitter.images,
    },
    keywords: [
        "phát triển frontend", "chuyên môn frontend", "lập trình viên frontend", "phát triển frontend tùy chỉnh",
        "giao diện người dùng động", "ứng dụng web một trang", "thiết kế web phản hồi",
        "ứng dụng frontend hiệu suất cao", "phát triển phần mềm tùy chỉnh",
        "phát triển React", "phát triển Angular", "phát triển Vue.js", "phát triển frontend Next.js",
        "phát triển React.js", "phát triển frontend Angular tùy chỉnh", "ứng dụng frontend React.js",
        "chuyên môn frontend Vue.js", "phát triển Vue.js tùy chỉnh",
        "lập trình viên frontend Việt Nam", "lập trình viên web Việt Nam", "kỹ sư phần mềm Việt Nam",
        "CHORN", "đổi mới kỹ thuật số", "phần mềm doanh nghiệp", "ứng dụng web mở rộng"
    ]
}