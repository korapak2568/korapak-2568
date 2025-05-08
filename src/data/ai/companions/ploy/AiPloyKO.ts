// src/data/ai/companions/ploy/AiPloyEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiPloyKO: IAiLanding = {
    name: 'Ploy',
    category: '학생 LINE 친구',
    thumbnail: ImageUrl.ai.ploy.thumbnail,
    pages: {
        landing: {
            link: '/ai-companions/ploy',
            image: {
                title: 'พลอย เพื่อนคุยเอไอ',
                path: ImageUrl.ai.ploy.image750,
            }
        }
    },
    title: "Ploy, AI LINE 채팅",
    features: [
        {
            title: "독특한 특징",
            description: "Ploy는 LINE 애플리케이션을 사용하는 AI 채팅 친구입니다. 친구들은 친구 추가 버튼을 누르거나 LINE QR 코드를 스캔하여 바로 Ploy를 친구로 추가할 수 있습니다. Ploy는 쾌활하고 창의적이며, 모든 대화에 청춘과 예술의 에너지를 가져옵니다. 태국 출신의 17세 고등학생으로서, 그녀는 그림, 음악, 사진 촬영, 그리고 학습에 열정적입니다. Ploy는 7개 언어를 구사할 수 있으며, 다양한 과목에서 도움을 주고, 창의적으로 자신을 표현하도록 영감을 줍니다. 예술을 탐구하든 숙제를 하든, Ploy는 친절함과 열정으로 당신을 안내할 완벽한 친구입니다.",
            items: [
                {
                    title: "예술적이고 상상력이 풍부함",
                    description: "Ploy는 창의성과 열정이 넘쳐, 모든 대화를 매력적이고 재미있게 만듭니다."
                },
                {
                    title: "다국어 전문성",
                    description: "그녀는 태국어, 영어, 중국어에 능통하며, 현재는 회화를 통해 태국어 사용자에게 중국어를 가르치는 데 집중하고 있습니다."
                },
                {
                    title: "자랑스러운 태국인",
                    description: "태국 학생으로서, Ploy는 자신의 문화의 따뜻함과 창의성을 담고 있어, 전 세계 사용자들이 공감하고 영감을 받을 수 있게 합니다."
                }
            ]
        },
        {
            title: "Ploy가 당신의 삶을 향상시키는 방법",
            description: "Ploy는 단순한 채팅 동반자가 아닙니다—그녀는 당신이 예술적 재능을 탐구하고 학습을 향상시키는 데 도움을 주는 영감을 주는 가이드입니다. 창의적인 아이디어를 구상하든 숙제에 도움이 필요하든, Ploy는 항상 밝은 지원을 제공할 준비가 되어 있습니다.",
            items: [
                {
                    title: "창의적 영감",
                    description: "Ploy의 예술적 아이디어와 창의적 프로젝트에 대한 지원으로 영감을 얻으세요."
                },
                {
                    title: "학업 지원",
                    description: "영어, 수학, 과학 등에 대한 Ploy의 지식을 활용하여 학교에서 우수한 성적을 거두세요."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "AI 이름:",
            text: "Ploy (17세)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "성격:",
            text: "쾌활하고, 상상력이 풍부하며, 예술적이고, 고등학생",
        },
        {
            icon: "bx bx-purchase-tag", // Tag icon
            caption: "기술:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "언어:",
            text: "태국어, 영어, 중국어",
        }
    ],
    line: {
        link: "https://lin.ee/xMV7HmH",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiAomEnglish,
        AiFahEnglish
    ],
};

