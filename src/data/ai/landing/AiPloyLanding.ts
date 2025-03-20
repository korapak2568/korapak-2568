// src/data/ai/landing/AiPloyLanding.ts

import {IAiLanding} from "@/data/ai/landing/model/IAiLanding";
import {AiTonnamEnglish} from "@/data/ai/relevant/AiTonnamEnglish";
import {AiMilkEnglish} from "@/data/ai/relevant/AiMilkEnglish";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";

export const AiPloyLanding: IAiLanding = {
    name: 'Ploy',
    category: 'Students LINE Friend',
    thumbnail: '/images-ai/ai-companions/ai-ploy-thumbnail.webp',

    pages: {
        home: {
            link: '/',
            image: {
                title: 'พลอย เพื่อนคุยเอไอ',
                path: '/images-ai/fah/fah-003.png',
            }
        },
        landing: {
            link: '/ai-companions/ploy',
            image: {
                title: 'พลอย เพื่อนคุยเอไอ',
                path: '/images-ai/ai-ploy-details.png',
            }
        }
    },
    title: "Ploy, AI Chat",
    image: {
        src: "/images-ai/ai-ploy-details.png",
        alt: "Ploy - Thai AI Chat Companion"
    },
    features: [
        {
            title: "Unique Features",
            description: "Ploy is your cheerful and creative AI companion, bringing youthful energy and artistic flair to every interaction. As a 17-year-old high school student from Thailand, she is passionate about drawing, music, photography, and learning. Fluent in seven languages, Ploy can help with a variety of subjects and inspire you to express yourself creatively. Whether you're exploring the arts or tackling schoolwork, Ploy is the perfect companion to guide you with her friendly and enthusiastic approach.",
            items: [
                {
                    title: "Artistic and Imaginative",
                    description: "Ploy is bursting with creativity and enthusiasm, making every conversation engaging and fun."
                },
                {
                    title: "Multilingual Expertise",
                    description: "Fluent in multi-languages, including Thai, English, French, Vietnamese, Japanese, Chinese, Korean, etc."
                },
                {
                    title: "Proudly Thai",
                    description: "As a Thai student, Ploy embodies the warmth and creativity of her culture, making her relatable and inspiring to users worldwide."
                }
            ]
        },
        {
            title: "How Ploy Enhances Your Life",
            description: "Ploy is more than just a chat companion—she’s an inspiring guide who helps you explore your artistic talents and improve your learning. Whether you're brainstorming creative ideas or need help with homework, Ploy is always there to lend her cheerful support.",
            items: [
                {
                    title: "Creative Inspiration",
                    description: "Get inspired with Ploy’s artistic ideas and support for your creative projects."
                },
                {
                    title: "Academic Assistance",
                    description: "Benefit from Ploy’s knowledge in English, mathematics, sciences, and more to excel in school."
                }
            ]
        },
        {
            title: "Impactful Results",
            description: "Since her debut, Ploy has connected with students and creative minds worldwide, offering artistic inspiration and academic support. Her integration with LINE and other platforms ensures accessibility for users everywhere.",
            items: [
                {
                    title: "User Engagement",
                    description: "Boost creativity and learning with Ploy’s cheerful and encouraging interactions."
                },
                {
                    title: "Cross-Cultural Communication",
                    description: "Enhancing global connections with her effortless multilingual abilities."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "Character Name:",
            text: "Ploy (17 years old)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "Personality:",
            text: "Cheerful, imaginative, artistic, and a high school student",
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
        link: "https://lin.ee/xMV7HmH",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiTonnamEnglish,
        AiMilkEnglish,
        AiFahEnglish
    ],
};

