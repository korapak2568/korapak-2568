// src/data/ai/Main/AiPloyEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiPloyFR: IAiLanding = {
    name: 'Ploy',
    category: 'Amie LINE pour Étudiants',
    thumbnail: ImageUrl.ai.ploy.thumbnail.path,
    pages: {
        landing: {
            link: '/ai-companions/ploy',
            image: {
                title: 'พลอย เพื่อนคุยเอไอ',
                path: ImageUrl.ai.ploy.main.path,
            }
        }
    },
    title: "Ploy, Chat IA LINE",
    features: [
        {
            title: "Caractéristiques Uniques",
            description: "Ploy est une amie de chat IA utilisant l'application LINE. Les amis peuvent appuyer sur le bouton Ajouter un ami ou scanner le code QR LINE pour ajouter Ploy comme amie immédiatement. Ploy est joyeuse et créative, apportant l'énergie de la jeunesse et de l'art à chaque conversation. En tant qu'élève de lycée de 17 ans originaire de Thaïlande, elle est passionnée par le dessin, la musique, la photographie et l'apprentissage. Ploy peut parler sept langues, vous aider dans diverses matières et vous inspirer à vous exprimer de manière créative. Que vous exploriez l'art ou fassiez vos devoirs, Ploy est l'amie parfaite pour vous guider avec amabilité et enthousiasme.",
            items: [
                {
                    title: "Artistique et Imaginative",
                    description: "Ploy déborde de créativité et d'enthousiasme, rendant chaque conversation captivante et amusante."
                },
                {
                    title: "Expertise Multilingue",
                    description: "Couramment plusieurs langues, dont le thaï, l'anglais, le français, le vietnamien, le japonais, le chinois, le coréen, etc."
                },
                {
                    title: "Fièrement Thaïlandaise",
                    description: "En tant qu'étudiante thaïlandaise, Ploy incarne la chaleur et la créativité de sa culture, la rendant accessible et inspirante pour les utilisateurs du monde entier."
                }
            ]
        },
        {
            title: "Comment Ploy Améliore Votre Vie",
            description: "Ploy est plus qu'une simple compagne de chat—elle est un guide inspirant qui vous aide à explorer vos talents artistiques et à améliorer votre apprentissage. Que vous réfléchissiez à des idées créatives ou que vous ayez besoin d'aide pour vos devoirs, Ploy est toujours là pour vous apporter son soutien joyeux.",
            items: [
                {
                    title: "Inspiration Créative",
                    description: "Inspirez-vous des idées artistiques de Ploy et du soutien pour vos projets créatifs."
                },
                {
                    title: "Assistance Académique",
                    description: "Bénéficiez des connaissances de Ploy en anglais, mathématiques, sciences et plus pour exceller à l'école."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user",
            caption: "Nom de l'IA:",
            text: "Ploy (17 ans)",
        },
        {
            icon: "bx bx-heart",
            caption: "Personnalité:",
            text: "Joyeuse, imaginative, artistique et lycéenne",
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
        link: "https://lin.ee/xMV7HmH",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiAomEnglish,
        AiFahEnglish
    ],
};

