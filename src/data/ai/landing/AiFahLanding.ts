import {IAiLanding} from "@/data/ai/model/landing/IAiLanding";
import {AiBuakaewEnglish} from "@/data/ai/companions/buakaew/AiBuakaewEnglish";
import {AiAomEnglish} from "@/data/ai/companions/aom/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/companions/ploy/AiPloyEnglish";

export const AiFahLanding: IAiLanding = {
    image: {
        src: "/images-ai/ai-fah-details.png",
        alt: "Fah - Thai AI Chat Companion"
    },
    features: [
        {
            title: "Unique Features",
            description: "Fah is your delightful AI companion with a unique Thai touch—she’s cheerful, approachable, and always ready to brighten your day. At 20 years old, Fah brings youthful energy and charm to every interaction. As an expert in Thailand's top destinations, famous dishes, and cultural gems, Fah makes exploring Thai culture effortless and fun. Fluent in seven languages, she’s the perfect friend to chat with on LINE, whether you’re planning your next trip to Thailand or just looking for engaging, friendly conversations. Let Fah be your guide to all things Thai while keeping you inspired with her charm and knowledge.",
            items: [
                {
                    title: "Charming Personality",
                    description: "Fah radiates warmth and positivity, bringing cheerfulness to every conversation."
                },
                {
                    title: "Multilingual Expertise",
                    description: "Communicate seamlessly in 7 languages, including Thai, English, French, Vietnamese, Japanese, Chinese, and Korean."
                },
            ]
        },
        {
            title: "How Fah Enhances Your Life",
            description: "Fah isn't just a chatbot; she's a virtual companion who understands your needs and engages in delightful interactions. Whether you're looking to learn a new language or have a cheerful friend, Fah is here for you.",
            items: [
                {
                    title: "Personalized Conversations",
                    description: "Enjoy tailored interactions that feel natural and human-like."
                },
                {
                    title: "Language Learning Made Fun",
                    description: "Practice languages with a cheerful guide who makes learning enjoyable."
                }
            ]
        },
        {
            title: "Impactful Results",
            description: "Since her launch, Fah has connected with countless users worldwide, showcasing her versatility and warmth. Her integration with LINE and other platforms ensures accessibility and ease of use.",
            items: [
                {
                    title: "User Engagement",
                    description: "Increased user satisfaction through engaging and personalized conversations."
                },
                {
                    title: "Cross-Cultural Communication",
                    description: "Breaking language barriers with effortless multilingual capabilities."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "Character Name:",
            text: "Fah (20 years old)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "Personality:",
            text: "Thai woman, Cheerful, approachable, and charming",
        },
        {
            icon: "bx bx-purchase-tag", // Tag icon
            caption: "Technologies:",
            text: "AI-Powered, LINE, CHORN",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "Languages:",
            text: "7 Languages",
        },
        {
            icon: "bx bx-calendar", // Calendar icon
            caption: "Launch Date:",
            text: "1 January 2025",
        },
        {
            icon: "bx bx-world", // World icon
            caption: "Platforms:",
            text: "LINE, Facebook",
        }
    ],
    relevants: [
        AiBuakaewEnglish,
        AiAomEnglish,
        AiPloyEnglish
    ],
};
