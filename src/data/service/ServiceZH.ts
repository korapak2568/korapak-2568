import {IService} from "@/data/service/model/IService";

export const ServiceZH: IService = {
    title: "LLM-AI 集成",
    description: "通过量身定制的智能响应式 LLM-AI 代理解决方案转变业务运营。强大的后端开发确保可靠、可扩展且安全的数据处理 - 这对于在网站、移动应用和复杂软件系统中提供无缝用户体验至关重要。通过 LINE 的<strong>LLM 驱动</strong>助手展示了 ChatGPT、Perplexity 和 DeepSeek 等大型语言模型如何增强数字交互并为企业和终端用户简化运营。",

    services: [
        {
            title: "LLM 代理开发",
            description: "利用由先进 LLM 驱动的智能 AI 代理，无缝集成到现有系统中，为企业提高自动化和效率的同时为用户提供直观的交互体验。"
        },
        {
            title: "现有系统集成",
            description: "体验通过先进 AI 功能现代化的系统，确保数据流畅通和功能改进，使现有基础设施更有价值和效果。"
        },
        {
            title: "定制 LLM 解决方案",
            description: "利用最先进的 LLM 定制 AI 模型解决特定业务挑战并优化运营，提供满足独特需求的量身定制解决方案。"
        },
        {
            title: "AI 工作流自动化",
            description: "通过 AI 驱动的自动化简化重复任务，节省时间和资源，使团队能够专注于更高价值的活动，同时提高整体生产力。"
        },
        {
            title: "预测分析和洞察",
            description: "借助 AI 驱动的数据模式分析做出更好的业务决策，预测趋势并提供可行洞察，将原始数据转化为战略优势。"
        }
    ],

    demo: {
        title: "LLM-AI LINE 集成",
        description: "体验 AI 驱动的 LLM-AI 和 LINE 集成。探索各种 AI 助手，" +
            "每个助手都有独特的个性，设计用于通过 LINE 应用程序无缝互动。" +
            "这些 AI 助手可以用多种语言交流，包括泰语、英语、中文、" +
            "日语、韩语、法语和越南语。",
        link: {
            text: "在 <a target='_blank' href='https://vt.tiktok.com/ZS6X8PfDT/'>TikTok</a> 上查看演示。",
            href: "https://vt.tiktok.com/ZS6X8PfDT/"
        },
        procedure: {
            title: "使用方法",
            steps: [
                {
                    title: "选择你的 AI 助手",
                    description: "浏览可用 AI 助手列表并选择你最喜欢的一个。"
                },
                {
                    title: "添加 AI 为好友",
                    description: "点击所选 AI 的 '添加好友' 按钮或使用 LINE 应用扫描提供的二维码。"
                },
                {
                    title: "开始聊天",
                    description: "开始与 AI 对话。默认语言为泰语，但 AI 会用你的语言回复并附带泰语翻译。"
                },
                {
                    title: "添加更多助手",
                    description: "与所有可用的 AI 助手建立连接，享受多样化的互动。"
                }
            ]
        },
        note: [
            {
                title: "注意",
                description: "此演示在测试服务器上运行。如果 AI 没有回复你的第一条消息，请继续发送消息直到它回复。"
            },
            {
                title: "",
                description: "立即体验多语言对话，探索每个 AI 助手的独特个性！"
            }]
    }
};