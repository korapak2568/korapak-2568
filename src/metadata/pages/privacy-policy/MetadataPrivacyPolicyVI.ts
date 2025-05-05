import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPrivacyPolicyVI: Metadata = {
    title: "Chính sách quyền riêng tư | CHORN",
    description: "CHORN tôn trọng quyền riêng tư của bạn và cam kết bảo vệ dữ liệu cá nhân của bạn. Chính sách quyền riêng tư này giải thích cách xử lý dữ liệu khi sử dụng trang web và việc sử dụng cookie cho mục đích phân tích.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.vi, MetaLinks.privacyPolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Chính sách quyền riêng tư | CHORN",
        description: "CHORN tôn trọng quyền riêng tư của bạn và cam kết bảo vệ dữ liệu cá nhân của bạn. Chính sách quyền riêng tư này giải thích cách xử lý dữ liệu khi sử dụng trang web và việc sử dụng cookie cho mục đích phân tích.",
        images: metadataLink(LanguageCode.vi, MetaLinks.privacyPolicy).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.privacyPolicy).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chính sách quyền riêng tư | CHORN",
        description: "CHORN tôn trọng quyền riêng tư của bạn và cam kết bảo vệ dữ liệu cá nhân của bạn. Chính sách quyền riêng tư này giải thích cách xử lý dữ liệu khi sử dụng trang web và việc sử dụng cookie cho mục đích phân tích.",
        images: metadataLink(LanguageCode.vi, MetaLinks.privacyPolicy).twitter.images,
    },
}