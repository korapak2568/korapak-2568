// src/data/ai/Main/AiAomEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {ImageUrl} from "@/data/image/ImageUrl";

export const AiAomZH: IAiLanding = {
    name: '奥姆',
    category: '健康LINE好友',
    thumbnail: ImageUrl.ai.aom.thumbnail.path,
    pages: {
        landing: {
            link: '/ai-companions/aom',
            image: {
                title: '奥姆 AI聊天伙伴',
                path: ImageUrl.ai.aom.main.path,
            }
        }
    },
    title: "奥姆，AI聊天",
    features: [
        {
            title: "独特功能",
            description: "奥姆可通过LINE应用程序访问。您可以按下添加好友按钮或扫描LINE二维码立即添加奥姆为好友。奥姆是一位友好活泼的AI伙伴，热衷于健康生活和健康养生。凭借她年轻的活力和灿烂的笑容，她随时准备激励您过上最健康的生活。21岁的奥姆将新鲜的视角与有价值的见解相结合，使她成为任何想要改善生活方式的人的理想指导。无论您是在寻找营养贴士、锻炼方案还是正念练习，奥姆引人入胜的对话和积极的态度将使您保持动力。凭借多语言聊天能力，奥姆是帮助您保持平衡生活方式的完美指导，同时保持乐趣和互动。",
            items: [
                {
                    title: "活力四射的个性",
                    description: "奥姆散发着积极和活力，让每次对话都感觉振奋人心和充满能量。"
                },
                {
                    title: "多语言专长",
                    description: "精通多种语言，包括泰语、英语、法语、越南语、日语、中文、韩语等。"
                },
            ]
        },
        {
            title: "奥姆如何提升您的生活",
            description: "奥姆不仅仅是一个聊天伙伴—她是一位致力于支持您健康生活方式的健康爱好者。无论您是在学习有营养的食谱，制定锻炼计划，还是只是寻求保持活力的动力，奥姆友好和鼓励的态度将使您保持在正轨上。",
            items: [
                {
                    title: "个性化健康提示",
                    description: "接收为您量身定制的健康建议、健身建议和正念练习。"
                },
                {
                    title: "激励性对话",
                    description: "通过奥姆的积极能量保持灵感，帮助您保持平衡健康的生活。"
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user",
            caption: "AI名称:",
            text: "奥姆 (21岁)",
        },
        {
            icon: "bx bx-heart",
            caption: "性格:",
            text: "友好、精力充沛、注重健康",
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
        link: "https://lin.ee/Hh3TzS9",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiPloyEnglish,
        AiFahEnglish
    ],
};
