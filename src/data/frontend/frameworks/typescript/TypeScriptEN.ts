import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ImageUrl} from "@/image/ImageUrl";

export const TypeScriptEN: IFrontEndStack = {
    title: "TypeScript",
    description: "TypeScript is a strongly-typed superset of JavaScript that adds static types, enhancing the development experience by catching errors early and improving code quality. It compiles to plain JavaScript, making it compatible with all browsers and frameworks.",
    image: ImageUrl.frontendThumbnails.typescript.path,
    alt: "Logo representing TypeScript programming language",
    readMore: "Explore more TypeScript full-stack development solutions",
    link: "/technical-expertise/front-end-developer/typescript-developer",
    features: [
        {
            title: "TypeScript Development",
            description: "TypeScript enhances development by introducing static typing and object-oriented programming features, allowing developers to build scalable and maintainable applications with confidence.",
            list: []
        },
        {
            title: "Enhanced Code Quality",
            description: "TypeScript's type-checking features ensure that potential errors are caught during the development phase, reducing runtime errors and improving maintainability for large-scale projects.",
            list: [
                "Static typing",
                "Advanced error checking",
                "Improved code quality",
                "Enhanced IDE support",
                "Scalable application architecture",
                "Large community support"
            ]
        },
        {
            title: "Improved Developer Productivity",
            description: "With features like type inference, interfaces, and generics, TypeScript makes managing complex codebases easier. It integrates seamlessly with modern tools, boosting productivity and collaboration.",
            list: []
        },
        {
            title: "Seamless Integration with Frameworks",
            description: "TypeScript integrates effortlessly with popular JavaScript frameworks such as React, Angular, and Vue.js. Developers can gradually adopt TypeScript in existing JavaScript projects, ensuring compatibility and scalability.",
            list: []
        }
    ],
    faqs: [
        {
            question: "What is TypeScript?",
            answer: "TypeScript is a superset of JavaScript that adds static typing and other advanced features for improved development."
        },
        {
            question: "Why use TypeScript over JavaScript?",
            answer: "TypeScript's static typing and robust tooling catch errors early, improve code quality, and enhance developer productivity."
        },
        {
            question: "Can TypeScript work with JavaScript frameworks?",
            answer: "Yes, TypeScript is fully compatible with JavaScript frameworks such as React, Angular, and Vue.js."
        }
    ],
}