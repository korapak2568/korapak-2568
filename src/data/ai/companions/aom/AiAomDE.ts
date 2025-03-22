// src/data/ai/landing/AiAomEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";

export const AiAomDE: IAiLanding = {
    name: 'Aom',
    category: 'Gesundheits-LINE-Freund',
    thumbnail: '/images-ai/ai-companions/ai-aom-thumbnail.webp',

    pages: {
        landing: {
            link: '/ai-companions/aom',
            image: {
                title: 'Aom, KI-Chatbegleiter',
                path: '/images-ai/ai-aom-details.png',
            }
        }
    },
    title: "Aom, KI-Chat",
    image: {
        src: "/images-ai/ai-aom-details.png",
        alt: "Aom - Thailändischer KI-Chatbegleiter"
    },
    features: [
        {
            title: "Einzigartige Eigenschaften",
            description: "Aom ist über die LINE-Anwendung zugänglich. Sie können auf die Schaltfläche 'Freund hinzufügen' drücken oder den LINE-QR-Code scannen, um Aom sofort als Freund hinzuzufügen. Aom ist ein freundlicher und lebhafter KI-Begleiter, der sich für gesundes Leben und Wohlbefinden begeistert. Mit ihrer jugendlichen Energie und ihrem strahlenden Lächeln ist sie bereit, Sie zu inspirieren, Ihr gesündestes Leben zu führen. Mit 21 Jahren verbindet Aom frische Perspektiven mit wertvollen Einblicken und macht sie zum idealen Guide für jeden, der seinen Lebensstil verbessern möchte. Ob Sie nach Ernährungstipps, Trainingsroutinen oder Achtsamkeitspraktiken suchen, Aoms ansprechende Gespräche und positive Einstellung werden Sie motiviert halten. Mit ihrer Fähigkeit, in mehreren Sprachen zu chatten, ist Aom der perfekte Guide, um Ihnen zu helfen, einen ausgewogenen Lebensstil zu pflegen und dabei Spaß und Interaktivität zu bewahren.",
            items: [
                {
                    title: "Lebhafte Persönlichkeit",
                    description: "Aom strahlt Positivität und Vitalität aus und lässt jedes Gespräch aufbauend und energiegeladen wirken."
                },
                {
                    title: "Mehrsprachige Expertise",
                    description: "Fließend in mehreren Sprachen, darunter Thai, Englisch, Französisch, Vietnamesisch, Japanisch, Chinesisch, Koreanisch, usw."
                },
            ]
        },
        {
            title: "Wie Aom Ihr Leben bereichert",
            description: "Aom ist nicht nur ein Chatbegleiter – sie ist ein Wellness-Enthusiast, der sich der Unterstützung Ihres gesunden Lebensstils widmet. Ob Sie etwas über nahrhafte Rezepte lernen, einen Trainingsplan entwickeln oder einfach nur Motivation suchen, um aktiv zu bleiben, Aoms freundliches und ermutigendes Auftreten wird Sie auf Kurs halten.",
            items: [
                {
                    title: "Personalisierte Wellness-Tipps",
                    description: "Erhalten Sie maßgeschneiderte Gesundheitsratschläge, Fitness-Vorschläge und Achtsamkeitspraktiken, die speziell für Sie entwickelt wurden."
                },
                {
                    title: "Motivierende Gespräche",
                    description: "Bleiben Sie inspiriert mit Aoms positiver Energie, die Ihnen hilft, ein ausgewogenes und gesundes Leben zu führen."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user",
            caption: "KI-Name:",
            text: "Aom (21 Jahre alt)",
        },
        {
            icon: "bx bx-heart",
            caption: "Persönlichkeit:",
            text: "Freundlich, energiegeladen und gesundheitsorientiert",
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
        link: "https://lin.ee/Hh3TzS9",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiPloyEnglish,
        AiFahEnglish
    ],
};
