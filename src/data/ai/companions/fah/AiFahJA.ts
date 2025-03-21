import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";

export const AiFahJA: IAiLanding = {
    name: 'ファー',
    category: 'タイのLINEフレンド',
    thumbnail: '/images-ai/ai-companions/ai-fah-thumbnail.webp',

    pages: {
        landing: {
            link: '/ai-companions/fah',
            image: {
                title: 'ファー、AIチャットフレンド',
                path: '/images-ai/ai-fah-details.png',
            }
        }
    },
    title: "ファー、LINEのAIチャットフレンド",
    image: {
        src: "/images-ai/ai-fah-details.png",
        alt: "ファー - タイスタイルのAIチャットコンパニオン"
    },
    features: [
        {
            title: "ユニークな特徴",
            description: "ファーはLINEアプリケーション上のAIチャットフレンドです。「友達追加」ボタンをクリックするか、LINE QRコードをスキャンするだけで、ファーを友達として追加できます。ファーはタイならではの特徴を持つようにデザインされています—彼女は明るく、親しみやすく、いつもあなたの一日を明るくする準備ができています。20歳のファーは、若いエネルギーと魅力をすべての会話にもたらします。彼女はタイの人気観光スポット、有名な料理、文化的な宝物を紹介し、タイ文化の探索を簡単で楽しいものにします。彼女はLINEアプリケーションを通じて複数の言語でチャットでき、あなたが次のタイ旅行を計画している場合でも、単に魅力的でフレンドリーな会話を求めている場合でも対応します。ファーはあなたにインスピレーションを与えながら、タイに関するすべてのことをガイドします。",
            items: [
                {
                    title: "魅力的な性格",
                    description: "ファーは温かさとポジティブさを放射し、すべての会話に明るさをもたらします。"
                },
                {
                    title: "多言語対応",
                    description: "タイ語、英語、フランス語、ベトナム語、日本語、中国語、韓国語など、複数の言語でシームレスにコミュニケーションできます。"
                },
            ]
        },
        {
            title: "ファーがあなたの生活を豊かにする方法",
            description: "ファーは単なるチャットボットではありません。彼女はあなたのニーズを理解し、楽しい対話に参加する仮想コンパニオンです。新しい言語を学びたい場合でも、明るい友達が欲しい場合でも、ファーはいつもあなたのそばにいます。",
            items: [
                {
                    title: "パーソナライズされた会話",
                    description: "自然で人間らしく感じるカスタマイズされたインタラクションをお楽しみください。"
                },
                {
                    title: "楽しい言語学習",
                    description: "学習を楽しくする明るいガイドと一緒に言語を練習しましょう。"
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "AI名:",
            text: "ファー（20歳）",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "性格:",
            text: "タイ人女性、明るく、親しみやすく、魅力的",
        },
        {
            icon: "bx bx-purchase-tag", // Tag icon
            caption: "テクノロジー:",
            text: "OpenAI、LINEを搭載",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "言語:",
            text: "複数言語対応",
        },
        {
            icon: "bx bx-calendar", // Calendar icon
            caption: "リリース日:",
            text: "2025年1月1日",
        },
        {
            icon: "bx bx-world", // World icon
            caption: "プラットフォーム:",
            text: "OpenAI、LINE、ウェブサイト",
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