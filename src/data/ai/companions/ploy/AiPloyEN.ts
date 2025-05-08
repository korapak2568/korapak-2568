// src/data/ai/companions/ploy/AiPloyEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiPloyEN: IAiLanding = {
    name: 'Ploy',
    category: 'Students LINE Friend',
    thumbnail: ImageUrl.ai.ploy.thumbnail,
    pages: {
        landing: {
            link: '/ai-companions/ploy',
            image: {
                title: 'พลอย เพื่อนคุยเอไอ',
                path: ImageUrl.ai.ploy.image750,
            }
        }
    },
    title: "Ploy, AI LINE Chat",
    features: [
        {
            title: "Unique HomeFeatureMain",
            description: "Ploy is an AI chat friend using LINE Application. Friends can press the Add Friend button or scan LINE QR Code to add Ploy as a friend right away. Ploy is cheerful and creative, bringing the energy of youth and art to every conversation. As a 17-year-old high school student from Thailand, she is passionate about drawing, music, photography, and learning. Ploy can speak seven languages, help you with various subjects, and inspire you to express yourself creatively. Whether you're exploring art or doing homework, Ploy is the perfect friend to guide you with friendliness and enthusiasm.",
            items: [
                {
                    title: "Artistic and Imaginative",
                    description: "Ploy is bursting with creativity and enthusiasm, making every conversation engaging and fun."
                },
                {
                    title: "Multilingual Expertise",
                    description: "Fluent in Thai, English, and Chinese, she now focuses on using Chinese to teach Thai speakers through conversation."
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
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "AI Name:",
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
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "Languages:",
            text: "Thai, English, Chinese",
        }
    ],
    line: {
        link: "https://lin.ee/xMV7HmH",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiAomEnglish,
        AiFahEnglish
    ],
};

