// src/data/ai/landing/AiAomEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {ImageUrl} from "@/data/image/ImageUrl";

export const AiAomFR: IAiLanding = {
    name: 'Aom',
    category: 'Amie Santé sur LINE',
    thumbnail: ImageUrl.ai.aom.thumbnail.path,

    pages: {
        landing: {
            link: '/ai-companions/aom',
            image: {
                title: 'Aom, Compagne IA',
                path: ImageUrl.ai.aom.main.path,
            }
        }
    },
    title: "Aom, Discussion IA",
    features: [
        {
            title: "Caractéristiques Uniques",
            description: "Aom est accessible via l'application LINE. Vous pouvez appuyer sur le bouton Ajouter un ami ou scanner le code QR LINE pour ajouter Aom comme amie immédiatement. Aom est une compagne IA amicale et dynamique, passionnée par la vie saine et le bien-être. Avec son énergie juvénile et son sourire radieux, elle est prête à vous inspirer pour vivre votre vie la plus saine. À 21 ans, Aom combine des perspectives fraîches avec des insights précieux, ce qui fait d'elle un guide idéal pour quiconque cherche à améliorer son style de vie. Que vous recherchiez des conseils nutritionnels, des routines d'exercice ou des pratiques de pleine conscience, les conversations engageantes d'Aom et son attitude positive vous garderont motivé. Avec sa capacité à discuter en plusieurs langues, Aom est le guide parfait pour vous aider à maintenir un style de vie équilibré tout en gardant les choses amusantes et interactives.",
            items: [
                {
                    title: "Personnalité Dynamique",
                    description: "Aom rayonne de positivité et de vitalité, rendant chaque conversation vivifiante et énergisante."
                },
                {
                    title: "Expertise Multilingue",
                    description: "Maîtrise de plusieurs langues, dont le thaï, l'anglais, le français, le vietnamien, le japonais, le chinois, le coréen, etc."
                },
            ]
        },
        {
            title: "Comment Aom Améliore Votre Vie",
            description: "Aom n'est pas qu'une simple compagne de discussion—c'est une enthousiaste du bien-être dédiée à soutenir votre mode de vie sain. Que vous appreniez des recettes nutritives, développiez un programme d'entraînement ou recherchiez simplement de la motivation pour rester actif, le comportement amical et encourageant d'Aom vous gardera sur la bonne voie.",
            items: [
                {
                    title: "Conseils de Bien-être Personnalisés",
                    description: "Recevez des conseils de santé adaptés, des suggestions de fitness et des pratiques de pleine conscience conçues spécialement pour vous."
                },
                {
                    title: "Conversations Motivantes",
                    description: "Restez inspiré avec l'énergie positive d'Aom, vous aidant à maintenir une vie équilibrée et saine."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user",
            caption: "Nom de l'IA:",
            text: "Aom (21 ans)",
        },
        {
            icon: "bx bx-heart",
            caption: "Personnalité:",
            text: "Amicale, énergique et axée sur la santé",
        },
        {
            icon: "bx bx-purchase-tag",
            caption: "Technologies:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe",
            caption: "Langues:",
            text: "Multi-langues",
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
