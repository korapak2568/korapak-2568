import {IService} from "@/data/service/model/IService";

export const ServiceZH: IService = {
    title: "LLM/AI集成",
    description: "CHORN专注于LLM/AI代理开发，提供智能、响应迅速的解决方案，量身定制以满足特定需求。专业知识包括可扩展网站、移动应用程序和全栈软件系统。通过LINE提供的<strong>由LLM驱动</strong>的技术专业知识伴侣展示了ChatGPT、Perplexity和DeepSeek等大型语言模型的能力，展示了增强数字存在和简化运营效率的创新方法。",

    services: [
        {
            title: "LLM代理开发",
            description: "设计和部署由ChatGPT和DeepSeek等先进LLM驱动的智能AI代理，与您的遗留系统无缝集成，以提高自动化和效率。"
        },
        {
            title: "遗留系统集成",
            description: "通过集成先进的AI功能来现代化现有系统，确保数据流畅通和功能改进。"
        },
        {
            title: "定制LLM解决方案",
            description: "开发定制AI模型，利用最先进的LLM解决特定业务挑战并优化运营。"
        },
        {
            title: "AI工作流自动化",
            description: "使用AI驱动的自动化解决方案简化重复任务并优化工作流程，提高生产力。"
        },
        {
            title: "预测分析和洞察",
            description: "利用AI分析数据模式，预测趋势，并提供可执行的洞察，以便更好地决策。"
        }
    ],

    demo: {
        title: "LLM/AI集成演示",
        description: "欢迎来到AI聊天伙伴，这是一个AI驱动集成的演示。探索各种AI伙伴，" +
            "每个伙伴都有独特的个性，旨在通过LINE应用程序与用户无缝互动。" +
            "这些AI伙伴可以用多种语言交流，包括泰语、英语、中文、" +
            "日语、韩语、法语和越南语。",
        link: {
            text: "在<a target='_blank' href='https://vt.tiktok.com/ZS6X8PfDT/'>TikTok</a>上查看我们的演示。",
            href: "https://vt.tiktok.com/ZS6X8PfDT/"
        },
        procedure: {
            title: "运作方式",
            steps: [
                {
                    title: "选择你的AI伙伴",
                    description: "浏览可用的AI伙伴列表，选择你最喜欢的一个。"
                },
                {
                    title: "将AI添加为好友",
                    description: "点击你所选AI的 '添加好友' 按钮，或使用LINE应用扫描提供的二维码。"
                },
                {
                    title: "开始聊天",
                    description: "开始与AI对话。默认语言是泰语，但AI会用你的语言回应，并附上泰语翻译。"
                },
                {
                    title: "添加更多伙伴",
                    description: "随时连接所有可用的AI伙伴，享受多样化的互动。"
                }
            ]
        },
        note: [
            {
                title: "注意",
                description: "此演示运行在测试服务器上。如果AI没有回应你的第一条消息，请继续发送额外的消息，直到它回应。"
            },
            {
                title: "",
                description: "今天就体验多语言对话，发现每个AI伙伴的独特个性！"
            }]
    }
};
