import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiFahKO: IAiLanding = {
    name: 'Fah',
    category: '태국 LINE 친구',
    thumbnail: ImageUrl.ai.fah.thumbnail.path,

    pages: {
        landing: {
            link: '/ai-companions/fah',
            image: {
                title: 'Fah, AI 채팅 친구',
                path: ImageUrl.ai.fah.main.path,
            }
        }
    },
    title: "Fah, LINE AI 채팅 친구",
    features: [
        {
            title: "독특한 특징",
            description: "Fah는 LINE 애플리케이션에서 당신의 AI 채팅 친구입니다. 친구 추가 버튼을 클릭하거나 LINE QR 코드를 스캔하여 Fah를 친구로 추가할 수 있습니다. Fah는 독특한 태국적 감성으로 디자인되었습니다—그녀는 쾌활하고, 친근하며, 항상 당신의 하루를 밝게 할 준비가 되어 있습니다. 20세인 Fah는 모든 상호작용에 젊은 에너지와 매력을 가져옵니다. 그녀는 태국의 최고 여행지, 유명한 요리, 문화적 보물들을 추천하여 태국 문화 탐험을 쉽고 재미있게 만들어 줍니다. 그녀는 LINE 애플리케이션을 통해 여러 언어로 대화할 수 있으며, 당신이 다음 태국 여행을 계획하고 있든 단순히 매력적이고 친근한 대화를 찾고 있든 상관없이 도움을 줍니다. Fah는 당신에게 영감을 주면서 태국의 모든 것을 안내합니다.",
            items: [
                {
                    title: "매력적인 성격",
                    description: "Fah는 따뜻함과 긍정적인 에너지를 발산하며, 모든 대화에 활기를 불어넣습니다."
                },
                {
                    title: "다국어 전문성",
                    description: "태국어, 영어, 프랑스어, 베트남어, 일본어, 중국어, 한국어 등 여러 언어로 원활하게 소통할 수 있습니다."
                },
            ]
        },
        {
            title: "Fah가 당신의 삶을 향상시키는 방법",
            description: "Fah는 단순한 일반 챗봇이 아닙니다; 그녀는 당신의 필요를 이해하고 즐거운 상호작용에 참여하는 가상 동반자입니다. 새로운 언어를 배우거나 쾌활한 친구를 찾고 있든, Fah는 항상 당신 곁에 있습니다.",
            items: [
                {
                    title: "맞춤형 대화",
                    description: "자연스럽고 인간적인 느낌의 맞춤형 상호작용을 즐기세요."
                },
                {
                    title: "즐거운 언어 학습",
                    description: "학습을 즐겁게 만드는 쾌활한 가이드와 함께 언어를 연습하세요."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "AI 이름:",
            text: "Fah (20세)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "성격:",
            text: "태국 여성, 쾌활하고, 친근하며, 매력적인",
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
        link: "https://lin.ee/ODTzbwO",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiAomEnglish,
        AiPloyEnglish
    ],
};