import {IService} from "@/data/service/model/IService";
import {IServiceLink} from "@/data/service/model/IServiceLink";
import {IServiceItem} from "@/data/service/model/IServiceItem";

export const Service2025: IService = {
    title: "AI Solutions Service",
    description: "CHORN specializes in advanced AI agent development, delivering intelligent, responsive solutions tailored to meet specific needs. Expertise includes scalable websites, mobile applications, and full-stack software systems. The <strong>AI-powered</strong> companion technical-expertise via LINE demonstrate the capabilities of these technologies, showcasing innovative approaches to enhancing digital presence and streamlining operational efficiency.",

    services: [
        {
            title: "AI Agent Development",
            description: "Design and deploy intelligent AI agents tailored to integrate seamlessly with your legacy systems, enhancing automation and efficiency."
        },
        {
            title: "Legacy System Integration",
            description: "Modernize existing systems by integrating advanced AI capabilities, ensuring smooth data flow and improved functionality."
        },
        {
            title: "Custom AI Solutions",
            description: "Build bespoke AI models and solutions tailored to meet specific business challenges and operational needs."
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
        title: "AI Chat Companion",
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
