import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import { ImageUrl } from "@/image/ImageUrl";

export const VueEN: IFrontEndStack = {
    title: "Vue",
    description: "Create modern, reactive web interfaces quickly with Vue's intuitive and flexible design. ",
    image: ImageUrl.frontend.frameworks.vue.thumbnail,
    alt: "Logo representing Vue.js framework",
    readMore: "Explore more VueJS front-end development solutions",
    link: "/technical-expertise/front-end-developer/vue-developer",
    features: [
        {
            title: "Vue Development",
            description: "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, with a core library focusing on the view layer.",
            list: []
        },
        {
            title: "Strong Points of Vue",
            description: "Vue.js offers a flexible and performant framework with key strengths.",
            list: [
                "Reactive data binding",
                "Component-based structure",
                "Virtual DOM",
                "Easy integration",
                "Comprehensive documentation",
                "Vue CLI",
                "Active community"
            ]
        },
        {
            title: "Challenge and Solutions",
            description: "Vue.js simplifies web development with its intuitive API, reactive data binding, and ease of integration.",
            list: []
        }
    ],
    faqs: [
        {
            question: "What is Vue.js?",
            answer: "Vue.js is a progressive JavaScript framework for building user interfaces."
        },
        {
            question: "What is the virtual DOM?",
            answer: "The virtual DOM is a lightweight copy of the actual DOM, optimizing updates and performance."
        },
        {
            question: "How does Vue.js differ from React?",
            answer: "Vue.js offers a more flexible and simpler integration compared to React's more complex setup."
        }
    ],
}