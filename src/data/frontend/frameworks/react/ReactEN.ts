import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import { ImageUrl } from "@/image/ImageUrl";

export const ReactEN: IFrontEndStack = {
    title: "React",
    description: "Build dynamic, high-performance user interfaces effortlessly with React's powerful component-based architecture.",
    image: ImageUrl.frontend.frameworks.react.thumbnail,
    alt: "Logo representing React.js library",
    readMore: "Explore more ReactJS front-end development solutions",
    link: "/technical-expertise/front-end-developer/react-developer",
    features: [
        {
            title: "React Development",
            description: "React.js is a popular JavaScript library for building user interfaces. It enables developers to create reusable UI components, enhancing development efficiency and application performance.",
            list: []
        },
        {
            title: "Strong Points of React.js",
            description: "React.js offers a robust set of features that make it a preferred choice for developers.",
            list: [
                "Component-based architecture",
                "Virtual DOM for improved performance",
                "Unidirectional data flow",
                "JSX syntax",
                "Rich ecosystem and community",
                "React Hooks",
                "Extensive developer tools"
            ]
        },
        {
            title: "Challenge and Solutions",
            description: "React.js addresses challenges in dynamic UI development with a virtual DOM, component reusability, and an active community.",
            list: []
        }
    ],
    faqs: [
        {
            question: "What is React.js?",
            answer: "React.js is a JavaScript library for building user interfaces, maintained by Facebook."
        },
        {
            question: "What are React Hooks?",
            answer: "React Hooks are functions that let you use state and lifecycle features in functional components."
        },
        {
            question: "How does the virtual DOM work?",
            answer: "The virtual DOM updates only the changed elements, improving application performance."
        }
    ],
}