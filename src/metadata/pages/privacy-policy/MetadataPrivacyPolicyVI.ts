import {Metadata} from "next";
import {MetadataLinkPrivacyPolicy} from "@/metadata/pages/privacy-policy/common/MetadataLinkPrivacyPolicy";

export const MetadataPrivacyPolicyVI: Metadata = {
    title: "Chính sách quyền riêng tư | CHORN",
    description: "CHORN tôn trọng quyền riêng tư của bạn và cam kết bảo vệ dữ liệu cá nhân của bạn. Chính sách quyền riêng tư này giải thích cách xử lý dữ liệu khi sử dụng trang web và việc sử dụng cookie cho mục đích phân tích.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkPrivacyPolicy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Chính sách quyền riêng tư | CHORN",
        description: "CHORN tôn trọng quyền riêng tư của bạn và cam kết bảo vệ dữ liệu cá nhân của bạn. Chính sách quyền riêng tư này giải thích cách xử lý dữ liệu khi sử dụng trang web và việc sử dụng cookie cho mục đích phân tích.",
        images: MetadataLinkPrivacyPolicy.openGraph.images,
        url: MetadataLinkPrivacyPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chính sách quyền riêng tư | CHORN",
        description: "CHORN tôn trọng quyền riêng tư của bạn và cam kết bảo vệ dữ liệu cá nhân của bạn. Chính sách quyền riêng tư này giải thích cách xử lý dữ liệu khi sử dụng trang web và việc sử dụng cookie cho mục đích phân tích.",
        images: MetadataLinkPrivacyPolicy.twitter.images,
    },
}