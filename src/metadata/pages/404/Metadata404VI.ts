import {Metadata} from "next";
import {MetadataLink404} from "@/metadata/pages/404/common/MetadataLink404";

export const Metadata404VI: Metadata = {
    title: "404 - Không Tìm Thấy Trang",
    description: "Rất tiếc! Chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Vui lòng kiểm tra URL hoặc trở về trang chủ của chúng tôi để tiếp tục khám phá CHORN.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLink404.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - Không Tìm Thấy Trang",
        description: "Rất tiếc! Chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Vui lòng kiểm tra URL hoặc trở về trang chủ của chúng tôi để tiếp tục khám phá CHORN.",
        images: MetadataLink404.openGraph.images,
        url: MetadataLink404.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - Không Tìm Thấy Trang",
        description: "Rất tiếc! Chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Vui lòng kiểm tra URL hoặc trở về trang chủ của chúng tôi để tiếp tục khám phá CHORN.",
        images: MetadataLink404.twitter.images,
    },
}