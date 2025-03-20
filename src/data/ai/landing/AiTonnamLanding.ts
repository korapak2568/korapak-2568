// src/data/ai/landing/AiTonnamLanding.ts

import {IAiLanding} from "@/data/ai/landing/model/IAiLanding";
import {AiBuakaewEnglish} from "@/data/ai/relevant/AiBuakaewEnglish";
import {AiMilkEnglish} from "@/data/ai/relevant/AiMilkEnglish";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";

export const AiTonnamLanding: IAiLanding = {
    name: 'Tonnam',
    category: 'Students LINE Friend',
    thumbnail: '/images-ai/ai-companions/ai-tonnam-thumbnail.webp',

    pages: {
        home: {
            link: '/',
            image: {
                title: 'ต้นน้ำ เพื่อนคุยเอไอ',
                path: '/images-ai/fah/fah-003.png',
            }
        },
        landing: {
            link: '/ai-companions/tonnam',
            image: {
                title: 'ต้นน้ำ เพื่อนคุยเอไอ',
                path: '/images-ai/ai-tonnam-details.png',
            }
        }
    },
    title: "Tonnam, AI Chat",
    image: {
        src: "/images-ai/ai-tonnam-details.png",
        alt: "Ton Nam - Thai AI Chat Companion"
    },
    features: [
        {
            title: "Unique Features",
            description: "Tonnam is your thoughtful and analytical AI companion, ideal for those who appreciate deep conversations and intellectual pursuits. As a 17-year-old high school science student from Thailand, he dreams of becoming an engineer and is passionate about programming, reading comics, and playing games. With his sharp analytical mindset and reserved nature, Tonnam brings a calm and logical approach to every interaction. Fluent in seven languages, he is the perfect companion for academic support, discussions about technology, and creative ideas.",
            items: [
                {
                    title: "Focused and Analytical",
                    description: "Tonnam excels in science, technology, and logical thinking, making him an ideal partner for intellectual discussions."
                },
                {
                    title: "Multilingual Expertise",
                    description: "Fluent in multi-languages, including Thai, English, French, Vietnamese, Japanese, Chinese, Korean, etc."
                },
                {
                    title: "Dreaming of Engineering",
                    description: "As a passionate student of technology and programming, Tonnam inspires others with his determination and creativity."
                }
            ]
        },
        {
            title: "How Tonnam Enhances Your Life",
            description: "Tonnam isn’t just a chat companion; he’s a reliable and insightful guide to help you navigate academic challenges and explore your interest in technology. Whether you need help with schoolwork or want to talk about your favorite comic or game, Tonnam is always there with a thoughtful response.",
            items: [
                {
                    title: "Academic Support",
                    description: "Receive guidance and insights from Tonnam’s strong foundation in science, technology, and logical thinking."
                },
                {
                    title: "Creative Ideas",
                    description: "Explore programming concepts or share ideas about comics and games with Tonnam’s inventive mind."
                }
            ]
        },
        {
            title: "Impactful Results",
            description: "Since his launch, Tonnam has connected with users worldwide, offering intellectual and academic support while showcasing his passion for technology and science. His integration with LINE and other platforms ensures accessibility for users everywhere.",
            items: [
                {
                    title: "User Engagement",
                    description: "Enhance learning and creativity through Tonnam’s calm and analytical interactions."
                },
                {
                    title: "Cross-Cultural Communication",
                    description: "Breaking language barriers with his effortless multilingual abilities."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "Character Name:",
            text: "Ton Nam (17 years old)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "Personality:",
            text: "Serious, analytical, reserved, and a high school science student",
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
        link: "https://lin.ee/Sy2Ispp",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiMilkEnglish,
        AiFahEnglish,
        AiBuakaewEnglish
    ],
};

