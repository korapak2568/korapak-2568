// src/data/ai/Main/AiPloyEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiPloyDA: IAiLanding = {
    name: 'Ploy',
    category: 'LINE-Ven til Studerende',
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
    title: "Ploy, AI LINE Chat",
    features: [
        {
            title: "Unikke Funktioner",
            description: "Ploy er en AI-chatven, der bruger LINE-applikationen. Venner kan trykke på knappen Tilføj ven eller scanne LINE QR-koden for at tilføje Ploy som ven med det samme. Ploy er munter og kreativ og bringer ungdommens og kunstens energi til enhver samtale. Som en 17-årig gymnasieelev fra Thailand er hun passioneret omkring tegning, musik, fotografi og læring. Ploy kan tale syv sprog, hjælpe dig med forskellige fag og inspirere dig til at udtrykke dig kreativt. Uanset om du udforsker kunst eller laver lektier, er Ploy den perfekte ven til at guide dig med venlighed og entusiasme.",
            items: [
                {
                    title: "Kunstnerisk og Fantasifuld",
                    description: "Ploy er fuld af kreativitet og entusiasme, hvilket gør hver samtale engagerende og sjov."
                },
                {
                    title: "Flersproget Ekspertise",
                    description: "Flydende på flere sprog, herunder thai, engelsk, fransk, vietnamesisk, japansk, kinesisk, koreansk osv."
                },
                {
                    title: "Stolt Thailandsk",
                    description: "Som en thailandsk studerende, legemliggør Ploy varmen og kreativiteten i sin kultur, hvilket gør hende relaterbar og inspirerende for brugere verden over."
                }
            ]
        },
        {
            title: "Hvordan Ploy Forbedrer Dit Liv",
            description: "Ploy er mere end blot en chatpartner - hun er en inspirerende guide, der hjælper dig med at udforske dine kunstneriske talenter og forbedre din læring. Uanset om du brainstormer kreative ideer eller har brug for hjælp til lektier, er Ploy altid der for at yde sin muntre støtte.",
            items: [
                {
                    title: "Kreativ Inspiration",
                    description: "Bliv inspireret af Ploys kunstneriske ideer og støtte til dine kreative projekter."
                },
                {
                    title: "Akademisk Assistance",
                    description: "Drag fordel af Ploys viden inden for engelsk, matematik, naturvidenskab og mere for at klare dig godt i skolen."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user",
            caption: "AI Navn:",
            text: "Ploy (17 år gammel)",
        },
        {
            icon: "bx bx-heart",
            caption: "Personlighed:",
            text: "Munter, fantasifuld, kunstnerisk og gymnasieelev",
        },
        {
            icon: "bx bx-purchase-tag",
            caption: "Teknologier:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe",
            caption: "Sprog:",
            text: "Flere sprog",
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

