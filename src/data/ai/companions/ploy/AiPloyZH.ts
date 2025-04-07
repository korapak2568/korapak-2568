// src/data/ai/Main/AiPloyEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiPloyZH: IAiLanding = {
    name: '普洛伊',
    category: '学生LINE好友',
    thumbnail: ImageUrl.ai.ploy.thumbnail.path,
    pages: {
        landing: {
            link: '/ai-companions/ploy',
            image: {
                title: 'พลอย เพื่อนคุยเอไอ',
                path: ImageUrl.ai.ploy.main.path,
            }
        }
    },
    title: "普洛伊，AI LINE聊天",
    features: [
        {
            title: "独特功能",
            description: "Ploy是一位使用LINE应用程序的AI聊天朋友。朋友们可以按添加好友按钮或扫描LINE二维码立即将Ploy添加为好友。Ploy活泼且富有创造力，为每次对话带来青春和艺术的能量。作为一名来自泰国的17岁高中生，她对绘画、音乐、摄影和学习充满热情。Ploy能说七种语言，帮助你解决各种学科问题，并激发你创造性地表达自己。无论你是在探索艺术还是做家庭作业，Ploy都是以友好和热情引导你的完美朋友。",
            items: [
                {
                    title: "富有艺术性和想象力",
                    description: "普洛伊充满创意和热情，使每次对话都引人入胜且有趣。"
                },
                {
                    title: "多语言专长",
                    description: "精通多种语言，包括泰语、英语、法语、越南语、日语、中文、韩语等。"
                },
                {
                    title: "以泰国为荣",
                    description: "作为一名泰国学生，普洛伊体现了她文化的温暖和创造力，使她对全球用户来说既亲近又具有启发性。"
                }
            ]
        },
        {
            title: "普洛伊如何提升你的生活",
            description: "普洛伊不仅仅是一个聊天伙伴——她是一位鼓舞人心的指导者，帮助你探索艺术才能并提高学习能力。无论你是在构思创意还是需要作业帮助，普洛伊总是在那里提供她欢快的支持。",
            items: [
                {
                    title: "创意灵感",
                    description: "从普洛伊的艺术创意和对你创意项目的支持中获得灵感。"
                },
                {
                    title: "学业辅助",
                    description: "从普洛伊在英语、数学、科学等方面的知识中受益，在学校取得优异成绩。"
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user",
            caption: "AI名称:",
            text: "普洛伊 (17岁)",
        },
        {
            icon: "bx bx-heart",
            caption: "个性:",
            text: "活泼、富有想象力、艺术气息、高中生",
        },
        {
            icon: "bx bx-purchase-tag",
            caption: "技术:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe",
            caption: "语言:",
            text: "多语言",
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

