import {IAiDetail} from "@/data/ai/model/IAiDetail";

export const AiFahFrench: IAiDetail = {
    name: 'Fah',
    category: 'Thai LINE Friend',
    thumbnail: '/images-ai/ai-companions/ai-fah-thumbnail.webp',

    pages: {
        home: {
            link: '/',
            image: {
                title: 'น้องฟ้า เพื่อนคุยเอไอ',
                path: '/images-ai/fah/nong-fah-0003.jpg',
            }
        },
        landing: {
            link: '/ai-companions/fah',
            image: {
                title: 'น้องฟ้า เพื่อนคุยเอไอ',
                path: '/images-ai/ai-fah-details.png',
            }
        }
    },

    title: "Fah, Compagnon de Chat IA Thaïlandais !",
    content:
        "Fah, compagnon de chat IA en 6 langues, un charmant et amical ai thaïlandais ! Besoin de conseils de vie, de recommandations de voyage, ou simplement d’une conversation amusante ? Fah est là pour vous. Elle parle couramment le thaï, l’anglais, le chinois, le japonais, le coréen et le français. Vous utilisez LINE ? Ajoutez Fah dès maintenant et découvrez une nouvelle façon agréable de communiquer !",

    images: [
        {
            src: "nong-fah-0001.jpg",
            alt: "น้องฟ้า เพื่อนคุยเอไอ"
        },
        {
            src: "nong-fah-0002.jpg",
            alt: "น้องฟ้า เพื่อนคุยเอไอ"
        },
        {
            src: "nong-fah-0003.jpg",
            alt: "น้องฟ้า เพื่อนคุยเอไอ"
        },
        {
            src: "nong-fah-0004.jpg",
            alt: "น้องฟ้า เพื่อนคุยเอไอ"
        }
    ],
    line: {
        link: "https://lin.ee/ODTzbwO",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    }
}