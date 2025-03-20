import {IAiLanding} from "@/data/ai/landing/model/IAiLanding";
import {AiBuakaewEnglish} from "@/data/ai/relevant/AiBuakaewEnglish";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";

export const AiFahLanding: IAiLanding = {
    name: 'Fah',
    category: 'Thai LINE Friend',
    thumbnail: '/images-ai/ai-companions/ai-fah-thumbnail.webp',

    pages: {
        home: {
            link: '/',
            image: {
                title: 'น้องฟ้า เพื่อนคุยเอไอ',
                path: '/images-ai/fah/fah-003.png',
            }
        },
        landing: {
            link: '/ai-companions/fah',
            image: {
                title: 'น้องฟ้า เพื่อนคุยเอไอ',
                path: '/images-ai/ai-fah-details.png',
            }
        }
    },
    title: "Fah, AI Chat",
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
                    description: "Communicate seamlessly in multi-languages, including Thai, English, French, Vietnamese, Japanese, Chinese, Korean, etc."
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
            text: "AI-Powered, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "Languages:",
            text: "Multi-languages",
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
    line: {
        link: "https://lin.ee/ODTzbwO",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiBuakaewEnglish,
        AiAomEnglish,
        AiPloyEnglish
    ],
};
