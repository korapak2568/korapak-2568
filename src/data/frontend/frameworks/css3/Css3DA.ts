import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const Css3DA: IFrontEndStack = {
    title: "CSS3",
    description: "Forbedre din hjemmesides udseende med avancerede styling-teknikker ved hjælp af CSS3.",
    image: ImageUrl.frontendThumbnails.css3.path,
    alt: "Logo der repræsenterer CSS3-teknologi",
    readMore: "Udforsk flere CSS3 front-end udviklingsløsninger",
    link: "/technical-expertise/front-end-developer/css3-developer",
    features: [
        {
            title: "CSS3 Responsivt Design",
            description: "CSS3 er den seneste udvikling af Cascading Style Sheets, der tilbyder avancerede funktioner til at forbedre den visuelle præsentation af websider.",
            list: []
        },
        {
            title: "Stærke sider ved CSS3",
            description: "CSS3 bringer moderne styling-muligheder til webudvikling.",
            list: [
                "Avancerede selektorer",
                "Fleksibelt box-layout",
                "Grid-layout",
                "Animationer og overgange",
                "Medieforespørgsler",
                "Brugerdefinerede egenskaber",
                "Forbedret typografi"
            ]
        },
        {
            title: "Udfordringer og Løsninger",
            description: "CSS3 imødekommer efterspørgslen på responsivt, visuelt tiltalende webdesign med kraftfulde nye funktioner.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Hvad er CSS3?",
            answer: "CSS3 er den nyeste version af Cascading Style Sheets, der tilbyder nye funktioner til webstyling."
        },
        {
            question: "Hvad er medieforespørgsler?",
            answer: "Medieforespørgsler muliggør responsive designs ved at anvende stile baseret på enhedskarakteristika."
        },
        {
            question: "Hvad er Flexbox-layout?",
            answer: "Flexbox-layout giver en mere effektiv måde at designe layouts, fordele plads og justere elementer."
        },
        {
            question: "Hvad er populære CSS-frameworks?",
            answer: "De populære CSS-frameworks er Bootstrap, Tailwind CSS, Bulma, Foundation og Materialize."
        }
    ]
}