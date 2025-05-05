import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiFahKO: Metadata = {
    title: "AI 채팅 친구 | CHORN AI 통합",
    description: "Fah는 LINE 앱에서 당신의 AI 채팅 친구입니다. 그녀는 20세의 태국에서 영감을 받은 명랑하고 친근한 동반자입니다. 한 번의 클릭으로 그녀를 추가하거나 QR 코드를 스캔하여 태국의 최고의 여행지, 요리 및 문화 보물을 발견해보세요. 그녀는 여러 언어로 대화하며 젊은 에너지로 태국 문화를 안내합니다.",
    alternates: metadataLink(LanguageCode.ko, MetaLinks.aiFah).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Fah를 만나요 - LINE에서 만나는 태국 AI 채팅 친구",
        description: "Fah를 만나보세요, LINE에서 만나는 20세 태국 AI 친구로, 태국의 최고의 여행지, 요리 및 문화 체험을 여러 언어로 추천합니다. 오늘 바로 추가하세요!",
        images: metadataLink(LanguageCode.ko, MetaLinks.aiFah).openGraph.images,
        url: metadataLink(LanguageCode.ko, MetaLinks.aiFah).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Fah - LINE에서 만나는 태국 문화 가이드",
        description: "Fah를 추가하세요, LINE에서 만나는 명랑한 20세 태국 AI 동반자로 태국의 여행지, 음식, 문화를 여러 언어로 탐험하는 데 도움을 줍니다.",
        images: metadataLink(LanguageCode.ko, MetaLinks.aiFah).twitter.images,
    },
}