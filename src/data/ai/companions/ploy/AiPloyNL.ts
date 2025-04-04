// src/data/ai/landing/AiPloyEN.ts

import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiFahEnglish} from "@/data/ai/relevant/AiFahEnglish";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {ImageUrl} from "@/data/image/ImageUrl";

export const AiPloyNL: IAiLanding = {
    name: 'Ploy',
    category: 'LINE-Vriend voor Studenten',
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
            title: "Unieke Kenmerken",
            description: "Ploy is een AI-chatvriend die de LINE-applicatie gebruikt. Vrienden kunnen op de knop Vriend toevoegen drukken of de LINE QR-code scannen om Ploy meteen als vriend toe te voegen. Ploy is vrolijk en creatief en brengt de energie van jeugd en kunst in elk gesprek. Als 17-jarige middelbare scholier uit Thailand is ze gepassioneerd door tekenen, muziek, fotografie en leren. Ploy spreekt zeven talen, helpt je bij verschillende vakken en inspireert je om jezelf creatief te uiten. Of je nu kunst verkent of huiswerk maakt, Ploy is de perfecte vriend om je te begeleiden met vriendelijkheid en enthousiasme.",
            items: [
                {
                    title: "Artistiek en Fantasierijk",
                    description: "Ploy bruist van creativiteit en enthousiasme, waardoor elk gesprek boeiend en leuk wordt."
                },
                {
                    title: "Meertalige Expertise",
                    description: "Vloeiend in meerdere talen, waaronder Thai, Engels, Frans, Vietnamees, Japans, Chinees, Koreaans, etc."
                },
                {
                    title: "Trots Thais",
                    description: "Als Thaise scholiere belichaamt Ploy de warmte en creativiteit van haar cultuur, waardoor ze herkenbaar en inspirerend is voor gebruikers wereldwijd."
                }
            ]
        },
        {
            title: "Hoe Ploy Je Leven Verrijkt",
            description: "Ploy is meer dan alleen een chatpartner - ze is een inspirerende gids die je helpt je artistieke talenten te ontdekken en je leerproces te verbeteren. Of je nu creatieve ideeën aan het bedenken bent of hulp nodig hebt bij huiswerk, Ploy is er altijd om haar vrolijke ondersteuning te bieden.",
            items: [
                {
                    title: "Creatieve Inspiratie",
                    description: "Raak geïnspireerd door Ploy's artistieke ideeën en ondersteuning voor je creatieve projecten."
                },
                {
                    title: "Academische Ondersteuning",
                    description: "Profiteer van Ploy's kennis in Engels, wiskunde, natuurwetenschappen en meer om uit te blinken op school."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user",
            caption: "AI Naam:",
            text: "Ploy (17 jaar)",
        },
        {
            icon: "bx bx-heart",
            caption: "Persoonlijkheid:",
            text: "Vrolijk, fantasierijk, artistiek, en middelbare scholier",
        },
        {
            icon: "bx bx-purchase-tag",
            caption: "Technologieën:",
            text: "LLM, AI, LINE",
        },
        {
            icon: "bx bx-globe",
            caption: "Talen:",
            text: "Meerdere talen",
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

