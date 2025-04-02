import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/data/image/ImageUrl";

export const NextjsDE: IFrontEndStack = {
    title: "NextJS",
    description: "Verbessern Sie Ihre React-Anwendungen mit nahtlosem serverseitigen Rendering und statischer Seitengenerierung für optimale Leistung.",
    image: ImageUrl.frontend.nextjs.path,
    alt: "Logo, das das Next.js-Framework repräsentiert",
    readMore: "Entdecken Sie weitere NextJS-Frontend-Entwicklungslösungen",
    link: "/technical-expertise/front-end-developer/nextjs-developer",
    features: [
        {
            title: "NextJS-Entwicklung",
            description: "Next.js ist ein führendes React-Framework, das serverseitiges Rendering und statische Seitengenerierung bietet und leistungsstarke, SEO-freundliche Webanwendungen mit minimaler Konfiguration liefert. Perfekt für moderne Webentwicklungsanforderungen.",
            list: []
        },
        {
            title: "Stärken von NextJS",
            description: "NextJS zeichnet sich durch seine robusten Funktionen aus",
            list: [
                "Serverseitiges Rendering",
                "Statische Seitengenerierung",
                "Automatische Code-Aufteilung",
                "API-Routen",
                "Inkrementelle statische Regenerierung",
                "Integrierte CSS- und Sass-Unterstützung",
                "Hervorragende Entwicklererfahrung"
            ]
        },
        {
            title: "Herausforderungen und Lösungen",
            description: "Next.js bewältigt Webentwicklungsherausforderungen, indem es Lösungen für Leistung, Skalierbarkeit und SEO bietet und so eine optimale Anwendungsbereitstellung gewährleistet.",
            list: []
        }
    ],
    faqs: [
        {
            question: "Was ist Next.js?",
            answer: "Next.js ist ein React-Framework, das serverseitiges Rendering und statische Seitengenerierung für optimierte Webanwendungen bietet."
        },
        {
            question: "Wie verbessert serverseitiges Rendering in Next.js die Leistung?",
            answer: "Serverseitiges Rendering verbessert die Leistung, indem Seiten auf dem Server vorgerendert werden, was die clientseitige Renderingzeit reduziert."
        },
        {
            question: "Was ist statische Seitengenerierung in Next.js?",
            answer: "Statische Seitengenerierung rendert Seiten zur Build-Zeit vor und sorgt für schnelle Ladezeiten und verbessertes SEO."
        }
    ]
}