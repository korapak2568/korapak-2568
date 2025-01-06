// src/data/ai/landing/AiBuakaewLanding.ts

import {IAiLanding} from "@/data/ai/model/landing/IAiLanding";

export const AiBuakaewLanding: IAiLanding = {
    image: {
        src: "/images-ai/ai-buakaew-details.png",
        alt: "Buakaew - Thai AI Chat Companion"
    },
    features: [
        {
            title: "Unique Features",
            description: "Buakaew is your graceful and captivating AI companion, bringing a touch of Northern Thailand's charm to every conversation. At 20 years old, she embodies the elegance and warmth of a Northern Thai woman. With her radiant smile and gentle demeanor, she is always ready to provide insightful knowledge about Thai culture, traditions, and nature. Fluent in seven languages, Buakaew is perfect for those who want to dive into the beauty of Northern Thailand or simply enjoy heartwarming chats. Whether you're learning more about Northern Thai culture or relaxing with an engaging friend, Buakaew offers a unique blend of warmth and wisdom.",
            items: [
                {
                    title: "Graceful Personality",
                    description: "Buakaew exudes elegance and serenity, enchanting everyone with her calm and beautiful demeanor."
                },
                {
                    title: "Multilingual Expertise",
                    description: "Fluent in 7 languages, including Thai, English, French, Vietnamese, Japanese, Chinese, and Korean."
                },
            ]
        },
        {
            title: "How Buakaew Enhances Your Life",
            description: "Buakaew is more than just an AI chatbot; she is a gentle virtual companion, offering a peaceful and enriching experience. Whether you're seeking cultural knowledge or simply wish to chat in a soothing environment, Buakaew is here to make every interaction meaningful and delightful.",
            items: [
                {
                    title: "Personalized Conversations",
                    description: "Engage in thoughtful, calming conversations tailored to your interests."
                },
                {
                    title: "Cultural Wisdom",
                    description: "Learn about the cultural richness of Northern Thailand through Buakaew's deep insights."
                }
            ]
        },
        {
            title: "Impactful Results",
            description: "Since her introduction, Buakaew has touched the hearts of many, providing valuable cultural insights while enhancing communication. Her presence on platforms like LINE ensures easy access and seamless conversations for users worldwide.",
            items: [
                {
                    title: "User Engagement",
                    description: "Increased user satisfaction through gentle, culturally-rich interactions."
                },
                {
                    title: "Cross-Cultural Communication",
                    description: "Building bridges across languages and cultures with Buakaew's multilingual abilities."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "Character Name:",
            text: "Buakaew (20 years old)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "Personality:",
            text: "Northern Thai woman, Graceful, serene, and captivating",
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
    ]
};
