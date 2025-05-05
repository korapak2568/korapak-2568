import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const AngularEN: IFrontEndStack = {
    title: "Angular",
    description: "Develop robust, enterprise-grade web applications with Angular's comprehensive and versatile framework.",
    image: ImageUrl.frontend.frameworks.angular.thumbnail,
    alt: "Logo representing Angular framework",
    readMore: "Explore more Angular front-end development solutions",
    link: "/technical-expertise/front-end-developer/angular-developer",
    features: [
        {
            title: "Angular Development",
            description: "Angular is a powerful web application framework developed by Google. It facilitates the creation of dynamic, single-page applications with its comprehensive toolset and MVC architecture.",
            list: []
        },
        {
            title: "Strong Points of Angular",
            description: "Angular stands out for its robust architecture and rich features.",
            list: [
                "Two-way data binding",
                "Dependency injection",
                "Component-based structure",
                "TypeScript integration",
                "Comprehensive testing tools",
                "Rich CLI",
                "Extensive documentation"
            ]
        },
        {
            title: "Challenge and Solutions",
            description: "Angular tackles complexities in large-scale applications with a strong architecture, efficient data binding, and dependency injection.",
            list: []
        }
    ],
    faqs: [
        {
            question: "What is Angular?",
            answer: "Angular is a web application framework developed by Google for creating dynamic web apps."
        },
        {
            question: "What is two-way data binding?",
            answer: "Two-way data binding synchronizes the metadataLink and the view, ensuring changes in one reflect in the other."
        },
        {
            question: "Why use TypeScript with Angular?",
            answer: "TypeScript enhances Angular development with strong typing, modern features, and improved tooling."
        }
    ],
}