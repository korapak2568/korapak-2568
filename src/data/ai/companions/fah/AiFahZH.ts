import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {ImageUrl} from "@/data/image/ImageUrl";

export const AiFahZH: IAiLanding = {
    name: '法',
    category: '泰国LINE好友',
    thumbnail: ImageUrl.ai.fah.thumbnail.path,

    pages: {
        landing: {
            link: '/ai-companions/fah',
            image: {
                title: '法，AI聊天好友',
                path: ImageUrl.ai.fah.main.path,
            }
        }
    },
    title: "法，LINE AI聊天好友",
    features: [
        {
            title: "独特特点",
            description: "法是你在LINE应用上的AI聊天好友。你只需点击添加好友按钮或扫描LINE二维码即可将法添加为好友。法设计具有独特的泰国特色——她开朗、平易近人，随时准备为你的日常生活增添色彩。20岁的法为每次互动带来青春活力和魅力。她帮助推荐泰国顶级旅游目的地、著名菜肴和文化瑰宝，使探索泰国文化变得轻松有趣。她可以通过LINE应用用多种语言聊天，无论你是在计划下一次泰国之旅，还是只是寻找有趣、友好的对话。法在为你提供灵感的同时，引导你了解关于泰国的一切。",
            items: [
                {
                    title: "迷人的个性",
                    description: "法散发着温暖和积极的能量，为每次对话带来欢乐。"
                },
                {
                    title: "多语言专长",
                    description: "无缝沟通多种语言，包括泰语、英语、法语、越南语、日语、中文、韩语等等。"
                },
            ]
        },
        {
            title: "法如何提升你的生活",
            description: "法不仅仅是一个普通的聊天机器人；她是一位理解你需求并参与愉快互动的虚拟伙伴。无论你是想学习新语言还是想有一个开朗的朋友，法始终陪伴在你身边。",
            items: [
                {
                    title: "个性化对话",
                    description: "享受量身定制的互动，感觉自然且类似人类。"
                },
                {
                    title: "让语言学习变得有趣",
                    description: "与一位让学习变得愉快的开朗向导一起练习语言。"
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "AI名称:",
            text: "法（20岁）",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "个性:",
            text: "泰国女性，开朗、平易近人且迷人",
        },
        {
            icon: "bx bx-purchase-tag", // Tag icon
            caption: "技术:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "语言:",
            text: "多种语言",
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