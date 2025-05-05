import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";
import {Metadata} from "next";

export const Metadata404VI: Metadata = {
    title: "404 - Không Tìm Thấy Trang",
    description: "Rất tiếc! Chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Vui lòng kiểm tra URL hoặc trở về trang chủ của chúng tôi để tiếp tục khám phá CHORN.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.vi, MetaLinks._404).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - Không Tìm Thấy Trang",
        description: "Rất tiếc! Chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Vui lòng kiểm tra URL hoặc trở về trang chủ của chúng tôi để tiếp tục khám phá CHORN.",
        images: metadataLink(LanguageCode.vi, MetaLinks._404).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks._404).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - Không Tìm Thấy Trang",
        description: "Rất tiếc! Chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Vui lòng kiểm tra URL hoặc trở về trang chủ của chúng tôi để tiếp tục khám phá CHORN.",
        images: metadataLink(LanguageCode.vi, MetaLinks._404).twitter.images,
    },
}