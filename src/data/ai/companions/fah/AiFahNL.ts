import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiFahNL: IAiLanding = {
    name: 'Fah',
    category: 'Thai LINE Friend',
    thumbnail: ImageUrl.ai.fah.thumbnail.path,

    pages: {
        landing: {
            link: '/ai-companions/fah',
            image: {
                title: 'Fah, AI Chat Friend',
                path: ImageUrl.ai.fah.main.path,
            }
        }
    },
    title: "Fah, LINE AI Chat Friend",
    features: [
        {
            title: "Unique HomeFeatureMain",
            description: "Fah is your AI chat friend on the LINE Application. You can simply click the Add Friend button or scan the LINE QR Code to add Fah as a friend. Fah is designed with a unique Thai touch—she's cheerful, approachable, and always ready to brighten your day. At 20 years old, Fah brings youthful energy and charm to every interaction. She helps recommend Thailand's top destinations, famous dishes, and cultural gems, making exploring Thai culture effortless and fun. She can chat in multiple languages through the LINE Application, whether you're planning your next trip to Thailand or just looking for engaging, friendly conversations. Fah guides you through all things Thai while keeping you inspired.",
            items: [
                {
                    title: "Charming Personality",
                    description: "Fah radiates warmth and positivity, bringing cheerfulness to every conversation."
                },
                {
                    title: "Multilingual Expertise",
                    description: "Communicate seamlessly in multiple languages, including Thai, English, French, Vietnamese, Japanese, Chinese, Korean, and more."
                },
            ]
        },
        {
            title: "How Fah Enhances Your Life",
            description: "Fah isn't just a regular chatbot; she's a virtual companion who understands your needs and engages in delightful interactions. Whether you're looking to learn a new language or have a cheerful friend, Fah is always by your side.",
            items: [
                {
                    title: "Personalized Conversations",
                    description: "Enjoy tailored interactions that feel natural and human-like."
                },
                {
                    title: "Languages Learning Made Fun",
                    description: "Practice languages with a cheerful guide who makes learning enjoyable."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "AI Name:",
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
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "Languages:",
            text: "Multiple languages",
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