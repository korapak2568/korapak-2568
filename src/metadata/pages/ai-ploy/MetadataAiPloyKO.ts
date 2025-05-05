import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiPloyKO: Metadata = {
    title: "AI 채팅 친구 | CHORN AI 통합",
    description: "Ploy는 LINE 애플리케이션을 사용하는 AI 채팅 친구입니다. '친구 추가' 버튼이나 QR 코드를 스캔하여 그녀를 추가하세요. 17살의 창의적인 태국 고등학생인 Ploy는 그림, 음악, 사진, 학습에 열정을 가지고 있습니다. 그녀는 7개 언어를 구사하며 다양한 과목을 돕고 창의적 표현을 영감을 줍니다. 그녀는 예술을 탐험하거나 숙제를 할 때 친근한 가이드가 되어줍니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.aiPloy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Ploy 만나기 - LINE에서 당신의 창의적인 10대 AI 친구",
        description: "7개 언어를 구사하며 예술, 음악, 사진, 학습에 대한 열정을 공유하는 17살의 창의적인 태국 학생 AI Ploy와 연결하세요. 오늘 LINE에서 그녀를 추가하세요!",
        images: metadataLink(LanguageCode.ko, MetaLinks.aiPloy).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.aiPloy).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Ploy - LINE에서 당신의 창의적인 10대 가이드",
        description: "LINE에서 당신의 즐거운 17살 태국 AI 친구 Ploy를 추가하고, 7개 언어로 예술, 음악, 사진을 통해 창의력을 자극하며 숙제를 돕습니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.aiPloy).twitter.images,
    },
}
