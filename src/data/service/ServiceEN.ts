import {IService} from "@/data/service/model/IService";

export const ServiceEN: IService = {
    title: "LLM-AI Integration",
    description: "Transform business operations with intelligent, responsive LLM-AI agent solutions tailored to specific needs. Robust backend development ensures reliable, scalable, and secure data processing - critical for delivering seamless user experiences across websites, mobile applications, and complex software systems. The <strong>LLM-powered</strong> companion via LINE demonstrates how large language models like ChatGPT, Perplexity, and DeepSeek can enhance digital interactions and streamline operations for both businesses and end-users.",

    services: [
        {
            title: "LLM Agent Development",
            description: "Harness intelligent AI agents powered by advanced LLMs that seamlessly integrate with legacy systems, enhancing automation and efficiency for businesses while providing intuitive interactions for users."
        },
        {
            title: "Legacy System Integration",
            description: "Experience modernized systems with advanced AI capabilities that ensure smooth data flow and improved functionality, making existing infrastructure more valuable and effective."
        },
        {
            title: "Custom LLM Solutions",
            description: "Solve specific business challenges and optimize operations with bespoke AI models that leverage state-of-the-art LLMs, delivering tailored solutions that address unique requirements."
        },
        {
            title: "AI Workflow Automation",
            description: "Save time and resources by streamlining repetitive tasks through AI-driven automation, allowing teams to focus on higher-value activities while improving overall productivity."
        },
        {
            title: "Predictive Analytics and Insights",
            description: "Make better business decisions with AI-powered data pattern analysis that forecasts trends and provides actionable insights, turning raw data into strategic advantages."
        }
    ],

    demo: {
        title: "LLM-AI LINE Integration",
        description: "Experience an AI-powered integration of LLM-AI and LINE. Explore a variety of AI companions, " +
            "each with unique personalities, designed to interact seamlessly via the LINE application. " +
            "These AI companions communicate in multiple languages, including Thai, English, Chinese, " +
            "Japanese, Korean, French, and Vietnamese.",
        link: {
            text: "Check out the demo in action on <a target='_blank' href='https://vt.tiktok.com/ZS6X8PfDT/'>TikTok.</a>",
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
                    description: "Connect with all the available AI companions and enjoy diverse interactions."
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