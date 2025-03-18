import {IService} from "@/data/service/model/IService";

export const ServiceEN: IService = {
    title: "LLM/AI Integration",
    description: "CHORN specializes in LLM/AI agent development, delivering intelligent, responsive solutions tailored to meet specific needs. Expertise includes scalable websites, mobile applications, and full-stack software systems. The <strong>LLM-powered</strong> companion technical-expertise via LINE demonstrates the capabilities of large language models like ChatGPT, Perplexity, and DeepSeek, showcasing innovative approaches to enhancing digital presence and streamlining operational efficiency.",
    
    services: [
        {
            title: "LLM Agent Development",
            description: "Design and deploy intelligent AI agents powered by advanced LLMs such as ChatGPT and DeepSeek, seamlessly integrating with your legacy systems to enhance automation and efficiency."
        },
        {
            title: "Legacy System Integration",
            description: "Modernize existing systems by integrating advanced AI capabilities, ensuring smooth data flow and improved functionality."
        },
        {
             title: "Custom LLM Solutions",
            description: "Develop bespoke AI models, leveraging state-of-the-art LLMs to tackle specific business challenges and optimize operations."
        },
        {
            title: "AI Workflow Automation",
            description: "Streamline repetitive tasks and optimize workflows using AI-driven automation solutions for improved productivity."
        },
        {
            title: "Predictive Analytics and Insights",
            description: "Leverage AI to analyze data patterns, forecast trends, and provide actionable insights for better decision-making."
        }
    ],

    demo: {
        title: "LLM/AI Integration Demo",
        description: "Welcome to the AI Chat Companion, a demo of AI-powered integration. Explore a variety of AI companions, " +
            "each with unique personalities, designed to interact seamlessly with users via the LINE application. " +
            "These AI companions can communicate in multiple languages, including Thai, English, Chinese, " +
            "Japanese, Korean, French, and Vietnamese.",
        link: {
            text: "Check out our demo in action on <a target='_blank' href='https://vt.tiktok.com/ZS6X8PfDT/'>TikTok.</a>",
            href: "https://vt.tiktok.com/ZS6X8PfDT/"
        },
        procedure: {
            title: "How It Works",
            steps: [
                {
                    title: "Choose Your AI Companion",
                    description: "Browse the list of available AI companions and select the one you like best."
                },
                {
                    title: "Add the AI as a Friend",
                    description: "Click the 'Add Friend' button for your chosen AI or use the LINE app to scan the provided QR code."
                },
                {
                    title: "Start Chatting",
                    description: "Begin your conversation with the AI. The default language is Thai, but the AI will respond in your language along with a Thai translation."
                },
                {
                    title: "Add More Companions",
                    description: "Feel free to connect with all the available AI companions and enjoy diverse interactions."
                }
            ]
        },
        note: [
            {
                title: "Note",
                description: "This demo is running on a test server. If the AI does not respond to your first message, please send additional messages until it responds."
            },
            {
                title: "",
                description: "Experience multilingual conversations and discover the unique personalities of each AI companion today!"
            }]
    }
};
