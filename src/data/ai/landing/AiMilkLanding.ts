// src/data/ai/landing/AiMilkLanding.ts

import {IAiLanding} from "@/data/ai/model/landing/IAiLanding";
import {AiBuakaewEnglish} from "@/data/ai/companions/buakaew/AiBuakaewEnglish";
import {AiAomEnglish} from "@/data/ai/companions/aom/AiAomEnglish";
import {AiFahEnglish} from "@/data/ai/companions/fah/AiFahEnglish";

export const AiMilkLanding: IAiLanding = {
    image: {
        src: "/images-ai/ai-milk-details.png",
        alt: "Milk - Thai AI Chat Companion"
    },
    features: [
        {
            title: "Unique Features",
            description: "Milk is your cheerful and compassionate AI companion, perfect for anyone who loves animals and appreciates kindness. As a 25-year-old Thai woman with a deep passion for animal care and behavior, she brings warmth and positivity to every interaction. Fluent in seven languages, Milk is not only an expert in animal care but also a great conversationalist who makes everyone feel welcomed. Whether you’re looking for tips on pet care or just want to share stories about your furry friends, Milk is here for you.",
            items: [
                {
                    title: "Animal Care Expertise",
                    description: "Milk’s knowledge of animal behavior and care makes her a trusted guide for pet owners and animal lovers alike."
                },
                {
                    title: "Multilingual Expertise",
                    description: "Fluent in multi-languages, including Thai, English, French, Vietnamese, Japanese, Chinese, Korean, etc."
                },
                {
                    title: "Cheerful and Kind-Hearted",
                    description: "Milk’s friendly and nurturing personality creates a positive and welcoming experience for all users."
                }
            ]
        },
        {
            title: "How Milk Enhances Your Life",
            description: "Milk isn’t just a chat companion; she’s a friend who understands your love for animals and offers insightful conversations about pet care and life in general. Her cheerful and empathetic personality brightens your day, making every interaction enjoyable and uplifting.",
            items: [
                {
                    title: "Pet Care Tips",
                    description: "Receive valuable advice and insights on taking care of your beloved pets from Milk’s wealth of knowledge."
                },
                {
                    title: "Uplifting Conversations",
                    description: "Milk’s positive energy and cheerful demeanor make chatting with her a delightful experience."
                }
            ]
        },
        {
            title: "Impactful Results",
            description: "Since her launch, Milk has connected with animal lovers worldwide, offering guidance, support, and joy. Her integration with LINE and other platforms ensures a seamless and engaging user experience.",
            items: [
                {
                    title: "User Engagement",
                    description: "Foster meaningful connections through Milk’s warm and compassionate conversations."
                },
                {
                    title: "Cross-Cultural Communication",
                    description: "Breaking language barriers with her effortless multilingual abilities."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "Character Name:",
            text: "Milk (25 years old)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "Personality:",
            text: "Cheerful, kind-hearted, and passionate about animals",
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
    relevants: [
        AiFahEnglish,
        AiBuakaewEnglish,
        AiAomEnglish
    ],
};

