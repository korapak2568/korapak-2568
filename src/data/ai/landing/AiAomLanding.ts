// src/data/ai/landing/AiAomLanding.ts

import {IAiLanding} from "@/data/ai/model/landing/IAiLanding";
import {AiPloyEnglish} from "@/data/ai/companions/ploy/AiPloyEnglish";
import {AiTonnamEnglish} from "@/data/ai/companions/tonnam/AiTonnamEnglish";
import {AiMilkEnglish} from "@/data/ai/companions/milk/AiMilkEnglish";

export const AiAomLanding: IAiLanding = {
    image: {
        src: "/images-ai/ai-aom-details.png",
        alt: "Aom - Thai AI Chat Companion"
    },
    features: [
        {
            title: "Unique Features",
            description: "Aom is your friendly and vibrant AI companion, passionate about healthy living and wellness. With her youthful energy and radiant smile, she’s here to inspire you to live your healthiest life. At 21 years old, Aom combines her fresh perspective with valuable insights, making her an ideal guide for anyone looking to improve their lifestyle. Whether you're looking for tips on nutrition, fitness routines, or mindfulness practices, Aom's engaging conversations and positive attitude are sure to keep you motivated. Fluent in seven languages, Aom is the perfect guide to help you maintain a balanced lifestyle while keeping things fun and interactive.",
            items: [
                {
                    title: "Vibrant Personality",
                    description: "Aom radiates positivity and vitality, making every conversation feel uplifting and energizing."
                },
                {
                    title: "Multilingual Expertise",
                    description: "Fluent in 7 languages, including Thai, English, French, Vietnamese, Japanese, Chinese, and Korean."
                },
            ]
        },
        {
            title: "How Aom Enhances Your Life",
            description: "Aom isn’t just a chat companion—she’s a wellness enthusiast dedicated to supporting your healthy lifestyle. Whether you're learning about nutritious recipes, developing a workout plan, or simply seeking motivation to stay active, Aom’s friendly and encouraging demeanor will keep you on track.",
            items: [
                {
                    title: "Personalized Wellness Tips",
                    description: "Receive tailored health advice, fitness suggestions, and mindfulness practices designed just for you."
                },
                {
                    title: "Motivational Conversations",
                    description: "Stay inspired with Aom's positive energy, helping you maintain a balanced and healthy life."
                }
            ]
        },
        {
            title: "Impactful Results",
            description: "Since her launch, Aom has become a trusted companion for those seeking a healthy lifestyle. Her ability to connect with users worldwide through LINE and other platforms ensures that maintaining wellness is accessible to all.",
            items: [
                {
                    title: "User Engagement",
                    description: "Increased motivation and satisfaction through Aom's uplifting and personalized conversations."
                },
                {
                    title: "Health-Focused Guidance",
                    description: "Helping users live healthier, more balanced lives with her practical wellness tips."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "Character Name:",
            text: "Aom (21 years old)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "Personality:",
            text: "Friendly, energetic, and health-focused",
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
        AiPloyEnglish,
        AiTonnamEnglish,
        AiMilkEnglish
    ],
};
