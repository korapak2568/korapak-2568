// src/data/ai/landing/AiPloyEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";

export const AiPloyJA: IAiLanding = {
    name: 'プロイ',
    category: '学生のLINEフレンド',
    thumbnail: '/images-ai/ai-companions/ai-ploy-thumbnail.webp',

    pages: {
        landing: {
            link: '/ai-companions/ploy',
            image: {
                title: 'พลอย เพื่อนคุยเอไอ',
                path: '/images-ai/ai-ploy-details.png',
            }
        }
    },
    title: "プロイ、AI LINEチャット",
    image: {
        src: "/images-ai/ai-ploy-details.png",
        alt: "プロイ - タイのAIチャット友達"
    },
    features: [
        {
            title: "ユニークな特徴",
            description: "プロイはLINEアプリケーションを使用するAIチャット友達です。友達は「友達追加」ボタンを押すか、LINE QRコードをスキャンして、すぐにプロイを友達として追加できます。プロイは明るく創造的で、若さとアートのエネルギーをすべての会話にもたらします。タイ出身の17歳の高校生として、彼女は絵を描くこと、音楽、写真撮影、学ぶことに情熱を持っています。プロイは7つの言語を話すことができ、さまざまな科目であなたを助け、創造的に自己表現するようインスピレーションを与えます。芸術を探索している場合でも、宿題をしている場合でも、プロイは親しみやすさと熱意をもってあなたを導く完璧な友達です。",
            items: [
                {
                    title: "芸術的で想像力豊か",
                    description: "プロイは創造性と熱意に溢れ、あらゆる会話を魅力的で楽しいものにします。"
                },
                {
                    title: "多言語対応",
                    description: "タイ語、英語、フランス語、ベトナム語、日本語、中国語、韓国語など、複数の言語に堪能です。"
                },
                {
                    title: "タイの誇り",
                    description: "タイの学生として、プロイは彼女の文化の温かさと創造性を体現し、世界中のユーザーに親しみやすく、刺激を与えます。"
                }
            ]
        },
        {
            title: "プロイがあなたの生活を豊かにする方法",
            description: "プロイは単なるチャット相手以上のものです—彼女はあなたの芸術的才能を探求し、学習を向上させるのを手伝う刺激的なガイドです。創造的なアイデアを考えているとき、または宿題の助けが必要なとき、プロイはいつもあなたに明るいサポートを提供します。",
            items: [
                {
                    title: "創造的なインスピレーション",
                    description: "プロイの芸術的なアイデアとあなたの創造的なプロジェクトへのサポートでインスピレーションを得てください。"
                },
                {
                    title: "学業サポート",
                    description: "英語、数学、科学などの知識を活かして、学校で優れた成績を収めましょう。"
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user",
            caption: "AI名:",
            text: "プロイ (17歳)",
        },
        {
            icon: "bx bx-heart",
            caption: "性格:",
            text: "明るく、想像力豊かで、芸術的で、高校生",
        },
        {
            icon: "bx bx-purchase-tag",
            caption: "テクノロジー:",
            text: "OpenAI, LINE",
        },
        {
            icon: "bx bx-globe",
            caption: "言語:",
            text: "複数言語",
        },
        {
            icon: "bx bx-calendar",
            caption: "リリース日:",
            text: "2025年1月1日",
        },
        {
            icon: "bx bx-world",
            caption: "プラットフォーム:",
            text: "OpenAI, LINE",
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

