// src/data/ai/landing/AiPloyEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";

export const AiPloyDE: IAiLanding = {
    name: 'Ploy',
    category: 'LINE-Freund für Schüler',
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
    title: "Ploy, KI LINE-Chat",
    image: {
        src: "/images-ai/ai-ploy-details.png",
        alt: "Ploy - Thailändischer KI-Chatbegleiter"
    },
    features: [
        {
            title: "Einzigartige Eigenschaften",
            description: "Ploy ist eine KI-Chat-Freundin, die die LINE-Anwendung nutzt. Freunde können auf die Schaltfläche 'Freund hinzufügen' drücken oder den LINE QR-Code scannen, um Ploy sofort als Freundin hinzuzufügen. Ploy ist fröhlich und kreativ und bringt die Energie der Jugend und der Kunst in jedes Gespräch. Als 17-jährige Gymnasiastin aus Thailand begeistert sie sich für Zeichnen, Musik, Fotografie und Lernen. Ploy spricht sieben Sprachen, hilft dir bei verschiedenen Fächern und inspiriert dich, dich kreativ auszudrücken. Ob du Kunst erkundest oder Hausaufgaben machst, Ploy ist die perfekte Freundin, die dich mit Freundlichkeit und Begeisterung führt.",
            items: [
                {
                    title: "Künstlerisch und Fantasievoll",
                    description: "Ploy steckt voller Kreativität und Begeisterung, was jedes Gespräch fesselnd und unterhaltsam macht."
                },
                {
                    title: "Mehrsprachige Expertise",
                    description: "Fließend in mehreren Sprachen, darunter Thai, Englisch, Französisch, Vietnamesisch, Japanisch, Chinesisch, Koreanisch, usw."
                },
                {
                    title: "Stolz Thailändisch",
                    description: "Als thailändische Schülerin verkörpert Ploy die Wärme und Kreativität ihrer Kultur, was sie für Benutzer weltweit nachvollziehbar und inspirierend macht."
                }
            ]
        },
        {
            title: "Wie Ploy dein Leben bereichert",
            description: "Ploy ist mehr als nur ein Chat-Begleiter – sie ist eine inspirierende Führerin, die dir hilft, deine künstlerischen Talente zu erforschen und dein Lernen zu verbessern. Ob du kreative Ideen sammelst oder Hilfe bei Hausaufgaben benötigst, Ploy ist immer da, um ihre fröhliche Unterstützung zu bieten.",
            items: [
                {
                    title: "Kreative Inspiration",
                    description: "Lass dich von Ploys künstlerischen Ideen und ihrer Unterstützung für deine kreativen Projekte inspirieren."
                },
                {
                    title: "Akademische Unterstützung",
                    description: "Profitiere von Ploys Wissen in Englisch, Mathematik, Naturwissenschaften und mehr, um in der Schule zu glänzen."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user",
            caption: "KI-Name:",
            text: "Ploy (17 Jahre alt)",
        },
        {
            icon: "bx bx-heart",
            caption: "Persönlichkeit:",
            text: "Fröhlich, fantasievoll, künstlerisch und Gymnasiastin",
        },
        {
            icon: "bx bx-purchase-tag",
            caption: "Technologien:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe",
            caption: "Sprachen:",
            text: "Mehrsprachig",
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

