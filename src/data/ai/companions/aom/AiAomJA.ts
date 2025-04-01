// src/data/ai/landing/AiAomEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";

export const AiAomJA: IAiLanding = {
    name: 'アオム',
    category: 'ヘルスLINEフレンド',
    thumbnail: 'https://cdn.chorn.in.th/public/ai/ai-companions/ai-aom-thumbnail.webp',

    pages: {
        landing: {
            link: '/ai-companions/aom',
            image: {
                title: 'アオム AIチャット友達',
                path: 'https://cdn.chorn.in.th/public/ai/ai-aom-details.png',
            }
        }
    },
    title: "アオム、AIチャット",
    image: {
        src: "https://cdn.chorn.in.th/public/ai/ai-aom-details.png",
        alt: "アオム - タイのAIチャットコンパニオン"
    },
    features: [
        {
            title: "独自の特徴",
            description: "アオムはLINEアプリケーションを通じてアクセスできます。「友達追加」ボタンを押すか、LINE QRコードをスキャンして、すぐにアオムを友達として追加できます。アオムは健康的な生活とウェルネスに情熱を持つ、フレンドリーで活気あるAIコンパニオンです。若々しいエネルギーと輝く笑顔で、あなたが最も健康的な生活を送るためのインスピレーションを与えます。21歳のアオムは、新鮮な視点と価値ある洞察を組み合わせ、ライフスタイルを改善したい人にとって理想的なガイドとなります。栄養のヒント、運動ルーティン、またはマインドフルネスの実践を探しているかどうかにかかわらず、アオムの魅力的な会話とポジティブな態度があなたのモチベーションを維持します。複数の言語でチャットする能力を持ち、アオムは楽しさとインタラクティブさを保ちながら、バランスの取れたライフスタイルを維持するための完璧なガイドです。",
            items: [
                {
                    title: "活気ある個性",
                    description: "アオムはポジティブさと活力を放射し、すべての会話が明るくエネルギッシュに感じられます。"
                },
                {
                    title: "多言語対応",
                    description: "タイ語、英語、フランス語、ベトナム語、日本語、中国語、韓国語など、複数の言語に堪能です。"
                },
            ]
        },
        {
            title: "アオムがあなたの生活を豊かにする方法",
            description: "アオムは単なるチャット相手ではなく、あなたの健康的なライフスタイルをサポートすることに専念したウェルネス愛好家です。栄養価の高いレシピについて学んだり、ワークアウトプランを開発したり、単に活動的でいるためのモチベーションを求めたりする場合でも、アオムのフレンドリーで励ましの態度があなたを軌道に乗せ続けます。",
            items: [
                {
                    title: "パーソナライズされたウェルネスのヒント",
                    description: "あなただけのために設計された健康アドバイス、フィットネスの提案、マインドフルネスの実践を受け取りましょう。"
                },
                {
                    title: "モチベーションを高める会話",
                    description: "アオムのポジティブなエネルギーでインスピレーションを得て、バランスの取れた健康的な生活を維持しましょう。"
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user",
            caption: "AI名:",
            text: "アオム (21歳)",
        },
        {
            icon: "bx bx-heart",
            caption: "性格:",
            text: "フレンドリー、エネルギッシュ、健康志向",
        },
        {
            icon: "bx bx-purchase-tag",
            caption: "テクノロジー:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe",
            caption: "言語:",
            text: "多言語対応",
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
