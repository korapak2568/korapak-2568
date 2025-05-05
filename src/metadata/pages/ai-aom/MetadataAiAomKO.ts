import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiAomKO: Metadata = {
    title: "AI 채팅 동반자 | CHORN AI 통합",
    description: "Aom은 LINE 앱을 통해 액세스할 수 있습니다. '친구 추가' 버튼을 누르거나 LINE QR 코드를 스캔하여 친구로 추가할 수 있습니다. 21세인 Aom은 건강한 생활과 웰빙에 열정을 가진 친절하고 활기찬 AI 동반자로, 영양 조언, 운동 루틴 및 마음챙김 연습을 제공합니다. 여러 언어로 채팅할 수 있는 능력을 갖춘 Aom은 재미있게 균형 잡힌 라이프스타일을 유지하도록 돕습니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.aiAom).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Aom을 만나보세요 - LINE에서 당신의 웰니스 가이드",
        description: "Aom과 연결하세요. 21세의 웰니스 중심 AI 동반자인 Aom은 여러 언어로 영양 조언, 운동 루틴 및 마음챙김 연습을 제공하여 당신이 가장 건강한 삶을 살 수 있도록 도와줍니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.aiAom).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.aiAom).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Aom - LINE에서 당신의 건강한 라이프 코치",
        description: "Aom을 추가하세요. 활기찬 21세의 웰니스 AI 동반자 Aom은 여러 언어로 영양 조언, 운동 루틴 및 마음챙김 연습으로 당신을 동기 부여합니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.aiAom).twitter.images,
    },
}
