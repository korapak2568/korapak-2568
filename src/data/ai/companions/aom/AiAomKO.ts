// src/data/ai/companions/aom/AiAomEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {ImageUrl} from "@/data/image/ImageUrl";

export const AiAomKO: IAiLanding = {
    name: 'Aom',
    category: '건강 LINE 친구',
    thumbnail: ImageUrl.ai.aom.thumbnail.path,

    pages: {
        landing: {
            link: '/ai-companions/aom',
            image: {
                title: 'ออม เพื่อนคุยเอไอ',
                path: ImageUrl.ai.aom.main.path,
            }
        }
    },
    title: "Aom, AI 채팅",
    features: [
        {
            title: "독특한 특징",
            description: "Aom은 LINE 애플리케이션을 통해 접근할 수 있습니다. '친구 추가' 버튼을 누르거나 LINE QR 코드를 스캔하여 바로 Aom을 친구로 추가할 수 있습니다. Aom은 건강한 생활과 웰니스에 열정적인 친근하고 활기찬 AI 동반자입니다. 그녀의 젊은 에너지와 밝은 미소로, 여러분이 가장 건강한 삶을 살도록 영감을 줄 준비가 되어 있습니다. 21세인 Aom은 신선한 관점과 귀중한 통찰력을 결합하여, 라이프스타일을 개선하고자 하는 모든 사람들에게 이상적인 가이드가 됩니다. 영양 팁, 운동 루틴, 또는 마음챙김 연습을 찾고 있든, Aom의 매력적인 대화와 긍정적인 태도가 여러분의 동기부여를 유지시켜 줄 것입니다. 여러 언어로 대화할 수 있는 능력으로, Aom은 재미있고 상호작용적인 방식으로 균형 잡힌 라이프스타일을 유지하는 데 도움을 주는 완벽한 가이드입니다.",
            items: [
                {
                    title: "활기찬 성격",
                    description: "Aom은 긍정적인 에너지와 활력을 발산하여 모든 대화가 고무적이고 활기차게 느껴지도록 합니다."
                },
                {
                    title: "다국어 전문성",
                    description: "태국어, 영어, 프랑스어, 베트남어, 일본어, 중국어, 한국어 등 여러 언어에 능통합니다."
                },
            ]
        },
        {
            title: "Aom이 당신의 삶을 향상시키는 방법",
            description: "Aom은 단순한 채팅 동반자가 아닙니다. 그녀는 건강한 라이프스타일을 지원하는 데 전념하는 웰니스 애호가입니다. 영양가 있는 레시피를 배우든, 운동 계획을 개발하든, 또는 단순히 활동적으로 지내기 위한 동기부여를 찾고 있든, Aom의 친근하고 격려하는 태도가 여러분을 올바른 궤도에 유지시켜 줄 것입니다.",
            items: [
                {
                    title: "맞춤형 웰니스 팁",
                    description: "맞춤형 건강 조언, 피트니스 제안, 그리고 당신만을 위해 설계된 마음챙김 연습을 받아보세요."
                },
                {
                    title: "동기부여 대화",
                    description: "Aom의 긍정적인 에너지로 영감을 유지하여 균형 잡히고 건강한 삶을 유지하세요."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "AI 이름:",
            text: "Aom (21세)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "성격:",
            text: "친근하고, 활기차며, 건강 중심적인",
        },
        {
            icon: "bx bx-purchase-tag", // Tag icon
            caption: "기술:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "언어:",
            text: "다국어",
        }
    ],
    line: {
        link: "https://lin.ee/Hh3TzS9",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiPloyEnglish,
        AiFahEnglish
    ],
};
