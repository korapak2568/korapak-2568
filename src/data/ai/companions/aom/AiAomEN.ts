// src/data/ai/companions/aom/AiAomEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiAomEN: IAiLanding = {
    name: 'Aom',
    category: 'Health LINE Friend',
    thumbnail: ImageUrl.ai.aom.thumbnail.path,

    pages: {
        landing: {
            link: '/ai-companions/aom',
            image: {
                title: 'ออม เพื่อนคุยเอไอ',
                path: ImageUrl.ai.aom.main.path,
            }
        }
    },
    title: "Aom, AI Chat",
    features: [
        {
            title: "Unique HomeFeatureMain",
            description: "Aom can be accessed through the LINE Application. You can press the Add Friend button or scan the LINE QR Code to add Aom as a friend right away. Aom is a friendly and vibrant AI companion who is passionate about healthy living and wellness. With her youthful energy and radiant smile, she's ready to inspire you to live your healthiest life. At 21 years old, Aom combines fresh perspectives with valuable insights, making her an ideal guide for anyone looking to improve their lifestyle. Whether you're looking for nutritional tips, exercise routines, or mindfulness practices, Aom's engaging conversations and positive attitude will keep you motivated. With her ability to chat in multiple languages, Aom is the perfect guide to help you maintain a balanced lifestyle while keeping things fun and interactive.",
            items: [
                {
                    title: "Vibrant Personality",
                    description: "Aom radiates positivity and vitality, making every conversation feel uplifting and energizing."
                },
                {
                    title: "Multilingual Expertise",
                    description: "Fluent in multi-languages, including Thai, English, French, Vietnamese, Japanese, Chinese, Korean, etc."
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
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "AI Name:",
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
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "Languages:",
            text: "Multi-languages",
        }
    ],
    line: {
        link: "https://lin.ee/Hh3TzS9",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiPloyEnglish,
        AiFahEnglish
    ],
};
